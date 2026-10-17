---
jenis: murid
bab: vue
urutan: 20
judul: "Vue Router: Halaman dan Navigasi"
deskripsi: "Membuat aplikasi banyak halaman dengan Vue Router: mendaftarkan route, RouterLink, RouterView, dan perbedaan folder views dan components."
---

# Vue Router: Halaman dan Navigasi

Pada materi ini kamu akan mempelajari: apa itu Single Page Application dan Vue Router, cara memasang dan mengatur router, mendaftarkan route, memakai `RouterLink` dan `RouterView`, memisahkan folder `views` dan `components`, serta menandai menu yang aktif.

Sebelum mulai, pastikan kamu sudah memahami: komponen dari materi Komponen dan File .vue, link dan alamat relatif dari bab HTML, serta modul `import` dan `export` dari bab JavaScript.

---

## 1. Single Page Application

Di bab HTML, setiap halaman adalah file terpisah (`index.html`, `kontak.html`), dan berpindah halaman berarti browser memuat file baru dari server.

Aplikasi Vue hanya punya **satu** file HTML. Lalu bagaimana membuat banyak halaman? Dengan **Single Page Application** (SPA): browser memuat satu halaman, lalu JavaScript menukar isi tampilan sesuai alamat URL, tanpa memuat ulang halaman.

Alat resmi Vue untuk ini adalah **Vue Router**. Ia menghubungkan alamat URL dengan komponen.

| Alamat URL | Komponen yang tampil |
|---|---|
| `/` | `BerandaView.vue` |
| `/tentang` | `TentangView.vue` |
| `/kontak` | `KontakView.vue` |

> **Ringkasan:** Vue Router menukar komponen yang tampil berdasarkan alamat URL, sehingga satu halaman HTML terasa seperti banyak halaman.

---

## 2. Memasang Vue Router

Jika kamu belum memilih Router saat `npm create vue`, pasang secara manual di folder project.

```bash
npm install vue-router
# memasang Vue Router ke project
```

Jika dulu kamu memilih Vue Router saat membuat project, paketnya sudah terpasang dan folder `src/router` sudah ada. Kamu bisa langsung melihat isinya dan menyesuaikannya dengan materi ini.

---

## 3. Membuat Halaman (Views)

Komponen yang berfungsi sebagai **satu halaman penuh** biasanya disimpan di folder terpisah bernama `views`, agar tidak tercampur dengan komponen kecil di `components`.

```text
src/
├── views/
│   ├── BerandaView.vue
│   ├── TentangView.vue
│   └── KontakView.vue
├── components/
├── router/
│   └── index.js
├── App.vue
└── main.js
```

| Folder | Isi |
|---|---|
| `views` | Komponen halaman penuh, satu untuk tiap route |
| `components` | Komponen kecil yang dipakai ulang di dalam halaman |

Isi masing-masing view adalah komponen biasa.

```vue
<!-- src/views/BerandaView.vue -->
<template>
  <main>
    <h1>Beranda</h1>
    <p>Selamat datang di aplikasiku.</p>
  </main>
</template>
```

```vue
<!-- src/views/TentangView.vue -->
<template>
  <main>
    <h1>Tentang</h1>
    <p>Halaman ini berisi informasi tentang aku.</p>
  </main>
</template>
```

---

## 4. Mendaftarkan Route

Buat file `src/router/index.js` untuk memetakan alamat ke komponen.

```js
// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import BerandaView from '../views/BerandaView.vue'
import TentangView from '../views/TentangView.vue'

const router = createRouter({
  history: createWebHistory(),
  // mode riwayat browser: alamat bersih seperti /tentang, tanpa tanda #
  routes: [
    { path: '/', name: 'beranda', component: BerandaView },
    // path adalah alamat; name adalah nama pengenal; component adalah halaman yang tampil
    { path: '/tentang', name: 'tentang', component: TentangView }
  ]
})

export default router
// diekspor agar bisa dipasang di main.js
```

Setiap route adalah object dengan tiga bagian:

| Bagian | Fungsi |
|---|---|
| `path` | Alamat URL |
| `name` | Nama unik untuk route, berguna untuk berpindah lewat kode |
| `component` | Komponen yang tampil saat alamat cocok |

Lalu pasang router di `src/main.js`.

```js
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// mengimpor router dari folder router (otomatis memakai index.js)

createApp(App).use(router).mount('#app')
// use(router) memasang router ke aplikasi
```

> **Ringkasan:** Daftarkan route di `router/index.js` (path, name, component), lalu pasang dengan `.use(router)` di `main.js`.

---

## 5. RouterView dan RouterLink

Dua komponen bawaan Vue Router dipakai di `App.vue`.

| Komponen | Fungsi |
|---|---|
| `RouterView` | Tempat komponen halaman yang cocok dengan URL ditampilkan |
| `RouterLink` | Pengganti `<a>` untuk berpindah halaman tanpa memuat ulang |

```vue
<!-- src/App.vue -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
// kedua komponen diimpor dari vue-router
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Beranda</RouterLink>
      <!-- to berisi alamat tujuan, seperti href pada <a> -->
      <RouterLink to="/tentang">Tentang</RouterLink>
    </nav>
  </header>

  <RouterView />
  <!-- di sinilah BerandaView atau TentangView muncul, tergantung alamat -->
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
}
</style>
```

Header dan menu diletakkan di luar `RouterView`, sehingga tetap tampil di semua halaman. Hanya bagian `RouterView` yang berganti.

Jalankan `npm run dev`, lalu klik menu. Perhatikan bahwa halaman berganti **tanpa memuat ulang**, dan alamat di browser berubah menjadi `/tentang`.

> **Catatan:** Jangan memakai `<a href="/tentang">` biasa untuk berpindah halaman di dalam aplikasi, karena itu membuat browser memuat ulang seluruh halaman. Pakai `RouterLink`. Untuk link ke situs luar, tetap pakai `<a>`.

> **Ringkasan:** `RouterLink to="..."` berpindah halaman, dan `RouterView` menampilkan halaman yang cocok.

---

## 6. Menandai Menu yang Aktif

`RouterLink` otomatis menambahkan class pada link yang cocok dengan alamat saat ini.

| Class | Dipasang saat |
|---|---|
| `router-link-active` | Alamat saat ini diawali alamat link |
| `router-link-exact-active` | Alamat saat ini sama persis dengan alamat link |

Beri gaya pada class itu dengan CSS.

```vue
<style scoped>
nav a {
  text-decoration: none;
  color: gray;
}
nav a.router-link-exact-active {
  color: teal;
  font-weight: bold;
}
/* menu yang sedang dibuka tampil tebal dan berwarna */
</style>
```

Di DevTools tab **Elements**, kamu bisa melihat class berpindah dari satu link ke link lain saat berpindah halaman. `RouterLink` akhirnya tampil sebagai elemen `<a>` biasa.

Perhatikan bahwa link ke `/` (`Beranda`) akan memiliki `router-link-active` di semua halaman, karena semua alamat diawali `/`. Itulah mengapa memakai `router-link-exact-active` lebih tepat untuk menu beranda.

---

## 7. Mode History dan Penerbitan

`createWebHistory()` menghasilkan alamat bersih seperti `/tentang`. Saat dicoba dengan `npm run dev`, semuanya bekerja. Namun saat aplikasi diterbitkan (deploy) ke server, membuka alamat `/tentang` langsung atau memuat ulang halaman bisa menghasilkan `404`. Penyebabnya, server mencari file bernama `tentang`, padahal hanya ada satu `index.html`.

Solusinya ada di sisi server, yaitu mengatur agar semua alamat diarahkan ke `index.html`. Setiap layanan hosting punya cara sendiri, dan kamu akan menemukannya saat menerbitkan aplikasi. Untuk belajar di komputer sendiri, hal ini belum perlu dipikirkan.

Alternatifnya adalah `createWebHashHistory()`, yang menghasilkan alamat dengan tanda `#` seperti `/#/tentang` dan tidak butuh pengaturan server, tetapi alamatnya kurang rapi.

---

## 8. Kesalahan Umum

| Kesalahan | Penyebab | Perbaikan |
|---|---|---|
| Halaman kosong, tidak ada isi | Lupa `<RouterView />` di `App.vue` | Tambahkan `<RouterView />` |
| Error `RouterLink` tidak dikenali | Lupa `import` atau lupa `.use(router)` | Impor di `App.vue` dan pasang di `main.js` |
| Halaman memuat ulang saat klik menu | Memakai `<a href>` biasa | Ganti dengan `<RouterLink to>` |
| Error `Failed to resolve import` | Path import komponen salah | Periksa nama file dan path relatifnya |
| Alamat tidak ditemukan | `path` di route tidak sama dengan `to` di link | Samakan, termasuk garis miring di depan |
| 404 setelah diterbitkan ke server | Server belum mengarahkan semua alamat ke `index.html` | Atur pengalihan di hosting, atau pakai mode hash |

---

## 9. Latihan Singkat

1. Pasang Vue Router, lalu buat tiga halaman: `BerandaView`, `TentangView`, dan `KontakView` di folder `views`.
2. Daftarkan ketiganya di `router/index.js`, lalu pasang router di `main.js`.
3. Buat menu navigasi dengan `RouterLink` dan tampilkan halaman dengan `RouterView` di `App.vue`.
4. Beri gaya pada menu yang aktif memakai `router-link-exact-active`.
5. Buka DevTools tab **Network**, lalu klik menu dan pastikan tidak ada pemuatan halaman baru.
6. Pindahkan header dan menu ke komponen sendiri (`components/MenuUtama.vue`), lalu pakai di `App.vue`.

---

## Rangkuman

- Aplikasi Vue adalah Single Page Application: satu halaman HTML, dan Vue Router menukar tampilan berdasarkan URL.
- Route didaftarkan di `router/index.js` dengan `path`, `name`, dan `component`, lalu dipasang dengan `.use(router)` di `main.js`.
- Komponen halaman disimpan di folder `views`, dan komponen kecil di `components`.
- `RouterLink` berpindah halaman tanpa memuat ulang, dan `RouterView` menampilkan halaman yang cocok.
- `router-link-exact-active` menandai menu yang sedang aktif.
- Saat diterbitkan, server perlu mengarahkan semua alamat ke `index.html` agar mode history berfungsi.
