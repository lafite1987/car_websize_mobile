import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Groupshop from '@/components/Groupshop'
import Mycenter from '@/components/Mycenter'
import Myorder from '@/components/Myorder'
import Mymsg from '@/components/Mymsg'
import Mymsgcontent from '@/components/Mymsgcontent'
import Activitydetails from '@/components/Activitydetails'
import Addorder from '@/components/Addorder'
import Myshare from '@/components/Myshare'
import Deliveryaddress from '@/components/Deliveryaddress'
import Audeliveryaddress from '@/components/Audeliveryaddress'
import Paymentsuccess from '@/components/Paymentsuccess'
import Integralshop from '@/components/Integralshop'
import Involvementpeople from '@/components/Involvementpeople'
import Addorderpeople from '@/components/Addorderpeople'
import Addresslist from '@/components/Addresslist'
import Mydata from '@/components/Mydata'
import Updataname from '@/components/Updataname'

Vue.use(Router)
export default new Router({
  routes: [
      {
      path: '/',
      name: 'login',//登录
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/groupshop',
      name: 'groupshop',//团购活动列表
      component: Groupshop,
      meta: {
        title: '活动列表'
      }
    },
    {
      path: '/mycenter',
      name: 'mycenter',//个人中心
      component: Mycenter,
      meta: {
        title: '个人中心',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/myorder',
      name: 'myorder',//我的订单
      component: Myorder,
      meta: {
        title: '我的订单'
      }
    },
    {
      path: '/mymsg',
      name: 'mymsg',//我的消息
      component: Mymsg,
      meta: {
        title: '我的消息',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/mymsgcontent',
      name: 'mymsgcontent',//我的消息内容
      component: Mymsgcontent,
      meta: {
        title: '我的消息',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/activitydetails',
      name: 'activitydetails',//团购活动详情
      component: Activitydetails,
      meta: {
        title: '活动详情'
      }
    },{
      path: '/activitydetails_ex',
      name: 'activitydetails_ex',//团购活动详情
      component: Activitydetails_ex,
      meta: {
        title: '活动详情'
      }
    },
    {
      path: '/addorder',
      name: 'addorder',//添加订单
      component: Addorder,
      meta: {
        title: '添加订单'
      }
    },{
      path: '/addorder_ex',
      name: 'addorder_ex',//添加订单
      component: Addorder_ex,
      meta: {
        title: '添加订单'
      }
    },
    {
      path: '/myshare',
      name: 'myshare',//我的分享
      component: Myshare,
      meta: {
        title: '我的分享',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/deliveryaddress',
      name: 'deliveryaddress',//收货地址
      component: Deliveryaddress,
      meta: {
        title: '收货地址',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/audeliveryaddress',
      name: 'audeliveryaddress',//新增or修改收货地址
      component: Audeliveryaddress,
      meta: {
        title: '收货地址',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/paymentsuccess',
      name: 'paymentsuccess',//支付成功
      component: Paymentsuccess,
      meta: {
        title: '支付成功',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/integralshop',
      name: 'integralshop',//积分商城
      component: Integralshop,
      meta: {
        title: '积分商城'
      }
    },
    {
      path: '/involvementpeople',
      name: 'involvementpeople',//分享的活动的参与人数
      component: Involvementpeople,
      meta: {
        title: '参与人数'
      }
    },
    {
      path: '/addorderpeople',
      name: 'addorderpeople',//分享的活动的下单人数
      component: Addorderpeople,
      meta: {
        title: '下单人数',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/addresslist',
      name: 'addresslist',//城市选择
      component: Addresslist,
      meta: {
        title: '城市选择'
      }
    },
    {
      path: '/mydata',
      name: 'mydata',//我的资料
      component: Mydata,
      meta: {
        title: '我的资料',
        requireAuth: true,//需要登录
      }
    },
    {
      path: '/updataname',
      name: 'updataname',//修改姓名
      component: Updataname,
      meta: {
        title: '修改姓名',
        requireAuth: true,//需要登录
      }
    }

  ]
})
