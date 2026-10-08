---
jenis: murid
bab: web
urutan: 1
judul: "Cara Kerja Web"
deskripsi: "Memahami internet vs web, client dan server, browser, URL, DNS, request dan response, status code, dan cara melihatnya langsung di DevTools."
---

# Cara Kerja Web

Pada materi ini kamu akan mempelajari: perbedaan internet dan web, model client-server, peran browser, bagian-bagian URL, DNS, alur request dan response, status code, serta cara melihat semuanya langsung lewat DevTools.

Sebelum mulai, pastikan kamu sudah memahami: cara memakai browser untuk membuka sebuah situs.

---

## 1. Internet dan Web

**Internet** adalah jaringan global yang menghubungkan jutaan komputer di seluruh dunia. **Web** (World Wide Web) adalah kumpulan halaman dan sumber daya yang bisa diakses lewat internet menggunakan browser.

Keduanya sering dianggap sama, padahal berbeda. Internet adalah jalurnya, sedangkan web adalah salah satu layanan yang memakai jalur itu.

| | Internet | Web |
|---|---|---|
| Pengertian | Jaringan yang menghubungkan komputer | Kumpulan halaman yang diakses lewat internet |
| Contoh | Kabel, Wi-Fi, jaringan seluler | Situs berita, toko online, Wikipedia |
| Hubungan | Infrastruktur dasar | Salah satu layanan di atas internet |

> **Catatan:** Email dan game online juga memakai internet, tetapi bukan bagian dari web.

> **Ringkasan:** Internet adalah jaringan penghubung komputer. Web adalah kumpulan halaman yang berjalan di atasnya.

---

## 2. Client, Server, dan Browser

### 2.a Client dan Server

**Client** adalah pihak yang meminta data, sedangkan **server** adalah pihak yang menyimpan dan mengirim data. Pola ini disebut model **client-server**.

Komputer atau ponselmu yang sedang membuka sebuah situs berperan sebagai client. Komputer yang menyimpan situs tersebut berperan sebagai server. Server biasanya menyala terus supaya bisa melayani permintaan kapan saja.

Sebagai gambaran, client mirip pelanggan di restoran yang memesan makanan, dan server mirip dapur yang menyiapkan lalu mengirimkan pesanannya.

> **Ringkasan:** Client meminta, server melayani.

### 2.b Browser

**Browser** adalah program yang meminta halaman dari server lalu menampilkannya di layar. Contohnya Chrome, Firefox, Edge, dan Safari.

Browser mampu membaca tiga jenis kode utama, yaitu HTML, CSS, dan JavaScript. Karena itu, kode web tidak perlu dikompilasi seperti program Java atau C++. Browser langsung membaca dan menjalankannya.

| Kode | Peran |
|---|---|
| HTML | Struktur dan isi halaman |
| CSS | Tampilan |
| JavaScript | Perilaku dan interaksi |

Ketiganya dipelajari masing-masing di bab HTML, CSS, dan JS.

> **Ringkasan:** Browser adalah client yang meminta halaman, lalu membaca dan menampilkan HTML, CSS, dan JavaScript.

---

## 3. URL dan DNS

### 3.a Bagian-bagian URL

**URL** (Uniform Resource Locator) adalah alamat dari sebuah sumber daya di web, misalnya satu halaman atau satu gambar.

#### Cara menulis

```text
https://www.contoh.com:443/belajar/web.html?tema=gelap#bagian-2
```

URL di atas bisa dipecah menjadi beberapa bagian.

| Bagian | Contoh | Fungsi |
|---|---|---|
| Protokol | `https://` | Aturan komunikasi. `https` adalah versi yang aman (terenkripsi). |
| Domain | `www.contoh.com` | Nama server yang dituju |
| Port | `:443` | Pintu masuk di server. Biasanya tidak ditulis karena sudah otomatis. |
| Path | `/belajar/web.html` | Lokasi halaman di dalam server |
| Query string | `?tema=gelap` | Tambahan informasi untuk server, ditulis sebagai `nama=nilai` |
| Fragment | `#bagian-2` | Tujuan di dalam halaman, diproses oleh browser, tidak dikirim ke server |

Tidak semua URL punya seluruh bagian ini. Bagian yang wajib hanya protokol, domain, dan path (bisa hanya `/`).

Saat belajar membuat project di komputermu sendiri, kamu akan sering melihat alamat seperti `http://localhost:5173`. `localhost` berarti komputermu sendiri, dan `5173` adalah nomor port server yang sedang berjalan.

> **Ringkasan:** URL terdiri dari protokol, domain, port, path, query string, dan fragment. Alamat `localhost` menunjuk ke komputermu sendiri.

### 3.b DNS

Komputer sebenarnya mengenali server lewat alamat angka yang disebut **alamat IP**, misalnya `93.184.216.34`. Manusia lebih mudah mengingat nama seperti `contoh.com`.

**DNS** (Domain Name System) adalah layanan yang mengubah nama domain menjadi alamat IP. Fungsinya seperti buku telepon untuk internet.

> **Ringkasan:** DNS menerjemahkan nama domain menjadi alamat IP server.

---

## 4. Request dan Response

### 4.a Alur Lengkap

**Request** adalah permintaan dari browser ke server, dan **response** adalah balasan dari server ke browser. Setiap kali kamu membuka halaman, pasangan ini terjadi.

#### Alur kerja

1. Kamu mengetik URL di browser, lalu menekan Enter.
2. Browser mencari alamat IP server lewat DNS.
3. Browser mengirim request ke server.
4. Server mengirim response berisi isi halaman, biasanya berupa HTML.
5. Browser membaca HTML tersebut. Jika HTML meminta file lain (CSS, JavaScript, gambar), browser mengirim request baru untuk tiap file.
6. Setelah semua siap, browser menampilkan halaman.

Itu sebabnya satu halaman bisa menghasilkan puluhan request.

> **Ringkasan:** Browser mengirim request, server membalas dengan response. Satu halaman biasanya terdiri dari banyak request.

### 4.b Method

Setiap request punya **method** yang menyatakan maksudnya.

| Method | Maksud | Contoh |
|---|---|---|
| `GET` | Meminta data | Membuka halaman, memuat gambar |
| `POST` | Mengirim data baru ke server | Mengirim formulir login |

Ada method lain (seperti `PUT` dan `DELETE`) yang akan dibahas di bab API.

### 4.c Status Code

Setiap response membawa **status code**, yaitu angka yang menjelaskan hasil permintaan.

| Kode | Arti | Penjelasan |
|---|---|---|
| `200` | OK | Berhasil |
| `301` | Moved Permanently | Halaman sudah pindah alamat |
| `403` | Forbidden | Kamu tidak punya izin |
| `404` | Not Found | Halaman tidak ditemukan |
| `500` | Internal Server Error | Terjadi kesalahan di server |

Cara mengingat: kode `2xx` berarti berhasil, `3xx` berarti dialihkan, `4xx` berarti kesalahan di pihak client, dan `5xx` berarti kesalahan di pihak server.

> **Ringkasan:** Method menyatakan maksud request, dan status code menyatakan hasil response. `200` berhasil, `404` tidak ditemukan, `500` error di server.

---

## 5. Melihat Request di DevTools

Browser menyediakan **DevTools** untuk melihat apa yang sebenarnya terjadi di balik layar.

#### Langkah-langkah

1. Buka sebuah situs di browser.
2. Tekan `F12` (atau `Ctrl+Shift+I`, di macOS `Cmd+Option+I`) untuk membuka DevTools.
3. Pilih tab **Network**.
4. Muat ulang halaman dengan `F5`.
5. Klik salah satu baris pada daftar yang muncul.

Pada daftar tersebut kamu melihat setiap file yang diminta browser, lengkap dengan method, status code, dan ukurannya. Saat mengklik satu baris, tab **Headers** menampilkan alamat yang diminta dan status response.

Coba juga ketik alamat yang tidak ada di sebuah situs, lalu lihat status `404` muncul di tab Network.

> **Catatan:** Tab **Elements** di DevTools menampilkan HTML halaman yang sedang dibuka. Kamu akan sering memakainya di bab HTML dan CSS.

> **Ringkasan:** DevTools (`F12`) tab Network menampilkan semua request dan response dari halaman yang sedang dibuka.

---

## Rangkuman

- Internet adalah jaringan, web adalah layanan di atas internet.
- Client meminta dan server melayani. Browser adalah client yang membaca HTML, CSS, dan JavaScript.
- URL terdiri dari protokol, domain, port, path, query string, dan fragment. DNS mengubah domain menjadi alamat IP.
- Browser mengirim request, server membalas response. Satu halaman biasanya terdiri dari banyak request.
- Status code `2xx` berarti berhasil, `3xx` dialihkan, `4xx` salah di client, `5xx` salah di server.
- DevTools tab Network bisa dipakai untuk melihat semua request dan response.
