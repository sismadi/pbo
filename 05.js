// Kelas induk (superclass)
class Hewan {
 constructor(nama, jenis) {
 this.nama = nama;
 this.jenis = jenis;
 }
 suara() {
 return `${this.nama} bersuara...`;
 }
}
