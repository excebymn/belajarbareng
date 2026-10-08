---
jenis: murid
bab: html
urutan: 7
judul: "Tabel"
deskripsi: "Membuat tabel di HTML dengan baris, kolom, judul kolom, bagian thead tbody tfoot, caption, serta menggabungkan sel dengan colspan dan rowspan."
---

# Tabel

Pada materi ini kamu akan mempelajari: cara membuat tabel dengan `table`, `tr`, `th`, dan `td`, membagi tabel dengan `thead`, `tbody`, dan `tfoot`, memberi judul dengan `caption`, menggabungkan sel dengan `colspan` dan `rowspan`, serta kapan sebaiknya memakai tabel.

Sebelum mulai, pastikan kamu sudah memahami: tag, elemen, dan nesting dari materi Pengenalan HTML.

---

## 1. Tabel Dasar

**Tabel** dipakai untuk menampilkan data yang punya baris dan kolom, seperti jadwal, daftar harga, atau nilai.

#### Cara menulis

```html
<table>
  <!-- table membungkus seluruh tabel -->
  <tr>
    <!-- tr (table row) adalah satu baris -->
    <th>Nama</th>
    <!-- th (table header) adalah sel judul kolom -->
    <th>Kelas</th>
  </tr>
  <tr>
    <td>Budi</td>
    <!-- td (table data) adalah sel isi biasa -->
    <td>X-1</td>
  </tr>
  <tr>
    <td>Sari</td>
    <td>X-2</td>
  </tr>
</table>
```

| Elemen | Fungsi |
|---|---|
| `<table>` | Pembungkus seluruh tabel |
| `<tr>` | Satu baris |
| `<th>` | Sel judul, biasanya tampil tebal dan rata tengah |
| `<td>` | Sel data biasa |

Cara berpikirnya: tabel dibangun **baris demi baris**. Kolom tidak dibuat langsung, melainkan terbentuk dari jumlah sel di setiap baris. Karena itu, setiap baris sebaiknya punya jumlah sel yang sama.

Secara bawaan tabel tampil tanpa garis. Garis, warna, dan jarak diatur dengan CSS, dibahas di bab CSS. Untuk melihat strukturnya sementara, kamu bisa menambah atribut `border="1"` pada `table` hanya untuk latihan.

> **Ringkasan:** `table` berisi `tr` (baris), dan tiap baris berisi `th` (judul) atau `td` (data).

---

## 2. Membagi Tabel

Tabel yang besar sebaiknya dibagi menjadi tiga bagian dengan makna jelas.

#### Cara menulis

```html
<table>
  <caption>Daftar Nilai Ujian</caption>
  <!-- caption adalah judul tabel, ditulis tepat setelah tag pembuka table -->
  <thead>
    <!-- thead berisi baris judul kolom -->
    <tr>
      <th>Nama</th>
      <th>Nilai</th>
    </tr>
  </thead>
  <tbody>
    <!-- tbody berisi data utama tabel -->
    <tr>
      <td>Budi</td>
      <td>80</td>
    </tr>
    <tr>
      <td>Sari</td>
      <td>90</td>
    </tr>
  </tbody>
  <tfoot>
    <!-- tfoot berisi baris ringkasan, misalnya total atau rata-rata -->
    <tr>
      <td>Rata-rata</td>
      <td>85</td>
    </tr>
  </tfoot>
</table>
```

| Elemen | Fungsi |
|---|---|
| `<caption>` | Judul tabel |
| `<thead>` | Bagian judul kolom |
| `<tbody>` | Bagian isi utama |
| `<tfoot>` | Bagian ringkasan di bawah |

Manfaatnya:

- Struktur tabel lebih jelas, bagi manusia maupun mesin.
- Bagian-bagian ini bisa diberi gaya CSS yang berbeda, misalnya latar judul yang berwarna.
- Pembaca layar bisa mengenali judul dan isi tabel.

> **Ringkasan:** `caption` memberi judul tabel, sedangkan `thead`, `tbody`, dan `tfoot` membagi tabel menjadi bagian judul, isi, dan ringkasan.

---

## 3. Judul untuk Baris dan Kolom

Sel `th` tidak hanya dipakai di baris atas. Ia juga bisa menjadi judul baris. Atribut `scope` memberi tahu browser apakah `th` itu judul kolom atau judul baris.

```html
<table>
  <thead>
    <tr>
      <th></th>
      <!-- sel kosong di pojok kiri atas -->
      <th scope="col">Senin</th>
      <!-- scope col: judul untuk kolom di bawahnya -->
      <th scope="col">Selasa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Pelajaran 1</th>
      <!-- scope row: judul untuk baris ke arah kanan -->
      <td>Matematika</td>
      <td>IPA</td>
    </tr>
    <tr>
      <th scope="row">Pelajaran 2</th>
      <td>Bahasa</td>
      <td>IPS</td>
    </tr>
  </tbody>
</table>
```

Atribut `scope` membantu pembaca layar membacakan sel data bersama judulnya, misalnya "Senin, Pelajaran 1, Matematika".

> **Ringkasan:** `scope="col"` untuk judul kolom dan `scope="row"` untuk judul baris, agar tabel mudah dipahami pembaca layar.

---

## 4. Menggabungkan Sel

Kadang satu sel perlu melebar ke beberapa kolom atau beberapa baris. Pakai atribut `colspan` dan `rowspan`.

### 4.a colspan

`colspan` menggabungkan sel secara **horizontal** (melebar ke kolom di kanan).

```html
<table border="1">
  <tr>
    <th colspan="2">Biodata</th>
    <!-- sel ini memakai ruang dua kolom -->
  </tr>
  <tr>
    <td>Nama</td>
    <td>Budi</td>
  </tr>
</table>
```

### 4.b rowspan

`rowspan` menggabungkan sel secara **vertikal** (memanjang ke baris di bawah).

```html
<table border="1">
  <tr>
    <th rowspan="2">Hari Senin</th>
    <!-- sel ini memakai ruang dua baris -->
    <td>Matematika</td>
  </tr>
  <tr>
    <td>IPA</td>
    <!-- baris kedua hanya punya satu sel, karena sel pertama sudah terisi rowspan -->
  </tr>
</table>
```

Aturan penting: ketika sebuah sel melebar, **sel yang digantikannya tidak ditulis lagi**. Pada contoh `colspan="2"`, baris itu hanya punya satu sel, bukan dua. Jumlah total sel tiap baris tetap harus sama dengan jumlah kolom tabel, dengan menghitung sel yang digabung.

> **Ringkasan:** `colspan` menggabungkan ke kanan, `rowspan` menggabungkan ke bawah. Sel yang tergantikan tidak ditulis lagi.

---

## 5. Kapan Memakai Tabel

| Pakai tabel untuk | Jangan pakai tabel untuk |
|---|---|
| Jadwal pelajaran | Mengatur tata letak seluruh halaman |
| Daftar harga | Menyusun kolom artikel |
| Hasil perbandingan | Membuat menu navigasi |
| Data angka | Menyejajarkan gambar dan teks |

Tabel dibuat untuk **data**, bukan untuk tata letak. Pada masa lalu tabel sering dipakai mengatur tata letak halaman, tetapi sekarang itu dilakukan dengan CSS (flexbox dan grid), yang dibahas di bab CSS.

> **Catatan:** Jika isi yang kamu tampilkan tidak punya hubungan baris dan kolom yang bermakna, kemungkinan besar tabel bukan pilihan yang tepat.

---

## 6. Latihan Singkat

1. Buat tabel jadwal pelajaran lima hari dengan `thead`, `tbody`, dan `caption`.
2. Gunakan `scope` pada judul kolom dan judul baris.
3. Buat satu sel yang digabung dengan `colspan`, dan satu lagi dengan `rowspan`.
4. Tambahkan `tfoot` berisi ringkasan.
5. Tambahkan `border="1"` di `table` untuk sementara agar strukturnya terlihat.

---

## Rangkuman

- Tabel dibangun dari `table`, `tr` (baris), `th` (sel judul), dan `td` (sel data), baris demi baris.
- `caption` memberi judul, sedangkan `thead`, `tbody`, dan `tfoot` membagi tabel menjadi judul, isi, dan ringkasan.
- Atribut `scope` menandai apakah `th` adalah judul kolom (`col`) atau judul baris (`row`).
- `colspan` menggabungkan sel ke kanan dan `rowspan` menggabungkan sel ke bawah, tanpa menulis ulang sel yang tergantikan.
- Pakai tabel untuk data, bukan untuk tata letak halaman.
