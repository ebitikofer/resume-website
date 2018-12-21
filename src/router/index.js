import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '@/components/templates/Introduction'
import Coding from '@/components/templates/Coding'
import Qualifications from '@/components/templates/Qualifications'
import Demos from '@/components/templates/Demos'
import About from '@/components/templates/About'

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
