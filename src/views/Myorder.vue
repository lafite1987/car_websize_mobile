<template>
  <div>
    <div class="head">
      <router-link class="head-jt" to="/mycenter"></router-link>
      <div class="head-text">我的订单</div>
    </div>
    <div class="center">
      <div class="order-tab">
        <ul class="isales-head-ul">
          <li @click="jump('All')" :class="{li_click:status==='All'}">
            <a>全部</a>
          </li>
          <li @click="jump('NP')" :class="{li_click:status==='NP'}">
            <a>待付款</a>
          </li>
          <li @click="jump('AP')" :class="{li_click:status==='AP'}">
            <a>已支付</a>
          </li>
          <li @click="jump('AT')" :class="{li_click:status==='AT'}">
            <a>退订单</a>
          </li>
        </ul>
      </div>
      <v-scroll
        :on-refresh="onRefresh"
        :dataList="scrollData"
        :on-infinite="onInfinite"
        class="order_div_first"
      >
        <div class="order-div" v-for="(item,index) in items" :key="item.order_num">
          <div class="order-num">
            <div class="order-num-left">
              订单号：
              <span>{{item.order_num}}</span>
            </div>
            <div class="order-num-ri color-h">{{item.status_name}}</div>
          </div>
          <div class="order-centr" @click="goact(item.groupbuy_id)">
            <div class="order-centr-img">
              <a :style="{backgroundImage:'url(' + item.pic_url + ')'}"></a>
            </div>
            <div class="order-centr-text">
              <div class="order-title">{{item.title}}</div>
              <div class="order-data">活动时间：{{item.surplus_date}}</div>
              <div class="order-money">
                <a class="color-h">¥{{item.price_amt}}</a>保证金
              </div>
            </div>
          </div>
          <div class="order-next hassub" @click="namexx(index)">
            报名信息
            <a :class="[item.class_name,{'click':item.order_xx}]"></a>
          </div>
          <div class="order-zf">
            <div v-show="item.order_xx">
              <div>{{item.user_name}}</div>
              <div>{{item.phone}}</div>
              <div>
                意向车型：
                <span>{{item.classes_name}}</span>
              </div>
            </div>
            <a v-if="item.status==='NP'" @click="gopayment(index)">立即支付</a>
          </div>
        </div>
      </v-scroll>
    </div>
  </div>
</template>
<script>
export default {
  name: "myorder",
  data() {
    return {
      page_num: 1, //当前页
      page_size: 10, // 一页显示多少条
      pageStart: 1, // 开始页数
      pageEnd: 0, // 结束页数
      status: "All",
      is_click: 1, //控制报名信息的点击效果
      items: [],
      items_all: [], //全部
      items_np: [], //代付款
      items_ap: [], //已支付
      items_at: [], //退订
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
    var data_ = {
      page_num: this.pageStart,
      page_size: this.page_size,
      status: "", //	订单状态(NP为未支付，DP为支付失败，AP为已支付，NT为申请退款中，AT为退款完成)
      user_id:
        localStorage.getItem("user_id" + this.$util.projectOnlyName) || ""
    };
    this.getinit(data_);
  },
  methods: {
    jump: function(e) {
      //切换导航
      this.status = e;
      if (e === "All") {
        this.items = this.items_all;
      } else if (e === "NP") {
        this.items = this.items_np;
      } else if (e === "AP") {
        this.items = this.items_ap;
      } else if (e === "AT") {
        this.items = this.items_at;
      }
    },
    namexx: function(e) {
      //显示订单信息
      this.is_click = e;
      this.items[e].order_xx = !this.items[e].order_xx;
    },
    gopayment: function(e) {
      //支付
      this.$router.push({
        path: "/orderpayment",
        query: { order_id: this.items[e].order_id }
      }); //页面跳转
    },
    goact: function(e) {
      this.$router.push({
        path: "/activitydetails",
        query: { groupbuy_id: e }
      }); //页面跳转
    },
    getinit: function(data_) {
      //ajxa 获取订单
      let slef = this; // this 异步指向变更
      this.Invok("88006", data_, function(data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        } else {
          var items = data.success.items;
          var items_np = [],
            items_ap = [],
            items_at = [],
            items_all = [];
          for (var i = 0; i < items.length; i++) {
            let it = items[i];
            it["order_xx"] = false;
            it["class_name"] = "ytk_jt";
            if (it.status === "NP" || it.status === "np") {
              //待付款
              it["status_name"] = "待付款";
              it["class_name"] = "dfk_jt";
              items_np.push(it);
            }
            if (it.status === "AP" || it.status === "ap") {
              //已支付
              it["status_name"] = "已支付";
              items_ap.push(it);
            }
            if (it.status === "AT" || it.status === "at") {
              //退订
              it["status_name"] = "退订";
              items_at.push(it);
            }
            items_all.push(it);
          }
          if (data_.page_num === slef.pageStart) {
            slef.items_np.splice(0, slef.items_np.length);
            slef.items_ap.splice(0, slef.items_ap.length);
            slef.items_at.splice(0, slef.items_at.length);
            slef.items_all.splice(0, slef.items_all.length);
            slef.items_np = slef.items_np.concat(items_np);
            slef.items_ap = slef.items_ap.concat(items_ap);
            slef.items_at = slef.items_at.concat(items_at);
            slef.items_all = slef.items_all.concat(items_all);
          } else {
            slef.items_np = slef.items_np.concat(items_np);
            slef.items_ap = slef.items_ap.concat(items_ap);
            slef.items_at = slef.items_at.concat(items_at);
            slef.items_all = slef.items_all.concat(items_all);
          }
          slef.pageEnd = data.success.pageCount - 0 || 1; //总页
          slef.page_num = data.success.currentPageIndex - 0 || 1; //当前
          slef.items = slef.items_all; //默认是全部
        }
      });
    },
    onRefresh: function(done) {
      //下拉刷新
      var data_ = {
        page_num: this.pageStart,
        page_size: this.page_size,
        status: "", //	订单状态(NP为未支付，DP为支付失败，AP为已支付，NT为申请退款中，AT为退款完成)
        user_id:
          localStorage.getItem("user_id" + this.$util.projectOnlyName) || ""
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
        var num = this.page_num;
        var data_ = {
          page_num: num + 1,
          page_size: this.page_size,
          status: "", //	订单状态(NP为未支付，DP为支付失败，AP为已支付，NT为申请退款中，AT为退款完成)
          user_id:
            localStorage.getItem("user_id" + this.$util.projectOnlyName) || ""
        };
        this.getinit(data_);
        more.style.display = "none"; //隐藏加载条
      }
      done();
    }
  }
};
</script>
