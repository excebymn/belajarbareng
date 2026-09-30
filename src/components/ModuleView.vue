<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({ html: String, toc: Array, prev: String, next: String })
const router = useRouter()
const sheet = ref(false), active = ref('')

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
onMounted(() => { addEventListener('scroll', track, { passive: true }); track() })
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
    <aside v-if="toc.length" class="toc desk">
      <div class="toc-t">Di halaman ini</div>
      <a v-for="t in toc" :key="t.id" :href="`#${t.id}`" :class="['l' + t.level, { on: active === t.id }]" @click.prevent="go(t.id)">{{ t.text }}</a>
    </aside>
    <article class="prose" v-html="html" @click="onClick"></article>
    <footer class="pn">
      <RouterLink v-if="prev" :to="prev">← Sebelumnya</RouterLink><span v-else></span>
      <RouterLink v-if="next" :to="next">Berikutnya →</RouterLink>
    </footer>
    <Teleport to="body">
      <template v-if="toc.length">
        <button class="fab" aria-label="Buka daftar isi" @click="sheet = true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
          Daftar isi
        </button>
        <Transition name="fade"><div v-if="sheet" class="scrim" @click="sheet = false"></div></Transition>
        <Transition name="sheet">
          <div v-if="sheet" class="sheet" role="dialog" aria-label="Daftar isi">
            <div class="sheet-h"><b>Di halaman ini</b>
              <button class="icon" aria-label="Tutup" @click="sheet = false"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 5l14 14M19 5L5 19"/></svg></button>
            </div>
            <a v-for="t in toc" :key="t.id" :href="`#${t.id}`" :class="['l' + t.level, { on: active === t.id }]" @click.prevent="go(t.id)">{{ t.text }}</a>
          </div>
        </Transition>
      </template>
    </Teleport>
  </div>
</template>
