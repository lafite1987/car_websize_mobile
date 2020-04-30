<template>
    <div id="Commoditydetails">
      <div class="head">
        <router-link class="head-jt" to="/integralshop"></router-link>
        <div class="head-text">商品详情</div>
      </div>
      <div class="center">
        <div>
          <div class="commoditydetails-title " >
            <slider :pages="pages" :sliderinit="sliderinit">
            </slider>
          </div>
          <div class="commoditydetails-all">
            <div class="hassub">
              <div class="commoditydetails-title-text">
                <div>（热门兑换）{{obj.merchandise_name}}</div>
                <div class="commoditydetails-money">
                      <div class="left"> <span class="commoditydetails-fon">{{obj.use_integral}}</span>积分 +<span class="commoditydetails-fon">{{obj.price}}</span>元</div>
                      <div class="left money-through">￥：{{obj.market_price}}元</div>
                      <div class="right money-right">运费￥:{{obj.freight}}元</div>
                </div>
              </div>
            </div>
            <div class="commoditydetailshasjt commoditydetails-adder" @click="go_getaddr">
              配送至：<span class="adder-input">{{address}}</span>
            </div>
          </div>
          <div class="commoditydetails-xq-text">详情说明</div>
          <div class="commoditydetails-xq">
                <div class="scale-box">
                <img v-for="(val,index) in obj.merchandise_info" :src="val" :key="index"/>
                </div>
          </div>
        </div>

        <div class="tg-foot-commod">
          <div class="tg-foot-commod-left">
            <a href="tel:400-059-0755" class="index-buttom-commod-tg" >
              <div class="tg-kf"></div>
              <a>联系客服</a>
            </a>
          </div>
          <a class="tg-foot-commod-right" @click="go_dh">立即兑换</a>
        </div>
      </div>
      <div v-show="is_poput">
        <div class="poput-div"></div>
          <div class="weui-dialog weui-animate-fade-in">
            <div class="weui-dialog__hd">
              <strong class="weui-dialog__title">确认收货信息</strong>
            </div>
            <div class="commoditydetails-dialog__bd">
              收货人：{{address_obj.address_name}}<br>
              电话：{{address_obj.address_phone}}<br>
              地址：{{address}}<br>
              支付价格：{{obj.use_integral}}积分+{{obj.price}}(元)(运费￥{{obj.freight||0}}元)
            </div>
            <div class="weui-dialog__ft">
              <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="is_qxdh">取消</a>
              <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="is_dh">确定</a>
            </div>
          </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "commoditydetails",
        data() {
            return {
              pages:[{}],//滑动配置[obj]
              sliderinit: {
                currentPage: 1,
                tracking: false,
                thresholdTime: 500, // 滑动判定时间
                thresholdDistance: 100, // 滑动判定距离
                loop: true // 无限循环
              },
              merchandise_id:"",
              obj:{},
              address:"您还没有填写地址，马上去填写",
              address_obj:{},
              address_id:"",
              this_scale:'',
              slideList:[],
              is_poput:false,
              merchandise_type:""////商品类型，E为非实物，M为实物
            }
        },
        created() {
          var open_id=this.$route.query.open_id;
          this.merchandise_id=this.$route.query.merchandise_id;
          if(open_id)localStorage.setItem("open_id"+this.$util.projectOnlyName,open_id);
          this.getinit();
          this.getAddress();
          this.this_scale=sessionStorage.getItem("rem")/100;
        },
        /*components: {
          'v-scroll': require("./refresh/Pullrefresh")
        },*/
        components: {
          'slider':require("@/components/slider/slider")
        },
        methods: {
            getinit:function(){//获取商品详情
              let slef = this; // this 异步指向变更
              var data={
                "merchandise_id":slef.merchandise_id
              }
              /**获取用户积分**/
              this.Invok("88022",data,function (data) {
                if (data.code != 0) {
                  slef.$weui.alert(data.msg);
                  return false;
                } else {
                  slef.obj=data.success;
                  var pages=[];
                  var slideList=data.success.merchandise_url;
                  for(var i=0;i<slideList.length;i++){
                    pages.push({
                      title:"",
                      style:'<a style="background:url(' + slideList[i] + ');background-size:contain;"></a>'
                    });
                  }
                  slef.pages=pages;
                }
              });
            },
            go_dh:function(){
                let slef = this; // this 异步指向变更
              if(slef.merchandise_type==='M'){
                var a="消费"+slef.obj.use_integral+"积分,兑换"+slef.merchandise_name;
                this.$weui.confirm(a,function(){
                  slef.is_dh();
                }, function(){

                });
              }else{
                if(slef.$util.isEmpty(slef.address_id)){
                  slef.$weui.alert("请选择收货地址");
                }else{
                  slef.is_poput=true
                }
              }
             },
            is_qxdh:function () {
              this.is_poput=false;
            },
            is_dh:function () {
              let slef = this; // this 异步指向变更
              //确定
              var data={
                "merchandise_id":slef.merchandise_id,
                "user_id":localStorage.getItem("user_id"+slef.$util.projectOnlyName),
                "address_id":slef.address_id,
                "open_id":localStorage.getItem("open_id"+slef.$util.projectOnlyName)
              }
              /**获取用户积分**/
              slef.Invok("88024",data,function (data) {
                if (data.code != 0) {
                  slef.$weui.alert(data.msg);
                  slef.is_poput=false;
                  return false;
                }else{
                  slef.is_poput=false;
                  var obj=data.success;
                  sessionStorage.setItem("commoditydetails_address"+slef.$util.projectOnlyName,JSON.stringify(slef.address_obj));
                  sessionStorage.setItem("commoditydetails_obj"+slef.$util.projectOnlyName,JSON.stringify(slef.obj));

                  if(obj.pay_ind==="N"||obj.pay_ind==="n"){
                    slef.$router.push({path:'/exchangesuccess',query:{order_num:obj.order_num}});   //页面跳转
                  }else{
                    sessionStorage.setItem("title"+slef.$util.projectOnlyName,obj.title);
                    sessionStorage.setItem("price_amt"+slef.$util.projectOnlyName,obj.price_amt);
                    sessionStorage.setItem("pay_from"+slef.$util.projectOnlyName,'1');
                    slef.$router.push({path:'/orderpayment',query:{shoporder_id:obj.shoporder_id,order_num:obj.order_num}});   //页面跳转
                  }
                }
              });
            },
           getAddress:function(){
              let slef = this; // this 异步指向变更
              var data_={
                      "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)||""
                 };
              slef.Invok("88018",data_,function (data) {
                    if (data.code != 0) {
                      slef.$weui.alert(data.msg);
                      return false;
                    }else{
                       var items=data.success.items;
                       if(items.length>0){
                            slef.address=items[0].province_name+''+items[0].address;
                            slef.address_obj=items[0];
                            slef.address_id=items[0].address_id;
                       }
                       for(var i=0;i<items.length;i++){
                          if(slef.$route.query.address_id==items[i].address_id){
                            slef.address=items[i].province_name+''+items[i].address;
                            slef.address_obj=items[i];
                            slef.address_id=slef.$route.query.address_id;
                              break;
                           }
                       }
                    }
                  });
           },
           go_getaddr:function () {
             //sessionStorage.setItem("is_choice"+this.$util.projectOnlyName,"1");
             this.$router.push({path:'/deliveryaddress',query:this.$route.query});   //页面跳转
          }
        }
    }
</script>
