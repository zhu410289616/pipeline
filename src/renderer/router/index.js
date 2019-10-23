import Vue from 'vue'
import Router from 'vue-router'

//解决vue报错：NavigationDuplicated {_name: "NavigationDuplicated", name: "NavigationDuplicated"}
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/TcpService',
      name: 'tcp-service',
      component: () => import('@/components/TcpService')
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
