---
jenis: murid
bab: git
urutan: 7
judul: "Proyek: Portofolio di GitHub"
deskripsi: "Mengunggah proyek profil dan daftar tugas ke GitHub dengan riwayat commit rapi, README, branch fitur, pull request, dan profil GitHub yang siap dilihat orang."
---

# Proyek: Portofolio di GitHub

Pada materi ini kamu akan menggabungkan semua yang sudah dipelajari di bab Git untuk mengunggah proyek-proyek yang sudah kamu buat ke GitHub, dengan riwayat yang rapi dan tampilan yang layak dilihat orang lain.

Sebelum mulai, pastikan kamu sudah memahami: seluruh materi di bab Git, serta sudah memiliki proyek **profil** (bab HTML dan CSS) dan **daftar tugas** (bab JS).

---

## 1. Gambaran Proyek

Hasil akhir:

| Hasil | Teknik yang dipakai |
|---|---|
| Dua repository: `profil-saya` dan `todo-js` | `git init`, `commit`, `remote`, `push` |
| Riwayat commit yang rapi dan bermakna | Pesan commit yang baik, commit kecil |
| `.gitignore` di tiap project | Mengecualikan file yang tidak perlu |
| README yang menjelaskan project | Markdown |
| Satu fitur tambahan lewat branch dan pull request | Feature branch workflow |
| Profil GitHub dengan repository yang disematkan | Pinned repositories |

Proyek ini juga menjadi **bahan portofolio** pertamamu.

---

## 2. Langkah 1: Persiapan Sebelum Commit

Buka folder `profil-saya` di terminal, lalu periksa isinya.

```text
cd profil-saya
ls
# periksa file apa saja yang ada
```

Pastikan **tidak ada file rahasia atau sampah** di dalamnya. Buat `.gitignore`.

```text
# isi .gitignore
.DS_Store
Thumbs.db
*.log
.vscode/
```

Struktur ideal sebelum commit pertama:

```text
profil-saya/
├── .gitignore
├── README.md
├── index.html
├── kontak.html
├── style.css
└── img/
```

> **Catatan:** Foto di folder `img` akan ikut tersimpan di GitHub dan dilihat orang. Pastikan kamu nyaman dengan foto yang diunggah, dan jangan menyertakan foto atau data pribadi yang tidak ingin dibagikan.

---

## 3. Langkah 2: Commit dengan Riwayat yang Rapi

Alih-alih satu commit besar bertuliskan "semua file", bagi pekerjaanmu menjadi beberapa commit logis. Riwayat yang rapi memperlihatkan caramu berpikir.

```text
git init
git add .gitignore README.md
git commit -m "Tambah README dan .gitignore"

git add index.html img/
git commit -m "Tambah halaman profil dengan foto dan tabel jadwal"

git add kontak.html
git commit -m "Tambah halaman kontak dengan formulir"

git add style.css
git commit -m "Tambah gaya tampilan dengan variabel CSS dan mode gelap"
```

Periksa hasilnya:

```text
git log --oneline
```

```text
d4e5f6a Tambah gaya tampilan dengan variabel CSS dan mode gelap
c3d4e5f Tambah halaman kontak dengan formulir
b2c3d4e Tambah halaman profil dengan foto dan tabel jadwal
a1b2c3d Tambah README dan .gitignore
```

Riwayat seperti ini bisa dibaca seperti cerita pembuatan project dari awal.

> **Catatan:** Menjalankan `git add .` lalu satu `git commit` memang lebih cepat, tetapi kamu kehilangan manfaat riwayat. Biasakan membagi commit sesuai perubahan logisnya.

---

## 4. Langkah 3: Menulis README

Buat `README.md` yang menjelaskan project. Gunakan kerangka berikut sebagai titik awal, lalu sesuaikan.

```markdown
# Profil Saya

Situs profil pribadi dua halaman yang dibuat dengan HTML dan CSS
sebagai latihan di kursus pengembangan web.

## Fitur

- Halaman profil dengan foto, daftar hobi, tabel jadwal, dan galeri
- Halaman kontak dengan formulir dan validasi bawaan HTML
- Tampilan responsif untuk ponsel dan desktop
- Mode gelap otomatis mengikuti pengaturan perangkat

## Teknologi

HTML5, CSS3 (Flexbox, Grid, variabel CSS, media query)

## Cara Menjalankan

1. Clone repository ini
2. Buka `index.html` di browser

## Yang Saya Pelajari

- Menyusun halaman dengan elemen HTML semantik
- Membuat tata letak responsif dengan Grid dan Flexbox
```

Tambahkan **tangkapan layar** agar README lebih menarik: simpan gambar di folder `img/` atau `docs/`, lalu tampilkan di README.

```markdown
![Tampilan halaman profil](docs/tampilan.png)
```

---

## 5. Langkah 4: Mengunggah ke GitHub

1. Buat repository kosong bernama `profil-saya` di GitHub (jangan centang README atau `.gitignore`).
2. Hubungkan dan kirim.

```text
git remote add origin git@github.com:usernamemu/profil-saya.git
git branch -M main
# memastikan nama branch utama adalah main
git push -u origin main
```

3. Muat ulang halaman repository di GitHub. Pastikan:

| Pemeriksaan | Sudah? |
|---|---|
| README tampil rapi di halaman depan | |
| Semua commit terlihat di tab Commits | |
| Tidak ada file rahasia atau sampah ikut terunggah | |
| Deskripsi singkat (About) di kanan atas sudah diisi | |

Klik ikon roda gigi di bagian **About** untuk mengisi deskripsi singkat dan topik (misalnya `html`, `css`, `portfolio`).

Ulangi seluruh langkah di atas untuk project **daftar tugas** (`todo-js`). Untuk project itu, README sebaiknya menjelaskan fitur (tambah, selesai, hapus, tersimpan di localStorage) dan cara menjalankannya.

---

## 6. Langkah 5: Menambah Fitur Lewat Branch dan Pull Request

Berlatihlah memakai alur tim pada project-mu sendiri. Misalnya menambah satu bagian "Proyek" di halaman profil.

```text
git switch -c fitur-bagian-proyek
# buat branch untuk fitur baru
```

Edit `index.html`, lalu commit.

```text
git add index.html
git commit -m "Tambah bagian proyek di halaman profil"
git push -u origin fitur-bagian-proyek
```

Di GitHub:

1. Buat **Pull Request** dari `fitur-bagian-proyek` ke `main`.
2. Tulis deskripsi: apa yang berubah dan cara mengujinya.
3. Buka tab **Files changed** dan tinjau perubahanmu seolah itu kode orang lain.
4. Klik **Merge pull request**, lalu **Delete branch**.

Kembali ke komputermu:

```text
git switch main
git pull
git branch -d fitur-bagian-proyek
```

---

## 7. Langkah 6: Merapikan Profil GitHub

Profil GitHub adalah etalase pertamamu. Beberapa hal yang membuatnya meyakinkan:

- **Foto dan nama** yang jelas, serta **bio singkat** yang menjelaskan apa yang sedang kamu pelajari.
- **Sematkan** (*pin*) dua sampai enam repository terbaikmu di bagian profil.
- **Profil README**: buat repository berpublik dengan nama **persis sama dengan username-mu**, lalu isi `README.md`-nya. File itu tampil di halaman profilmu.
- **Aktivitas yang konsisten**: commit kecil yang rutin lebih meyakinkan daripada satu ledakan besar.

```markdown
# Halo, saya [Nama] 👋

Pelajar yang sedang belajar pengembangan web.

## Sedang Dipelajari
- HTML, CSS, dan JavaScript
- Git dan GitHub
- Selanjutnya: Vue

## Proyek
- [Profil Saya](https://github.com/usernamemu/profil-saya)
- [Daftar Tugas](https://github.com/usernamemu/todo-js)
```

> **Peringatan:** Sebelum membuat repository berpublik, periksa lagi: tidak ada kata sandi, kunci API, nomor telepon pribadi, atau data pribadi lain di dalam file maupun riwayat commit.

---

## 8. Pemeriksaan Akhir

| Pemeriksaan | Sudah? |
|---|---|
| Dua repository (`profil-saya` dan `todo-js`) ada di GitHub | |
| Masing-masing punya `.gitignore` dan README yang jelas | |
| Riwayat commit bermakna, bukan "update" atau "fix" | |
| Tidak ada file rahasia di riwayat | |
| Satu fitur sudah masuk lewat branch dan pull request | |
| Deskripsi (About) dan topik repository sudah diisi | |
| Profil GitHub punya foto, bio, dan repository yang disematkan | |

---

## 9. Tantangan Tambahan

1. Aktifkan **GitHub Pages** (Settings, lalu Pages) untuk `profil-saya`, sehingga situsmu bisa dibuka lewat alamat web. Pembahasannya ada di bab Deployment.
2. Tambahkan **lisensi** pada repository (misalnya MIT) lewat tombol **Add file**, lalu **Create new file**, dan ketik `LICENSE`.
3. Buat dua issue untuk project-mu sendiri (misalnya "Tambah mode gelap manual"), lalu tutup salah satunya lewat pull request.
4. Cari satu project sumber terbuka yang kamu suka, lalu **fork** dan baca strukturnya. Jika menemukan salah ketik di dokumentasinya, ajukan pull request kecil.

---

## 10. Menuju Vue

Mulai dari bab Vue, **setiap project baru langsung dibuat sebagai repository Git**, dan setiap perubahan bermakna di-commit dengan pesan yang jelas. Ini kebiasaan yang akan dipakai oleh semua programmer profesional, dan sekarang kamu sudah memilikinya.

---

## Rangkuman

- Siapkan `.gitignore` dan hindari mengunggah file rahasia sebelum commit pertama.
- Bagi pekerjaan menjadi commit logis dengan pesan yang bermakna, sehingga riwayat terbaca seperti cerita.
- README yang baik memuat deskripsi, fitur, teknologi, dan cara menjalankan, ditambah tangkapan layar.
- Hubungkan repository lokal ke GitHub dengan `git remote add origin` dan `git push -u origin main`.
- Latih alur tim dengan feature branch dan pull request, bahkan pada project pribadi.
- Profil GitHub yang rapi, dengan repository tersemat dan aktivitas konsisten, menjadi etalase portofoliomu.
- Bab Git selesai. Selanjutnya kamu akan membuat project Vue, dan sejak awal memakai Git.
