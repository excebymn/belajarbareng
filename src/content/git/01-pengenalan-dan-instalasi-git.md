---
jenis: murid
bab: git
urutan: 1
judul: "Pengenalan dan Instalasi Git"
deskripsi: "Memahami fungsi version control, perbedaan Git dan GitHub, memasang Git di Windows, macOS, dan Linux, serta konfigurasi awal."
---

# Pengenalan dan Instalasi Git

Pada materi ini kamu akan mempelajari: masalah yang diselesaikan version control, apa itu Git, perbedaan Git dan GitHub, cara memasang Git di berbagai OS, serta konfigurasi awal yang wajib dilakukan.

Sebelum mulai, pastikan kamu sudah memahami: perintah terminal dasar dari bab Tools, serta sudah punya satu atau dua proyek kecil (misalnya proyek profil di bab HTML dan CSS) sebagai bahan latihan.

---

## 1. Masalah yang Diselesaikan Git

Pernahkah kamu membuat file dengan nama seperti ini?

```text
tugas.docx
tugas-revisi.docx
tugas-revisi-fix.docx
tugas-revisi-fix-final.docx
tugas-revisi-fix-final-beneran.docx
```

Cara ini membingungkan. Mana yang terbaru? Apa bedanya? Bagaimana jika kamu ingin kembali ke versi dua hari lalu? Dan bagaimana jika dua orang mengedit file yang sama?

**Version control** (kontrol versi) menyelesaikan masalah itu: ia **mencatat setiap perubahan** pada file project, siapa yang mengubah, kapan, dan kenapa. Kamu bisa:

- Kembali ke versi mana pun di masa lalu.
- Melihat apa yang berubah antara dua versi.
- Mencoba fitur baru tanpa merusak versi yang sudah jalan.
- Bekerja bersama orang lain tanpa saling menimpa pekerjaan.

> **Ringkasan:** Version control mencatat riwayat perubahan project sehingga kamu bisa kembali ke versi lama dan bekerja bersama dengan aman.

---

## 2. Git dan GitHub

Dua nama ini sering dianggap sama, padahal berbeda.

| | Git | GitHub |
|---|---|---|
| Jenis | Program version control | Layanan online untuk menyimpan project Git |
| Berjalan di | Komputermu | Internet (situs web) |
| Fungsi | Mencatat riwayat perubahan | Menyimpan cadangan, berbagi, dan berkolaborasi |
| Tanpa yang lain | Bisa dipakai sendiri (offline) | Tidak berguna tanpa Git |

Analogi sederhana: **Git** adalah program untuk menulis dan menyimpan catatan riwayat di laptopmu, sedangkan **GitHub** adalah tempat menaruh salinan catatan itu secara online.

Ada beberapa layanan serupa GitHub:

| Layanan | Catatan |
|---|---|
| GitHub | Paling populer |
| GitLab | Alternatif populer, sering dipakai perusahaan |
| Bitbucket | Alternatif lain |

Semuanya memakai Git yang sama, sehingga yang kamu pelajari berlaku di mana saja.

> **Ringkasan:** Git adalah program di komputermu, sedangkan GitHub (dan GitLab) adalah layanan online untuk menyimpan project Git.

---

## 3. Memasang Git

### 3.a Windows

1. Unduh installer dari situs resmi `git-scm.com`.
2. Jalankan installer. Pengaturan bawaan sudah cukup untuk pemula.
3. Setelah selesai, buka **Git Bash** atau PowerShell.

Jika kamu memakai **WSL** (disarankan di bab OS), pasang Git di dalam Linux-nya, seperti panduan Linux di bawah.

### 3.b macOS

```text
xcode-select --install
# memasang Command Line Tools yang sudah menyertakan Git
brew install git
# alternatif lewat Homebrew, biasanya versi lebih baru
```

### 3.c Linux

```text
sudo apt install git
# Debian, Ubuntu, Mint
sudo dnf install git
# Fedora
sudo pacman -S git
# Arch
```

### 3.d Memeriksa Pemasangan

```text
git --version
# menampilkan versi Git, contoh: git version 2.45.0
```

Jika muncul nomor versi, Git sudah terpasang. Angkanya bisa berbeda di komputermu. Jika muncul `command not found`, tutup lalu buka kembali terminal.

> **Ringkasan:** Pasang Git sesuai OS-mu, lalu cek dengan `git --version`.

---

## 4. Konfigurasi Awal

Sebelum memakai Git, beri tahu siapa kamu. Informasi ini ditempelkan pada setiap catatan perubahan yang kamu buat.

```text
git config --global user.name "Nama Kamu"
# nama yang akan tampil di riwayat
git config --global user.email "emailkamu@contoh.com"
# email yang akan tampil di riwayat
git config --global init.defaultBranch main
# nama cabang utama project baru menjadi main
```

Penjelasan:

- `--global` berarti pengaturan berlaku untuk **semua** project di komputermu. Cukup sekali.
- Pakai **email yang sama** dengan email akun GitHub-mu agar kontribusimu tercatat atas namamu.
- `main` adalah nama cabang utama yang umum dipakai sekarang. Versi lama memakai `master`.

Untuk melihat semua pengaturan:

```text
git config --list
# menampilkan seluruh pengaturan yang aktif
```

### 4.a Editor Bawaan (Opsional)

Git kadang membuka editor teks, misalnya saat menulis pesan commit panjang. Agar yang terbuka adalah VS Code:

```text
git config --global core.editor "code --wait"
# memakai VS Code sebagai editor Git
```

> **Catatan:** Jika Git membuka editor aneh bernama Vim dan kamu tidak bisa keluar, tekan `Esc`, ketik `:q!`, lalu Enter untuk keluar tanpa menyimpan.

> **Ringkasan:** Atur `user.name`, `user.email`, dan `init.defaultBranch` sekali saja dengan `git config --global`.

---

## 5. Gambaran Cara Kerja Git

Sebelum mempelajari perintahnya, pahami dulu **tiga area** di Git.

```text
Working directory  --git add-->  Staging area  --git commit-->  Repository
  (folder kerjamu)              (daftar siap simpan)           (riwayat tersimpan)
```

| Area | Penjelasan |
|---|---|
| Working directory | Folder project tempat kamu mengedit file seperti biasa |
| Staging area | "Keranjang" berisi perubahan yang akan dimasukkan ke catatan berikutnya |
| Repository | Tempat riwayat tersimpan permanen, tersusun dari catatan-catatan bernama **commit** |

Sebuah **commit** adalah satu "foto" dari seluruh project pada suatu saat, lengkap dengan pesan penjelasan. Riwayat project adalah rangkaian commit dari awal sampai sekarang.

Alur kerja sehari-hari:

1. Kamu mengedit file.
2. Kamu memilih perubahan mana yang akan disimpan (`git add`).
3. Kamu menyimpannya dengan pesan (`git commit`).

Perintah-perintah ini dipelajari di materi berikutnya.

---

## 6. Latihan Singkat

1. Pasang Git dan cek versinya dengan `git --version`.
2. Atur nama, email, dan `init.defaultBranch`.
3. Jalankan `git config --list` dan temukan pengaturan yang baru kamu buat.
4. Jelaskan dengan kata-katamu sendiri perbedaan Git dan GitHub.
5. Gambar sendiri alur tiga area (working directory, staging area, repository) tanpa melihat materi.

---

## Rangkuman

- Version control mencatat riwayat perubahan sehingga kamu bisa kembali ke versi lama dan bekerja bersama dengan aman.
- Git adalah program di komputermu, sedangkan GitHub, GitLab, dan Bitbucket adalah layanan online untuk menyimpan project Git.
- Pasang Git sesuai OS dan cek dengan `git --version`.
- Atur `user.name`, `user.email`, dan `init.defaultBranch` sekali dengan `git config --global`.
- Git punya tiga area: working directory, staging area, dan repository, dengan commit sebagai catatan riwayat.
