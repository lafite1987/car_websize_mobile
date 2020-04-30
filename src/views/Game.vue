<template>
  <div>
    <div class="gamebj">
      <div class="gametext">
        已经有
        <span class="gamespan">{{success.players || 0}}</span>人参加了数钱游戏
      </div>
      <div class="gameall_button">
        <template v-if="success.is_participated ==='0'">
          <template v-if="success.is_mine ==='1'">
            <button class="gamebutton" @click="goPlay">开始游戏</button>
          </template>
          <template v-else-if="success.is_mine ==='0'">
            <button class="gamebutton" @click="goPlay">帮TA一把</button>
          </template>
        </template>
        <template v-else>
          <button class="gamebutton" style="background:#999;">你已参与</button>
        </template>
        <button class="gamebutton" @click="sbcz">邀请好友</button>
      </div>
    </div>
    <div>
      <ul class="weui-cells notop">
        <li class="weui-cell" style="background:#e2e2e2">
          {{success.is_mine==='1'?'你':success.user_name}}已获得{{success.total || 0}}分，
          朋友助力{{success.friend_total}}分
        </li>
        <li class="weui-cell" v-for="(item,index) in success.list" :key="item.friend_name">
          <div>
            <img class="gametoux" :src="item.friend_logo">
          </div>
          <div class="gamehaspadding weui-flex__item">{{item.friend_name}}</div>
          <div class="color-hui">
            <template v-if="index<10">助力</template>
            <span class="color-red">{{item.score}}</span>分
          </div>
        </li>
      </ul>
      <div class="gameno_list" v-if="success.list.length === 0">
        <div class="chj-cnter-flex">
          <img :src="sbtb" class="gametoux">
        </div>
        <div v-if="success.is_mine === '0'">Ta还没有好友帮忙哦</div>
        <div v-if="success.is_mine === '1'">邀请好友助力，获得更多现金券</div>
      </div>
    </div>
    <Gamegz :suess="success"></Gamegz>
  </div>
</template>
<script>
import Gamegz from "@/components/gamegz";
import sbtb from "../assets/game/sbtb.png";
import mdzz from "@/assets/game/mdzz.png";
export default {
  name: "login",
  components: {
    Gamegz
  },
  data() {
    return {
      mdzz,
      sbtb,
      open_id: "",
      success: {
        list: []
      }
    };
  },
  created() {
    this.open_id =
      localStorage.getItem("open_id" + this.$util.projectOnlyName) || "";
    if (this.open_id == "") {
      this.open_id = this.$route.query.open_id || "";
      if (this.open_id == "") {
        //url 也没有
        var redirect_uri = window.location.href; //
        location.href =
          this.$util.serviceUrl +
          "/wechat/userAuth.do?redirectUri=" +
          encodeURIComponent(redirect_uri);
      } else {
        localStorage.setItem(
          "open_id" + this.$util.projectOnlyName,
          this.open_id
        );
      }
    }
    this.init({
      open_id: this.open_id,
      tg_moneygame_id: this.$route.query.tg_moneygame_id || "",
      userinfo_id: this.$route.query.userinfo_id
    });
  },
  methods: {
    sbcz() {
      this.$weui.alert(
        '请添加右上角"..."选择发送给朋友、分享到朋友圈，进行邀请好友参与'
      );
    },
    init(dat) {
      this.Invok("10016", dat, data => {
        console.log(data);
        if (data.code != 0) {
          this.$weui.alert(data.msg);
        } else {
          this.success = data.success;
          this.fenxi();
          this.success.list || (this.success.list = []);
        }
      });
    },
    goPlay() {
      this.$router.push({
        path: "/moneygame",
        query: {
          tg_moneygame_id: this.$route.query.tg_moneygame_id,
          userinfo_id: this.$route.query.userinfo_id,
          open_id: this.open_id
        }
      }); //页面跳转
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
                var forward_flag =
                  slef.$route.query.no == "1" ? "" : slef.$util.getUUID(); // 有UUID 是转发 没有是访问
                //分享朋友
                console.log(slef.obj);
                slef.$wx.onMenuShareAppMessage({
                  title: `${slef.success.current_user}请你参与数钱游戏`,
                  desc: `你数多少，TA得多少，想帮好友省钱、快来玩数钱游戏`,
                  link: `${
                    window.location.href.split("#")[0]
                  }#/game?tg_moneygame_id=${
                    slef.$route.query.tg_moneygame_id
                  }&userinfo_id=${slef.$route.query.userinfo_id}`,
                  imgUrl: slef.mdzz
                });
                //分享到朋友圈
                slef.$wx.onMenuShareTimeline({
                  title: `${slef.success.current_user}邀请你参与数钱游戏`,
                  link: `${
                    window.location.href.split("#")[0]
                  }#/game?tg_moneygame_id=${
                    slef.$route.query.tg_moneygame_id
                  }&userinfo_id=${slef.$route.query.userinfo_id}`,
                  imgUrl: slef.mdzz
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
    }
  }
};
</script>
