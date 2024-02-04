import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WhatWeDoView from '../views/WhatWeDoView.vue'
import OurMissionView from '../views/OurMissionView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/what-we-do',
      name: 'what-we-do',
      component: WhatWeDoView
    },
    {
      path: '/our-mission',
      name: 'our-mission',
      component: OurMissionView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router
