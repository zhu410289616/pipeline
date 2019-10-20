import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/TcpProxy',
      name: 'tcp-proxy',
      component: () => import('@/components/TcpProxy')
    },
    {
      path: '/HttpProxy',
      name: 'http-proxy',
      component: () => import('@/components/HttpProxy')
    },
    {
      path: '/About',
      name: 'about',
      component: () => import('@/components/About')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
