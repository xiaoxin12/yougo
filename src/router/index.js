import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye'
import Detail from '@/components/Detail'
import Lists from '@/components/Lists'
import Dingdan from '@/components/Dingdan'
import Wode from '@/components/Wode'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/dingdan',
      name: 'Dingdan',
      component: Dingdan
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode
    }
  ]
})
