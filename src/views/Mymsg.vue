<template>
  <div id="mymsg">
    <div class="head">
      <router-link class="head-jt" to="/mycenter"></router-link>
      <!--<a class="head-jt" href="javascript:history.go(-1);"></a>-->
      <div class="head-text">我的消息</div>
    </div>
    <div class="center">
      <div>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
          <ul>
            <li class="hassub xx-li" @click="mymsggo(index)" :class="[val.notify_status==1 ? 'xx-yd' : 'xx-wd']" v-for="(val,index) in listdata" :key="val.groupbuy_id">
              <div class="xx-li-div">
                <div class="xx-li-div-top">
                  <div class="xx-li-div-top-left">{{val.notify_title}}</div>
                 <!-- <div class="xx-li-div-top-left" v-else>日程提醒</div>-->
                  <div class="xx-li-div-ri">{{val.notify_date}}</div>
                </div>
                <div class="xx-li-div-bottom">
                  {{val.notify_content}}
                </div>
              </div>
            </li>
          </ul>
        </v-scroll>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "mymsg",
    data () {
      return {
        page_num: 1, //当前页
        page_size: 10, // 一页显示多少条
        pageStart: 1, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        scrollData: {
          noFlag: false //暂无更多数据显示
        }
      }
    },
    created(){//初始化数据
      var data={
        "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName),
        "page_num":this.pageStart,
        "page_size":this.page_size
      }
      this.getList(data);
    },
    components: {
      'v-scroll': require("@/components/refresh/Pullrefresh")
    },
    methods:{
      mymsggo:function(e){
       var this_obj=this.listdata[e];
       if(this_obj.notify_status=="1"){
         sessionStorage.setItem("notify"+this.$util.projectOnlyName,JSON.stringify(this_obj));
         this.$router.push({path:'/mymsgcontent'});   //页面跳转
       }else{
         var data={
           "notify_id":this_obj.notify_id,
           "notify_status":1,
           "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName)
         }
         let slef = this; // this 异步指向变更
         this.Invok("88009",data,function (data) {
           slef.listdata[e].notify_status=1;
           sessionStorage.setItem("notify"+slef.$util.projectOnlyName,JSON.stringify(this_obj));
           /* sessionStorage.setItem("notify_content",this_obj.notify_content);
            sessionStorage.setItem("publisher",this_obj.publisher);*/
           slef.$router.push({path:'/mymsgcontent'});   //页面跳转
         });
       }

      },
      getList:function(data_){
        let slef=this;
        slef.Invok("88009",data_,function (data) {
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            if(data_.page_num===slef.pageStart){
              slef.listdata.splice(0,slef.listdata.length);
              slef.listdata=slef.listdata.concat(data.success.items);
           /*   Array.prototype.push.apply(slef.listdata, data.success.items);*/
            }else{
              slef.listdata=slef.listdata.concat(data.success.items);
              /*Array.prototype.push.apply(slef.listdata, data.success.items);*/
            }
            slef.pageEnd=data.success.pageCount-0||1;//总页
            slef.page_num=data.success.currentPageIndex-0||1;//当前
          }
        });
      },
      onRefresh:function(done) {
        var data={
          "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName),//	城市ID
          "page_num":this.pageStart,
          "page_size":this.page_size
        }
        this.getList(data);
        done(); //calldone
      },
      onInfinite:function(done) {
        let more = this.$el.querySelector('.load-more');
        if(this.page_num==this.pageEnd){//当前页数==总页数
          more.style.display = 'none'; //隐藏加载条
          this.scrollData.noFlag = true;
        }else{
          var num=this.page_num;
          var data={
            "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName),
            "page_num":num+1,
            "page_size":this.page_size
          }
          this.getList(data);
          more.style.display = 'none'; //隐藏加载条
        }
        done();
      }
    }
  }
</script>
