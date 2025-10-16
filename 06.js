// 1. Egi
// 2. Jorday
// 3. Reyshan
// 4. Bryan

// ===============================
// KELAS ABSTRAK: KENDARAAN
// ===============================
class Kendaraan {
    constructor(merk) {
        this.merk = merk;
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
        }
    }

    maju() {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
}

// Kelas turunan dari Kendaraan
class Mobil extends Kendaraan {
    maju() {
        return `${this.merk} melaju dengan kecepatan tinggi!`;
    }
}

// Uji coba
const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // Toyota Avanza melaju dengan kecepatan tinggi!

// ===============================
// INTERFACE SEDERHANA
// ===============================
const kendaraanInterface = {
    maju: function () {
        throw new Error("Method 'maju()' harus diimplementasikan!");
    }
};

// Kelas lain yang mematuhi interface
class Sepeda {
    constructor(merk) {
        this.merk = merk;
    }

    maju() {
        return `${this.merk} melaju dengan tenaga manusia!`;
    }
}

// Uji coba interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // Polygon melaju dengan tenaga manusia!

if (typeof polygon.maju !== "function") {
    throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}

// ===============================
// KELAS ABSTRAK: PEMBAYARAN
// ===============================
class Pembayaran {
    constructor(jumlah) {
        this.jumlah = jumlah;
        if (this.constructor === Pembayaran) {
            throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
        }
    }

    prosesPembayaran() {
        throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
    }
}

// Kelas turunan dari Pembayaran
class KartuKredit extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran sebesar Rp${this.jumlah} melalui Kartu Kredit berhasil!`;
    }
}

class PayPal extends Pembayaran {
    prosesPembayaran() {
        return `Pembayaran sebesar Rp${this.jumlah} melalui PayPal berhasil!`;
    }
}

// Implementasi / Uji coba
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran());

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran());
