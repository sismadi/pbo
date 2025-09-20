class Mobil{
// Konstruktor untuk inisialisasi objek
constructor(merek, model, tahun) {
  this.merek = merek;   // Properti objek
  this.model = model;
  this.tahun = tahun;
}
// Metode untuk menampilkan informasi mobil
displayInfo() {
  console.log(`Mobil: ${this.merek} ${this.model} (${this.tahun})`);
}
}

// Instansiasi objek dari kelas Mobil
const mobil1 = new Mobil('Toyota', 'Corolla', 2020); 
// Membuat objek mobil1
const mobil2 = new Mobil('Honda', 'Civic', 2021);   
// Membuat objek mobil2

// Memanggil metode untuk menampilkan informasi
mobil1.displayInfo(); // Output: Mobil: Toyota Corolla (2020)
mobil2.displayInfo(); // Output: Mobil: Honda Civic (2021)
