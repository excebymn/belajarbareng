---
jenis: murid
bab: vue
urutan: 12
judul: "Menampilkan Daftar dengan v-for"
deskripsi: "Menampilkan array dan object dengan v-for, memakai indeks, kenapa atribut key penting, dan menambah serta menghapus item dari daftar."
---

# Menampilkan Daftar dengan v-for

Pada materi ini kamu akan mempelajari: cara menampilkan array sebagai daftar dengan `v-for`, memakai indeks, mengapa atribut `key` penting, menelusuri object, serta menambah dan menghapus item dari daftar.

Sebelum mulai, pastikan kamu sudah memahami: array dan object reaktif dari materi Object dan Array Reaktif, `v-if` dan `v-on` dari materi sebelumnya, serta perulangan `for...of` dari bab JavaScript.

---

## 1. Apa itu v-for

Di bab JavaScript, kamu menampilkan daftar dengan perulangan lalu membuat elemen satu per satu lewat DOM. Di Vue, kita cukup menulis **satu elemen contoh**, dan `v-for` mengulanginya untuk setiap item di array.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const buah = ref(['Apel', 'Jeruk', 'Mangga'])
</script>

<template>
  <ul>
    <li v-for="item in buah" :key="item">{{ item }}</li>
    <!-- li diulang untuk setiap isi array; item adalah isi saat ini -->
  </ul>
</template>
```

Hasilnya tiga `li`: Apel, Jeruk, dan Mangga. Bentuk penulisannya mirip `for...of`: `item in buah` dibaca "untuk setiap item di buah".

Elemen yang diberi `v-for` adalah elemen yang **diulang**, bukan pembungkusnya. Pada contoh di atas, `li` yang diulang, sedangkan `ul` hanya satu.

> **Ringkasan:** `v-for="item in array"` mengulang elemen untuk setiap isi array.

---

## 2. Daftar Berisi Object

Data nyata biasanya berupa array berisi object.

```vue
<script setup>
import { ref } from 'vue'

const tugas = ref([
  { id: 1, teks: 'Belajar Vue', selesai: false },
  { id: 2, teks: 'Mengerjakan latihan', selesai: true },
  { id: 3, teks: 'Membaca dokumentasi', selesai: false }
])
</script>

<template>
  <ul>
    <li v-for="t in tugas" :key="t.id">
      {{ t.teks }} - {{ t.selesai ? 'Selesai' : 'Belum' }}
      <!-- t adalah satu object; akses propertinya dengan titik -->
    </li>
  </ul>
</template>
```

---

## 3. Atribut key

Perhatikan bahwa setiap `v-for` di atas disertai `:key`. Atribut ini penting.

`key` adalah **penanda unik** untuk setiap item. Saat daftar berubah (item ditambah, dihapus, atau diurutkan ulang), Vue memakai `key` untuk mengetahui item mana yang sama dengan sebelumnya, sehingga ia hanya memperbarui bagian yang berubah dan tidak salah menukar isian.

Aturan memilih `key`:

- Nilainya harus **unik** di antara item satu daftar.
- Nilainya harus **tetap** untuk item yang sama. Pakai `id` dari datanya.
- Hindari memakai indeks sebagai `key` jika daftar bisa diubah urutannya atau dihapus isinya.

```vue
<li v-for="t in tugas" :key="t.id">...</li>
<!-- bagus: id unik dan tetap -->
<li v-for="(t, i) in tugas" :key="i">...</li>
<!-- kurang baik: indeks berubah saat item dihapus -->
```

Contoh bahayanya: jika tiap item punya kolom input dan `key` memakai indeks, menghapus item pertama bisa membuat ketikan tampak pindah ke item yang salah.

> **Catatan:** Untuk array teks sederhana seperti `['Apel', 'Jeruk']`, teks itu sendiri boleh dipakai sebagai `key` selama tidak ada nilai yang sama.

> **Ringkasan:** Selalu beri `:key` unik dan tetap, sebaiknya `id` dari data, pada elemen `v-for`.

---

## 4. Indeks dan Object

### 4.a Memakai Indeks

Gunakan tanda kurung untuk mendapatkan nomor urut (mulai dari 0).

```vue
<ul>
  <li v-for="(item, indeks) in buah" :key="item">
    {{ indeks + 1 }}. {{ item }}
    <!-- indeks mulai dari 0, jadi ditambah 1 untuk nomor -->
  </li>
</ul>
```

### 4.b Menelusuri Object

`v-for` juga bisa menelusuri properti sebuah object.

```vue
<script setup>
import { ref } from 'vue'

const profil = ref({ nama: 'Budi', kota: 'Surabaya', umur: 16 })
</script>

<template>
  <ul>
    <li v-for="(nilai, kunci) in profil" :key="kunci">
      {{ kunci }}: {{ nilai }}
      <!-- kunci adalah nama properti, nilai adalah isinya -->
    </li>
  </ul>
</template>
```

### 4.c Mengulang Angka

```vue
<span v-for="n in 5" :key="n">{{ n }} </span>
<!-- menampilkan: 1 2 3 4 5 (mulai dari 1, bukan 0) -->
```

> **Ringkasan:** `(item, indeks) in array` memberi nomor urut, `(nilai, kunci) in object` menelusuri properti, dan `n in 5` mengulang angka.

---

## 5. Menambah dan Menghapus Item

Karena array bersifat reaktif, mengubah isinya otomatis memperbarui daftar di layar.

```vue
<script setup>
import { ref } from 'vue'

const tugas = ref([
  { id: 1, teks: 'Belajar Vue' },
  { id: 2, teks: 'Mengerjakan latihan' }
])
const teksBaru = ref('')

function tambah() {
  if (teksBaru.value.trim() === '') return
  // jangan tambah jika kosong
  tugas.value.push({ id: Date.now(), teks: teksBaru.value })
  // id dibuat dari waktu agar unik
  teksBaru.value = ''
  // kosongkan input
}

function hapus(id) {
  tugas.value = tugas.value.filter(t => t.id !== id)
  // simpan semua tugas kecuali yang id-nya dihapus
}
</script>

<template>
  <form @submit.prevent="tambah">
    <input v-model="teksBaru" placeholder="Tugas baru">
    <button type="submit">Tambah</button>
  </form>

  <ul>
    <li v-for="t in tugas" :key="t.id">
      {{ t.teks }}
      <button @click="hapus(t.id)">Hapus</button>
      <!-- id dikirim agar fungsi tahu item mana yang dihapus -->
    </li>
  </ul>
</template>
```

Perhatikan bagaimana semua materi sebelumnya bekerja sama: `ref` untuk data, `v-model` untuk input, `@submit.prevent` dan `@click` untuk aksi, serta `v-for` untuk tampilan.

> **Ringkasan:** Tambah item dengan `push`, hapus dengan `filter`, dan daftar di layar mengikuti otomatis.

---

## 6. v-for dengan v-if

### 6.a Pesan Daftar Kosong

Pola yang umum: tampilkan pesan jika daftar kosong.

```vue
<p v-if="tugas.length === 0">Belum ada tugas.</p>
<ul v-else>
  <li v-for="t in tugas" :key="t.id">{{ t.teks }}</li>
</ul>
```

### 6.b Jangan Satu Elemen

Jangan taruh `v-for` dan `v-if` pada elemen yang sama. Di Vue, `v-if` dijalankan lebih dulu, sehingga ia tidak bisa membaca variabel `item` dari `v-for`.

```vue
<li v-for="t in tugas" :key="t.id" v-if="!t.selesai">...</li>
<!-- salah: v-if tidak mengenal t -->
```

Ada dua cara yang benar. Pertama, bungkus dengan `<template>`.

```vue
<template v-for="t in tugas" :key="t.id">
  <li v-if="!t.selesai">{{ t.teks }}</li>
  <!-- v-if berada di elemen di dalam, tempat t sudah dikenal -->
</template>
```

Kedua, saring dulu datanya dengan `computed`, yang dibahas di materi Computed dan jauh lebih disarankan.

> **Ringkasan:** Pakai `v-if` di elemen terpisah untuk pesan kosong. Jangan gabungkan `v-if` dan `v-for` pada satu elemen.

---

## 7. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Peringatan tentang `key` di Console | Lupa menulis `:key` | Tambahkan `:key` dengan id unik |
| `key` terasa tidak berfungsi, ketikan tertukar | Memakai indeks sebagai `key` | Pakai `id` dari data |
| Daftar tidak berubah setelah `filter` | Hasil `filter` tidak disimpan | `daftar.value = daftar.value.filter(...)` |
| `v-if` tidak mengenali item | `v-if` dan `v-for` di elemen yang sama | Bungkus dengan `<template>` atau pakai `computed` |
| Error saat menulis `v-for="item in buah"` | Data bukan array atau lupa `.value` di script | Pastikan ref berisi array, dan tulis `.value` di `<script>` |

---

## 8. Latihan Singkat

1. Tampilkan array berisi lima nama buah sebagai daftar `ul`.
2. Ubah menjadi daftar bernomor memakai indeks.
3. Buat array berisi tiga object tugas, lalu tampilkan teks dan statusnya.
4. Tambahkan formulir untuk menambah tugas baru, dengan id dari `Date.now()`.
5. Tambahkan tombol "Hapus" pada setiap tugas.
6. Tampilkan pesan "Belum ada tugas" saat daftar kosong.
7. Tampilkan sebuah object profil sebagai daftar pasangan kunci dan nilai.

---

## Rangkuman

- `v-for="item in array"` mengulang elemen untuk setiap isi array, dan `(item, indeks)` memberi nomor urut.
- Object ditelusuri dengan `(nilai, kunci) in object`, dan `n in 5` mengulang angka dari 1 sampai 5.
- Selalu beri `:key` yang unik dan tetap, sebaiknya `id` dari data, bukan indeks.
- Tambah item dengan `push` dan hapus dengan `filter`, dan tampilan mengikuti otomatis.
- Jangan gabungkan `v-if` dan `v-for` pada satu elemen. Pakai `<template>` atau `computed`.
