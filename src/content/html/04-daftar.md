---
jenis: murid
bab: html
urutan: 4
judul: "Daftar"
deskripsi: "Membuat daftar tak berurutan, berurutan, bersarang, dan daftar deskripsi di HTML, serta kapan memakai masing-masing."
---

# Daftar

Pada materi ini kamu akan mempelajari: daftar tak berurutan (`ul`), daftar berurutan (`ol`), daftar bersarang, daftar deskripsi (`dl`), serta cara memilih jenis daftar yang tepat.

Sebelum mulai, pastikan kamu sudah memahami: tag, elemen, dan nesting dari materi Pengenalan HTML.

---

## 1. Dua Jenis Daftar Utama

HTML punya dua jenis daftar yang paling sering dipakai. Perbedaannya ada pada apakah urutan item itu penting.

| | Daftar tak berurutan | Daftar berurutan |
|---|---|---|
| Elemen pembungkus | `<ul>` (*unordered list*) | `<ol>` (*ordered list*) |
| Tampilan awal | Titik (bullet) | Angka |
| Cocok untuk | Item yang urutannya tidak penting | Langkah-langkah atau peringkat |
| Contoh | Daftar belanja | Resep, panduan instalasi |

Kedua jenis memakai elemen `<li>` (*list item*) untuk setiap item.

> **Ringkasan:** `ul` untuk daftar bullet, `ol` untuk daftar angka, dan setiap item memakai `li`.

---

## 2. Daftar Tak Berurutan

#### Cara menulis

```html
<ul>
  <li>Apel</li>
  <!-- li adalah satu item di dalam daftar -->
  <li>Jeruk</li>
  <li>Mangga</li>
</ul>
```

Aturan pentingnya: **isi langsung dari `ul` hanya boleh `li`**. Jangan menaruh paragraf atau teks langsung di dalam `ul` tanpa dibungkus `li`.

```html
<ul>
  <li><strong>Apel:</strong> buah berwarna merah atau hijau</li>
  <!-- li boleh berisi teks, penanda teks, link, bahkan gambar -->
</ul>
```

Tampilan bullet bisa diubah dengan CSS, misalnya menjadi kotak, lingkaran, atau dihilangkan sama sekali. Daftar tanpa bullet sering dipakai untuk menu navigasi.

---

## 3. Daftar Berurutan

#### Cara menulis

```html
<ol>
  <li>Buka browser</li>
  <!-- tampil sebagai nomor 1 -->
  <li>Ketik alamat situs</li>
  <!-- tampil sebagai nomor 2 -->
  <li>Tekan Enter</li>
  <!-- tampil sebagai nomor 3 -->
</ol>
```

### 3.a Atribut pada ol

`ol` punya beberapa atribut untuk mengatur penomoran.

| Atribut | Fungsi | Contoh |
|---|---|---|
| `start` | Mulai penomoran dari angka tertentu | `<ol start="5">` mulai dari 5 |
| `reversed` | Penomoran menurun | `<ol reversed>` tampil 3, 2, 1 |
| `type` | Jenis penomoran | `<ol type="a">` tampil a, b, c |

```html
<ol type="A" start="3">
  <li>Bagian C</li>
  <!-- penomoran huruf kapital, mulai dari urutan ke-3 (C) -->
  <li>Bagian D</li>
</ol>
```

> **Catatan:** Kamu tidak perlu mengetik nomornya sendiri. Browser menomori otomatis. Jika kamu menyisipkan satu item di tengah, nomor sisanya menyesuaikan sendiri.

> **Ringkasan:** `ol` menomori item otomatis. Atribut `start`, `reversed`, dan `type` mengatur penomorannya.

---

## 4. Daftar Bersarang

Sebuah daftar boleh berada di dalam item daftar lain. Penulisan ini disebut **daftar bersarang** (*nested list*).

#### Cara menulis

```html
<ul>
  <li>Buah
    <ul>
      <li>Apel</li>
      <li>Jeruk</li>
    </ul>
    <!-- daftar anak diletakkan di dalam li, bukan di luarnya -->
  </li>
  <li>Sayur
    <ul>
      <li>Bayam</li>
      <li>Wortel</li>
    </ul>
  </li>
</ul>
```

Aturan penting: daftar anak harus berada **di dalam `<li>` induknya**, sebelum tag `</li>` ditutup. Kesalahan yang sering terjadi adalah menaruh `ul` anak langsung di bawah `ul` induk.

```html
<!-- Salah: ul anak langsung di dalam ul induk -->
<ul>
  <li>Buah</li>
  <ul>
    <li>Apel</li>
  </ul>
</ul>
```

Kamu juga boleh mencampur jenis daftar, misalnya `ol` di dalam `ul`, sesuai kebutuhan isi.

> **Ringkasan:** Daftar anak ditaruh di dalam `li` induknya, sebelum `</li>` ditutup.

---

## 5. Daftar Deskripsi

**Daftar deskripsi** dipakai untuk pasangan istilah dan penjelasannya, seperti kamus atau daftar spesifikasi.

#### Cara menulis

```html
<dl>
  <dt>HTML</dt>
  <!-- dt (description term) adalah istilahnya -->
  <dd>Bahasa markup untuk menyusun halaman web.</dd>
  <!-- dd (description details) adalah penjelasannya -->
  <dt>CSS</dt>
  <dd>Bahasa untuk mengatur tampilan halaman web.</dd>
</dl>
```

| Elemen | Fungsi |
|---|---|
| `<dl>` | Pembungkus seluruh daftar deskripsi |
| `<dt>` | Istilah atau nama |
| `<dd>` | Penjelasan atau nilai dari istilah |

Satu `dt` boleh punya beberapa `dd`, dan sebaliknya.

> **Ringkasan:** `dl` berisi pasangan `dt` (istilah) dan `dd` (penjelasan).

---

## 6. Memilih Jenis Daftar

Gunakan pertanyaan berikut untuk memilih.

| Pertanyaan | Jawaban | Pakai |
|---|---|---|
| Apakah urutan item penting? | Ya | `ol` |
| Apakah urutan item tidak penting? | Ya | `ul` |
| Apakah isinya pasangan istilah dan penjelasan? | Ya | `dl` |

Contoh penerapan nyata: menu navigasi website hampir selalu ditulis sebagai `ul` berisi `li` yang masing-masing berisi link. Ini dibahas di materi Link dan HTML Semantik.

> **Catatan:** Jangan memakai daftar hanya untuk mendapatkan bentuk bullet atau indentasi. Pakai daftar saat isinya memang berupa kumpulan item.

---

## 7. Latihan Singkat

Buat halaman berisi:

1. Daftar belanja dengan `ul` berisi minimal tiga item.
2. Resep sederhana dengan `ol` berisi minimal empat langkah.
3. Daftar bersarang: tiga kategori hobi, masing-masing berisi dua contoh.
4. Daftar deskripsi berisi tiga istilah web beserta penjelasannya.

---

## Rangkuman

- `ul` untuk daftar bullet, `ol` untuk daftar angka, dan keduanya memakai `li` untuk tiap item.
- Isi langsung `ul` dan `ol` hanya boleh `li`.
- `ol` bisa diatur dengan atribut `start`, `reversed`, dan `type`.
- Daftar bersarang ditulis dengan menaruh daftar anak di dalam `li` induknya.
- `dl` dengan `dt` dan `dd` dipakai untuk pasangan istilah dan penjelasan.
- Pilih jenis daftar berdasarkan makna isi: urutan penting, urutan tidak penting, atau pasangan istilah.
