<template>
  <div id="deliveryaddress">
    <div class="head">
      <router-link  to="/mycenter" v-if="is_choice" class="head-jt"></router-link>
      <router-link :to="{path:'commoditydetails',query: this.$route.query}" v-else  class="head-jt" ></router-link>
      <div class="head-text">收货地址</div>
    </div>
    <div class="center">
      <div class="address" v-show="this_has">
        <div class="no-address">
          <div class="no-address-img"></div>
          <div class="no-address-text">您还没有填写地址哦~</div>
        </div>
      </div>
      <div class="address" v-show="items.length>0">
        <div class="address-add-div" v-for="(val,index) in items" :key="val.address_id" :class="{hasmargin_top_16:index!==0}">
          <div class="address-add-top hassub">
            <div class="address-add-top-padd" @click="setadder(val.address_id)">
              <div class="address-add-top-ti"><span class="zjjl-text-inblk">{{val.address_name}}</span>{{val.address_phone}}</div>
              <div class="address-add-top-p1">{{val.province_name}}{{val.address}}</div>
            </div>
          </div>
          <div class="address-add-boom">
            <div class="input-checkbox" :class="{click:val.def_ind==1}" @click="updatamr(index)" v-show="is_choice">已设为默认</div>
            <div class="address-updata">
              <a class="address-upd" @click.top="updataadd(index)">编辑</a>
              <a class="address-del" @click="deladd(index)" v-show="is_choice">删除</a>
            </div>
          </div>
        </div>
        <div class="address-hr" v-show="items.length>0"></div>

        <!--<div class="address-add-div hasmargin-top-16">
          <div class="address-add-top hassub">
            <div class="address-add-top-padd">
              <div><span class="zjjl-text-inblk">黄波锦</span>13420955558</div>
              <div class="address-add-top-p1">深圳市宝安区宝源路168号名优中心B座B603</div>
            </div>
          </div>
          <div class="address-add-boom">
            <div class="input-checkbox">已设为默认</div>
            <div class="address-updata">
              <a class="address-upd">编辑</a>
              <a class="address-del">删除</a>
            </div>
          </div>
        </div>-->

      </div>
      <router-link class="button-02" :to="{ path:'audeliveryaddress',query: this.$route.query}">新增地址</router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: "deliveryaddress",
    data () {
      return {
        this_has:false,
        items:[],
        is_choice:true,
      }
    },
    created(){
      if(this.$route.query.merchandise_id){//有商品ID说明是从积分商品过来的
        this.is_choice=false;
      }
      var data={
          "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)||""
      };
      let slef = this; // this 异步指向变更
      this.Invok("88018",data,function (data) {//获取用户收货地址
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        } else {
          slef.items=data.success.items;
        /*  if(slef.items.length>0)slef.itemslength=true;*/
          if(slef.items.length===0)slef.this_has=true;
        }
      });
    },
    methods:{//
      updataadd:function(index){//修改地址
        localStorage.setItem("deliveryaddress"+this.$util.projectOnlyName,JSON.stringify(this.items[index]));
        this.$router.push({path:'/audeliveryaddress',query:this.$route.query});   //页面跳转
      },
      setadder:function(e){
        if(this.is_choice)return false;
          this.$router.push({path:'/commoditydetails',query:{merchandise_id:this.$route.query.merchandise_id,address_id:e}});   //页面跳转
      },
      deladd:function(index){//删除地址
        let slef = this; // this 异步指向变更
        this.$weui.confirm('确定删除？',function(){
            var data={
              "address_id":slef.items[index].address_id,
              "user_id":localStorage.getItem("user_id"+slef.$util.projectOnlyName)||""
            };
            slef.Invok("88020",data,function (data) {
              if (data.code != 0) {
                slef.$weui.alert(data.msg);
                return false;
              } else {
                slef.$weui.toast('操作成功', {
                  duration: 1500,
                });
                var it=[];
                for(var i=0;i<slef.items.length;i++){
                  var obj=slef.items[i];
                  if(i!==index){
                    it.push(obj);
                  }
                }
                slef.items=it;
              }
            });
          },
          function(){

          });
      },
      updatamr:function(index){//设为默认
        if(this.items[index].def_ind=="1")return false;
        var data={
          "address_id":this.items[index].address_id,
          "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)||""
        };
        let slef = this; // this 异步指向变更
        this.Invok("88019",data,function (data) {
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            slef.$weui.toast('设为默认成功', {
              duration: 1500,
            });
            var it=[];
            for(var i=0;i<slef.items.length;i++){
              var obj=slef.items[i];
              if(i==index){
                obj.def_ind="1";
                it.unshift(obj); //将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度
              }else{
                obj.def_ind="0";
                it.push(obj);
              }
            }
            slef.items=it;
          }
        });


      }
    }
  }
</script>
