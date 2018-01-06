import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye'
import loginD from '@/components/LoginD/LoginD'
import shops from '@/components/Shops'
import gouwuche from '@/components/gouwuche/gouwuche'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouye',
      component: shouye
    },
    {
    	path : '/login',
    	component: loginD
    },
    {
    	path : '/shops',
    	component : shops
    },
    {
    	path : '/gouwuche',
    	component : gouwuche
    },
    {
    	path : '*',
    	redirect: '/'
    }
    
  ]
//mode : 'history'
})
