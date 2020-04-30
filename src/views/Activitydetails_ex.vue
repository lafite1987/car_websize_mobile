<template>
  <div id="activitydetails" :style="styleObject">
    <div class="head" v-show="center=='center'">
      <router-link class="head-jt" to="/groupshop"></router-link>
      <div class="head-text">团购活动</div>
    </div>
    <div :class="center" style="max-width: 7.5rem;margin: 0 auto;">
       <vhtml-activity :dataList="thisData"></vhtml-activity>
    </div>
  </div>
</template>
<script>
  import activity from '@/components/activity/index_ex';
  export default {
    name: "",
    data () {
      return {
        fx_is:false,
        obj:{},
        tel:"javascript:void(0);",
        tel_d:"javascript:void(0);",
        hassaleuser_id:false,
        to_device_id:"",
        to_user_id:"",
        is_sygz:true,
        styleObject:{'pointer-events':'none'},
        thisData:{},
        center:''
      }
    },
    created(){//初始化数据
      //  var url = window.location.href;
      // if(url.indexOf('from=')!=-1 || url.indexOf('isappinstalled=')!=-1){
      //   window.location.href =url.split('?')[0]+''+url.split('#')[1]
      // }else{
         let slef = this; // this 异步指向变更
         // var groupbuy_id=this.$route.query.groupbuy_id||"";
         this.thisData=this.$route.query;
         var ua = navigator.userAgent.toLowerCase();
         var isWeixin = ua.indexOf('micromessenger') != -1;
         var isAndroid = ua.indexOf('android') != -1;
         var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);
         if (isWeixin) {
           //slef.center='center';
           slef.styleObject={};
         }
         var creater = localStorage.getItem('device_id')
         // var forward_flag = this.$route.query.forward_flag // 有UUID 是转发 没有是访问
         var dataObj = {
           creater:creater,
           forward_flag:this.$route.query.forward_flag || '',
           groupbuy_id:this.$route.query.groupbuy_id,
           saleuser_id:this.$route.query.saleuser_id || this.$route.query.to_user_id,
           type:this.$route.query.forward_flag ? '2':'1'
         }
         this.Invok("10014",dataObj,function (data) {})
      // }

      //slef.center='center';
      //slef.styleObject={};
    },
    components: {//引入上拉刷新 下拉加载组件
      'vhtml-activity': activity,
    },
    mounted:function () {

    },
    methods:{//监听函数

    }
  }
</script>
