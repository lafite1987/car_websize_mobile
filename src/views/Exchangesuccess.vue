<template>
    <div id="exchangesuccess">
      <div class="head">
        <router-link class="head-jt" to="/exchangerecord"></router-link>
        <div class="head-text">兑换成功</div>
      </div>
      <div class="center">
        <div class="zfcgdiv">
          <div class="zfcg"></div>
          <div>兑换成功</div>
        </div>
        <div class="zfcgdiv-sm">关注积分商城首页“兑换记录”，掌握订单最新状态~</div>
        <div class="zjjl hassub exchangesuccess-top-oder nohasmatton">
          <div class="zjjl-img">
            <a :style="{backgroundImage:'url(' + obj.img + ')'}"></a>
          </div>
          <div class="zjjl-text">
            <div class="zjjl-text-top-p1">
             {{obj.merchandise_name}}
            </div>
            <div><span class="color-h">{{obj.use_integral}}</span>积分+<span class="commoditydetails-fon">{{obj.price}}</span>元</div>
          </div>
        </div>
        <div class="zjjl hassub">

          <div class="zjjl-text-dh">
            <div >
              <span class="zjjl-text-inblk-dh">{{address.address_name}}</span>       {{address.address_phone}}
            </div>
            <div>{{address.province_name}}{{address.address}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "exchangesuccess",
        data() {
            return {
              obj:{},
              address:{}
            }
        },
        created() {
          var  order_num=this.$route.query.order_num;
          var  address=sessionStorage.getItem("commoditydetails_address"+this.$util.projectOnlyName);
          var  obj=sessionStorage.getItem("commoditydetails_obj"+this.$util.projectOnlyName);
          if(obj){
            obj=JSON.parse(obj);
            try {obj.img=obj.merchandise_url[0]}catch (e) {}
            this.obj=obj;
          }
          if(address){
            this.address=JSON.parse(address);
          }
        },
        methods: {}
    }
</script>
