var strategies = {
  isEmpty: function(str, msg) {
    if (
      typeof str == "undefined" ||
      str == null ||
      str == "" ||
      str == "undefined" ||
      str == "null"
    ) {
      return msg;
    }
  },
  isPhone: function(value, msg) {
    var pattern = /^(1)[0-9]{10}$/;
    if (!pattern.test(value)) {
      return msg;
    }
  },
  isNumeric: function(value, msg) {
    var pattern = /^[0-9]*$/;
    if (!pattern.test(value)) {
      return msg;
    }
  }
};
var Validator = function() {
  this.cache = [];
};
Validator.prototype.add = function(dom, rules) {
  var self = this;
  for (var i = 0, rule; (rule = rules[i++]); ) {
    (function(rule) {
      //闭包 延长rule的生命周期
      var strategyAry = rule.strategy.split(":");
      var msg = rule.msg;
      self.cache.push(function() {
        var strategy = strategyAry.shift();
        strategyAry.unshift(dom);
        strategyAry.push(msg);
        return strategies[strategy].apply("", strategyAry);
      });
    })(rule);
  }
};
Validator.prototype.start = function() {
  for (var i = 0, validatirFunc; (validatirFunc = this.cache[i++]); ) {
    var msg = validatirFunc();
    if (msg) {
      return msg;
    }
  }
};

var isEmpty = function(str) {
  return (
    typeof str == "undefined" ||
    str == null ||
    str == "" ||
    str == "undefined" ||
    str == "null"
  );
};
var isNotEmpty = function(str) {
  return !isEmpty(str);
};
var isPhone = function(strValue) {
  var pattern = /^(1)[0-9]{10}$/;
  return pattern.test(strValue);
};
var isNumeric = function(strValue) {
  if (isEmpty(strValue)) return false;
  var pattern = /^[0-9]*$/;
  return pattern.test(strValue);
};
Date.prototype.format = function(fmt) {
  //author: meizz
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
//修改标题
var setWechatTitle = function(title) {
  document.title = title;
  var mobile = navigator.userAgent.toLowerCase();
  if (mobile.match(/MicroMessenger/i) == "micromessenger") {
    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    // 替换成站标favicon路径或者任意存在的较小的图片即可
    // iframe.setAttribute('src', './favicon.ico')
    var iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener("load", iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener("load", iframeCallback);
    document.body.appendChild(iframe);
  }
};

//清除chj 登陆信息
var cancellation_clear = function() {
  for (var i = localStorage.length - 1; i >= 0; i--) {
    var key = localStorage.key(i);
    if (key.indexOf(projectOnlyName) >= 0) {
      if (key.indexOf("open_id") >= 0) continue;
      localStorage.removeItem(key);
    }
  }
  for (var i = sessionStorage.length - 1; i >= 0; i--) {
    var key = sessionStorage.key(i);
    if (key.indexOf(projectOnlyName) >= 0) {
      if (key.indexOf("open_id") >= 0) continue;
      sessionStorage.removeItem(key);
    }
  }
};
/**p==需要拷贝的对象 必填
 ** c==返回的对象
 ***/
var deepCopy = function(p, c) {
  //深度拷贝
  var c = c || {};
  for (var i in p) {
    if (typeof p[i] === "object") {
      c[i] = p[i].constructor === Array ? [] : {};
      deepCopy(p[i], c[i]);
    } else {
      c[i] = p[i];
    }
  }
  return c;
};
// url ==需要加载的url callback==加载完成的回调 id 这次加载的ID 当ID 重复时会删除上一个
var getScript = function(url, callback, id) {
  //不支持IE  为移动端使用
  if (!url) {
    console.warn("异步加载的url为空，不执行加载");
    return false;
  }
  var oldjs = document.getElementById(id);
  if (oldjs) oldjs.parentNode.removeChild(oldjs);
  var script_ = document.createElement("script");
  script_.src = url;
  script_.type = "text/javascript";
  script_.id = id || "";
  document.body.appendChild(script_);
  if (callback) {
    script_.onload = function() {
      callback();
    };
  }
};
var getUUID = function() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
    c
  ) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};
var not_wx = ["activitybymoney", "activitydetails"]; //不校验微信的页面
//服务器路径
var Url_ = "https:" == document.location.protocol ? "https://" : "http://";
var serviceUrl=Url_+'www.isales.cn/dmb';//测试服务器地址
 // var serviceUrl = "https:" == document.location.protocol ? "https://www.isales.cn:443/isalesbady" : "http://www.isales.cn:80/isalesbady";   //正式
//var interfaceUrl=Url_+"www.91lhc.cn/chj/gateWay/pubCtrl.do";//测试
var interfaceUrl=Url_+"www.chehuiji.cn/zx/gateWay/pubCtrl.do";//正式
//var projectOnlyName = "_chehuiji"; //正式
 var projectOnlyName='_chj';//测试
export default {
  Validator: Validator,
  isEmpty: isEmpty,
  isNotEmpty: isNotEmpty,
  isPhone: isPhone,
  isNumeric: isNumeric,
  setWechatTitle: setWechatTitle,
  serviceUrl: serviceUrl,
  projectOnlyName: projectOnlyName,
  cancellation_clear: cancellation_clear,
  deepCopy: deepCopy,
  getScript: getScript,
  not_wx: not_wx,
  getUUID: getUUID,
  interfaceUrl:interfaceUrl
};
