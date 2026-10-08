---
jenis: murid
bab: web
urutan: 2
judul: "Frontend dan Backend"
deskripsi: "Memahami pembagian tugas frontend, backend, dan database, cara keduanya berkomunikasi lewat API, serta peta belajar di kursus ini."
---

# Frontend dan Backend

Pada materi ini kamu akan mempelajari: apa itu frontend, backend, dan database, bagaimana ketiganya bekerja sama lewat request, response, dan API, perbedaan website statis dan dinamis, serta peta belajar yang akan kamu tempuh.

Sebelum mulai, pastikan kamu sudah memahami: alur request dan response dari materi Cara Kerja Web.

---

## 1. Dua Sisi Aplikasi Web

Sebuah aplikasi web terdiri dari dua sisi yang bekerja sama. Satu sisi berjalan di perangkat pengguna, sisi lainnya berjalan di server.

### 1.a Frontend

**Frontend** adalah bagian web yang dilihat dan dipakai langsung oleh pengguna, dan berjalan di browser. Tampilan halaman, tombol, menu, dan formulir termasuk frontend.

Frontend dibangun dengan tiga teknologi dasar.

| Teknologi | Peran |
|---|---|
| HTML | Menentukan struktur dan isi halaman |
| CSS | Mengatur tampilan, seperti warna dan ukuran |
| JavaScript | Menambah perilaku, seperti bereaksi saat tombol diklik |

Berikut gambaran singkat ketiganya. Kamu belum perlu memahami detailnya sekarang.

```html
<button>Beli</button>
<!-- HTML: membuat sebuah tombol bertuliskan Beli -->
```

```css
button { color: red; }
/* CSS: mewarnai tulisan semua tombol menjadi merah */
```

```js
alert('Halo')
// JavaScript: memunculkan kotak pesan Halo di browser
```

Selain tiga teknologi dasar itu, ada **framework frontend** seperti Vue dan React yang membantu menyusun tampilan yang besar dan interaktif dengan lebih rapi.

> **Ringkasan:** Frontend adalah sisi yang dilihat pengguna di browser, dibangun dengan HTML, CSS, dan JavaScript.

### 1.b Backend

**Backend** adalah bagian web yang berjalan di server dan tidak terlihat langsung oleh pengguna. Tugasnya mengolah data, menyimpannya di database, menjalankan logika aplikasi, dan menjaga keamanan.

Backend bisa ditulis dengan banyak bahasa, misalnya Java, Python, PHP, atau JavaScript (lewat Node.js). Di kursus ini kita akan memakai PHP (dengan Laravel) dan JavaScript (dengan NestJS).

Contohnya, saat kamu login ke sebuah situs, backend yang memeriksa apakah email dan kata sandimu cocok dengan data di database.

> **Ringkasan:** Backend berjalan di server untuk mengolah data, menyimpan ke database, dan menjaga keamanan.

### 1.c Database

**Database** adalah tempat penyimpanan data yang terstruktur, seperti daftar pengguna, produk, dan pesanan. Database biasanya diakses oleh backend, bukan langsung oleh browser.

```text
Tabel pengguna
id | nama   | email
1  | Budi   | budi@contoh.com
2  | Sari   | sari@contoh.com
```

Contoh di atas adalah gambaran sebuah tabel. Cara memakainya dibahas di bab Database.

> **Ringkasan:** Database menyimpan data secara terstruktur dan diakses oleh backend.

---

## 2. Cara Frontend dan Backend Bekerja Sama

Frontend dan backend berkomunikasi lewat request dan response. Frontend meminta data, backend mengolahnya lalu membalas.

```text
Frontend: minta daftar produk
# frontend mengirim request ke backend
Backend: ambil daftar produk dari database, lalu kirim kembali
# backend mengolah request lalu membalas dengan data
Frontend: tampilkan daftar produk di halaman
# frontend menampilkan data yang diterima kepada pengguna
```

Alur lengkapnya:

```text
Pengguna -> Frontend -> Request -> Backend -> Database
Database -> Backend -> Response -> Frontend -> Tampilan
```

Jalur komunikasi yang disediakan backend agar bisa diakses frontend disebut **API** (Application Programming Interface). Data yang dikirim lewat API umumnya berbentuk **JSON**, yaitu format teks yang mudah dibaca manusia dan program.

```json
{
  "id": 1,
  "nama": "Sepatu",
  "harga": 250000
}
```

Contoh di atas adalah data satu produk dalam bentuk JSON. API dan JSON dibahas lengkap di bab API.

Dengan pemisahan seperti ini, tampilan dan pengolahan data bisa dikembangkan sendiri-sendiri. Misalnya satu backend yang sama bisa melayani website, aplikasi Android, dan aplikasi iOS sekaligus.

| | Frontend | Backend |
|---|---|---|
| Berjalan di | Browser | Server |
| Dilihat pengguna | Ya | Tidak |
| Tugas utama | Tampilan dan interaksi | Data, logika, dan keamanan |
| Contoh teknologi | HTML, CSS, JavaScript, Vue, React | PHP, Laravel, Node.js, NestJS |

> **Ringkasan:** Frontend meminta data dan menampilkannya, backend mengolah dan menyediakan data lewat API. Keduanya terhubung lewat request dan response.

---

## 3. Website Statis dan Dinamis

| | Website statis | Website dinamis |
|---|---|---|
| Isi halaman | Tetap, sama untuk semua pengunjung | Berubah sesuai pengguna atau data |
| Butuh backend dan database | Tidak | Biasanya ya |
| Contoh | Profil pribadi, halaman dokumentasi | Toko online, media sosial |

Website statis cukup dibuat dengan HTML, CSS, dan JavaScript. Website dinamis membutuhkan backend untuk mengolah data. Kamu akan membuat keduanya selama kursus ini.

> **Ringkasan:** Website statis isinya tetap dan tidak butuh backend, website dinamis isinya berubah dan biasanya butuh backend.

---

## 4. Peta Belajar

Berikut urutan bab yang akan kamu pelajari di kursus ini.

| Tahap | Bab | Isi |
|---|---|---|
| Persiapan | OS, Tools | Memilih OS, terminal, Node.js dan npm, VS Code |
| Dasar web | Web, HTML, CSS, JS | Cara kerja web, struktur, tampilan, dan perilaku |
| Alat kerja | Git | Menyimpan riwayat dan berkolaborasi |
| Frontend | Vue, Bootstrap, Tailwind, TypeScript, React | Membangun tampilan modern |
| Rilis | Deployment, SEO | Menayangkan website dan membuatnya mudah ditemukan |
| Backend | PHP, Database, Laravel, NestJS | Mengolah data di server |
| Penyatuan | Docker, API | Menjalankan banyak layanan dan menyambungkan frontend ke backend |

Bab satu dengan yang lain saling berkaitan, jadi dalam satu materi kamu mungkin menemukan sebutan materi dari bab lain. Itu normal, dan biasanya diberi penjelasan singkat di tempat.

> **Ringkasan:** Mulai dari persiapan dan dasar web, lalu frontend, rilis, backend, dan penyatuan keduanya.

---

## Rangkuman

- Frontend berjalan di browser dan dilihat pengguna, dibangun dengan HTML, CSS, dan JavaScript.
- Backend berjalan di server untuk mengolah data, logika, dan keamanan.
- Database menyimpan data terstruktur dan diakses oleh backend.
- Frontend dan backend berkomunikasi lewat API, umumnya dengan data berformat JSON.
- Website statis tidak butuh backend, sedangkan website dinamis biasanya butuh backend.
- Kursus ini berjalan dari persiapan dan dasar web, ke frontend, rilis, backend, lalu penyatuan keduanya.
