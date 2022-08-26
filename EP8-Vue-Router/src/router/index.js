import { createRouter, createWebHistory  , createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// createWebHistory 伺服器用
// createWebHashHistory ＃

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      children : [
        { 
          path: '',
          name: 'default',
          component: () => import('../views/A.vue')
        },
        { 
          path: 'A',
          name: 'A',
          component: () => import('../views/A.vue')
        },
        { 
          path: 'B',
          name: 'B',
          component: () => import('../views/B.vue')
        },
        { 
          path: 'C',
          name: 'C',
          component: () => import('../views/C.vue')
        },
      ],
    },
    { // 動態路由
      path: '/:id',
      name: 'useID',
      component: () => import('../views/[id].vue'),
      // children : [
      //   {
      //     path: '',
      //   },
      //   {
      //     path: '/D',
      //     component: () => import('../views/D.vue'),
      //   }
      // ]
    },
    { // 404路由
      path: '/:domain(.*)*', 
      name: 'NotFound', 
      component: () => import('../views/404.vue')
    },
  ]
})

export default router
