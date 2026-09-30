// DAFTAR PERTEMUAN — edit file ini saja untuk menambah materi.
//
// Cara menambah materi:
//   1. Taruh file .md di src/content/pertemuan-XX/
//   2. Isi `murid` / `pengajar` dengan import file itu (lihat pertemuan 1).
//   3. Kalau belum ada file-nya, biarkan `null` → website menampilkan "Belum ada materi".
export const pertemuan = [
  {
    no: 1,
    judul: 'JavaScript Dasar dan Pengenalan Vue',
    deskripsi: 'Dari dasar JavaScript sampai tampilan interaktif dengan Vue: ref, event, v-if, v-for, v-model, form, dan component.',
    murid: () => import('./pertemuan-01/murid.md?raw'),
    pengajar: () => import('./pertemuan-01/pengajar.md?raw'),
  },
  { no: 2, judul: 'Git & GitHub', deskripsi: 'Simpan, lacak, dan kerjakan kode bersama.', murid: null, pengajar: null },
  { no: 3, judul: 'Backend Dasar', deskripsi: 'Server, API, dan database.', murid: null, pengajar: null },
]
