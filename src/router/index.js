import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import EmailConfirm from '@/components/EmailConfirm'
import Kategori from '@/components/Kategori'
import KategoriSlug from '@/components/Kategori/slug'
import Profil from '@/components/Profil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/emailconfirm',
      name: 'EmailConfirm',
      component: EmailConfirm
    }, {
      path: '/profil',
      name: 'Profil',
      component: Profil
    }, {
      path: '/kategori',
      name: 'Kategori',
      component: Kategori
    }, {
      path: '/kategori/:slug',
      name: 'KategoriSlug',
      component: KategoriSlug
    }
  ]
})
