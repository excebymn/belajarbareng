<script setup>
import { ref, watchEffect } from 'vue'
import ModuleView from '../components/ModuleView.vue'
import { daftarBab, daftarPengajar, getBab, getMateri, getPengajar, muat } from '../lib/content'
import { render } from '../lib/markdown'
const props = defineProps({ role: String, bab: String, slug: String })
const s = ref({ loading: true })
const nav = (it, hint) => it && { to: it.to, judul: it.judul, hint }

watchEffect(async () => {
  s.value = { loading: true }
  if (props.role === 'murid') {
    const b = getBab(props.bab), m = getMateri(props.bab, props.slug)
    if (!b || !m) { s.value = { missing: true }; return }
    const { html, toc } = render(await muat(m))
    const i = b.materi.indexOf(m), nextBab = daftarBab[b.no]
    const next = nav(b.materi[i + 1], 'Berikutnya')
      || nav(nextBab?.materi[0], `Bab berikutnya: ${nextBab?.judul}`)
      || { to: '/', judul: 'Kembali ke beranda', hint: 'Selesai' }
    s.value = { b, m, html, toc, daftar: b.materi, prev: nav(b.materi[i - 1], 'Sebelumnya'), next }
  } else {
    const p = getPengajar(props.slug)
    if (!p) { s.value = { missing: true }; return }
    const { html, toc } = render(await muat(p))
    const i = daftarPengajar.indexOf(p)
    s.value = { m: p, html, toc, daftar: [], prev: nav(daftarPengajar[i - 1], 'Sebelumnya'), next: nav(daftarPengajar[i + 1], 'Berikutnya') }
  }
})
</script>
<template>
  <section class="wrap">
    <nav class="crumb">
      <RouterLink to="/">Beranda</RouterLink> /
      <template v-if="role === 'murid' && s.b"><RouterLink :to="`/bab/${s.b.id}`">{{ s.b.judul }}</RouterLink> / <b>Materi {{ s.m.no }}</b></template>
      <template v-else-if="role === 'pengajar'"><RouterLink to="/pengajar">Pengajar</RouterLink> / <b>Modul</b></template>
      <b v-else>Materi</b>
    </nav>
    <p v-if="s.loading" class="note">Memuat…</p>
    <div v-else-if="s.missing" class="empty">
      <h1 class="hero sm">Belum ada materi</h1>
      <p>Materi ini belum tersedia.</p>
      <RouterLink to="/" class="btn">Kembali ke beranda</RouterLink>
    </div>
    <template v-else>
      <div class="mhead">
        <p v-if="s.b" class="meta"><span>{{ s.b.judul }}</span><span>Materi {{ s.m.no }} dari {{ s.daftar.length }}</span></p>
        <h1 class="hero sm">{{ s.m.judul }}</h1>
        <p v-if="s.m.saran" class="saran"><b>Disarankan:</b> {{ s.m.saran }}</p>
      </div>
      <ModuleView :html="s.html" :toc="s.toc" :prev="s.prev" :next="s.next" :daftar="s.daftar" :aktif="s.m.slug" :bab-judul="s.b?.judul" />
    </template>
  </section>
</template>
