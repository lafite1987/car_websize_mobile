<template>
  <div style="height:'100vh'">
    <div class="gameresulttop">
      <div class="gameresulttop_div">恭喜你</div>
    </div>
    <div class="gameresultcenter">
      <template v-if="success.is_mine ==='1'">
        <div class="gametext36">获得现金券{{success.score}}分</div>
        <div class="cgametext30">当前比赛最高成绩：{{success.max_score}}分</div>
        <div class="gameresult_button gametext30" @click="sbcz">邀请好友帮忙数</div>
        <div class="gamegz">
          <p>分享规则：</p>
          <p class="gamesj">邀请好友参与数钱游戏，前十名参与的好友成绩将累计到您的总成绩中。</p>
        </div>
      </template>
      <template v-else>
        <div class="gametext36">通过数钱帮好友节省现金{{success.score}}分</div>
        <div class="zfcg-flex" style="margin-top:35px">
          <div>
            <img :src="success.pic_url" class="yxtp">
          </div>
          <div class="shuom-hideen">
            <div class="color-lan" style="color:#000;text-indent:0;">{{success.title}}</div>
            <div style="color:#000;text-align: left;">{{success.assure_ind}}</div>
          </div>
          <div class="mscj" @click="go">马上参与</div>
          <!-- <div class="" @click="()=>{is_show=true}">马上参加</div> -->
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import mdzz from "@/assets/game/mdzz.png";
export default {
  name: "login",
  data() {
    return {
      mdzz,
      success: {}
    };
  },
  created() {
    this.getinit(this.$route.query);
  },
  methods: {
    getinit: function(data_) {
      //添加 或者查询 分
      let slef = this; // this 异步指向变更
      this.Invok(
        "10019",
        data_,
        data => {
          //游戏结束获取最高分
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            this.success = data.success;
            this.fenxi();
          }
        },
        true
      );
    },
    go: function() {
      window.location.href = this.success.act_url;
    },
    sbcz() {
      this.$weui.alert(
        '请添加右上角"..."选择发送给朋友、分享到朋友圈，进行邀请好友参与'
      );
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
                //分享朋友
                slef.$wx.onMenuShareAppMessage({
                  title: `${slef.success.current_user}邀请你参与数钱游戏`,
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
                  }&userinfo_id=${slef.$route.queryuserinfo_id}`,
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
