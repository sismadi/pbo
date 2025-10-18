// Abstraksi
class Kendaraan {
  constructor(merk) {
    this.merk = merk;
    if (this.constructor === Kendaraan) {
        throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
    }
  }

  // Method abstrak
  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
}

class Mobil extends Kendaraan {
  maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}

const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // Toyota Avanza melaju dengan kecepatan tinggi!

// Interface sebagai objek blueprint
const kendaraanInterface = {
  maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
};

class Sepeda {
  constructor(merk) {
    this.merk = merk;
  }

  maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
  }
}

// Menguji apakah Sepeda mematuhi interface
const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // Polygon melaju dengan tenaga manusia!
 
if (typeof polygon.maju !== "function") {
  throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
 }

// Abstraksi
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

class KartuKredit extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
  } }
class PayPal extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui 
PayPal berhasil!`;
  } }
 // Implementasi
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); // Pembayaran 500000 melalui Kartu Kredit berhasil!
 
const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); // Pembayaran 250000 melalui PayPal berhasil!
