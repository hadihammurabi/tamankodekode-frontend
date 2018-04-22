import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Kategori from '@/components/Kategori'
import KategoriSlug from '@/components/Kategori/slug'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/kategori',
      name: 'Kategori',
      component: Kategori
    }, {
      path: '/kategori/:slug',
      name: 'Kategori Slug',
      component: KategoriSlug
    }
  ]
})
