---
jenis: murid
bab: js
urutan: 7
judul: "Array"
deskripsi: "Menyimpan banyak nilai dalam array: membuat, mengakses lewat indeks, menambah dan menghapus elemen, mencari, menyalin, dan menelusuri isinya."
---

# Array

Pada materi ini kamu akan mempelajari: cara membuat array, mengakses elemen lewat indeks, menambah dan menghapus elemen, mencari elemen, menyalin dan menggabungkan array, serta menelusuri isinya.

Sebelum mulai, pastikan kamu sudah memahami: variabel, perulangan `for` dan `for...of`, serta fungsi.

---

## 1. Apa itu Array

**Array** adalah daftar nilai berurutan yang disimpan dalam satu variabel. Cocok untuk menyimpan kumpulan data sejenis, misalnya daftar nama, daftar nilai, atau daftar produk.

Berbeda dengan array di Java dan C++, array JavaScript:

- **Ukurannya dinamis**: bisa bertambah dan berkurang kapan saja.
- **Boleh berisi tipe campuran**, walaupun sebaiknya satu array diisi tipe yang sama.

#### Cara menulis

```js
const buah = ['apel', 'jeruk', 'mangga']
// array berisi tiga string, ditulis dengan kurung siku dan dipisah koma

const angka = [10, 20, 30, 40]
const kosong = []
// array kosong
const campuran = ['Budi', 15, true]
// tipe berbeda dalam satu array, boleh tetapi jarang dianjurkan
```

> **Ringkasan:** Array adalah daftar nilai berurutan, ditulis dengan `[ ]`, dan ukurannya dinamis.

---

## 2. Mengakses Elemen

Setiap elemen punya **indeks**, yaitu nomor urut yang **dimulai dari 0**.

```text
indeks:   0        1        2
buah:  'apel'  'jeruk'  'mangga'
```

```js
const buah = ['apel', 'jeruk', 'mangga']

console.log(buah[0])
// apel, elemen pertama
console.log(buah[2])
// mangga
console.log(buah[5])
// undefined, indeks di luar jangkauan tidak menimbulkan error
console.log(buah.length)
// 3, jumlah elemen
console.log(buah[buah.length - 1])
// mangga, cara mengambil elemen terakhir
console.log(buah.at(-1))
// mangga, at(-1) adalah cara singkat mengambil elemen terakhir
```

Mengubah elemen:

```js
buah[1] = 'durian'
console.log(buah)
// ['apel', 'durian', 'mangga']
```

> **Catatan:** Array dibuat dengan `const`, tetapi **isinya tetap bisa diubah**. `const` hanya mencegah variabel `buah` diganti dengan array lain, bukan mencegah perubahan isi array.

> **Ringkasan:** Elemen diakses dengan `array[indeks]` dengan indeks dimulai dari 0. `length` memberi jumlah elemen.

---

## 3. Menambah dan Menghapus Elemen

| Method | Fungsi | Posisi |
|---|---|---|
| `push(x)` | Menambah di akhir | Akhir |
| `pop()` | Menghapus elemen terakhir | Akhir |
| `unshift(x)` | Menambah di awal | Awal |
| `shift()` | Menghapus elemen pertama | Awal |

```js
const antrean = ['Budi', 'Sari']

antrean.push('Andi')
// ['Budi', 'Sari', 'Andi']
antrean.unshift('Dewi')
// ['Dewi', 'Budi', 'Sari', 'Andi']

const pertama = antrean.shift()
// menghapus 'Dewi' dan mengembalikannya ke variabel pertama
const terakhir = antrean.pop()
// menghapus 'Andi' dan mengembalikannya
console.log(antrean)
// ['Budi', 'Sari']
```

Method-method ini **mengubah array aslinya**.

### 3.a splice

`splice` menghapus atau menyisipkan elemen di posisi mana pun.

```js
const angka = [10, 20, 30, 40, 50]

angka.splice(1, 2)
// mulai dari indeks 1, hapus 2 elemen: sisa [10, 40, 50]

angka.splice(1, 0, 99)
// mulai dari indeks 1, hapus 0 elemen, sisipkan 99: [10, 99, 40, 50]
```

Bentuknya: `splice(indeksAwal, jumlahDihapus, ...elemenBaru)`. `splice` juga mengubah array aslinya, dan sering dipakai untuk menghapus satu item berdasarkan indeksnya.

> **Ringkasan:** `push` dan `pop` bekerja di akhir, `unshift` dan `shift` di awal, dan `splice` di posisi mana pun. Semuanya mengubah array asli.

---

## 4. Mencari Elemen

```js
const buah = ['apel', 'jeruk', 'mangga', 'jeruk']

console.log(buah.includes('mangga'))
// true, apakah ada elemen tersebut
console.log(buah.indexOf('jeruk'))
// 1, indeks kemunculan pertama
console.log(buah.lastIndexOf('jeruk'))
// 3, indeks kemunculan terakhir
console.log(buah.indexOf('durian'))
// -1, tidak ditemukan
```

Untuk pencarian yang lebih rumit (berdasarkan syarat), ada `find` dan `findIndex` yang dibahas di materi Method Array.

---

## 5. Mengambil, Menyalin, dan Menggabungkan

### 5.a slice

`slice` mengambil sebagian array **tanpa mengubah aslinya**.

```js
const angka = [10, 20, 30, 40, 50]

console.log(angka.slice(1, 3))
// [20, 30], dari indeks 1 sampai sebelum indeks 3
console.log(angka.slice(2))
// [30, 40, 50], dari indeks 2 sampai akhir
console.log(angka.slice())
// salinan seluruh array
```

Jangan tertukar: `slice` mengambil bagian (aslinya tetap), sedangkan `splice` mengubah array.

### 5.b Spread

Operator **spread** (`...`) "menaburkan" isi array. Dipakai untuk menyalin dan menggabungkan.

```js
const a = [1, 2, 3]
const b = [4, 5]

const gabungan = [...a, ...b]
// [1, 2, 3, 4, 5], array baru berisi isi a dan b
const salinan = [...a]
// salinan baru dari a
const tambah = [...a, 99]
// [1, 2, 3, 99], array baru dengan satu elemen tambahan
```

### 5.c Array adalah Referensi

Menetapkan array ke variabel lain **tidak membuat salinan**, melainkan menunjuk ke array yang sama.

```js
const a = [1, 2, 3]
const b = a
b.push(4)
console.log(a)
// [1, 2, 3, 4], a ikut berubah karena a dan b menunjuk ke array yang sama

const c = [...a]
c.push(5)
console.log(a)
// [1, 2, 3, 4], a tidak berubah karena c adalah salinan
```

Hal ini sangat penting dipahami, terutama saat bekerja dengan data di framework seperti Vue.

> **Ringkasan:** `slice` mengambil sebagian tanpa mengubah aslinya. Spread `[...a]` membuat salinan dan menggabungkan. Menetapkan array ke variabel lain tidak menyalin.

---

## 6. Method Lain yang Berguna

```js
const huruf = ['b', 'c', 'a']

console.log(huruf.join(' - '))
// 'b - c - a', menggabungkan elemen menjadi string
console.log(huruf.reverse())
// ['a', 'c', 'b'], membalik urutan (mengubah array asli)
console.log(Array.isArray(huruf))
// true, memeriksa apakah sebuah nilai adalah array
console.log([1, 2].concat([3, 4]))
// [1, 2, 3, 4], menggabungkan, hasilnya array baru
```

---

## 7. Menelusuri Array

```js
const buah = ['apel', 'jeruk', 'mangga']

for (let i = 0; i < buah.length; i++) {
  console.log(i, buah[i])
}
// cara klasik, ketika nomor indeks dibutuhkan

for (const item of buah) {
  console.log(item)
}
// for...of, lebih ringkas jika hanya butuh isinya

buah.forEach((item, indeks) => {
  console.log(indeks, item)
})
// forEach menjalankan fungsi untuk tiap elemen, dibahas lebih lanjut di materi Method Array
```

---

## 8. Array di Dalam Array

Array boleh berisi array lain, misalnya untuk menyimpan tabel.

```js
const nilai = [
  [80, 90],
  [70, 85],
  [95, 60]
]

console.log(nilai[1][0])
// 70, baris indeks 1, kolom indeks 0
```

Namun untuk data yang punya nama-nama bidang (misalnya siswa dengan nama dan kelas), object lebih cocok, dibahas di materi Object.

---

## 9. Latihan Singkat

1. Buat array berisi lima nama, lalu tampilkan nama pertama dan terakhir.
2. Tambahkan satu nama di akhir dan satu di awal, lalu hapus satu dari tengah dengan `splice`.
3. Periksa apakah sebuah nama ada di dalam array dengan `includes`.
4. Buat salinan array dengan spread, ubah salinannya, lalu pastikan aslinya tidak berubah.
5. Hitung rata-rata dari array angka dengan perulangan.

---

## Rangkuman

- Array adalah daftar nilai berurutan dengan ukuran dinamis, ditulis `[ ]`, dan indeksnya dimulai dari 0.
- `length` memberi jumlah elemen, dan `array[indeks]` mengakses elemen.
- `push`, `pop`, `unshift`, `shift`, dan `splice` mengubah array asli, sedangkan `slice` tidak.
- `includes` dan `indexOf` mencari elemen.
- Spread `[...a]` membuat salinan dan menggabungkan array. Menetapkan array ke variabel lain tidak membuat salinan.
- Array bisa ditelusuri dengan `for`, `for...of`, atau `forEach`.
