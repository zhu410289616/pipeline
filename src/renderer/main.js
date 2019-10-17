import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' //lang i18n

Vue.use(ElementUI, { locale })

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
/** 
 * 创建和挂载根实例 
 * 
 * 1. 创建的router实例是有命名规范的，要使用router命名，否则将报错。
 * 使用vue router 的过程中抱Error in render: "TypeError: Cannot read property 'matched' of undefined"的错误
 * 
 */
const app = new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
})
app.$mount('#app')
