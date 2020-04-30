<template>
  <div class="particularsellsign">
    <section style="overflow:hidden">
      <div class="particularsellsign-title">
        <div class="weui-flex aicenter particularselldetails-div">
          <div>
            <img :src="success.logo_url" class="particularsell_logo">
          </div>
          <div class="mztc_sb">
            <div class="particularselldetails-h1">{{success.title}}</div>
            <div style="margin-left: 2.666666666666667vw;color:#666666">活动时间：{{success.start_date}}—{{success.end_date}}</div>
          </div>
        </div>
      </div>
      <div class="pss-aicenter">
        <div>
          <img :src="psdq_4" class="psdq_4">
        </div>
        <div style="padding-right:5.866666666666666vw">
          <div>报名即可获得</div>
          <div class="pss-text-h">{{success.enroll_remark}}</div>
        </div>
      </div>
      <div class="pss-hr"></div>
      <div class="pss-bms">
        本期已有
        <span class="color-red">{{success.enroll}}</span>人报名
      </div>
      <div class="pss-from">
        <div>
          <div @click="selectCt">
            <input placeholder="请选择城市" readonly v-model="from.city_name" class="pss-input">
          </div>
          <div>
            <input placeholder="请输入姓名" v-model="from.name" class="pss-input">
          </div>
          <div>
            <input placeholder="请输入手机号码" v-model="from.phone" class="pss-input">
          </div>
        </div>
      </div>
      <div class="pss-gxq">
        <div class="bitian">您感兴趣的车型</div>
        <div class="pss-flexlist">
          <a :class="selectIdex === index ? 'pss-class click' : 'pss-class'" :data-classesId="item.classes_id" v-for="(item,index) in  success.classes_list" :key="item.classes_id"
            @click="selectClass(index)">{{item.classes_name}}</a>
        </div>
      </div>
      <div class="psfelxehr"></div>
      <div class="psfelxe">
        <template v-if="success.status =='2'">
          <div class="pss-botton" style="background:#999">活动已结束</div>
        </template>
        <template v-if="success.status =='1'">
          <div class="pss-botton" @click="sub">免费报名</div>
        </template>
      </div>
    </section>
  </div>
</template>
<script>
import psdq_4 from "../assets/particularsell/psdq_4.png";
export default {
  name: "particularsellsign",
  data () {
    return {
      psdq_4,
      success: {},
      selectIdex: -1,
      pickerList: [],
      from: {}
    };
  },
  created () {
    this.getInit({
      tg_jk_groupbuy_id: this.$route.query.tg_jk_groupbuy_id
    });
  },
  destroyed () { },
  methods: {
    getInit (data) {
      this.Invok("10021", data, data => {
        if (data.code != 0) {
          this.$weui.alert(data.msg);
          return false;
        } else {
          this.success = data.success;
          this.pickerList = this.success.city_list.map(item => {
            return {
              label: item.city_name,
              value: item.city_id
            };
          });
        }
      });
    },
    selectCt () {
      // const _this = this;
      this.$weui.picker(this.pickerList, {
        onChange: result => {
          this.$set(this.from, "city_name", result[0].label);
          this.$set(this.from, "city_id", result[0].value);
        }
      });
    },
    selectClass (index) {
      this.selectIdex = index;
      this.from.classes_id = this.success.classes_list[index].classes_id;
    },
    sub () {
      if (this.validator()) {
        const data = JSON.parse(JSON.stringify(this.from));
        delete data.city_name;
        data.tg_jk_groupbuy_id = this.$route.query.tg_jk_groupbuy_id;
        this.Invok("10022", data, data => {
          console.log(data);
          if (data.code != 0) {
            this.$weui.alert(data.msg);
            return false;
          } else {
            try {
              meteor.track("view", { convert_id: "1634752910239751" });
            } catch (error) { }
            this.$weui.alert(
              "报名成功，稍后专职工作人员将会与您联系，请留意接听"
            );
          }
        });
      }
    },
    validator () {
      var validator = new this.$util.Validator();
      validator.add(this.from.city_id, [
        {
          strategy: "isEmpty",
          msg: "请选择城市"
        }
      ]);
      validator.add(this.from.name, [
        {
          strategy: "isEmpty",
          msg: "请输入姓名"
        }
      ]);
      validator.add(this.from.phone, [
        {
          strategy: "isEmpty",
          msg: "请输入手机号码"
        }
      ]);
      validator.add(this.from.phone, [
        {
          strategy: "isPhone",
          msg: "手机号码不正确"
        }
      ]);
      validator.add(this.from.classes_id, [
        {
          strategy: "isEmpty",
          msg: "请选择车型"
        }
      ]);
      var mgs = validator.start();
      if (mgs) {
        this.$weui.topTips(mgs, 3000);
        return false;
      }
      return true;
    }
  }
};
</script>
<style>
.particularsellsign {
  background: linear-gradient(0.25turn, #eeeeee, #ffffff, #eeeeee);
}
</style>
