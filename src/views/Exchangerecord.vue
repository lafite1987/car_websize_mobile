<template>
    <div id="exchangerecord">
      <div class="head">
        <router-link class="head-jt" to="/integralshop"></router-link>
        <div class="head-text">兑换记录</div>
      </div>
      <div class="center">
        <v-scroll :on-refresh="onRefresh"  :dataList="scrollData"  :on-infinite="onInfinite">
          <!--<div class="hasmargin-top-oder"></div>-->
          <div class="order-div" v-for="val in items" :key="val.merchandise_id">
              <div class="order-num">
                <div class="order-num-left">订单号：<span>{{val.order_num}}</span></div>
                <div class="order-num-ri color-h">{{status[val.status]}}</div>
              </div>
              <div class="order-centr">
                <div class="order-centr-img">
                    <a :style="{backgroundImage:'url(' + val.merchandise_url + ')'}"></a>
                  <!--<img src="../assets/cz.png">-->
                </div>
                <div class="djjl-centr-text">
                  <div class="order-title"><span class="order-title-rm">(热门兑换)</span> {{val.merchandise_name}}</div>
                  <div class="djjl-money"><a class="color-h">{{val.use_integral}}</a>积分 +<a class="color-h">{{val.price}}</a>元</div>
                </div>
              </div>
              <div class="order-zf" v-show="val.logistics_num"  @click="go_show(val.logistics_num)">
                <a>物流信息</a>
              </div>
             <!-- <div class="djjl-wl" v-show="val.is_show">
                <p>物流信息：</p>
                <p class="color-hui">物流公司：中通物流</p>
                <p class="color-hui">物流单号：xxxxxxxxxxx</p>
                <p class="color-hui">发货日期：2017-07-13</p>
              </div>-->
          </div>
        </v-scroll>
      </div>
    </div>
</template>
<script>
    export default {
        name: "exchangerecord",
        data() {
            return {
              page_num: 1, //当前页
              page_size: 4, // 一页显示多少条
              pageStart: 1, // 开始页数
              pageEnd: 0, // 结束页数
              items:[],
              status:{
                NP:'未支付',
                DP:'支付失败',
                AP:'已支付',
                NT:'申请退款中',
                AT:'退款完成',
              },
              scrollData: {
                noFlag: false //不显示暂无更多数据显示
              }
            }
        },
        created() {
          var data={
            "page_num":this.pageStart,
            "page_size":this.page_size,
            "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName),
            "status":""
          }
          this.getinit(data);
        },
        components: {//引入上拉刷新 下拉加载组件
          'v-scroll': require("@/components/refresh/Pullrefresh")
        },
        methods: {
          getinit:function (data_) {
            let slef = this; // this 异步指向变更
            /**获取兑换记录**/
            this.Invok("88026",data_,function (data) {
              if (data.code != 0) {
                slef.$weui.alert(data.msg);
                return false;
              } else {
               var items=data.success.items;
                if(data_.page_num===slef.pageStart){
                  slef.items.splice(0,slef.items.length);
                  slef.items=slef.items.concat(items);
                }else{
                  slef.items=slef.items.concat(items);
                }
                slef.pageEnd=data.success.pageCount-0||1;//总页
                slef.page_num=data.success.currentPageIndex-0||1;//当前
              }
            });
          },
          go_show:function (postid) {
           var  callbackurl=encodeURIComponent(window.location.href);
            location.href='https://m.kuaidi100.com/index_all.html?postid='+postid+'&callbackurl='+callbackurl;
          },
          onRefresh:function(done) {//下拉刷新
            var data_={
              "page_num":this.pageStart,
              "page_size":this.page_size,
              "status":"",//	订单状态(NP为未支付，DP为支付失败，AP为已支付，NT为申请退款中，AT为退款完成)
              "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)||""
            }
            this.getinit(data_);
            done(); // call done
          },
          onInfinite:function(done) {
            let more = this.$el.querySelector('.load-more');
            if(this.page_num==this.pageEnd){//当前页数==总页数
              more.style.display = 'none'; //隐藏加载条
              this.scrollData.noFlag = true;
            }else{
              var num=this.page_num;
              var data_={
                "page_num":num+1,
                "page_size":this.page_size,
                "status":"",//	订单状态(NP为未支付，DP为支付失败，AP为已支付，NT为申请退款中，AT为退款完成)
                "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)||""
              }
              this.getinit(data_);
              more.style.display = 'none'; //隐藏加载条
            }
            done();
          }
        }
    }
</script>
