<template>
  <div id="integralshop">
    <div class="head">
      <router-link class="head-jt" to="/mycenter"></router-link>
     <!-- <a class="head-jt"></a>-->
      <div class="head-text-jf">积分商城</div>
      <div class="index-buttom-jfsc">
        <div class="jfsc-kf"></div>
        <a class="jfsc-kf-a" href="tel:400-059-0755">联系客服</a>
      </div>
    </div>
    <div class="center">
      <div class="jfsc-div">
        <router-link class="jfsc-div-ri" to="/integralrule">积分规则</router-link>
        <div>可用积分</div>
        <div class="jfsc-h1">{{count_integra}}</div>
      </div>
      <div class="jfsc-two-but">
       <!-- <router-link class="jfsc-two jfsc-two-left" to="/exchangeluck">
          <a class="jfsc-jfcj"></a>
          <div>积分抽奖</div>
        </router-link>-->
        <div class="jfsc-two jfsc-two-left" @click="go_exchangeluck">
          <a class="jfsc-jfcj"></a>
          <div>积分抽奖</div>
        </div>
        <router-link class="jfsc-two" to="/exchangerecord">
          <a class="jfsc-djjl"></a>
          <div>兑换记录</div>
        </router-link>
      </div>
      <div class="jfsc-two-but-hr"></div>
      <div class="jfsc-list-alldiv">
        <div class="jfsc-list-title hassub">精品兑换</div>
        <div class="jfsc-list-div">
          <!--<div class="jfsc-sp-div shophasri">
            <img   class="jfsc-sp-div-img">
            <p class="shop-name">延长爱售宝使用时间或增加人数</p>
            <p><a class="shop-font">70,000</a>积分／人年 （请联系客服兑换）</p>
          </div>-->
          <div class="jfsc-sp-div" @click="go_xq(val.merchandise_id)" v-for="(val,index) in items" :class="has_shophasri(index)"  :key="val.merchandise_id">
            <div class="jfsc-sp-div-img">
              <a  :style="{backgroundImage:'url(' + val.merchandise_url[0] + ')'}"/>
            </div>
            <div class="shop-name-div">
              <p class="shop-name">{{val.merchandise_name}}</p>
              <a class="shop-dh" >兑换</a>
            </div>
            <div>
              <span class="left"><a class="shop-font">{{val.use_integral}}</a>积分</span>
              <span class="right shopdisbin">市场价：<a class="shop-font">{{val.market_price}}</a>元</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: "integralshop",
    data () {
      return {
        count_integra:0,
        items:[],
      }
    },
    created(){//初始化数据
      var data={
        "page_num":0,
        "page_size":10
      }
      this.getShopList(data);
      var data2={
        "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)
      };
      let slef = this; // this 异步指向变更
      /**获取用户积分**/
      this.Invok("88016",data2,function (data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        } else {
          slef.count_integra=data.success.count_integra||0;
        }
      });
    },
    methods:{
      go_xq:function(e){
        if(localStorage.getItem("open_id"+this.$util.projectOnlyName)){
          this.$router.push({path:'/commoditydetails',query:{merchandise_id:e}});   //页面跳转
        }else{
          var redirect_uri=window.location.href.split('#')[0]+"#/commoditydetails?merchandise_id="+e;
          location.href=this.$util.serviceUrl+"/wechat/userAuth.do?redirectUri="+encodeURIComponent(redirect_uri);
        }
        //slef.$router.push({path:'/commoditydetails',query:{"merchandise_id":e}});   //页面跳转
      },
      has_shophasri:function(index) {
        index=index+1;
        if(index%2===0){
          return '';
        }else{
          return 'shophasri';
        }
      },
      getShopList:function(data){//查询商品列表
        let slef = this; // this 异步指向变更
        this.Invok("88021",data,function (data) {
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            slef.items=data.success.items;
          }
        });
      },
      go_exchangeluck:function(){
        this.$weui.alert("当前版本尚未开放，敬请期待后续版本开放");
      }
    }
  }
</script>
