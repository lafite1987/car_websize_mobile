<template>
  <div id>
    <div class="tg-hd-title">
      <!-- <a  :style="{backgroundImage:'url(' + obj.pic_url + ')'}"/>-->
      <a :style="{backgroundImage:'url(' + obj.pic_url + ')'}" v-if="obj.pic_url"></a>
      <div class="tg-hd-title-div" v-else></div>
    </div>
    <div class="tg-hd-pr">
      <div class="left">已报名人数：{{(obj.people_num+156||0)}}</div> 
      <div class="right color-h">{{obj.surplus_date}}</div>
    </div>
    <div class="tg-hd-tilte-text hassub">
      <p class="h3">{{obj.title}}</p>
      <p class="h4">{{obj.title_sub}}</p>
    </div>
    <div class="tg-hd-tilte-text hassub">
      <span class="tg-hd-tilte-money">¥{{obj.price_amt}}</span>
      <span class="cyj">
        诚意金
        <br>
        {{obj.convert}}
      </span>
    </div>
    <div class="tg-hd-tilte-ul-div hassub hassub-top">
      <ul class="tg-hd-tilte-ul">
        <li>低价保证</li>
        <li>诚意金可退</li>
        <li>豪礼相送</li>
        <li>限时特卖</li>
      </ul>
    </div>
    <div class="tg-gu-xx" v-show="hassaleuser_id">
      <div class="tg-gu-a left">
        专属
        <br>购车顾问
      </div>
      <div class="gu-xx left">
        <p class="p-name">姓名：{{obj.saleuser_name}}</p>
        <p>{{obj.station_name}}</p>
      </div>
      <a class="call-phone right" :href="tel"></a>
    </div>
    <div class="tg-hdgzsm">
      <div class="tg-hdgzsm-title hassub">活动详情</div>
      <div class="tg-sygz">
        <div class="tg-sygz-data">有效期：{{obj.start_time}}至{{obj.end_time}}</div>
        <!-- <div class="tg-sygz-p">使用规则：</div> -->
        <div v-html="obj.content" class="tg-sygz-content"></div>
      </div>
      <div class="tg-sygz-foot">1</div>
    </div>
  
    <!--<div class="tg-gu-xx hasmargin-top">-->
    <!--<div class="tg-hdgzsm-title hassub ">店铺信息</div>-->
    <!--<div class="gu-xx left">-->
    <!--<p class="p-name haswz">{{obj.station_name||"测试"}}</p>-->
    <!--<p>{{obj.groupbuy_province}}{{obj.groupbuy_city}}{{obj.groupbuy_county}}{{obj.groupbuy_address}}</p>-->
    <!--</div>-->
    <!--&lt;!&ndash; <a class="yjdh left" @click="go_bd">一键导航</a>&ndash;&gt;-->
    <!--<a class="call-phone right" :href="tel_d"></a>-->
    <!--<a class="yjdh right" @click="go_bd">一键导航</a>-->
    <!--</div>-->
    <!-- <div class="tg-hdgzsm">
      <div
        class="tg-hdgzsm-title hassub"
        @click="show_sygz"
        :class="[is_sygz?'hasjt-p':'hasjt-p-f',{'has_bot':!is_sygz}]"
        :style="styleObject"
      >参与流程</div>
      <div v-show="is_sygz">
        <div class>
          <img src="../../assets/images/cklc_0.png" class="tg-hdgzsm-img">
        </div>
        <div class="tg-tkzc">
          <div class="tg-h2">诚意金退还政策</div>
          <p
            class="tg-tkzc-p1"
          >对于已报名缴纳诚意金的客户，在活动期间未下订：系统会在活动结束后7个工作日内将保证金原路退还给客户；如14个工作日后未收到退款，请联系客服。</p>
          <p class="tg-tkzc-p2">注意：缴纳诚意金参与活动的客户，已经下订但事后又产生退订：系统将无法退还诚意金，请联系所在经销商退还，敬请知悉。</p>
        </div>
      </div>
    </div> -->
    <div class="tg-foot">
      <div class>
        <a class="index-buttom-tg" :href="'tel:'+obj.saleuser_phone" v-if="obj.saleuser_phone">
          <div class="tg-kf"></div>
          <a>联系客服</a>
        </a>
        <a class="index-buttom-tg" :href="'tel:'+obj.bus_link_phone" v-else>
          <div class="tg-kf"></div>
          <a>联系客服</a>
        </a>
      </div>
      <a class="tg-foot-right" style="background-color:#b5b5b5" v-if="obj.order_status === 'AP'">已参与</a>
      <a
        class="tg-foot-right"
        style="background-color:#b5b5b5"
        v-else-if="obj.order_status === 'NP'"
      >未支付</a>
      <a
        class="tg-foot-right"
        style="background-color:#b5b5b5"
        v-else-if="obj.act_status ==='E'"
      >已结束</a>
      <a class="tg-foot-right" @click="goaddorder" v-else-if="obj.act_status==='P'">立即参与</a>
      <a class="tg-foot-right" style="background-color:#b5b5b5" v-else-if="obj.act_status==='N'">未开始</a>
    </div>
    <Gamepoput :show.sync="is_show" :userinfoid="userinfo_id" :tgmoneygameid="tg_moneygame_id"/>
  </div>
</template>
<script>
import Gamepoput from "../gamepoput";
export default {
  props: {
    dataList: {
      //控制是否显示暂无数据
      default: false,
      required: false
    }
  },
  components: { Gamepoput },
  data() {
    return {
      obj: {},
      is_show: false,
      tel: "javascript:void(0);",
      tel_d: "javascript:void(0);",
      userinfo_id: "",
      tg_moneygame_id: "",
      hassaleuser_id: false,
      to_device_id: "",
      to_user_id: "",
      is_sygz: true,
      styleObject: {
        transform: "",
        "-webkit-transform": ""
      }
    };
  },
  created() {
    //初始化数据
    let slef = this; // this 异步指向变更
    var groupbuy_id = this.dataList.groupbuy_id || "";
    if (this.$util.isEmpty(groupbuy_id)) {
      this.$weui.alert("活动ID为空", function() {
        slef.$router.push({ path: "/groupshop" }); //页面跳转
      });
    }
    this.to_device_id = this.dataList.to_device_id || "";
    this.to_user_id =
      this.dataList.to_user_id || this.dataList.saleuser_id || "";
    sessionStorage.setItem(
      "to_device_id" + this.$util.projectOnlyName,
      this.to_device_id
    );
    sessionStorage.setItem(
      "to_user_id" + this.$util.projectOnlyName,
      this.to_user_id
    );
    var data = {
      groupbuy_id: groupbuy_id, //	团购ID
      to_user_id: this.to_user_id //	销售顾问ID
    };
    this.get_init(data);
    const userinfo_id =
      localStorage.getItem("user_id" + this.$util.projectOnlyName) || "";
    setTimeout(() => {
      this.userinfo_id = userinfo_id;
    });
    this.pay_init({
      user_id: userinfo_id,
      groupbuy_id,
      open_id:
        localStorage.getItem("open_id" + this.$util.projectOnlyName) || "0" //
    });
  },
  mounted: function() {},
  methods: {
    //监听函数
    get_init: function(data_) {
      let slef = this; // this 异步指向变更
      this.Invok("88004", data_, function(data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        } else {
          slef.obj = data.success;
          if (data.success.saleuser_phone) slef.hassaleuser_id = true;
          if (data.success.saleuser_phone)
            slef.tel = "tel:" + data.success.saleuser_phone;
          if (data.success.bus_link_phone)
            slef.tel_d = "tel:" + data.success.bus_link_phone || "";
          slef.fenxi();
        }
      });
    },
    goaddorder: function() {
      if (localStorage.getItem("open_id" + this.$util.projectOnlyName)) {
        this.$router.push({
          path: "/addorder",
          query: {
            groupbuy_id: this.obj.groupbuy_id,
            to_device_id: this.to_device_id,
            to_user_id: this.to_user_id
          }
        }); //页面跳转
      } else {
        var redirect_uri =
          window.location.href.split("#")[0] +
          "#/addorder?groupbuy_id=" +
          this.obj.groupbuy_id +
          "&to_device_id=" +
          this.to_device_id +
          "&to_user_id=" +
          this.to_user_id;
        location.href =
          this.$util.serviceUrl +
          "/wechat/userAuth.do?redirectUri=" +
          encodeURIComponent(redirect_uri);
      }
    },
    show_sygz: function() {
      if (this.is_sygz) {
        this.is_sygz = false;
      } else {
        this.is_sygz = true;
      }
    },
    go_bd: function() {
      let slef = this; // this 异步指向变更
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(comeOn);
      } else {
        slef.$weui.alert("定位失败");
      }
      function comeOn(position) {
        var dz = slef.obj.groupbuy_county + "" + slef.obj.groupbuy_address;
        window.location.href =
          "https://api.map.baidu.com/direction?origin=latlng:" +
          position.coords.latitude +
          "," +
          position.coords.longitude +
          "|name:我的位置&destination=" +
          dz +
          "&mode=driving&region=" +
          slef.obj.groupbuy_city +
          "&output=html&src=yourCompanyName|yourAppName";
      }
    },
    fenxi: function() {
      let slef = this; // this 异步指向变更
      var jssdk_url = encodeURIComponent(window.location.href.split("#")[0]);
      slef.$http
        .get(
          slef.$util.serviceUrl +
            "/wechat/getJsapiTicket.do?ticketurl=" +
            jssdk_url
        )
        .then(
          response => {
            if (response.data) {
              var data = response.data;
              var appId = data.appId;
              var timestamp = data.timestamp;
              var nonceStr = data.noncestr;
              var signature = data.signature;
              var jsApiList = ["onMenuShareAppMessage", "onMenuShareTimeline"];
              //步骤二：通过config接口注入权限验证配置
              slef.$wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature, // 必填，签名，见附录1
                jsApiList: jsApiList // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
              //步骤三：通过ready接口处理成功验证
              slef.$wx.ready(function() {
                var forward_flag = slef.$util.getUUID(); // 有UUID 是转发 没有是访问
                slef.$wx.onMenuShareAppMessage({
                  title: slef.obj.title,
                  desc: slef.obj.title_sub,
                  link:
                    window.location.href.split("#")[0] +
                    "#/activitydetails?forward_flag=" +
                    forward_flag +
                    "&groupbuy_id=" +
                    slef.dataList.groupbuy_id +
                    "&to_device_id=" +
                    slef.to_device_id +
                    "&to_user_id=" +
                    (slef.to_user_id || ""),
                  imgUrl: slef.obj.pic_url
                });
                //分享到朋友圈
                slef.$wx.onMenuShareTimeline({
                  title: slef.obj.title,
                  link:
                    window.location.href.split("#")[0] +
                    "#/activitydetails?forward_flag=" +
                    forward_flag +
                    "&groupbuy_id=" +
                    slef.dataList.groupbuy_id +
                    "&to_device_id=" +
                    slef.to_device_id +
                    "&to_user_id=" +
                    (slef.to_user_id || ""),
                  imgUrl: slef.obj.pic_url
                });
              });
              //步骤四：通过error接口处理失败验证
              slef.$wx.error(function(res) {
                //杀菩提  练武注解
                var resStr = "签名信息验证失败:" + JSON.stringify(res);
                slef.$weui.alert(resStr);
              });
            } else {
              slef.$weui.alert(
                "获取微信接口调用参数错误,请刷新或重新进入页面!"
              );
            }
          },
          response => {
            slef.$weui.alert(response);
          }
        );
    },
    pay_init(dat) {
      this.Invok("10015", dat, data => {
        if (data.code != 0) {
          this.$weui.alert(data.msg);
        } else {
          //this.success = data.success;
          this.tg_moneygame_id = data.success.tg_moneygame_id;
          this.userinfo_id = data.success.userinfo_id;
          if (data.success.is_have === "1") {
            // debugger
            this.is_show = true;
            this.obj.order_status = "AP";
          }
        }
      });
    }
  }
};
</script>
