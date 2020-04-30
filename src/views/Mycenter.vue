<template>
  <div id="mycenter">
    <div class="head">
      <router-link class="head-jt" to="/groupshop"></router-link>
      <!--<a class="head-jt" href="javascript:history.go(-1);"></a>-->
      <div class="head-text">个人中心</div>
    </div>
    <div class="center">
      <div class="user-xx">
        <div @click="gomydata">
          <div class="toux" v-if="user_url" :style="{backgroundImage: 'url(' + user_url + ')'}"></div>
          <div class="toux" v-else></div>
          <div class="user-name">{{user_name}}</div>
        </div>
        <div class="center-jf">
          <router-link class="center-jf-left" to="/integralshop">积分：<span>{{count_integra}}</span></router-link>
          <!--<div class="center-jf-left" ></div>-->
          <router-link class="center-jf-ri" to="/mymsg">新消息：<span>{{news}}条</span></router-link>
        </div>
      </div>
      <div class="grzx-list">
        <ul class="grzx-ul">
          <li class="hassub">
            <router-link class="grzx-li hasjt" to="/mymsg">我的消息<span class="chj-badge" v-show="news>0">{{news}}</span></router-link>
          </li>
          <li class="hassub">
            <router-link class="grzx-li xuebi_1 hasjt" to="/myorder">我的订单</router-link>
          </li>
        <!--  <li class="hassub">
            <router-link class="grzx-li xuebi_2 hasjt" to="">我的卡券</router-link>
          </li>-->
          <li class="hassub">
            <router-link class="grzx-li xuebi_3 hasjt" to="/integralshop">积分兑换</router-link>
          </li>
          <li class="hassub">
            <router-link class="grzx-li xuebi_4 hasjt" to="/myshare">我的推荐</router-link>
          </li>
          <li class="hassub">
            <router-link class="grzx-li xuebi_5 hasjt" to="/deliveryaddress">收货地址</router-link>
          </li>
         <!-- <li class="hassub">
            <router-link class="grzx-li xuebi_6 hasjt" to="">绑定微信号</router-link>
          </li>-->
          <div class="hr hassub"></div>
          <li class="hassub">
            <router-link class="grzx-li xuebi_7 hasjt" to="/aboutwe">关于我们</router-link>
          </li>
          <li >
            <div class="grzx-li xuebi_8 callphone-li">联系客服
              <a class="callphone" href="tel:400-059-0755">拨打电话</a>
            </div>
          </li>
        </ul>

      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: "mycenter",
    data () {
      return {
        user_name:"",
        user_url:"",
        news:0,
        count_integra:0
      }
    },
    created(){//初始化数据
    debugger
     var user_id=localStorage.getItem("user_id"+this.$util.projectOnlyName);
     //if(!user_id)this.$router.push({path:'/login'});   //收货地址
      let slef = this; // this 异步指向变更
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
          slef.user_url=data.success.user_url;
        }
      });

      var data1={
        "notify_status":"0",//1为已读，0为未读;
        "user_id":localStorage.getItem("user_id"+slef.$util.projectOnlyName)
      };
      /**获取用户未读消息**/
      this.Invok("88009",data1,function (data) {
        if (data.code != 0) {
          slef.news=0;
        } else {
          slef.news=data.success.totalRecords||0;
        }
      });

      var data2={
        "user_id":localStorage.getItem("user_id"+slef.$util.projectOnlyName)
      };
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
      gomydata(){
        this.$router.push({path:'/mydata'});   //收货地址
      },
      gonews(){
        this.$router.push({path:'/myorder'});   //我的订单
      }
    }
  }
</script>
