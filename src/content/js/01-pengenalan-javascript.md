---
jenis: murid
bab: js
urutan: 1
judul: "Pengenalan JavaScript"
deskripsi: "Memahami peran JavaScript di web, cara memasangnya ke HTML, console.log, DevTools Console, komentar, dan perbedaannya dengan Java atau C++."
---

# Pengenalan JavaScript

Pada materi ini kamu akan mempelajari: apa itu JavaScript, cara memasangnya ke halaman HTML, cara menampilkan hasil dengan `console.log`, cara memakai Console di DevTools, komentar, serta perbedaan utama JavaScript dengan Java atau C++.

Sebelum mulai, pastikan kamu sudah memahami: dasar HTML dan CSS dari bab HTML dan CSS, serta dasar pemrograman (variabel dan alur program) dari bahasa seperti Java atau C++.

---

## 1. Apa itu JavaScript

**JavaScript** (sering disingkat JS) adalah bahasa pemrograman yang membuat halaman web **interaktif**. HTML menyusun isi, CSS mengatur tampilan, dan JavaScript menambah perilaku: bereaksi saat tombol diklik, memeriksa isian formulir, menampilkan data, dan banyak lagi.

| Teknologi | Peran | Analogi tubuh |
|---|---|---|
| HTML | Struktur dan isi | Kerangka |
| CSS | Tampilan | Penampilan |
| JavaScript | Perilaku | Otot dan saraf |

Berbeda dari HTML dan CSS, JavaScript adalah **bahasa pemrograman sungguhan**: ada variabel, kondisi, perulangan, dan fungsi.

JavaScript berjalan di dua tempat:

- **Di browser**: untuk membuat halaman interaktif (fokus bab ini).
- **Di luar browser** lewat Node.js: untuk membuat alat bantu dan server (dibahas di bab Tools dan bab backend).

> **Catatan:** Java dan JavaScript adalah dua bahasa yang berbeda. Kemiripan nama hanyalah kebetulan sejarah. Kemiripan sintaksis dengan Java dan C++ ada, tetapi cara kerjanya cukup berbeda.

> **Ringkasan:** JavaScript menambah perilaku pada halaman web, dan merupakan bahasa pemrograman sungguhan yang berjalan di browser maupun lewat Node.js.

---

## 2. Memasang JavaScript ke HTML

### 2.a File Eksternal (Disarankan)

Tulis kode di file berakhiran `.js`, lalu hubungkan dari HTML dengan elemen `script`.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Belajar JavaScript</title>
    <script src="script.js" defer></script>
    <!-- memuat script.js, defer menunda eksekusi sampai seluruh HTML selesai dibaca -->
  </head>
  <body>
    <h1>Halo, JavaScript!</h1>
  </body>
</html>
```

```js
console.log('Halo dari script.js')
// isi file script.js, menampilkan tulisan di Console
```

Atribut `defer` penting: ia memastikan kode baru berjalan setelah elemen-elemen HTML tersedia. Tanpanya, kode yang mencoba mengakses elemen di halaman bisa gagal karena elemennya belum dibaca browser.

### 2.b Script Internal

Kode juga bisa ditulis langsung di dalam elemen `script`.

```html
<body>
  <h1>Halo</h1>
  <script>
    console.log('Halo dari script internal')
    // cocok untuk percobaan singkat
  </script>
</body>
```

Untuk project sesungguhnya, pakai file eksternal agar rapi dan bisa dipakai ulang.

| Cara | Kapan dipakai |
|---|---|
| File eksternal (`src`) | Hampir selalu |
| Internal (di dalam `script`) | Percobaan singkat |

> **Ringkasan:** Hubungkan file `.js` dengan `<script src="..." defer></script>`. Atribut `defer` menunda eksekusi sampai HTML selesai dibaca.

---

## 3. Console dan console.log

Untuk melihat hasil kode, kita memakai **Console**, yaitu bagian DevTools yang menampilkan keluaran dan pesan kesalahan.

#### Cara membuka

1. Buka halamanmu di browser.
2. Tekan `F12`, lalu pilih tab **Console**.

#### Cara menulis

```js
console.log('Halo, dunia!')
// menampilkan teks Halo, dunia! di Console
console.log(2 + 3)
// menampilkan 5
console.log('Hasil:', 2 + 3)
// menampilkan beberapa nilai sekaligus, dipisah koma: Hasil: 5
```

`console.log` adalah alat bantu utama saat belajar. Gunakan untuk memeriksa nilai di titik mana pun dalam kodemu. Padanannya di Java adalah `System.out.println`, dan di C++ adalah `std::cout`.

Beberapa variasi lain:

```js
console.warn('Peringatan')
// pesan berwarna kuning
console.error('Terjadi kesalahan')
// pesan berwarna merah
```

### 3.a Mencoba Langsung di Console

Console juga bisa dipakai untuk mengetik kode langsung dan melihat hasilnya seketika, tanpa membuat file.

```js
5 * 8
// ketik di Console lalu Enter, hasilnya 40 langsung tampil
```

Ini cara cepat mencoba ide kecil.

### 3.b Membaca Pesan Kesalahan

Saat kode salah, Console menampilkan pesan merah yang menyebutkan jenis kesalahan, penjelasan singkat, dan nama file beserta nomor barisnya.

```text
Uncaught ReferenceError: nama is not defined
    at script.js:3
```

Artinya: di file `script.js` baris 3, kode memakai `nama` yang belum pernah dibuat. Biasakan **membaca pesan ini** sebelum bertanya ke orang lain atau AI. Kebanyakan masalah ringan bisa kamu selesaikan sendiri dari pesan tersebut.

> **Ringkasan:** `console.log` menampilkan nilai di Console (`F12`). Baca pesan error di Console: ia menyebutkan jenis masalah dan lokasinya.

---

## 4. Komentar dan Penulisan Kode

### 4.a Komentar

```js
// komentar satu baris

/*
  komentar
  beberapa baris
*/

console.log('Halo') // komentar juga boleh di akhir baris
```

### 4.b Titik Koma dan Case Sensitive

- Akhir pernyataan boleh diakhiri titik koma (`;`), tetapi boleh juga tidak. Di kursus ini kita **tidak memakai titik koma**, yang umum dipakai di banyak project modern. Pilih satu gaya dan konsisten.
- JavaScript **membedakan huruf besar dan kecil**. `nama` dan `Nama` adalah dua hal yang berbeda.
- Kode dijalankan **dari atas ke bawah**, baris demi baris.

> **Ringkasan:** Komentar ditulis dengan `//` dan `/* */`. JavaScript membedakan huruf besar kecil dan menjalankan kode dari atas ke bawah.

---

## 5. Perbedaan dengan Java dan C++

Jika kamu sudah mengenal Java atau C++, beberapa hal akan terasa berbeda.

| | Java / C++ | JavaScript |
|---|---|---|
| Penulisan tipe | Wajib ditulis (`int x = 5`) | Tidak ditulis (`let x = 5`) |
| Proses menjalankan | Dikompilasi, lalu dijalankan | Langsung dijalankan oleh browser |
| Titik awal program | Fungsi `main` | Tidak ada, kode dijalankan dari baris pertama |
| Penanganan tipe | Statis (tipe ditentukan di awal) | Dinamis (tipe mengikuti nilai) |
| Tempat berjalan | Komputer, server | Browser dan Node.js |

Perbedaan "tipe dinamis" akan terlihat di materi Variabel dan Tipe Data.

> **Ringkasan:** JavaScript tidak butuh penulisan tipe, tidak dikompilasi, dan tidak punya fungsi `main`.

---

## 6. Latihan Singkat

1. Buat `index.html` dan `script.js`, hubungkan dengan `defer`.
2. Tulis tiga `console.log` yang menampilkan namamu, umurmu, dan hasil `7 * 6`.
3. Buka Console dan pastikan ketiganya tampil.
4. Sengaja tulis `console.log(namaku)` tanpa pernah membuat `namaku`, lalu baca pesan errornya.
5. Coba hitung beberapa operasi langsung di Console.

---

## Rangkuman

- JavaScript menambah perilaku pada halaman web dan berjalan di browser maupun lewat Node.js. Java dan JavaScript adalah dua bahasa yang berbeda.
- Hubungkan file `.js` dengan `<script src="..." defer></script>`.
- `console.log` menampilkan nilai di Console (`F12`), yang juga menampilkan pesan kesalahan lengkap dengan lokasinya.
- Komentar ditulis dengan `//` dan `/* */`. JavaScript membedakan huruf besar kecil dan menjalankan kode dari atas ke bawah.
- Dibandingkan Java atau C++, JavaScript tidak butuh penulisan tipe, tidak dikompilasi, dan tidak punya fungsi `main`.
