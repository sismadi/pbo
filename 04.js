class Mahasiswa{
  construkto r(nama,nim,nilai){
    this.nama = nama; 
    this.nim = nim;
    let_nilai = nilai;

    //getter untuk mengakses nilai
    this.getNilai = function(){
      return_nilai;
    };
    //setter untuk mengubah nilai dengan validasi
    this.setNilai = function(nilaibaru){
      if(nilaibaru>=0&&nilaibaru<=100){
        nilai = nilaibaru;
      }else{ console.log('nilai harus antara 0 dan 100'};}
    };
   }
}




class Mahasiswa {
constructor(nama, nim, nilai) {
  this.nama = nama; 
  this.nim = nim;
  this._nilai = nilai; // Private property dengan underscore
}

// Getter menggunakan sintaks get
get nilai() {
  return this._nilai;
}

// Setter menggunakan sintaks set dengan validasi
set nilai(nilaiBaru) {
  if (nilaiBaru >= 0 && nilaiBaru <= 100) {
    this._nilai = nilaiBaru;
    console.log(`Nilai berhasil diubah menjadi ${nilaiBaru}`);
  } else {
    console.log('Error: Nilai harus antara 0 dan 100');
  }
}

// Method untuk menampilkan info mahasiswa
tampilkanInfo() {
  console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Nilai: ${this._nilai}`);
}
}

// ========== CONTOH PENGGUNAAN ==========

console.log('=== Membuat Object Mahasiswa ===');
const mahasiswa1 = new Mahasiswa('Jesen', '0072', 90);
const mahasiswa2 = new Mahasiswa('Adit', '0048', 85);
const mahasiswa3 = new Mahasiswa('Ramdani', '0058', 88);
const mahasiswa4 = new Mahasiswa('Falah', '0064', 92);
const mahasiswa5 = new Mahasiswa('Jorday', '0078', 88);

// Menampilkan info awal
mahasiswa1.tampilkanInfo();
mahasiswa2.tampilkanInfo();
mahasiswa3.tampilkanInfo();
mahasiswa4.tampilkanInfo();
mahasiswa5.tampilkanInfo();

console.log('\n=== Memanggil Getter ===');
// Menggunakan getter (seperti mengakses property biasa)
console.log(`Nilai mahasiswa1: ${mahasiswa1.nilai}`);
console.log(`Nilai mahasiswa2: ${mahasiswa2.nilai}`);
console.log(`Nilai mahasiswa3: ${mahasiswa3.nilai}`);
console.log(`Nilai mahasiswa4: ${mahasiswa4.nilai}`);
console.log(`Nilai mahasiswa5: ${mahasiswa5.nilai}`);  

console.log('\n=== Memanggil Setter (Valid) ===');
// Menggunakan setter dengan nilai valid
mahasiswa1.nilai = 95;
mahasiswa2.nilai = 78;
mahasiswa3.nilai = 82;
mahasiswa4.nilai = 97;
mahasiswa5.nilai = 91;

console.log('\n=== Memanggil Setter (Invalid) ===');
// Menggunakan setter dengan nilai tidak valid
mahasiswa1.nilai = 150; // Akan ditolak
mahasiswa2.nilai = -10; // Akan ditolak

console.log('\n=== Cek Nilai Setelah Perubahan ===');
console.log(`Nilai akhir mahasiswa1: ${mahasiswa1.nilai}`);
console.log(`Nilai akhir mahasiswa2: ${mahasiswa2.nilai}`);

console.log('\n=== Info Lengkap Mahasiswa ===');
mahasiswa1.tampilkanInfo();
