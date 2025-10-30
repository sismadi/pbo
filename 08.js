try { let mahasiswa = ["Andi", "Budi", "Citra"];
console.log(mahasiswa[5].toUpperCase());
} catch (error) {
console.log("Terjadi error: " + error.message);
} finally { console.log("Proses selesai.");}:


function cekUsia(usia) {
if (usia < 18) {
throw new Error("Maaf, Anda belum cukup
umur!");
}
return "Selamat datang!";
}

try {
console.log(cekUsia(16));
} catch (error) {
console.log("Terjadi kesalahan: " +
error.message);
}


class ValidasiError extends Error {
constructor(pesan) { super(pesan);
this.name = "ValidasiError"; }}
function cekNama(nama) {
if (nama.length < 3) {
throw new ValidasiError("Nama terlalu
pendek!"); }
return `Nama valid: ${nama}`;}



