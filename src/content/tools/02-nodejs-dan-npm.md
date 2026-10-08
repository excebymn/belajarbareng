---
jenis: murid
bab: tools
urutan: 2
judul: "Node.js dan npm"
deskripsi: "Memasang Node.js, menjalankan JavaScript di luar browser, dan memakai npm untuk mengelola paket dan script project."
---

# Node.js dan npm

Pada materi ini kamu akan mempelajari: apa itu Node.js dan npm, cara memasang dan mengecek versinya, cara menjalankan file JavaScript dari terminal, serta cara memakai `package.json`, paket, dan script.

Sebelum mulai, pastikan kamu sudah memahami: perintah terminal dasar (`cd`, `ls`, `mkdir`).

---

## 1. Node.js

### 1.a Apa itu Node.js

**Node.js** adalah program yang memungkinkan JavaScript dijalankan di luar browser, yaitu langsung di komputermu. Aslinya JavaScript hanya bisa berjalan di browser. Dengan Node.js, JavaScript bisa dipakai untuk membuat alat bantu, server, dan banyak hal lain.

Alat-alat pengembangan web modern (termasuk Vue dan banyak framework lain) ditulis dengan JavaScript, sehingga membutuhkan Node.js agar bisa berjalan di komputermu.

> **Ringkasan:** Node.js menjalankan JavaScript di luar browser dan dibutuhkan oleh alat-alat pengembangan web.

### 1.b Cara Memasang

Pilih versi **LTS** (Long Term Support), yaitu versi yang stabil dan didukung dalam jangka panjang.

- **Windows dan macOS:** unduh installer LTS dari situs resmi `nodejs.org`, jalankan, lalu ikuti langkahnya.
- **macOS dengan Homebrew:** `brew install node`.
- **Linux dan WSL:** ikuti petunjuk di `nodejs.org`. Versi Node.js yang ada di repositori bawaan distro sering sudah terlalu lama.

Setelah selesai, **tutup lalu buka kembali terminal** agar Node.js dikenali.

> **Catatan:** Bila nanti butuh berpindah-pindah versi Node.js antar project, ada alat bernama `nvm` untuk mengelolanya. Untuk sekarang, satu versi LTS sudah cukup.

### 1.c Mengecek Versi

#### Cara menulis

```text
node -v
# menampilkan versi Node.js, contoh: v22.12.0
npm -v
# menampilkan versi npm
```

Angka versi di komputermu bisa berbeda, dan itu tidak masalah. Untuk project Vue terbaru, gunakan Node.js versi 20.19 atau lebih baru.

Jika muncul pesan seperti `command not found` atau `not recognized`, tutup terminal lalu buka lagi. Jika masih sama, ulangi pemasangan Node.js.

> **Ringkasan:** `node -v` dan `npm -v` menampilkan versi. Bila nomor versi muncul, pemasangan berhasil.

### 1.d Menjalankan File JavaScript

#### Cara menulis

Buat file `halo.js` di sebuah folder, lalu isi dengan kode berikut.

```js
console.log('Halo dari Node.js')
// menampilkan tulisan di terminal (bukan di browser)
```

Jalankan dari terminal, di folder yang sama dengan file tersebut.

```text
node halo.js
# menjalankan file halo.js dengan Node.js
```

Terminal akan menampilkan `Halo dari Node.js`.

Kamu juga bisa mencoba kode satu baris langsung di terminal dengan mengetik `node` saja tanpa nama file. Ini membuka mode interaktif (*REPL*). Keluar dengan `Ctrl+C` dua kali, atau `Ctrl+D`.

> **Ringkasan:** `node nama-file.js` menjalankan file JavaScript di terminal.

---

## 2. npm

### 2.a Apa itu npm

**npm** (Node Package Manager) adalah pengelola paket untuk JavaScript. **Paket** adalah kumpulan kode siap pakai yang ditulis orang lain, misalnya Vue itu sendiri. npm ikut terpasang otomatis bersama Node.js.

Dengan npm, kamu bisa mengunduh paket lewat satu perintah di terminal, tanpa harus mencari dan mengunduh file secara manual.

> **Ringkasan:** npm mengunduh dan mengelola paket JavaScript. Ia sudah ikut terpasang bersama Node.js.

### 2.b package.json

Setiap project JavaScript punya file `package.json` yang berisi identitas project, daftar paket yang dipakai, dan script. Kamu bisa membuatnya dengan satu perintah.

#### Cara menulis

```text
mkdir latihan-npm
# membuat folder baru
cd latihan-npm
# masuk ke folder tersebut
npm init -y
# membuat package.json dengan isian bawaan (-y artinya jawab ya untuk semua pertanyaan)
```

Isi `package.json` akan kurang lebih seperti ini.

```json
{
  "name": "latihan-npm",
  "version": "1.0.0",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Bagian `scripts` akan dibahas di bagian 2.d. Tampilan lengkap file ini lebih panjang, dan itu normal.

> **Ringkasan:** `npm init -y` membuat `package.json`, yaitu file pusat yang mencatat project.

### 2.c Memasang Paket

#### Cara menulis

```text
npm install dayjs
# mengunduh paket dayjs dan mencatatnya di package.json
```

Setelah perintah selesai, ada tiga perubahan di project:

| Hasil | Penjelasan |
|---|---|
| `node_modules/` | Folder berisi semua paket yang diunduh. Ukurannya bisa sangat besar dan tidak diubah manual. |
| `package.json` | Bertambah bagian `dependencies` yang mencatat paket `dayjs` |
| `package-lock.json` | Mencatat versi persis dari setiap paket agar hasilnya konsisten di semua komputer |

Bagian `dependencies` kurang lebih seperti ini (angka versi bisa berbeda).

```json
"dependencies": {
  "dayjs": "^1.11.13"
}
```

Untuk memakai paket tersebut di file JavaScript:

```js
const dayjs = require('dayjs')
// mengambil paket dayjs yang sudah diunduh ke node_modules
console.log(dayjs().format('YYYY-MM-DD'))
// menampilkan tanggal hari ini dengan format tahun-bulan-tanggal
```

Ada juga paket yang hanya dibutuhkan saat pengembangan (bukan saat aplikasi berjalan). Paket jenis ini dipasang dengan tambahan opsi `-D`.

```text
npm install -D nama-paket
# memasang paket sebagai devDependencies (dipakai hanya saat pengembangan)
```

Ketika kamu mengunduh project orang lain yang sudah punya `package.json`, cukup jalankan perintah berikut untuk mengunduh semua paketnya.

```text
npm install
# tanpa nama paket: mengunduh semua paket yang tercatat di package.json
```

> **Catatan:** Folder `node_modules` tidak ikut dikirim saat project dibagikan atau diunggah ke Git. Orang lain cukup menjalankan `npm install` untuk mendapatkannya kembali. Pembahasan lengkap ada di bab Git.

> **Ringkasan:** `npm install nama-paket` mengunduh paket. `npm install` tanpa nama mengunduh semua paket yang tercatat.

### 2.d Script

Bagian `scripts` di `package.json` menyimpan perintah yang bisa dijalankan dengan nama pendek.

#### Cara menulis

Ubah bagian `scripts` menjadi seperti ini.

```json
"scripts": {
  "halo": "node halo.js"
}
```

Lalu jalankan dengan perintah berikut.

```text
npm run halo
# menjalankan script bernama halo, yang menjalankan node halo.js
```

Pola ini dipakai di project framework. Misalnya `npm run dev` menjalankan server pengembangan, dan `npm run build` membuat versi siap rilis. Detailnya dibahas di bab Vue.

> **Ringkasan:** `npm run nama-script` menjalankan perintah yang ditulis di bagian `scripts`.

---

## 3. Masalah yang Sering Muncul

| Pesan atau gejala | Penyebab umum | Solusi |
|---|---|---|
| `node: command not found` | Terminal belum mengenali Node.js | Tutup dan buka terminal, atau ulangi pemasangan |
| `Cannot find module 'dayjs'` | Paket belum diunduh atau terminal di folder yang salah | Jalankan `npm install` di folder project |
| `npm ERR! enoent ... package.json` | Perintah dijalankan di folder yang tidak punya `package.json` | Cek lokasi dengan `pwd`, lalu `cd` ke folder project |
| Versi Node.js terlalu lama | Terpasang versi lama dari repositori distro | Pasang ulang versi LTS dari `nodejs.org` |

> **Ringkasan:** Banyak error npm disebabkan terminal berada di folder yang salah. Cek dengan `pwd` terlebih dahulu.

---

## Rangkuman

- Node.js menjalankan JavaScript di luar browser dan dicek dengan `node -v`.
- `node nama-file.js` menjalankan file JavaScript dari terminal.
- npm mengelola paket JavaScript dan ikut terpasang bersama Node.js.
- `npm init -y` membuat `package.json`, dan `npm install nama-paket` mengunduh paket ke `node_modules`.
- `npm install` tanpa nama paket mengunduh semua paket yang tercatat, dan `npm run nama-script` menjalankan script.
- Folder `node_modules` tidak dibagikan bersama project karena bisa diunduh ulang dengan `npm install`.
