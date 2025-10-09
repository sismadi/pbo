class Mobil {
constructor(merk, warna) {
this.merk = merk;
this.warna = warna;
}
info() {
return `Mobil ini adalah ${this.merk} berwarna ${this.warna}.`;
}
}
const avanza = new Mobil("Toyota Avanza", "Hitam");
console.log(avanza.info());
