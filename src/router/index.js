import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye'
import Share from '@/components/Share'
import Lists from '@/components/Lists'
import Dingdan from '@/components/Dingdan'
import Wode from '@/components/Wode'
import Detail from '@/components/childpage/Detail'
import Myorder from '@/components/childpage/myOrder/myOrder_head.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shouye',
      component: Shouye
    },
    {
      path: '/share',
      name: 'Share',
      component: Share
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
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    // 以下内容纯属测试用
    {
      path: '/myorder',
      name: 'Myorder',
      component: Myorder
    }
  ]
})
