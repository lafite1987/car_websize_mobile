<template>
  <div id="groupshop">
    <!--   <div class="head">
      <div class="head-jt-ts-div" @click="addaddress">
        <div>{{address_name}}</div>
        <a class="head-jt-ts"></a>
      </div>
      <div class="head-text-ts">汽车团购</div>
      <router-link :class="[this_clss=='登录' ? 'head-ri-imgbyuser':'head-ri-img',hasnoew > 0 ? 'head_ri_img_br':'']" to="/mycenter" >
        {{this_clss}}
      </router-link>
    </div>-->
    <div class="top_100">
      <div class="top_left" @click="addaddress">
        <a href="javascript:;">{{address_name}}</a>
      </div>
      <div class="top_right2">
        <router-link
          :class="[this_clss=='登录' ? 'head-ri-imgbyuser':'head-ri-img',hasnoew > 0 ? 'head_ri_img_br':'']"
          to="/mycenter"
        >
          <!-- {{this_clss}}-->
        </router-link>
      </div>
    </div>
    <div class="center">
      <div class="order-tab" style="background:#fff;">
        <ul class="yh-ti-ul">
          <li class="yh-ti-ul-li">
            <a class="yh-ti-ul-a" @click="jump('P')" :class="{click:act_status==='P'}">进行中</a>
          </li>
          <li class="yh-ti-ul-li">
            <a class="yh-ti-ul-a" @click="jump('E')" :class="{click:act_status==='E'}">已结束</a>
          </li>
        </ul>
      </div>
      <div style="height:1rem;"></div>
      <v-scroll
        :on-refresh="onRefresh"
        :on-infinite="onInfinite"
        :dataList="scrollData"
        class="order_div_first"
      >
        <div v-show="jump_p">
          <template v-if="items_p.length==0">
            <div class="nohashd">
              <div class="nohashd-logo"></div>
              <div class="nohashd-text">你所在的城市没有团购活动哦，请期待</div>
              <div class="button-01" @click="addaddress">选择别的城市查看</div>
            </div>
          </template>
          <template v-else>
            <div
              class="tg-div"
              style="border-bottom:0.1rem solid #f5f5f5;"
              @click="godetails(val.groupbuy_id)"
              v-for="(val,index) in items_p"
              :key="val.groupbuy_id"
            >
              <div class="left">
                <div class="tg-title">{{address_name}}-{{val.title}}</div>
                <div class="tg-hd-bj">
                  <a v-if="val.pic_url!=''" :style="{backgroundImage:'url(' + val.pic_url + ')'}"></a>
                  <a v-else></a>
                </div>
              </div>
              <div class="left">
                <div class="right-all-div">
                  <div class="tg-hd-logo hasmargin-bottom">
                    <a
                      v-if="val.logo_url!=''"
                      :style="{backgroundImage:'url(' + val.logo_url + ')'}"
                    ></a>
                    <a v-else></a>
                  </div>
                  <div class="tg-hd-num hasmargin-bottom">{{val.people_num}}人报名</div>
                  <div class="tg-hd-yb color-h hasmargin-bottom tg-hd-bzj">
                    保证金抵
                    <br />
                    {{val.convert}}
                    <br />礼包
                  </div>
                  <div class="tg-hd-money hasmargin-bottom">¥{{val.price_amt}}</div>
                  <div class="tg-hd-data">{{val.surplus_date}}</div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div style="height:1rem;"></div>
        <div v-show="jump_e">
          <template v-if="items_e.length==0">
            <div class="nohashd">
              <div class="nohashd-logo"></div>
              <div class="nohashd-text">暂时没有汽车团购活动</div>
              <div class="button-01" @click="addaddress">选择别的城市查看</div>
            </div>
          </template>
          <template v-else>
            <div
              class="tg-div"
              @click="godetails(val.groupbuy_id)"
              v-for="val in items_e"
              :key="val.groupbuy_id"
            >
              <div class="left">
                <div class="tg-title">{{val.title}}</div>
                <div class="tg-hd-bj">
                  <a v-if="val.pic_url!=''" :style="{backgroundImage:'url(' + val.pic_url + ')'}"></a>
                  <a v-else></a>
                </div>
              </div>
              <div class="left">
                <div class="right-all-div">
                  <div class="tg-hd-logo hasmargin-bottom">
                    <a
                      v-if="val.logo_url!=''"
                      :style="{backgroundImage:'url(' + val.logo_url + ')',backgroundSize:'.86rem .72rem '}"
                    ></a>
                    <a v-else></a>
                  </div>
                  <div class="tg-hd-num hasmargin-bottom">{{val.people_num}}人报名</div>
                  <div class="tg-hd-yb color-h hasmargin-bottom tg-hd-bzj">
                    保证金抵
                    <br />
                    {{val.convert}}
                    <br />礼包
                  </div>
                  <div class="tg-hd-money-js hasmargin-bottom">¥{{val.price_amt}}</div>
                  <div class="tg-hd-data">已结束</div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </v-scroll>
    </div>
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
        <li @click="tabClick('/particularsell')">
          <a href="javascript:;" class="a3">特卖</a>
        </li>
        <li class="on" @click="tabClick('/groupshop')">
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
  z-index: 10;
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
.top_100 .top_right2 {
  height: 1rem;
  width: 1rem;
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
  name: "groupshop",
  data() {
    return {
      page_num: 1, //当前页
      page_size: 4, // 一页显示多少条
      pageStart: 1, // 开始页数
      pageEnd: 0, // 结束页数
      act_status: "P",
      jump_p: true,
      jump_e: false,
      items_p: [],
      items_e: [],
      address_name: "全国",
      address_id: "",
      this_clss: "",
      hasnoew: 0,
      scrollData: {
        noFlag: false //不显示暂无更多数据显示
      }
    };
  },
  components: {
    //引入上拉刷新 下拉加载组件
    "v-scroll": require("@/components/refresh/Pullrefresh")
  },
  created() {
    //初始化数据
    var open_id = this.$route.query.open_id;
    if (open_id)
      localStorage.setItem("open_id" + this.$util.projectOnlyName, open_id);
    var user_id = localStorage.getItem("user_id" + this.$util.projectOnlyName);
    if (!user_id) {
      this.this_clss = "登录";
    } else {
      let slef = this; // this 异步指向变更
      var data1 = {
        notify_status: "0", //1为已读，0为未读;
        user_id: localStorage.getItem("user_id" + this.$util.projectOnlyName)
      };
      /**获取用户未读消息**/
      this.Invok("88009", data1, function(data) {
        if (data.code != 0) {
          slef.hasnoew = 0;
        } else {
          slef.hasnoew = data.success.totalRecords || 0;
        }
      });
    }
    let slef = this; // this 异步指向变更

    slef.address_id = "";
    slef.address_name = "全国";
    var data = {
      page_num: this.pageStart,
      page_size: this.page_size,
      city_id: "" //	城市ID
    };
    slef.getinit(data);

    // slef.address_id=localStorage.getItem("address_id"+slef.$util.projectOnlyName)||"";
    // if(slef.address_id===""){//地址ID为空说明没有选择 那么启动定位
    //   (function(){
    //     var script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "https://api.map.baidu.com/api?v=2.0&ak=oHVksd4H8PjkAatDiFXkiwgQCFub8Pco&callback=Mapinit";
    //     document.body.appendChild(script)
    //   }());
    // }else{
    //   slef.address_name=localStorage.getItem("address_name"+slef.$util.projectOnlyName);
    //   var address_id =slef.address_id;
    //   if("0" == slef.address_id){
    //     address_id = "";
    //   }
    //   var data_={
    //     "page_num":this.pageStart,
    //     "page_size":this.page_size,
    //     "city_id":address_id//	城市ID
    //   }
    //   slef.getinit(data_);
    // }
    //注册百度定位回调函数
    window.Mapinit = function() {
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var geoc = new BMap.Geocoder();
          geoc.getLocation(r.point, function(rs) {
            var addComp = rs.addressComponents;
            slef.address_name = addComp.city;
            localStorage.setItem(
              "address_name" + slef.$util.projectOnlyName,
              addComp.city
            );
            var data = {
              city_name: slef.address_name //城市名称
            };
            //通过城市名称查询ID
            slef.Invok("88013", data, function(data) {
              if (data.code != 0) {
                //定位成功 但是ID查询失败 设置为全国
                slef.address_id = "";
                slef.address_name = "全国";
                localStorage.setItem(
                  "address_name" + slef.$util.projectOnlyName,
                  "全国"
                );
                localStorage.setItem(
                  "address_id" + slef.$util.projectOnlyName,
                  "0"
                );
                var data_ = {
                  page_num: this.pageStart,
                  page_size: this.page_size,
                  city_id: address_id //	城市ID
                };
                slef.getinit(data_);
              } else {
                var city_id = data.success.city_id;
                if (city_id) {
                  slef.address_id = city_id;
                  localStorage.setItem(
                    "address_id" + slef.$util.projectOnlyName,
                    city_id
                  );
                }
                var data_ = {
                  page_num: slef.pageStart,
                  page_size: slef.page_size,
                  city_id: city_id //	城市ID
                };
                slef.getinit(data_);
              }
            });
          });
        } else {
          //定位失败 or 用户拒绝定位 设置为全国
          slef.address_id = "";
          slef.address_name = "全国";
          var data = {
            page_num: this.pageStart,
            page_size: this.page_size,
            city_id: address_id //	城市ID
          };
          slef.getinit(data);
        }
      });
    };
  },
  methods: {
    jump: function(e) {
      this.act_status = e;
      if (e === "P" || e === "p") {
        //进行中
        this.jump_p = true;
        this.jump_e = false;
      } else {
        this.jump_p = false;
        this.jump_e = true;
      }
    },
    addaddress: function() {
      this.$router.push({ path: "/addresslist" }); //页面跳转
    },
    godetails(e) {
      this.$router.push({
        path: "/activitydetails",
        query: { groupbuy_id: e }
      }); //
    },
    getinit: function(data_) {
      let slef = this; // this 异步指向变更
      slef.Invok("88002", data_, function(data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        } else {
          var items = data.success.items;
          var items_p = [],
            items_e = [];
          for (var i = 0; i < items.length; i++) {
            let it = items[i];
            if (it.act_status === "E" || it.act_status === "e")
              //已结束
              items_e.push(it);
            if (
              it.act_status === "P" ||
              it.act_status === "p" ||
              it.act_status === "N" ||
              it.act_status === "n"
            )
              //进行中
              items_p.push(it);
          }
          if (data_.page_num === slef.pageStart) {
            slef.items_p.splice(0, slef.items_p.length);
            slef.items_e.splice(0, slef.items_e.length);
            slef.items_p = slef.items_p.concat(items_p);
            slef.items_e = slef.items_e.concat(items_e);
          } else {
            slef.items_e = slef.items_e.concat(items_e);
            slef.items_p = slef.items_p.concat(items_p);
          }
          slef.pageEnd = data.success.pageCount - 0 || 1; //总页
          slef.page_num = data.success.currentPageIndex - 0 || 1; //当前
        }
      });
    },
    onRefresh(done) {
      //下拉刷新
      var address_id = this.address_id;
      if ("0" == this.address_id) {
        address_id = "";
      }
      var data_ = {
        page_num: this.pageStart,
        page_size: this.page_size,
        city_id: address_id //	城市ID
      };
      this.getinit(data_);
      done(); // call done
    },
    onInfinite: function(done) {
      let more = this.$el.querySelector(".load-more");
      if (this.page_num == this.pageEnd) {
        //当前页数==总页数
        more.style.display = "none"; //隐藏加载条
        this.scrollData.noFlag = true;
      } else {
        var address_id = this.address_id;
        if ("0" == this.address_id) {
          address_id = "";
        }
        var num = this.page_num;
        var data_ = {
          page_num: num + 1,
          page_size: this.page_size,
          city_id: address_id //	城市ID
        };
        this.getinit(data_);
        more.style.display = "none"; //隐藏加载条
      }
      done();
    },
    tabClick(routePath) {
      this.$router.push({
        path: routePath
      });
    }
  }
};
</script>
