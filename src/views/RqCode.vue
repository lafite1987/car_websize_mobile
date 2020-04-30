<template>
  <div class="rq_code">
    <div class="tip">开启预约提醒</div>
    <img :src="rqCode" alt="二维码" class="rq_code_img" />
    <div class="tip_bottom">
      关注公众号
      <br />直播即将开始时将微信消息通知您
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activity_id: "",
      rqCode: ""
    };
  },
  created() {},
  mounted() {
    let query = this.$route.query;
    this.activity_id = query.activity_id;
    // console.log("------", this.activity_id);
    this.getRqCode();
  },
  methods: {
    getRqCode() {
      let data = {
        activity_id: this.activity_id
      };
      this.Invok("88032", data, data => {
        // console.log("获取二维码", data);
        if (data.success.qr_code) {
          this.rqCode = data.success.qr_code;
        } else {
          this.$weui.alert(data.msg);
        }
      });
    }
  }
};
</script>
<style scoped>
.rq_code {
  width: 100%;
  height: 100%;
  background: #fff;
  text-align: center;
  padding-top: 2rem;
}
.rq_code_img {
  width: 50%;
}
.tip {
  width: 100%;
  font-size: 0.32rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.4rem;
}
.tip_bottom {
  width: 100%;
  margin-top: 0.2rem;
  color: #888888;
  font-size: 0.19rem;
  text-align: center;
}
</style>