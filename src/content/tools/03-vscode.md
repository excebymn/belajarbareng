---
jenis: murid
bab: tools
urutan: 3
judul: "VS Code"
deskripsi: "Mengenal tampilan Visual Studio Code, membuka folder project, memakai terminal terintegrasi, memasang extension, dan shortcut penting."
---

# VS Code

Pada materi ini kamu akan mempelajari: cara memasang dan mengenal tampilan Visual Studio Code, cara membuka folder project, memakai terminal terintegrasi, memasang extension, serta shortcut yang paling berguna.

Sebelum mulai, pastikan kamu sudah memahami: konsep file dan folder, serta perintah terminal dasar.

---

## 1. Mengenal VS Code

### 1.a Apa itu VS Code

**Visual Studio Code (VS Code)** adalah editor kode gratis yang sangat populer untuk pengembangan web. Editor kode berbeda dari aplikasi pengolah kata: ia menampilkan kode dengan warna, memberi saran penulisan, dan menandai kesalahan.

#### Cara memasang

Unduh dari situs resmi `code.visualstudio.com`, lalu jalankan installer.

- **Windows:** jalankan installer dan ikuti langkahnya.
- **macOS:** unduh, lalu seret aplikasinya ke folder Applications. Bisa juga dengan `brew install --cask visual-studio-code`.
- **Linux:** unduh paket yang sesuai dengan distro-mu dari situs resmi, atau ikuti panduan pemasangan untuk distro tersebut.

> **Ringkasan:** VS Code adalah editor kode gratis yang diunduh dari `code.visualstudio.com`.

### 1.b Tampilan Utama

Saat dibuka, VS Code terdiri dari beberapa bagian.

| Bagian | Letak | Fungsi |
|---|---|---|
| Activity Bar | Kolom ikon paling kiri | Berpindah antar panel (Explorer, Search, Source Control, Run, Extensions) |
| Sidebar | Di samping Activity Bar | Menampilkan isi panel yang sedang dipilih, misalnya daftar file |
| Editor | Bagian tengah | Tempat menulis kode, bisa banyak tab |
| Panel | Bagian bawah | Menampilkan terminal, error, dan keluaran program |
| Status Bar | Garis paling bawah | Informasi file: bahasa, baris, dan kolom |

Panel yang paling sering dipakai adalah **Explorer** (daftar file project) dan **Extensions** (tambahan fitur).

> **Ringkasan:** Activity Bar untuk berpindah panel, Sidebar untuk daftar file, Editor untuk menulis, Panel untuk terminal.

### 1.c Membuka Folder Project

VS Code bekerja paling baik jika kamu membuka **folder**, bukan file satu per satu. Dengan membuka folder, semua file project tampil di Explorer.

#### Cara membuka

- Lewat menu: **File → Open Folder**, lalu pilih folder project.
- Lewat terminal:

```text
cd belajar-web
# masuk ke folder project
code .
# membuka folder saat ini (titik berarti folder ini) di VS Code
```

> **Catatan:** Perintah `code` hanya tersedia jika VS Code sudah terdaftar di sistem. Bila tidak berfungsi, gunakan menu **File → Open Folder**. Di macOS, buka Command Palette (`Cmd+Shift+P`), lalu cari *Shell Command: Install 'code' command in PATH*.

> **Ringkasan:** Buka folder project lewat **File → Open Folder** atau `code .` dari terminal.

---

## 2. Bekerja dengan File

### 2.a Membuat dan Menyimpan

- Klik ikon **New File** di Explorer, ketik nama file (contoh: `index.html`), lalu Enter.
- Klik ikon **New Folder** untuk membuat folder baru.
- Simpan file dengan `Ctrl+S` (`Cmd+S` di macOS).

Titik bulat di tab file berarti ada perubahan yang belum disimpan.

### 2.b Auto Save

Agar tidak lupa menyimpan, aktifkan menu **File → Auto Save**. Setelah aktif, perubahan tersimpan otomatis.

### 2.c Berpindah Cepat Antar File

Tekan `Ctrl+P` (`Cmd+P` di macOS), lalu ketik sebagian nama file. VS Code menampilkan daftar file yang cocok, tinggal pilih dan tekan Enter. Cara ini jauh lebih cepat daripada mencari file di Explorer.

> **Ringkasan:** Simpan dengan `Ctrl+S`, aktifkan Auto Save, dan pakai `Ctrl+P` untuk membuka file dengan cepat.

---

## 3. Terminal Terintegrasi

VS Code punya terminal sendiri di bagian bawah, sehingga kamu tidak perlu berpindah jendela.

#### Cara membuka

Tekan `` Ctrl+` `` (tombol di bawah Esc, di sebelah angka 1), atau pilih menu **Terminal → New Terminal**.

Terminal ini otomatis terbuka di folder project yang sedang dibuka. Kamu bisa langsung menjalankan perintah seperti `node -v` atau `npm run dev`.

Untuk menghentikan perintah yang sedang berjalan, tekan `Ctrl+C`.

> **Catatan:** Pengguna Windows dengan WSL dapat memasang extension **WSL**, lalu memilih *Connect to WSL* agar terminal di VS Code langsung berjalan di Linux.

> **Ringkasan:** `` Ctrl+` `` membuka terminal di dalam VS Code, langsung di folder project.

---

## 4. Extension

**Extension** adalah tambahan fitur untuk VS Code.

#### Cara memasang

1. Buka panel **Extensions** (ikon kotak di Activity Bar, atau `Ctrl+Shift+X`).
2. Ketik nama extension di kolom pencarian.
3. Klik **Install** pada hasil yang sesuai.

#### Extension yang disarankan

| Extension | Fungsi | Kapan dipakai |
|---|---|---|
| Live Server | Menjalankan file HTML dengan server lokal yang otomatis refresh | Belajar HTML, CSS, dan JavaScript |
| Prettier | Merapikan format kode otomatis | Semua bab |
| Vue - Official | Warna, saran kode, dan pengecekan error untuk file `.vue` | Bab Vue |

Cara memakai Live Server: klik kanan file `index.html` di Explorer, lalu pilih **Open with Live Server**.

> **Catatan:** Pilih extension dari pembuat yang tepat dan jumlah unduhan yang besar. Hindari memasang extension yang tidak dikenal.

> **Ringkasan:** Extension ditambahkan lewat panel Extensions. Mulailah dengan Live Server dan Prettier.

---

## 5. Shortcut Penting

| Fungsi | Windows dan Linux | macOS |
|---|---|---|
| Menyimpan | `Ctrl+S` | `Cmd+S` |
| Membuka file cepat | `Ctrl+P` | `Cmd+P` |
| Command Palette (cari semua perintah) | `Ctrl+Shift+P` | `Cmd+Shift+P` |
| Menampilkan atau menyembunyikan terminal | `` Ctrl+` `` | `` Cmd+` `` |
| Menampilkan atau menyembunyikan sidebar | `Ctrl+B` | `Cmd+B` |
| Mencari di file ini | `Ctrl+F` | `Cmd+F` |
| Mencari di seluruh project | `Ctrl+Shift+F` | `Cmd+Shift+F` |
| Menjadikan baris komentar atau sebaliknya | `Ctrl+/` | `Cmd+/` |
| Memindahkan baris ke atas atau bawah | `Alt+↑` atau `Alt+↓` | `Option+↑` atau `Option+↓` |
| Menggandakan baris | `Shift+Alt+↓` | `Shift+Option+↓` |

Jika lupa shortcut, buka Command Palette dan ketik nama fungsi yang kamu cari.

> **Ringkasan:** Hafalkan `Ctrl+S`, `Ctrl+P`, `Ctrl+/`, dan `` Ctrl+` `` terlebih dahulu. Sisanya bisa dicari lewat Command Palette.

---

## 6. Pengaturan Sederhana

Buka pengaturan lewat **File → Preferences → Settings** (di macOS: **Code → Settings → Settings**). Beberapa pengaturan yang berguna:

- **Format On Save:** merapikan kode setiap kali menyimpan (butuh extension Prettier terpasang dan dijadikan formatter bawaan).
- **Font Size:** mengatur ukuran huruf agar nyaman dibaca.
- **Word Wrap:** membuat baris panjang turun ke baris berikutnya, bukan melebar ke samping.

Ukuran tampilan juga bisa diperbesar atau diperkecil dengan `Ctrl` + `+` atau `-`.

> **Ringkasan:** Atur Format On Save, Font Size, dan Word Wrap agar nyaman bekerja lama.

---

## Rangkuman

- VS Code adalah editor kode gratis, dipakai dengan membuka folder project lewat **File → Open Folder** atau `code .`.
- Tampilan terdiri dari Activity Bar, Sidebar, Editor, Panel, dan Status Bar.
- Terminal terintegrasi dibuka dengan `` Ctrl+` `` dan langsung berada di folder project.
- Extension dipasang lewat panel Extensions. Live Server dan Prettier cocok dipasang lebih dulu.
- Shortcut `Ctrl+S`, `Ctrl+P`, `Ctrl+/`, dan `Ctrl+Shift+P` paling sering dipakai.
