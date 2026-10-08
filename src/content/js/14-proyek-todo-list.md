---
jenis: murid
bab: js
urutan: 14
judul: "Proyek: Aplikasi Daftar Tugas"
deskripsi: "Membuat aplikasi daftar tugas yang bisa menambah, menandai selesai, menghapus, dan menyimpan data di localStorage dengan semua materi bab JavaScript."
---

# Proyek: Aplikasi Daftar Tugas

Pada materi ini kamu akan membuat aplikasi **daftar tugas** (to-do list) dengan semua yang sudah dipelajari di bab JavaScript: variabel, array, object, fungsi, DOM, event, dan `localStorage`.

Sebelum mulai, pastikan kamu sudah memahami: seluruh materi di bab JS, serta dasar HTML dan CSS dari bab sebelumnya.

---

## 1. Gambaran Proyek

Fitur yang akan dibuat:

| Fitur | Teknik yang dipakai |
|---|---|
| Menambah tugas lewat formulir | Event `submit`, `preventDefault`, `push` |
| Menampilkan daftar tugas | Array of object, `forEach`, `createElement` |
| Menandai tugas selesai | Event `click`, `classList.toggle` |
| Menghapus tugas | `splice` atau `filter` |
| Menghitung tugas yang belum selesai | `filter`, template literal |
| Data tidak hilang saat halaman dimuat ulang | `localStorage`, `JSON` |

Struktur folder:

```text
todo/
├── index.html
├── style.css
└── script.js
```

Satu hal yang akan kamu rasakan selama mengerjakan proyek ini: **setiap perubahan data harus diikuti perintah menggambar ulang tampilan**. Ingat pola ini, karena Vue nanti mengerjakannya secara otomatis.

---

## 2. Langkah 1: HTML

Buat `index.html`.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Daftar Tugas</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
  </head>
  <body>
    <main>
      <h1>Daftar Tugas</h1>

      <form id="form-tugas">
        <label for="input-tugas">Tugas baru</label>
        <div class="baris">
          <input type="text" id="input-tugas" placeholder="Contoh: Belajar JavaScript" required>
          <button type="submit">Tambah</button>
        </div>
      </form>

      <p id="info"></p>
      <ul id="daftar-tugas"></ul>
    </main>
  </body>
</html>
```

Perhatikan bahwa `ul` dibiarkan **kosong**. Isinya akan dibuat oleh JavaScript dari data.

---

## 3. Langkah 2: CSS Sederhana

Buat `style.css`.

```css
* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, sans-serif;
  background-color: #f5f7fb;
  margin: 0;
  padding: 2rem 1rem;
}

main {
  max-width: 480px;
  margin: 0 auto;
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.baris {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

input[type="text"] {
  flex: 1;
  padding: 0.6rem;
  border: 1px solid #ccd3e0;
  border-radius: 8px;
  font: inherit;
}

button {
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  background-color: #3366ff;
  color: white;
  font: inherit;
  cursor: pointer;
}
button:hover {
  background-color: #2447c7;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.25rem;
  border-bottom: 1px solid #eef0f5;
  cursor: pointer;
}

li.selesai span {
  text-decoration: line-through;
  color: #98a2b3;
}

li button {
  background-color: #e5484d;
  padding: 0.3rem 0.7rem;
  font-size: 0.85rem;
}
li button:hover {
  background-color: #c93a3f;
}
```

Perhatikan class `.selesai`. Tampilan "tugas selesai" didefinisikan di CSS, dan JavaScript hanya akan memasang atau melepas class itu.

---

## 4. Langkah 3: JavaScript

Buat `script.js`, dan tulis bertahap.

### 4.a Mengambil Elemen dan Data

```js
const form = document.querySelector('#form-tugas')
const input = document.querySelector('#input-tugas')
const daftar = document.querySelector('#daftar-tugas')
const info = document.querySelector('#info')
// mengambil empat elemen yang akan dipakai

let tugas = JSON.parse(localStorage.getItem('tugas')) || []
// membaca data tersimpan, atau array kosong jika belum ada
// setiap tugas berbentuk object: { teks: 'Belajar', selesai: false }
```

`tugas` memakai `let` karena nanti isinya bisa diganti seluruhnya (misalnya saat menghapus dengan `filter`).

### 4.b Fungsi Menyimpan

```js
function simpan() {
  localStorage.setItem('tugas', JSON.stringify(tugas))
  // mengubah array menjadi teks JSON, lalu menyimpannya di browser
}
```

### 4.c Fungsi Menampilkan

Ini bagian inti proyek: mengubah data (array) menjadi tampilan.

```js
function tampilkan() {
  daftar.innerHTML = ''
  // kosongkan daftar dulu supaya tidak ada item ganda

  tugas.forEach((item, indeks) => {
    const li = document.createElement('li')
    if (item.selesai) {
      li.classList.add('selesai')
      // pasang class jika tugas sudah selesai
    }

    const teks = document.createElement('span')
    teks.textContent = item.teks
    // textContent aman untuk teks dari pengguna

    const tombolHapus = document.createElement('button')
    tombolHapus.textContent = 'Hapus'

    li.addEventListener('click', () => {
      tugas[indeks].selesai = !tugas[indeks].selesai
      // membalik status: true menjadi false, false menjadi true
      simpan()
      tampilkan()
      // data berubah, jadi gambar ulang tampilannya
    })

    tombolHapus.addEventListener('click', (event) => {
      event.stopPropagation()
      // mencegah klik tombol ikut dianggap klik pada li
      tugas.splice(indeks, 1)
      // menghapus satu tugas di posisi indeks
      simpan()
      tampilkan()
    })

    li.append(teks, tombolHapus)
    daftar.append(li)
  })

  const sisa = tugas.filter(item => !item.selesai).length
  info.textContent = `${sisa} dari ${tugas.length} tugas belum selesai`
  // menghitung tugas yang belum selesai dengan filter
}
```

### 4.d Menambah Tugas

```js
form.addEventListener('submit', (event) => {
  event.preventDefault()
  // mencegah halaman dimuat ulang

  const teks = input.value.trim()
  if (teks === '') {
    return
    // abaikan jika hanya berisi spasi
  }

  tugas.push({ teks: teks, selesai: false })
  input.value = ''
  input.focus()
  // mengosongkan kolom dan menaruh kursor kembali ke sana

  simpan()
  tampilkan()
})
```

### 4.e Tampilan Awal

```js
tampilkan()
// dijalankan sekali saat halaman dibuka, untuk menampilkan data yang sudah tersimpan
```

Simpan semua file, lalu buka `index.html` (dobel klik sudah cukup karena kita tidak memakai modul). Coba tambah beberapa tugas, tandai selesai, hapus satu, lalu **muat ulang halaman**. Data seharusnya tetap ada.

> **Ringkasan:** Data disimpan di array `tugas`. Setiap kali data berubah, kita memanggil `simpan()` lalu `tampilkan()` untuk menggambar ulang daftar dari data.

---

## 5. Cara Kerja Keseluruhan

Alurnya berputar seperti ini:

```text
Pengguna beraksi (submit / klik)
        ↓
Event listener mengubah DATA (array tugas)
        ↓
simpan()      → menyimpan data ke localStorage
tampilkan()   → menggambar ulang DOM dari data
        ↓
Pengguna melihat hasil
```

Prinsip penting: **data adalah sumber kebenaran**. Kita tidak mengubah tampilan secara langsung, melainkan mengubah data, lalu membuat ulang tampilan dari data tersebut. Pola ini dipakai oleh hampir semua framework, termasuk Vue.

---

## 6. Pemeriksaan dan Pemecahan Masalah

| Pemeriksaan | Sudah? |
|---|---|
| Tugas baru muncul setelah ditambahkan | |
| Menekan Enter di kolom isian juga menambah tugas | |
| Mengklik tugas mencoretnya, dan mengklik lagi membatalkan | |
| Tombol Hapus menghapus tugas tanpa mencoret tugas lain | |
| Teks info menghitung tugas yang belum selesai dengan benar | |
| Setelah dimuat ulang, data tetap ada | |
| Tugas yang hanya berisi spasi tidak bisa ditambahkan | |

Jika ada yang tidak berfungsi:

1. Buka Console (`F12`) dan baca pesan error beserta nomor barisnya.
2. Pastikan `id` di HTML sama persis dengan yang ditulis di `querySelector`.
3. Tambahkan `console.log(tugas)` di dalam `tampilkan()` untuk memeriksa isi datanya.
4. Lihat isi `localStorage` di DevTools tab **Application**.
5. Jika perubahan tidak tampak, pastikan `tampilkan()` dipanggil setelah data berubah.

---

## 7. Tantangan Tambahan

1. Tambahkan tombol filter: **Semua**, **Belum selesai**, dan **Selesai**, dengan `filter`.
2. Tambahkan tombol **Hapus semua yang selesai**.
3. Izinkan pengeditan teks tugas dengan klik dua kali (`dblclick`).
4. Tambahkan tanggal pembuatan pada setiap tugas dan tampilkan di samping teks.
5. Pecah kode menjadi modul: `penyimpanan.js` untuk `simpan` dan `muat`, lalu impor di `script.js` (ingat memakai `type="module"` dan Live Server).
6. Urutkan tugas sehingga yang belum selesai tampil lebih dulu dengan `sort`.

---

## 8. Menuju Vue

Proyek ini sudah lengkap, tetapi lihat berapa banyak kode yang kita tulis hanya untuk menjaga tampilan tetap sesuai data:

- Mengambil elemen satu per satu dengan `querySelector`.
- Mengosongkan daftar, membuat elemen satu per satu, dan menyusunnya.
- Memasang listener pada setiap elemen baru.
- Selalu ingat memanggil `tampilkan()` setelah data berubah. Jika lupa, tampilan "ketinggalan" dari data.

Di bab Vue, kamu akan menulis aplikasi yang sama dengan jauh lebih sedikit kode. Kamu cukup mendeklarasikan data dan bentuk tampilannya, lalu Vue otomatis menggambar ulang setiap data berubah. `v-for` menggantikan perulangan pembuatan elemen, `@click` menggantikan `addEventListener`, dan `v-model` menggantikan pembacaan `input.value`.

Karena kamu sudah menulis versi manualnya, kamu akan paham betul apa yang dikerjakan Vue di balik layar.

---

## Rangkuman

- Aplikasi daftar tugas memakai array berisi object sebagai data, dengan fungsi `tampilkan()` yang membangun DOM dari data.
- Event `submit` (dengan `preventDefault`) menambah tugas, dan event `click` menandai selesai atau menghapus.
- Setiap data berubah, panggil `simpan()` untuk menyimpan ke `localStorage` dan `tampilkan()` untuk menggambar ulang.
- Prinsip pentingnya: data adalah sumber kebenaran, dan tampilan dibuat ulang dari data.
- Bab JavaScript selesai. Selanjutnya kamu akan mengenal Git, lalu memakai Vue untuk membuat aplikasi seperti ini dengan jauh lebih ringkas.
