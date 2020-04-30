<template>
  <div id="activitybymoney" :style="styleObject">
    <div class="center" style="padding-top:0;">
      <div class="tg-hd-title">
       <!-- <a  :style="{backgroundImage:'url(' + obj.pic_url + ')'}"/>-->
        <a :style="{backgroundImage:'url(' + obj.poster_url + ')'}" v-if="obj.poster_url"></a>
        <div class="tg-hd-title-div" v-else></div>
        <div class="activitybymoney-tilte-zzc"></div>
        <div class="activitybymoney-tilte-text">
          <p class="activitybymoney-tilte-h3">{{obj.event_title}}</p>
          <p class="activitybymoney-tilte-h4">{{obj.sub_title}}</p>
        </div>
      </div>
      <div class="tg-hdgzsm">
        <div class="tg-hdgzsm-title hassub" >活动详情</div>
        <div class="thecxdx">
          <div v-html="obj.event_content"></div>
        </div>
        <div class="tg-sygz" >
          <div>有效期：{{obj.event_start_time}}至{{obj.event_end_time}}</div>
          <!--<div v-html="obj.event_content" class="tg-sygz-content tg-sygz-data"></div>-->
          <div class="tg-hdgzsm-gonggao" v-show="obj.game_ind==1">
            现在报名，还可以参与数钱游戏，<br/>
            数的越多，送的越多。
            <router-link class="tg-hdgzsm-gonggao-a" :to="{ path:'easejs',query: this.$route.query}">马上数钱</router-link>
          </div>
        </div>
      </div>
      <div class="tg-hdgzsm">
        <div class="activitybymoney-xx hassub" v-if="obj.saleuser_name">
          <div class="tg-gu-a left">专属<br/>购车顾问</div>
          <div class="gu-xx left">
            <p class="p-name">{{obj.saleuser_name||'顾问权限查看即可显示顾问信息'}}</p>
            <p>{{obj.station_name}}</p>
          </div>
          <a class="call-phone right" :href="tel"></a>
        </div>
        <div class="tg-hdgzsm-hr"></div>
        <div class="tg-hdgzsm-title hassub ">感恩钜献多重礼</div>
        <div class="tg-hdgzsm-activitybymoney">
          <ul class="activitybymoney-ul">
              <li class="tg-hdgzsm-activitybymoney-li" :class="val.className" v-for="(val,index) in obj.gift_list">
                <div class="tg-hdgzsm-activitybymoney-div">
                <div class="money_li_title color-bu">
                    <a class="money_li_title_a">{{val.seq}}</a>
                    <span>{{val.title}}</span>
                  </div>
                  <div class="strok-outside">{{val.detail}}</div>
                </div>
              </li>
          </ul>
          <div class="activitybymoney-div-text">
            <p>更多惊喜，到店享！</p>
            <p v-show="obj.game_ind==1">您还可以参与数钱游戏，数的越多，送的越多！</p>
          </div>
          <div class="activitybymoney_shu" @click="go_easejs" v-show="obj.game_ind==1">
          </div>
          <div v-show="obj.game_ind!=1">
              <div>
                <div class="activitybymoney_top"></div>
                <div>
                  <div class="myzl-li" v-show="brand_list.length>0" @click="xqbrand_name">
                    <label class="address-label">品牌</label>
                    <input type="text" disabled="disabled"  class="activitybymoney-input" placeholder="请选择品牌" v-model="brand_name"/>
                  </div>
                  <div class="myzl-li">
                    <label class="address-label">姓名</label>
                    <input type="text" class="activitybymoney-input" placeholder="请输入姓名" v-model="name"/>
                  </div>
                  <div class="myzl-li ">
                    <label class="address-label">手机号</label>
                    <input type="text" class="activitybymoney-input" placeholder="请输入手机号" v-model="phone"/>

                  </div>
                  <div class="myzl-li position">
                    <label class="address-label">验证码</label>
                    <input type="text" class="activitybymoney-input" placeholder="请输入验证码" v-model="ver_code"/>
                    <a class="activitybymoneyinput-yzm" @click="getcode" :class="{click:is_getcode}">{{getcdetext}}</a>
                  </div>
                </div>
                <div style="margin: .2rem 0">
                  <div class="button-01" @click="go_sumoney"  :class="bot">提交</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $bridge from '../plugins/util/bridge';
  export default {
    name: "activitybymoney",
    data () {
      return {
      //  window_init:false,
        obj:{},
        classNameList:['_cyl','_qdl','_dcl','_xyl','_zdl','_qxl','_xhcjl','_zjl','_pgl','_zhl','_jrl','_byl','_qwhzl','_yyjpl','_xll'],
        tel:"",
        tel_d:"javascript:void(0);",
        hassaleuser_id:false,
        is_sygz:true,
        name:'',
        phone:"",
        ver_code:'',
        brand_list:[],
        bot:'',
        is_getcode:false,//验证码
        getcdetext:'获取验证码',
        brand_name:'',
        brand_id:'',
        styleObject:{}
      }
    },
    created(){//初始化数据
      var event_id=this.$route.query.event_id||"";//促销活动id
      var type_id=this.$route.query.type_id||"";//活动类别
      var saleuser_id=this.$route.query.saleuser_id||"";//顾问ID
      if(this.$util.isNotEmpty(event_id)){
        this.init_();
      }
      let  slef=this;
      $bridge.chjInit().then(data=>{
        //alert('chjInit');
        slef.styleObject={
          'pointer-events':'none',
        };
        slef.init(data)
      });
    },
    mounted:function(){//DOM 挂载完成
      let slef = this; // this 异步指向变更
      var data={
        "event_id":slef.$route.query.event_id,
        "type_id":slef.$route.query.type_id,
      }
      slef.Invok("2505",data,function (data) {
        if (data.code != 0) {
          slef.$weui.alert(data.msg);
          return false;
        }else {
          let action_obj=data.success;
          var jssdk_url =encodeURIComponent(window.location.href.split('#')[0]);
          slef.$http.get(slef.$util.serviceUrl+"/wechat/getJsapiTicket.do?ticketurl="+jssdk_url).then(response => {
            if(response.data)
            {
              var data=response.data;
              var appId =data.appId;
              var timestamp =data.timestamp;
              var nonceStr =data.noncestr;
              var signature =data.signature;
              var jsApiList = ["onMenuShareAppMessage","onMenuShareTimeline"];
              //步骤二：通过config接口注入权限验证配置
              slef.$wx.config({
                debug:false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appId, // 必填，企业号的唯一标识，此处填写企业号corpid
                timestamp:timestamp , // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature,// 必填，签名，见附录1
                jsApiList: jsApiList// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
              //步骤三：通过ready接口处理成功验证
              slef.$wx.ready(function(){
                //分享朋友
                slef.$wx.onMenuShareAppMessage({
                  title:action_obj.sub_title,
                  desc:action_obj.event_content,
                  link:window.location.href.split('#')[0]+'#/activitybymoney?event_id='+slef.$route.query.event_id+"&type_id="+slef.$route.query.type_id+"&saleuser_id="+(slef.$route.query.saleuser_id||""),
                  imgUrl:action_obj.poster_url,
                  success: function () {
                    // 用户确认分享后执行的回调函数
                  }
                });
                //分享到朋友圈
                slef.$wx.onMenuShareTimeline({
                  title:action_obj.sub_title,
                  link:window.location.href.split('#')[0]+'#/activitybymoney?event_id='+slef.$route.query.event_id+"&type_id="+slef.$route.query.type_id+"&saleuser_id="+(slef.$route.query.saleuser_id||""),
                  imgUrl:action_obj.poster_url,
                  success: function () {
                    // 用户确认分享后执行的回调函数

                  }
                });
              });
              //步骤四：通过error接口处理失败验证
              slef.$wx.error(function(res){//
                var resStr = "签名信息验证失败:"+JSON.stringify(res);
                slef.$weui.alert(resStr);
              });
            }else{
              slef.$weui.alert("获取微信接口调用参数错误,请刷新或重新进入页面!");
            }
          }, response => {
            slef.$weui.alert(response);
          });
        }
      });
    },
    methods:{//监听函数
      init:function (data_) {//给爱售宝 暴露接口 屏蔽拨打电话
        let  slef=this;
        if(slef.$util.isEmpty(slef.$route.query.event_id)){//event_id 为空 说明是预览
          var obj= eval("( "+data_+" ) ")||{};
          var obj=obj.data;
          var create_ind='A';
          var list=[];
          if(obj.hasOwnProperty('gift_list')&&obj.gift_list){
            for(var i=0;i<obj.gift_list.length;i++){
              var ob_=obj.gift_list[i];
              ob_.className="activitybymoney"+(slef.classNameList[ob_.seq]||"");
              ob_.seq=i+1;
              list.push(ob_);
            }
            delete obj.gift_list;
            obj.gift_list=list;
          }
          if(slef.$util.isEmpty(slef.tel))slef.tel="tel:"+obj.saleuser_phone;
          slef.obj=obj;
        }
       // slef.$util.setWechatTitle('活动中心');
      },
      init_:function () {
        let slef = this; // this 异步指向变更
        var data={
          "event_id":slef.$route.query.event_id,
          "type_id":slef.$route.query.type_id,
          "type":slef.$route.query.type,
          "saleuser_id":slef.$route.query.saleuser_id,//	专营店ID
        }
        slef.Invok("2505",data,function (data) {
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          }else {
            let obj=data.success;
            var list=[];

            if(obj.create_ind=='A'){//创建标识，A为爱售宝，B为后台
              if(obj.gift_list){
                for(var i=0;i<obj.gift_list.length;i++){
                  var ob_=obj.gift_list[i];
                  ob_.className="activitybymoney"+(slef.classNameList[ob_.model_seq]||"");
                  list.push(ob_);
                }
              }
            }
            obj.gift_list=list;
            slef.tel="tel:"+obj.saleuser_phone;
            slef.obj=obj;
            var brand_list=[];
            if(obj.brand_list){
            for(var i=0;i<obj.brand_list.length;i++){
              brand_list.push({
                label: data.success.brand_list[i].brand_name,
                value: data.success.brand_list[i].brand_id,
              })
            }
            }
            slef.brand_list=brand_list;
           // slef.$util.setWechatTitle(obj.event_title);
          }
        });
      },
      show_sygz:function(){
        if(this.is_sygz){
         this.is_sygz=false;
        }else{
          this.is_sygz=true;
        }
      },
      go_easejs:function () {
        this.$router.push({path:'/easejs',query:this.$route.query});   //页面跳转
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

        /**60秒倒计时**/
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
        /**发送验证码**/
        var data={
          "event_id":slef.$route.query.event_id,
          "phone": this.phone,
          "type":slef.$route.query.type_id,
          "user_id":slef.$route.query.user_id
        }
        this.Invok("2507",data,function (data){//发送验证码
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            clearInterval(timeInter);
            slef.getcdetext="重新发送";
            slef.is_getcode=false;
            return false;
          } else {

          }
        },true);
      },
      go_sumoney:function () {
        if(this.bot==="click")return false;
        var validator = new this.$util.Validator();
      /*  validator.add(this.brand_id, [{
          strategy: 'isEmpty',
          msg: "请选择品牌"
        }]);*/
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
          'event_id':this.$route.query.event_id,
          'saleuser_id':this.$route.query.saleuser_id||"",
          'name':this.name,
          "phone":this.phone,
          "ver_code":this.ver_code,
          "user_id":this.$route.query.user_id,
          'brand_id':this.brand_id
        };
        let slef = this; // this 异步指向变更
        slef.bot="click";
        this.Invok("2508",data,function (data) {
          slef.bot="";
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            if(data.success.status=='Y'){
              slef.bot='click';
              slef.$weui.alert('您已经参与过了');
            }else{
              slef.$weui.toast('操作成功', {
                duration: 3000
              });
            }
          }
        },true);
      },
      xqbrand_name:function () {
        let slef = this; // this 异步指向变更
        slef.$weui.picker(slef.brand_list, {
          onChange: function onChange(result) {
            slef.brand_name=result[0].label;
            slef.brand_id=result[0].value;
          },
          onConfirm: function onConfirm(result) {
            slef.brand_name=result[0].label;
            slef.brand_id=result[0].value;
          }
        });
      }
    }
  }
</script>
