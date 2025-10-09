class BankAccount {
#saldo; // Properti private
constructor(nama, saldoAwal) {
this.nama = nama;
this.#saldo = saldoAwal;
}
getSaldo() {
return `Saldo ${this.nama} adalah Rp${this.#saldo}`;
}
deposit(jumlah) {
this.#saldo += jumlah;
}
}

const akun = new BankAccount("Alice", 500000);
akun.nama='bayu';
akun.deposit(100000);

console.log(akun.getSaldo());
akun.deposit(200000);
console.log(akun.getSaldo());
// console.log(akun.#saldo); // Akan error karena saldo bersifat
