---
jenis: murid
bab: git
urutan: 6
judul: "Kolaborasi: Pull Request, Fork, dan Issue"
deskripsi: "Bekerja bersama di GitHub dengan feature branch workflow, pull request, review kode, fork, issue, dan menulis README yang baik."
---

# Kolaborasi: Pull Request, Fork, dan Issue

Pada materi ini kamu akan mempelajari: alur kerja tim dengan feature branch, cara membuat dan meninjau pull request, cara berkontribusi ke project orang lain lewat fork, cara memakai issue, serta cara menulis `README.md` yang baik.

Sebelum mulai, pastikan kamu sudah memahami: branch, merge, `push`, `pull`, dan `clone` dari materi sebelumnya, serta sudah punya akun GitHub.

---

## 1. Alur Kerja Tim

Saat beberapa orang mengerjakan project yang sama, kesepakatan alurnya sangat penting. Alur paling umum dan paling mudah dipelajari disebut **feature branch workflow**.

Prinsipnya:

1. Branch `main` selalu berisi versi yang **berfungsi**.
2. Setiap fitur atau perbaikan dikerjakan di **branch sendiri**.
3. Setelah selesai, branch itu diajukan lewat **pull request** untuk ditinjau.
4. Setelah disetujui, branch digabungkan ke `main`.

```text
main:      A ----- B ------------------ M1 ------------- M2
                    \                  /                /
fitur-a:             C --- D --------                  /
                                                      /
perbaiki-b:               E --- F -------------------
```

Aturan emas: **jangan langsung commit ke `main`** pada project tim. Selalu lewat branch dan pull request. Banyak project bahkan mengunci `main` agar hal itu tidak bisa dilakukan.

> **Ringkasan:** Setiap fitur dikerjakan di branch sendiri, lalu digabungkan ke `main` lewat pull request setelah ditinjau.

---

## 2. Pull Request

**Pull Request** (PR) adalah permintaan: "tolong gabungkan perubahan di branch-ku ke branch utama." Di GitLab, istilahnya **Merge Request**. PR bukan fitur Git, melainkan fitur GitHub yang menambahkan tempat untuk diskusi dan peninjauan sebelum menggabungkan.

### 2.a Membuat Pull Request

Langkah-langkahnya:

```text
git switch main
git pull
# pastikan main di komputermu sudah terbaru

git switch -c fitur-kontak
# buat branch untuk pekerjaanmu

# ...edit file...
git add .
git commit -m "Tambah halaman kontak"
git push -u origin fitur-kontak
# kirim branch ke GitHub
```

Setelah `push`, GitHub biasanya menampilkan tombol hijau **Compare & pull request**. Jika tidak muncul, buka tab **Pull requests**, lalu klik **New pull request**.

Isi formulirnya:

| Bagian | Isi |
|---|---|
| Base | Branch tujuan (biasanya `main`) |
| Compare | Branch-mu (`fitur-kontak`) |
| Judul | Ringkasan satu baris, seperti pesan commit |
| Deskripsi | Apa yang berubah, kenapa, dan cara mengujinya |

Deskripsi PR yang baik:

```text
## Yang berubah
- Menambah halaman kontak dengan formulir
- Menambah link Kontak di menu navigasi

## Cara menguji
1. Buka halaman kontak dari menu
2. Isi formulir dan klik Kirim

## Catatan
Validasi sisi server belum dibuat, akan dikerjakan di PR berikutnya.
```

### 2.b Meninjau (Review)

Rekan satu tim membuka PR, membaca perubahan di tab **Files changed**, lalu:

- Memberi komentar pada baris tertentu.
- Mengajukan perubahan (**Request changes**) jika ada yang perlu diperbaiki.
- Menyetujui (**Approve**) jika sudah baik.

Jika diminta memperbaiki sesuatu, kamu cukup **commit dan push lagi ke branch yang sama**. PR otomatis ikut diperbarui.

```text
# ...perbaiki sesuai komentar...
git add .
git commit -m "Perbaiki label formulir sesuai review"
git push
```

### 2.c Menggabungkan

Setelah disetujui, klik **Merge pull request** di GitHub. Lalu bersihkan:

```text
git switch main
git pull
# mengambil hasil penggabungan ke lokal
git branch -d fitur-kontak
# menghapus branch lokal yang sudah selesai
```

GitHub menyediakan tombol **Delete branch** untuk menghapus branch di remote setelah merge.

### 2.d Kebiasaan Baik dalam PR

- **Kecil dan fokus.** PR yang mengubah satu hal lebih mudah ditinjau daripada PR berisi 40 file.
- **Tinjau PR-mu sendiri dulu** di tab Files changed sebelum meminta orang lain.
- **Bersikap sopan** dalam review: komentari kodenya, bukan orangnya. Terima masukan sebagai bahan belajar.

> **Ringkasan:** Push branch ke GitHub, buat Pull Request dengan deskripsi jelas, perbaiki sesuai review dengan commit tambahan, lalu merge dan bersihkan branch.

---

## 3. Fork: Berkontribusi ke Project Orang Lain

Untuk project milik orang lain (misalnya proyek sumber terbuka), kamu biasanya **tidak punya izin** untuk push langsung. Solusinya adalah **fork**.

**Fork** menyalin repository orang lain menjadi repository milikmu sendiri di GitHub.

```text
Repository asli (milik orang lain)   upstream
        |  fork (salinan di akunmu)
        v
Fork milikmu di GitHub               origin
        |  clone
        v
Salinan lokal di komputermu
```

Alur lengkapnya:

1. Di halaman repository asli, klik **Fork**. Sebuah salinan muncul di akunmu.
2. **Clone fork-mu** (bukan repository asli) ke komputermu.

```text
git clone git@github.com:usernamemu/proyek-orang.git
cd proyek-orang
git switch -c perbaiki-typo
# ...edit...
git add .
git commit -m "Perbaiki salah ketik di dokumentasi"
git push -u origin perbaiki-typo
```

3. Di GitHub, buka fork-mu lalu klik **Compare & pull request** untuk mengajukan perubahan ke repository asli.
4. Pemilik project meninjau, lalu menggabungkan atau meminta perubahan.

### 3.a Menyinkronkan Fork dengan Aslinya

Repository asli terus berubah, sedangkan fork-mu tidak otomatis ikut. Tambahkan remote kedua bernama `upstream`.

```text
git remote add upstream git@github.com:pemilik/proyek-orang.git
# upstream menunjuk ke repository asli
git fetch upstream
git switch main
git merge upstream/main
# membawa perubahan terbaru dari repository asli ke main-mu
```

> **Catatan:** Kontribusi pertama yang bagus biasanya kecil: memperbaiki salah ketik di dokumentasi, menambah terjemahan, atau memperjelas penjelasan. Cari label **good first issue** di repository proyek sumber terbuka.

> **Ringkasan:** Fork menyalin repository orang lain ke akunmu. Clone fork-mu, kerjakan di branch, lalu ajukan pull request ke repository asli.

---

## 4. Issue

**Issue** adalah tempat mencatat tugas, bug, atau ide di GitHub. Setiap issue punya judul, deskripsi, label, dan penanggung jawab.

| Kegunaan | Contoh judul issue |
|---|---|
| Melaporkan bug | `Tombol hapus tidak berfungsi di Firefox` |
| Meminta fitur | `Tambah mode gelap` |
| Mencatat tugas | `Tulis dokumentasi instalasi` |
| Bertanya | `Bagaimana cara menjalankan project ini?` |

Issue yang baik untuk bug memuat:

- **Langkah-langkah** untuk memunculkan masalah.
- **Hasil yang diharapkan** dan **hasil yang terjadi**.
- Lingkungan (browser, OS) dan **tangkapan layar** atau pesan error.

(Sama seperti cara bertanya yang baik di materi Cara Belajar Programming.)

### 4.a Menghubungkan Issue dengan PR

Tulis kata kunci di deskripsi PR agar issue otomatis tertutup saat PR digabungkan.

```text
Menutup #12
```

`#12` adalah nomor issue. Kata `Closes`, `Fixes`, atau `Menutup` yang diikuti nomor issue memberi tahu GitHub bahwa PR ini menyelesaikannya.

---

## 5. Menulis README yang Baik

**README.md** adalah halaman depan repository. Orang pertama kali melihatnya saat membuka project-mu, termasuk calon pemberi kerja yang melihat portofoliomu.

README menggunakan format **Markdown**. Dasarnya:

````markdown
# Judul Besar
## Sub Judul

Teks biasa dengan **tebal** dan *miring*.

- Item daftar
- Item daftar lain

1. Langkah satu
2. Langkah dua

[Teks link](https://contoh.com)

`kode satu baris`

```text
blok kode
```
````

### 5.a Isi README yang Disarankan

| Bagian | Isi |
|---|---|
| Judul dan deskripsi singkat | Satu atau dua kalimat tentang project |
| Tangkapan layar | Gambar tampilan project (sangat meningkatkan daya tarik) |
| Fitur | Daftar fitur utama |
| Teknologi | Bahasa dan alat yang dipakai |
| Cara menjalankan | Langkah instalasi dan menjalankan di komputer lain |
| Tautan demo | Alamat situs yang sudah tayang, jika ada |

Contoh bagian cara menjalankan:

```text
## Cara Menjalankan

1. Clone repository ini
   git clone git@github.com:username/todo.git
2. Masuk ke folder
   cd todo
3. Pasang dependensi
   npm install
4. Jalankan
   npm run dev
```

Uji README-mu dengan bertanya: **apakah orang yang belum pernah melihat project ini bisa menjalankannya hanya dengan membaca README?**

> **Ringkasan:** README.md adalah halaman depan project, ditulis dengan Markdown, dan sebaiknya memuat deskripsi, tampilan, fitur, teknologi, dan cara menjalankan.

---

## 6. Latihan Singkat

Latihan ini paling baik dikerjakan berpasangan dengan teman.

1. Buat repository di GitHub dan undang temanmu sebagai kolaborator (Settings, lalu Collaborators).
2. Masing-masing clone repository itu, lalu buat branch sendiri dan commit satu perubahan berbeda.
3. Push branch masing-masing, lalu buat Pull Request ke `main`.
4. Tinjau PR temanmu: beri satu komentar dan satu persetujuan.
5. Merge kedua PR, lalu `git pull` di komputer masing-masing.
6. Sengaja ubah **baris yang sama** pada dua branch untuk membuat konflik, lalu selesaikan bersama.
7. Buat satu issue, lalu tutup issue itu lewat PR dengan kata `Menutup #nomor`.

Jika belajar sendiri, buat dua branch sendiri, ajukan PR dari satu branch, lalu tinjau dan merge PR itu sendiri.

---

## Rangkuman

- Pada project tim, jangan commit langsung ke `main`. Kerjakan di branch fitur, lalu gabungkan lewat pull request.
- Pull Request adalah tempat meninjau dan mendiskusikan perubahan. Perbaikan atas review cukup di-commit dan di-push ke branch yang sama.
- Fork menyalin repository orang lain ke akunmu, sehingga kamu bisa berkontribusi lewat pull request tanpa izin push langsung.
- Remote tambahan bernama `upstream` membantu menyinkronkan fork dengan repository asli.
- Issue mencatat bug, fitur, dan tugas, dan bisa ditutup otomatis lewat kata kunci di deskripsi PR.
- README.md adalah halaman depan project dan sebaiknya memuat deskripsi, fitur, teknologi, dan cara menjalankan.
