 let mahasiswa = new Map();
 mahasiswa.set("001", "Andi");
 mahasiswa.set("002", "Budi");
 mahasiswa.set("003", "Hilda");
 mahasiswa.set("004", "Damayanti");
 console.log(mahasiswa.get("001")); // Output: Andi
 console.log(mahasiswa.get("002")); // Output: Budi
 console.log(mahasiswa.get("003")); // Output: Hilda
 console.log(mahasiswa.get("004")); // Output: Damayanti

let mahasiswi = ["Andi", "Budi", "Hilda", "Damayanti"];
console.log(mahasiswi[2]); // Output: Hilda
 
let angka = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log(angka); // Output: {1, 2, 3, 4, 5}


let mahasiswa = new Map();
mahasiswa.set("22001", { nama: "Hilda", jurusan: "Informatika" });
mahasiswa.set("22002", { nama: "Damayanti", jurusan: "Sistem Informasi" });
console.log(mahasiswa.get("22001").nama); // Output: Hilda
console.log(mahasiswa.get("22001").jurusan); // Output: Informatika

let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP "); // Tidak akan ditambahkan lagi
console.log(tugas); // Output: { 'Belajar OOP', 'Mengerjakan Tugas' }

 let transaksi = [
   { user: "Andi", jumlah: 50000, kategori: "Makanan" },
   { user: "Budi", jumlah: 75000, kategori: "Transportasi" },
   { user: "Andi", jumlah: 20000, kategori: "Minuman" },
   { user: "Citra", jumlah: 100000, kategori: "Belanja" },
   { user: "Budi", jumlah: 50000, kategori: "Makanan" }
 ];

 let totalPerUser = {};
 transaksi.forEach(trx => {
   if (!totalPerUser[trx.user]) {
     totalPerUser[trx.user] = 0;
   }
   totalPerUser[trx.user] += trx.jumlah;
 });
 console.log(totalPerUser);
