---
jenis: murid
bab: git
urutan: 2
judul: "Repository Pertama: init, add, commit, dan log"
deskripsi: "Membuat repository, memantau perubahan dengan status, menyimpan riwayat dengan add dan commit, menulis pesan commit yang baik, serta membaca riwayat dengan log dan diff."
---

# Repository Pertama: init, add, commit, dan log

Pada materi ini kamu akan mempelajari: cara membuat repository dengan `git init`, memeriksa keadaan dengan `git status`, menyimpan perubahan dengan `git add` dan `git commit`, menulis pesan commit yang baik, serta membaca riwayat dengan `git log` dan `git diff`.

Sebelum mulai, pastikan kamu sudah memahami: konsep tiga area Git serta konfigurasi awal dari materi sebelumnya.

---

## 1. Membuat Repository

**Repository** (disingkat *repo*) adalah folder project yang riwayatnya dicatat oleh Git.

#### Cara menulis

```text
mkdir latihan-git
# membuat folder baru
cd latihan-git
# masuk ke folder tersebut
git init
# mengubah folder ini menjadi repository Git
```

Hasilnya: `Initialized empty Git repository in .../latihan-git/.git/`.

`git init` membuat folder tersembunyi bernama `.git` di dalam project. Di sanalah Git menyimpan seluruh riwayat. **Jangan mengubah atau menghapus folder `.git`**, karena itu berarti kehilangan seluruh riwayat.

Kamu hanya perlu menjalankan `git init` **sekali** per project.

> **Ringkasan:** `git init` mengubah folder biasa menjadi repository Git dengan membuat folder tersembunyi `.git`.

---

## 2. Memeriksa Keadaan dengan git status

`git status` adalah perintah yang paling sering dipakai. Ia memberi tahu keadaan project saat ini. Biasakan menjalankannya **sebelum dan sesudah** hampir setiap perintah Git lainnya.

```text
git status
```

Pada repository yang baru dibuat dan masih kosong:

```text
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```

Sekarang buat satu file.

```text
echo "# Latihan Git" > README.md
# membuat file README.md berisi satu baris judul
git status
```

```text
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md
```

`Untracked` berarti Git melihat file itu tetapi belum mencatatnya.

Status sebuah file bisa berupa salah satu dari berikut.

| Status | Artinya |
|---|---|
| Untracked | File baru yang belum dicatat Git |
| Modified | File yang sudah dicatat, tetapi isinya berubah dan belum disiapkan |
| Staged | Perubahan sudah dimasukkan ke staging area, siap di-commit |
| Committed | Perubahan sudah tersimpan di riwayat |

> **Ringkasan:** `git status` menunjukkan file mana yang baru, berubah, atau siap disimpan. Jalankan sesering mungkin.

---

## 3. Menyimpan Perubahan: add dan commit

Menyimpan perubahan ke riwayat dilakukan dalam **dua langkah**: pilih apa yang akan disimpan (`add`), lalu simpan (`commit`).

### 3.a git add

```text
git add README.md
# memasukkan README.md ke staging area
git status
```

```text
Changes to be committed:
        new file:   README.md
```

Beberapa bentuk `git add`:

| Perintah | Fungsi |
|---|---|
| `git add nama-file` | Menyiapkan satu file |
| `git add file1 file2` | Menyiapkan beberapa file |
| `git add .` | Menyiapkan **semua** perubahan di folder ini |

> **Catatan:** Hati-hati dengan `git add .`, karena ia menyiapkan **semuanya**, termasuk file yang tidak seharusnya dicatat (misalnya `node_modules` atau file berisi kata sandi). Di materi berikutnya kamu akan belajar `.gitignore` untuk mencegah hal itu.

### 3.b git commit

```text
git commit -m "Tambah README"
# menyimpan isi staging area sebagai satu commit, dengan pesan di dalam tanda kutip
```

Hasilnya kurang lebih:

```text
[main (root-commit) a1b2c3d] Tambah README
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
```

Bagian `a1b2c3d` adalah **hash**, yaitu pengenal unik commit itu. Yang kamu lihat hanyalah tujuh karakter pertama dari kode yang jauh lebih panjang.

Setelah commit, `git status` akan menampilkan `nothing to commit, working tree clean`, artinya semua perubahan sudah tersimpan.

### 3.c Siklus Kerja

Pola yang akan kamu ulangi ribuan kali:

```text
edit file  ->  git status  ->  git add  ->  git commit
```

Mari berlatih: ubah README, tambahkan file baru, lalu simpan.

```text
echo "Repository untuk belajar Git." >> README.md
# menambahkan satu baris di akhir README (>> artinya menambah, bukan menimpa)
echo "console.log('halo')" > script.js
git status
```

```text
Changes not staged for commit:
        modified:   README.md

Untracked files:
        script.js
```

```text
git add README.md script.js
git commit -m "Tambah deskripsi README dan script.js"
```

> **Ringkasan:** `git add` memilih perubahan untuk disimpan, dan `git commit -m "pesan"` menyimpannya sebagai satu catatan riwayat.

---

## 4. Menulis Pesan Commit yang Baik

Pesan commit adalah catatan untuk **dirimu di masa depan** dan rekan satu timmu. Pesan yang baik membuat riwayat bisa dibaca seperti cerita.

| Kurang baik | Lebih baik |
|---|---|
| `update` | `Perbaiki tombol hapus pada daftar tugas` |
| `fix` | `Perbaiki salah ketik pada judul halaman` |
| `asdf` | `Tambah validasi email di formulir kontak` |
| `perubahan banyak` | `Pisahkan fungsi simpan ke file penyimpanan.js` |

Panduan sederhana:

- **Singkat tetapi jelas**, idealnya di bawah sekitar 70 karakter.
- Mulai dengan **kata kerja**: Tambah, Perbaiki, Ubah, Hapus.
- Jelaskan **apa yang berubah dan kenapa**, bukan "aku mengedit file".
- Satu commit untuk **satu perubahan logis**. Jangan menumpuk perbaikan bug, fitur baru, dan rapi-rapi dalam satu commit.

Banyak tim memakai bahasa Inggris untuk pesan commit, tetapi di kursus ini bahasa Indonesia yang jelas sudah cukup. Yang penting konsisten.

> **Ringkasan:** Pesan commit yang baik singkat, diawali kata kerja, menjelaskan apa yang berubah, dan mewakili satu perubahan logis.

---

## 5. Membaca Riwayat

### 5.a git log

```text
git log
# menampilkan semua commit, dari yang terbaru
```

```text
commit 9f8e7d6c5b4a... (HEAD -> main)
Author: Nama Kamu <emailkamu@contoh.com>
Date:   Wed Oct 7 10:30:00 2026 +0700

    Tambah deskripsi README dan script.js

commit a1b2c3d4e5f6...
Author: Nama Kamu <emailkamu@contoh.com>
Date:   Wed Oct 7 10:20:00 2026 +0700

    Tambah README
```

Tampilan itu panjang. Bentuk ringkas yang lebih enak dibaca:

```text
git log --oneline
# satu baris per commit: hash singkat dan pesan
```

```text
9f8e7d6 Tambah deskripsi README dan script.js
a1b2c3d Tambah README
```

Tekan `q` untuk keluar jika tampilan log panjang dan berhenti di layar.

`HEAD` menandai **posisi kamu saat ini** di riwayat, biasanya commit terbaru di cabang yang sedang aktif.

### 5.b git diff

`git diff` menampilkan **apa yang berubah** secara baris demi baris.

```text
echo "baris tambahan" >> README.md
git diff
# melihat perubahan yang BELUM di-add
```

```text
--- a/README.md
+++ b/README.md
@@ -1,2 +1,3 @@
 # Latihan Git
 Repository untuk belajar Git.
+baris tambahan
```

Baris berawalan `+` adalah tambahan, dan berawalan `-` adalah yang dihapus.

| Perintah | Membandingkan |
|---|---|
| `git diff` | Folder kerja dengan staging area (perubahan yang belum di-add) |
| `git diff --staged` | Staging area dengan commit terakhir (apa yang akan di-commit) |

Kebiasaan baik: jalankan `git diff --staged` sebelum `git commit` untuk memastikan apa yang akan tersimpan.

### 5.c Melihat Satu Commit

```text
git show a1b2c3d
# menampilkan detail satu commit: pesan dan perubahannya
```

> **Ringkasan:** `git log --oneline` menampilkan riwayat ringkas, `git diff` menampilkan perubahan yang belum di-add, dan `git diff --staged` menampilkan apa yang akan di-commit.

---

## 6. Alur Kerja Sehari-hari

```text
1. Edit file seperti biasa
2. git status               -> lihat apa yang berubah
3. git diff                 -> periksa isi perubahan
4. git add <file>           -> pilih yang akan disimpan
5. git commit -m "pesan"    -> simpan ke riwayat
6. git log --oneline        -> (opsional) lihat riwayat
```

Commit **sering dan kecil**. Commit kecil mudah dipahami, mudah dibatalkan, dan membuat riwayat berguna. Hindari menumpuk pekerjaan seharian lalu men-commit sekaligus.

---

## 7. Latihan Singkat

1. Buat folder baru, jalankan `git init`, dan buat `README.md`.
2. Commit dengan pesan yang jelas, lalu jalankan `git status`.
3. Ubah README, jalankan `git diff`, lalu `git add` dan `git commit`.
4. Buat dua file baru, lalu commit **keduanya dalam dua commit terpisah**.
5. Jalankan `git log --oneline` dan baca riwayatmu.
6. Ubah satu file, jalankan `git add`, lalu bandingkan hasil `git diff` dan `git diff --staged`.

---

## Rangkuman

- `git init` membuat repository (folder `.git`), dan cukup dijalankan sekali per project.
- `git status` menunjukkan keadaan project, dan sebaiknya dijalankan sesering mungkin.
- `git add` memilih perubahan untuk disimpan, dan `git commit -m "pesan"` menyimpannya sebagai commit.
- Pesan commit yang baik singkat, diawali kata kerja, dan mewakili satu perubahan logis.
- `git log --oneline` menampilkan riwayat ringkas, dan `git diff` serta `git diff --staged` menampilkan perubahan.
- Commit sering dan kecil agar riwayat berguna.
