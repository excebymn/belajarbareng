---
jenis: murid
bab: html
urutan: 3
judul: "Teks: Heading, Paragraf, dan Penanda Teks"
deskripsi: "Menulis teks di HTML dengan heading, paragraf, pindah baris, garis pemisah, penanda teks, kutipan, kode, dan karakter khusus."
---

# Teks: Heading, Paragraf, dan Penanda Teks

Pada materi ini kamu akan mempelajari: heading `h1` sampai `h6`, paragraf, pindah baris dan garis pemisah, penanda teks seperti `strong` dan `em`, kutipan, kode, serta cara menulis karakter khusus.

Sebelum mulai, pastikan kamu sudah memahami: tag, elemen, dan atribut dari materi Pengenalan HTML, serta kerangka halaman dari materi Struktur Dokumen.

---

## 1. Heading

### 1.a Heading h1 sampai h6

**Heading** adalah judul dan sub judul. HTML menyediakan enam tingkat, dari `h1` (terbesar, paling penting) sampai `h6` (terkecil, paling tidak penting).

#### Cara menulis

```html
<h1>Judul Utama</h1>
<!-- heading tingkat 1, judul utama halaman -->
<h2>Sub Judul</h2>
<!-- heading tingkat 2, bagian di bawah judul utama -->
<h3>Sub Sub Judul</h3>
<!-- heading tingkat 3, bagian di bawah sub judul -->
```

Tampilan awalnya semakin kecil seiring angka bertambah. Namun ukuran tampilan bukan alasan memilih tingkat heading. Ukuran bisa diubah dengan CSS kapan saja.

### 1.b Aturan Memakai Heading

- Pakai **satu `h1`** per halaman sebagai judul utama.
- Susun tingkat secara berurutan. Setelah `h1` pakai `h2`, setelah `h2` pakai `h3`. Jangan melompat dari `h1` langsung ke `h4`.
- Pilih tingkat berdasarkan **struktur isi**, bukan berdasarkan ukuran huruf yang diinginkan.

```html
<h1>Belajar Web</h1>
<h2>HTML</h2>
<h3>Teks</h3>
<h3>Daftar</h3>
<h2>CSS</h2>
<h3>Warna</h3>
<!-- tingkat heading membentuk kerangka seperti daftar isi -->
```

Heading dipakai oleh mesin pencari dan pembaca layar untuk memahami kerangka halaman. Itulah sebabnya urutan yang benar itu penting.

> **Ringkasan:** `h1` sampai `h6` untuk judul. Pakai satu `h1`, susun berurutan, dan pilih tingkat berdasarkan struktur, bukan ukuran.

---

## 2. Paragraf dan Pindah Baris

### 2.a Paragraf

Elemen `<p>` membuat satu paragraf. Browser otomatis memberi jarak di atas dan di bawah tiap paragraf.

```html
<p>Ini paragraf pertama.</p>
<p>Ini paragraf kedua, tampil di bawah paragraf pertama.</p>
```

Ingat bahwa spasi dan baris baru di kode HTML digabung oleh browser. Menekan Enter dua kali di dalam `<p>` tidak membuat paragraf baru. Untuk paragraf baru, buat elemen `<p>` baru.

### 2.b Pindah Baris dengan br

Elemen `<br>` memindahkan teks ke baris berikutnya tanpa membuat paragraf baru. Elemen ini kosong dan tidak butuh tag penutup.

```html
<p>
  Jl. Merdeka No. 1<br>
  Surabaya<br>
  Jawa Timur
</p>
<!-- cocok untuk alamat atau puisi, di mana pindah baris adalah bagian dari isi -->
```

Jangan memakai banyak `<br>` berurutan untuk membuat jarak. Jarak diatur dengan CSS.

### 2.c Garis Pemisah dengan hr

Elemen `<hr>` membuat garis horizontal sebagai pemisah antar bagian isi. Elemen ini juga kosong.

```html
<p>Bagian pertama.</p>
<hr>
<!-- garis pemisah antar topik -->
<p>Bagian kedua.</p>
```

> **Ringkasan:** `p` untuk paragraf, `br` untuk pindah baris di dalam paragraf, `hr` untuk garis pemisah. Jarak diatur dengan CSS.

---

## 3. Penanda Teks

Elemen berikut menandai bagian tertentu dari teks. Dipakai di dalam paragraf atau elemen teks lain.

| Elemen | Makna | Tampilan awal |
|---|---|---|
| `<strong>` | Teks penting | Tebal |
| `<em>` | Teks yang ditekankan | Miring |
| `<mark>` | Teks yang disorot | Latar kuning |
| `<small>` | Teks tambahan atau catatan kecil | Lebih kecil |
| `<del>` | Teks yang dihapus | Dicoret |
| `<sub>` | Teks subskrip | Turun, kecil |
| `<sup>` | Teks superskrip | Naik, kecil |

#### Cara menulis

```html
<p>
  Ini kata <strong>penting</strong>, kata <em>ditekankan</em>,
  dan kata <mark>disorot</mark>.
</p>
<p>Rumus air: H<sub>2</sub>O. Luas: 5 m<sup>2</sup>.</p>
<!-- sub menurunkan angka 2, sup menaikkan angka 2 -->
```

### 3.a strong dan b, em dan i

Kamu mungkin juga menemukan `<b>` dan `<i>`. Tampilannya sama (tebal dan miring), tetapi **maknanya berbeda**.

| Elemen | Makna |
|---|---|
| `<strong>` | Isi ini penting |
| `<b>` | Hanya tebal, tanpa makna penting |
| `<em>` | Isi ini ditekankan |
| `<i>` | Hanya miring, misalnya istilah asing atau nama ilmiah |

Utamakan `strong` dan `em` ketika maksudmu menekankan arti, karena pembaca layar akan membacanya dengan penekanan. Untuk sekadar mengubah tampilan, lebih baik memakai CSS.

### 3.b span

`<span>` adalah pembungkus teks tanpa makna khusus. Ia berguna ketika kamu ingin menandai sepotong teks agar bisa diberi gaya dengan CSS atau diakses lewat JavaScript.

```html
<p>Harga: <span class="harga">Rp 50.000</span></p>
<!-- span membungkus harga agar nanti bisa diberi warna lewat CSS -->
```

> **Ringkasan:** `strong` dan `em` menandai makna penting dan penekanan. `span` membungkus teks tanpa makna khusus, untuk bahan CSS atau JavaScript.

---

## 4. Kutipan dan Kode

### 4.a Kutipan

```html
<p>Dalam kata orang bijak, <q>belajar tak mengenal usia</q>.</p>
<!-- q untuk kutipan pendek di dalam kalimat, browser menambahkan tanda kutip -->
<blockquote>
  Pengetahuan adalah kekuatan.
</blockquote>
<!-- blockquote untuk kutipan panjang yang berdiri sendiri sebagai blok -->
```

### 4.b Kode

Untuk menampilkan kode atau perintah di halaman, pakai `<code>`. Untuk kode yang beberapa baris dan harus mempertahankan spasi serta baris barunya, bungkus dengan `<pre>`.

```html
<p>Gunakan perintah <code>npm install</code> untuk memasang paket.</p>
<!-- code untuk potongan kode di dalam kalimat -->
<pre><code>function halo() {
  console.log('Halo')
}</code></pre>
<!-- pre mempertahankan spasi dan baris baru persis seperti yang ditulis -->
```

> **Ringkasan:** `q` dan `blockquote` untuk kutipan, `code` untuk potongan kode, dan `pre` untuk menjaga format kode beberapa baris.

---

## 5. Karakter Khusus

Tanda `<` dan `>` dipakai HTML untuk menulis tag, sehingga tidak bisa dipakai begitu saja sebagai teks. Untuk menampilkannya, gunakan **entitas** (*entity*), yaitu kode khusus yang diawali `&` dan diakhiri `;`.

| Tulis | Tampil | Nama |
|---|---|---|
| `&lt;` | `<` | less than |
| `&gt;` | `>` | greater than |
| `&amp;` | `&` | ampersand |
| `&copy;` | © | hak cipta |
| `&nbsp;` | (spasi) | spasi yang tidak digabung |

```html
<p>Tag paragraf ditulis &lt;p&gt;Isi&lt;/p&gt;.</p>
<!-- tampil sebagai: Tag paragraf ditulis <p>Isi</p>. -->
<p>&copy; 2026 Belajar Web</p>
<!-- tampil sebagai: © 2026 Belajar Web -->
```

> **Catatan:** `&nbsp;` menambah satu spasi yang tidak digabung oleh browser, tetapi jangan dipakai berulang untuk membuat jarak. Jarak diatur dengan CSS.

> **Ringkasan:** Gunakan entitas seperti `&lt;`, `&gt;`, dan `&amp;` untuk menampilkan karakter yang dipakai HTML sebagai tanda khusus.

---

## 6. Latihan Singkat

Buat halaman dengan struktur berikut, lalu buka di browser.

1. Satu `h1` berisi judul halaman.
2. Dua `h2` dengan masing-masing satu paragraf di bawahnya.
3. Satu kata yang ditandai `strong` dan satu kata yang ditandai `em`.
4. Satu alamat tiga baris memakai `br`.
5. Sebuah `hr` di antara dua bagian.
6. Satu baris yang menampilkan teks `<h1>` sebagai teks biasa memakai entitas.

---

## Rangkuman

- `h1` sampai `h6` adalah heading. Pakai satu `h1`, susun berurutan, dan pilih tingkat berdasarkan struktur.
- `p` membuat paragraf, `br` pindah baris, dan `hr` membuat garis pemisah.
- `strong` dan `em` menandai makna penting dan penekanan, berbeda dengan `b` dan `i` yang hanya soal tampilan.
- `span` adalah pembungkus teks tanpa makna khusus.
- `q`, `blockquote`, `code`, dan `pre` dipakai untuk kutipan dan kode.
- Entitas seperti `&lt;`, `&gt;`, dan `&amp;` menampilkan karakter yang dipakai HTML sebagai tanda khusus.
