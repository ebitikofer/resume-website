import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/Introduction'
import Coding from '@/components/Coding'
import Qualifications from '@/components/Qualifications'
import Demos from '@/components/Demos'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/coding',
      name: 'Coding',
      component: Coding
    },
    {
      path: '/qualifications',
      name: 'Qualifications',
      component: Qualifications
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
