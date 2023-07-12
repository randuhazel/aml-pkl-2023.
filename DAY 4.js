// Mengembalikan nama kalian

function namaaja() {
  const nama = 'Randu Hazel';
  return nama;
}

console.log(namaaja());

// Perkalian

function kali(x, y) {
  return x * y;
}

let hasilkali = kali(9, 2);
console.log("Hasil perkalian:", hasilkali);

// Biodata

function data_diri(nama, umur, alamat, hobby, notlp) {
  console.log("Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", hobby saya adalah " + hobby +", dan notlp saya " + notlp + ".");
}

data_diri("Randu", 17, "RIAU", "berenang", "081276343102");