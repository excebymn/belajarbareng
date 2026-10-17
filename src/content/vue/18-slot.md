---
jenis: murid
bab: vue
urutan: 18
judul: "Slot: Isi Komponen yang Fleksibel"
deskripsi: "Membuat komponen yang isinya bisa diatur dari luar dengan slot, slot bernama, dan isi bawaan slot."
---

# Slot: Isi Komponen yang Fleksibel

Pada materi ini kamu akan mempelajari: cara membuat komponen yang isinya diatur dari luar dengan `slot`, memberi isi bawaan, memakai beberapa slot dengan nama, serta kapan memilih slot dan kapan memilih props.

Sebelum mulai, pastikan kamu sudah memahami: komponen dari materi Komponen dan File .vue, props dari materi Props, serta elemen semantik dari bab HTML.

---

## 1. Masalah: Props Hanya untuk Data Sederhana

Props cocok untuk mengirim data seperti teks dan angka. Namun, bagaimana jika kita ingin membuat komponen **pembungkus** yang isinya berupa elemen HTML bebas? Misalnya kartu yang isinya kadang paragraf, kadang gambar dan tombol.

Mengirim potongan HTML lewat props akan merepotkan. Untuk kebutuhan ini, Vue menyediakan **slot**: lubang di dalam komponen tempat induk boleh menaruh isi apa saja.

> **Ringkasan:** Slot adalah lubang di komponen tempat induk menaruh isi bebas.

---

## 2. Slot Dasar

Tulis `<slot />` di tempat isi dari luar akan muncul.

#### Cara menulis

```vue
<!-- src/components/KartuBingkai.vue -->
<template>
  <div class="kartu">
    <slot />
    <!-- isi dari induk akan muncul di sini -->
  </div>
</template>

<style scoped>
.kartu {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
```

Induk menaruh isinya **di antara tag pembuka dan penutup** komponen.

```vue
<!-- src/App.vue -->
<script setup>
import KartuBingkai from './components/KartuBingkai.vue'
</script>

<template>
  <KartuBingkai>
    <h2>Selamat Datang</h2>
    <p>Ini isi kartu pertama.</p>
  </KartuBingkai>

  <KartuBingkai>
    <img src="https://placehold.co/200x100" alt="Gambar contoh">
    <button>Lihat</button>
  </KartuBingkai>
  <!-- komponen yang sama, isi yang sangat berbeda -->
</template>
```

Komponen `KartuBingkai` hanya mengurus bingkainya (garis, sudut, bayangan). Isinya sepenuhnya ditentukan oleh pemakai. Satu komponen jadi bisa dipakai di banyak tempat dengan isi berbeda.

> **Ringkasan:** `<slot />` di komponen menampung isi yang ditulis induk di antara tag komponen.

---

## 3. Isi Bawaan Slot

Jika induk tidak menaruh isi apa pun, slot bisa menampilkan **isi bawaan** (*fallback*). Tulis isinya di dalam tag `<slot>`.

```vue
<!-- src/components/TombolAksi.vue -->
<template>
  <button class="tombol">
    <slot>Kirim</slot>
    <!-- jika tidak ada isi dari induk, tampil teks "Kirim" -->
  </button>
</template>
```

```vue
<TombolAksi />
<!-- tampil: tombol bertuliskan "Kirim" -->
<TombolAksi>Simpan Data</TombolAksi>
<!-- tampil: tombol bertuliskan "Simpan Data" -->
```

---

## 4. Slot Bernama

Kadang komponen punya lebih dari satu tempat isi, misalnya kartu dengan bagian judul, isi, dan kaki. Beri nama pada tiap slot dengan atribut `name`.

#### Cara menulis

```vue
<!-- src/components/KartuLengkap.vue -->
<template>
  <article class="kartu">
    <header>
      <slot name="judul" />
      <!-- slot bernama "judul" -->
    </header>
    <main>
      <slot />
      <!-- slot tanpa nama disebut slot bawaan (default) -->
    </main>
    <footer>
      <slot name="kaki">Tidak ada keterangan.</slot>
      <!-- slot bernama "kaki" dengan isi bawaan -->
    </footer>
  </article>
</template>
```

Induk mengisi tiap slot dengan `<template>` yang diberi `#namaSlot`.

```vue
<KartuLengkap>
  <template #judul>
    <h2>Judul Kartu</h2>
  </template>
  <!-- #judul adalah singkatan dari v-slot:judul -->

  <p>Ini isi utama kartu, masuk ke slot bawaan.</p>
  <!-- isi di luar template bernama masuk ke slot tanpa nama -->

  <template #kaki>
    <small>Diterbitkan 15 Oktober 2026</small>
  </template>
</KartuLengkap>
```

Aturan:

- Slot dengan `name` diisi lewat `<template #nama>`.
- Slot tanpa `name` (slot bawaan) menerima isi apa saja yang tidak dibungkus `<template #nama>`.
- Slot yang tidak diisi akan menampilkan isi bawaannya, atau kosong bila tidak ada.

Perhatikan bahwa komponen di atas memakai elemen semantik (`article`, `header`, `main`, `footer`) dari bab HTML. Slot memudahkan kita menyusun struktur yang rapi tanpa mengulang kode.

> **Ringkasan:** Slot bernama memberi beberapa tempat isi. Isi dikirim dengan `<template #nama>`.

---

## 5. Slot atau Props

Slot dan props sama-sama cara mengatur isi komponen dari luar. Berikut pegangannya.

| Situasi | Pilihan |
|---|---|
| Isinya data sederhana: teks, angka, boolean | Props |
| Isinya berupa elemen HTML atau komponen lain | Slot |
| Komponen hanya "bingkai" untuk isi yang beragam | Slot |
| Komponen perlu memproses datanya (menghitung, memformat) | Props |

Keduanya sering dipakai bersamaan.

```vue
<!-- KartuBingkai dengan props untuk judul dan slot untuk isi -->
<script setup>
defineProps({ judul: String })
</script>

<template>
  <div class="kartu">
    <h2>{{ judul }}</h2>
    <slot />
  </div>
</template>
```

```vue
<KartuBingkai judul="Profil">
  <p>Isi bebas di sini.</p>
</KartuBingkai>
```

---

## 6. Contoh: Kotak Peringatan

Satu komponen untuk berbagai jenis pesan, memadukan props dan slot.

```vue
<!-- src/components/KotakPesan.vue -->
<script setup>
defineProps({
  jenis: {
    type: String,
    default: 'info'
  }
})
</script>

<template>
  <div class="kotak" :class="jenis">
    <slot />
  </div>
</template>

<style scoped>
.kotak { padding: 0.75rem 1rem; border-radius: 6px; margin: 0.5rem 0; }
.info { background: #e0f2fe; }
.sukses { background: #dcfce7; }
.bahaya { background: #fee2e2; }
</style>
```

```vue
<KotakPesan>Ini informasi biasa.</KotakPesan>
<KotakPesan jenis="sukses"><strong>Berhasil!</strong> Data tersimpan.</KotakPesan>
<KotakPesan jenis="bahaya">Terjadi kesalahan, coba lagi.</KotakPesan>
```

Props `jenis` mengatur gaya (lewat `:class` dari materi Binding Class dan Style), sedangkan slot menampung isi pesannya.

---

## 7. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Isi dari induk tidak tampil | Lupa menulis `<slot />` di komponen | Tambahkan `<slot />` di tempat isi muncul |
| Isi slot bernama tidak muncul | Nama di `#nama` tidak cocok dengan `name="..."` | Samakan nama di keduanya |
| Isi bawaan tidak tampil | Induk menaruh spasi atau isi kosong di antara tag | Hapus isi di antara tag komponen |
| Peringatan saat memakai `#nama` | `#nama` ditulis di elemen biasa, bukan `<template>` | Tulis `<template #nama>` langsung di dalam komponen |
| Gaya `scoped` tidak berlaku pada isi dari induk | Isi slot berasal dari induk, sehingga gayanya mengikuti induk | Beri gaya di induk, atau atur lewat class di pembungkus |

---

## 8. Latihan Singkat

1. Buat komponen `KartuBingkai` dengan `<slot />`, lalu pakai dua kali dengan isi berbeda.
2. Tambahkan isi bawaan pada slot sebuah `TombolAksi`, lalu pakai dengan dan tanpa isi.
3. Buat `KartuLengkap` dengan slot `judul`, slot bawaan, dan slot `kaki`.
4. Pakai `KartuLengkap` dengan mengisi semua slot, lalu coba tanpa mengisi slot `kaki` untuk melihat isi bawaan.
5. Buat `KotakPesan` dengan props `jenis` dan slot untuk isi pesan.
6. Buat komponen `Modal` sederhana dengan slot isi dan slot tombol, dan tampilkan dengan `v-if`.

---

## Rangkuman

- `slot` membuat lubang di komponen yang diisi dari luar, cocok untuk isi berupa elemen HTML atau komponen lain.
- Isi bawaan ditulis di dalam tag `<slot>` dan tampil bila induk tidak memberi isi.
- Slot bernama (`<slot name="judul" />`) diisi dengan `<template #judul>`. Isi lain masuk ke slot bawaan.
- Pakai props untuk data sederhana, dan slot untuk isi berupa elemen atau komponen.
- Props dan slot sering dipakai bersama dalam satu komponen.
