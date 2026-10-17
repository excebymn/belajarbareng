---
jenis: murid
bab: vue
urutan: 1
judul: "Pengenalan Vue"
deskripsi: "Memahami apa itu Vue dan framework frontend, mengapa JavaScript biasa mulai merepotkan, konsep data reaktif dan komponen, serta gambaran isi bab ini."
---

# Pengenalan Vue

Pada materi ini kamu akan mempelajari: apa itu Vue dan framework frontend, mengapa mengatur halaman dengan JavaScript biasa mulai merepotkan, dua ide utama Vue (data reaktif dan komponen), serta gambaran isi bab ini.

Sebelum mulai, pastikan kamu sudah memahami: bab JavaScript, terutama DOM, Event, dan Modul, serta materi Node.js dan npm di bab Tools.

---

## 1. Masalah dengan JavaScript Biasa

Di bab JavaScript, kamu mengubah halaman dengan DOM: memilih elemen, lalu mengubah isinya satu per satu. Untuk halaman kecil ini cukup. Namun, coba lihat contoh penghitung sederhana berikut.

```html
<p>Hitungan: <span id="angka">0</span></p>
<button id="tombol">Tambah</button>

<script>
  let hitungan = 0
  const angka = document.querySelector('#angka')
  const tombol = document.querySelector('#tombol')

  tombol.addEventListener('click', () => {
    hitungan++
    angka.textContent = hitungan
    // setiap data berubah, kita harus ingat memperbarui tampilan secara manual
  })
</script>
```

Masalahnya: kita harus mengurus **dua hal sekaligus**, yaitu data (`hitungan`) dan tampilan (`angka.textContent`). Jika halaman punya puluhan data dan ratusan elemen, kita mudah lupa memperbarui salah satunya, dan kode menjadi sulit dirawat.

> **Ringkasan:** Dengan DOM manual, kita harus memperbarui tampilan sendiri setiap data berubah. Pada halaman besar, ini cepat menjadi berantakan.

---

## 2. Apa itu Vue

**Vue** adalah framework JavaScript untuk membangun tampilan (*user interface*). Dengan Vue, kita cukup **menjelaskan tampilan berdasarkan data**, dan Vue yang memperbarui halaman saat data berubah.

Berikut penghitung yang sama, ditulis dengan Vue.

```vue
<script setup>
import { ref } from 'vue'

const hitungan = ref(0)
// hitungan adalah data reaktif
</script>

<template>
  <p>Hitungan: {{ hitungan }}</p>
  <!-- tampilan menunjukkan nilai hitungan -->
  <button @click="hitungan++">Tambah</button>
  <!-- klik menambah data; tampilan ikut berubah sendiri -->
</template>
```

Perhatikan bahwa tidak ada `querySelector` dan tidak ada `textContent`. Kita hanya mengubah data, dan tampilan mengikuti.

Beberapa istilah yang perlu dibedakan:

| Istilah | Arti |
|---|---|
| Library | Kumpulan alat untuk satu tugas tertentu |
| Framework | Kerangka kerja lengkap yang mengatur cara menyusun aplikasi |
| Vue | Framework yang berfokus pada tampilan, dengan ekosistem resmi untuk routing dan state |

Selain Vue, ada framework lain seperti React, Angular, dan Svelte. Semuanya menyelesaikan masalah yang sama dengan cara yang berbeda. Konsep yang kamu pelajari di Vue, seperti komponen dan data reaktif, akan membantu kamu memahami yang lain.

> **Ringkasan:** Vue memperbarui tampilan otomatis berdasarkan data. Kita tinggal mengubah data.

---

## 3. Dua Ide Utama Vue

### 3.a Data Reaktif

Data **reaktif** adalah data yang dipantau Vue. Ketika nilainya berubah, bagian halaman yang memakai data itu otomatis diperbarui. Pembahasan lengkapnya ada di materi Data Reaktif dengan ref.

### 3.b Komponen

**Komponen** adalah potongan tampilan yang bisa dipakai ulang, lengkap dengan data dan logikanya. Halaman disusun dari komponen-komponen kecil, seperti menyusun balok.

```text
App
├── Header
├── DaftarTugas
│   ├── ItemTugas
│   ├── ItemTugas
│   └── ItemTugas
└── Footer
```

Setiap kotak di atas adalah satu komponen. `ItemTugas` cukup ditulis sekali, lalu dipakai berkali-kali. Cara membuatnya dibahas di materi Komponen dan File .vue.

> **Ringkasan:** Data reaktif membuat tampilan mengikuti data, dan komponen membuat tampilan bisa disusun dan dipakai ulang.

---

## 4. Gaya Penulisan yang Dipakai di Kursus Ini

Vue punya dua gaya menulis komponen, yaitu Options API dan Composition API. Di kursus ini kita memakai **Composition API dengan `<script setup>`**, karena kodenya terasa seperti JavaScript biasa yang sudah kamu pelajari: `const`, fungsi, array, dan object. Gaya ini juga yang dipakai proyek hasil `npm create vue`.

Jika kamu menemukan tutorial lama yang memakai `export default { data() { ... } }`, itu Options API. Konsepnya sama, hanya penulisannya berbeda.

---

## 5. Gambaran Isi Bab Ini

| Tahap | Materi |
|---|---|
| Persiapan | Membuat project, komponen, template |
| Data | `ref`, object dan array reaktif |
| Directive | `v-bind`, `v-on`, `v-model`, `v-if`, `v-show`, `v-for`, class dan style |
| Logika | `computed`, `watch` |
| Komunikasi komponen | props, emit, slot, lifecycle |
| Aplikasi lengkap | Vue Router, Pinia, fetch API, dan proyek akhir |

Sama seperti bab sebelumnya, setiap materi sebaiknya kamu ketik sendiri dan coba di browser. Jika terjadi error, baca pesannya dengan tenang, seperti yang dibahas di materi Debugging Dasar.

---

## 6. Latihan Singkat

1. Buka contoh penghitung dengan JavaScript biasa di bagian 1, lalu coba tambahkan satu tombol "Kurangi". Perhatikan berapa baris yang harus kamu tambah.
2. Tulis dengan kata-katamu sendiri: apa perbedaan "mengubah tampilan" dan "mengubah data"?
3. Pikirkan sebuah halaman web yang sering kamu buka, lalu gambar pembagian komponennya seperti pohon di bagian 3.b.

---

## Rangkuman

- Mengatur tampilan dengan DOM manual membuat kita harus mengurus data dan tampilan sekaligus.
- Vue adalah framework yang memperbarui tampilan otomatis berdasarkan data.
- Data reaktif membuat tampilan mengikuti data, dan komponen adalah potongan tampilan yang bisa dipakai ulang.
- Kursus ini memakai Composition API dengan `<script setup>`.
