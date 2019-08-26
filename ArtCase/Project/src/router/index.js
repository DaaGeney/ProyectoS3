import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/inicio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Home
    }
  ]
})
