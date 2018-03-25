import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Kategori from '@/components/Kategori'
import Tutorial from '@/components/Tutorial'
import TutorialSlug from '@/components/Tutorial/slug'

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
      path: '/tutorial',
      name: 'Tutorial',
      component: Tutorial
    }, {
      path: '/tutorial/:slug',
      name: 'TutorialSlug',
      component: TutorialSlug
    }
  ]
})
