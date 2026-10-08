---
jenis: murid
bab: html
urutan: 10
judul: "Proyek: Halaman Profil"
deskripsi: "Menggabungkan semua materi HTML untuk membuat situs profil pribadi dua halaman dengan struktur semantik, gambar, tabel, daftar, link, dan formulir kontak."
---

# Proyek: Halaman Profil

Pada materi ini kamu akan menggabungkan semua yang sudah dipelajari di bab HTML untuk membuat situs profil pribadi yang terdiri dari dua halaman: halaman profil dan halaman kontak.

Sebelum mulai, pastikan kamu sudah memahami: seluruh materi di bab HTML, yaitu struktur dokumen, teks, daftar, link, gambar, tabel, form, dan HTML semantik.

---

## 1. Gambaran Proyek

Kamu akan membuat situs sederhana dengan dua halaman.

| Halaman | Isi |
|---|---|
| `index.html` | Profil: pengantar, daftar hobi, tabel jadwal, galeri foto |
| `kontak.html` | Formulir kontak dan informasi kontak |

Kedua halaman memakai navigasi yang sama dan ditulis dengan elemen semantik. Tampilannya masih polos karena belum memakai CSS. Hasil proyek ini nanti akan dipakai lagi di bab CSS untuk dipercantik.

> **Catatan:** Kerjakan dengan mengetik sendiri, bukan menyalin seluruhnya. Gunakan materi sebelumnya sebagai acuan.

---

## 2. Persiapan

1. Buat folder `profil-saya` dan buka di VS Code.
2. Di dalamnya, buat dua file kosong: `index.html` dan `kontak.html`.
3. Buat folder `img`, lalu simpan dua sampai tiga foto di dalamnya. Pakai nama huruf kecil tanpa spasi.

```text
profil-saya/
├── index.html
├── kontak.html
└── img/
    ├── foto-profil.jpg
    ├── kegiatan-1.jpg
    └── kegiatan-2.jpg
```

---

## 3. Halaman Profil

Kerjakan bertahap. Setiap langkah bisa dicoba di browser sebelum lanjut.

### 3.a Kerangka dan Header

Mulai dengan kerangka halaman, lalu isi `header` dengan judul dan navigasi.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Halaman profil pribadi.">
    <title>Profil Saya</title>
  </head>
  <body>
    <header>
      <h1>Profil Saya</h1>
      <nav>
        <ul>
          <li><a href="index.html">Profil</a></li>
          <li><a href="kontak.html">Kontak</a></li>
        </ul>
      </nav>
    </header>
```

### 3.b Isi Utama

Di dalam `main`, buat beberapa bagian dengan `section`.

```html
    <main>
      <section>
        <h2>Tentang Saya</h2>
        <figure>
          <img src="img/foto-profil.jpg" alt="Foto saya sedang tersenyum" width="200">
          <figcaption>Foto saya.</figcaption>
        </figure>
        <p>Halo, nama saya <strong>[nama kamu]</strong>. Saya sedang belajar membuat web.</p>
        <p>Saya tertarik pada <em>pemrograman</em> dan desain.</p>
      </section>

      <section>
        <h2>Hobi</h2>
        <ul>
          <li>Ngoding</li>
          <li>Membaca</li>
          <li>Olahraga</li>
        </ul>
      </section>
```

### 3.c Tabel Jadwal

```html
      <section>
        <h2>Jadwal Belajar</h2>
        <table border="1">
          <caption>Jadwal belajar mingguan</caption>
          <thead>
            <tr>
              <th scope="col">Hari</th>
              <th scope="col">Materi</th>
              <th scope="col">Jam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Senin</th>
              <td>HTML</td>
              <td>19.00</td>
            </tr>
            <tr>
              <th scope="row">Rabu</th>
              <td>CSS</td>
              <td>19.00</td>
            </tr>
          </tbody>
        </table>
      </section>
```

### 3.d Galeri dan Footer

```html
      <section>
        <h2>Kegiatan</h2>
        <img src="img/kegiatan-1.jpg" alt="Kegiatan belajar bersama" width="300" loading="lazy">
        <img src="img/kegiatan-2.jpg" alt="Kegiatan olahraga pagi" width="300" loading="lazy">
      </section>

      <aside>
        <h2>Tautan Belajar</h2>
        <ul>
          <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">MDN Web Docs</a></li>
        </ul>
      </aside>
    </main>

    <footer>
      <p>&copy; 2026 [nama kamu]</p>
    </footer>
  </body>
</html>
```

> **Ringkasan:** Halaman profil terdiri dari `header` dengan navigasi, `main` berisi beberapa `section` dan `aside`, serta `footer`.

---

## 4. Halaman Kontak

Salin kerangka, `header`, dan `footer` dari halaman profil. Ubah `title`, lalu isi `main` dengan formulir.

```html
    <main>
      <section>
        <h2>Hubungi Saya</h2>
        <form action="" method="get">
          <fieldset>
            <legend>Formulir Kontak</legend>

            <p>
              <label for="nama">Nama</label><br>
              <input type="text" id="nama" name="nama" required>
            </p>

            <p>
              <label for="email">Email</label><br>
              <input type="email" id="email" name="email" placeholder="contoh@email.com" required>
            </p>

            <p>
              <label for="topik">Topik</label><br>
              <select id="topik" name="topik">
                <option value="belajar">Belajar bareng</option>
                <option value="kerja-sama">Kerja sama</option>
                <option value="lainnya">Lainnya</option>
              </select>
            </p>

            <p>
              <label for="pesan">Pesan</label><br>
              <textarea id="pesan" name="pesan" rows="5" cols="40" required></textarea>
            </p>

            <button type="submit">Kirim</button>
            <button type="reset">Kosongkan</button>
          </fieldset>
        </form>
      </section>

      <section>
        <h2>Kontak Lain</h2>
        <address>
          Email: <a href="mailto:halo@contoh.com">halo@contoh.com</a><br>
          Telepon: <a href="tel:+6281234567890">0812-3456-7890</a>
        </address>
      </section>
    </main>
```

Setelah formulir dikirim dengan `method="get"`, perhatikan alamat di browser. Kamu akan melihat isian dikirim sebagai query string.

---

## 5. Pemeriksaan Akhir

Gunakan daftar berikut untuk memeriksa hasil kerjamu.

| Pemeriksaan | Sudah? |
|---|---|
| Kedua halaman memiliki `<!DOCTYPE html>`, `lang`, `charset`, `viewport`, dan `title` yang berbeda | |
| Setiap halaman punya satu `h1` dan heading berurutan | |
| Navigasi di kedua halaman saling terhubung dan berfungsi | |
| Semua gambar muncul dan punya `alt` yang bermakna | |
| Tabel memiliki `caption`, `thead`, `tbody`, dan `scope` | |
| Setiap isian formulir punya `label` yang terhubung dengan `for` dan `id` | |
| Elemen semantik dipakai: `header`, `nav`, `main`, `section`, `footer` | |
| Tidak ada tag yang lupa ditutup, dan indentasi rapi | |

Jika ada yang tidak berfungsi, cek urutan berikut:

1. Apakah nama file dan alamat `href` atau `src` persis sama, termasuk huruf besar kecil?
2. Apakah ada tag yang belum ditutup? Periksa lewat DevTools tab **Elements**.
3. Apakah file sudah disimpan sebelum browser dimuat ulang?

---

## 6. Tantangan Tambahan

Jika ingin mencoba lebih jauh:

1. Tambahkan halaman ketiga, misalnya `proyek.html`, dan perbarui navigasi di semua halaman.
2. Tambahkan daftar deskripsi (`dl`) berisi istilah web yang sudah kamu pelajari.
3. Sisipkan satu video YouTube lewat `iframe`.
4. Tambahkan link yang melompat ke bagian tertentu di halaman profil memakai `id`.

---

## Rangkuman

- Proyek ini menggabungkan struktur dokumen, teks, daftar, link, gambar, tabel, form, dan elemen semantik.
- Kedua halaman memakai kerangka dan navigasi yang sama, dan disusun dengan `header`, `main`, dan `footer`.
- Formulir dengan `method="get"` memperlihatkan data terkirim lewat query string tanpa perlu backend.
- Tampilan masih polos karena belum memakai CSS. Hasil proyek ini akan dipakai ulang di bab CSS.
