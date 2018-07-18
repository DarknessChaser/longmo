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

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.component('x-button', XButton)
Vue.component('my-logo', MyLogo)
Vue.component('my-footer', MyFooter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/step',
  component: Step
}, {
  path: '/payReady',
  component: PayReady
}]

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
