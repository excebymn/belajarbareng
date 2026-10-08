---
jenis: murid
bab: js
urutan: 8
judul: "Method Array: forEach, map, filter, find, reduce, dan sort"
deskripsi: "Mengolah array dengan method modern forEach, map, filter, find, some, every, reduce, dan sort, lengkap dengan method chaining."
---

# Method Array: forEach, map, filter, find, reduce, dan sort

Pada materi ini kamu akan mempelajari: method array yang menerima fungsi callback, yaitu `forEach`, `map`, `filter`, `find`, `findIndex`, `some`, `every`, `reduce`, dan `sort`, serta cara menggabungkannya dengan method chaining.

Sebelum mulai, pastikan kamu sudah memahami: array, serta fungsi, arrow function, dan callback dari materi sebelumnya.

---

## 1. Gambaran Umum

Method pada materi ini semuanya menerima **fungsi callback** yang dijalankan untuk setiap elemen array. Dengan begitu, kita tidak perlu menulis perulangan manual untuk pekerjaan umum seperti mengubah semua elemen, menyaring elemen, atau menjumlahkannya.

| Method | Tujuan | Mengembalikan |
|---|---|---|
| `forEach` | Menjalankan sesuatu untuk tiap elemen | `undefined` |
| `map` | Mengubah tiap elemen | Array baru (panjang sama) |
| `filter` | Menyaring elemen yang memenuhi syarat | Array baru (bisa lebih pendek) |
| `find` | Mencari satu elemen pertama yang cocok | Elemen, atau `undefined` |
| `findIndex` | Mencari indeks elemen pertama yang cocok | Angka, atau `-1` |
| `some` | Apakah ada elemen yang cocok | `true` atau `false` |
| `every` | Apakah semua elemen cocok | `true` atau `false` |
| `reduce` | Menggabungkan semua elemen menjadi satu nilai | Satu nilai |
| `sort` | Mengurutkan | Array yang sama (berubah) |

Contoh data yang dipakai di sepanjang materi ini:

```js
const angka = [1, 2, 3, 4, 5]
const siswa = [
  { nama: 'Budi', nilai: 80 },
  { nama: 'Sari', nilai: 95 },
  { nama: 'Andi', nilai: 60 }
]
// siswa adalah array berisi object, bentuk data yang sangat umum, dibahas di materi Object
```

---

## 2. forEach

Menjalankan fungsi untuk **setiap elemen**, tanpa menghasilkan array baru. Dipakai untuk efek samping, seperti menampilkan atau menyimpan sesuatu.

```js
angka.forEach((n, indeks) => {
  console.log(indeks, n)
})
// callback menerima elemen, dan indeks sebagai argumen kedua
```

`forEach` setara dengan `for...of`, tetapi tidak bisa dihentikan dengan `break`.

---

## 3. map

Mengubah **setiap elemen** menjadi sesuatu yang baru, dan mengembalikan **array baru** dengan panjang yang sama. Array asli tidak berubah.

```js
const kali2 = angka.map(n => n * 2)
console.log(kali2)
// [2, 4, 6, 8, 10]

const namaSaja = siswa.map(s => s.nama)
console.log(namaSaja)
// ['Budi', 'Sari', 'Andi'], mengambil satu bidang dari tiap object

const label = siswa.map(s => `${s.nama} (${s.nilai})`)
console.log(label)
// ['Budi (80)', 'Sari (95)', 'Andi (60)']
```

Bandingkan dengan cara perulangan manual untuk hasil yang sama:

```js
const kali2Manual = []
for (const n of angka) {
  kali2Manual.push(n * 2)
}
// 4 baris, sedangkan map cukup 1 baris
```

Pola `map` sangat penting: di Vue dan React, data berupa array hampir selalu diubah menjadi tampilan.

> **Ringkasan:** `map` mengubah tiap elemen dan menghasilkan array baru dengan panjang yang sama.

---

## 4. filter

Menyaring elemen. Hanya elemen yang membuat callback mengembalikan `true` yang masuk ke array baru.

```js
const genap = angka.filter(n => n % 2 === 0)
console.log(genap)
// [2, 4]

const lulus = siswa.filter(s => s.nilai >= 70)
console.log(lulus)
// [{ nama: 'Budi', nilai: 80 }, { nama: 'Sari', nilai: 95 }]

const bukanBudi = siswa.filter(s => s.nama !== 'Budi')
// cara umum menghapus item dari array tanpa mengubah array asli
```

`filter` selalu mengembalikan array, walaupun hasilnya kosong atau hanya satu elemen.

> **Ringkasan:** `filter` menyaring elemen yang memenuhi syarat dan menghasilkan array baru.

---

## 5. find dan findIndex

Mencari **satu** elemen pertama yang memenuhi syarat.

```js
const sari = siswa.find(s => s.nama === 'Sari')
console.log(sari)
// { nama: 'Sari', nilai: 95 }

const tidakAda = siswa.find(s => s.nama === 'Dewi')
console.log(tidakAda)
// undefined, jika tidak ditemukan

const posisi = siswa.findIndex(s => s.nama === 'Andi')
console.log(posisi)
// 2
```

Perbedaan dengan `filter`: `find` mengembalikan **satu elemen** (atau `undefined`), sedangkan `filter` selalu mengembalikan **array**.

---

## 6. some dan every

Menjawab pertanyaan ya atau tidak tentang seluruh isi array.

```js
console.log(siswa.some(s => s.nilai < 70))
// true, ada setidaknya satu siswa dengan nilai di bawah 70
console.log(siswa.every(s => s.nilai >= 50))
// true, semua siswa bernilai 50 atau lebih
console.log(siswa.every(s => s.nilai >= 70))
// false, Andi bernilai 60
```

---

## 7. reduce

Menggabungkan **seluruh elemen menjadi satu nilai**, misalnya total, rata-rata, atau object hasil rangkuman. `reduce` adalah yang paling sulit dipahami dari kelompok ini, jadi kita bahas perlahan.

#### Cara menulis

```js
const total = angka.reduce((akumulator, n) => akumulator + n, 0)
console.log(total)
// 15
```

Cara kerjanya:

- `akumulator` adalah nilai yang "dibawa" dari satu putaran ke putaran berikutnya.
- Angka `0` di akhir adalah **nilai awal** akumulator.
- Nilai yang dikembalikan callback pada tiap putaran menjadi akumulator untuk putaran selanjutnya.

Runtutan untuk `[1, 2, 3, 4, 5]`:

| Putaran | akumulator | n | Hasil (akumulator berikutnya) |
|---|---|---|---|
| 1 | 0 | 1 | 1 |
| 2 | 1 | 2 | 3 |
| 3 | 3 | 3 | 6 |
| 4 | 6 | 4 | 10 |
| 5 | 10 | 5 | 15 |

Contoh lain:

```js
const totalNilai = siswa.reduce((total, s) => total + s.nilai, 0)
console.log(totalNilai)
// 235

const rataRata = totalNilai / siswa.length
console.log(rataRata)
// 78.33333333333333
```

Setara dengan perulangan manual:

```js
let total = 0
for (const n of angka) {
  total = total + n
}
```

> **Catatan:** Selalu tulis nilai awal (argumen kedua `reduce`). Tanpanya, `reduce` memakai elemen pertama sebagai nilai awal, yang sering menimbulkan kejutan, apalagi pada array kosong.

> **Ringkasan:** `reduce` menggabungkan semua elemen menjadi satu nilai lewat akumulator yang dibawa antar putaran.

---

## 8. sort

Mengurutkan array. **Hati-hati: `sort` mengubah array aslinya**, dan secara bawaan mengurutkan sebagai **teks**, bukan angka.

```js
const campur = [10, 9, 100, 1]
console.log(campur.sort())
// [1, 10, 100, 9], diurutkan sebagai teks, bukan sebagai angka!
```

Untuk mengurutkan dengan benar, berikan **fungsi pembanding**.

```js
const nilaiAngka = [10, 9, 100, 1]

nilaiAngka.sort((a, b) => a - b)
// [1, 9, 10, 100], urut naik

nilaiAngka.sort((a, b) => b - a)
// [100, 10, 9, 1], urut turun
```

Cara kerja pembanding: jika `a - b` negatif, `a` diletakkan sebelum `b`. Jika positif, sebaliknya.

Mengurutkan array object:

```js
const terurut = [...siswa].sort((a, b) => b.nilai - a.nilai)
// [...siswa] membuat salinan lebih dulu agar siswa asli tidak ikut berubah
console.log(terurut.map(s => s.nama))
// ['Sari', 'Budi', 'Andi'], dari nilai tertinggi

const abjad = [...siswa].sort((a, b) => a.nama.localeCompare(b.nama))
// mengurutkan teks berdasarkan abjad dengan localeCompare
```

> **Ringkasan:** `sort` mengubah array asli dan mengurutkan sebagai teks. Berikan pembanding `(a, b) => a - b` untuk angka, dan salin dulu dengan `[...array]` jika array asli harus tetap utuh.

---

## 9. Method Chaining

Karena `map` dan `filter` mengembalikan array, kita bisa **menyambung** method satu demi satu.

```js
const hasil = siswa
  .filter(s => s.nilai >= 70)
  // hanya yang bernilai minimal 70
  .sort((a, b) => b.nilai - a.nilai)
  // urutkan dari nilai tertinggi
  .map(s => s.nama)
  // ambil namanya saja

console.log(hasil)
// ['Sari', 'Budi']
```

Dibaca dari atas ke bawah seperti resep: saring, urutkan, lalu ambil nama. Pola seperti ini sangat sering muncul di aplikasi nyata, misalnya mencari produk, mengurutkan, lalu menampilkannya.

---

## 10. Memilih Method

| Saya ingin... | Pakai |
|---|---|
| Melakukan sesuatu untuk tiap elemen (misalnya menampilkan) | `forEach` |
| Mengubah tiap elemen menjadi bentuk lain | `map` |
| Menyaring sebagian elemen | `filter` |
| Mencari satu elemen | `find` |
| Mengecek apakah ada atau semua cocok | `some` atau `every` |
| Menjumlahkan atau meringkas menjadi satu nilai | `reduce` |
| Mengurutkan | `sort` (dengan pembanding) |

---

## 11. Latihan Singkat

Gunakan array `siswa` di atas, atau buat milikmu sendiri.

1. Dengan `map`, buat array berisi nama siswa dalam huruf kapital.
2. Dengan `filter`, ambil siswa yang nilainya di atas rata-rata.
3. Dengan `find`, cari siswa bernama `'Sari'`.
4. Dengan `reduce`, hitung nilai tertinggi dari seluruh siswa.
5. Dengan `sort`, urutkan siswa dari nilai terendah ke tertinggi tanpa mengubah array asli.
6. Gabungkan `filter`, `sort`, dan `map` dalam satu rantai.

---

## Rangkuman

- `forEach` menjalankan sesuatu untuk tiap elemen, `map` mengubah tiap elemen menjadi array baru, dan `filter` menyaring elemen.
- `find` dan `findIndex` mencari satu elemen, sedangkan `some` dan `every` menjawab pertanyaan ya atau tidak.
- `reduce` menggabungkan semua elemen menjadi satu nilai lewat akumulator. Selalu tulis nilai awalnya.
- `sort` mengubah array asli dan mengurutkan sebagai teks, jadi berikan pembanding untuk angka.
- `map`, `filter`, dan `sort` dapat disambung dengan method chaining.
