---
jenis: pengajar
pertemuan: 1
judul: "Setup dan Membuat Project Vue"
deskripsi: "Menyiapkan terminal, Node.js, dan VS Code, lalu membuat, menjalankan, dan merapikan project Vue pertama."
---

# Modul Pengajar: Setup dan Membuat Project Vue

Scope materi: dari terminal dasar sampai project Vue yang bersih dan siap dipakai belajar.

| Blok | Isi | Jeda |
|---|---|---|
| 1 | Terminal dasar, Node.js dan npm, VS Code dan extension Vue | Jeda |
| 2 | Membuat project Vue, dev server, struktur folder dan membersihkan template | Selesai |

Catatan: komentar di dalam kode diletakkan tepat di bawah baris yang dijelaskan.

---

# BLOK 1

## 1. Terminal Dasar

### 1.a Apa itu Terminal

- **Terminal:** program untuk memberi perintah ke komputer lewat teks, dijalankan di folder kerja saat ini.
- **Cara membuka:** Windows lewat Terminal/PowerShell, macOS lewat Terminal.

```text
PS C:\Users\nama>
# prompt di Windows PowerShell, menunjukkan folder kerja saat ini
nama@komputer ~ %
# prompt di macOS, tanda ~ berarti folder home
```

- **Mental model:** terminal = mengetik perintah, dijalankan di folder tempat kita berdiri.

### 1.b Perintah Dasar

- **Melihat lokasi dan isi:** `pwd` menampilkan folder saat ini, `ls` menampilkan isinya.

```text
pwd
# menampilkan lokasi folder kerja saat ini
ls
# menampilkan isi folder saat ini (di cmd Windows pakai dir)
```

- **Berpindah folder:** `cd` masuk ke folder, `cd ..` naik satu tingkat.

```text
cd Documents
# masuk ke folder Documents
cd ..
# naik satu tingkat ke folder induk
```

- **Membuat folder:** `mkdir` membuat folder baru.

```text
mkdir belajar-vue
# membuat folder baru bernama belajar-vue
```

## 2. Node.js dan npm

### 2.a Node.js

- **Node.js:** program untuk menjalankan JavaScript di luar browser, dibutuhkan alat-alat Vue.
- **Pemasangan:** unduh versi LTS dari nodejs.org, jalankan installer, lalu buka ulang terminal.

```text
nodejs.org
# situs resmi, pilih tombol versi LTS karena paling stabil
```

### 2.b npm

- **npm:** pengelola paket JavaScript yang ikut terpasang bersama Node.js.
- **node_modules:** folder tempat paket hasil unduhan disimpan.

```text
npm install
# mengunduh paket yang dibutuhkan project ke folder node_modules
```

### 2.c Mengecek Versi

- **Cek versi:** `-v` menampilkan versi, jika muncul angka berarti pemasangan berhasil.

```text
node -v
# menampilkan versi Node.js, misalnya v22.12.0 (minimal 20.19 untuk Vue terbaru)
npm -v
# menampilkan versi npm
```

- **Mental model:** ada nomor versi = terpasang, tidak dikenali = buka ulang terminal.

## 3. VS Code dan Extension Vue

### 3.a VS Code dan Membuka Folder

- **Buka folder:** lewat File → Open Folder, atau `code .` dari terminal.

```text
cd belajar-vue
# masuk ke folder project
code .
# membuka folder saat ini di VS Code (titik = folder ini)
```

### 3.b Extension Vue (Official)

- **Extension:** tambahan fitur untuk VS Code. Untuk Vue pakai **Vue - Official** (dulu Volar).

```text
Ctrl+Shift+X
# membuka panel Extensions, lalu cari Vue - Official dan klik Install
```

- **Fungsi:** memberi warna, saran kode, dan penanda kesalahan di file `.vue`.

---

# BLOK 2

## 4. Membuat Project Vue

### 4.a Perintah Pembuatan

- **create-vue:** alat resmi untuk membuat kerangka project Vue.

```text
npm create vue@latest
# menjalankan create-vue versi terbaru (jika ditanya izin unduh, ketik y)
```

### 4.b Pertanyaan saat Pembuatan

- **Project name:** huruf kecil, tanpa spasi, pakai tanda hubung.
- **Fitur tambahan:** tidak ada yang dipilih, langsung Enter. Pertanyaan ya/tidak lain dijawab No.

```text
Project name: belajar-vue
# nama folder project yang akan dibuat
Select features to include: (tanpa pilihan, tekan Enter)
# semua fitur tambahan dilewati agar project sederhana
```

### 4.c Menginstal Dependency

- **Dependency:** paket yang dibutuhkan project, tercatat di `package.json`.

```text
cd belajar-vue
# masuk ke folder project yang baru dibuat
npm install
# mengunduh semua dependency ke node_modules (cukup sekali)
```

- **Alur pikir:** create → masuk folder → install.

## 5. Menjalankan Dev Server

### 5.a Menjalankan Server

- **Dev server:** server lokal yang mengubah kode Vue menjadi halaman di browser.

```text
npm run dev
# menjalankan script dev dari package.json
  ➜  Local:   http://localhost:5173/
# alamat yang dibuka di browser (angka port bisa berbeda)
```

### 5.b Hot Reload

- **Hot reload:** simpan file, browser langsung berubah tanpa refresh.

```vue
<template>
  <h1>Halo, Vue!</h1>
  <!-- ubah teks ini lalu simpan dengan Ctrl+S, browser langsung ikut berubah -->
</template>
```

### 5.c Menghentikan Server

- **Menghentikan:** `Ctrl+C` di terminal yang menjalankan server.

```text
Ctrl+C
# menghentikan server
npm run dev
# menjalankan server lagi
```

## 6. Struktur Folder dan Membersihkan Template

### 6.a Struktur Folder

- **Folder pendukung:** `node_modules` menyimpan paket, `public` menyimpan file statis.

```text
node_modules/
# hasil npm install, tidak diubah manual
public/
# file statis seperti ikon situs
```

- **index.html:** satu-satunya halaman HTML, berisi elemen kosong tempat Vue dipasang.

```html
<div id="app"></div>
<!-- elemen kosong tempat aplikasi Vue dipasang -->
<script type="module" src="/src/main.js"></script>
<!-- memuat main.js sebagai titik awal aplikasi -->
```

- **src/main.js:** titik awal yang memasang `App.vue` ke halaman.

```js
import './assets/main.css'
// memuat file CSS bawaan (bila ada di project)
import { createApp } from 'vue'
// mengambil fungsi createApp dari paket vue
import App from './App.vue'
// mengambil komponen utama dari file App.vue
createApp(App).mount('#app')
// membuat aplikasi dari App lalu memasangnya ke elemen dengan id app
```

- **Mental model:** index.html = wadah kosong, main.js = pemasang, App.vue = isi tampilan.

### 6.b Membersihkan Template Bawaan

- **Langkah:** hapus semua file di `src/components/`, lalu ganti isi `App.vue`.

```vue
<script setup>
// tempat kode JavaScript, dikosongkan dulu
</script>

<template>
  <h1>Halo, Vue!</h1>
  <!-- tampilan sederhana pengganti isi contoh bawaan -->
</template>
```

- **Alur pikir:** npm create vue@latest → npm install → npm run dev → edit src/App.vue.
