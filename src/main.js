// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 调用库
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// 调用模板
import {XButton} from 'vux'
import MyLogo from './components/logo'
import MyFooter from './components/pageFooter'

// 调用页面
import App from './App'
import Home from './components/HelloFromVux'
import Step from './components/step'
import PayReady from './components/payReady'
import PaySuccess from './components/paySuccess'
import Login from './components/login'
import CarInfo from './components/carInfo'
import OwnerInfo from './components/ownerInfo'
import EWarranty from './components/eWarranty'
import OtherInfo from './components/otherInfo'

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('x-button', XButton)
Vue.component('my-logo', MyLogo)
Vue.component('my-footer', MyFooter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/step',
    component: Step
  },
  {
    path: '/payReady',
    component: PayReady
  },
  {
    path: '/paySuccess',
    component: PaySuccess
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/carInfo',
    component: CarInfo
  },
  {
    path: '/ownerInfo',
    component: OwnerInfo
  },
  {
    path: '/eWarranty',
    component: EWarranty
  },
  {
    path: '/otherInfo',
    component: OtherInfo
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
