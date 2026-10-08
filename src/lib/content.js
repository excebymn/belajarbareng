import { bab, pengajar } from '../content'
import { parseFM } from './markdown'

// Bab diberi nomor sesuai urutan di index.js; tiap materi tahu bab dan alamatnya.
export const daftarBab = bab.map((b, i) => ({
  ...b, no: i + 1,
  materi: b.materi.map((m, j) => ({ ...m, no: j + 1, babId: b.id, babJudul: b.judul, to: `/bab/${b.id}/${m.slug}` })),
}))
export const semuaMateri = daftarBab.flatMap(b => b.materi)
export const getBab = id => daftarBab.find(b => b.id === id)
export const getMateri = (id, slug) => getBab(id)?.materi.find(m => m.slug === slug)

export const daftarPengajar = pengajar.map(p => ({ ...p, to: `/pengajar/modul/${p.id}` }))
export const getPengajar = id => daftarPengajar.find(p => p.id === id)

// Ambil isi file (tanpa frontmatter dan tanpa judul H1 pertama, karena judul sudah tampil di header halaman).
export async function muat(item) {
  const mod = await item.load()
  return parseFM(mod.default).body.replace(/^\s*# .*\n/, '')
}
