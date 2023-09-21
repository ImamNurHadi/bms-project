import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '../views/Home.vue'
import HomeView from '../views/HomeView.vue'
import MeetTheTeam from '../views/MeetTheTeam.vue'
import Rumah from '../views/Rumah.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/mtt', name:'mtt', component: MeetTheTeam
  },
  {
    path: '/rumah', name: 'rumah', component: Rumah
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
