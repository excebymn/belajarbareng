---
jenis: murid
bab: js
urutan: 13
judul: "Modul: import dan export"
deskripsi: "Memecah kode JavaScript menjadi beberapa file dengan export dan import, perbedaan named dan default export, serta cara menjalankannya di browser."
---

# Modul: import dan export

Pada materi ini kamu akan mempelajari: kenapa kode perlu dipecah menjadi beberapa file, cara memakai `export` dan `import`, perbedaan named export dan default export, cara memuat modul di browser dengan `type="module"`, serta hubungannya dengan `import` di Vue.

Sebelum mulai, pastikan kamu sudah memahami: fungsi, object, dan cara menghubungkan JavaScript ke HTML dari materi sebelumnya.

---

## 1. Kenapa Modul

Saat program membesar, menaruh semua kode dalam satu file membuatnya panjang, sulit dicari, dan rawan bentrok nama. **Modul** memecah kode menjadi beberapa file, masing-masing dengan tugas yang jelas, lalu file-file itu saling memakai.

| Tanpa modul | Dengan modul |
|---|---|
| Satu file panjang | Banyak file kecil, tiap file satu tugas |
| Semua nama variabel bercampur | Setiap file punya ruang sendiri |
| Sulit dipakai ulang | Mudah dipakai ulang di banyak tempat |

Pada modul, semua yang ada di dalam sebuah file bersifat **privat** secara bawaan. Hanya bagian yang sengaja di-**export** yang bisa dipakai file lain lewat **import**.

> **Ringkasan:** Modul memecah kode menjadi beberapa file. Bagian yang di-`export` bisa di-`import` oleh file lain.

---

## 2. Named Export dan Import

Misalkan ada dua file di folder yang sama.

```js
// file: matematika.js
export function tambah(a, b) {
  return a + b
}
// export di depan fungsi membuatnya bisa dipakai file lain

export function kali(a, b) {
  return a * b
}

export const PI = 3.14159
// konstanta juga bisa di-export

const rahasia = 42
// tanpa export: hanya bisa dipakai di dalam file ini
```

```js
// file: script.js
import { tambah, kali, PI } from './matematika.js'
// mengambil tiga bagian dari file matematika.js

console.log(tambah(2, 3))
// 5
console.log(kali(4, 5))
// 20
console.log(PI)
// 3.14159
```

Hal yang perlu diperhatikan:

- Nama di dalam `{ }` **harus sama persis** dengan nama yang di-export.
- Jalur file diawali `./` untuk file di folder yang sama, atau `../` untuk naik satu folder.
- Di browser, **ekstensi `.js` wajib ditulis**.
- Satu file boleh punya banyak named export.

### 2.a Mengganti Nama saat Import

```js
import { tambah as jumlahkan } from './matematika.js'
// tambah dipakai dengan nama baru jumlahkan, berguna jika terjadi bentrok nama

import * as mat from './matematika.js'
// mengambil semuanya sebagai satu object bernama mat
console.log(mat.tambah(1, 2))
// 3
```

> **Ringkasan:** `export` membuka bagian file, dan `import { nama } from './file.js'` mengambilnya. Nama harus sama dengan yang di-export, dan jalur diawali `./`.

---

## 3. Default Export

Sebuah file bisa menetapkan **satu** nilai sebagai export utamanya dengan `export default`.

```js
// file: sapa.js
export default function sapa(nama) {
  return `Halo, ${nama}!`
}
```

```js
// file: script.js
import sapa from './sapa.js'
// tanpa kurung kurawal, dan nama bebas
import halo from './sapa.js'
// nama lain juga boleh, tetap merujuk ke fungsi yang sama

console.log(sapa('Budi'))
// Halo, Budi!
```

Perbedaan keduanya:

| | Named export | Default export |
|---|---|---|
| Jumlah per file | Banyak | Satu |
| Penulisan di export | `export function x()` | `export default x` |
| Penulisan di import | `import { x } from ...` | `import x from ...` |
| Nama di import | Harus sama | Bebas |

Keduanya bisa dipakai bersamaan dalam satu file.

```js
import sapa, { tambah } from './gabungan.js'
// satu default dan satu named sekaligus
```

> **Ringkasan:** `export default` menetapkan satu export utama yang di-import tanpa kurung kurawal, dengan nama bebas.

---

## 4. Memakai Modul di Browser

Agar browser memperlakukan sebuah script sebagai modul, tambahkan `type="module"`.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <title>Modul</title>
    <script type="module" src="script.js"></script>
    <!-- type module mengaktifkan import dan export di script.js -->
  </head>
  <body>
    <h1>Belajar Modul</h1>
  </body>
</html>
```

Ciri-ciri script modul:

- Otomatis berjalan seperti `defer`, jadi kamu tidak perlu menulis `defer`.
- Punya ruang sendiri: variabel di dalamnya tidak bocor ke halaman lain.
- Berjalan dalam mode ketat (*strict mode*) secara otomatis.

### 4.a Wajib Lewat Server Lokal

Browser menolak memuat modul jika halaman dibuka lewat `file:///` (klik dua kali file HTML). Di Console akan muncul error terkait **CORS**. Solusinya, buka halaman lewat server lokal.

- Pakai extension **Live Server** di VS Code: klik kanan `index.html`, lalu **Open with Live Server**.
- Atau jalankan perintah di terminal: `npx serve` pada folder project.

Alamat yang terbuka akan berbentuk `http://127.0.0.1:5500` atau `http://localhost:...`, bukan `file:///...`.

> **Catatan:** Jika halamanmu mendadak tidak mau menjalankan JavaScript setelah menambah `type="module"`, hampir pasti penyebabnya karena dibuka dari `file:///`. Buka lewat Live Server.

> **Ringkasan:** Tambahkan `type="module"` di `script`, dan buka halaman lewat server lokal seperti Live Server, bukan dari `file:///`.

---

## 5. Contoh: Memecah Program Kecil

Struktur folder:

```text
latihan-modul/
├── index.html
├── script.js
└── tugas.js
```

```js
// file: tugas.js
export function buatTugas(teks) {
  return { teks, selesai: false }
  // shorthand properti: { teks: teks, selesai: false }
}

export function hitungSisa(daftar) {
  return daftar.filter(t => !t.selesai).length
}
```

```js
// file: script.js
import { buatTugas, hitungSisa } from './tugas.js'

const daftar = [buatTugas('Belajar HTML'), buatTugas('Belajar CSS')]
daftar[0].selesai = true

console.log(hitungSisa(daftar))
// 1, tinggal satu tugas yang belum selesai
```

Pemisahan seperti ini membuat `script.js` fokus pada tampilan, sedangkan `tugas.js` fokus pada logika data.

---

## 6. Hubungan dengan Vue

Di bab Vue, kamu akan sering menulis seperti ini:

```js
import { createApp } from 'vue'
import App from './App.vue'
// createApp adalah named import dari paket vue
// App adalah default import dari file App.vue
```

Itulah `import` yang sama dengan yang baru kamu pelajari. Dua hal yang berbeda dari contoh di materi ini:

- `from 'vue'` tanpa `./` berarti mengambil dari **paket** yang dipasang lewat npm (folder `node_modules`), bukan dari file milikmu. Browser tidak bisa memahami bentuk ini sendiri, sehingga project Vue memakai alat bantu bernama **Vite** yang mengurusnya.
- `./App.vue` mengimpor file `.vue`, yang juga hanya bisa dimengerti lewat Vite.

Itulah salah satu alasan project Vue dijalankan dengan `npm run dev`, bukan dengan klik dua kali file HTML.

> **Ringkasan:** `import` di Vue adalah mekanisme yang sama dengan modul JavaScript. Bentuk `from 'vue'` mengambil dari paket npm yang diurus oleh Vite.

---

## 7. Latihan Singkat

1. Buat `matematika.js` berisi tiga fungsi (`tambah`, `kurang`, `kali`) dengan named export.
2. Impor ketiganya di `script.js` dan tampilkan hasilnya di Console.
3. Buat `sapa.js` dengan default export, lalu impor dengan dua nama berbeda.
4. Muat script dengan `type="module"` dan buka lewat Live Server.
5. Sengaja buka halaman dari `file:///` lalu baca pesan error di Console.

---

## Rangkuman

- Modul memecah kode menjadi file-file kecil. Bagian yang di-`export` bisa di-`import` oleh file lain.
- Named export di-import dengan `{ nama }` dan namanya harus sama. Default export hanya satu per file dan di-import tanpa kurung kurawal dengan nama bebas.
- Jalur file diawali `./` atau `../`, dan di browser ekstensi `.js` wajib ditulis.
- Aktifkan modul di browser dengan `<script type="module">`, dan buka halaman lewat server lokal.
- `import` di project Vue memakai mekanisme yang sama, dengan Vite yang mengurus paket dan file `.vue`.
