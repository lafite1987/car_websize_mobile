<template>
  <div id="audeliveryaddress">
    <div class="head">
      <router-link class="head-jt" :to="{ path:'deliveryaddress',query: this.$route.query}"></router-link>
      <div class="head-text">{{title}}</div>
    </div>
    <div class="center">
      <div class="address">
        <ul class="grzx-ul">
          <li class="hassub">
            <div class="myzl-li">
              <label class="address-label">收货人：</label>
              <input class="add-address-input" v-model="address_name" placeholder="请输入收货人姓名">
            </div>
          </li>
          <li class="hassub">
            <div class="myzl-li">
              <label class="address-label">手机号码：</label>
              <input class="add-address-input" v-model="address_phone" placeholder="请输入收货人手机号码">
            </div>
          </li>
          <li class="hassub">
            <div class="myzl-li hasjt" @click="weuiAddress">
              <label class="address-label">所在地区：</label>
              <input class="add-address-input"  v-model="province_name"  disabled="disabled" placeholder="请选择收货人所在地区">
            </div>
          </li>
          <li class="hassub">
            <div class="new-address-ter">
              <label class="new-address-label">详细地址：</label>
              <textarea class="new-address-textarea" v-model="address"></textarea>
            </div>
          </li>
        </ul>
        <div class="address-hr"></div>
        <div class="button-01" @click="sub" v-if="is_choice" :class="{click:is_choiceing}">保存</div>
        <div class="button-01" @click="sub" v-else="is_choice" :class="{click:is_choiceing}">保存并使用</div>
      </div>
    </div>
  </div>
</template>
<script>
  import city from '@/plugins/static/city.weui-3'//加载帮助类
  export default {
    name: "audeliveryaddress",
    data () {
      return {
        this_has:false,
        is_choice:true,
        address_name:"",
        title:'新增收货人',
        address_phone:"",
        is_choiceing:false,
        province_name:"",//所以在地区
        address:"",//详细地址
        address_id:"",//地址ID
        province:"",//省id
        county:"",//区id
        city:""//城市id
      }
    },
    created(){
      var tiems=localStorage.getItem("deliveryaddress"+this.$util.projectOnlyName);
      if(this.$route.query.merchandise_id){
        this.is_choice=false;
      }
      if(tiems){
        tiems=JSON.parse(tiems);
        this.address_name=tiems.address_name;
        this.address_phone=tiems.address_phone;
        this.province_name=tiems.province_name;
        this.address=tiems.address;
        this.address_id=tiems.address_id;
        this.province=tiems.province;
        this.county=tiems.county;
        this.city=tiems.city;
        this.title='编辑收货人'
      }
    },
    destroyed(){
      localStorage.removeItem("deliveryaddress"+this.$util.projectOnlyName);
    },
    methods:{
      /**微信地址选择**/
      weuiAddress(){
        let slef = this; // this 异步指向变更
        this.$weui.picker(city.city, {
          depth: 3,
          defaultValue:[1,1,1],
          onChange: function onChange(items) {
            slef.province_name= items[0].label + " " + items[1].label + " " + items[2].label;
          },
          onConfirm: function onConfirm(items) {
            slef.province_name= items[0].label + " " + items[1].label + " " + items[2].label;
            slef.province=items[0].value;
            slef.city=items[1].value;
            slef.county=items[2].value;
          },
          id: 'cascadePicker'
        });
      },
      sub(){
        if(this.is_choiceing)return false;
        var validator =new this.$util.Validator();
        validator.add(this.address_name, [{
          strategy: 'isEmpty',
          msg: "收货人姓名不能为空"
        }]);
        validator.add(this.address_phone, [{
          strategy: 'isEmpty',
          msg: "收货人手机号码不能为空"
        }]);
        validator.add(this.address_phone, [{
          strategy: 'isPhone',
          msg: "收货人手机号码不正确"
        }]);
        validator.add(this.province, [{
          strategy: 'isEmpty',
          msg: "省市区不能为空"
        }]);
        validator.add(this.address, [{
          strategy: 'isEmpty',
          msg: "详细地址不能为空"
        }]);
        var mgs = validator.start();
        if(mgs){
          this.$weui.topTips(mgs, 3000);
          return false;
        }
         var data={
           "address_name":this.address_name,
           "address_phone":this.address_phone,
           "province":this.province,
           "county":this.county,
           "city":this.city,
           "address":this.address,
           "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName),
           "address_id":this.address_id
         };
        let slef = this; // this 异步指向变更
        this.is_choiceing=true;
        this.Invok("88017",data,function (data) {
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            slef.is_choiceing=false;
            return false;
          } else {
            localStorage.removeItem("deliveryaddress"+slef.$util.projectOnlyName);
            if(slef.is_choice){
              slef.$weui.toast('操作成功', {
                duration: 1500,
                callback: function(){
                  slef.$router.push({path:'/deliveryaddress'});   //页面跳转
                }
              })
            }else{
              slef.$router.push({path:'/commoditydetails',query:{merchandise_id:slef.$route.query.merchandise_id,address_id:data.success.address_id}});   //页面跳转
            }
          }
        });
      }
    }
  }
</script>
