import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Teams from '../views/Teams.vue'
import Connect from  '../views/Contactus.vue'
const router = createRouter({
  history: createWebHistory('/Acadtrix/'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/teams',
      name: 'Teams',
      component: Teams,
    },
    {
      path: '/connect',
      name: 'Connect',
      component: Connect,
    },
    
  ],
})

export default router
