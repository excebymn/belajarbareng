---
jenis: murid
bab: js
urutan: 11
judul: "DOM: Memilih dan Mengubah Elemen"
deskripsi: "Memahami DOM sebagai pohon elemen halaman, memilih elemen dengan querySelector, mengubah teks, atribut, class, dan gaya, serta membuat dan menghapus elemen."
---

# DOM: Memilih dan Mengubah Elemen

Pada materi ini kamu akan mempelajari: apa itu DOM, cara memilih elemen dengan `getElementById`, `querySelector`, dan `querySelectorAll`, cara mengubah teks, atribut, class, dan gaya, serta cara membuat dan menghapus elemen lewat JavaScript.

Sebelum mulai, pastikan kamu sudah memahami: HTML dan CSS (terutama selector), serta variabel, fungsi, dan array di JavaScript.

---

## 1. Apa itu DOM

Saat browser membaca file HTML, ia mengubahnya menjadi struktur di memori berbentuk **pohon** yang disebut **DOM** (*Document Object Model*). Setiap elemen HTML menjadi **object** di pohon itu, dan JavaScript bisa membaca serta mengubahnya. Saat DOM berubah, tampilan halaman ikut berubah.

```html
<body>
  <h1 id="judul">Halo</h1>
  <ul>
    <li>Apel</li>
    <li>Jeruk</li>
  </ul>
</body>
```

```text
body
├── h1 (id="judul")
└── ul
    ├── li  "Apel"
    └── li  "Jeruk"
```

Titik awal untuk mengakses DOM adalah object `document`, yang mewakili halaman.

Kamu bisa melihat DOM secara langsung di DevTools tab **Elements**. Itulah pohon DOM yang sedang aktif, dan akan berubah saat JavaScript mengubah halaman.

> **Catatan:** Pastikan script dimuat dengan `defer` (atau diletakkan di akhir `body`). Jika script berjalan sebelum elemennya dibaca browser, pemilihan elemen akan menghasilkan `null`.

> **Ringkasan:** DOM adalah representasi halaman sebagai pohon object. JavaScript mengubah halaman dengan mengubah DOM lewat `document`.

---

## 2. Memilih Elemen

Contoh HTML yang dipakai di materi ini:

```html
<h1 id="judul">Daftar Belanja</h1>
<ul id="daftar">
  <li class="item">Apel</li>
  <li class="item">Jeruk</li>
  <li class="item">Mangga</li>
</ul>
<button id="tombol">Klik saya</button>
<input type="text" id="nama">
```

### 2.a getElementById

```js
const judul = document.getElementById('judul')
// memilih elemen dengan id judul, tulis nama id tanpa tanda #
console.log(judul)
// menampilkan elemen h1 tersebut
```

### 2.b querySelector

Memilih **elemen pertama** yang cocok dengan **selector CSS**. Inilah cara yang paling serbaguna, karena memakai selector yang sudah kamu pelajari di bab CSS.

```js
const judul = document.querySelector('#judul')
// selector id memakai tanda #
const itemPertama = document.querySelector('.item')
// selector class memakai tanda titik, mengambil elemen pertama yang cocok
const daftarItem = document.querySelector('#daftar li')
// selector keturunan seperti di CSS
const inputNama = document.querySelector('input[type="text"]')
```

Jika tidak ada elemen yang cocok, hasilnya `null`.

### 2.c querySelectorAll

Memilih **semua elemen** yang cocok, dan mengembalikan kumpulan elemen (*NodeList*) yang bisa ditelusuri.

```js
const semuaItem = document.querySelectorAll('.item')
console.log(semuaItem.length)
// 3

semuaItem.forEach(item => {
  console.log(item.textContent)
})
// Apel, Jeruk, Mangga

for (const item of semuaItem) {
  console.log(item.textContent)
}
// for...of juga bisa dipakai
```

`NodeList` mirip array tetapi bukan array sungguhan. Untuk memakai `map` atau `filter`, ubah dulu dengan `Array.from(semuaItem)` atau `[...semuaItem]`.

| Method | Hasil |
|---|---|
| `getElementById('id')` | Satu elemen atau `null` |
| `querySelector('selector')` | Elemen pertama yang cocok, atau `null` |
| `querySelectorAll('selector')` | Semua elemen yang cocok (NodeList) |

Di kursus ini, utamakan `querySelector` dan `querySelectorAll` agar satu cara pemilihan cukup untuk semua kasus.

> **Ringkasan:** `querySelector` memilih elemen pertama, dan `querySelectorAll` memilih semuanya, memakai selector CSS yang sama dengan di bab CSS.

---

## 3. Mengubah Isi Elemen

### 3.a textContent

Membaca atau mengubah **teks** di dalam elemen.

```js
const judul = document.querySelector('#judul')

console.log(judul.textContent)
// Daftar Belanja, membaca teks
judul.textContent = 'Belanjaan Hari Ini'
// mengubah teks, halaman langsung berubah
```

`textContent` memperlakukan semuanya sebagai teks biasa, sehingga aman.

### 3.b innerHTML

Membaca atau mengubah **HTML** di dalam elemen.

```js
const daftar = document.querySelector('#daftar')
daftar.innerHTML = '<li>Pisang</li><li>Anggur</li>'
// mengganti seluruh isi daftar dengan dua li baru
daftar.innerHTML = ''
// mengosongkan isi elemen
```

> **Peringatan:** Jangan memasukkan teks yang berasal dari pengguna ke `innerHTML`. Jika teks itu mengandung kode berbahaya, kode tersebut akan dijalankan (serangan **XSS**). Untuk menampilkan teks dari pengguna, selalu pakai `textContent`.

| | `textContent` | `innerHTML` |
|---|---|---|
| Memperlakukan isi sebagai | Teks biasa | HTML |
| Aman untuk data pengguna | Ya | Tidak |
| Dipakai untuk | Mengubah teks | Menyisipkan struktur HTML dari sumber tepercaya |

### 3.c Nilai Isian (value)

Untuk `input`, `textarea`, dan `select`, nilai yang diketik pengguna diambil dengan `value`.

```js
const inputNama = document.querySelector('#nama')

console.log(inputNama.value)
// membaca isi yang diketik, selalu berupa string
inputNama.value = 'Budi'
// mengisi kolom dari JavaScript
inputNama.value = ''
// mengosongkan kolom
```

> **Ringkasan:** Gunakan `textContent` untuk mengubah teks (aman), `innerHTML` untuk menyisipkan HTML dari sumber tepercaya, dan `value` untuk isian formulir.

---

## 4. Mengubah Atribut, Class, dan Gaya

### 4.a Atribut

```js
const gambar = document.querySelector('img')

console.log(gambar.getAttribute('src'))
// membaca nilai atribut
gambar.setAttribute('alt', 'Foto baru')
// menetapkan atribut
gambar.removeAttribute('width')
// menghapus atribut

const tautan = document.querySelector('a')
tautan.href = 'https://developer.mozilla.org'
// banyak atribut juga bisa diakses langsung seperti properti
```

### 4.b classList

Cara terbaik mengubah tampilan: **tambah atau hapus class**, dan biarkan CSS yang mengatur gayanya.

```js
const kotak = document.querySelector('.kotak')

kotak.classList.add('aktif')
// menambah class aktif
kotak.classList.remove('aktif')
// menghapus class aktif
kotak.classList.toggle('aktif')
// menambah jika belum ada, menghapus jika sudah ada
console.log(kotak.classList.contains('aktif'))
// true atau false, apakah punya class tersebut
```

Ini memisahkan tugas dengan rapi: **CSS** mendefinisikan seperti apa tampilan "aktif" itu, dan **JavaScript** hanya menentukan kapan class tersebut dipasang.

```css
.aktif {
  background-color: gold;
}
.sembunyi {
  display: none;
}
```

### 4.c style

Mengubah gaya langsung lewat properti `style`. Nama properti CSS ditulis dengan **camelCase**.

```js
kotak.style.color = 'red'
kotak.style.backgroundColor = 'yellow'
// background-color menjadi backgroundColor
kotak.style.display = 'none'
```

Gaya inline sulit dirawat. Utamakan `classList`, dan pakai `style` hanya untuk nilai yang dihitung dinamis (misalnya posisi atau ukuran dari perhitungan).

> **Ringkasan:** Ubah tampilan dengan `classList.add`, `remove`, dan `toggle` agar CSS tetap mengatur gaya. `style` hanya untuk nilai dinamis.

---

## 5. Membuat, Menambah, dan Menghapus Elemen

### 5.a Membuat Elemen

```js
const li = document.createElement('li')
// membuat elemen li baru di memori, belum tampil di halaman
li.textContent = 'Pisang'
// mengisi teksnya
li.classList.add('item')
// memberi class
```

### 5.b Menambahkan ke Halaman

```js
const daftar = document.querySelector('#daftar')

daftar.append(li)
// menambahkan li di akhir daftar, sekarang tampil di halaman
daftar.prepend(li)
// menambahkan di awal daftar
```

### 5.c Menghapus

```js
const item = document.querySelector('.item')
item.remove()
// menghapus elemen dari halaman
```

### 5.d Contoh Lengkap: Menambah Item dari Array

Pola yang sangat sering dipakai: mengubah data (array) menjadi tampilan.

```js
const buah = ['Apel', 'Jeruk', 'Mangga']
const daftar = document.querySelector('#daftar')

daftar.innerHTML = ''
// kosongkan dulu supaya tidak dobel

buah.forEach(nama => {
  const li = document.createElement('li')
  li.textContent = nama
  daftar.append(li)
})
// untuk setiap elemen array, buat li lalu tambahkan ke daftar
```

Pada contoh di atas, kita sendiri yang mengurus pembuatan elemen, pengosongan, dan penambahan. Di bab Vue, semua ini dilakukan dengan satu atribut `v-for`, dan di sanalah kamu akan menghargai kemudahannya.

> **Ringkasan:** `createElement` membuat elemen, `append` atau `prepend` menambahkannya ke halaman, dan `remove` menghapusnya.

---

## 6. Menelusuri Pohon

Dari satu elemen, kamu bisa berpindah ke elemen di sekitarnya.

```js
const daftar = document.querySelector('#daftar')

console.log(daftar.parentElement)
// elemen induk
console.log(daftar.children)
// kumpulan elemen anak
console.log(daftar.firstElementChild)
// anak pertama
console.log(daftar.lastElementChild)
// anak terakhir
console.log(daftar.nextElementSibling)
// saudara berikutnya
```

Dengan `closest`, kita bisa naik mencari induk terdekat yang cocok dengan selector.

```js
const item = document.querySelector('.item')
console.log(item.closest('ul'))
// ul terdekat di atas item ini
```

---

## 7. Latihan Singkat

1. Ubah teks `h1` dan warna latar `body` dari JavaScript.
2. Pilih semua `li` dengan `querySelectorAll`, lalu beri class `tebal` pada semuanya.
3. Buat elemen `li` baru dengan teks dari variabel dan tambahkan ke `ul`.
4. Hapus elemen `li` terakhir dari daftar.
5. Ambil isi sebuah `input` lalu tampilkan di sebuah paragraf dengan `textContent`.
6. Buat array berisi tiga nama, lalu tampilkan sebagai daftar `li` di halaman.

---

## Rangkuman

- DOM adalah representasi halaman sebagai pohon object, dan JavaScript mengubah halaman dengan mengubah DOM.
- `querySelector` dan `querySelectorAll` memilih elemen dengan selector CSS.
- `textContent` mengubah teks dengan aman, `innerHTML` menyisipkan HTML (jangan untuk data pengguna), dan `value` membaca isian formulir.
- `classList.add`, `remove`, dan `toggle` adalah cara terbaik mengubah tampilan, dengan CSS yang mengatur gayanya.
- `createElement`, `append`, `prepend`, dan `remove` membuat, menambah, dan menghapus elemen.
- Menampilkan array sebagai elemen dilakukan dengan perulangan atau `forEach`, dan di Vue pekerjaan ini disederhanakan oleh `v-for`.
