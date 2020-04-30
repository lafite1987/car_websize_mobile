<template>
  <div class="particularsellsign">
    <section style="overflow:hidden">
      <img :src="success.pic_url" class="top-bg-img">
      <div class="txt-wrap">
        <p class="title">{{success.title}}</p>
        <p class="time-wrap p-flex-center">
          <img class="time-icon" src="../assets/images/time.png">
          <span>活动时间：{{success.start_date}}—{{success.end_date}}</span>
        </p>
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
          <div>
            <p class="input-title">您感兴趣的车型</p>
            <input @click="selectCar" placeholder="请选择" readonly v-model="from.classes_name" class="pss-input">
          </div>
        </div>
        <div class="join-num">本期已有<span class="num-info">{{success.enroll}}</span>人报名</div>
        <div class="sign-up-btn" v-if="success.status =='1'" @click="sub">立即报名</div>
        <div class="sign-up-btn end-btn" v-if="success.status =='2'">活动已结束</div>
      </div>
      <div class="bottom-wrap">
        <div v-html="success.content"></div>
        <!--<img class="active-img" src="../assets/images/active.png">-->
        <div class="btn-wrap" v-show="bottomBtnVisible">
          <div class="sign-up-btn bottom-sign" v-if="success.status =='1'" @click="scrollTop">立即报名</div>
          <div class="sign-up-btn bottom-sign end-btn" v-if="success.status =='2'">活动已结束</div>
        </div>
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
      classesList: [],
      from: {},
      bottomBtnVisible: false
    };
  },
  created () {
    this.getInit({
      tg_jk_groupbuy_id: this.$route.query.tg_jk_groupbuy_id
    });
  },

  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () { },
  methods: {
    scrollTop () {
      let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
      let step = distance / 50;
      (function jump () {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 10)
        }
      })();
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.bottomBtnVisible = (scrollTop > 640 ? true : false)
    },
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
          this.classesList = this.success.classes_list.map(item => {
            return {
              label: item.classes_name,
              value: item.classes_id
            };
          });
          if (this.success.city_list.length == 1) {
            this.from.city_name = this.success.city_list[0].city_name
            this.from.city_id = this.success.city_list[0].city_id
          }
        }
      });
    },
    selectCt () {
      this.$weui.picker(this.pickerList, {
        onChange: result => {
          this.$set(this.from, "city_name", result[0].label);
          this.$set(this.from, "city_id", result[0].value);
        }
      });
    },
    selectCar () {
      this.$weui.picker(this.classesList, {
        onChange: result => {
          this.$set(this.from, "classes_name", result[0].label);
          this.$set(this.from, "classes_id", result[0].value);
        }
      });
    },
    sub () {
      if (this.validator()) {
        const data = JSON.parse(JSON.stringify(this.from));
        delete data.classes_name;
        delete data.city_name;
        data.tg_jk_groupbuy_id = this.$route.query.tg_jk_groupbuy_id;
        this.Invok("10022", data, data => {
          if (data.code != 0) {
            this.$weui.alert(data.msg);
            return false;
          } else {
            try {
              meteor.track("view", { convert_id: "1634752910239751" });
            } catch (error) { }
            this.success.enroll++
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
.p-flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.particularsellsign {
  background: #fff;
  position: relative;
  padding-bottom: 18.66666vw;
}
.particularsellsign input {
  outline-color: invert;
  outline-style: none;
  outline-width: 0px;
  text-shadow: none;
  -webkit-appearance: none;
  -webkit-user-select: text;
  outline-color: transparent;
  box-shadow: none;
}
.particularsellsign input::-webkit-input-placeholder,
.particularsellsign input:-moz-placeholder,
.particularsellsign input:-ms-input-placeholder,
.particularsellsign input::-moz-placeholder {
  font-size: 3.733333vw;
}
.particularsellsign .top-bg-img {
  width: 100%;
  height: 100%;
}
.particularsellsign .txt-wrap {
  text-align: center;
  font-size: 4.8vw;
  padding: 1.6vw 0 4.8vw;
  margin: 0 5.6vw;
  border-bottom: 1px solid #b5b5b5;
}
.particularsellsign .txt-wrap .title {
  color: #000;
  font-size: 4.8vw;
}
.particularsellsign .txt-wrap .time-wrap {
  color: #b6b6b6;
  font-size: 3.733333vw;
}
.particularsellsign .txt-wrap .time-icon {
  width: 3.4666667vw;
  height: 3.4666667vw;
  margin-right: 0.8vw;
}
.particularsellsign .pss-input {
  border-color: #b5b5b5;
  text-indent: 2.6666666667vw;
}
.particularsellsign .input-title {
  margin-bottom: 2.666666666666667vw;
  color: #222;
  font-size: 3.733333vw;
}
.particularsellsign .pss-from {
  padding-bottom: 2vw;
}
.particularsellsign .join-num {
  font-size: 4vw;
  color: #999;
  text-align: center;
}
.particularsellsign .num-info {
  color: #a80f11;
  font-weight: bold;
}
/* 立即报名 */
.particularsellsign .sign-up-btn {
  background-color: #a80f11;
  color: #fff;
  font-size: 5.333333333vw;
  width: 100%;
  height: 12.2666667vw;
  text-align: center;
  line-height: 12.2666667vw;
  border-radius: 2px;
  margin: 3vw auto 4vw;
}
/* 活动详情 */
.particularsellsign .bottom-wrap {
  font-size: 0;
}
.bottom-wrap img{
  width: 100%;
  height: auto;
}
.particularsellsign .active-img {
  width: 100%;
  height: 100%;
}
.particularsellsign .btn-wrap {
  width: 100%;
  height: 18.66666vw;
  padding-top: 3.2vw;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px -4px 18px 0px rgba(199, 199, 199, 0.75);
  position: fixed;
  bottom: 0;
}
.particularsellsign .bottom-sign {
  width: 88.2666667vw;
  margin: 0 auto;
}
.particularsellsign .end-btn {
  background: #999;
}
</style>
