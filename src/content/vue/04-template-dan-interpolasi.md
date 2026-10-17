---
jenis: murid
bab: vue
urutan: 4
judul: "Template dan Interpolasi"
deskripsi: "Menampilkan data dengan kurung kurawal ganda, memakai ekspresi JavaScript sederhana di template, dan mengenal v-html beserta risikonya."
---

# Template dan Interpolasi

Pada materi ini kamu akan mempelajari: cara menampilkan data di template dengan kurung kurawal ganda, ekspresi JavaScript apa saja yang boleh ditulis di dalamnya, batasan interpolasi, serta `v-html` beserta risikonya.

Sebelum mulai, pastikan kamu sudah memahami: struktur file `.vue` dari materi Komponen dan File .vue, serta variabel, string, dan operator dari bab JavaScript.

---

## 1. Interpolasi dengan Kurung Kurawal Ganda

**Interpolasi** adalah cara menyisipkan nilai data ke dalam teks di template. Penulisannya memakai kurung kurawal ganda `{{ }}`, yang sering disebut *mustache*.

#### Cara menulis

```vue
<script setup>
const nama = 'Budi'
const umur = 16
</script>

<template>
  <p>Namaku {{ nama }}, umurku {{ umur }} tahun.</p>
  <!-- {{ nama }} diganti dengan nilai variabel nama saat tampil -->
</template>
```

Hasil di browser: **Namaku Budi, umurku 16 tahun.**

Variabel yang dideklarasikan di `<script setup>` otomatis bisa dipakai di `<template>`. Jika kamu menulis nama yang tidak ada, Vue menampilkan peringatan di Console DevTools, dan tulisan itu tidak tampil.

> **Ringkasan:** `{{ nama }}` menyisipkan nilai variabel ke dalam teks di template.

---

## 2. Ekspresi di dalam Kurung Kurawal

Di dalam `{{ }}`, kamu boleh menulis **ekspresi JavaScript**, yaitu kode yang menghasilkan sebuah nilai.

```vue
<script setup>
const harga = 50000
const jumlah = 3
const nama = 'budi'
const lulus = true
</script>

<template>
  <p>Total: {{ harga * jumlah }}</p>
  <!-- operasi matematika -->
  <p>Nama: {{ nama.toUpperCase() }}</p>
  <!-- memanggil method string -->
  <p>Status: {{ lulus ? 'Lulus' : 'Belum lulus' }}</p>
  <!-- operator ternary -->
  <p>Pesan: {{ 'Halo, ' + nama }}</p>
  <!-- menggabungkan teks -->
</template>
```

Kamu juga bisa memanggil fungsi yang dideklarasikan di `<script setup>`.

```vue
<script setup>
function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID')
}
</script>

<template>
  <p>Harga: {{ formatRupiah(50000) }}</p>
  <!-- tampil sebagai: Harga: Rp 50.000 -->
</template>
```

> **Ringkasan:** Di dalam `{{ }}` boleh ada ekspresi: operasi, ternary, method, dan pemanggilan fungsi.

---

## 3. Yang Tidak Boleh Ditulis di Interpolasi

Hanya **ekspresi** yang diperbolehkan. Pernyataan (*statement*) seperti `if`, `for`, dan deklarasi variabel tidak bisa dipakai.

```vue
<template>
  <p>{{ let a = 1 }}</p>
  <!-- salah: deklarasi variabel bukan ekspresi -->
  <p>{{ if (lulus) { 'Lulus' } }}</p>
  <!-- salah: if adalah pernyataan; pakai ternary -->
</template>
```

Cara mengujinya: kalau kode itu bisa dipakai di sebelah kanan tanda `=` (misalnya `const x = ...`), maka ia ekspresi.

Interpolasi juga **tidak bisa dipakai di dalam atribut HTML**.

```vue
<template>
  <img src="{{ gambar }}">
  <!-- salah: kurung kurawal tidak bekerja di dalam atribut -->
</template>
```

Untuk atribut, kita memakai `v-bind`, yang dibahas di materi Binding Atribut dengan v-bind. Untuk kondisi dan perulangan, kita memakai `v-if` dan `v-for`.

Jika ekspresinya panjang atau rumit, jangan tulis di template. Pindahkan ke fungsi, atau ke `computed` yang dibahas di materi Computed.

> **Ringkasan:** Interpolasi hanya menerima ekspresi, dan tidak bisa dipakai di dalam atribut.

---

## 4. Interpolasi dan HTML

Interpolasi menampilkan nilai sebagai **teks biasa**. Jika nilainya mengandung tag HTML, tag itu tidak diterjemahkan.

```vue
<script setup>
const html = '<strong>Tebal</strong>'
</script>

<template>
  <p>{{ html }}</p>
  <!-- tampil sebagai teks: <strong>Tebal</strong> -->
</template>
```

Perilaku ini aman, dan itu sengaja. Jika pengguna mengetik sesuatu seperti `<script>...</script>`, teksnya tampil apa adanya dan tidak dijalankan.

### 4.a v-html

Jika kamu benar-benar ingin menampilkan HTML, gunakan directive `v-html`.

```vue
<template>
  <p v-html="html"></p>
  <!-- tampil sebagai teks tebal: Tebal -->
</template>
```

> **Catatan:** **Jangan pernah memakai `v-html` untuk isi yang berasal dari pengguna**, misalnya komentar atau isi formulir. Orang jahat bisa menyisipkan kode berbahaya yang dijalankan di browser pengunjung lain. Serangan ini disebut XSS. Pakai `v-html` hanya untuk HTML yang kamu tulis sendiri dan terpercaya.

> **Ringkasan:** Interpolasi menampilkan teks biasa dengan aman. `v-html` menampilkan HTML mentah, dan hanya untuk isi yang terpercaya.

---

## 5. Data Berubah, Tampilan Ikut Berubah?

Pada contoh di atas, nilai variabel tidak pernah berubah. Jika kamu mengubah variabel biasa, tampilannya **tidak ikut berubah**. Agar tampilan mengikuti perubahan data, data harus dibuat reaktif dengan `ref`, yang dibahas di materi berikutnya.

---

## 6. Latihan Singkat

1. Buat komponen dengan variabel `nama`, `umur`, dan `kota`, lalu tampilkan dalam satu kalimat memakai `{{ }}`.
2. Tampilkan `nama` dalam huruf kapital semua dengan `toUpperCase()`.
3. Tampilkan "Dewasa" atau "Belum dewasa" berdasarkan `umur` memakai ternary.
4. Buat fungsi `formatRupiah` seperti di bagian 2, lalu tampilkan harga yang diformat.
5. Simpan teks `<em>miring</em>` di variabel, tampilkan dengan `{{ }}` dan dengan `v-html`, lalu bandingkan hasilnya.
6. Coba tulis `{{ let a = 1 }}` dan baca pesan error di Console.

---

## Rangkuman

- `{{ }}` menyisipkan nilai data ke dalam teks di template.
- Di dalam `{{ }}`, boleh menulis ekspresi JavaScript, tetapi bukan pernyataan seperti `if` atau `for`.
- Interpolasi tidak bisa dipakai di dalam atribut. Untuk itu ada `v-bind`.
- Interpolasi menampilkan teks biasa dan aman, sedangkan `v-html` menampilkan HTML mentah dan hanya dipakai untuk isi terpercaya.
