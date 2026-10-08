<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  html: String, toc: { type: Array, default: () => [] },
  prev: Object, next: Object,
  daftar: { type: Array, default: () => [] }, aktif: String, babJudul: String,
})
const router = useRouter()
const sheet = ref(false), active = ref(''), tab = ref('halaman'), side = ref(null)

async function onClick(e) {
  const b = e.target.closest('.copy-btn'); if (!b) return
  const text = b.parentElement.querySelector('code').textContent
  try { await navigator.clipboard.writeText(text); b.textContent = 'Tersalin ✓'; b.classList.add('ok') }
  catch { b.textContent = 'Gagal' }
  setTimeout(() => { b.textContent = 'Salin'; b.classList.remove('ok') }, 1500)
}

// Tandai bagian yang sedang dibaca
let raf = 0
function track() {
  cancelAnimationFrame(raf)
  raf = requestAnimationFrame(() => {
    let cur = ''
    for (const t of props.toc) {
      const el = document.getElementById(t.id)
      if (el && el.getBoundingClientRect().top < 120) cur = t.id
    }
    active.value = cur
  })
}
onMounted(() => {
  addEventListener('scroll', track, { passive: true }); track()
  const el = side.value?.querySelector('.m.on')   // sidebar: gulir ke materi yang aktif
  if (el) side.value.scrollTop = el.offsetTop - 90
})
onBeforeUnmount(() => { removeEventListener('scroll', track); document.body.style.overflow = '' })

watch(sheet, async v => {
  document.body.style.overflow = v ? 'hidden' : ''
  if (v) { await nextTick(); document.querySelector('.sheet .on')?.scrollIntoView({ block: 'center' }) }
})
function go(id) {
  sheet.value = false
  document.body.style.overflow = ''
  router.push({ hash: '#' + id })
}
</script>
<template>
  <div class="mod">
    <aside v-if="daftar.length || toc.length" ref="side" class="side desk">
      <div class="side-t">{{ daftar.length ? babJudul : 'Di halaman ini' }}</div>
      <template v-if="daftar.length">
        <template v-for="m in daftar" :key="m.slug">
          <RouterLink :to="m.to" class="m" :class="{ on: m.slug === aktif }"><i>{{ String(m.no).padStart(2, '0') }}</i>{{ m.judul }}</RouterLink>
          <div v-if="m.slug === aktif && toc.length" class="sub">
            <a v-for="t in toc" :key="t.id" :href="`#${t.id}`" :class="['l' + t.level, { on: active === t.id }]" @click.prevent="go(t.id)">{{ t.text }}</a>
          </div>
        </template>
      </template>
      <div v-else class="sub flat">
        <a v-for="t in toc" :key="t.id" :href="`#${t.id}`" :class="['l' + t.level, { on: active === t.id }]" @click.prevent="go(t.id)">{{ t.text }}</a>
      </div>
    </aside>

    <article class="prose" v-html="html" @click="onClick"></article>

    <footer class="pn">
      <RouterLink v-if="prev" :to="prev.to" class="pv"><small>← {{ prev.hint }}</small><b>{{ prev.judul }}</b></RouterLink><span v-else></span>
      <RouterLink v-if="next" :to="next.to" class="nx"><small>{{ next.hint }} →</small><b>{{ next.judul }}</b></RouterLink>
    </footer>

    <Teleport to="body">
      <template v-if="daftar.length || toc.length">
        <button class="fab" aria-label="Buka daftar isi" @click="sheet = true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
          Daftar isi
        </button>
        <Transition name="fade"><div v-if="sheet" class="scrim" @click="sheet = false"></div></Transition>
        <Transition name="sheet">
          <div v-if="sheet" class="sheet" role="dialog" aria-label="Daftar isi">
            <div class="sheet-h"><b>{{ daftar.length ? babJudul : 'Di halaman ini' }}</b>
              <button class="icon" aria-label="Tutup" @click="sheet = false"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 5l14 14M19 5L5 19"/></svg></button>
            </div>
            <div v-if="daftar.length" class="tabs">
              <button :class="{ on: tab === 'halaman' }" @click="tab = 'halaman'">Halaman ini</button>
              <button :class="{ on: tab === 'materi' }" @click="tab = 'materi'">Materi bab</button>
            </div>
            <template v-if="tab === 'halaman' || !daftar.length">
              <a v-for="t in toc" :key="t.id" :href="`#${t.id}`" :class="['l' + t.level, { on: active === t.id }]" @click.prevent="go(t.id)">{{ t.text }}</a>
            </template>
            <template v-else>
              <RouterLink v-for="m in daftar" :key="m.slug" :to="m.to" class="m" :class="{ on: m.slug === aktif }" @click="sheet = false"><i>{{ String(m.no).padStart(2, '0') }}</i>{{ m.judul }}</RouterLink>
            </template>
          </div>
        </Transition>
      </template>
    </Teleport>
  </div>
</template>
