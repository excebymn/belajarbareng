import { pertemuan } from '../content'
import { parseFM } from './markdown'
export const daftar = [...pertemuan].sort((a, b) => a.no - b.no)
export const get = no => daftar.find(p => p.no === no)
export const tersedia = (p, role) => typeof p?.[role] === 'function'
export async function muat(no, role) {
  const p = get(no)
  if (!tersedia(p, role)) return null
  const mod = await p[role]()
  return { ...p, body: parseFM(mod.default).body }
}
