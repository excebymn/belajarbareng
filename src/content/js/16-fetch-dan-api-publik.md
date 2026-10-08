---
jenis: murid
bab: js
urutan: 16
judul: "Fetch: Mengambil Data dari API"
deskripsi: "Mengambil dan mengirim data ke server dengan fetch, memahami response dan status, menangani loading dan error, serta menampilkan data API publik di halaman."
---

# Fetch: Mengambil Data dari API

Pada materi ini kamu akan mempelajari: apa itu API secara singkat, cara mengambil data dengan `fetch`, membaca response dan status, menangani loading dan error, mengirim data dengan method `POST`, serta menampilkan data dari API publik di halaman.

Sebelum mulai, pastikan kamu sudah memahami: `async` dan `await` dari materi sebelumnya, JSON, serta DOM dan event.

---

## 1. Apa itu API

**API** (Application Programming Interface) adalah pintu yang disediakan sebuah layanan agar program lain bisa meminta atau mengirim data. Pada web, API biasanya berupa **alamat URL** yang jika diminta, membalas dengan data berformat **JSON** (bukan halaman HTML).

```text
Frontend (browser)  --request-->  API di server
Frontend (browser)  <--response-- (data JSON)
```

Contohnya, aplikasi cuaca meminta data ke API cuaca, atau toko online meminta daftar produk ke API produk. Inilah cara frontend dan backend bertukar data, yang dibahas lengkap di bab API. Di materi ini kita belajar sisi frontend-nya lebih dulu, memakai **API publik** yang bisa dicoba tanpa mendaftar.

API yang kita pakai adalah **JSONPlaceholder**, layanan data contoh gratis untuk latihan.

| Alamat | Mengembalikan |
|---|---|
| `https://jsonplaceholder.typicode.com/posts` | Daftar 100 artikel contoh |
| `https://jsonplaceholder.typicode.com/posts/1` | Satu artikel dengan id 1 |
| `https://jsonplaceholder.typicode.com/users` | Daftar 10 pengguna contoh |

Kamu bisa membuka alamat-alamat itu langsung di browser untuk melihat bentuk datanya.

> **Catatan:** Layanan pihak ketiga seperti ini bisa berubah atau berhenti kapan saja. Jika sebuah alamat tidak lagi berfungsi, cari API publik latihan lain dengan bentuk serupa. Konsepnya tetap sama.

> **Ringkasan:** API adalah alamat tempat program meminta dan mengirim data, biasanya dalam format JSON.

---

## 2. Mengambil Data dengan fetch

`fetch` mengirim request ke sebuah alamat dan mengembalikan **Promise** berisi response. Karena asinkron, kita memakainya dengan `async` dan `await`.

#### Cara menulis

```js
async function ambilArtikel() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  // mengirim request GET, menunggu response datang
  const data = await response.json()
  // membaca isi response sebagai JSON, juga asinkron sehingga perlu await
  console.log(data)
}

ambilArtikel()
```

Hasil di Console kurang lebih:

```js
{
  userId: 1,
  id: 1,
  title: '...',
  body: '...'
}
```

Ada **dua `await`**, karena dua hal asinkron: menunggu response tiba, lalu menunggu isinya selesai dibaca.

Method `response.json()` mengubah teks JSON menjadi object atau array JavaScript, sama seperti `JSON.parse`, tetapi bekerja pada response.

### 2.a Bagian-bagian Response

```js
const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

console.log(response.status)
// 200, kode status (dibahas di bab Web)
console.log(response.ok)
// true jika status 200 sampai 299
console.log(response.headers.get('content-type'))
// jenis isi, misalnya application/json
```

> **Ringkasan:** `await fetch(alamat)` mengirim request GET, dan `await response.json()` membaca isinya sebagai data JavaScript.

---

## 3. Menangani Error dengan Benar

Jebakan terbesar: **`fetch` tidak menganggap status 404 atau 500 sebagai error.** Promise-nya hanya gagal jika jaringan bermasalah (misalnya tidak ada internet). Jika server membalas `404`, `fetch` tetap dianggap berhasil.

```js
const response = await fetch('https://jsonplaceholder.typicode.com/posts/99999')
console.log(response.status)
// 404, tetapi tidak ada error yang dilempar
```

> **Catatan:** Beberapa potongan kode di materi ini memakai `await` langsung di luar fungsi `async` agar singkat. Itu hanya berjalan di **Console DevTools** atau di script bertipe `module`. Pada file script biasa, bungkus dulu di dalam fungsi `async`.

Karena itu, **selalu periksa `response.ok`**.

```js
async function ambilArtikel(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if (!response.ok) {
      throw new Error('Server membalas status ' + response.status)
      // melempar error sendiri agar ditangkap oleh catch di bawah
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.log('Gagal mengambil data:', error.message)
    return null
  }
}

console.log(await ambilArtikel(1))
// object artikel
console.log(await ambilArtikel(99999))
// null, setelah mencetak pesan kegagalan
```

Pola `try`, `response.ok`, `throw`, lalu `catch` ini akan kamu tulis berulang kali. Kuasai bentuknya.

> **Peringatan:** Jika `fetch` mengalami error CORS, Console menampilkan pesan berisi *CORS* atau *blocked by CORS policy*. Itu berarti server tidak mengizinkan halamanmu mengambil datanya dari domain berbeda. Pengaturan ini ada di sisi server, bukan di kodemu, dan akan dibahas di bab backend dan API.

> **Ringkasan:** `fetch` tidak gagal untuk status `404` atau `500`. Periksa `response.ok`, lempar error sendiri jika tidak ok, lalu tangkap dengan `try...catch`.

---

## 4. Menampilkan Data di Halaman

Sekarang kita gabungkan dengan DOM: ambil daftar artikel dari API, lalu tampilkan sebagai daftar.

```html
<h1>Artikel</h1>
<p id="status"></p>
<ul id="daftar"></ul>
<script src="script.js" defer></script>
```

```js
const status = document.querySelector('#status')
const daftar = document.querySelector('#daftar')

async function muatArtikel() {
  status.textContent = 'Memuat...'
  // memberi tahu pengguna bahwa data sedang diambil

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    // ?_limit=5 meminta hanya 5 data pertama

    if (!response.ok) {
      throw new Error('Status ' + response.status)
    }

    const artikel = await response.json()

    daftar.innerHTML = ''
    artikel.forEach(item => {
      const li = document.createElement('li')
      li.textContent = item.title
      daftar.append(li)
    })

    status.textContent = `Menampilkan ${artikel.length} artikel`
  } catch (error) {
    status.textContent = 'Gagal memuat data: ' + error.message
  }
}

muatArtikel()
```

Tiga keadaan yang selalu perlu kamu pikirkan saat mengambil data:

| Keadaan | Tampilan yang tepat |
|---|---|
| **Loading** | "Memuat...", agar pengguna tahu sesuatu sedang terjadi |
| **Berhasil** | Data ditampilkan |
| **Gagal** | Pesan error yang jelas, bukan layar kosong |

Aplikasi yang hanya memikirkan keadaan berhasil akan tampak rusak saat internet lambat atau server bermasalah.

> **Ringkasan:** Tampilkan keadaan loading, berhasil, dan gagal. Data dari `response.json()` diolah seperti array biasa, misalnya dengan `forEach` untuk membuat elemen.

---

## 5. Parameter di URL

Banyak API menerima filter lewat **query string**, yaitu bagian `?nama=nilai` di akhir URL (dibahas di bab Web).

```js
const userId = 1
const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
// hanya artikel milik pengguna dengan id 1
const response = await fetch(url)
const artikel = await response.json()
console.log(artikel.length)
// 10
```

Untuk membuat query string dengan aman (termasuk karakter khusus seperti spasi), pakai `URLSearchParams`.

```js
const parameter = new URLSearchParams({ userId: 1, _limit: 3 })
const url2 = `https://jsonplaceholder.typicode.com/posts?${parameter}`
console.log(url2)
// ...posts?userId=1&_limit=3
```

---

## 6. Mengirim Data dengan POST

Untuk mengirim data ke server (misalnya membuat artikel baru), `fetch` menerima argumen kedua berisi pengaturan request.

```js
async function buatArtikel() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    // jenis request: POST untuk mengirim data baru
    headers: {
      'Content-Type': 'application/json'
      // memberi tahu server bahwa isi yang dikirim berformat JSON
    },
    body: JSON.stringify({
      title: 'Belajar fetch',
      body: 'Ini artikel percobaan',
      userId: 1
    })
    // isi yang dikirim, harus berupa teks sehingga object diubah dengan JSON.stringify
  })

  const hasil = await response.json()
  console.log(hasil)
  // { title: 'Belajar fetch', body: '...', userId: 1, id: 101 }
}

buatArtikel()
```

Server membalas dengan data yang kamu kirim, ditambah `id` baru (101).

> **Catatan:** JSONPlaceholder hanya **berpura-pura** menyimpan data. Artikel barunya tidak benar-benar tersimpan, dan jika kamu mengambil daftar lagi, artikel itu tidak ada. Data sungguhan baru bisa disimpan jika kamu membuat backend sendiri, yang dipelajari di bab backend.

Method request yang umum:

| Method | Fungsi | Contoh |
|---|---|---|
| `GET` | Mengambil data (bawaan) | Mengambil daftar artikel |
| `POST` | Membuat data baru | Mengirim artikel baru |
| `PUT` atau `PATCH` | Mengubah data | Mengedit artikel |
| `DELETE` | Menghapus data | Menghapus artikel |

Method-method ini dibahas lengkap di bab API.

> **Ringkasan:** Untuk mengirim data, beri `fetch` argumen kedua berisi `method`, `headers`, dan `body` (diubah dengan `JSON.stringify`).

---

## 7. Latihan Singkat

1. Ambil satu artikel dari `/posts/1`, lalu tampilkan judul dan isinya di halaman.
2. Ambil daftar pengguna dari `/users`, lalu tampilkan nama dan email sebagai daftar.
3. Tambahkan tampilan "Memuat..." sebelum data tiba dan pesan error jika gagal.
4. Sengaja ubah alamat menjadi salah (misalnya `/postss`), lalu lihat penanganan error-mu bekerja.
5. Buat kolom pilihan `select` berisi id pengguna 1 sampai 10, lalu tampilkan artikel milik pengguna yang dipilih memakai parameter `userId`.
6. Kirim artikel baru dengan `POST` dan tampilkan `id` yang dikembalikan.

---

## Rangkuman

- API adalah alamat tempat program meminta atau mengirim data, umumnya dalam format JSON.
- `await fetch(alamat)` mengirim request, dan `await response.json()` membaca isinya sebagai data JavaScript.
- `fetch` tidak menganggap status `404` atau `500` sebagai error. Selalu periksa `response.ok`, lempar error sendiri bila tidak ok, lalu tangkap dengan `try...catch`.
- Selalu rancang tiga keadaan tampilan: loading, berhasil, dan gagal.
- Filter dikirim lewat query string, dan `URLSearchParams` membantu menyusunnya.
- Untuk mengirim data, beri `fetch` argumen kedua dengan `method`, `headers`, dan `body: JSON.stringify(...)`.
