<template style="background:#f5f5f5;">
  <div id="particularsell">
    <!--<div class="particularsell-head">
      <header class="siteHeader">
        <div class="sLogo">
          <a href="http://news.chehuiji.cn/">
            <img
              class="siteHeader_img"
              src="http://img.chehuiji.cn/2014v1/mobile/images/wlogo.png?20190427003255"
            >
          </a>
        </div>
       
      </header>
      <nav class="sNav">
        <a href="http://news.chehuiji.cn/">首页</a>
        <a href="http://news.chehuiji.cn/news/">资讯</a>
        <a href="http://www.chehuiji.cn/mobile/#/particularsell">特卖</a>
       
        <a href="http://news.chehuiji.cn/testdrive/">试车</a>
        <a href="http://news.chehuiji.cn/guide/">买车</a>
        <a href="http://news.chehuiji.cn/editinteractive/">用车</a>
      </nav>
    </div>-->
    <div class="top_100">
      <div class="top_left" @click="addaddress">
        <a href="javascript:;">{{city_name}}</a>
      </div>
      <!--<div class="top_right"><a href="#"></a></div>-->
    </div>
    <div style="height:1rem;"></div>
    <section style="background:#f5f5f5;">
      <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
        <div
          class="tg-div"
          style="border-radius:5px; padding-bottom:0.1rem; margin-top:0.25rem;"
          v-for="(item ,index) in t_list"
          @click="godetails(index)"
          :key="item.tg_jk_groupbuy_id"
        >
          <div class="left">
            <div class="tg-title">{{item.title}}</div>
            <div class="tg-hd-bj">
              <a
                style="background-size:5.2rem 3rem; width:5.2rem; height:3rem; border-radius:5px; margin-left:0.25rem;"
                v-if="item.pic_url!=''"
                :style="{backgroundImage:'url(' + item.pic_url + ')'}"
              ></a>
              <a v-else></a>
            </div>
          </div>
          <div class="left">
            <div class="right-all-div">
              <div class="tg-hd-logo hasmargin-bottom">
                <a v-if="item.logo_url!=''" :style="{backgroundImage:'url(' + item.logo_url + ')'}"></a>
                <a v-else></a>
              </div>
              <div class="tg-hd-num hasmargin-bottom">
                <div style="padding-top:.23rem">
                  <span
                    class="color-red"
                    style="font-size:.4rem"
                  >{{item.status === '0'?0:item.enroll}}</span>人
                </div>
                <div>已报名</div>
              </div>
              <template v-if="item.status === '1'">
                <div
                  class="tg-hd-money hasmargin-bottom"
                  style="font-size:.25rem; margin-top:0rem;"
                >活动详情</div>
              </template>
              <template v-else-if="item.status === '0'">
                <div
                  class="tg-hd-money-js hasmargin-bottom"
                  style="font-size:.25rem; margin-top:0rem;"
                >敬请期待</div>
              </template>
              <template v-else>
                <div
                  class="tg-hd-money-js hasmargin-bottom"
                  style="font-size:.25rem; margin-top:0rem;"
                >已结束</div>
              </template>
              <!--<div style="margin-top:1.2rem;font-size:.24rem">{{item.time}}</div>-->
              <div class="tg-hd-data">{{item.surplus_date}}</div>
            </div>
          </div>
        </div>
        <template v-if="t_list.length==0">
          <div class="nohashd">
            <div class="nohashd-logo"></div>
            <div class="nohashd-text">暂时没有活动</div>
          </div>
        </template>
        <!-- <div class="particularsell_div" v-for="item in t_list" :key="item.tg_jk_groupbuy_id">
          <div class="weui-flex aicenter">
            <div>
              <img class="particularsell_logo" :src="item.logo_url">
            </div>
            <div class="tg-title">{{item.title}}</div>
          </div>
          <div class="weui-flex aicenter">
            <div>
              <img class="particularsell_img" :src="item.pic_url">
            </div>
            <div class="particularsell_ritex">
              <div class="bt10">倒计时：{{item.time}}</div>
              <div class="bt10">
                本期
                <span class="color-red">{{item.enroll}}</span>人已报名
              </div>
              <template v-if="item.status === '1'">
                <router-link
                  :to="{ path: 'particularselldetails', query: { tg_jk_groupbuy_id: item.tg_jk_groupbuy_id }}"
                  class="particularsell_but"
                >报名</router-link>
              </template>
              <template v-else-if="item.status === '0'">
                <div style="background:#999" class="particularsell_but">敬请期待</div>
              </template>
              <template v-else>
                <div style="background:#999" class="particularsell_but">活动已结束</div>
              </template>
            </div>
          </div>
        </div>-->
      </v-scroll>
    </section>
    <div style="height:1rem;"></div>
    <div class="menu">
      <div class="line1"></div>
      <ul>
        <li @click="tabClick('/')">
          <a href="javascript:;" class="a1">首页</a>
        </li>
        <li @click="tabClick('/news')">
          <a href="javascript:;" class="a2">资讯</a>
        </li>
         <li @click="tabClick('/broadcast')">
          <a href="javascript:;" class="a5">直播</a>
        </li>
        <li class="on" @click="tabClick('/particularsell')">
          <a href="javascript:;" class="a3">特卖</a>
        </li>
        <li @click="tabClick('/groupshop')">
          <a href="javascript:;" class="a4">团购</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
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
  margin-bottom: 1.2rem;
}
</style>
<script>
export default {
  name: "particularsell",
  components: {
    //引入上拉刷新 下拉加载组件
    "v-scroll": require("@/components/refresh/Pullrefresh")
  },
  data() {
    return {
      page: {
        page_num: 1,
        page_size: 5
      },
      pageEnd: 0, // 结束页数
      city_id: "",
      city_name: "全国",
      t_list: [],
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
  destroyed() {},
  methods: {
    godetails(index) {
      const obj = this.t_list[index];
      // if (obj.status === "1") {
      this.$router.push({
        path: "/particularsellsign",
        query: { tg_jk_groupbuy_id: obj.tg_jk_groupbuy_id }
      }); //
      // }
    },
    getInit(data) {
      this.Invok("10020", data, data => {
        if (data.code != 0) {
          this.$weui.alert(data.msg);
          return false;
        } else {
          let t_list = data.success.t_list;
          const enw_date = (new Date().getTime() / 1000) << 0; //list不会很长 所以在循环外面new 节省资源

          t_list.map(data => {
            let obj = data;
            let times = "";
            if (obj.status === "1") {
              const end_date =
                new Date(obj.end_date.replace(/-/g, "/")).getTime() / 1000 +
                86400;
              const time = this.timeStamp(end_date - enw_date);
              times = "剩" + time;
            } else if (obj.status === "0") {
              times = "尚未开始";
            } else {
              times = "已结束";
            }
            obj.time = times;
            return obj;
          });
          if (this.page.page_num === 1) {
            // console.log(22);
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
    timeStamp: function(second_time) {
      var time = "<i class='icon_parti'>" + parseInt(second_time) + "</i>秒";
      if (parseInt(second_time) > 60) {
        var second = parseInt(second_time) % 60;
        var min = parseInt(second_time / 60);
        time = `${min}分钟${second}秒`;
        if (min > 60) {
          min = parseInt(second_time / 60) % 60;
          var hour = parseInt(parseInt(second_time / 60) / 60);
          time = `${hour}小时${min}分钟`;
          // time = `${hour}小时${min}分钟${second}秒`;
          if (hour > 24) {
            hour = parseInt(parseInt(second_time / 60) / 60) % 24;
            var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
            time = `${day}天${hour}小时`;
            //  time = `${day}天${hour}小时${min}分钟${second}秒`;
          }
        }
      }
      return time;
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
