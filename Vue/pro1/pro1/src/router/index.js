import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Detail from '@/components/detail'
import Carousel from '@/components/vue_carousel_3d'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/carousel',
      name: 'carousel',
      component: Carousel
    }
  ]
})
