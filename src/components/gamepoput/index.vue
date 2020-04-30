<template>
  <div v-show="is_show">
    <div class="poput-div-of"></div>
    <div class="all-div-" style="overflow:visible">
      <div class="paymentsuccess">
        <div class="pay-title">支付成功</div>
        <div>您还可以参与数钱游戏</div>
        <div>数多少送多少，不玩虚的</div>
        <div>
          <img :src="mdzz" class="mdzz">
        </div>
        <router-link
          class="paymentsuccess-boon"
          :to="{ path: 'game', query: { tg_moneygame_id: tg_moneygame_id,userinfo_id:userinfo_id }}"
        >马上参与</router-link>
        <div>
          <img :src="cha" class="cha" @click="()=>{is_show=false}">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cha from "@/assets/game/cha.png";
import mdzz from "@/assets/game/mdzz.png";
export default {
  name: "moneygame",
  props: {
    show: { type: Boolean, required: true },
    tgmoneygameid: { type: String, required: true },
    userinfoid: { type: String, required: true }
  },
  data() {
    return {
      mdzz,
      cha,
      is_show: false,
      tg_moneygame_id: "",
      userinfo_id: ""
    };
  },
  watch: {
    show: function(val) {
      this.is_show = val;
    },
    userinfoid: function(val) {
      this.userinfo_id = val;
    },
    tgmoneygameid: function(val) {
      this.tg_moneygame_id = val;
    }
  },
  created: function() {},
  methods: {}
};
</script>
