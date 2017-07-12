import Vue from 'vue'
import Router from 'vue-router'
import Shouye from '@/components/Shouye'
import Share from '@/components/Share'
import Lists from '@/components/Lists'
import Dingdan from '@/components/Dingdan'
import Wode from '@/components/Wode'
import Detail from '@/components/childpage/Detail'
import Myorder from '@/components/childpage/myOrder/myOrder_head.vue'
import Listpage from '@/components/lists/Listpage.vue'
import Listpage1 from '@/components/lists/Listpage1.vue'
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
    {
      path: '/listpage',
      name: 'Listpage',
      component: Listpage
    },
    {
      path: '/listpage1',
      name: 'Listpage1',
      component: Listpage1
    },
    // 以下内容纯属测试用
    {
      path: '/myorder',
      name: 'Myorder',
      component: Myorder
    }
  ]
})
