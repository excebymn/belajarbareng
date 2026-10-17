---
jenis: murid
bab: vue
urutan: 2
judul: "Membuat Project Vue dengan Vite"
deskripsi: "Membuat project dengan npm create vue, mengenal struktur folder, menjalankan dev server, memasang extension Vue di VS Code, dan memakai Vue DevTools."
---

# Membuat Project Vue dengan Vite

Pada materi ini kamu akan mempelajari: cara membuat project Vue dengan `npm create vue`, struktur folder yang dihasilkan, menjalankan dev server, membersihkan isi bawaan project, serta memasang alat bantu di VS Code dan browser.

Sebelum mulai, pastikan kamu sudah memahami: Node.js dan npm dari bab Tools, serta terminal dasar.

---

## 1. Apa itu Vite

Kode Vue ditulis dalam file `.vue`, yang tidak bisa dibaca browser secara langsung. Perlu alat yang mengubahnya menjadi HTML, CSS, dan JavaScript biasa. Alat itu bernama **Vite** (dibaca "vit", bahasa Prancis untuk "cepat").

Vite menyediakan dua hal penting:

- **Dev server**: menjalankan project di komputermu dan memperbarui browser otomatis setiap kali file disimpan.
- **Build**: menyiapkan file akhir yang siap diunggah ke server.

Project Vue resmi dibuat dengan alat bernama `create-vue`, yang sudah menyiapkan Vite di dalamnya.

> **Ringkasan:** Vite menjalankan dan menyiapkan project Vue. `create-vue` membuat kerangka project yang sudah memakai Vite.

---

## 2. Memeriksa Node.js

Pastikan Node.js terpasang dan cukup baru.

```bash
node -v
# menampilkan versi Node.js, misalnya v22.x.x
npm -v
# menampilkan versi npm
```

Jika perintah tidak dikenali, atau versinya sudah sangat lama, pasang ulang Node.js versi LTS terbaru, seperti dibahas di materi Node.js dan npm.

---

## 3. Membuat Project

Pindah ke folder tempatmu menyimpan latihan, lalu jalankan:

```bash
npm create vue@latest
```

Perintah ini mengajukan beberapa pertanyaan. Pilihan dan urutannya bisa sedikit berbeda tergantung versi, tetapi untuk belajar, pilih seperti berikut.

| Pertanyaan | Jawaban |
|---|---|
| Project name | `belajar-vue` (huruf kecil, tanpa spasi) |
| TypeScript | No |
| JSX Support | No |
| Vue Router | No (dipasang manual di materi Vue Router) |
| Pinia | No (dipasang manual di materi Pinia) |
| Vitest, End-to-End Testing | No |
| ESLint, Prettier | Boleh No dulu. Jika ingin kode rapi otomatis, pilih Yes untuk Prettier. |

Jika ada pertanyaan lain di luar tabel, pilih **No** atau tekan Enter untuk jawaban bawaan.

Setelah selesai, jalankan tiga perintah yang ditampilkan:

```bash
cd belajar-vue
# masuk ke folder project
npm install
# memasang semua paket yang dibutuhkan project
npm run dev
# menjalankan dev server
```

Terminal akan menampilkan alamat, biasanya `http://localhost:5173/`. Buka alamat itu di browser. Jika halaman sambutan Vue tampil, project berhasil dibuat.

Untuk menghentikan server, tekan `Ctrl+C` di terminal.

> **Catatan:** Dev server harus tetap berjalan selama kamu bekerja. Biarkan terminal itu terbuka, lalu buka terminal baru (atau gunakan panel terminal VS Code) untuk perintah lain.

> **Ringkasan:** `npm create vue@latest` membuat project, `npm install` memasang paket, dan `npm run dev` menjalankan project di `localhost`.

---

## 4. Mengenal Struktur Folder

Buka folder `belajar-vue` di VS Code. Struktur yang dihasilkan kurang lebih seperti ini.

```text
belajar-vue/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.ico
└── src/
    ├── main.js
    ├── App.vue
    ├── assets/
    └── components/
```

| File atau folder | Fungsi |
|---|---|
| `index.html` | Satu-satunya halaman HTML. Isinya hampir kosong, hanya `<div id="app">` tempat Vue menampilkan aplikasi. |
| `package.json` | Daftar paket dan script (`dev`, `build`, `preview`) |
| `vite.config.js` | Pengaturan Vite. Untuk sekarang tidak perlu diubah. |
| `public/` | File statis yang disalin apa adanya, seperti favicon |
| `src/main.js` | Titik awal aplikasi, yang menyalakan Vue |
| `src/App.vue` | Komponen utama, induk dari semua komponen lain |
| `src/assets/` | Gambar dan CSS yang diproses Vite |
| `src/components/` | Tempat menyimpan komponen buatanmu |

Cara kerjanya, secara ringkas:

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// membuat aplikasi dari komponen App, lalu menampilkannya di elemen dengan id "app"
```

Seluruh isi aplikasi kamu akan berawal dari `App.vue`. Karena itu, hampir semua pekerjaan nanti dilakukan di folder `src`.

> **Ringkasan:** Aplikasi berawal dari `index.html`, lalu `main.js`, lalu `App.vue`. Kita bekerja di folder `src`.

---

## 5. Membersihkan Isi Bawaan

Project bawaan berisi contoh komponen dan gaya yang tidak kita perlukan. Rapikan agar mulai dari lembar kosong.

1. Hapus semua isi folder `src/components/`, termasuk subfolder jika ada.
2. Hapus semua file di dalam `src/assets/`.
3. Di `src/main.js`, hapus baris `import './assets/main.css'` jika ada.
4. Ganti seluruh isi `src/App.vue` dengan kode berikut.

```vue
<script setup>
</script>

<template>
  <h1>Halo, Vue!</h1>
</template>
```

Simpan, lalu lihat browser. Halaman berubah otomatis menjadi tulisan "Halo, Vue!". Ubah teksnya, simpan, dan perhatikan halaman ikut berubah tanpa perlu dimuat ulang.

> **Catatan:** Jika terminal menampilkan error saat kamu menghapus file, biasanya ada `import` yang masih menunjuk ke file yang sudah dihapus. Hapus baris `import` itu.

---

## 6. Alat Bantu

### 6.a Extension VS Code

Pasang extension **Vue - Official** di VS Code. Extension ini membuat file `.vue` berwarna dengan benar, memberi saran kode, dan menandai kesalahan. Jika kamu memasang extension Vue lama bernama Vetur, nonaktifkan, karena keduanya bisa bertabrakan.

### 6.b Vue DevTools

Pasang extension browser **Vue.js devtools** dari toko extension browsermu. Setelah terpasang, buka DevTools (`F12`) dan akan muncul tab **Vue**. Di sana kamu bisa melihat pohon komponen dan nilai data setiap komponen secara langsung. Alat ini sangat membantu saat mencari bug.

> **Ringkasan:** Pasang extension Vue - Official di VS Code dan Vue.js devtools di browser.

---

## 7. Perintah Penting

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan dev server untuk bekerja |
| `npm run build` | Membuat file akhir di folder `dist` untuk diunggah ke server |
| `npm run preview` | Mencoba hasil build di komputermu |

Folder `dist` dan `node_modules` dihasilkan otomatis, dan tidak ikut diunggah ke Git. Project bawaan sudah menuliskannya di `.gitignore`, seperti dibahas di bab Git.

---

## 8. Latihan Singkat

1. Buat project `belajar-vue` mengikuti langkah di bagian 3, lalu jalankan dengan `npm run dev`.
2. Bersihkan isi bawaan seperti di bagian 5, sampai halaman hanya menampilkan satu `h1`.
3. Ubah teks `h1`, simpan, lalu amati browser memperbarui halaman sendiri.
4. Buka DevTools, lalu cari tab **Vue** dan lihat komponen `App`.
5. Jalankan `npm run build`, lalu lihat isi folder `dist`.

---

## Rangkuman

- Vite menjalankan project Vue di komputermu dan menyiapkan file akhir untuk server.
- Project dibuat dengan `npm create vue@latest`, lalu `npm install` dan `npm run dev`.
- Aplikasi berawal dari `index.html`, `src/main.js`, lalu `src/App.vue`, dan kita bekerja di folder `src`.
- Extension Vue - Official di VS Code dan Vue.js devtools di browser membantu proses belajar dan mencari bug.
- `npm run build` menghasilkan folder `dist` untuk diunggah.
