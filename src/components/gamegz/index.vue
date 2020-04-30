<template>
  <!--活动规则-->
  <div>
    <div class="easejs-footer">
      由车惠集提供技术支持
      <a class="easejs-text-ri" @click="clikc_type(true)">活动规则</a>
    </div>
    <div v-show="is_activity_rule">
      <div class="poput-div-of"></div>
      <div class="all-div-">
        <div class="all-div-div">
          <div class="zzc-center-dl">
            <div class="zzc-center-dl-tdiv">
              活动规则
              <a class="zzc-center-dl-x" @click="clikc_type(false)"></a>
            </div>
          </div>
          <div class="zzc-center-dl">
            <div class="zzc-center-title">比赛方式</div>
            <p class="zc-center-p">
              {{suess.match_way}}
            </p>
            <div class="zzc-center-title">奖项设置</div>
            <p class="zc-center-p">
              {{suess.prize_set}}
            </p>
            <div class="zzc-center-title">领取方式</div>
            <p class="zc-center-p">{{suess.prize_way}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import money_dl from "@/assets/jsimages/d0.png";
import money_game_bot from "@/assets/jsimages/mb0.png";
import money_go_img from "@/assets/jsimages/money_go.png";
import all_mp3 from "@/assets/music/a.wav";
export default {
  name: "moneygame",
  props: {
    suess: {
      //控制是否显示暂无数据
      default: false,
      required: false
    }
  },
  data() {
    return {
      is_activity_rule: false
    };
  },
  created: function() {},
  methods: {
    clikc_type: function(value) {
      this.is_activity_rule = value;
    }
  }
};
</script>
