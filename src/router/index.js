import Vue from "vue";
import Router from "vue-router";
const Home = resolve => {
  require(["../views/home.vue"], resolve);
};
const news = resolve => {
  require(["../views/news.vue"], resolve);
};
const Broadcast = resolve => {
  require(["../views/Broadcast.vue"], resolve);
};
const newsdetail = resolve => {
  require(["../views/newsdetail.vue"], resolve);
};
const Login = resolve => {
  require(["../views/Login.vue"], resolve);
};
const Groupshop = resolve => {
  require(["../views/Groupshop.vue"], resolve);
};
const Mycenter = resolve => {
  require(["../views/Mycenter.vue"], resolve);
};
const Myorder = resolve => {
  require(["../views/Myorder.vue"], resolve);
};
const Mymsg = resolve => {
  require(["../views/Mymsg.vue"], resolve);
};
const Mymsgcontent = resolve => {
  require(["../views/Mymsgcontent.vue"], resolve);
};
const Activitydetails = resolve => {
  require(["../views/Activitydetails.vue"], resolve);
};
const Activitydetails_ex = resolve => {
  require(["../views/Activitydetails_ex.vue"], resolve);
};
const Addorder = resolve => {
  require(["../views/Addorder.vue"], resolve);
};
const Addorder_ex = resolve => {
  require(["../views/Addorder_ex.vue"], resolve);
};
const Myshare = resolve => {
  require(["../views/Myshare.vue"], resolve);
};
const Deliveryaddress = resolve => {
  require(["../views/Deliveryaddress.vue"], resolve);
};
const Audeliveryaddress = resolve => {
  require(["../views/Audeliveryaddress.vue"], resolve);
};
const Paymentsuccess = resolve => {
  require(["../views/Paymentsuccess.vue"], resolve);
};
const Integralshop = resolve => {
  require(["../views/Integralshop.vue"], resolve);
};
const Involvementpeople = resolve => {
  require(["../views/Involvementpeople.vue"], resolve);
};
const Addorderpeople = resolve => {
  require(["../views/Addorderpeople.vue"], resolve);
};
const Addresslist = resolve => {
  require(["../views/Addresslist.vue"], resolve);
};
const Mydata = resolve => {
  require(["../views/Mydata.vue"], resolve);
};
const Updataname = resolve => {
  require(["../views/Updataname.vue"], resolve);
};
const Orderpayment = resolve => {
  require(["../views/Orderpayment.vue"], resolve);
};
const Exchangerecord = resolve => {
  require(["../views/Exchangerecord.vue"], resolve);
};
const Exchangesuccess = resolve => {
  require(["../views/Exchangesuccess.vue"], resolve);
};
const Integralrule = resolve => {
  require(["../views/Integralrule.vue"], resolve);
};
const Exchangeluck = resolve => {
  require(["../views/Exchangeluck.vue"], resolve);
};
const Winningrecord = resolve => {
  require(["../views/Winningrecord.vue"], resolve);
};
const Exchangeshare = resolve => {
  require(["../views/Exchangeshare.vue"], resolve);
};
const Commoditydetails = resolve => {
  require(["../views/Commoditydetails.vue"], resolve);
};
const Sceneactivityturntable = resolve => {
  require(["../views/Sceneactivityturntable.vue"], resolve);
};
const Aboutwe = resolve => {
  require(["../views/Aboutwe.vue"], resolve);
};
const Easejs = resolve => {
  require(["../views/Easejs.vue"], resolve);
};
const Activitybymoney = resolve => {
  require(["../views/Activitybymoney.vue"], resolve);
};
const Activitybymoney_ys = resolve => {
  //给爱售宝演示无数据
  require(["../views/Activitybymoney_ys.vue"], resolve);
};
const Game = resolve => {
  //
  require(["../views/Game.vue"], resolve);
};
const GameResult = resolve => {
  //
  require(["../views/GameResult.vue"], resolve);
};
const Moneygame = resolve => {
  //
  require(["../views/Moneygame.vue"], resolve);
};

const ParticularSell = resolve => {
  //
  require(["../views/ParticularSell.vue"], resolve);
};
const ParticularSellDetails = resolve => {
  //
  require(["../views/ParticularSellDetails.vue"], resolve);
};
const ParticularSellSign = resolve => {
  //
  require(["../views/ParticularSellSign.vue"], resolve);
};
const Rq = resolve => {
  //
  require(["../views/RqCode.vue"], resolve);
};


Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "特惠",
        requireAuth: false
      }
    },
    {
      path: "/rq",
      name: "Rq",
      component: Rq,
      meta: {
        title: "预约提醒",
        requireAuth: false
      }
    },
   /* {
      path: "/",
      name: "groupshop", //登录
      component: Groupshop,
      meta: {
        title: "汽车团购"
      }
    },*/
    {
      path: "/Broadcast",
      name: "Broadcast",
      component: Broadcast,
      meta: {
        title: "直播"
      }
    },
    {
      path: "/news",
      name: "news",
      component: news,
      meta: {
        title: "资讯"
      }
    },
    {
      path: "/newsdetail",
      name: "newsdetail",
      component: newsdetail,
      meta: {
        title: "资讯详情"
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "登录"
      }
    },
    {
      path: "/groupshop",
      name: "groupshop", //团购活动列表
      component: Groupshop,
      meta: {
        title: "活动列表"
      }
    },
    {
      path: "/mycenter",
      name: "mycenter", //个人中心
      component: Mycenter,
      meta: {
        title: "个人中心",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/myorder",
      name: "myorder", //我的订单
      component: Myorder,
      meta: {
        title: "我的订单",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/mymsg",
      name: "mymsg", //我的消息
      component: Mymsg,
      meta: {
        title: "我的消息",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/mymsgcontent",
      name: "mymsgcontent", //我的消息内容
      component: Mymsgcontent,
      meta: {
        title: "我的消息",
        requireAuth: true //需要登录
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
      path: "/myshare",
      name: "myshare", //我的推荐
      component: Myshare,
      meta: {
        title: "我的推荐",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/deliveryaddress",
      name: "deliveryaddress", //收货地址
      component: Deliveryaddress,
      meta: {
        title: "收货地址",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/audeliveryaddress",
      name: "audeliveryaddress", //新增or修改收货地址
      component: Audeliveryaddress,
      meta: {
        title: "收货地址",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/paymentsuccess",
      name: "paymentsuccess", //支付成功
      component: Paymentsuccess,
      meta: {
        title: "支付成功",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/integralshop",
      name: "integralshop", //积分商城
      component: Integralshop,
      meta: {
        title: "积分商城",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/involvementpeople",
      name: "involvementpeople", //分享的活动的参与人数
      component: Involvementpeople,
      meta: {
        title: "参与人数",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/addorderpeople",
      name: "addorderpeople", //分享的活动的下单人数
      component: Addorderpeople,
      meta: {
        title: "下单人数",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/addresslist",
      name: "addresslist", //城市选择
      component: Addresslist,
      meta: {
        title: "城市选择"
      }
    },
    {
      path: "/mydata",
      name: "mydata", //我的资料
      component: Mydata,
      meta: {
        title: "我的资料",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/updataname",
      name: "updataname", //修改姓名
      component: Updataname,
      meta: {
        title: "修改姓名",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/orderpayment",
      name: "orderpayment", //订单支付
      component: Orderpayment,
      meta: {
        title: "订单支付",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/exchangerecord",
      name: "exchangerecord", //兑换记录
      component: Exchangerecord,
      meta: {
        title: "兑换记录",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/exchangesuccess",
      name: "exchangesuccess", //兑换成功
      component: Exchangesuccess,
      meta: {
        title: "兑换成功",
        requireAuth: true //需要登录
      }
    },
    {
      path: "/integralrule",
      name: "integralrule", //积分规则
      component: Integralrule,
      meta: {
        title: "积分规则",
        requireAuth: false
      }
    },
    {
      path: "/exchangeluck",
      name: "exchangeluck", //积分抽奖
      component: Exchangeluck,
      meta: {
        title: "积分抽奖",
        requireAuth: true
      }
    },
    {
      path: "/winningrecord",
      name: "winningrecord", //积分记录
      component: Winningrecord,
      meta: {
        title: "积分记录",
        requireAuth: true
      }
    },
    {
      path: "/exchangeshare",
      name: "exchangeshare", //积分抽奖
      component: Exchangeshare,
      meta: {
        title: "积分抽奖",
        requireAuth: false
      }
    },
    {
      path: "/commoditydetails",
      name: "commoditydetails", //商品详情
      component: Commoditydetails,
      meta: {
        title: "商品详情",
        requireAuth: false
      }
    },
    {
      path: "/sceneactivityturntable",
      name: "sceneactivityturntable", //现场活动游戏界面之大转盘
      component: Sceneactivityturntable,
      meta: {
        title: "大转盘",
        requireAuth: false
      }
    },
    {
      path: "/aboutwe",
      name: "aboutwe",
      component: Aboutwe,
      meta: {
        title: "关于我们",
        requireAuth: false
      }
    },
    {
      path: "/easejs",
      name: "easejs",
      component: Easejs,
      meta: {
        title: "数钱游戏",
        requireAuth: false
      }
    },
    {
      path: "/activitybymoney",
      name: "activitybymoney",
      component: Activitybymoney,
      meta: {
        title: "活动中心",
        requireAuth: false
      }
    },
    {
      path: "/activitybymoney_ys",
      name: "activitybymoney_ys",
      component: Activitybymoney_ys,
      meta: {
        title: "活动中心--演示",
        requireAuth: false
      }
    },
    {
      path: "/game",
      name: "game",
      component: Game,
      meta: {
        title: "数钱游戏",
        requireAuth: false
      }
    },
    {
      path: "/gameresult",
      name: "gameresult",
      component: GameResult,
      meta: {
        title: "数钱游戏",
        requireAuth: false
      }
    },
    {
      path: "/moneygame",
      name: "moneygame",
      component: Moneygame,
      meta: {
        title: "数钱游戏",
        requireAuth: false
      }
    },
    {
      path: "/particularsell",
      name: "particularsell",
      component: ParticularSell,
      meta: {
        title: "特卖",
        requireAuth: false
      }
    },
    {
      path: "/particularselldetails",
      name: "particularselldetails",
      component: ParticularSellDetails,
      meta: {
        title: "活动详情",
        requireAuth: false
      }
    },
    {
      path: "/particularsellsign",
      name: "particularsellsign",
      component: ParticularSellSign,
      meta: {
        title: "报名",
        requireAuth: false
      }
    }
  ]
});
