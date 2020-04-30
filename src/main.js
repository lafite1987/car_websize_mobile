// The Vue build version to load with the `import` command

import Vue from "vue"; //加载框架
import App from "./App";
import router from "./router"; //加载路由
import util from "./plugins/util/util"; //加载帮助类
import Fingerprint from "fingerprintjs"; //浏览器唯一ID
import weui from "weui.js";
import axios from "axios"; //加载数据请求
import wx from "weixin-js-sdk";
import "./plugins/util/service"; //加载ajax 公共接口
import "weui/dist/style/weui.min.css"; //加载微信css
import "./css/style.css"; //加载css
import "./css/new.styl";

//import Swiper from 'vue-awesome-swiper';
//import './swiper/dist/css/swiper.css';

//Vue.use(Swiper)

//import './swiper/dist/css/swiper.css';
//import './swiper/dist/js/swiper.js';

// import vConsole from 'vconsole'
// new vConsole();
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$util", { value: util }); //把util 加入到Vue对象里面
Object.defineProperty(Vue.prototype, "$weui", { value: weui }); //把weui.js 加入到Vue对象里面
Object.defineProperty(Vue.prototype, "$wx", { value: wx }); //把微信sdk 加入到Vue对象里面
Object.defineProperty(Vue.prototype, "$http", { value: axios }); //把axios 加入到Vue对象里面
var url = window.location.href;
if (url.indexOf("from=toutiao") === -1) {
  if (url.indexOf("from=") != -1 || url.indexOf("isappinstalled=") != -1) {
    window.location.href = url.split("?")[0] + "#" + url.split("#")[1]; //.substring(1)
  }
}

//本地开发 不校验微信浏览器
var url = window.location.href;
var is_wx = true;
// if (url.indexOf("www.isales.cn") >= 0) {
//   //如果是服务器 需要判断微信浏览器
//   var is_ok = true;
//   for (var i = 0; i < util.not_wx.length; i++) {
//     //如果是指定的页面不校验
//     if (url.indexOf(util.not_wx[i]) >= 0) {
//       is_ok = false;
//       break;
//     }
//   }
//   if (is_ok) {
//     var ua = navigator.userAgent.toLowerCase();
//     var isWeixin = ua.indexOf("micromessenger") != -1;
//     var isAndroid = ua.indexOf("android") != -1;
//     var isIos = ua.indexOf("iphone") != -1 || ua.indexOf("ipad") != -1;
//     if (!isWeixin && !window.device) {
//       document.head.innerHTML =
//         '<title>抱歉，出错了</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"><link rel="stylesheet" type="text/css" href="https://res.wx.qq.com/open/libs/weui/0.4.1/weui.css">';
//       document.body.innerHTML =
//         '<div class="weui_msg"><div class="weui_icon_area"><i class="weui_icon_info weui_icon_msg"></i></div><div class="weui_text_area"><h4 class="weui_msg_title">请在微信客户端打开链接</h4></div></div>';
//       //  is_wx=false;//非微信在继续执行
//     }
//   }
// }
if (is_wx) init();
function init() {
  new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
  });
}
/**生成唯一标识**/
(function() {
  var device_id = new Fingerprint().get();
  localStorage.setItem("device_id", device_id);
})();

/**登录状态拦截**/
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem("user_id" + util.projectOnlyName)) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath, v: 1 } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});
/**页面跳转修改title**/
router.afterEach((to, from) => {
  let title = to.meta.title;
  util.setWechatTitle(title);
});
