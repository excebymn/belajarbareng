---
jenis: murid
bab: js
urutan: 12
judul: "Event"
deskripsi: "Merespons aksi pengguna dengan addEventListener: click, input, submit, keydown, object event, preventDefault, bubbling, dan event delegation."
---

# Event

Pada materi ini kamu akan mempelajari: apa itu event, cara memasang `addEventListener`, jenis event yang sering dipakai, object event (`event.target`), `preventDefault` untuk formulir, konsep bubbling, serta event delegation.

Sebelum mulai, pastikan kamu sudah memahami: fungsi, arrow function, dan callback dari materi Fungsi, serta pemilihan dan pengubahan elemen dari materi DOM.

---

## 1. Apa itu Event

**Event** adalah kejadian di halaman: pengguna mengklik tombol, mengetik di kolom isian, menggerakkan kursor, menekan tombol papan ketik, atau mengirim formulir. JavaScript bisa "mendengarkan" kejadian itu, lalu menjalankan kode sebagai tanggapan.

Dengan event, halaman berubah dari tampilan statis menjadi aplikasi yang hidup.

Alurnya selalu sama:

1. Pilih elemen yang ingin didengarkan.
2. Pasang **event listener**: jenis event dan fungsi yang dijalankan saat event terjadi.
3. Fungsi itu (disebut **handler**) mengubah sesuatu, misalnya DOM.

> **Ringkasan:** Event adalah kejadian di halaman. Event listener menjalankan fungsi (handler) saat kejadian itu terjadi.

---

## 2. addEventListener

#### Cara menulis

```html
<button id="tombol">Klik saya</button>
<p id="pesan"></p>
```

```js
const tombol = document.querySelector('#tombol')
const pesan = document.querySelector('#pesan')

tombol.addEventListener('click', () => {
  pesan.textContent = 'Tombol sudah diklik!'
  // dijalankan setiap kali tombol diklik
})
```

Bentuknya: `elemen.addEventListener('jenisEvent', fungsiHandler)`.

Handler boleh berupa fungsi bernama, yang berguna jika dipakai ulang atau perlu dihapus.

```js
function tampilkanPesan() {
  pesan.textContent = 'Halo!'
}

tombol.addEventListener('click', tampilkanPesan)
// tulis nama fungsi tanpa tanda kurung: kita menyerahkan fungsinya, bukan menjalankannya
// salah: tombol.addEventListener('click', tampilkanPesan())  <- ini langsung menjalankannya

tombol.removeEventListener('click', tampilkanPesan)
// menghapus listener, hanya bisa jika handler-nya fungsi bernama
```

Satu elemen boleh punya banyak listener, bahkan untuk event yang sama.

> **Catatan:** Kamu mungkin menemukan `onclick="..."` yang ditulis langsung di HTML. Cara itu bekerja, tetapi mencampur HTML dengan JavaScript dan tidak disarankan. Gunakan `addEventListener`.

> **Ringkasan:** `elemen.addEventListener('click', handler)` menjalankan handler setiap kali event terjadi. Tulis nama fungsi tanpa kurung.

---

## 3. Jenis Event yang Sering Dipakai

| Event | Terjadi saat | Pada elemen |
|---|---|---|
| `click` | Elemen diklik | Hampir semua |
| `dblclick` | Elemen diklik dua kali | Hampir semua |
| `mouseover` dan `mouseout` | Kursor masuk dan keluar | Hampir semua |
| `input` | Isi kolom berubah (setiap ketikan) | `input`, `textarea` |
| `change` | Nilai berubah dan fokus pindah, atau pilihan berubah | `input`, `select` |
| `submit` | Formulir dikirim | `form` |
| `keydown` dan `keyup` | Tombol papan ketik ditekan dan dilepas | Elemen fokus, atau `document` |
| `focus` dan `blur` | Elemen mendapat dan kehilangan fokus | Isian |
| `DOMContentLoaded` | HTML selesai dibaca | `document` |
| `scroll` | Halaman digulir | `window` |
| `resize` | Ukuran jendela berubah | `window` |

### 3.a Contoh: input

```html
<input type="text" id="nama" placeholder="Ketik namamu">
<p id="sapaan"></p>
```

```js
const nama = document.querySelector('#nama')
const sapaan = document.querySelector('#sapaan')

nama.addEventListener('input', () => {
  sapaan.textContent = 'Halo, ' + nama.value
  // teks sapaan berubah setiap kali ada ketikan
})
```

### 3.b Contoh: keydown

```js
document.addEventListener('keydown', (event) => {
  console.log('Tombol ditekan:', event.key)
  if (event.key === 'Escape') {
    console.log('Escape ditekan')
  }
})
```

> **Ringkasan:** Event yang paling sering: `click`, `input`, `change`, `submit`, `keydown`, dan `DOMContentLoaded`.

---

## 4. Object Event

Handler otomatis menerima satu argumen: **object event** yang berisi informasi tentang kejadian tersebut.

```js
tombol.addEventListener('click', (event) => {
  console.log(event.type)
  // click, jenis event
  console.log(event.target)
  // elemen yang sebenarnya diklik
})
```

Properti yang sering dipakai:

| Properti | Isi |
|---|---|
| `event.type` | Jenis event (`click`, `input`, ...) |
| `event.target` | Elemen yang memicu event |
| `event.key` | Tombol yang ditekan (pada event papan ketik) |
| `event.clientX` dan `event.clientY` | Posisi kursor (pada event mouse) |

Untuk event `input`, nilai terbaru bisa dibaca dari `event.target.value`.

```js
nama.addEventListener('input', (event) => {
  console.log(event.target.value)
  // sama dengan nama.value
})
```

---

## 5. Formulir dan preventDefault

Saat formulir dikirim, browser secara bawaan **memuat ulang halaman** (atau berpindah ke alamat `action`). Biasanya kita ingin mengolah isian lewat JavaScript tanpa memuat ulang. Untuk itu pakai `event.preventDefault()`, yang membatalkan perilaku bawaan.

```html
<form id="form">
  <label for="nama">Nama</label>
  <input type="text" id="nama" required>
  <button type="submit">Kirim</button>
</form>
<p id="hasil"></p>
```

```js
const form = document.querySelector('#form')
const nama = document.querySelector('#nama')
const hasil = document.querySelector('#hasil')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  // mencegah halaman dimuat ulang
  hasil.textContent = 'Halo, ' + nama.value.trim() + '!'
  nama.value = ''
  // mengosongkan kolom setelah dikirim
})
```

Perhatikan bahwa listener dipasang pada **`form` dengan event `submit`**, bukan pada tombol dengan `click`. Dengan begitu, formulir juga bekerja saat pengguna menekan Enter, dan validasi HTML (`required`) tetap berjalan.

`preventDefault()` juga berguna pada link: `a` yang diklik secara bawaan berpindah halaman.

> **Ringkasan:** Pasang listener `submit` pada form dan panggil `event.preventDefault()` agar halaman tidak dimuat ulang.

---

## 6. Bubbling

Event tidak hanya terjadi pada elemen yang diklik, tetapi **naik** ke elemen induknya, lalu ke induknya lagi, sampai ke atas halaman. Perilaku ini disebut **bubbling** (menggelembung).

```html
<div id="luar">
  <button id="dalam">Klik</button>
</div>
```

```js
document.querySelector('#luar').addEventListener('click', () => {
  console.log('div luar menerima klik')
})
document.querySelector('#dalam').addEventListener('click', () => {
  console.log('tombol diklik')
})
// klik tombol: muncul "tombol diklik", lalu "div luar menerima klik"
```

Jika ingin menghentikan kenaikan itu, pakai `event.stopPropagation()`.

```js
document.querySelector('#dalam').addEventListener('click', (event) => {
  event.stopPropagation()
  // event berhenti di sini dan tidak naik ke div luar
})
```

Gunakan dengan hemat, karena menghentikan event bisa mengganggu bagian lain yang bergantung padanya.

---

## 7. Event Delegation

Bayangkan daftar berisi 100 item yang masing-masing butuh listener klik. Memasang 100 listener boros, dan item yang ditambahkan belakangan tidak akan punya listener.

**Event delegation** memanfaatkan bubbling: pasang **satu listener pada induk**, lalu periksa `event.target` untuk tahu item mana yang diklik.

```html
<ul id="daftar">
  <li>Apel</li>
  <li>Jeruk</li>
  <li>Mangga</li>
</ul>
```

```js
const daftar = document.querySelector('#daftar')

daftar.addEventListener('click', (event) => {
  const item = event.target.closest('li')
  // closest mencari li terdekat dari elemen yang diklik
  if (!item) return
  // klik di luar li diabaikan
  item.classList.toggle('selesai')
  console.log('Diklik:', item.textContent)
})
```

Keuntungannya:

- Hanya satu listener untuk seluruh daftar.
- Item yang ditambahkan nanti lewat JavaScript otomatis ikut bekerja.

> **Ringkasan:** Bubbling membuat event naik ke induk. Event delegation memakai satu listener di induk dan `event.target.closest()` untuk mengetahui item yang diklik.

---

## 8. Menunggu Halaman Siap

Jika script dimuat dengan `defer`, DOM sudah siap saat kode berjalan, sehingga biasanya tidak perlu menunggu apa pun. Jika tidak memakai `defer`, bungkus kode dengan event `DOMContentLoaded`.

```js
document.addEventListener('DOMContentLoaded', () => {
  // kode di sini baru berjalan setelah seluruh HTML selesai dibaca
})
```

---

## 9. Hubungan dengan Vue

Di bab Vue, kamu akan menulis `@click="..."` langsung di template untuk merespons klik, dan `v-model` untuk menghubungkan isian dengan data. Di balik layar, Vue memakai mekanisme yang sama persis dengan yang baru kamu pelajari, hanya saja lebih ringkas. Memahami `addEventListener` membantu kamu mengerti apa yang sebenarnya dilakukan Vue.

---

## 10. Latihan Singkat

1. Buat tombol yang mengubah warna latar `body` saat diklik.
2. Buat penghitung: tombol tambah dan kurang yang mengubah angka di halaman.
3. Buat isian teks yang menampilkan jumlah karakternya secara langsung saat mengetik.
4. Buat formulir yang menampilkan sapaan tanpa memuat ulang halaman memakai `preventDefault`.
5. Buat daftar `li` yang saat diklik akan dicoret, dengan event delegation.
6. Tampilkan nama tombol yang ditekan memakai `keydown` pada `document`.

---

## Rangkuman

- Event adalah kejadian di halaman, dan `addEventListener('jenis', handler)` menjalankan handler saat kejadian terjadi.
- Event yang paling sering: `click`, `input`, `change`, `submit`, `keydown`, dan `DOMContentLoaded`.
- Handler menerima object event yang berisi `type`, `target`, `key`, dan sejenisnya.
- Untuk formulir, pasang listener `submit` pada form dan panggil `event.preventDefault()`.
- Event naik ke induknya (bubbling), dan event delegation memanfaatkannya dengan satu listener di induk.
- `@click` dan `v-model` di Vue memakai mekanisme yang sama dengan penulisan yang lebih ringkas.
