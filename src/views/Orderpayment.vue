<template>
  <div id="orderpayment">
    <div class="head">
      <a class="head-jt" @click="go_back"></a>
      <div class="head-text">订单支付</div>
    </div>
    <div class="center">
      <div class="grzx-list">
        <ul class="grzx-ul">
          <li class="hassub">
            <div class="orderpay_li">
              <label class="orderpay_li__label">订单名称</label>
              <span class="orderpay_li__value">{{title}}</span>
            </div>
          </li>
          <li class="hassub">
            <div class="orderpay_li">
              <label class="orderpay_li__label">订单金额</label>
              <span class="orderpay_li__value color-h">{{price_amt}}</span>
            </div>
          </li>
          <div class="hr hassub"></div>
          <li class="hassub pay-type">支付方式</li>
          <li class="hassub">
            <div class="orderpay_li_ts haspaytb">微信支付</div>
          </li>
        </ul>
        <div class="pay-padd" :class="{'click':is_tiing}" @click="pay">确认支付</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderpayment",
  data() {
    return {
      title: "",
      order_id: "",
      price_amt: "",
      is_tiing: false,
      pay_from: 0, //0==来自订单 1==来自积分兑换
      cmdid: "88011",
      groupbuy_id: ""
    };
  },
  created() {
    this.pay_from =
      sessionStorage.getItem("pay_from" + this.$util.projectOnlyName) || "0"; //
    if (this.pay_from == "0") {
      this.order_id = this.$route.query.order_id;
      if (this.$util.isEmpty(this.order_id)) {
        this.$router.go(-1);
        this.$weui.alert("订单号为空");
      }
      this.setinit(this.order_id);
      this.cmdid = "88011";
    } else {
      this.cmdid = "88025";
      this.title = sessionStorage.getItem("title" + this.$util.projectOnlyName);
      this.price_amt = sessionStorage.getItem(
        "price_amt" + this.$util.projectOnlyName
      );
    }
  },
  destroyed() {
    sessionStorage.removeItem("title" + this.$util.projectOnlyName);
    sessionStorage.removeItem("price_amt" + this.$util.projectOnlyName);
    sessionStorage.removeItem("pay_from" + this.$util.projectOnlyName);
  },
  methods: {
    pay() {
      if (this.is_tiing) return false;
      var dat = {
        order_id: this.order_id,
        order_num: this.$route.query.order_num,
        shoporder_id: this.$route.query.shoporder_id || ""
      };
      let slef = this; // this 异步指向变更
      slef.is_tiing = true;
      this.Invok(this.cmdid, dat, function(data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          slef.is_tiing = false;
          return false;
        } else {
          var val = data.success;
          function onBridgeReady() {
            WeixinJSBridge.invoke(
              "getBrandWCPayRequest",
              {
                appId: val.appId, //公众号名称，由商户传入
                timeStamp: val.timeStamp, //时间戳，自1970年以来的秒数
                nonceStr: val.nonceStr, //随机串
                package: val.package, //订单详情扩展字符串
                signType: val.signType, //微信签名方式：
                paySign: val.sign //微信签名
              },
              function(res) {
                slef.is_tiing = false;
                if (res.err_msg == "get_brand_wcpay_request:ok") {
                  //使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回 ok，但并不保证它绝对可靠。
                  if (slef.pay_from == "1") {
                    slef.$router.push({
                      path: "/exchangesuccess",
                      query: { order_num: slef.obj.order_num }
                    }); //页面跳转
                  } else {
                    slef.$router.push({
                      path: "/paymentsuccess",
                      query: { groupbuy_id: slef.groupbuy_id,price_amt:this.price_amt }
                    }); //页面跳转
                  }
                } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                } else {
                  slef.$weui.alert(res.err_msg);
                }
              }
            );
          }
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) {
              document.addEventListener(
                "WeixinJSBridgeReady",
                onBridgeReady,
                false
              );
            } else if (document.attachEvent) {
              document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
              document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
            }
          } else {
            onBridgeReady();
          }
        }
      });
    },
    go_back() {
      this.$router.go(-1);
    },
    setinit(order_id) {
      //初始化数据
      let slef = this; // this 异步指向变更
      var dat = {
        order_id: order_id
      };
      this.Invok("88007", dat, function(data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        } else {
          var val = data.success;
          slef.title = val.title;
          slef.price_amt = val.price_amt;
          slef.groupbuy_id = val.groupbuy_id || "";
        }
      });
    }
  }
};
</script>
