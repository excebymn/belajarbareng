---
jenis: murid
bab: os
urutan: 3
judul: "Windows dan macOS untuk Programmer"
deskripsi: "Menyiapkan Windows dengan WSL dan macOS dengan Homebrew agar nyaman dipakai programming, serta perbandingan ketiga OS."
---

# Windows dan macOS untuk Programmer

Pada materi ini kamu akan mempelajari: cara membuat Windows lebih nyaman untuk programming lewat WSL, cara menyiapkan macOS dengan Homebrew, serta perbandingan praktis antara Windows, macOS, dan Linux.

Sebelum mulai, pastikan kamu sudah memahami: tierlist OS dari materi Memilih OS untuk Programming.

---

## 1. Windows untuk Programming

Jika kamu memakai Windows, kamu tidak perlu langsung berpindah OS. Ada cara agar Windows tetap nyaman dipakai belajar.

### 1.a Perbedaan yang Sering Membingungkan

Berikut beberapa hal yang berbeda di Windows dan sering menimbulkan masalah bagi pemula:

| Hal | Windows | Linux dan macOS |
|---|---|---|
| Alamat folder | `C:\Users\Budi` | `/home/budi` atau `/Users/budi` |
| Terminal bawaan | PowerShell, Command Prompt | bash atau zsh |
| Huruf besar kecil di nama file | Dianggap sama (`Foto.jpg` = `foto.jpg`) | Dianggap berbeda |
| Akhir baris di file teks | CRLF | LF |

Perbedaan huruf besar kecil sering menjadi sumber kesalahan. Project yang berjalan di Windows bisa error di server Linux karena nama file tidak persis sama.

> **Ringkasan:** Windows berbeda dalam alamat folder, terminal, dan aturan nama file. Perbedaan ini sering menimbulkan error saat project dipindah ke server.

### 1.b WSL

**WSL** (Windows Subsystem for Linux) adalah fitur Windows yang menjalankan Linux langsung di dalam Windows, tanpa perlu dual boot atau virtual machine yang berat. Kamu mendapatkan terminal Linux sungguhan, lengkap dengan `apt`.

#### Cara memasang

1. Buka **Terminal** atau **PowerShell** sebagai administrator (klik kanan, lalu pilih *Run as administrator*).
2. Jalankan perintah berikut.

```text
wsl --install
```

3. Restart komputer bila diminta.
4. Setelah restart, jendela Ubuntu terbuka dan meminta kamu membuat **username** dan **kata sandi** Linux.

Setelah itu, kamu bisa membuka Ubuntu dari menu Start dan memakai perintah Linux seperti biasa.

#### Tips memakai WSL

- Simpan project di dalam folder Linux (contoh: `~/project`), bukan di `/mnt/c/...`. Akses file di dalam sistem Linux jauh lebih cepat.
- VS Code bisa terhubung ke WSL lewat extension **WSL**, sehingga kamu menulis kode di Windows tetapi menjalankannya di Linux.
- Di dalam WSL, ikuti panduan Linux (misalnya `sudo apt install git`).

> **Catatan:** WSL memerlukan Windows 10 versi terbaru atau Windows 11. Bila perintah tidak dikenali, perbarui Windows terlebih dahulu.

> **Ringkasan:** `wsl --install` memasang Linux di dalam Windows. Simpan project di folder Linux agar cepat.

### 1.c Alternatif Lain

- **Virtual machine** (contoh: VirtualBox): menjalankan Linux sebagai aplikasi dengan jendela sendiri.
- **Dual boot:** memasang Linux berdampingan dengan Windows, dipilih saat komputer menyala.
- **Git Bash:** terminal ringan yang ikut terpasang bersama Git for Windows. Perintahnya mirip Linux, tetapi tidak selengkap WSL.

> **Ringkasan:** WSL adalah pilihan paling praktis. Virtual machine dan dual boot adalah alternatif.

---

## 2. macOS untuk Programming

macOS berbasis Unix sehingga sebagian besar alat programming langsung bisa dipakai. Ada dua hal yang biasanya disiapkan di awal.

### 2.a Command Line Tools

Berisi alat dasar developer, seperti `git` dan compiler. Pasang lewat terminal.

#### Cara memasang

```text
xcode-select --install
```

Sebuah jendela akan muncul. Klik **Install** lalu tunggu sampai selesai.

### 2.b Homebrew

**Homebrew** adalah package manager untuk macOS. Fungsinya sama dengan `apt` di Ubuntu: memasang aplikasi lewat terminal.

#### Cara memasang

Buka situs resmi `brew.sh`, salin satu baris perintah pemasangan yang tertera di halaman utamanya, lalu tempel di Terminal dan tekan Enter. Ikuti petunjuk yang muncul di layar.

#### Cara memakai

```text
brew install git
brew install node
brew update
brew upgrade
```

- `brew install git` memasang Git.
- `brew install node` memasang Node.js.
- `brew update` memperbarui daftar paket.
- `brew upgrade` memperbarui paket yang sudah terpasang.

> **Catatan:** Salin perintah pemasangan langsung dari situs resminya, karena perintah itu bisa berubah. Jangan menyalin dari sumber lain yang tidak jelas.

> **Ringkasan:** Pasang Command Line Tools dan Homebrew terlebih dahulu. Setelah itu, alat lain bisa dipasang dengan `brew install`.

---

## 3. Perbandingan Praktis

| | Windows | macOS | Linux |
|---|---|---|---|
| Shell bawaan | PowerShell | zsh | bash atau zsh |
| Package manager | `winget` | Homebrew | `apt`, `dnf`, `pacman` |
| Unix-like | Tidak (kecuali lewat WSL) | Ya | Ya |
| Harga OS | Berbayar (biasanya sudah termasuk di laptop) | Termasuk di perangkat Apple | Gratis |
| Perangkat | Banyak pilihan | Hanya Apple | Banyak pilihan |
| Kemudahan awal | Mudah | Mudah | Perlu adaptasi |

Pada pembahasan kursus ini, perintah terminal ditulis dalam gaya Linux dan macOS. Pengguna Windows disarankan memakai WSL agar perintahnya persis sama.

> **Ringkasan:** Windows, macOS, dan Linux masing-masing punya kelebihan. Perintah di kursus ini mengikuti gaya Linux dan macOS.

---

## Rangkuman

- Windows berbeda dalam alamat folder, terminal, dan aturan nama file, sehingga project kadang berperilaku berbeda dibanding di server.
- `wsl --install` memasang Linux di dalam Windows, dan project sebaiknya disimpan di folder Linux.
- Di macOS, pasang Command Line Tools dan Homebrew lebih dulu, lalu pasang alat lain dengan `brew install`.
- Perintah terminal di kursus ini mengikuti gaya Linux dan macOS, jadi pengguna Windows sebaiknya memakai WSL.
