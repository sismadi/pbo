const mahasiswa = {
    nama: "Andi",
    umur: 21,
    jurusan: "Informatika"
};

// Konversi objek ke JSON
const jsonData = JSON.stringify(mahasiswa);
fs.writeFileSync('mahasiswa.json', jsonData);
console.log("Data mahasiswa telah disimpan!");
