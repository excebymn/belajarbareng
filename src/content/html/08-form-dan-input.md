---
jenis: murid
bab: html
urutan: 8
judul: "Form dan Input"
deskripsi: "Membuat formulir dengan form, label, berbagai jenis input, textarea, select, button, validasi bawaan, dan mencoba mengirimnya tanpa backend."
---

# Form dan Input

Pada materi ini kamu akan mempelajari: cara membuat formulir dengan `form`, menghubungkan `label` dengan `input`, berbagai jenis `input`, `textarea`, `select`, `button`, validasi bawaan HTML, serta cara mencoba mengirim formulir tanpa backend.

Sebelum mulai, pastikan kamu sudah memahami: atribut dari materi Pengenalan HTML, serta konsep request dan response dari bab Web.

---

## 1. Apa itu Form

**Form** (formulir) adalah cara halaman web menerima data dari pengguna, seperti login, pendaftaran, pencarian, atau kolom komentar.

Sebuah formulir terdiri dari:

- elemen `<form>` sebagai pembungkus,
- elemen isian seperti `input`, `textarea`, dan `select`,
- `label` yang menjelaskan tiap isian,
- `button` untuk mengirim.

Saat formulir dikirim, browser mengirim request berisi data isian ke alamat tertentu. Pembahasan menerima data di sisi server ada di bab backend, sedangkan mengolahnya di browser ada di bab JS.

> **Ringkasan:** Form menerima data dari pengguna dan mengirimnya lewat request.

---

## 2. Form, Label, dan Input Dasar

#### Cara menulis

```html
<form action="/kirim" method="get">
  <!-- form membungkus seluruh isian; action alamat tujuan, method cara mengirim -->
  <label for="nama">Nama</label>
  <!-- label menjelaskan isian, for berisi id dari input yang dihubungkan -->
  <input type="text" id="nama" name="nama">
  <!-- input isian teks; id untuk menghubungkan label, name untuk nama data -->
  <button type="submit">Kirim</button>
  <!-- tombol untuk mengirim formulir -->
</form>
```

### 2.a Label

`<label>` menjelaskan fungsi sebuah isian. Atribut `for` berisi `id` dari `input` yang dihubungkannya. Setelah dihubungkan:

- Mengklik teks label akan memfokuskan isiannya, sehingga mudah diklik di ponsel.
- Pembaca layar membacakan label saat isian dipilih.

```html
<label for="email">Email</label>
<input type="email" id="email" name="email">
<!-- for="email" cocok dengan id="email" -->
```

Cara lain: bungkus `input` di dalam `label`, tanpa `for` dan `id`.

```html
<label>
  Email
  <input type="email" name="email">
</label>
```

### 2.b id dan name

Dua atribut ini sering tertukar.

| Atribut | Fungsi |
|---|---|
| `id` | Nama unik untuk elemen di halaman. Dipakai untuk menghubungkan `label` dan untuk CSS atau JavaScript. |
| `name` | Nama data saat formulir dikirim. Tanpa `name`, isian **tidak ikut terkirim**. |

> **Ringkasan:** `label` dengan `for` dihubungkan ke `id` pada input. `name` menentukan nama data yang dikirim.

---

## 3. Jenis-jenis input

Atribut `type` pada `input` menentukan jenis isian.

| type | Fungsi |
|---|---|
| `text` | Teks satu baris |
| `email` | Alamat email (diperiksa formatnya) |
| `password` | Kata sandi, huruf disamarkan |
| `number` | Angka |
| `tel` | Nomor telepon |
| `url` | Alamat situs |
| `search` | Kolom pencarian |
| `date` | Memilih tanggal |
| `time` | Memilih jam |
| `color` | Memilih warna |
| `range` | Penggeser nilai |
| `file` | Memilih file dari perangkat |
| `checkbox` | Kotak centang |
| `radio` | Pilihan tunggal dari beberapa pilihan |
| `hidden` | Data tersembunyi yang ikut terkirim |

Memilih `type` yang tepat penting terutama di ponsel, karena papan ketik yang muncul menyesuaikan. Misalnya `type="email"` menampilkan papan ketik dengan tombol `@`, dan `type="number"` menampilkan papan ketik angka.

### 3.a Checkbox

Checkbox dipakai bila pengguna boleh memilih **nol, satu, atau lebih** pilihan.

```html
<p>Hobi:</p>
<label><input type="checkbox" name="hobi" value="ngoding"> Ngoding</label>
<!-- value adalah nilai yang dikirim bila kotak dicentang -->
<label><input type="checkbox" name="hobi" value="musik"> Musik</label>
<label><input type="checkbox" name="hobi" value="olahraga" checked> Olahraga</label>
<!-- checked membuat kotak tercentang sejak awal -->
```

### 3.b Radio

Radio dipakai bila pengguna harus memilih **tepat satu** dari beberapa pilihan. Pilihan yang saling terkait harus punya **`name` yang sama**, itulah yang membuat hanya satu yang bisa terpilih.

```html
<p>Jenjang:</p>
<label><input type="radio" name="jenjang" value="smp"> SMP</label>
<!-- semua radio dalam satu kelompok memakai name yang sama -->
<label><input type="radio" name="jenjang" value="sma" checked> SMA</label>
<label><input type="radio" name="jenjang" value="kuliah"> Kuliah</label>
```

> **Ringkasan:** `type` menentukan jenis input. Checkbox untuk pilihan banyak, radio untuk satu pilihan dengan `name` yang sama.

---

## 4. textarea, select, dan button

### 4.a textarea

`<textarea>` adalah isian teks banyak baris, cocok untuk komentar atau pesan. Berbeda dari `input`, elemen ini punya tag penutup.

```html
<label for="pesan">Pesan</label>
<textarea id="pesan" name="pesan" rows="4" cols="40"></textarea>
<!-- rows dan cols mengatur ukuran awal kolom isian -->
```

### 4.b select

`<select>` membuat menu pilihan dropdown. Tiap pilihan ditulis dengan `<option>`.

```html
<label for="kota">Kota</label>
<select id="kota" name="kota">
  <option value="">-- Pilih kota --</option>
  <!-- option pertama sebagai petunjuk, value kosong -->
  <option value="surabaya">Surabaya</option>
  <!-- value dikirim ke server, teks di dalam option tampil di layar -->
  <option value="malang" selected>Malang</option>
  <!-- selected menjadikan pilihan ini terpilih sejak awal -->
  <option value="jakarta">Jakarta</option>
</select>
```

### 4.c button

`<button>` membuat tombol. Atribut `type` menentukan perilakunya.

| type | Fungsi |
|---|---|
| `submit` | Mengirim formulir (bawaan di dalam `form`) |
| `reset` | Mengosongkan semua isian |
| `button` | Tidak melakukan apa pun, hanya tombol biasa untuk dihubungkan ke JavaScript |

```html
<button type="submit">Kirim</button>
<button type="reset">Kosongkan</button>
<button type="button">Tombol biasa</button>
```

> **Catatan:** Tombol di dalam `form` tanpa `type` dianggap `submit`. Selalu tulis `type` secara eksplisit agar tidak mengirim formulir tanpa sengaja.

> **Ringkasan:** `textarea` untuk teks panjang, `select` dengan `option` untuk dropdown, dan `button` dengan `type` yang jelas.

---

## 5. Mengelompokkan Isian

`<fieldset>` mengelompokkan isian yang berhubungan, dan `<legend>` memberi judul kelompoknya.

```html
<fieldset>
  <legend>Data Diri</legend>
  <!-- legend adalah judul kelompok -->
  <label for="nama2">Nama</label>
  <input type="text" id="nama2" name="nama">
</fieldset>
```

Cocok untuk formulir panjang, dan sangat membantu untuk kelompok radio atau checkbox, karena `legend` menjelaskan pertanyaan yang dijawab oleh pilihannya.

---

## 6. Atribut Bantu pada Input

| Atribut | Fungsi | Contoh |
|---|---|---|
| `placeholder` | Teks petunjuk di dalam isian kosong | `placeholder="contoh@email.com"` |
| `value` | Nilai awal isian | `value="Budi"` |
| `required` | Isian wajib diisi | `required` |
| `disabled` | Isian tidak bisa diubah dan tidak terkirim | `disabled` |
| `readonly` | Isian tidak bisa diubah tetapi tetap terkirim | `readonly` |
| `autofocus` | Isian langsung aktif saat halaman dibuka | `autofocus` |

```html
<input type="email" name="email" placeholder="contoh@email.com" required>
<!-- placeholder sebagai petunjuk, required membuat isian wajib -->
```

> **Catatan:** `placeholder` bukan pengganti `label`. Teks placeholder menghilang saat mengetik dan kurang ramah bagi pembaca layar. Tetap pakai `label`.

---

## 7. Validasi Bawaan

HTML menyediakan validasi sederhana tanpa JavaScript. Browser memeriksa isian sebelum formulir dikirim, dan menampilkan pesan bila ada yang salah.

| Atribut | Fungsi | Contoh |
|---|---|---|
| `required` | Tidak boleh kosong | `required` |
| `minlength` dan `maxlength` | Batas panjang teks | `minlength="8" maxlength="20"` |
| `min` dan `max` | Batas nilai angka atau tanggal | `min="1" max="100"` |
| `pattern` | Harus cocok dengan pola tertentu | `pattern="[0-9]{4}"` |
| `type="email"` dan `type="url"` | Format harus sesuai | |

```html
<label for="umur">Umur (1 sampai 100)</label>
<input type="number" id="umur" name="umur" min="1" max="100" required>
<!-- browser menolak nilai di luar rentang dan isian kosong -->
<label for="sandi">Kata sandi (minimal 8 karakter)</label>
<input type="password" id="sandi" name="sandi" minlength="8" required>
```

> **Catatan:** Validasi di browser hanya memudahkan pengguna dan **tidak bisa dipercaya untuk keamanan**, karena siapa pun bisa mengubahnya lewat DevTools. Validasi sebenarnya tetap harus dilakukan di backend. Hal ini dibahas di bab backend.

> **Ringkasan:** `required`, `minlength`, `maxlength`, `min`, `max`, dan `pattern` memeriksa isian sebelum dikirim, tetapi bukan pengganti validasi di server.

---

## 8. Mencoba Mengirim Formulir

Kamu bisa melihat data formulir terkirim tanpa membuat backend, dengan memakai `method="get"`.

#### Langkah-langkah

1. Buat formulir berikut dan simpan sebagai `form.html`.

```html
<form action="" method="get">
  <!-- action kosong: kirim ke halaman ini sendiri; method get: data ditaruh di URL -->
  <label for="nama">Nama</label>
  <input type="text" id="nama" name="nama">
  <label for="kota">Kota</label>
  <input type="text" id="kota" name="kota">
  <button type="submit">Kirim</button>
</form>
```

2. Buka di browser, isi, lalu klik **Kirim**.
3. Perhatikan alamat di browser. Datamu ditempel sebagai query string, kurang lebih seperti ini.

```text
form.html?nama=Budi&kota=Surabaya
```

Pola `name=nilai` dipisahkan `&` adalah query string, yang dibahas di bab Web. Itu sebabnya atribut `name` wajib ada.

### 8.a GET dan POST

| | `method="get"` | `method="post"` |
|---|---|---|
| Data dikirim lewat | URL (query string) | Isi request (tidak terlihat di URL) |
| Cocok untuk | Pencarian, filter | Login, pendaftaran, data sensitif |
| Bisa di-bookmark | Ya | Tidak |

Untuk `method="post"`, formulir butuh backend yang menerima data tersebut. Karena itu, mencobanya baru bisa dilakukan setelah mempelajari bab backend.

> **Ringkasan:** `method="get"` menaruh data di URL sehingga mudah dicoba tanpa backend. `method="post"` dipakai untuk data sensitif dan butuh backend.

---

## 9. Latihan Singkat

Buat formulir pendaftaran dengan isian berikut.

1. Nama (teks, wajib).
2. Email (wajib).
3. Kata sandi (minimal 8 karakter).
4. Jenjang pendidikan (radio dengan tiga pilihan).
5. Minat (checkbox dengan tiga pilihan).
6. Kota (select).
7. Pesan (textarea).
8. Tombol Kirim dan tombol Kosongkan.

Hubungkan semua isian dengan `label`, kelompokkan dengan `fieldset`, lalu kirim dengan `method="get"` dan amati query string-nya.

---

## Rangkuman

- `form` membungkus isian, dan `button type="submit"` mengirimnya sebagai request.
- `label for` dihubungkan dengan `id` pada input, dan `name` menentukan nama data yang dikirim.
- `type` pada `input` menentukan jenis isian. Checkbox untuk pilihan banyak, radio untuk satu pilihan dengan `name` yang sama.
- `textarea` untuk teks panjang, `select` dengan `option` untuk dropdown, dan `fieldset` dengan `legend` mengelompokkan isian.
- `required`, `minlength`, `maxlength`, `min`, `max`, dan `pattern` adalah validasi bawaan, yang tidak menggantikan validasi di backend.
- `method="get"` menaruh data di URL, sedangkan `method="post"` mengirim data di isi request dan butuh backend.
