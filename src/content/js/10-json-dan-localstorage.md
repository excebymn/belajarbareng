---
jenis: murid
bab: js
urutan: 10
judul: "JSON dan localStorage"
deskripsi: "Memahami format JSON, mengubah object menjadi teks dan sebaliknya dengan JSON.stringify dan JSON.parse, serta menyimpan data di browser dengan localStorage."
---

# JSON dan localStorage

Pada materi ini kamu akan mempelajari: apa itu JSON dan aturan penulisannya, cara mengubah object menjadi teks JSON dan sebaliknya, penanganan error dengan `try...catch`, serta cara menyimpan data di browser dengan `localStorage`.

Sebelum mulai, pastikan kamu sudah memahami: object dan array dari materi sebelumnya.

---

## 1. Apa itu JSON

**JSON** (JavaScript Object Notation) adalah format **teks** untuk menyimpan dan mengirim data. Penulisannya mirip dengan object JavaScript, tetapi ia hanyalah teks biasa sehingga mudah dikirim lewat internet dan disimpan ke file.

Hampir semua API (cara frontend dan backend bertukar data) memakai JSON, sehingga format ini wajib dipahami.

```json
{
  "nama": "Budi",
  "umur": 15,
  "aktif": true,
  "hobi": ["ngoding", "musik"],
  "alamat": {
    "kota": "Surabaya"
  },
  "pasangan": null
}
```

### 1.a Aturan Penulisan JSON

JSON lebih ketat daripada object JavaScript.

| Aturan | Object JavaScript | JSON |
|---|---|---|
| Nama properti | Boleh tanpa tanda kutip (`nama: 'Budi'`) | **Wajib** dalam kutip ganda (`"nama": "Budi"`) |
| Teks | Kutip tunggal atau ganda | **Hanya kutip ganda** |
| Koma di akhir | Boleh | **Tidak boleh** |
| Komentar | Boleh | **Tidak boleh** |
| Fungsi dan `undefined` | Boleh | **Tidak ada** |

Nilai yang diperbolehkan di JSON: string, number, boolean (`true` dan `false`), `null`, array, dan object.

> **Ringkasan:** JSON adalah format teks untuk bertukar data. Nama properti dan teks harus memakai kutip ganda, tanpa koma di akhir dan tanpa komentar.

---

## 2. JSON.stringify dan JSON.parse

Dua fungsi untuk berpindah antara object JavaScript dan teks JSON.

| Fungsi | Arah | Nama populer |
|---|---|---|
| `JSON.stringify()` | Object menjadi teks JSON | Serialisasi |
| `JSON.parse()` | Teks JSON menjadi object | Parsing |

```js
const siswa = { nama: 'Budi', umur: 15, hobi: ['ngoding', 'musik'] }

const teks = JSON.stringify(siswa)
console.log(teks)
// '{"nama":"Budi","umur":15,"hobi":["ngoding","musik"]}'
console.log(typeof teks)
// string

const kembali = JSON.parse(teks)
console.log(kembali.nama)
// Budi
console.log(typeof kembali)
// object
```

Agar hasil `stringify` mudah dibaca, tambahkan argumen untuk indentasi.

```js
console.log(JSON.stringify(siswa, null, 2))
// menampilkan JSON dengan indentasi dua spasi, rapi dan mudah dibaca
```

### 2.a Jebakan: Object Tidak Bisa Disimpan Langsung sebagai Teks

```js
console.log('Data: ' + siswa)
// Data: [object Object], bukan isinya
console.log('Data: ' + JSON.stringify(siswa))
// Data: {"nama":"Budi", ...}
```

### 2.b Salinan Dalam

Kombinasi `stringify` dan `parse` kadang dipakai untuk membuat salinan penuh sebuah object (termasuk bagian bersarangnya).

```js
const salinan = JSON.parse(JSON.stringify(siswa))
// salinan sepenuhnya terpisah dari siswa
```

Cara ini hanya cocok untuk data yang murni terdiri dari tipe yang didukung JSON.

> **Ringkasan:** `JSON.stringify` mengubah object menjadi teks, dan `JSON.parse` mengubah teks JSON kembali menjadi object.

---

## 3. try...catch

`JSON.parse` akan menimbulkan **error** jika teksnya bukan JSON yang valid.

```js
const rusak = '{nama: Budi}'
JSON.parse(rusak)
// error: Unexpected token n in JSON, program berhenti di sini
```

Untuk menangani error tanpa menghentikan seluruh program, bungkus dengan `try...catch`.

```js
try {
  const data = JSON.parse(rusak)
  console.log(data)
} catch (error) {
  console.log('Teks bukan JSON yang valid:', error.message)
  // blok catch dijalankan jika terjadi error di dalam try
}
console.log('Program tetap berjalan')
```

Cara kerjanya: kode di dalam `try` dijalankan. Jika terjadi error, eksekusi langsung pindah ke `catch`, dan program tetap berlanjut.

Pola ini akan sering dipakai saat membaca data dari luar yang tidak sepenuhnya bisa dipercaya, seperti data dari server atau dari penyimpanan browser.

> **Ringkasan:** `try { ... } catch (error) { ... }` menangani error tanpa menghentikan program.

---

## 4. localStorage

**localStorage** adalah ruang penyimpanan kecil di browser yang menyimpan data berpasangan nama dan nilai. Datanya **tetap ada** walaupun halaman ditutup atau dimuat ulang, sehingga cocok untuk menyimpan daftar tugas, pengaturan tema, atau draf catatan.

### 4.a Method Dasar

```js
localStorage.setItem('tema', 'gelap')
// menyimpan: kunci tema, nilai gelap

const tema = localStorage.getItem('tema')
console.log(tema)
// gelap

localStorage.removeItem('tema')
// menghapus satu data

localStorage.clear()
// menghapus semua data milik situs ini

console.log(localStorage.getItem('tidakAda'))
// null, jika kunci tidak ditemukan
```

### 4.b localStorage Hanya Menyimpan String

Hal terpenting: nilai yang disimpan **selalu diubah menjadi string**. Menyimpan object atau array secara langsung akan gagal.

```js
localStorage.setItem('siswa', { nama: 'Budi' })
console.log(localStorage.getItem('siswa'))
// [object Object], datanya rusak
```

Solusinya adalah JSON: ubah dengan `stringify` saat menyimpan, dan `parse` saat membaca.

```js
const daftar = [
  { teks: 'Belajar HTML', selesai: true },
  { teks: 'Belajar CSS', selesai: false }
]

localStorage.setItem('tugas', JSON.stringify(daftar))
// menyimpan array sebagai teks JSON

const tersimpan = JSON.parse(localStorage.getItem('tugas'))
console.log(tersimpan[0].teks)
// Belajar HTML
```

### 4.c Pola Membaca dengan Nilai Awal

Saat pertama kali dibuka, belum ada data tersimpan. `getItem` mengembalikan `null`, dan `JSON.parse(null)` menghasilkan `null`. Karena itu, siapkan nilai awal.

```js
const tugas = JSON.parse(localStorage.getItem('tugas')) || []
// jika belum ada data, pakai array kosong
```

Untuk lebih aman terhadap data rusak, bungkus dengan `try...catch`.

```js
function muatTugas() {
  try {
    return JSON.parse(localStorage.getItem('tugas')) || []
  } catch (error) {
    return []
    // data rusak: mulai dari kosong
  }
}
```

### 4.d Melihat Isi di DevTools

Buka DevTools (`F12`), pilih tab **Application** (di Firefox: **Storage**), lalu buka **Local Storage** dan pilih alamat situsmu. Kamu bisa melihat, mengubah, dan menghapus data yang tersimpan.

### 4.e Batasan localStorage

| Hal | Penjelasan |
|---|---|
| Kapasitas | Sekitar 5 MB per situs |
| Tipe data | Hanya string |
| Lingkup | Terpisah per situs (domain) dan per browser |
| Keamanan | **Tidak aman** untuk data sensitif (kata sandi, data pribadi), karena bisa dibaca JavaScript di halaman |
| Kedaluwarsa | Tidak ada, hanya hilang jika dihapus |

Ada juga `sessionStorage` dengan cara pakai yang sama persis, tetapi datanya hilang saat tab ditutup.

> **Peringatan:** Jangan menyimpan kata sandi atau data rahasia di `localStorage`. Pengguna lain di perangkat yang sama, atau kode berbahaya di halaman, bisa membacanya.

> **Ringkasan:** `localStorage` menyimpan string di browser secara permanen. Gunakan `JSON.stringify` untuk menyimpan object atau array, dan `JSON.parse` untuk membacanya, dengan nilai awal untuk data yang belum ada.

---

## 5. Latihan Singkat

1. Ubah object berisi tiga properti menjadi teks JSON, lalu kembalikan menjadi object.
2. Coba `JSON.parse` pada teks yang salah, lalu tangani errornya dengan `try...catch`.
3. Simpan nama pengguna ke `localStorage`, muat ulang halaman, lalu baca dan tampilkan kembali.
4. Simpan array berisi tiga object ke `localStorage`, lalu baca dan tampilkan semuanya.
5. Buka tab Application di DevTools dan lihat data yang kamu simpan.

---

## Rangkuman

- JSON adalah format teks untuk bertukar data, dengan nama properti dan teks dalam kutip ganda, tanpa koma di akhir dan tanpa komentar.
- `JSON.stringify` mengubah object menjadi teks, dan `JSON.parse` mengubah teks kembali menjadi object.
- `try...catch` menangani error tanpa menghentikan program.
- `localStorage` menyimpan data string di browser secara permanen lewat `setItem`, `getItem`, `removeItem`, dan `clear`.
- Untuk menyimpan object atau array, ubah ke JSON dulu. Siapkan nilai awal untuk data yang belum ada.
- Jangan menyimpan data sensitif di `localStorage`.
