import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue')
  }
  // {
  //   path: '/login',
  //   component: () => import('../views/login/login.vue')
  // }
]

// 创建 router 对象
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
