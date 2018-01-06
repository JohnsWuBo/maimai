// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

import shouye from '@/components/shouye'
Vue.use(shouye)
import hed from '@/components/hed'
Vue.use(hed)
import Banner from '@/components/BannerNav/index'
Vue.use(Banner)
import tejia from '@/components/Tejia/index'
Vue.use(tejia)
import kuai from '@/components/Kuai/index'
Vue.use(kuai)
import pai from '@/components/pailou/index'
Vue.use(pai)
import foot from '@/components/Foots/index'
Vue.use(foot)
import LoginD from '@/components/LoginD/index'
Vue.use(LoginD)
import Login from '@/components/Login/index'
Vue.use(Login)
import Shop from '@/components/shop/index'
Vue.use(Shop)
import FootsC from '@/components/FootsC/index'
Vue.use(FootsC)
import gouwucheC from '@/components/gouwuche/index'
Vue.use(gouwucheC)
Vue.filter('w',function(v){
	let index = v.indexOf('F');
	
	return v.slice(index+1)
})

Vue.prototype.$ = axios
axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
