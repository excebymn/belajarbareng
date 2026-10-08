---
jenis: murid
bab: git
urutan: 3
judul: ".gitignore dan Membatalkan Perubahan"
deskripsi: "Mengecualikan file dari Git dengan .gitignore, serta membatalkan perubahan dengan restore, amend, revert, dan reset beserta risikonya."
---

# .gitignore dan Membatalkan Perubahan

Pada materi ini kamu akan mempelajari: file apa yang tidak boleh masuk ke Git dan cara mengecualikannya dengan `.gitignore`, serta cara membatalkan kesalahan dengan `git restore`, `git commit --amend`, `git revert`, dan `git reset`.

Sebelum mulai, pastikan kamu sudah memahami: `git add`, `git commit`, `git status`, dan `git log` dari materi sebelumnya.

---

## 1. File yang Tidak Perlu Dicatat

Tidak semua file di folder project layak masuk ke Git.

| Jenis file | Contoh | Alasan dikecualikan |
|---|---|---|
| Paket hasil unduhan | `node_modules/` | Sangat besar dan bisa diunduh ulang dengan `npm install` |
| Hasil build | `dist/`, `build/` | Dibuat otomatis dari kode sumber |
| File rahasia | `.env` | Berisi kata sandi dan kunci API, **berbahaya jika tersebar** |
| File sistem | `.DS_Store`, `Thumbs.db` | Dibuat otomatis oleh OS, tidak relevan |
| Log dan sementara | `*.log`, `tmp/` | Tidak dibutuhkan orang lain |
| Pengaturan pribadi editor | `.idea/`, sebagian `.vscode/` | Berbeda tiap orang |

Prinsipnya: **simpan di Git hanya yang kamu tulis sendiri dan yang tidak bisa dibuat ulang.** Semua yang bisa dihasilkan otomatis, atau bersifat rahasia, jangan dimasukkan.

> **Peringatan:** File rahasia yang sudah terlanjur masuk Git **tetap ada di riwayat** walaupun kemudian dihapus. Jika kunci API atau kata sandi sempat ter-commit lalu diunggah ke GitHub, anggap kunci itu sudah bocor dan **segera ganti**. Mencegah jauh lebih mudah daripada memperbaiki.

> **Ringkasan:** Jangan masukkan paket unduhan, hasil build, file rahasia, dan file sementara ke Git.

---

## 2. .gitignore

**.gitignore** adalah file teks di folder project yang berisi daftar pola file yang harus diabaikan Git.

#### Cara menulis

Buat file bernama persis `.gitignore` (diawali titik, tanpa ekstensi) di folder utama project.

```text
# komentar diawali tanda pagar

node_modules/
# mengabaikan folder node_modules beserta isinya

dist/
build/
# mengabaikan folder hasil build

.env
# mengabaikan file .env

*.log
# mengabaikan semua file berekstensi .log

.DS_Store
Thumbs.db
# mengabaikan file sistem

.idea/
```

Aturan pola:

| Pola | Mengabaikan |
|---|---|
| `nama-file.txt` | File tertentu |
| `folder/` | Folder dan seluruh isinya |
| `*.log` | Semua file berakhiran `.log` |
| `!penting.log` | Pengecualian: file ini tetap dicatat meski cocok dengan pola lain |

Cara memakainya:

```text
echo "node_modules/" > .gitignore
mkdir node_modules
echo "isi" > node_modules/paket.txt
git status
```

Folder `node_modules` tidak muncul di daftar `Untracked files`, tetapi `.gitignore` itu sendiri muncul. Commit `.gitignore` agar semua orang yang memakai project ini ikut mengabaikan file yang sama.

```text
git add .gitignore
git commit -m "Tambah .gitignore"
```

### 2.a Membuat .gitignore Lebih Cepat

Kamu tidak perlu menulis daftar dari nol. Banyak framework (termasuk project Vue yang dibuat dengan `npm create vue@latest`) sudah menyertakan `.gitignore` yang pas. Situs `gitignore.io` dan template resmi GitHub juga menyediakan daftar siap pakai untuk berbagai bahasa.

### 2.b Jika File Sudah Terlanjur Dicatat

`.gitignore` hanya berlaku untuk file yang **belum** dicatat Git. Jika sebuah file sudah ter-commit, menambahkannya ke `.gitignore` tidak menghentikan pencatatannya. Hentikan dengan perintah berikut, yang menghapusnya dari catatan Git **tanpa menghapus file aslinya**.

```text
git rm --cached nama-file
# berhenti mencatat file itu, file di komputermu tetap ada
git rm -r --cached node_modules
# untuk folder, tambahkan -r
git commit -m "Berhenti mencatat node_modules"
```

> **Ringkasan:** `.gitignore` berisi pola file yang diabaikan Git. Commit-lah file ini, dan gunakan `git rm --cached` untuk file yang sudah terlanjur dicatat.

---

## 3. Membatalkan Perubahan

Semua orang membuat kesalahan. Git memberikan beberapa cara membatalkannya, tergantung **seberapa jauh** kesalahan itu sudah tersimpan.

| Situasi | Alat |
|---|---|
| Edit belum di-add, ingin dibuang | `git restore` |
| Sudah di-add, ingin dikeluarkan dari staging | `git restore --staged` |
| Commit terakhir salah pesan atau ketinggalan file | `git commit --amend` |
| Commit lama yang sudah dibagikan perlu dibatalkan | `git revert` |
| Commit lokal yang belum dibagikan ingin dihapus | `git reset` |

### 3.a Membuang Perubahan yang Belum Di-add

```text
git restore nama-file
# mengembalikan file ke keadaan commit terakhir
```

> **Peringatan:** Perintah ini **membuang perubahanmu secara permanen**. Perubahan yang belum di-commit tidak tercatat di Git, sehingga tidak bisa dikembalikan. Pastikan dulu dengan `git diff`.

### 3.b Mengeluarkan dari Staging

Salah `git add` pada file yang belum siap?

```text
git restore --staged nama-file
# mengeluarkan file dari staging area, isinya tetap utuh di folder kerja
```

### 3.c Memperbaiki Commit Terakhir dengan amend

Salah menulis pesan, atau lupa menyertakan satu file?

```text
git commit --amend -m "Pesan yang sudah diperbaiki"
# mengganti pesan commit terakhir
```

```text
git add file-yang-lupa.js
git commit --amend --no-edit
# menambahkan file ke commit terakhir tanpa mengubah pesannya
```

`amend` sebenarnya **membuat commit baru** yang menggantikan commit terakhir. Karena itu, **jangan lakukan** pada commit yang sudah di-push ke GitHub dan dipakai orang lain.

### 3.d Membatalkan Commit dengan revert

`git revert` membatalkan sebuah commit dengan cara **membuat commit baru yang membalikkan isinya**. Riwayat lama tetap utuh, sehingga aman dipakai pada commit yang sudah dibagikan.

```text
git log --oneline
# cari hash commit yang ingin dibatalkan
git revert a1b2c3d
# membuat commit baru yang membatalkan perubahan commit a1b2c3d
```

### 3.e Menghapus Commit dengan reset

`git reset` memindahkan posisi cabang ke commit sebelumnya, seolah commit setelahnya tidak pernah ada. Ada tiga mode.

| Perintah | Commit | Staging | File di folder |
|---|---|---|---|
| `git reset --soft HEAD~1` | Dihapus | Tetap (siap di-commit ulang) | Tetap |
| `git reset HEAD~1` (mixed, bawaan) | Dihapus | Dikosongkan | Tetap |
| `git reset --hard HEAD~1` | Dihapus | Dikosongkan | **Dihapus** |

`HEAD~1` berarti "satu commit sebelum posisi saat ini".

```text
git reset --soft HEAD~1
# membatalkan commit terakhir, tetapi semua perubahannya tetap siap di staging
```

> **Peringatan:** `git reset --hard` **membuang perubahan di folder kerja**, dan commit yang dihapus sulit dipulihkan. Jangan memakainya pada commit yang sudah di-push. Jika ragu, pilih `revert` (lebih aman) atau `--soft`.

Aturan praktis memilih:

- Belum pernah di-push: `amend`, `reset --soft`, atau `reset`.
- Sudah di-push atau dipakai orang lain: `revert`.

> **Ringkasan:** `restore` membuang edit yang belum di-add, `amend` memperbaiki commit terakhir, `revert` membatalkan commit dengan commit baru (aman untuk yang sudah dibagikan), dan `reset` menghapus commit lokal (hati-hati dengan `--hard`).

---

## 4. Menyelamatkan Diri dari Salah Langkah

Jika kamu terlanjur melakukan `reset --hard` atau kehilangan commit, Git menyimpan jejak sementara bernama **reflog**.

```text
git reflog
# daftar posisi HEAD sebelumnya, termasuk commit yang "hilang"
```

```text
a1b2c3d HEAD@{0}: reset: moving to HEAD~1
9f8e7d6 HEAD@{1}: commit: Tambah fitur login
```

Dari daftar itu, kamu bisa kembali ke commit yang hilang.

```text
git reset --hard 9f8e7d6
# kembali ke commit yang tadinya hilang
```

Reflog hanya menyelamatkan perubahan yang **sudah pernah di-commit**. Perubahan yang belum di-commit dan terbuang tidak bisa dikembalikan. Itulah alasan lain untuk sering melakukan commit.

---

## 5. Latihan Singkat

1. Buat `.gitignore` berisi `node_modules/`, `.env`, dan `*.log`.
2. Buat file `.env` dan `app.log`, lalu pastikan keduanya tidak muncul di `git status`.
3. Ubah satu file, lalu buang perubahannya dengan `git restore`.
4. Salah satu commit dengan pesan keliru, lalu perbaiki dengan `git commit --amend`.
5. Buat commit percobaan, lalu batalkan dengan `git reset --soft HEAD~1` dan lihat bahwa perubahannya masih ada.
6. Buat commit percobaan lagi dan batalkan dengan `git revert`, lalu amati riwayat di `git log --oneline`.

---

## Rangkuman

- Jangan masukkan paket unduhan, hasil build, file rahasia, dan file sementara ke Git. Catat pola-polanya di `.gitignore` dan commit file itu.
- File rahasia yang terlanjur masuk riwayat dianggap bocor. Segera ganti kuncinya.
- `git rm --cached` menghentikan pencatatan file yang sudah terlanjur dicatat tanpa menghapus file aslinya.
- `git restore` membuang perubahan yang belum di-add (permanen), dan `git restore --staged` mengeluarkan dari staging.
- `git commit --amend` memperbaiki commit terakhir, `git revert` membatalkan commit dengan commit baru (aman untuk yang sudah dibagikan), dan `git reset` menghapus commit lokal.
- `git reflog` membantu menyelamatkan commit yang tampak hilang.
