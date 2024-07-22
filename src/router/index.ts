import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'SolarSystem' }
    },
    {
      path: '/01',
      name: 'FantasyZone',
      component: () => import('../views/FantasyZone.vue')
    },
    {
      path: '/02',
      name: 'Revolver',
      component: () => import('../views/Revolver.vue')
    },
    {
      path: '/03',
      name: 'BoxOptic',
      component: () => import('../views/BoxOptic.vue')
    },
    {
      path: '/04',
      name: 'Lost',
      component: () => import('../views/NotYet.vue')
    },
    {
      path: '/05',
      name: 'ScrollingGradient',
      component: () => import('../views/ScrollingGradient.vue')
    },
    {
      path: '/06',
      name: 'Sinusoidal',
      component: () => import('../views/NotYet.vue')
    },
    {
      path: '/07',
      name: 'Lichtenberg',
      component: () => import('../views/NotYet.vue')
    },
    {
      path: '/08',
      name: 'SolarSystem',
      component: () => import('../views/SolarSystem.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
