<template>
    <div id="mydata">
      <div class="head">
        <router-link class="head-jt" to="/mycenter"></router-link>
        <div class="head-text">我的资料</div>
      </div>
      <div class="center">
        <div>
          <div class="grzx-list">
            <ul class="grzx-ul">
              <li class="hassub" @click="updataheadimg">
                <div class="myzl-li hasjt">
                  <span>头像</span>
                  <div class="myzl-tx" v-if="user_url" @click.stop="gallery" :style="{backgroundImage: 'url(' + user_url + ')'}"></div>
                  <div class="myzl-tx" v-else @click.stop="gallery" ></div>
                </div>
              </li>
              <li class="hassub" @click="goupdataname">
                <div class="myzl-li hasjt">
                  <span>姓名</span>
                  <a class="myzl-li-ri">{{user_name}}</a>
                </div>
              </li>
              <li class="hassub">
                <div class="myzl-li">
                  <span>手机号码</span>
                  <a class="myzl-li-ri_1">{{phone}}</a>
                </div>
              </li>
              <div class="hr hassub"></div>
              <li class="hassub" @click="cancellation">
                <div class="myzl-li text-center">
                  退出登录
                </div>
              </li>
            </ul>
            <div  id="uploader">
              <input class="mydata_file" v-if="is_ios" id="uploader_file" name="file"  accept="image/*" type="file"/>
              <input class="mydata_file" type="file" v-else id="uploader_file" name="file"  accept="image/*" capture="camera" multiple/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "mydata",
        data() {
          return {
            user_name:"",
            user_url:"",
            phone:"",
            is_ios:false,
            gallery__:{},
          }
        },
        created() {
          let slef = this; // this 异步指向变更
          var data={
            "user_id":localStorage.getItem("user_id"+slef.$util.projectOnlyName)||""
          };
          this.Invok("88014",data,function (data) {
            if (data.code != 0) {
              slef.$weui.alert(data.msg);
              return false;
            } else {
              slef.user_name=data.success.user_name;
              slef.user_url=data.success.user_url;
              slef.phone=data.success.phone;
            }
          });
          (function () {
            var ua = navigator.userAgent.toLowerCase();//获取浏览器的userAgent,并转化为小写——注：userAgent是用户可以修改的
            var isIos = (ua.indexOf('iphone') != -1) || (ua.indexOf('ipad') != -1);//判断是否是苹果手机，是则是true
            if (isIos) {
              slef.is_ios=true;
            };
          })();
        },
        destroyed(){
          this.gallery__&&this.gallery__.hide();
        /* document.querySelector('.nothasdel').style.display=none;*/
        },
        methods: {
          goupdataname(){//跳转修改姓名
            this.$router.push({path:'/updataname',query: {user_name: this.user_name}});   //修改姓名
          },
          updataheadimg(){
            let slef = this; // this 异步指向变更
            document.getElementById("uploader_file").click();//触发input file
            //监听图片上传input
            slef.$weui.uploader('#uploader', {
              url: slef.$util.serviceUrl+'/gateWay/uploadFile.do',
              auto: true,
              type: 'file',
              fileVal: 'file',
              compress: {
                width: 1600,
                height: 1600,
                quality: .8
              },
              onBeforeQueued: function(files) {
                if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
                  slef.$weui.alert('请上传图片');
                  return false; // 阻止文件添加
                }
                if(this.size > 5 * 1024 * 1024){
                  slef.$weui.alert('请上传不超过5M的图片');
                  return false;
                }
                if (files.length !==1) { // 防止一下子选择过多文件
                  slef.$weui.alert('只能上传1张图片，请重新选择');
                  return false;
                }
                return true; // 阻止默认行为，不插入预览图的框架
              },
              onSuccess: function (ret) {
                var data={
                  "user_id":localStorage.getItem("user_id"+slef.$util.projectOnlyName),
                  "user_url":encodeURIComponent(ret.url)
                };
                /**查询用户信息**/
                slef.Invok("88015",data,function (data) {
                  if (data.code != 0) {
                    slef.bot="";
                    slef.$weui.alert(data.msg);
                    return false;
                  } else {
                    slef.user_url=ret.url;
                    slef.$weui.toast('修改头像成功', {
                      duration: 1500,
                      callback: function(){
                        slef.$router.push({path:'/mydata'});   //页面跳转
                      }
                    })
                  }
                });
              },
              onError: function(err){
                console.log(this, err);

              }
            });
          },
          cancellation(){
            let slef = this; // this 异步指向变更
           this.$weui.confirm('确定需要退出登录吗？',function(){
               slef.$util.cancellation_clear();
               slef.$router.push({path:'/login'});   //页面跳转
              },
             function(){

           });
          },
          gallery(){//头像预览
          var gallery_=this.$weui.gallery(this.user_url, {
              className: 'nothasdel'
            });
          this.gallery__=gallery_;
          }
        }
    }

</script>
