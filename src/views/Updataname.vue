<template>
    <div id="updataname">
      <div class="head">
        <router-link class="head-jt" to="/mydata"></router-link>
       <!-- <a class="head-jt" href="javascript:history.go(-1);"></a>-->
        <div class="head-text">修改姓名</div>
      </div>
      <div class="center">
        <div>
          <div class="grzx-list">
            <ul class="grzx-ul">
              <li class="hassub">
                <div class="myzl-li">
                  <span>姓名</span>
                  <input class="myzl-li-input" v-model="user_name"/>
                </div>
              </li>
            </ul>
            <div class="myzl-lihasmtop"></div>
            <div class="button-01" :class="bot" @click="subupdata">保存</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "updataname",
        data() {
          return {
            user_name:"柳依依",
            bot:"",//控制是否可以点击登陆
          }
        },
        created() {
          this.user_name=this.$route.query.user_name;
        },
        methods: {
          subupdata(){
            if(this.bot==="click")return false;
            if(this.$util.isEmpty(this.user_name)){
              this.$weui.topTips("姓名不能为空", 3000);
            }else{
              var data={
                "user_id":localStorage.getItem("user_id"+this.$util.projectOnlyName),
                "user_name":this.user_name
              };
              /**查询用户信息**/
              let slef = this; // this 异步指向变更
              slef.bot="click";
              this.Invok("88015",data,function (data) {
                if (data.code != 0) {
                  slef.bot="";
                  slef.$weui.alert(data.msg);
                  return false;
                } else {
                  slef.$weui.toast('修改姓名成功', {
                    duration: 1500,
                    callback: function(){
                      slef.$router.push({path:'/mydata'});   //页面跳转
                    }
                  })
                }
              });
            }
          }
        }
    }
</script>
