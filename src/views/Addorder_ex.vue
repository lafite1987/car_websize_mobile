<template>
  <div id="addorder">
    <div class="head">
      <router-link class="head-jt" :to="{ path:'activitydetails_ex',query:this.$route.query}"></router-link>
     <!-- <a class="head-jt"></a>-->
      <div class="head-text">填写订单</div>
    </div>
 



    <div class="center">
      <div class="addorder" @click="goActivitydetails">
        <div class="left">
          <img class="addorderimg" :src="data.pic_url"/>
        </div>
        <div class="left addorder-text">
          <p class="addorder-p1">{{data.title}}<p/>
          <p class="addorder-p2">需要支付保证金：<span class="color-h">¥{{data.price_amt}}</span></p>
        </div>
      </div>
      <div class="addorder-ul-div" >
        <ul class="addorder-ul">
          <li class="addorder-li hassub">
            <div class="addorder-li-div">
              <label>姓名</label>
              <input  placeholder="请输入真实姓名" v-model="user_name">
            </div>
          </li>
          <li class="addorder-li hassub">
            <div class="addorder-li-div">
              <label>手机</label>
              <input placeholder="请输入手机号码" type="tel" v-model="phone">
            </div>
          </li>
          <li class="addorder-li hassub" v-show="is_login">
            <div class="addorder-li-div hasyzm">
              <label>验证码</label>
              <input placeholder="请输入验证码" type="tel" v-model="ver_code">
              <a class="addorder-yzm" @click="getcode">{{getcdetext}}</a>
            </div>
          </li>
           <li class="addorder-li hassub" v-show="is_login">
             <div class="addorder-li-div hasyzm">
              <label>省份</label>
             
          <Select class="input1"  v-model="province" size="large" style="margin-left:0.4rem;"   placeholder="请选择省份" @change="changeProvince($event)" >
            <option value=""  >请选择省份</option>
                                    <Option v-for="item in provinces" :value="item.province_id" :key="item.province_id">{{item.province}}</Option>
                                </Select>
            </div>
            
             </li>
          <li class="addorder-li hassub" v-show="is_login">
             <div class="addorder-li-div hasyzm">
              <label>城市</label>
             
          <Select class="input1" v-model="city" size="large"  style="margin-left:0.4rem;"   placeholder="请选择城市"   @change="changeCity($event)"  >
            <option value=""  >请选择城市</option>
                                    <Option v-for="item in citys" :value="item.city_id" :key="item.city_id">{{item.city}}</Option>
                                </Select>
            </div>
            
             </li>
          <li class="addorder-li hassub" v-show="is_login">
             <div class="addorder-li-div hasyzm">
              <label>专营店</label>
             
          <Select class="input1" v-model="storeId" size="large"  style="margin-left:0.1rem;"    placeholder="请选择专营店" @change="changeStation($event)">
              <option value=""  >请选择专营店</option>
                                    <Option v-for="item in storeList" :value="item.station_id" :key="item.station_id">{{item.station_name}}</Option>
                                </Select>
            </div>
            
             </li>

          <li class="addorder-li-ts hassub">
            <div class="addorder-li-div-ts">
              <label>车型</label>
            </div>
            <div class="addorder-na" @click="choiceClass" >
              <a v-for="(val,index) in data.classes_list" class="addorder-cx" :val="val.classes_id" :class="{click:val.classes_id==classes_id}">{{val.classes_name}}</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="addorder-sub" :class="{click:is_tiing}" @click="sub">提交订单</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "addorder_ex",
    data () {
      return {
        is_login:true,
        data:{},
        classes_id:"",
        classes_name:"",
        phone:"",
        user_name:"",
        ver_code:"",
        getcdetext:"验证码",
        province:"",
        city:"",
        storeId:"",
        provinces:[],
        citys:[],
        city_items:[],
        storeList:[],
        shop_items:[],
        is_getcode:false,
        is_tiing:false
      }
    },
    created(){//初始化数据
      var open_id=this.$route.query.open_id;
      if(open_id)localStorage.setItem("open_id"+this.$util.projectOnlyName,open_id);
      //if(!localStorage.setItem("open_id"))this.$router.push({path:'/activitydetails',query:this.$route.query});//页面跳转
      var data_={
        "groupbuy_id":this.$route.query.groupbuy_id,//	团购ID
        "to_user_id":this.$route.query.to_user_id,//	销售顾问ID
      }
      let slef = this; // this 异步指向变更
      this.Invok("88004",data_,function (data) {//查询活动信息
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        }else {
          slef.data=data.success;
          slef.data.classes_list=JSON.parse(slef.data.classes_list).classes_list;
          slef.provinces=slef.data.pro_items;
          var flag = 0;
          if( slef.provinces && slef.provinces.length == 1){
             slef.citys = slef.data.city_items;
             flag = 1;
          }
          slef.city_items=slef.data.city_items;          
          slef.shop_items=slef.data.shop_items;
          if(flag == 1 && slef.city_items && slef.city_items.length == 1){
               slef.storeList =  slef.shop_items;
          }
        }
      });
       if(!this.data)this.$router.push({path:'/activitydetails',query:this.$route.query});   //页面跳转

       //已经登录就查询用户信息
       if(localStorage.getItem("user_id"+this.$util.projectOnlyName)){
         this.is_login=false;
         var data0={
           "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)
         };
         /**查询用户信息**/
         this.Invok("88014",data0,function (data) {
           if (data.code != 0) {
             slef.$weui.alert(data.msg);
             return false;
           } else {
             slef.user_name=data.success.user_name;
             slef.phone=data.success.phone;
           }
         });
       }
    },
    methods:{
      goActivitydetails:function(){
          this.$router.push({path:'/activitydetails',query:this.$route.query});   //页面跳转
      },
      sub:function(){
        if(this.is_tiing)return false;
        var validator = new this.$util.Validator();
        validator.add(this.user_name, [{
          strategy: 'isEmpty',
          msg: "姓名不能为空"
        }]);
        validator.add(this.phone, [{
          strategy: 'isEmpty',
          msg: "手机号码不能为空"
        }]);
        validator.add(this.phone, [{
          strategy: 'isPhone',
          msg: "手机号码不正确"
        }]);
        if(this.is_login){
          validator.add(this.ver_code, [{
            strategy: 'isEmpty',
            msg: "验证码不能为空"
          }]);
        }
      
        validator.add(this.province, [{
          strategy: 'isEmpty',
          msg: "请选择省份"
        }]);
        validator.add(this.city, [{
          strategy: 'isEmpty',
          msg: "请选择城市"
        }]); 
        validator.add(this.storeId, [{
          strategy: 'isEmpty',
          msg: "请选择专营店"
        }]);
         validator.add(this.classes_id, [{
          strategy: 'isEmpty',
          msg: "请选择车型"
        }]);
        var mgs = validator.start();
        if(mgs){
          this.$weui.topTips(mgs, 3000);
          return false;
        }
        var data={
          "classes_id":this.classes_id,//意向车型列表
          "classes_name":this.classes_name,//
          "groupbuy_id":this.$route.query.groupbuy_id,//	团购ID
          "to_device_id":this.$route.query.to_device_id,
          "to_user_id":this.$route.query.to_user_id,
          "phone":this.phone,
          "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)||"",
          "user_name":this.user_name,
          "ver_code":this.ver_code, 
          "station_id":this.storeId,
          "open_id":localStorage.getItem("open_id"+this.$util.projectOnlyName)
        }
        let slef = this; // this 异步指向变更
        slef.is_tiing=true;
        this.Invok("88005",data,function (data) {//添加订单
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            slef.is_tiing=false;
            return false;
          }else {
            var da=data.success;
            !da.user_id||localStorage.setItem("user_id"+slef.$util.projectOnlyName,da.user_id);
            !data.msg.session_id||localStorage.setItem("session_id"+slef.$util.projectOnlyName,data.msg.session_id);
            slef.$router.push({path:'/orderpayment',query:{order_id:da.order_id}});   //页面跳转
          }
        });
      },
      choiceClass:function(e){//车型选择
        var this_ojb=e.target;
        if(this_ojb.tagName.toLowerCase()==="a"){
          if(this.classes_id===this_ojb.getAttribute("val")){
            this.classes_id="";
          }else{
            this.classes_id=this_ojb.getAttribute("val")||"";
          }

          this.classes_name=this_ojb.innerHTML||"";
        }
      },
      getcode:function(){//发送验证码
        if(this.is_getcode){
          return false;
        }
        if(this.$util.isEmpty(this.phone)){
          this.$weui.topTips('手机号码不能为空', 3000);
          return false
        }
        if(!this.$util.isPhone(this.phone)){
          this.$weui.topTips('手机号码不正确', 3000);
          return false
        }
        this.is_getcode=true;
        let slef = this; // this 异步指向变更

        /**60秒倒计时**/
        let timeOut=60;
        slef.getcdetext=(timeOut + "s");
        var timeInter = setInterval(function() {
          timeOut -= 1;
          slef.getcdetext=(timeOut + "s");
          if (timeOut == 0) {
            clearInterval(timeInter);
            slef.getcdetext="重新发送";
            slef.is_getcode=false;
          }
        }, 1000);
        /**发送验证码**/
        var data={
          "user_phone": this.phone,
          "msg_type":"C"
        }
        this.Invok("3007",data,function (data) {//发送验证码
          if (data.code != 0) {
            this.$weui.alert(data.msg);
            clearInterval(timeInter);
            slef.getcdetext="重新发送";
            slef.is_getcode=false;
            return false;
          } else {

          }
        });


      },
      changeProvince:function(e){
        var val = e.target.value;
         
         let  slef=this;
         slef.citys = [];
         slef.storeList = [];
          slef.province = val;
         for(var i=0;i<slef.city_items.length;i++){
            var ob_=slef.city_items[i];
            if(ob_.province_id == slef.province){
              slef.citys.push(ob_);
            }            
          }      

      },
      changeCity:function(e){
         var val = e.target.value;
         console.log("城市=="+val);        
         let  slef=this;
        slef.city=val;
        slef.storeList = [];
         for(var i=0;i<slef.shop_items.length;i++){
            var ob_=slef.shop_items[i];
            if(ob_.city_id == slef.city){
                slef.storeList.push(ob_);
            }            
          }    
      },
      changeStation:function(e){
         var val = e.target.value;
         console.log("直营店=="+val);        
         let  slef=this;
        slef.storeId=val; 
      }
    }
  }
</script>
