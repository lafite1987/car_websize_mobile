<template>
  <div id="mymsgcontent">
    <div class="head">
      <a class="head-jt" href="javascript:history.go(-1);"></a>
      <div class="head-text">我的消息</div>
    </div>
    <div class="center">
      <div class="xx-nr-center">
        <div class="head-data">{{notify_date}}</div>
        <div class="nr-text"> {{notify_content}}</div>
        <div class="xx-qm">{{publisher}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "mymsgcontent",
    data () {
      return {
        notify_date:"",
        notify_content:"",
        publisher:""
      }
    },
    created(){//初始化数据
      var notify=sessionStorage.getItem("notify"+this.$util.projectOnlyName);
      if(notify){
        notify=JSON.parse(notify);
        this.notify_date=notify.notify_date;
        this.notify_content=notify.notify_content;
        this.publisher=notify.publisher;
      }else{
        this.$router.push({path:'/mymsg'});   //页面跳转
      }
    },
    methods:{

    }
  }
</script>
