import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/About.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import(/* webpackChunkName: "about" */ '../components/Tickets.vue')
  },
  {
    path: '/viewMore',
    name: 'ViewMore',
    component: () => import(/* webpackChunkName: "about" */ '../components/ViewMore.vue')
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import(/* webpackChunkName: "about" */ '../components/Learn.vue')
  },
  {
    path: '/learn2',
    name: 'Learn2',
    component: () => import(/* webpackChunkName: "about" */ '../components/Learn2.vue')
  },
  {
    path: '/learn3',
    name: 'Learn3',
    component: () => import(/* webpackChunkName: "about" */ '../components/Learn3.vue')
  },
  {
    path: '/learn4',
    name: 'Learn4',
    component: () => import(/* webpackChunkName: "about" */ '../components/Learn4.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
