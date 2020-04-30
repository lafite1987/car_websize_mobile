<template>
    <div id="newdetail">
        <div class="fre_100">
	<ol><a href="javascript:;" @click="goBack"><img src="../assets/images/home/rtsj.gif"></a></ol>
    <div class="top_zi">汽车资讯</div>
</div>
<div style="height:1rem"></div>

<div class="news_ctnw">
	<div class="ctnw_tt">
     <ol>{{zixunDetail.TITLE}}</ol>
    	<span>{{zixunDetail.PUBLIC_TIME}}</span>
    </div>
    <div style="clear:both"></div>
    <div class="ctnw_center" v-html="zixunDetail.CONTENT"></div>
</div>
    </div>
</template>
<style>

/* 资讯 */
.fre_100{ height:1rem; background:#fff; position:fixed; left:0px; top:0px; width:100%; z-index:10; border-bottom:1px solid #eee; }
.fre_100 img{ width:100px; display:block; margin:10px 0 0 12px;}
.fre_100 a.na{ float:left;}
.fre_100 ol{ float:left; display:block;}
.fre_100 ol a{ width:50px; height:50px; display:block;}
.fre_100 ol a img{ width:0.45rem; margin:0px; padding-top:0.3rem; padding-left:12px; display:block;}
.top_zi{ position:absolute; left:20%; top:0px; text-align:center; width:60%; height:50px; line-height:50px; font-size:16px; color:#000; font-weight:bold;}


.ctnw_tt{ margin:0 15px; margin-top:0.32rem; border-bottom:1px solid #eee; padding-bottom:0.5rem;}
.ctnw_tt span{ display:block; font-size:0.28rem; color:#444; float: right;}
.ctnw_tt ol{ display:block; font-weight:bold; color:#c00; font-size:0.32rem; line-height:0.45rem; text-align: center}
.ctnw_center{ padding:0 0.3rem; margin-top:0.3rem; font-size:0.28rem; color:#444; line-height:24px; border-bottom:1px solid #eee; padding-bottom:0.4rem;}
.ctnw_center img{ display:block; width:100%;}
</style>
<script>
export default {
  name: "newsdetail",
  data() {
    return {
	  newsId:"",
	  zixunDetail:{},
    };
  },
  created() {
	  this.newsId=this.$route.query.id;
	  this.getZiXunDetail();
  },
  methods: {
	  getZiXunDetail(){
		  var tmpParam={
			   relativeurl: "com.chj.getNewsInfo",
			   id:this.newsId,
			   timestamp: new Date().getTime(),
		  };
		this.Invok2(tmpParam,data=>{
        if(data.ret=="1"){
		  this.zixunDetail=data.data;
        }
      });
	  },
	  goBack(){
		   this.$router.go(-1);
	  }
  },
  
};
</script>
