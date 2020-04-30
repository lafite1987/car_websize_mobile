var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var bridge_={
  init: function(callback) {
    if (!isiOS) {
      if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
      } else {
        document.addEventListener(
          'WebViewJavascriptBridgeReady',
          function() {
            callback(WebViewJavascriptBridge)
          },
          false
        );
      }
    } else {
    /*  if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
      }
      if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
      }
      window.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe)
      }, 0)*/
    }
  },
  first: function() {
    if (!isiOS) {
      var _this = this;
      _this.init(function(bridge) {
        bridge.init(function(message, responseCallback) {
          console.log(message+responseCallback);
        })
      })
    }
  },
  registerHandler: function(name, fun) {
    var _this = this;
    _this.init(function(bridge) {
      bridge.registerHandler(name, fun);
    })
  },
  callHandler: function(name, data, fun) {
    var _this = this;
    _this.init(function(bridge) {
      bridge.callHandler(name, data, fun);
    })
  }
}
bridge_.first();
/**
 * 函数描述：webView调用JS事件
 * jsBridge.registerHandler(method, callBack(response));
 * @param method {string} 方法名
 * @return {Object} 回调
 */
var JsBridge = {
  chjInit:function (callback) {
    return new Promise(resolve=>{
      window.init=function (responseData) {resolve(responseData);delete window.init;};
      if(isiOS){
        try {window.device.didFinishLoad();} catch(err) {}
      }else{
        bridge_.registerHandler('chjInit',function (responseData) {resolve(responseData);});
        bridge_.registerHandler('setInit',function (responseData) {});
      }
    });
  },
}
export default JsBridge




