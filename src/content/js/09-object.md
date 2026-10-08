---
jenis: murid
bab: js
urutan: 9
judul: "Object"
deskripsi: "Menyimpan data berpasangan nama dan nilai dengan object: membuat, mengakses, mengubah, method, destructuring, spread, dan menelusuri object."
---

# Object

Pada materi ini kamu akan mempelajari: cara membuat object, mengakses dan mengubah properti, method dan `this`, object bersarang, destructuring, spread, menelusuri object dengan `Object.keys`, `Object.values`, dan `Object.entries`, serta optional chaining.

Sebelum mulai, pastikan kamu sudah memahami: variabel, fungsi, dan array.

---

## 1. Apa itu Object

**Object** menyimpan data sebagai pasangan **nama (key)** dan **nilai (value)**. Cocok untuk menggambarkan satu "benda" yang punya beberapa ciri, seperti seorang siswa, sebuah produk, atau sebuah pengguna.

| | Array | Object |
|---|---|---|
| Penunjuk elemen | Nomor indeks (0, 1, 2) | Nama (`nama`, `umur`) |
| Cocok untuk | Daftar nilai sejenis | Satu benda dengan berbagai ciri |
| Penulisan | `[ ]` | `{ }` |

Jika kamu mengenal Java, object di JavaScript bisa dibuat langsung **tanpa perlu membuat class** lebih dulu.

#### Cara menulis

```js
const siswa = {
  nama: 'Budi',
  umur: 15,
  kelas: 'X-1',
  aktif: true
}
// object berisi empat properti, dipisah koma. Setiap properti berbentuk nama: nilai
```

Pasangan nama dan nilai disebut **properti**. Nilainya boleh bertipe apa pun: string, angka, boolean, array, bahkan object atau fungsi lain.

> **Ringkasan:** Object menyimpan pasangan nama dan nilai dalam `{ }`, cocok untuk menggambarkan satu benda dengan banyak ciri.

---

## 2. Mengakses dan Mengubah Properti

### 2.a Notasi Titik

```js
console.log(siswa.nama)
// Budi
console.log(siswa.umur)
// 15
```

### 2.b Notasi Kurung Siku

Berguna jika nama properti disimpan di variabel, atau berisi karakter khusus.

```js
const bidang = 'kelas'
console.log(siswa[bidang])
// X-1, nama properti diambil dari variabel
console.log(siswa['nama'])
// Budi, sama dengan siswa.nama
```

### 2.c Mengubah, Menambah, dan Menghapus

```js
siswa.umur = 16
// mengubah nilai properti yang sudah ada
siswa.hobi = 'ngoding'
// menambah properti baru
delete siswa.aktif
// menghapus properti

console.log(siswa)
// { nama: 'Budi', umur: 16, kelas: 'X-1', hobi: 'ngoding' }
```

Seperti array, object yang dibuat dengan `const` isinya tetap bisa diubah. `const` hanya mencegah variabel diganti dengan object lain.

### 2.d Memeriksa Properti

```js
console.log('nama' in siswa)
// true, apakah properti nama ada
console.log(siswa.alamat)
// undefined, properti yang tidak ada mengembalikan undefined (tidak error)
```

> **Ringkasan:** Akses properti dengan `objek.nama` atau `objek['nama']`. Properti bisa ditambah, diubah, dan dihapus kapan saja.

---

## 3. Method

Properti yang berisi **fungsi** disebut **method**.

```js
const siswa = {
  nama: 'Budi',
  sapa() {
    console.log('Halo, saya ' + this.nama)
  }
}

siswa.sapa()
// Halo, saya Budi
```

Kata kunci `this` di dalam method merujuk pada **object pemilik method itu**. Karena `sapa` dipanggil lewat `siswa.sapa()`, maka `this.nama` sama dengan `siswa.nama`.

Method sering kamu temui tanpa disadari: `console.log` adalah method `log` pada object `console`, dan `'halo'.toUpperCase()` adalah method pada string.

> **Catatan:** Perilaku `this` cukup rumit, terutama pada arrow function. Untuk sekarang cukup pahami bahwa di dalam method biasa, `this` adalah object pemiliknya.

---

## 4. Object Bersarang dan Array Object

Object boleh berisi object atau array.

```js
const murid = {
  nama: 'Sari',
  alamat: {
    kota: 'Surabaya',
    kodePos: '60111'
  },
  nilai: [90, 85, 95]
}

console.log(murid.alamat.kota)
// Surabaya
console.log(murid.nilai[1])
// 85
```

Bentuk yang **paling sering** kamu temui di dunia nyata adalah **array berisi object**, misalnya daftar produk dari server.

```js
const daftarSiswa = [
  { nama: 'Budi', nilai: 80 },
  { nama: 'Sari', nilai: 95 },
  { nama: 'Andi', nilai: 60 }
]

console.log(daftarSiswa[1].nama)
// Sari
```

Bentuk inilah yang diolah dengan `map`, `filter`, dan `find` di materi Method Array.

### 4.a Optional Chaining

Mengakses properti dari sesuatu yang tidak ada (`undefined`) menimbulkan error.

```js
const pengguna = { nama: 'Budi' }
console.log(pengguna.alamat.kota)
// error: Cannot read properties of undefined
```

**Optional chaining** (`?.`) mencegah error itu dengan mengembalikan `undefined` bila bagian sebelumnya tidak ada.

```js
console.log(pengguna.alamat?.kota)
// undefined, tanpa error
console.log(pengguna.alamat?.kota ?? 'Tidak diketahui')
// Tidak diketahui, dipadukan dengan ?? untuk nilai bawaan
```

> **Ringkasan:** Object bisa bersarang. Pola paling umum adalah array berisi object. `?.` mencegah error saat mengakses bagian yang mungkin tidak ada.

---

## 5. Menyingkat Penulisan

### 5.a Shorthand Properti

Jika nama variabel sama dengan nama properti, cukup tulis sekali.

```js
const nama = 'Budi'
const umur = 15

const siswa = { nama, umur }
// sama dengan { nama: nama, umur: umur }
```

### 5.b Destructuring

**Destructuring** mengambil beberapa properti sekaligus ke dalam variabel terpisah.

```js
const siswa = { nama: 'Budi', umur: 15, kelas: 'X-1' }

const { nama, umur } = siswa
console.log(nama, umur)
// Budi 15, dua variabel dibuat sekaligus dari properti dengan nama yang sama

const { kelas: kelasSiswa } = siswa
console.log(kelasSiswa)
// X-1, mengambil properti kelas dengan nama variabel baru

const { alamat = 'Belum diisi' } = siswa
console.log(alamat)
// Belum diisi, nilai bawaan jika properti tidak ada
```

Destructuring juga berlaku untuk array dan parameter fungsi.

```js
const [pertama, kedua] = ['apel', 'jeruk', 'mangga']
console.log(pertama, kedua)
// apel jeruk

function tampilkan({ nama, umur }) {
  console.log(`${nama} berumur ${umur}`)
}
tampilkan(siswa)
// Budi berumur 15
```

### 5.c Spread

Menyalin atau menggabungkan object dengan `...`, mirip dengan array.

```js
const dasar = { nama: 'Budi', umur: 15 }

const salinan = { ...dasar }
// salinan baru, bukan object yang sama

const diperbarui = { ...dasar, umur: 16, kota: 'Surabaya' }
// salinan dengan umur diperbarui dan properti kota ditambah
console.log(diperbarui)
// { nama: 'Budi', umur: 16, kota: 'Surabaya' }
```

Properti yang ditulis belakangan menimpa yang sebelumnya. Pola `{ ...lama, bidang: baru }` sangat umum untuk membuat versi baru tanpa mengubah aslinya.

> **Catatan:** Seperti array, object adalah **referensi**. `const b = a` tidak menyalin. Gunakan `{ ...a }` untuk menyalin. Spread hanya menyalin satu tingkat, bukan object bersarang di dalamnya.

> **Ringkasan:** Shorthand menyingkat penulisan, destructuring mengambil banyak properti sekaligus, dan spread menyalin atau menggabungkan object.

---

## 6. Menelusuri Object

```js
const siswa = { nama: 'Budi', umur: 15, kelas: 'X-1' }

console.log(Object.keys(siswa))
// ['nama', 'umur', 'kelas'], array berisi semua nama properti
console.log(Object.values(siswa))
// ['Budi', 15, 'X-1'], array berisi semua nilai
console.log(Object.entries(siswa))
// [['nama', 'Budi'], ['umur', 15], ['kelas', 'X-1']], array berisi pasangan nama dan nilai
```

Karena hasilnya array, kita bisa memakai `for...of`.

```js
for (const [kunci, nilai] of Object.entries(siswa)) {
  console.log(`${kunci}: ${nilai}`)
}
// nama: Budi
// umur: 15
// kelas: X-1
```

---

## 7. Latihan Singkat

1. Buat object `buku` berisi `judul`, `penulis`, dan `tahun`, lalu tampilkan tiap propertinya.
2. Tambahkan properti `halaman`, ubah `tahun`, dan hapus `penulis`.
3. Buat method `info()` di dalam object `buku` yang menampilkan judul dan tahunnya dengan `this`.
4. Buat array berisi tiga object `buku`, lalu tampilkan semua judulnya dengan `map`.
5. Ambil `judul` dan `tahun` dari satu buku dengan destructuring.
6. Buat salinan satu buku dengan spread dan ubah `tahun` di salinannya.

---

## Rangkuman

- Object menyimpan pasangan nama dan nilai dalam `{ }`, dan propertinya diakses dengan `objek.nama` atau `objek['nama']`.
- Properti yang berisi fungsi disebut method, dan `this` di dalamnya merujuk pada object pemiliknya.
- Pola paling umum di dunia nyata adalah array berisi object.
- `?.` (optional chaining) mencegah error saat mengakses properti dari sesuatu yang mungkin tidak ada.
- Destructuring mengambil banyak properti sekaligus, dan spread `{ ...a }` menyalin atau menggabungkan object.
- `Object.keys`, `Object.values`, dan `Object.entries` mengubah object menjadi array agar mudah ditelusuri.
