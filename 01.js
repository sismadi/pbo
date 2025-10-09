class Sepatu {
 constructor(merk, warna) {
  this.merk = merk;
  this.warna = warna;
 }
 info() {
  return `Sepatu ini adalah ${this.merk} berwarna ${this.warna}.`;
 }
}
const brodo = new Sepatu("sepatu Brodo", "abu-abu");
console.log(brodo.info())
