<template>
  <div id="myshare">
    <!--<div class="head">
      <router-link class="head-jt" to="/mycenter"></router-link>
      <div class="head-text">我的分享</div>
    </div>
    <div class="center">-->
      <div class="tj-ul" >
        <div class="tj-li hasborder"  @click="goto_('people_num')">
          <p><span class="color-h">{{people_num}}</span>人 </p>
          <p>累计参与人数 </p>
        </div>
        <div class="tj-li hasborder"  @click="goto_('add_order_num')">
          <p><span class="color-h">{{add_order_num}}</span>人 </p>
          <p>累计下订人数 </p>
        </div>
        <div class="tj-li">
          <p><span class="color-h">{{integral}}</span>积分</p>
          <p>共获得积分数 </p>
        </div>
      </div>
      <div class="tj-dx-div" v-for="val in items" :key="val.groupbuy_id">
        <div class="tj-dx-div-title">{{val.share_data}} 分享</div>
        <div class="tj-dx-div-cneter" @click="go_activitydetails(val.groupbuy_id)">
          <div class="tj-dx-div-cneter-left">
            <img>
          </div>
          <div class="tj-dx-div-cneter-ri">
            <p class="tj-dx-div-cneter-p1">{{val.title}}</p>
            <p>{{val.surplus_date}}<!--活动时间：2017-07-05 10:00至2017-07-12...--> </p>
            <p><span class="color-h">¥{{val.price_amt}} </span> 保证金</p>
          </div>
        </div>
        <div class="tj-dx-div-num">
          <div class="tj-dx-div-a1">
            <!-- 带查询参数，下面的结果为 /register?plan=private -->
            <router-link class="tj-dx-div-a" :to="{ path: 'involvementpeople', query: { groupbuy_id:val.groupbuy_id}}">{{val.people_num}}人参与</router-link>
          </div>
          <div class="tj-dx-div-a2">
            <router-link class="tj-dx-div-a" :to="{ path: 'addorderpeople', query: { groupbuy_id:val.groupbuy_id}}">{{val.add_order_num}}人下订</router-link>
          </div>
          <div class="tj-dx-div-a3">
           <!-- <a class="tj-dx-div-a">获得5000积分</a>-->
          </div>
        </div>
      </div>
      <div v-show="has_data">
        <div class="tj-nohastj"></div>
        <div class="tj-nohastj-text">您还没有推荐过活动哦，赶快试试吧~</div>
        <router-link class="button-01" to="/groupshop">推荐送积分，点击查看</router-link>
      </div>
    </div>
 <!-- </div>-->
</template>
<script>
  export default {
    name: "myshare",
    data () {
      return {
        has_data:true,
        items:[],
        people_num:0,
        add_order_num:0,
        integral:0,
      }
    },
    created(){//初始化数据
      var data={
        "act_status":"",//	活动状态(N为未开始，P为剩余中，E为已结束)	string
        "city_id":""//	城市ID
      }
      let slef = this; // this 异步指向变更
      this.Invok("88010",data,function (data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        } else {
          slef.people_num=data.success.people_num||0;
          slef.add_order_num=data.success.add_order_num||0;
          slef.integral=data.success.integral||0;
          slef.items=data.success.items;
          if(slef.items.length!==0){
            slef.has_data=false;
          }
        }
      });
    },
    methods:{
      goto_:function(e){
       if(e==="people_num"){
         this.$router.push({path:'/involvementpeople'});   //页面跳转
       }else if(e==="add_order_num"){
         this.$router.push({path:'/addorderpeople'});   //页面跳转
       }
      },
      go_activitydetails:function (e) {
        this.$router.push({path:'/activitydetails',query:{groupbuy_id:e}});   //页面跳转
      }
    }
  }
</script>
