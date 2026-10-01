---
jenis: murid
pertemuan: 1
judul: "Setup dan Membuat Project Vue"
deskripsi: "Menyiapkan terminal, Node.js, dan VS Code, lalu membuat, menjalankan, dan merapikan project Vue pertamamu."
---

# Setup dan Membuat Project Vue

Pada pertemuan ini kamu akan mempelajari: terminal dasar, Node.js dan npm, VS Code dengan extension Vue, cara membuat project Vue, menjalankan dev server, serta struktur folder project.

Sebelum mulai, pastikan kamu sudah memahami: dasar HTML, CSS, dan JavaScript.

---

## 1. Terminal Dasar

Terminal adalah tempat kita memberi perintah ke komputer lewat teks. Hampir semua alat pengembangan web modern dijalankan dari terminal, jadi kita mulai dari sini.

### 1.a Apa itu Terminal

**Terminal** adalah program yang menerima perintah berupa teks lalu menjalankannya. Perintah yang kamu ketik dijalankan di sebuah folder, yang disebut folder kerja saat ini.

#### Cara membuka

- **Windows:** cari **Terminal** atau **PowerShell** di menu Start.
- **macOS:** buka aplikasi **Terminal** lewat Spotlight.
- **Linux:** buka aplikasi **Terminal** dari daftar aplikasi.

Setelah terbuka, kamu akan melihat sebuah baris dengan kursor berkedip. Baris itu biasanya menampilkan lokasi folder tempat kamu berada. Ketik perintah di sana, lalu tekan **Enter** untuk menjalankannya.

> **Ringkasan:** Terminal adalah tempat mengetik perintah. Perintah dijalankan di folder tempat terminal sedang berada.

### 1.b Perintah Dasar

Ada beberapa perintah dasar untuk berpindah dan melihat isi folder. Perintah ini berlaku di macOS, Linux, dan PowerShell di Windows.

#### Cara menulis

```text
pwd
ls
cd Documents
cd ..
mkdir belajar-vue
```

Penjelasan tiap perintah:

- `pwd` menampilkan lokasi folder kerja saat ini.
- `ls` menampilkan isi folder saat ini.
- `cd Documents` masuk ke folder bernama `Documents`.
- `cd ..` naik satu tingkat ke folder induk.
- `mkdir belajar-vue` membuat folder baru bernama `belajar-vue`.

> **Catatan:** Di Command Prompt (cmd) Windows, perintah untuk melihat isi folder adalah `dir`, bukan `ls`. Di PowerShell, `ls` tetap bisa dipakai.

> **Ringkasan:** `pwd` untuk melihat lokasi, `ls` untuk melihat isi, `cd` untuk berpindah folder, dan `mkdir` untuk membuat folder.

---

## 2. Node.js dan npm

Vue tidak berjalan sendirian. Alat untuk membuat dan menjalankan project Vue membutuhkan Node.js dan npm, jadi keduanya harus dipasang lebih dulu.

### 2.a Node.js

**Node.js** adalah program yang memungkinkan JavaScript dijalankan di luar browser, yaitu langsung di komputermu. Alat-alat pengembangan Vue ditulis dengan JavaScript, sehingga membutuhkan Node.js untuk bisa berjalan.

#### Cara memasang

1. Buka situs resmi `nodejs.org`.
2. Unduh versi **LTS** (Long Term Support), yaitu versi yang stabil dan direkomendasikan.
3. Jalankan installer dan ikuti langkahnya sampai selesai.
4. Tutup lalu buka kembali terminal agar Node.js dikenali.

> **Ringkasan:** Node.js menjalankan JavaScript di luar browser dan dibutuhkan oleh alat-alat Vue. Pasang versi LTS dari nodejs.org.

### 2.b npm

**npm** (Node Package Manager) adalah pengelola paket untuk JavaScript. Paket adalah kumpulan kode siap pakai yang ditulis orang lain, misalnya Vue itu sendiri. npm ikut terpasang otomatis bersama Node.js.

Dengan npm, kamu bisa mengunduh paket lewat perintah di terminal. Paket yang diunduh disimpan di folder bernama `node_modules` di dalam project.

> **Ringkasan:** npm mengunduh dan mengelola paket JavaScript. Ia sudah termasuk saat memasang Node.js.

### 2.c Mengecek Versi

Setelah memasang, pastikan Node.js dan npm sudah terpasang dengan benar dengan mengecek versinya.

#### Cara menulis

```text
node -v
npm -v
```

Kedua perintah akan menampilkan nomor versi, misalnya `v22.12.0` untuk Node.js. Angka pastinya bisa berbeda di komputermu, dan itu tidak masalah. Untuk project Vue terbaru, gunakan Node.js versi 20.19 atau lebih baru.

Jika muncul pesan seperti `command not found` atau `not recognized`, tutup terminal lalu buka lagi. Jika masih sama, ulangi pemasangan Node.js.

> **Ringkasan:** `node -v` dan `npm -v` menampilkan versi. Bila muncul nomor versi, berarti pemasangan berhasil.

---

## 3. VS Code dan Extension Vue

Kita butuh editor kode untuk menulis project. Pada materi ini kita memakai Visual Studio Code.

### 3.a VS Code dan Membuka Folder

**Visual Studio Code (VS Code)** adalah editor kode gratis yang populer untuk pengembangan web. Kamu bisa mengunduhnya dari `code.visualstudio.com`.

#### Cara membuka folder

Lewat menu, pilih **File → Open Folder**, lalu pilih folder project. Kamu juga bisa membukanya dari terminal.

```text
cd belajar-vue
code .
```

Perintah `cd belajar-vue` masuk ke folder project, lalu `code .` membuka folder saat ini (tanda titik berarti "folder ini") di VS Code.

> **Catatan:** Perintah `code` hanya tersedia bila VS Code sudah terdaftar di sistem. Bila tidak berfungsi, gunakan menu **File → Open Folder**.

> **Ringkasan:** VS Code adalah editor kode. Folder bisa dibuka lewat menu atau dengan perintah `code .`.

### 3.b Extension Vue (Official)

**Extension** adalah tambahan fitur untuk VS Code. Untuk Vue, extension yang dipakai adalah **Vue - Official** (dulu bernama Volar). Extension ini membuat file `.vue` berwarna dengan benar, memberi saran kode otomatis, dan menandai kesalahan penulisan.

#### Cara memasang

1. Buka panel **Extensions** di VS Code (ikon kotak di sisi kiri, atau tekan `Ctrl+Shift+X`).
2. Ketik **Vue - Official** di kolom pencarian.
3. Klik **Install** pada hasil yang dibuat oleh **Vue**.

> **Ringkasan:** Extension Vue - Official membantu menulis file `.vue` dengan warna, saran kode, dan pengecekan kesalahan.

---

## 4. Membuat Project Vue

Sekarang semua alat sudah siap. Kita akan membuat project Vue dengan alat resmi bernama `create-vue`.

### 4.a Perintah Pembuatan

**`create-vue`** adalah alat resmi Vue yang membuatkan kerangka project lengkap dalam beberapa menit. Alat ini dijalankan lewat npm.

#### Cara menulis

Pindah dulu ke folder tempat kamu ingin menyimpan project, lalu jalankan:

```text
npm create vue@latest
```

Tulisan `@latest` berarti memakai versi terbaru. Pada pertama kali dijalankan, npm bisa menanyakan izin untuk mengunduh `create-vue`. Ketik `y` lalu tekan Enter.

> **Ringkasan:** `npm create vue@latest` membuat kerangka project Vue dengan alat resmi.

### 4.b Pertanyaan saat Pembuatan

Setelah dijalankan, alat ini mengajukan beberapa pertanyaan. Jawaban yang dipakai pada materi ini:

| Pertanyaan | Jawaban |
|---|---|
| Project name | `belajar-vue` |
| Select features to include | tidak memilih apa pun, langsung tekan Enter |
| Pertanyaan pilihan lain (ya/tidak) | pilih **No** |

Nama project ditulis dengan huruf kecil tanpa spasi. Gunakan tanda hubung (`-`) sebagai pemisah kata. Daftar pertanyaan bisa sedikit berbeda antar versi, dan aturan yang sama tetap berlaku.

> **Catatan:** Fitur tambahan seperti Router atau TypeScript tidak kita pakai sekarang agar project tetap sederhana.

> **Ringkasan:** Beri nama project `belajar-vue`, lalu lewati semua fitur tambahan.

### 4.c Menginstal Dependency

Setelah pembuatan selesai, project baru berisi daftar paket yang dibutuhkan tetapi belum mengunduhnya. Paket-paket itu disebut **dependency**.

#### Cara menulis

```text
cd belajar-vue
npm install
```

`cd belajar-vue` masuk ke folder project. `npm install` mengunduh semua dependency yang tercatat di `package.json` ke folder `node_modules`. Lamanya bergantung pada kecepatan internet.

> **Ringkasan:** Masuk ke folder project, lalu jalankan `npm install` sekali untuk mengunduh semua paket.

---

## 5. Menjalankan Dev Server

Project Vue tidak dibuka dengan mengklik dua kali file HTML. Kita menjalankannya lewat server pengembangan.

### 5.a Menjalankan Server

**Dev server** adalah server yang berjalan di komputermu selama kamu mengembangkan project. Server ini mengubah kode Vue menjadi halaman yang bisa dibuka di browser.

#### Cara menulis

```text
npm run dev
```

Perintah ini menjalankan script bernama `dev` yang tertulis di `package.json`. Bila berhasil, terminal menampilkan alamat lokal seperti berikut.

```text
  VITE ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

Buka alamat setelah `Local:` di browser. Nomor versi dan angka waktu di komputermu bisa berbeda. Kamu akan melihat halaman awal bawaan Vue.

> **Ringkasan:** `npm run dev` menjalankan server, lalu project dibuka di alamat `localhost` yang tertera.

### 5.b Hot Reload

**Hot reload** adalah fitur yang memperbarui tampilan di browser secara otomatis setiap kali kamu menyimpan file, tanpa perlu me-refresh halaman.

#### Cara mencobanya

Buka file `src/App.vue`, ubah sebuah teks, lalu simpan dengan `Ctrl+S`.

```vue
<template>
  <h1>Halo, Vue!</h1>
</template>
```

Setelah disimpan, teks di browser langsung berubah. Fitur ini mempercepat proses belajar karena hasil perubahan terlihat seketika.

> **Ringkasan:** Simpan file, dan browser langsung menampilkan perubahannya tanpa refresh.

### 5.c Menghentikan Server

Server terus berjalan selama terminal terbuka. Untuk menghentikannya, klik terminal lalu tekan `Ctrl+C`. Untuk menjalankannya lagi, ketik ulang `npm run dev`.

> **Ringkasan:** `Ctrl+C` menghentikan server, dan `npm run dev` menjalankannya kembali.

---

## 6. Struktur Folder dan Membersihkan Template

Project baru sudah berisi file contoh bawaan. Sebelum mulai menulis kode sendiri, kita kenali isinya lalu bersihkan.

### 6.a Struktur Folder

Setelah dibuat, project memiliki struktur berikut. Isi folder `src` bisa sedikit berbeda antar versi.

```text
belajar-vue/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
└── vite.config.js
```

Fungsi tiap bagian:

| Bagian | Fungsi |
|---|---|
| `node_modules/` | Tempat semua paket hasil `npm install`. Jangan diubah manual. |
| `public/` | File statis seperti ikon situs. |
| `src/` | Folder utama tempat kamu menulis kode. |
| `src/assets/` | Gambar dan file CSS. |
| `src/components/` | Tempat komponen Vue (dipelajari di pertemuan berikutnya). |
| `src/App.vue` | Komponen utama yang tampil di halaman. |
| `src/main.js` | Titik awal aplikasi, yaitu tempat Vue dipasang ke halaman. |
| `index.html` | Halaman HTML tunggal yang memuat aplikasi. |
| `package.json` | Daftar script dan dependency project. |
| `vite.config.js` | Pengaturan alat pembangun project. |

Alur kerjanya: `index.html` memiliki elemen kosong `<div id="app"></div>`. File `main.js` memasang `App.vue` ke elemen itu.

```js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

Baris pertama mengambil `createApp` dari paket Vue. Baris kedua mengambil komponen utama dari `App.vue`. Baris terakhir membuat aplikasi dari `App`, lalu memasangnya ke elemen dengan id `app`.

> **Ringkasan:** Kode kita tulis di folder `src`. Titik awalnya `main.js`, yang memasang `App.vue` ke `index.html`.

### 6.b Membersihkan Template Bawaan

Isi contoh bawaan tidak kita perlukan. Merapikannya membuat project kosong dan siap dipakai belajar.

#### Langkah-langkah

1. Hapus semua file di dalam folder `src/components/`.
2. Ganti seluruh isi `src/App.vue` dengan kode berikut.

```vue
<script setup>
</script>

<template>
  <h1>Halo, Vue!</h1>
</template>
```

`<script setup>` adalah tempat kode JavaScript, dan `<template>` adalah tempat tampilan HTML. Keduanya kita biarkan sederhana dulu. Setelah disimpan, browser hanya menampilkan tulisan **Halo, Vue!**. Project bersih ini akan menjadi titik awal pertemuan berikutnya.

> **Ringkasan:** Kosongkan `src/components/` dan sisakan `App.vue` yang sederhana. Project siap dipakai belajar.

---

## Rangkuman Pertemuan

- Terminal dipakai untuk menjalankan perintah. Perintah dasarnya `pwd`, `ls`, `cd`, dan `mkdir`.
- Node.js menjalankan JavaScript di luar browser, dan npm mengelola paket. Keduanya dicek dengan `node -v` dan `npm -v`.
- VS Code dengan extension Vue - Official adalah editor untuk menulis project Vue.
- Project dibuat dengan `npm create vue@latest`, lalu paketnya diunduh dengan `npm install`.
- `npm run dev` menjalankan dev server, hot reload memperbarui browser otomatis, dan `Ctrl+C` menghentikannya.
- Kode ditulis di folder `src`, dimulai dari `main.js` yang memasang `App.vue`.
