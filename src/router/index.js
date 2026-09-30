import { createRouter, createWebHistory } from 'vue-router'
import { authed } from '../lib/gate'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to) => to.hash ? { el: to.hash, top: 84 } : { top: 0 },
  routes: [
    { path: '/', component: Home },
    { path: '/pertemuan/:no(\\d+)', component: () => import('../views/Module.vue'), props: r => ({ no: +r.params.no, role: 'murid' }) },
    { path: '/tentang', component: () => import('../views/Tentang.vue') },
    { path: '/pengajar', component: () => import('../views/Gerbang.vue') },
    { path: '/pengajar/pertemuan/:no(\\d+)', component: () => import('../views/Module.vue'), props: r => ({ no: +r.params.no, role: 'pengajar' }) },
    { path: '/pengajar/template', component: () => import('../views/Template.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') }
  ]
})
router.beforeEach(to => {
  if (to.path.startsWith('/pengajar/') && !authed.value) return '/pengajar'
})
export default router
