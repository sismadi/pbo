// Definisi class Mahasiswa
class Mahasiswa {
    // Private field
    #nilai;

    constructor(nama, nim, kelas, nilai) {
        this.nama = nama;   // Atribut publik
        this.nim = nim;     // Atribut publik
        this.kelas = kelas; // Atribut publik
        this.#nilai = nilai; // Atribut privat
    }

    // Getter untuk nilai
    get nilai() {
        return this.#nilai;
    }

    // Setter untuk nilai dengan validasi
    set nilai(nilaiBaru) {
        if (nilaiBaru >= 0 && nilaiBaru <= 100) {
            this.#nilai = nilaiBaru;
            console.log(`Nilai berhasil diubah menjadi ${this.#nilai}`);
        } else {
            console.log("Nilai harus antara 0 dan 100");
        }
    }

    // Method tambahan
    tampilkanData() {
        console.log(`Nama   : ${this.nama}`);
        console.log(`NIM    : ${this.nim}`);
        console.log(`Kelas  : ${this.kelas}`);
        console.log(`Nilai  : ${this.#nilai}`);
    }
}

// ==============================
// Contoh penggunaan
// ==============================

let mhsIlqi = new Mahasiswa("Ilqi", "202401110092", "IP241", 85);

console.log("=== Data Mahasiswa Awal ===");
mhsIlqi.tampilkanData();

// Ubah nilai (valid)
console.log("\n=== Ubah Nilai ke 95 ===");
mhsIlqi.nilai = 95; // pakai setter
console.log("Nilai sekarang:", mhsIlqi.nilai); // pakai getter

// Ubah nilai (tidak valid)
console.log("\n=== Ubah Nilai ke 120 (tidak valid) ===");
mhsIlqi.nilai = 120;
console.log("Nilai sekarang:", mhsIlqi.nilai);
