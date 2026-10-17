---
jenis: murid
bab: vue
urutan: 7
judul: "Binding Atribut dengan v-bind"
deskripsi: "Mengikat atribut seperti src, href, dan disabled ke data dengan v-bind beserta singkatan titik dua."
---

# Binding Atribut dengan v-bind

Pada materi ini kamu akan mempelajari: mengapa `{{ }}` tidak bisa dipakai di atribut, cara mengikat atribut ke data dengan `v-bind`, singkatan titik dua, atribut boolean seperti `disabled`, serta kesalahan umum yang sering terjadi.

Sebelum mulai, pastikan kamu sudah memahami: `ref` dari materi Data Reaktif dengan ref, interpolasi dari materi Template dan Interpolasi, serta atribut `src`, `href`, dan `disabled` dari bab HTML.

---

## 1. Masalah: Atribut Tidak Bisa Memakai {{ }}

Interpolasi `{{ }}` hanya bekerja di dalam teks. Di dalam atribut, ia tidak berfungsi.

```vue
<script setup>
import { ref } from 'vue'

const gambar = ref('img/kucing.jpg')
</script>

<template>
  <img src="{{ gambar }}" alt="Kucing">
  <!-- salah: browser mencari file bernama persis "{{ gambar }}" -->
</template>
```

Untuk menghubungkan atribut dengan data, Vue menyediakan directive `v-bind`.

> **Ringkasan:** `{{ }}` tidak bisa dipakai di dalam atribut. Untuk atribut, pakai `v-bind`.

---

## 2. v-bind

`v-bind:` diletakkan di depan nama atribut. Nilainya bukan lagi teks biasa, melainkan **ekspresi JavaScript** yang merujuk ke data.

#### Cara menulis

```vue
<script setup>
import { ref } from 'vue'

const gambar = ref('img/kucing.jpg')
const deskripsi = ref('Kucing oren tidur di sofa')
</script>

<template>
  <img v-bind:src="gambar" v-bind:alt="deskripsi">
  <!-- v-bind:src berarti: isi atribut src dengan nilai variabel gambar -->
</template>
```

Jika nilai `gambar` berubah, atribut `src` ikut berubah dan browser memuat gambar yang baru.

Bandingkan dua penulisan berikut. Hasilnya sangat berbeda.

```vue
<img src="gambar">
<!-- tanpa v-bind: nilainya teks biasa "gambar" -->
<img v-bind:src="gambar">
<!-- dengan v-bind: nilainya isi variabel gambar -->
```

> **Ringkasan:** `v-bind:atribut="ekspresi"` mengisi atribut dengan nilai data, bukan teks biasa.

---

## 3. Singkatan Titik Dua

`v-bind` sangat sering dipakai, sehingga ada singkatannya: cukup tulis titik dua `:` di depan nama atribut.

```vue
<img :src="gambar" :alt="deskripsi">
<!-- sama persis dengan v-bind:src dan v-bind:alt -->
<a :href="alamat">Kunjungi situs</a>
<!-- atribut apa pun bisa diikat -->
<input :placeholder="petunjuk">
```

Kursus ini selanjutnya memakai singkatan titik dua.

---

## 4. Ekspresi di dalam v-bind

Nilai `v-bind` adalah ekspresi JavaScript, sama seperti isi `{{ }}`. Jadi kamu bisa menggabungkan teks, menghitung, atau memakai ternary.

```vue
<script setup>
import { ref } from 'vue'

const id = ref(3)
const aktif = ref(true)
</script>

<template>
  <img :src="'img/foto-' + id + '.jpg'" alt="Foto">
  <!-- menggabungkan teks dengan variabel -->
  <img :src="`img/foto-${id}.jpg`" alt="Foto">
  <!-- template literal, cara lain yang sama hasilnya -->
  <a :href="aktif ? '/beranda' : '/login'">Masuk</a>
  <!-- ternary di dalam atribut -->
</template>
```

Di sini tanda kutip memegang peran penting: tanda kutip luar `"..."` adalah pembungkus atribut HTML, sedangkan tanda kutip dalam `'...'` menandai teks JavaScript. Pakai jenis kutip yang berbeda agar tidak bentrok.

> **Ringkasan:** Nilai `v-bind` adalah ekspresi JavaScript, sehingga bisa memakai penggabungan teks, template literal, dan ternary.

---

## 5. Atribut Boolean

Beberapa atribut HTML bersifat boolean, seperti `disabled`, `checked`, `readonly`, dan `required`. Atribut ini aktif jika ada, dan nonaktif jika tidak ada.

Dengan `v-bind`, kita menentukan keberadaannya dari nilai `true` atau `false`.

```vue
<script setup>
import { ref } from 'vue'

const terkunci = ref(true)
</script>

<template>
  <button :disabled="terkunci">Kirim</button>
  <!-- terkunci true: tombol disabled; false: tombol aktif -->
  <button @click="terkunci = !terkunci">Buka / kunci tombol</button>
</template>
```

Contoh yang sering dipakai: tombol kirim hanya aktif jika isian sudah terisi.

```vue
<script setup>
import { ref } from 'vue'

const nama = ref('')
</script>

<template>
  <input v-model="nama" placeholder="Ketik namamu">
  <!-- v-model dibahas di materi Formulir dengan v-model -->
  <button :disabled="nama === ''">Kirim</button>
  <!-- disabled selama nama masih kosong -->
</template>
```

> **Ringkasan:** Pada atribut boolean, `true` memasang atributnya dan `false` melepasnya.

---

## 6. Atribut Lain yang Sering Diikat

| Atribut | Contoh | Kegunaan |
|---|---|---|
| `src`, `alt` | `:src="foto.url"` | Gambar dinamis |
| `href` | `:href="'/tugas/' + id"` | Link dinamis |
| `disabled`, `checked` | `:disabled="kosong"` | Mengunci tombol atau isian |
| `id`, `for` | `:id="'input-' + n"` | Pasangan label dan input di daftar |
| `title`, `placeholder` | `:placeholder="petunjuk"` | Teks bantuan dinamis |
| `class`, `style` | `:class="{ aktif: terpilih }"` | Dibahas di materi Binding Class dan Style |

---

## 7. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Gambar tidak muncul, nama file aneh di tab Network | Memakai `{{ }}` di atribut, atau lupa titik dua | Tulis `:src="gambar"` |
| Atribut berisi teks nama variabel | Lupa titik dua | Tambahkan `:` di depan atribut |
| Error `... is not defined` | Nama variabel di `:src="..."` salah ketik | Samakan dengan nama di `<script setup>` |
| Teks di URL tidak lengkap | Lupa tanda kutip untuk teks biasa di ekspresi | `:src="'img/' + nama"`, bukan `:src="img/ + nama"` |

---

## 8. Latihan Singkat

1. Simpan alamat sebuah gambar di `ref`, lalu tampilkan dengan `:src` dan `:alt`.
2. Tambahkan tombol yang mengganti gambar ke gambar kedua, dengan mengubah nilai `ref`.
3. Buat link yang alamatnya diambil dari `ref`, lalu ubah nilainya dengan tombol.
4. Buat tombol yang `disabled` selama sebuah `ref` boolean bernilai `true`, dan tombol lain untuk membalik nilai itu.
5. Buat input nama dan tombol "Kirim" yang `disabled` selama input masih kosong.
6. Gunakan template literal untuk membuat `:src` yang berubah mengikuti nomor foto 1, 2, atau 3.

---

## Rangkuman

- `{{ }}` tidak bisa dipakai di dalam atribut. Untuk atribut, pakai `v-bind`.
- `v-bind:atribut="ekspresi"` mengisi atribut dengan nilai data, dan singkatannya adalah `:atribut="ekspresi"`.
- Nilai `v-bind` adalah ekspresi JavaScript, jadi boleh memakai penggabungan teks, template literal, dan ternary.
- Pada atribut boolean seperti `disabled`, nilai `true` memasang atribut dan `false` melepasnya.
- Kesalahan paling umum: lupa titik dua, sehingga atribut berisi teks biasa.
