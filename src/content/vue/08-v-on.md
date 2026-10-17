---
jenis: murid
bab: vue
urutan: 8
judul: "Event dengan v-on"
deskripsi: "Merespons klik dan input dengan v-on beserta singkatan @, memanggil fungsi, memakai object event, dan modifier seperti prevent."
---

# Event dengan v-on

Pada materi ini kamu akan mempelajari: cara merespons aksi pengguna dengan `v-on`, singkatan `@`, menulis kode langsung atau memanggil fungsi, mengirim argumen, memakai object event, serta modifier seperti `.prevent` dan `.enter`.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dari materi Data Reaktif dengan ref, serta event, `addEventListener`, dan `preventDefault` dari bab JavaScript.

---

## 1. Dari addEventListener ke v-on

Di bab JavaScript, kamu merespons klik dengan tiga langkah: memilih elemen, memasang `addEventListener`, lalu menulis fungsinya. Di Vue, cukup satu atribut pada elemennya.

```vue
<script setup>
import { ref } from 'vue'

const hitungan = ref(0)

function tambah() {
  hitungan.value++
}
</script>

<template>
  <p>Hitungan: {{ hitungan }}</p>
  <button v-on:click="tambah">Tambah</button>
  <!-- v-on:click berarti: saat tombol diklik, jalankan fungsi tambah -->
</template>
```

Nama event ditulis setelah titik dua, sama dengan nama event di JavaScript: `click`, `input`, `submit`, `keydown`, dan seterusnya.

> **Ringkasan:** `v-on:event="penanganan"` menjalankan kode ketika event terjadi pada elemen itu.

---

## 2. Singkatan @

Seperti `v-bind`, `v-on` punya singkatan yang lebih sering dipakai, yaitu tanda `@`.

```vue
<button @click="tambah">Tambah</button>
<!-- sama persis dengan v-on:click="tambah" -->
<input @input="catat">
<form @submit="kirim">...</form>
```

Kursus ini selanjutnya memakai singkatan `@`.

---

## 3. Dua Cara Menulis Penanganan

### 3.a Memanggil Fungsi

Cara ini cocok untuk logika yang lebih dari satu baris. Tulis nama fungsinya saja, **tanpa tanda kurung**.

```vue
<button @click="tambah">Tambah</button>
<!-- tanpa kurung: Vue memanggil fungsi saat tombol diklik -->
```

### 3.b Kode Langsung (Inline)

Untuk aksi yang sangat singkat, kode boleh ditulis langsung di atribut.

```vue
<button @click="hitungan++">Tambah</button>
<!-- kode langsung, tanpa .value di template -->
<button @click="hitungan = 0">Reset</button>
<button @click="tampil = !tampil">Ubah tampil</button>
```

Aturan pemilihan: jika aksinya satu baris sederhana, boleh inline. Jika lebih dari itu, pindahkan ke fungsi agar template tetap mudah dibaca.

> **Catatan:** Di `@click="tambah"` tanpa kurung, fungsi dijalankan saat diklik. Jika kamu menulis `@click="tambah()"` untuk fungsi tanpa argumen, hasilnya sama. Yang tidak boleh adalah memanggil fungsi di tempat lain di template, seperti `{{ tambah() }}`, karena fungsi akan berjalan setiap kali tampilan digambar ulang.

> **Ringkasan:** Untuk aksi panjang, tulis nama fungsi. Untuk aksi satu baris, boleh ditulis langsung.

---

## 4. Mengirim Argumen

Fungsi sering perlu tahu **item mana** yang diklik. Kirim argumen dengan tanda kurung.

```vue
<script setup>
import { ref } from 'vue'

const nama = ref('Belum ada')

function pilih(orang) {
  nama.value = orang
}
</script>

<template>
  <p>Dipilih: {{ nama }}</p>
  <button @click="pilih('Budi')">Budi</button>
  <!-- 'Budi' dikirim sebagai argumen ke fungsi pilih -->
  <button @click="pilih('Sari')">Sari</button>
  <button @click="pilih('Dewi')">Dewi</button>
</template>
```

Pola ini akan sering dipakai bersama `v-for`, misalnya `@click="hapus(item.id)"`. Pembahasannya ada di materi Menampilkan Daftar dengan v-for.

---

## 5. Object Event

Sama seperti di JavaScript, fungsi penanganan otomatis menerima **object event** sebagai parameter pertama jika kamu menuliskannya.

```vue
<script setup>
import { ref } from 'vue'

const teks = ref('')

function catat(event) {
  teks.value = event.target.value
  // event.target adalah elemen yang memicu event; value adalah isinya
}
</script>

<template>
  <input @input="catat" placeholder="Ketik sesuatu">
  <p>Kamu mengetik: {{ teks }}</p>
</template>
```

Jika kamu juga mengirim argumen sendiri dan tetap butuh object event, pakai variabel khusus `$event`.

```vue
<button @click="sapa('Budi', $event)">Sapa</button>
<!-- $event adalah object event; ditulis di template saja -->
```

```js
function sapa(nama, event) {
  console.log(nama, event.type)
  // event.type berisi jenis event, misalnya "click"
}
```

Untuk mengambil isi input, ada cara yang jauh lebih ringkas, yaitu `v-model` di materi berikutnya.

---

## 6. Modifier Event

**Modifier** adalah tambahan setelah nama event, dipisah titik, untuk mengatur perilaku event tanpa menulis kode tambahan.

| Modifier | Fungsi | Padanan di JavaScript |
|---|---|---|
| `.prevent` | Mencegah perilaku bawaan | `event.preventDefault()` |
| `.stop` | Menghentikan penjalaran event | `event.stopPropagation()` |
| `.once` | Event hanya dijalankan sekali | |
| `.enter`, `.esc`, `.space` | Hanya saat tombol keyboard tertentu ditekan | Cek `event.key` |

```vue
<form @submit.prevent="kirim">
  <!-- .prevent mencegah halaman dimuat ulang saat form dikirim -->
  <input type="text">
  <button type="submit">Kirim</button>
</form>

<input @keyup.enter="cari" placeholder="Tekan Enter untuk mencari">
<!-- cari dijalankan hanya saat tombol Enter dilepas -->

<button @click.once="sambut">Hanya sekali</button>
<!-- setelah klik pertama, event tidak dijalankan lagi -->
```

`@submit.prevent` adalah modifier yang paling sering kamu pakai. Di bab HTML, formulir yang dikirim membuat halaman dimuat ulang. Dengan `.prevent`, kita menangani data di JavaScript tanpa memuat ulang halaman.

> **Ringkasan:** Modifier mengatur perilaku event, seperti `.prevent` untuk mencegah muat ulang dan `.enter` untuk tombol Enter.

---

## 7. Contoh: Penghitung Lengkap

```vue
<script setup>
import { ref } from 'vue'

const hitungan = ref(0)

function ubah(jumlah) {
  hitungan.value += jumlah
}
</script>

<template>
  <h2>Hitungan: {{ hitungan }}</h2>
  <button @click="ubah(-1)">-1</button>
  <button @click="ubah(1)">+1</button>
  <button @click="ubah(10)">+10</button>
  <button @click="hitungan = 0">Reset</button>
</template>
```

Satu fungsi `ubah` dipakai oleh tiga tombol dengan argumen berbeda, dan satu tombol memakai kode langsung.

---

## 8. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Fungsi berjalan sendiri saat halaman dibuka, atau tombol tidak bereaksi | Memanggil fungsi di `{{ tambah() }}`, atau memakai atribut `onclick` bawaan HTML | Pasang di atribut Vue: `@click="tambah"` atau `@click="tambah(1)"` |
| Halaman dimuat ulang saat form dikirim | Lupa `.prevent` | Tulis `@submit.prevent="..."` |
| `event` bernilai `undefined` | Mengirim argumen sendiri tanpa `$event` | Tulis `@click="sapa('Budi', $event)"` |
| Nilai tidak berubah di tombol inline | Menulis `.value` di template | Di template, tulis `hitungan++` tanpa `.value` |

---

## 9. Latihan Singkat

1. Buat penghitung dengan tombol tambah, kurang, dan reset. Pakai fungsi untuk tombol tambah dan kurang, kode langsung untuk reset.
2. Buat tiga tombol nama, lalu tampilkan nama yang diklik memakai fungsi dengan argumen.
3. Buat input yang menampilkan hasil ketikan secara langsung memakai `@input` dan object event.
4. Buat formulir dengan `@submit.prevent` yang menampilkan teks "Terkirim!" tanpa memuat ulang halaman.
5. Buat input pencarian yang hanya menjalankan fungsi saat Enter ditekan memakai `@keyup.enter`.
6. Buat tombol dengan `@click.once`, lalu amati bahwa klik kedua tidak berpengaruh.

---

## Rangkuman

- `v-on:event="penanganan"` merespons event, dan singkatannya adalah `@event="penanganan"`.
- Untuk aksi panjang, tulis nama fungsi. Untuk aksi satu baris, kode boleh ditulis langsung di atribut.
- Argumen dikirim dengan tanda kurung, dan `$event` dipakai bila fungsi juga butuh object event.
- Modifier seperti `.prevent`, `.stop`, `.once`, dan `.enter` mengatur perilaku event tanpa kode tambahan.
- `@submit.prevent` adalah pola paling umum untuk menangani formulir tanpa memuat ulang halaman.
