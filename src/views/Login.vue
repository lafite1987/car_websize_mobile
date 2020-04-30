<template>
  <div id="login">
      <div class="head">
        <a class="head-jt-no"></a>
        <div class="head-text">登录</div>
      </div>
      <div class="center">
        <div class="center-padding">
          <div class="logo"></div>
          <div class="login-from">
            <div class="login-list chj-cells">
              <label class="login-lable">手机</label>
              <input class="login-input" v-model="phone" type="tel" placeholder="请输入手机号码"/>
            </div>
            <div class="login-list chj-cells ">
              <label class="login-lable">验证码</label>
              <input class="login-input" type="tel" v-model="ver_code" placeholder="请输入验证码"/>
              <a class="input-yzm" @click="getcode" @contextmenu.prevent="show()">{{getcdetext}}</a>
            </div>
            <div class="login-botton" :class="bot" @click="login">登录</div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
  export default {
    name: "login",
    data () {
      return {
        phone: "",
        ver_code:"",
        getcdetext:"获取验证码",
        is_getcode:false,
        bot:"",//控制是否可以点击登陆
      }
    },
    
    created(){
      
      var open_id=localStorage.getItem("open_id"+this.$util.projectOnlyName);
      if(!open_id){//本地不存在获取url
        open_id=this.$route.query.open_id;
        if(!open_id){//url 也没有
          var redirect_uri=window.location.href//.split('#')[0]+"#/login?groupbuy_id="+this.obj.groupbuy_id+"&to_device_id="+this.to_device_id+"&to_user_id="+this.to_user_id;
          //location.href=this.$util.serviceUrl+"/wechat/userAuth.do?redirectUri="+encodeURIComponent(redirect_uri);
        }else{
          localStorage.setItem("open_id"+this.$util.projectOnlyName,open_id);
        }
      }
    },
    
    methods:{
      login:function(){
        if(this.bot==="click")return false;

        var validator = new this.$util.Validator();
        validator.add(this.phone, [{
          strategy: 'isEmpty',
          msg: "手机号码不能为空"
        }]);
        validator.add(this.phone, [{
          strategy: 'isPhone',
          msg: "手机号码不正确"
        }]);
        validator.add(this.ver_code, [{
          strategy: 'isEmpty',
          msg: "验证码不能为空"
        }]);
        var mgs = validator.start();
        if(mgs){
          this.$weui.topTips(mgs, 3000);
          return false;
        }
        var data={
            "phone":this.phone,
            "ver_code":this.ver_code,
            "open_id":localStorage.getItem("open_id"+this.$util.projectOnlyName),
            "to_device_id":sessionStorage.getItem("to_device_id"+this.$util.projectOnlyName)||"",
            "to_user_id":sessionStorage.getItem("to_user_id"+this.$util.projectOnlyName)||"",
        };
        let slef = this; // this 异步指向变更
        slef.bot="click";
        this.Invok("88001",data,function (data) {
            slef.bot="";
            if (data.code != 0) {
              slef.$weui.alert(data.msg);
              return false;
            } else {
              var da=data.success;
              localStorage.setItem("user_id"+slef.$util.projectOnlyName,da.user_id);
              localStorage.setItem("session_id"+slef.$util.projectOnlyName,data.msg.session_id);
              if(slef.$route.query.redirect){
                var query_=slef.$util.deepCopy(slef.$route.query);
                delete query_.redirect;
                slef.$router.push({path:slef.$route.query.redirect,query:query_});   //页面跳转
              }else{
                slef.$router.push({path:'/groupshop'});   //页面跳转
              }

            }
        });

      },
      getcode:function(){
        if(this.is_getcode){
            return false;
        }
        if(this.$util.isEmpty(this.phone)){
          this.$weui.topTips('手机号码不能为空', 3000);
          return false
        }
        if(!this.$util.isPhone(this.phone)){
          this.$weui.topTips('手机号码不正确', 3000);
          return false
        }
        this.is_getcode=true;
        let slef = this; // this 异步指向变更

        //60秒倒计时
        let timeOut=60;
        slef.getcdetext=(timeOut + "s");
        var timeInter = setInterval(function() {
          timeOut -= 1;
          slef.getcdetext=(timeOut + "s");
          if (timeOut == 0) {
            clearInterval(timeInter);
            slef.getcdetext="重新发送";
            slef.is_getcode=false;
          }
        }, 1000);
        //发送验证码
        var data={
          "user_phone": this.phone,
          "msg_type":"C"
        }
        this.Invok("3007",data,function (data) {//发送验证码
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            clearInterval(timeInter);
            slef.getcdetext="重新发送";
            slef.is_getcode=false;
            return false;
          } else {

          }
        });


      }
    }
  }
</script>
