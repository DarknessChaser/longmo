// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 调用库
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

// 调用模板
import {dateFormat, md5, XButton, Group, AlertPlugin} from 'vux'
import MyLogo from './components/logo'
import MyFooter from './components/pageFooter'

// 调用页面
import App from './App'
import Home from './components/HelloFromVux'
import Step from './components/step'
import Step1 from './components/step1'
import Step2 from './components/step2'
import Step3 from './components/step3'
import Step4 from './components/step4'
import PayReady from './components/payReady'
import PaySuccess from './components/paySuccess'
import Login from './components/login'
import CarInfo from './components/carInfo'
import OwnerInfo from './components/ownerInfo'
import EWarranty from './components/eWarranty'
import OtherInfo from './components/otherInfo'
import ReviewSuccess from './components/reviewSuccess'
import ReviewFail from './components/reviewFail'
import AftermarketLogin from './components/aftermarketLogin'
import AftermarketCarInfo from './components/aftermarketCarInfo'
import ApplicationReady from './components/applicationReady'
import ApplicationComplete from './components/applicationComplete'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(AlertPlugin)

Vue.component('x-button', XButton)
Vue.component('group', Group)
Vue.component('my-logo', MyLogo)
Vue.component('my-footer', MyFooter)

const store = new Vuex.Store({
  state: {
    token: md5('longmo' + dateFormat(new Date(), 'YYYYMMDD'))
  }
})

const routes = [
  {
    path: '/',
    component: Step1
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/step',
    component: Step
  },
  {
    path: '/step1',
    component: Step1
  },
  {
    path: '/step2',
    component: Step2
  },
  {
    path: '/step3',
    component: Step3
  },
  {
    path: '/step4',
    component: Step4
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
  },
  {
    path: '/reviewSuccess',
    component: ReviewSuccess
  },
  {
    path: '/reviewFail',
    component: ReviewFail
  },
  {
    path: '/aftermarketLogin',
    component: AftermarketLogin
  },
  {
    path: '/aftermarketCarInfo',
    component: AftermarketCarInfo
  },
  {
    path: '/applicationReady',
    component: ApplicationReady
  },
  {
    path: '/applicationComplete',
    component: ApplicationComplete
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
  store,
  render: h => h(App)
}).$mount('#app-box')
