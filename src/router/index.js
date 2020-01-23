import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/templates/Intro'
import Coding from '@/components/templates/Coding'
import Skills from '@/components/templates/Skills'
import Demos from '@/components/templates/Demos'
import About from '@/components/templates/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/coding',
      name: 'Coding',
      component: Coding
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/demos',
      name: 'Demos',
      component: Demos
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
