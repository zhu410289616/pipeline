import Vue from 'vue'
import Router from 'vue-router'

import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Page1',
      component: Page1
    },
    {
      path: '/Page2',
      component: Page2
    },
    {
      path: '/Page3',
      component: Page3
    },
    // {
    //   path: '/',
    //   name: 'login',
    //   component: () => import('../views/admin/Login.vue')
    // },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: home,
    //   children: [
    //     {path: 'admin', name: 'admin', component: Admin, },
    //     {path: 'pwdReset', name: 'pwdReset', component: ()=>import('@/views/admin/pwdReset.vue'), },
    //   ]
    // },
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
