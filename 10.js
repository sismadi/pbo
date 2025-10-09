const mahasiswa = {
    nama: "Ilqi",
    umur: 19,
    jurusan: "Informatika"
};

// Konversi objek ke JSON
const jsonData = JSON.stringify(mahasiswa);
fs.writeFileSync('mahasiswa.json', jsonData);
console.log("Data mahasiswa telah disimpan!");
