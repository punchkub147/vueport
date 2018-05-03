import Vue from 'vue'
import Router from 'vue-router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import colors from 'vuetify/es5/util/colors'

import Home from '@/pages/Home'
import Works from '@/pages/Works'
import Contact from '@/pages/Contact'
Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken1, // #E53935
    secondary: colors.blue.lighten4, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/works/:work',
      name: 'Works',
      component: Works
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
