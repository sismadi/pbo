// Definisi class Mahasiswa
class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;  // Atribut publik
        this.nim = nim;    // Atribut publik
        let _nilai = nilai; // Atribut private menggunakan closure

        // Getter untuk mengakses nilai
        this.getNilai = function() {
            return _nilai;
        };

        // Setter untuk mengubah nilai dengan validasi
        this.setNilai = function(nilaiBaru) {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) {
                _nilai = nilaiBaru;
                console.log(`Nilai berhasil diubah menjadi ${_nilai}`);
            } else {
                console.log('Nilai harus antara 0 dan 100');
            }
        };
    }

    // Method tambahan untuk menampilkan data mahasiswa
    tampilkanData() {
        console.log(`Nama   : ${this.nama}`);
        console.log(`NIM    : ${this.nim}`);
        console.log(`Nilai  : ${this.getNilai()}`);
    }
}

// ==============================
// Contoh penggunaan
// ==============================

// Membuat objek mahasiswa dengan nama Anda
let mhsIlqi = new Mahasiswa("Ilqi", "202501", 85);

// Tampilkan data awal
console.log("=== Data Mahasiswa Awal ===");
mhsIlqi.tampilkanData();

// Ubah nilai ke nilai valid
console.log("\n=== Ubah Nilai ke 95 ===");
mhsIlqi.setNilai(95);
mhsIlqi.tampilkanData();

// Ubah nilai ke nilai tidak valid
console.log("\n=== Ubah Nilai ke 120 (tidak valid) ===");
mhsIlqi.setNilai(120);
mhsIlqi.tampilkanData();
