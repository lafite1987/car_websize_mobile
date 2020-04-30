<template>
  <div id="addorderpeople">
    <div class="head">
      <a class="head-jt" href="javascript:history.go(-1);"></a>
      <div class="head-text">下单人数</div>
    </div>
    <div class="center">
      <div class="order-num hassub" v-for="(val,index) in items" :class="{hasmargin_top_oder:index===0}" >
        <p class="order-num-h3">{{val.name}}  {{val.phone}}</p>
        <p>参与：{{val.title}}</p>
        <p>报名时间：{{val.involvement_data}}</p>
      </div>
      <div class="order-num-nohashd" v-show="items.length==0">
        <div class="nohashd-logo"></div>
        <div>你的朋友没在活动中下单哦~</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "addorderpeople",
    data () {
      return {
        items:[]
      }
    },
    created(){//初始化数据
      var data={
          "groupbuy_id":this.$route.query.groupbuy_id,
        "order_ind":"1"//1则查询下单人数，为0则查询所有参与人数
      }
      let slef = this; // this 异步指向变更
      this.Invok("88012",data,function (data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        }else {
          slef.items=data.success.items;
        }
      });
    },
    methods:{

    }
  }
</script>
