<template>
  <div id="broadcast">
    <div class="top_100">
      <!-- <div class="top_left" @click="addaddress"> -->
      <!-- <a href="javascript:;">{{city_name}}</a> -->
      <!-- </div> -->
      <!-- <div class="top_right"><a href="#"></a></div> -->
    </div>
    <div style="height:1rem;"></div>
    <section style="background:#fff;margin-top:0.35rem;">
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
            <div class="li" v-for="(item,index) in t_list" :key="index" @click="turnBroadcast(item)">
              <div class="img_div">
                <img :src="item.poster_image" class="car-img" />
                <img src="../assets/images/home/broadcast_play.png" class="play_img" />
                <div v-if="item.status == '1'" class="status">查看回放</div>

                <div v-if="item.status == '0'" class="status">进入直播间</div>
              </div>
              <div class="bottom">
                <div class="title">{{item.title}}</div>
                <div class="car_logo">
                  <img :src="item.car_logo" />
                </div>
              </div>
              <div class="play_time">
                <span class="time_title">开播时间:</span>
                {{item.timeStr}}
              </div>
            </div>
        </v-scroll>
    </section>
    <div style="height:1rem;"></div>
    <div class="menu">
      <!-- <div class="line1"></div> -->
      <ul>
        <li @click="tabClick('/')">
          <a href="javascript:;" class="a1">首页</a>
        </li>
        <li @click="tabClick('/news')">
          <a href="javascript:;" class="a2">资讯</a>
        </li>
        <li class="on" @click="tabClick('/broadcast')">
          <a href="javascript:;" class="a5">直播</a>
        </li>
        <li @click="tabClick('/particularsell')">
          <a href="javascript:;" class="a3">特卖</a>
        </li>
        <li @click="tabClick('/groupshop')">
          <a href="javascript:;" class="a4">团购</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import Swiper from "Swiper";
const Swiper = window.Swiper;
export default {
  name: "news",
  components: {
    //引入上拉刷新 下拉加载组件
    "v-scroll": require("@/components/refresh/Pullrefresh")
  },
  data() {
    return {
      t_list: [],
      page: {
        page_num: 1,
        page_size: 5
      },
      pageEnd: 0, // 结束页数
      city_id: "",
      city_name: "全国",
      newsMenus: [], //资讯菜单
      subtype: "",
      isActive: 0, //
      pageNo: 1, //页码
      pageSize: 8,
      pageTotal: 0,
      zixunList: [], //资讯列表
      scrollData: {
        noFlag: false //不显示暂无更多数据显示
      },
      total: 0
    };
  },
  created() {
    this.city_id =
      localStorage.getItem("address_id" + this.$util.projectOnlyName) || "";
    this.city_name =
      localStorage.getItem("address_name" + this.$util.projectOnlyName) ||
      "全国";
    const data = {
      city: "", // this.city_id == "0" ? "" : this.city_id,
      page_num: this.page.page_num,
      page_size: this.page.page_size
    };
    this.getInit(data);
  },
  methods: {
    turnBroadcast: function(item) {
      // window.open("http://" + item.play_url);
      window.open(item.play_url);
    },
    dealDate(start, end) {
      var beginDate = new Date(start).getTime();
      var endDate = new Date(end).getTime();
      var nowDate = new Date().getTime();
      var status = "0";
      if (nowDate > endDate) {
        status = "1";
      }
      var startTime = start.split(" ");
      var endTime = end.split(" ");
      var dateInfoStart = startTime[0].split("-");
      var timeInfoStart = startTime[1].split(":");
      var dateInfoEnd = endTime[0].split("-");
      var timeInfoEnd = endTime[1].split(":");
      // var timeStr =
      //   dateInfoStart[1] +
      //   "/" +
      //   dateInfoStart[2] +
      //   "/" +
      //   timeInfoStart[0] +
      //   ":" +
      //   timeInfoStart[1] +
      //   "-" +
      //   timeInfoEnd[0] +
      //   ":" +
      //   timeInfoEnd[1];
      var timeStr = start.slice(0, -3) + "至" + end.slice(0, -3);

      console.log("============", timeStr);

      return { timeStr: timeStr, status: status };
    },
    getInit(data) {
      this.Invok("88003", data, data => {
        let t_list = [];
        if (data.code != 0) {
          this.$weui.alert(data.msg);
          return false;
        } else {
          t_list = data.success.items;
          for (let i of t_list) {
            let result = this.dealDate(i.start_time, i.end_time);
            this.$set(i, "timeStr", result.timeStr);
            this.$set(i, "status", result.status);
          }
          if (this.page.page_num === 1) {
            this.t_list = t_list;
          } else {
            this.t_list = this.t_list.concat(t_list);
          }
          this.total = data.success.total - 0 || 1; //总个数
        }
      });
    },
    onRefresh(done) {
      this.page.page_num = 1;
      var data_ = {
        page_num: this.page.page_num,
        page_size: this.page.page_size,
        city: this.city_id //	城市ID
      };
      this.getInit(data_);
      done(); //
    },
    onInfinite: function(done) {
      let more = this.$el.querySelector(".load-more");
      if (this.t_list.length === this.total) {
        //当前页数==总页数
        more.style.display = "none"; //隐藏加载条
        this.scrollData.noFlag = true;
      } else {
        this.page.page_num += 1;
        var data_ = {
          page_num: this.page.page_num,
          page_size: this.page.page_size,
          city: this.city_id //	城市ID
        };
        this.getInit(data_);
        more.style.display = "none"; //隐藏加载条
      }
      done();
    },
    tabClick(routePath) {
      this.$router.push({
        path: routePath
      });
    }, //地址点击
    addaddress: function() {
      this.$router.push({ path: "/addresslist" }); //页面跳转
    }
  }
};
</script>
<style scoped>
#broadcast {
  min-height: 2000px;
  background: #f5f5f5;
}
/* #broadcast .broadcast_con {
  /* padding: 0 0.33rem; */
  /* width: 100%;
  height: 100%; */
  /* border:1px solid red; */
/* }  */
#broadcast .inner {
  background: #fff !important;
}
#broadcast .li {
  background: #fff;
  margin: 0.3rem;
  /* margin: */
  box-shadow: 0px 5px 32px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-top: 0.0195rem;
  /* border: 1px solid blue; */
  /* width:8.61rem; */
}
#broadcast .li .img_div {
  position: relative;
  /* min-height: 4.76rem; */
  margin: 0.3rem 0.3rem 0.17rem 0.3rem;
  /* margin-top: 0.4rem; */
  /* border: 1px solid red; */
}
#broadcast .li .img_div .status {
  position: absolute;
  width: 2.1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.37);
  border-radius: 0 0.6rem 0.6rem 0;
  z-index: 100;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 0.3rem;
}
#broadcast .li .img_div .car-img {
  width: 100%;
  /* height:4.76rem; */
}
#broadcast .li .img_div .play_img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 100;
  margin-top: -0.75rem;
  margin-left: -0.75rem;
}
#broadcast .li .bottom {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eee;
  margin: 0 0.44rem;
  /* height: 1.3rem; */
  align-items: center;
  padding: 0.1rem 0 0.28rem 0;
  /* padding-bottom:0.37rem; */
}
#broadcast .li .bottom .title {
  white-space: auto;

  padding-right: 0.32rem;
  font-size: 0.3rem;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 0.4rem;
  flex: 1;
}
#broadcast .li .bottom .car_logo {
  width: 1.44rem;
  max-height: 1.44rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}
#broadcast .li .bottom .car_logo img {
  max-width: 100%;
  vertical-align: middle;
  max-height: 0.8rem;
  margin: auto;
}
#broadcast .li .play_time {
  margin: 0 0.44rem;
  height: 0.8rem;
  font-size: 0.24rem;
  font-weight: 400;
  /* color: #494949; */
  color: #666;
  line-height: 0.8rem;
  text-align: center;
}
.time_title {
  /* color: #333333; */
  font-size: 0.2rem;
}
.top_100 {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #fff url(../assets/images/home/logo.gif) no-repeat center 0.24rem;
  background-size: 1.43rem 0.54rem;
  z-index: 999;
  border-bottom: 1px solid #eee;
}
.top_100 .top_left {
  height: 1rem;
  background: url(../assets/images/home/tb1.gif) no-repeat 0.3rem 0.3rem;
  background-size: 0.3rem 0.36rem;
  position: absolute;
  left: 0rem;
  top: 0px;
  font-size: 0.28rem;
  line-height: 1rem;
}
.top_100 .top_right {
  height: 1rem;
  width: 1rem;
  background: url(../assets/images/home/tb2.gif) no-repeat center 0.34rem;
  background-size: 0.34rem 0.34rem;
  position: absolute;
  right: 0px;
  top: 0px;
}
.top_100 .top_left a {
  display: block;
  height: 1rem;
  width: 1rem;
  padding-left: 0.7rem;
}
.top_100 .top_right a {
  display: block;
  height: 1rem;
  width: 1rem;
}
.menu {
  width: 100%;
  height: 1rem;
  position: fixed;
  z-index: 1000;
  left: 0px;
  bottom: 0px;
  background: #fff;
}
.menu li {
  width: 20%;
  height: 1rem;
  float: left;
  text-align: center;
}
.menu li a {
  font-size: 0.2rem;
  color: #b8bec5;
  display: block;
}
.menu li a.a1 {
  background: url(../assets/images/home//mu1.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a1 {
  background: url(../assets/images/home//mu11.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li a.a2 {
  background: url(../assets/images/home//mu2.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a2 {
  background: url(../assets/images/home//mu22.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li a.a3 {
  background: url(../assets/images/home//mu3.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a3 {
  background: url(../assets/images/home//mu33.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li a.a4 {
  background: url(../assets/images/home//mu4.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a4 {
  background: url(../assets/images/home//mu44.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li a.a5 {
  background: url(../assets/images/home/mu5.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a5 {
  background: url(../assets/images/home/mu55.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.yo-scroll {
  margin-bottom: 1rem;
}
</style>