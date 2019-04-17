import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/sticker'
    },
    {
      path: '/sticker',
      name: 'sticker',
      component: () => import('@/components/sticker/index.vue')
    },
    {
      path: '/tshirt',
      name: 'tshirt',
      component: () => import('@/components/tshirt/index.vue')
    },
    {
      path: '/poster',
      name: 'poster',
      component: () => import('@/components/poster/index.vue')
    },
    {
      path: '/logo',
      name: 'logo',
      component: () => import('@/components/logo/index.vue')
    },
    {
      path: '/wallpaper',
      name: 'wallpaper',
      component: () => import('@/components/wallpaper/index.vue')
    },
    {
      path: '/media',
      name: 'media',
      component: () => import('@/components/media/index.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/components/article/index.vue')
    }
  ]
})
