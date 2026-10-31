// ==========================================
// 1. DOMAIN MODELS (PBO / OOP)
// ==========================================

// Class Induk
class User {
  constructor({ id, name, email, role, avatar, created_at }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.avatar = avatar;
    this.created_at = created_at;
  }

  canManageUsers() {
    return false;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      role: this.role,
      avatar: this.avatar,
      created_at: this.created_at,
      canManageUsers: this.canManageUsers()
    };
  }
}

// Class Turunan (Inheritance)
class AdminUser extends User {
  constructor(data) {
    super(data);
  }

  canManageUsers() {
    return true; // Admin memiliki hak mengelola user lain
  }
}

class StandardUser extends User {
  constructor(data) {
    super(data);
  }

  canManageUsers() {
    return false; // User biasa hanya dapat mengelola profil sendiri
  }
}

// Factory Pattern untuk Inisialisasi Objek berdasarkan Role
class UserFactory {
  static create(data) {
    if (data.role === 'admin') {
      return new AdminUser(data);
    }
    return new StandardUser(data);
  }
}

// ==========================================
// 2. DATA ACCESS OBJECT (Repository Pattern)
// ==========================================
class UserRepository {
  constructor(db) {
    this.db = db;
  }

  async getAll() {
    const { results } = await this.db.prepare(
      "SELECT id, name, email, role, avatar, created_at FROM users ORDER BY id DESC"
    ).all();
    return results.map(u => UserFactory.create(u).toJSON());
  }

  async getById(id) {
    const user = await this.db.prepare(
      "SELECT id, name, email, role, avatar, created_at FROM users WHERE id = ?"
    ).bind(id).first();
    return user ? UserFactory.create(user).toJSON() : null;
  }

  async findByCredentials(email, password) {
    const user = await this.db.prepare(
      "SELECT id, name, email, role, avatar, created_at FROM users WHERE email = ? AND password = ?"
    ).bind(email, password).first();
    return user ? UserFactory.create(user).toJSON() : null;
  }

  async create({ name, email, password, role, avatar }) {
    const res = await this.db.prepare(
      "INSERT INTO users (name, email, password, role, avatar) VALUES (?, ?, ?, ?, ?)"
    ).bind(
      name, 
      email, 
      password, 
      role || 'user', 
      avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    ).run();
    return res.meta.last_row_id;
  }

  async update(id, { name, email, password, role, avatar }) {
    let query = "UPDATE users SET name = ?, email = ?, role = ?, avatar = ?";
    let params = [name, email, role, avatar];

    if (password && password.trim() !== "") {
      query += ", password = ?";
      params.push(password);
    }

    query += " WHERE id = ?";
    params.push(id);

    const res = await this.db.prepare(query).bind(...params).run();
    return res.success;
  }

  async delete(id) {
    const res = await this.db.prepare("DELETE FROM users WHERE id = ?").bind(id).run();
    return res.success;
  }
}

// ==========================================
// 3. WORKER ROUTER & CORS HANDLER
// ==========================================
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" }
  });
}

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;
    const repo = new UserRepository(env.DB);

    try {
      // POST /api/login
      if (path === "/api/login" && request.method === "POST") {
        const { email, password } = await request.json();
        const user = await repo.findByCredentials(email, password);
        if (!user) {
          return jsonResponse({ success: false, message: "Email atau password salah" }, 401);
        }
        return jsonResponse({ success: true, user });
      }

      // GET /api/users
      if (path === "/api/users" && request.method === "GET") {
        const users = await repo.getAll();
        return jsonResponse({ success: true, data: users });
      }

      // GET /api/users/:id
      if (path.match(/^\/api\/users\/\d+$/) && request.method === "GET") {
        const id = path.split("/")[3];
        const user = await repo.getById(id);
        if (!user) return jsonResponse({ success: false, message: "User tidak ditemukan" }, 404);
        return jsonResponse({ success: true, data: user });
      }

      // POST /api/users (Create User)
      if (path === "/api/users" && request.method === "POST") {
        const body = await request.json();
        const newId = await repo.create(body);
        const newUser = await repo.getById(newId);
        return jsonResponse({ success: true, data: newUser }, 201);
      }

      // PUT /api/users/:id (Update User / Profile)
      if (path.match(/^\/api\/users\/\d+$/) && request.method === "PUT") {
        const id = path.split("/")[3];
        const body = await request.json();
        const updated = await repo.update(id, body);
        if (!updated) return jsonResponse({ success: false, message: "Gagal memperbarui user" }, 400);
        const user = await repo.getById(id);
        return jsonResponse({ success: true, data: user });
      }

      // DELETE /api/users/:id (Delete User)
      if (path.match(/^\/api\/users\/\d+$/) && request.method === "DELETE") {
        const id = path.split("/")[3];
        const deleted = await repo.delete(id);
        return jsonResponse({ success: deleted });
      }

      return jsonResponse({ success: false, message: "Endpoint tidak ditemukan" }, 404);

    } catch (err) {
      return jsonResponse({ success: false, error: err.message }, 500);
    }
  }
};
