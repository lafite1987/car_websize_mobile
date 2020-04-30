<template>
  <div id="home">
    <div class="top_100">
      <div class="top_left" @click="addaddress">
        <a href="javascript:;">{{city_name}}</a>
      </div>
      <!--<div class="top_right"><a href="#"></a></div>-->
    </div>
    <div style="height:1rem;"></div>

    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper" >
          <div class="swiper-slide" v-for="item in swiperArr" :key="item.resourceId" 
          :resourceId="item.resourceId" :url="item.url" @click="clickAdvert(item.resourceId,item.url)">
            <a href="javascript:;" style="display:block">
              <img :src="item.picUrl" />
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="brand_ct">
      <span>选择品牌</span>
      <ul>
        <template v-for="item in subcarBrands"  >
        <li :key="item.automakers_id" 
        @click="brandClick(item.automakers_id,item.automakers_name)" >
          <a href="javascript:;">
            <img :src="item.brand_logo" />
            <em>{{item.automakers_name}}</em>
          </a>
        </li>
        </template>
        <li @click="brandClick('','')">
          <a href="javascript:;">
            <img src="../assets/images/home/l10.jpg" />
            <em>更多品牌</em>
          </a>
        </li>
      </ul>
      <div class="clear"></div>
    </div>

    <div class="at_gg"  :adv_id="headAd.id" :resourceId="headAd.resourceId" :url="headAd.url"  @click="clickAdvert(headAd.resourceId,headAd.url)">
      <a href="javascript:;">
        <img :src="headAd.picUrl" />
      </a>
    </div>

    <div class="new_list">
      <div class="new_tt">
        <div class="uto1" style="height:1rem; overflow:hidden;">
        <template v-for="(item,idx) in newsMenus">
         <a href="javascript:;" :key="idx" :class="{'on':idx==isActive}" @click="getZiXun(item.BIANMA,idx)" >{{item.NAME}}</a>
        </template>
        </div>
        <div class="clear"></div>
        <div class="line1"></div>
      </div>
      <div class="new_center">
       <!-- <v-scroll
        :on-infinite="onInfinite"
        :dataList="scrollData"
      >-->
        <ul>
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
          <!--<div class="load">正在加载更多</div>-->
        </ul>
        <!--</v-scroll>-->
      </div>
    </div>

    <div style="height:1rem;"></div>
    <div class="menu">
      <div class="line1"></div>
      <ul>
        <li class="on" @click="tabClick('/')">
          <a href="javascript:;" class="a1">首页</a>
        </li>
        <li @click="tabClick('/news')">
          <a  href="javascript:;"  class="a2">资讯</a>
        </li>
           <li @click="tabClick('/broadcast')">
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
<script>
//import Swiper from "Swiper";
const Swiper = window.Swiper
export default {
  name: "home",
    components: {
    //引入上拉刷新 下拉加载组件
    "v-scroll": require("@/components/refresh/Pullrefresh")
  },
  data() {
    return {
      city_id: "",
      city_name: "全国",
      headAd:"",
      swiperArr:[],//轮播图
      allCarBrands:[],
      subcarBrands:[],//汽车品牌
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
      REQUIRE: true,
      loading: false,
    };
  },
  created() {
    this.city_id =
      localStorage.getItem("address_id" + this.$util.projectOnlyName) || "";
        this.city_name =
      localStorage.getItem("address_name" + this.$util.projectOnlyName) || "全国";
    this.getAdvert();
    this.initSwiper();
    this.getHotBrand();
    this.getNewsMenus();
  },
  mounted () {
      // 添加滚动事件，检测滚动到页面底部
      window.addEventListener('scroll', this.scrollBottom);
    },
  methods: {
   
    //获取广告
    getAdvert() {
      var tmpParam = {
        relativeurl: "com.chj.getIndexRecommendList",
        timestamp: new Date().getTime()
      };
        this.Invok2(tmpParam, data => {
            if(data.ret=="1"){
                
                  var rows=data.rows;
                if(rows.length>0){
                    for(var i=0;i<rows.length;i++){
                    if (rows[i].recomCode == "REC_INDEX_BANNER_0") { //首页轮播
                            this.swiperArr=rows[i].list;
                           var k=0;
                           this.initSwiper();
                    } if (rows[i].recomCode == "REC_INDEX_HEAD") { //首页头部
                        this.headAd=rows[i].list[0];
                    }

                    }
                }
            }
      });
    },
    //广告点击
    clickAdvert(resourceId,url){
      if(resourceId!=undefined&&resourceId!=""){
         this.$router.push({
        path: "/news",
        query: { id: resourceId }
      }); 
      }else {
        window.location.href=url;
      }
    },
    //图片轮播
    initSwiper() {
      var that = this;
      that.$nextTick(function() {
        var mySwiper = new Swiper(".swiper-container", {
          pagination: { el: ".swiper-pagination", clickable: true },
          slidesPerView: 1,
          paginationClickable: true,
          spaceBetween: 0,
          // autoplay: true,
          loop: true,
          autoplayDisableOnInteraction: false
        });
      });
    },
    //获取汽车品牌
  getHotBrand(){
    this.Invok("88209",{},data=>{
         if (data.code != 0) {
          this.$weui.alert(data.msg);
          return false;
        } else {
          this.allCarBrands=data.success.items;
          for(var i=0;i<this.allCarBrands.length;i++){
            if(i<9){
              this.subcarBrands.push(this.allCarBrands[i]);
            }
          }
        }
    });
  },
  //品牌点击事件
  brandClick(brandId,brandName){
    this.$router.push({
      path:"/groupshop",
      query:{brand_id:brandId,brand_name:brandName}
    })
    
  },
  //更多品牌
  moreBrands(){

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
          this.getZiXun(subtype,0);
        }
        
      });
  },
  //资讯菜单点击
  //获取资讯列表
  getZiXun(subtype,idx){
    this.subtype=subtype;
    this.isActive=idx;
    this.REQUIRE=true;
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
          // let pull = document.querySelector(".pull-refresh");
           //pull.style.display="none";
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
  scrollBottom(){
     // scrollTop 滚动条滚动时，距离顶部的距离
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // windowHeight 可视区的高度
    var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    // scrollHeight 滚动条的总高度
    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // 滚动条到底部的条件
    if((scrollTop + windowHeight == scrollHeight)&&this.REQUIRE){
     if (this.pageTotal < this.pageSize) {
           this.REQUIRE=false;
         }else{
            this.moreClick();
         }
    }
      
    },
  /* onRefresh(done) {
    // this.getZiXun(this.subtype,this.isActive);
     //done(); //
     //return false;
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
      
    },*/
    tabClick(routePath){
      this.$router.push({
        path:routePath
      });
    },
    //地址点击
    addaddress:function(){
        this.$router.push({path:'/addresslist'});   //页面跳转
      },
  },
  
};
</script>
<style scoped>
/* 公共样式 */
body {
  margin: 0;
  padding: 0;
  font-family: 微软雅黑, Arial, Georgia, Cambria;
  font-size: 12px;
  line-height: 18px;
  color: #666;
  text-align: left;
  border: none;
  background: #fff;
}
body,
html {
  height: 100%; background: #fff;
}
img,
html,p,ul,li,input,form,h1,h2,h3,h4,h5,h6,dl,dd,dt,ol,input {
  margin: 0;
  padding: 0;
  border: 0;
}
ul,
li {
  list-style-type: none;
}
img {
  vertical-align: top;
  border: 0;
}
a:link {
  color: #333;
  text-decoration: none;
}
a:visited {
  color: #333;
  text-decoration: none;
}
a:hover {
  color: #333;
  text-decoration: none;
}
a:active {
  color: #0051ff;
  text-decoration: none;
}
.clear {
  clear: both;
  font-size: 0px;
  height: 0px;
  line-height: 0px;
  overflow: hidden;
}
fieldset,
img {
  border: 0;
}
input,
label,
select,
option,
textarea,
button,
fieldset,
legend {
  font: 12px/18px Verdana, Simsun, Helvetica, Arial, sans-serif;
  vertical-align: middle;
}
.line1 {
  height: 1px;
  font-size: 0px;
  background: #ddd;
  -webkit-transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  overflow: hidden;
}

/* 首页 */
.yo-scroll {
     position: relative !important; 
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
     z-index: 0 !important;
    height: auto;
    -webkit-overflow-scrolling: touch;
    margin-top:0px !important;
}
.yo-scroll.down .down-tip {
    display: none !important;
}
.yo-scroll{
  margin-bottom:1.2rem
}
#home .yo-scroll header{
 display: none !important;
}
.top_100 {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #fff url(../assets/images/home/logo.gif) no-repeat center 0.24rem;
  background-size: 1.43rem 0.54rem;
  z-index: 10;
  border-bottom: 1px solid #eee;
}
.top_100 .top_left {
  height: 1rem;
  background: url(../assets/images/home/tb1.gif) no-repeat 0.3rem 0.3rem;
  background-size: 0.3rem 0.36rem;
  position: absolute;
  left: 0rem;
  top: 0px;
  font-size: 0.28rem;
  line-height: 1rem;
}
.top_100 .top_right {
  height: 1rem;
  width: 1rem;
  background: url(../assets/images/home/tb2.gif) no-repeat center 0.34rem;
  background-size: 0.34rem 0.34rem;
  position: absolute;
  right: 0px;
  top: 0px;
}
.top_100 .top_left a {
  display: block;
  height: 1rem;
  width: 1rem;
  padding-left: 0.7rem;
}
.top_100 .top_right a {
  display: block;
  height: 1rem;
  width: 1rem;
}

.brand_ct span {
  font-size: 0.3rem;
  font-weight: bold;
  color: #3e3f47;
  display: block;
  margin: 0.4rem 0 0.2rem 0.33rem;
}
.brand_ct li {
  width: 20%;
  float: left;
  margin-bottom: 0.3rem;
}
.brand_ct li img {
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  margin: 0 auto;
  margin-bottom:0.15rem;
}

.brand_ct li em {
  display: block;
  font-style: normal;
  font-size: 0.24rem;
  color: #333;
  text-align: center;
  margin-top: -0.03rem;
  width: 100%;
  height: 0.24rem;
  overflow: hidden;
  line-height: 0.24rem;
}

.at_gg {
  margin: 0 0.25rem;
  margin-top: 0.28rem;
}
.at_gg img {
  width: 6.96rem;
  height: 1.52rem;
  display: block;
  border-radius: 5px;
}

.new_tt {
  margin: 0 0.25rem;
  margin-top: 0.15rem;
}
.new_tt a {
  height: 1rem;
  font-weight: bold;
  padding-right: 0.5rem;
  line-height: 1rem;
  font-size: 0.3rem;
  color: #3e3f47;
}
.new_tt a.on {
  color: #0051ff;
}

.new_center {
  margin: 0 0.25rem;
}
.new_center li {
  margin-top: 0.3rem;
}
.new_tab1 span {
  font-size: 0.32rem;
  color: #333;
  display: block;
  line-height: 0.45rem;
  margin-bottom: 0.2rem;
}
.new_tab1 img {
  width: 2.23rem;
  height: 1.68rem;
  display: block;
  float: left;
  margin-right: 2px;
}
.new_ctf {
  margin: 0.25rem 0;
}
.new_tab1 a {
  width: 100%;
  display: block;
}
.new_ctf ol {
  float: left;
  color: #aeaeae;
  background: url(../assets/images/home/bc.gif) no-repeat 0 0.05rem;
  background-size: 0.26rem 0.26rem;
  padding-left: 0.4rem;
  font-size: 0.24rem;
}
.new_ctf em {
  float: right;
  font-style: normal;
  color: #aeaeae;
  font-size: 0.24rem;
}

.new_tab2 .lf_tt {
  float: left;
  width: 4.5rem;
}
.new_tab2 .lf_tt span {
  font-size: 0.32rem;
  color: #333;
  display: block;
  line-height: 0.45rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
  margin-top: 0.1rem;
}
.new_tab2 .lf_tt ol {
  color: #aeaeae;
  background: url(../assets/images/home/bc.gif) no-repeat 0 0.05rem;
  background-size: 0.26rem 0.26rem;
  padding-left: 0.4rem;
  font-size: 0.24rem;
}
.new_tab2 .rt_tt {
  float: right;
}
.new_tab2 .rt_tt img {
  width: 2.23rem;
  height: 1.68rem;
  display: block;
  margin-bottom: 0.28rem;
}
.load {
  font-size: 0.28rem;
  text-align: center;
  line-height: 1rem;
  height: 1rem;
  color: #666;
}

.menu {
  width: 100%;
  height: 1rem;
  position: fixed;
  z-index: 1000;
  left: 0px;
  bottom: 0px;
  background: #fff;
}
.menu li {
  width: 20%;
  height: 1rem;
  float: left;
  text-align: center;
}
.menu li a {
  font-size: 0.2rem;
  color: #b8bec5;
  display: block;
}
.menu li a.a1 {
  background: url(../assets/images/home/mu1.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a1 {
  background: url(../assets/images/home/mu11.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li a.a2 {
  background: url(../assets/images/home/mu2.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a2 {
  background: url(../assets/images/home/mu22.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li a.a3 {
  background: url(../assets/images/home/mu3.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a3 {
  background: url(../assets/images/home/mu33.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li a.a4 {
  background: url(../assets/images/home/mu4.png) no-repeat center 0.1rem;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
.menu li.on a.a4 {
  background: url(../assets/images/home/mu44.png) no-repeat center 0.1rem;
  color: #0051ff;
  display: block;
  padding-top: 0.62rem;
  background-size: 0.58rem 0.58rem;
}
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

.swiper-container {margin: 0 auto;position: relative;overflow: hidden;z-index: 1;}
.swiper-wrapper {position: relative;width: 100%;height: 100%;z-index: 10;display: -webkit-box;display: -moz-box;
  display: -ms-flexbox;display: -webkit-flex;display: flex;
  -webkit-transition-property: -webkit-transform;-moz-transition-property: -moz-transform;
  -o-transition-property: -o-transform;-ms-transition-property: -ms-transform;transition-property: transform;
  -webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;
}

.swiper-container-horizontal > .swiper-pagination {bottom: 5px;left: 0;width: 100%;
}
.swiper-pagination {position: absolute;
  text-align: center;
  -webkit-transition: 300ms;
  -moz-transition: 300ms;
  -o-transition: 300ms;
  transition: 300ms;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  -o-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  z-index: 100;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  display: inline-block;
  background: #fff;
  border-radius: 999px;
  margin-right: 5px;
}
.swiper-pagination-bullet-active {
  background: #0051ff;
}

.swiper-slide a {
  display: block;
  width: 100%;
}
.swiper-slide {
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-container img {
  width: 100%;
  position: relative;
  z-index: 111;
}

.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>