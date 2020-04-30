<template>
  <div id="paymentsuccess" style="background:#e8e8e8;height:100vh">
    <!--  <div class="head">
      <router-link class="head-jt" to="/myorder"></router-link>
      <div class="head-text">支付</div>
    </div>
    <div class="center">-->
    <div class="zfcg-flex">
      <div class="zfcg" style="margin:0"></div>
      <div class="pay-top">
        <div class>
          支付方式：
          <span class="color-l">微信支付</span>
        </div>
        <div class>
          支付金额：
          <span class="color-l">￥{{price_amt}}</span>
        </div>
      </div>
    </div>
    <div class="zfcg-flex" v-if=" success.is_have === '1' ">
      <div>
        <img class="yxtp" :src="mdzz">
      </div>
      <div class="shuom-hideen">
        <div class="color-lan">51团购会</div>
        <div>2019夏季活动火热进行中火热进行中</div>
      </div>
      <router-link
        class="mscj"
        :to="{ path: 'game', query: { tg_moneygame_id: success.tg_moneygame_id,userinfo_id:userinfo_id }}"
      >马上参与</router-link>
      <!-- <div class="" @click="()=>{is_show=true}">马上参加</div> -->
    </div>
    <Gamepoput
      :show.sync="is_show"
      :userinfoid.sync="userinfo_id"
      :tgmoneygameid.sync="success.tg_moneygame_id"
    />
    <!--   </div>-->
  </div>
</template>
<script>
import Gamepoput from "../components/gamepoput";
import mdzz from "@/assets/game/mdzz.png";
export default {
  name: "paymentsuccess",
  components: { Gamepoput },
  data() {
    return {
      mdzz,
      is_show: false,
      price_amt: 0,
      success: {
        is_have: 0
      },
      userinfo_id: ""
    };
  },
  created() {
    // this.userinfo_id =
    //   localStorage.getItem("user_id" + this.$util.projectOnlyName) || "";
    const open_id =
      localStorage.getItem("open_id" + this.$util.projectOnlyName) || "0"; //
    const groupbuy_id = this.$route.query.groupbuy_id;
    this.price_amt = this.$route.query.price_amt;
    this.init({
      groupbuy_id,
      open_id
    });
  },
  methods: {
    init(dat) {
      this.Invok("10015", dat, data => {
        if (data.code != 0) {
          this.$weui.alert(data.msg);
        } else {
          this.success = data.success;
          console.log(`支付成功==${data.success.userinfo_id}`);
          this.userinfo_id = data.success.userinfo_id;
          if (this.success.is_have === "1") {
            this.is_show = true;
          }
        }
      });
    }
  }
};
</script>
