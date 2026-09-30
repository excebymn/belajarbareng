import { ref } from 'vue'
import { PASSWORD } from '../config'
const KEY = 'pengajar-ok'
const read = () => { try { return sessionStorage.getItem(KEY) === '1' } catch { return false } }
export const authed = ref(read())
// Berhasil hanya jika kedua kolom pertanyaan kosong DAN password benar.
export function masuk(q1, q2, pw) {
  const ok = !q1.trim() && !q2.trim() && pw === PASSWORD
  if (ok) { authed.value = true; try { sessionStorage.setItem(KEY, '1') } catch {} }
  return ok
}
export function keluar() { authed.value = false; try { sessionStorage.removeItem(KEY) } catch {} }
