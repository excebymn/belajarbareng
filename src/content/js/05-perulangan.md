---
jenis: murid
bab: js
urutan: 5
judul: "Perulangan"
deskripsi: "Mengulang kode dengan for, while, do...while, for...of, serta mengendalikan perulangan dengan break dan continue."
---

# Perulangan

Pada materi ini kamu akan mempelajari: cara mengulang kode dengan `for`, `while`, dan `do...while`, cara menghentikan atau melewati putaran dengan `break` dan `continue`, serta `for...of` untuk menelusuri isi array dan string.

Sebelum mulai, pastikan kamu sudah memahami: variabel, operator, dan kondisi dari materi sebelumnya.

---

## 1. Kenapa Perulangan

Bayangkan kamu perlu menampilkan angka 1 sampai 100. Menulis `console.log` seratus kali tentu tidak masuk akal. **Perulangan** (*loop*) menjalankan kode yang sama berulang kali sampai syaratnya tidak terpenuhi lagi.

Dalam pengembangan web, perulangan dipakai terus-menerus: menampilkan daftar produk, memeriksa semua isian formulir, atau mengolah data dari server.

> **Ringkasan:** Perulangan menjalankan kode yang sama berulang kali selama syarat tertentu terpenuhi.

---

## 2. Perulangan for

`for` dipakai ketika kamu **tahu berapa kali** pengulangan akan terjadi.

#### Cara menulis

```js
for (let i = 1; i <= 5; i++) {
  console.log('Putaran ke-' + i)
}
// menampilkan Putaran ke-1 sampai Putaran ke-5
```

Tanda kurung `for` berisi tiga bagian yang dipisah titik koma.

| Bagian | Contoh | Fungsi |
|---|---|---|
| Inisialisasi | `let i = 1` | Dijalankan sekali di awal, membuat penghitung |
| Kondisi | `i <= 5` | Diperiksa sebelum tiap putaran, jika salah perulangan berhenti |
| Perubahan | `i++` | Dijalankan setelah tiap putaran selesai |

Urutan kerjanya: inisialisasi, lalu periksa kondisi, jalankan isi, lalu perubahan, lalu kembali periksa kondisi, dan seterusnya.

Beberapa variasi:

```js
for (let i = 10; i >= 1; i--) {
  console.log(i)
}
// hitung mundur dari 10 ke 1

for (let i = 0; i <= 20; i += 5) {
  console.log(i)
}
// 0, 5, 10, 15, 20, naik 5 setiap putaran
```

Nama penghitung biasanya `i` (singkatan *index*), yang menjadi kebiasaan umum.

### 2.a Menjumlahkan dengan Perulangan

```js
let total = 0
for (let i = 1; i <= 10; i++) {
  total += i
}
console.log(total)
// 55, hasil 1 + 2 + ... + 10
```

### 2.b Perulangan Bersarang

Perulangan boleh berada di dalam perulangan lain. Perulangan dalam selesai seluruhnya setiap kali perulangan luar berputar satu kali.

```js
for (let baris = 1; baris <= 3; baris++) {
  let teks = ''
  for (let kolom = 1; kolom <= 4; kolom++) {
    teks += '* '
  }
  console.log(teks)
}
// menampilkan tiga baris, masing-masing empat bintang
```

> **Ringkasan:** `for (inisialisasi; kondisi; perubahan)` cocok untuk perulangan dengan jumlah putaran yang diketahui.

---

## 3. Perulangan while

`while` dipakai ketika **jumlah putaran tidak pasti**, dan berhenti saat kondisi tidak terpenuhi lagi.

#### Cara menulis

```js
let saldo = 100
while (saldo > 0) {
  console.log('Saldo:', saldo)
  saldo -= 30
}
// berulang selama saldo masih di atas 0: tampil 100, 70, 40, 10
```

Kondisi diperiksa **sebelum** tiap putaran, sehingga jika kondisinya salah sejak awal, isinya tidak pernah berjalan.

> **Peringatan:** Pastikan sesuatu di dalam perulangan mengubah kondisi, supaya suatu saat berhenti. Perulangan yang tidak pernah berhenti disebut **infinite loop** dan membuat browser membeku. Jika terjadi, tutup tab tersebut.

```js
let n = 0
while (n < 5) {
  console.log(n)
  // lupa menulis n++ di sini: n selalu 0, perulangan tidak akan berhenti
}
```

### 3.a do...while

`do...while` menjalankan isi **minimal satu kali**, lalu memeriksa kondisinya di akhir putaran.

```js
let angka = 10
do {
  console.log('Dijalankan, angka =', angka)
  angka++
} while (angka < 5)
// kondisi salah sejak awal, tetapi isinya tetap berjalan satu kali
```

Jarang dipakai, tetapi berguna untuk kasus seperti "tanyakan dulu, baru periksa jawabannya".

| | `for` | `while` | `do...while` |
|---|---|---|---|
| Cocok untuk | Jumlah putaran diketahui | Jumlah putaran tidak pasti | Minimal satu kali jalan |
| Kondisi diperiksa | Sebelum putaran | Sebelum putaran | Setelah putaran |

> **Ringkasan:** `while` berulang selama kondisi benar. Pastikan ada yang mengubah kondisi agar tidak terjadi infinite loop.

---

## 4. break dan continue

Dua perintah untuk mengendalikan perulangan dari dalam.

### 4.a break

Menghentikan perulangan seketika.

```js
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break
    // berhenti sepenuhnya saat i bernilai 4
  }
  console.log(i)
}
// menampilkan 1, 2, 3
```

### 4.b continue

Melewati sisa isi pada putaran saat ini, lalu lanjut ke putaran berikutnya.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue
    // lewati putaran ini, langsung ke i berikutnya
  }
  console.log(i)
}
// menampilkan 1, 2, 4, 5 (angka 3 dilewati)
```

> **Ringkasan:** `break` menghentikan perulangan, `continue` melewati satu putaran saja.

---

## 5. for...of

Untuk menelusuri isi **array** atau **string**, `for...of` lebih ringkas daripada `for` biasa karena kamu tidak perlu mengurus penghitung `i`.

#### Cara menulis

```js
const buah = ['apel', 'jeruk', 'mangga']

for (const item of buah) {
  console.log(item)
}
// menampilkan apel, jeruk, mangga. item berisi satu elemen pada tiap putaran

for (const huruf of 'Halo') {
  console.log(huruf)
}
// menampilkan H, a, l, o
```

Bandingkan dengan `for` biasa untuk hal yang sama.

```js
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i])
}
// hasil sama, tetapi harus mengurus i, length, dan indeks sendiri
```

Gunakan `for` biasa jika kamu butuh nomor indeksnya, dan `for...of` jika hanya butuh isinya. Array dibahas lengkap di materi Array.

### 5.a for...in

`for...in` menelusuri **nama properti** sebuah object. Detailnya ada di materi Object, dan jangan dipakai untuk array.

```js
const siswa = { nama: 'Budi', kelas: 'X-1' }
for (const kunci in siswa) {
  console.log(kunci, siswa[kunci])
}
// nama Budi
// kelas X-1
```

> **Catatan:** Nanti di Vue, menampilkan daftar di halaman tidak ditulis dengan perulangan manual seperti ini, melainkan dengan `v-for`. Memahami perulangan JavaScript di sini akan membuat `v-for` terasa sangat masuk akal.

> **Ringkasan:** `for...of` menelusuri isi array dan string dengan ringkas. Pakai `for` biasa jika butuh nomor indeks.

---

## 6. Latihan Singkat

1. Tampilkan angka 1 sampai 20 dengan `for`.
2. Hitung jumlah semua bilangan genap dari 1 sampai 100.
3. Tampilkan tabel perkalian 7 dari 1 sampai 10.
4. Buat perulangan `while` yang mengalikan angka 1 dengan 2 terus sampai melebihi 1000.
5. Tampilkan angka 1 sampai 20 kecuali kelipatan 5 memakai `continue`.
6. Telusuri array `['a', 'b', 'c']` dengan `for...of`.

---

## Rangkuman

- Perulangan menjalankan kode yang sama berulang kali selama syarat terpenuhi.
- `for (inisialisasi; kondisi; perubahan)` untuk jumlah putaran yang diketahui, dan `while` untuk jumlah putaran tidak pasti.
- Hindari infinite loop dengan memastikan ada yang mengubah kondisi.
- `break` menghentikan perulangan dan `continue` melewati satu putaran.
- `for...of` menelusuri isi array dan string, sedangkan `for...in` menelusuri nama properti object.
