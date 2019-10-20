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
      component: require('@/components/TcpProxy')
    },
    {
      path: '/HttpProxy',
      name: 'http-proxy',
      component: require('@/components/HttpProxy')
    },
    {
      path: '/About',
      name: 'about',
      component: require('@/components/About')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
