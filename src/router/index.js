import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewsView.vue')
  },
  {
    path: '/workshop',
    name: 'workshop',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkshopView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectView.vue')
  },
  {
    path: '/publications',
    name: 'publications',
    component: () => import(/* webpackChunkName: "about" */ '../views/PublicationsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
  },
  {
    path: '/links',
    name: 'links',
    component: () => import(/* webpackChunkName: "about" */ '../views/LinksView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
