<template>
  <div id="particularsell">
    <section>
      <div>
        <div class="parti-pos">
          <img class="particularselldetails-img" :src="success.pic_url">
          <div class="parti-bm">
            已有
            <span class="color-red">{{success.status === '0' ? '0' : success.enroll}}</span>人报名
          </div>
        </div>
        <!-- <div class="particularselldetails-hr"></div> -->
        <div class="weui-flex aicenter particularselldetails-div">
          <div>
            <img :src="success.logo_url" class="particularsell_logo">
          </div>
          <div class="mztc_sb">
            <div class="particularselldetails-h1">{{success.title}}</div>
            <div style="margin-left: 2.666666666666667vw;color:#666666">{{success.synopsis}}</div>
          </div>
        </div>
        <div class="psdq_0_div_top"></div>
        <div class="psdq_0_div">
          <div class="psdq_0_div">
            <img :src="psdq_0" class="psdq_0">
            <div>限时特惠</div>
          </div>
          <div class="psdq_0_div">
            <img :src="psdq_0" class="psdq_0">
            <div>厂价直销</div>
          </div>
          <div class="psdq_0_div">
            <img :src="psdq_0" class="psdq_0">
            <div>多重大礼</div>
          </div>
          <div class="psdq_0_div">
            <img :src="psdq_0" class="psdq_0">
            <div>专属福利</div>
          </div>
        </div>
        <div class="psdq_0_div_top"></div>
        <div>
          <div>
            <div class="particularselldetails-flex">
              <img :src="psdq_1" class="psdq_1">
              <div class="thhd">活动详情</div>
              <img :src="psdq_1" class="psdq_1 xz">
            </div>
            <div class="particularselldetails-div">
              <div class="part-hdxq" v-html="success.content">
                <!-- 活动详情，活动详情，活动详情，活动详情，活动详情，
              活动详情，活动详情，活动详情，活动详情，活动详情，
              活动详情，活动详情，活动详情，活动详情，活动详情，
              活动详情，活动详情，活动详情，活动详情，活动详情，
              活动详情，活动详情，活动详情，活动详情，活动详情，
                活动详情，活动详情，活动详情，-->
              </div>
            </div>
          </div>
          <div>
            <div class="particularselldetails-flex">
              <img :src="psdq_1" class="psdq_1">
              <div class="thhd">活动流程</div>
              <img :src="psdq_1" class="psdq_1 xz">
            </div>
            <div class="particularselldetails-div">
              <img :src="psdq_2" class="psdq_2">
            </div>
          </div>

          <!-- <div>
          <div class="particularselldetails-flex">
            <img :src="psdq_1" class="psdq_1">
            <div class="thhd">最新报名</div>
            <img :src="psdq_1" class="psdq_1 xz">
          </div>
          <div :style="{height:height+'px',overflow: 'hidden'}">
            <div class="weui-cells gudt" :style="styleObject">
              <div
                class="weui-cell weui-cell_access"
                v-for="(item,index) in cust_list"
                ref="parList"
                :key="index"
              >
                <div class="weui-cell__bd">{{item.cust_name}}</div>
                <div class="weui-cell__bd text-ovhi">{{item.classes_name}}</div>
                <div class="weui-cell__bd">{{item.phone}}</div>
              </div>
            </div>
          </div>
          </div>-->
          <div>
            <div class="particularselldetails-flex">
              <img :src="psdq_1" class="psdq_1">
              <div class="thhd">活动须知</div>
              <img :src="psdq_1" class="psdq_1 xz">
            </div>
            <div class="particularselldetails-div">
              <div class="part-hdxq">
                <div>本车型特卖支持随时购！随时想买，随享实惠！</div>
                <div>
                  请大家先在网上报名，报名后，负责本车型的特卖专员会跟您电话沟通后续特卖的细节。
                  （沟通时间一般在24小时内，如遇工作人员轮休可能会稍微延后联系，请您耐心等待。）
                </div>
                <div>
                  需要指出的是：特卖价格无法在电话里告知，这点请网友们谅解。您到达特卖现场后，
                  我们会清晰详细的告诉您特卖价格。
                </div>
                <div>
                  参加特卖，在指定的活动时间内到您报名的活动的经销店参与线下活动，凭手机号码签到、
                  进行资格确认。
                </div>
                <div>特卖当天，如果您无法前往，您也可以委托您的家人或朋友前去办理特卖手续。</div>
                <div>现场下订，在活动现场收银处直接下订享受超值优惠并扫码参与下订抽奖活动。</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="zzjsq">本活动最终解释权归车惠集所有</div>
      <div class="particularselldetails-hr"></div>
    </section>
    <footer class="par-footer-div">
      <router-link
        v-if="success.status === '1'"
        class="par-footer"
        :to="{ path: 'particularsellsign', query: { tg_jk_groupbuy_id: success.tg_jk_groupbuy_id }}"
      >
        <img :src="psdq_3" class="psdq_3">
      </router-link>
    </footer>
  </div>
</template>
<script>
import psdq_0 from "../assets/particularsell/psdq_0.png";
import psdq_1 from "../assets/particularsell/psdq_1.png";
import psdq_2 from "../assets/particularsell/psdq_2.png";
import psdq_3 from "../assets/particularsell/psdq_3.png";
export default {
  name: "particularselldetails",
  data() {
    return {
      psdq_0,
      psdq_1,
      psdq_2,
      psdq_3,
      success: {},
      cust_list: [],
      styleObject: {
        textAlign: "center",
        marginTop: "0",
        transform: "translate3d(0,0,0)",
        webkitTransform: "translate3d(0,0,0)"
      },
      height: 0,
      gdobj: {},
      translatepx: 0,
      dgType: true,
      timeObj: null
    };
  },
  watch: {
    gdobj: function(data) {
      this.timeObj = setInterval(() => {
        // data.allHeight;
        this.translatepx = this.dgType
          ? this.translatepx - data.height * 5
          : this.translatepx + data.height * 5;
        if (Math.abs(this.translatepx) >= data.allHeight - data.height * 10) {
          this.translatepx = -(data.allHeight - data.height * 10);
          this.styleObject.transform = `translate3d(0,${this.translatepx}px,0)`;
          this.dgType = !this.dgType;
        }
        if (this.translatepx >= 0) {
          this.translatepx = 0;
          this.styleObject.transform = `translate3d(0,${this.translatepx}px,0)`;
          this.dgType = !this.dgType;
        }
        this.styleObject.transform = `translate3d(0,${this.translatepx}px,0)`;
      }, 2500);
    }
  },
  created() {
    this.getInit({
      tg_jk_groupbuy_id: this.$route.query.tg_jk_groupbuy_id
    });
    if (this.$route.query.from === "toutiao") {
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML =
        '(function(r,d,s,l){var meteor=r.meteor=r.meteor||[];meteor.methods=["track","off","on"];meteor.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);meteor.push(args);return meteor}};for(var i=0;i<meteor.methods.length;i++){var key=meteor.methods[i];meteor[key]=meteor.factory(key)}meteor.load=function(){var js,fjs=d.getElementsByTagName(s)[0];js=d.createElement(s);js.src="https://analytics.snssdk.com/meteor.js/v1/"+l+"/sdk";fjs.parentNode.insertBefore(js,fjs)};meteor.load();if(meteor.invoked){return}meteor.invoked=true;meteor.track("pageview")})(window,document,"script","1634752910239751")';
      document.getElementsByTagName("head")[0].appendChild(script);
    }

    // this.getNew();
  },
  destroyed() {
    this.timeObj && clearInterval(this.timeObj);
  },
  updated() {
    // this.$nextTick(() => {
    //   const lsit = this.$refs.parList;
    //   if (!this.height) {
    //     if (lsit) {
    //       this.height = lsit[0].clientHeight * 10;
    //       this.gdobj = {
    //         height: lsit[0].clientHeight, // 单高
    //         allHeight: lsit[0].clientHeight * lsit.length,
    //         length: lsit.length
    //       };
    //     }
    //   }
    // });
  },
  methods: {
    getInit(data) {
      this.Invok("10021", data, data => {
        if (data.code != 0) {
          this.$weui.alert(data.msg);
          return false;
        } else {
          this.success = data.success;
        }
      });
    },
    getNew() {
      this.Invok("10023", {}, data => {
        if (data.code != 0) {
          this.$weui.alert(data.msg);
          return false;
        } else {
          this.cust_list = data.success.cust_list;
        }
      });
    }
  }
};
</script>
<style>
#particularsell {
  background: linear-gradient(0.25turn, #d9d9d9, #ffffff, #d9d9d9);
}
</style>
