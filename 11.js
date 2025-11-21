//Materi Pertemuan 9_PBO_Code

//Map
let mahasiswa = new Map();
mahasiswa.set("001", "Andi");
mahasiswa.set("002", "Budi");
mahasiswa.set("003", "Vera");
mahasiswa.set("004", "Putra");
mahasiswa.set("002", "Hilda");

 console.log(mahasiswa.get("001")); // Output: Andi
 console.log(mahasiswa.get("002")); // Output: Hilda
 console.log(mahasiswa.get("003")); // Output: Vera
 console.log(mahasiswa.get("004")); // Output: Putra

//List
let mahasiswi = ["Andi", "Budi", "Hilda", "Damayanti"];
console.log(mahasiswi[2]); // Output: Hilda

//Set
let angka = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log(angka); // Output: {1, 2, 3, 4, 5}

//3.1. Sistem Manajemen Mahasiswa
let mahasiswa = new Map();
mahasiswa.set("22001", { nama: "Hilda", jurusan: "Informatika" });
mahasiswa.set("22002", { nama: "Budi", jurusan: "Sistem Informasi" });
console.log(mahasiswa.get("22001").nama); // Output: Hilda
console.log(mahasiswa.get("22001").jurusan); // Output: Informatika

//3.2. Aplikasi Todo List
let tugas = new Set();
tugas.add("Belajar OOP");
tugas.add("Mengerjakan Tugas");
tugas.add("Belajar OOP"); // Tidak akan ditambahkan lagi
console.log(tugas); // Output: { 'Belajar OOP', 'Mengerjakan Tugas' }

//3.2. Aplikasi Todo List
let tugas1 = new Set();
tugas1.add("Belajar OOP");
tugas1.add("Mengerjakan Tugas");
tugas1.add("Belajar OOP "); // Ditambahkan lagi karena ada spasi di akhir
console.log(tugas1); // Output: { 'Belajar OOP', 'Mengerjakan Tugas', 'Belajar OOP ' }
 
 //3.3. Analisis Data
 // Data transaksi dalam bentuk array of objects
 let transaksi = [
   { user: "Andi", jumlah: 50000, kategori: "Makanan" },
   { user: "Budi", jumlah: 75000, kategori: "Transportasi" },
   { user: "Andi", jumlah: 20000, kategori: "Minuman" },
   { user: "Hilda", jumlah: 100000, kategori: "Belanja" },
   { user: "Budi", jumlah: 50000, kategori: "Makanan" }
 ];
 
 // Analisis: Total pengeluaran per user
 let totalPerUser = {};
 transaksi.forEach(trx => {
   if (!totalPerUser[trx.user]) {
     totalPerUser[trx.user] = 0;
   }
   totalPerUser[trx.user] += trx.jumlah;
 });
 console.log(totalPerUser);
 // Output: { Andi: 70000, Budi: 125000, Hilda: 100000 }

//Materi Pertemuan 10_PBO_Code
<script>

const mahasiswa = [
 { nama: "Hilda", umur: 21, jurusan: "Informatika" },
 { nama: "Budi", umur: 22, jurusan: "Sistem Informasi" }
];
// Simpan ke localStorage
localStorage.setItem("mahasiswa",JSON.stringify(mahasiswa));
console.log("Data mahasiswa disimpan di localStorage!");


// Ambil kembali dari localStorage
const jsonString = localStorage.getItem("mahasiswa");
const mahasiswaList = JSON.parse(jsonString);
console.log("Daftar Mahasiswa:");
mahasiswaList.forEach(mhs =>
 console.log(`${mhs.nama} - ${mhs.jurusan}`)
);


</script>

