import { createRouter, createWebHistory } from 'vue-router'
import { authed } from '../lib/gate'
import Home from '../views/Home.vue'
const Module = () => import('../views/Module.vue')
const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to) => to.hash ? { el: to.hash, top: 84 } : { top: 0 },
  routes: [
    { path: '/', component: Home },
    { path: '/bab/:id', component: () => import('../views/Bab.vue'), props: true },
    { path: '/bab/:id/:slug', component: Module, props: r => ({ role: 'murid', bab: r.params.id, slug: r.params.slug }) },
    { path: '/tentang', component: () => import('../views/Tentang.vue') },
    { path: '/pengajar', component: () => import('../views/Gerbang.vue') },
    { path: '/pengajar/modul/:id', component: Module, props: r => ({ role: 'pengajar', slug: r.params.id }) },
    { path: '/pengajar/template', component: () => import('../views/Template.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') }
  ]
})
router.beforeEach(to => {
  if (to.path.startsWith('/pengajar/') && !authed.value) return '/pengajar'
})
export default router
