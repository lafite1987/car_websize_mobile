<template>
    <div id="news">
  <div class="top_100">
   <div class="top_left" @click="addaddress">
        <a href="javascript:;">{{city_name}}</a>
      </div>
    <!--<div class="top_right"><a href="#"></a></div>-->
  </div>
<div class="nee_tt">
	<div class="pnd">
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,idx) in newsMenus"  :key="idx"  @click="getZiXun(item.BIANMA,idx)" >
                  <a href="javascript:;" :class="{'on':idx==isActive}">{{item.NAME}}</a>
              </div>
            </div>
        <!-- Add Pagination -->
        	<!--<div class="swiper-pagination"></div>-->
      </div>
   </div>
</div>
<div style="height:2rem;"></div>
<div class="new_list">
    <div class="new_center">
         <v-scroll
        :on-refresh="onRefresh"
        :on-infinite="onInfinite"
        :dataList="scrollData">
    	<ul style="margin-top:1.3rem">
              <template v-for="item in zixunList"> 
        	  <li :key="item.id" @click="zixunClick(item.id)">
            	<div class="new_tab1" v-if="item.picUrl.length>1">
                     <a href="javascript:;">
                <span>{{item.title}}</span>
                <template v-for="subItem in item.picUrl">
                     <img  :key="subItem.id" :src="subItem.url" />
                </template>
                <div class="clear"></div>
                <div class="new_ctf">
                  <ol>{{item.keywords}}</ol>
                  <em>{{item.publicTime}}</em>
                  <div class="clear"></div>
                </div>
                <div class="line1"></div>
              </a>
                </div>
                <div class="new_tab2" v-else>
                    <a href="javascript:;">
                    	<div class="lf_tt">
                        	<span>{{item.title}}</span>
                            <ol>{{item.keywords}}</ol>
                        </div>
                        <div class="rt_tt">
                           <template v-for="subItem in item.picUrl"><img  :key="subItem.id" :src="subItem.url" /></template>
                        </div>
                        <div class="clear"></div>
                        <div class="line1"></div>
                    </a>
                </div>
            </li>
              </template>
        </ul>
         </v-scroll>
    </div>
</div>

<div style="height:1rem;"></div>
 <div class="menu">
      <div class="line1"></div>
      <ul>
        <li @click="tabClick('/')">
          <a href="javascript:;" class="a1">首页</a>
        </li>
        <li  class="on" @click="tabClick('/news')">
          <a  href="javascript:;"  class="a2">资讯</a>
        </li>
        <li  @click="tabClick('/broadcast')">
          <a  href="javascript:;"  class="a5">直播</a>
        </li>
        <li @click="tabClick('/particularsell')">
          <a  href="javascript:;"  class="a3">特卖</a>
        </li>
        <li @click="tabClick('/groupshop')">
          <a  href="javascript:;"  class="a4">团购</a>
        </li>
      </ul>
    </div>
    </div>
</template>
<style scoped>
/* 公共样式 */
body{margin:0; padding:0;  font-family:微软雅黑, Arial, Georgia, Cambria; font-size:12px;line-height:18px;color:#666;text-align:left; border:none; background:#fff;}
body,html{ height:100%; background: #fff;}
img,html,p,ul,li,input,form,h1,h2,h3,h4,h5,h6,dl,dd,dt,ol,input{margin:0;padding:0;border:0;}
ul,li{list-style-type:none;}
img{vertical-align:top;border:0;}
a:link{color:#333;text-decoration: none;}
a:visited{color:#333;text-decoration: none;}
a:hover{color:#333;text-decoration: none;}
a:active{color:#0051ff;text-decoration: none;}
.clear{clear:both;font-size:0px;height:0px;line-height:0px;overflow:hidden;}
fieldset, img{border:0;}
input, label, select, option, textarea, button, fieldset, legend{font:12px/18px Verdana, Simsun, Helvetica, Arial, sans-serif; vertical-align:middle}
.line1{ height:1px; font-size:0px; background:#ddd; -webkit-transform: scaleY(0.5); -webkit-transform-origin:0 0; overflow: hidden;}

.top_100{ width:100%; height:1rem; position: fixed; left:0px; top:0px; background:#fff url(../assets/images/home/logo.gif) no-repeat center 0.24rem; background-size:1.43rem 0.54rem; z-index:999; border-bottom:1px solid #eee;}
.top_100 .top_left{ height:1rem; background: url(../assets/images/home/tb1.gif) no-repeat 0.3rem 0.3rem; background-size:0.3rem 0.36rem; position:absolute; left:0rem; top:0px; font-size:0.28rem; line-height:1rem;}
.top_100 .top_right{height:1rem; width:1rem; background: url(../assets/images/home/tb2.gif) no-repeat center 0.34rem; background-size:0.34rem 0.34rem; position:absolute; right:0px; top:0px;}
.top_100 .top_left a{ display:block; height:1rem; width:1rem; padding-left:0.7rem; }
.top_100 .top_right a{ display:block; height:1rem; width:1rem;}



.at_gg{ margin:0 0.25rem; margin-top:0.28rem;}
.at_gg img{ width:6.96rem; height:1.52rem; display:block; border-radius:5px;}


.new_tt{margin:0 0.25rem; margin-top:0.15rem;}
.new_tt a{ height:1rem; font-weight:bold; padding-right:0.5rem; line-height:1rem; font-size:0.3rem; color:#3e3f47;}
.new_tt a.on{ color:#0051ff;}

.new_center{ margin:0 0.25rem;}
.new_center li{ margin-top:0.3rem;}
.new_tab1 span{ font-size:0.32rem; color:#333; display:block; line-height:0.45rem; margin-bottom:0.2rem;}
.new_tab1 img{ width:2.23rem; height:1.68rem; display:block; float:left; margin-right:2px;}
.new_ctf{ margin:0.25rem 0;}
.new_tab1 a{ width:100%; display:block;}
.new_ctf ol{ float:left; color:#aeaeae; background: url(../assets/images/home//bc.gif) no-repeat 0 0.05rem; background-size:0.26rem 0.26rem; padding-left:0.4rem; font-size:0.24rem;}
.new_ctf em{ float:right; font-style: normal; color:#aeaeae; font-size:0.24rem;}


.new_tab2 .lf_tt{ float:left; width:4.5rem;}
.new_tab2 .lf_tt span{ font-size:0.32rem; color:#333; display:block; line-height:0.45rem; overflow:hidden; margin-bottom:0.3rem; margin-top:0.1rem;}
.new_tab2 .lf_tt ol{color:#aeaeae; background: url(../assets/images/home//bc.gif) no-repeat 0 0.05rem; background-size:0.26rem 0.26rem; padding-left:0.4rem; font-size:0.24rem;}
.new_tab2 .rt_tt{ float:right;}
.new_tab2 .rt_tt img{  width:2.23rem; height:1.68rem; display:block; margin-bottom:0.28rem;}
.load{ font-size:0.28rem; text-align:center; line-height:1rem; height:1rem; color:#666;}

.menu{ width:100%; height:1rem; position:fixed; z-index:1000; left:0px; bottom:0px; background:#fff;}
.menu li{ width:20%; height:1rem; float:left; text-align:center; }
.menu li a{ font-size:0.2rem; color:#b8bec5; display:block;}
.menu li a.a1{ background: url(../assets/images/home//mu1.png) no-repeat center 0.1rem; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li.on a.a1{background: url(../assets/images/home//mu11.png) no-repeat center 0.1rem; color:#0051ff; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li a.a2{ background: url(../assets/images/home//mu2.png) no-repeat center 0.1rem; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li.on a.a2{background: url(../assets/images/home//mu22.png) no-repeat center 0.1rem; color:#0051ff; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li a.a3{ background: url(../assets/images/home//mu3.png) no-repeat center 0.1rem; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li.on a.a3{background: url(../assets/images/home//mu33.png) no-repeat center 0.1rem; color:#0051ff; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li a.a4{ background: url(../assets/images/home//mu4.png) no-repeat center 0.1rem; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li.on a.a4{background: url(../assets/images/home//mu44.png) no-repeat center 0.1rem; color:#0051ff; display:block; padding-top:0.62rem; background-size:0.58rem 0.58rem;}
.menu li a.a5 {
  background: url(../assets/images/home/mu5.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a5 {
  background: url(../assets/images/home/mu55.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.nee_tt{ height:1rem; position: fixed; left:0; top:1.01rem; width:100%; background:#fff; border-bottom:1px solid #eee; z-index:110;}
.nee_tt .swiper-slide{ font-size:0.3rem; float:left; width:auto; }
.nee_tt a{ color:#333; display:block;  height:0.96rem; line-height:1rem;}
.nee_tt a.on{ color:#0051ff; border-bottom:2px solid #0051ff; height:0.96rem;}
.nee_tt .pnd{ padding:0 15px;}

.pull-refresh{height: auto !important;}
.swiper-container {margin: 0 auto;position: relative;overflow: hidden;z-index: 1;}
.swiper-wrapper {position: relative;width: 100%;height: 100%;z-index: 10;display: -webkit-box;display: -moz-box;
  display: -ms-flexbox;display: -webkit-flex;display: flex;
  -webkit-transition-property: -webkit-transform;-moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;-ms-transition-property: -ms-transform;transition-property: transform;
  -webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;

}
.swiper-container-horizontal > .swiper-pagination {bottom: 5px;left: 0;width: 100%;
}

.swiper-slide a {display: block;width: 100%;}
#news .swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  margin-right: 0.3rem;
}
.yo-scroll{
  margin-left:0.25rem;
  margin-right:0.25rem;
  margin-bottom:1.2rem;
}
</style>
<script>
//import Swiper from "Swiper";
const Swiper = window.Swiper
export default {
  name: "news",
    components: {
    //引入上拉刷新 下拉加载组件
    "v-scroll": require("@/components/refresh/Pullrefresh")
  },
  data() {
    return {
      city_id: "",
      city_name: "全国",
      newsMenus:[],//资讯菜单
      subtype:"",
      isActive:0,//
      pageNo:1,//页码
      pageSize:8,
      pageTotal:0,
      zixunList:[],//资讯列表
       scrollData: {
        noFlag: false //不显示暂无更多数据显示
      },

    };
  },
  created() {
    this.city_id =
      localStorage.getItem("address_id" + this.$util.projectOnlyName) || "";
       this.city_name =
      localStorage.getItem("address_name" + this.$util.projectOnlyName) || "全国";
    this.getNewsMenus();
  },
  methods: {
    //图片轮播
    mounted() {
      var that = this;
      that.$nextTick(function() {
        var swiper = new Swiper('.swiper-container', {
         // pagination: { el: ".swiper-pagination", clickable: true },
         slidesPerView: 'auto',
         spaceBetween: 20,
          // slidesPerView: 1,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // spaceBetween: 0,
         // autoplay: true,
          // loop: true,
         // autoplayDisableOnInteraction: false
        });
      });
    },

  //获取资讯菜单
  getNewsMenus(){
      var tmpParam = {
        relativeurl: "com.chj.getDicTypeList",
        code:"REC_INDEX_NEWS_ZXFL",
        timestamp: new Date().getTime()
      };
      this.Invok2(tmpParam,data=>{
        if(data.ret=="1"){
          this.newsMenus=data.list;
          var subtype=data.list[0].BIANMA;
          this.mounted(); 
          this.getZiXun(subtype,0);
        }
        
      });
  },
  //资讯菜单点击
  //获取资讯列表
  getZiXun(subtype,idx){
    this.subtype=subtype;
    this.isActive=idx;
    this.pageNo=1;
    var tmpParam = {
        relativeurl: "com.chj.getNewsList",
        subtype:subtype,
        pageNo:1,
        pageSize:8,
        timestamp: new Date().getTime()
      };
      this.Invok2(tmpParam,data=>{
        if(data.ret=="1"){
          let pull = document.querySelector(".pull-refresh");
           pull.style.top="1rem";
          this.pageTotal=data.list.length;
          this.zixunList=data.list;
        }
      });
  },
  //资讯点击
  zixunClick(newId){
    this.$router.push({
        path:"/newsdetail",
        query:{id:newId}
    });
  },
 //点击加载更多
 moreClick(){
   this.pageNo++;
    var tmpParam = {
        relativeurl: "com.chj.getNewsList",
        subtype:this.subtype,
        pageNo:this.pageNo,
        pageSize:this.pageSize,
        timestamp: new Date().getTime()
      };
      this.Invok2(tmpParam,data=>{
        if(data.ret=="1"){
          this.pageTotal=data.list.length;
          this.zixunList=this.zixunList.concat(data.list);
        }
      });
 },
   onRefresh(done) {
     this.getZiXun(this.subtype,this.isActive);
     done(); //
    },
    onInfinite: function(done) {
      let more = this.$el.querySelector(".load-more");
      if (this.pageTotal < this.pageSize) {
        //当前页数==总页数
        more.style.display = "none"; //隐藏加载条
        this.scrollData.noFlag = true;
      } else {
       this.moreClick();
       more.style.display = "none"; //隐藏加载条
      }
      done();
    },
    tabClick(routePath){
      this.$router.push({
        path:routePath
      });
    }, //地址点击
    addaddress:function(){
        this.$router.push({path:'/addresslist'});   //页面跳转
      },
  },
  
};
</script>
