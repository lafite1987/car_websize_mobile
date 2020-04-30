<template>
  <div id="sceneactivityturntable">
        <div class="sceneactivityturntable-bj">
            <div class="canvas-zjd-bj-all">
              <div class="canvas-zjd-cl">
                <div class="canvas-zjd-title"></div>
                <div class="my-prize" @click="my_prize(1)"></div>

              </div>
            </div>
        </div>
        <div class="canvas_zjd_bj">
          <div class="myCanvas-div-qian"></div>
          <div class="myCanvas_div">
            <div class="myCanvas-div-yx-zb"></div>
            <div :class="[isActive ? 'myCanvas_div_yx_zddd' : 'myCanvas_div_yx_zddd1']"></div>
            <div class="canvasDiv">
              <canvas id="myCanvas"  :height="canvash" :width="canvash" class="myCanvas" :class="{settransform:iscj_ok}" :style="styleObject"></canvas>
            </div>
            <div  class="myCanvas_yq"  @click="go_cj"></div>
          </div>
        </div>
        <div class="yx_buttonbj"></div>
        <div class="myCanvas_div_ts"  v-if="this.$route.query.type==5">抽奖领取签到礼</div>
        <div class="yx-buttonbj-text">
          <!--<a class="left" v-if="this.$route.query.type==6">
            抽奖领取下订礼
            <div class="myCanvas_div_ts"  v-if="this.$route.query.type==5">抽奖领取签到礼</div>
          </a>
          <a class="left" v-if="this.$route.query.type==5">
           抽奖领取签到礼
          </a>-->
          <a class="yx-buttonbj-text-ri" @click="show_gz(1)">活动规则</a>
        </div>
        <!--领取奖品之后提示-->
        <div v-show="is_poput">
          <div class="poput-div"></div>
          <div class="canvas-zzc-text">
            <div class="canvas-zzc-text-jx">
              <div class="canvas-zzc-text-jx"><a class="gc_uhq">{{obj.prize_all_name}}</a></div>
              领取成功<br/>
              <a style="font-size: .28rem">请凭此中奖信息到现场领奖处领取奖品</a>
            </div>
            <div class="canvas-zzc-button">
              <a @click="this_lq">确定</a>
            </div>
            <div class="canvas-zzc-text-title"></div>
            <!-- <div class="canvas-zzc-text-coles"></div>-->
          </div>
        </div>
        <!--转盘之后领取奖品-->
        <div class="lj_bj" v-show="is_zj">
          <div class="head-prize">
            <h1 class="nowrap">恭喜您获得<a class="jx-name">{{obj.prize_grade_name}}</a></h1>
            <p class="nowrap jx-name" >抽中{{obj.prize_all_name}}</p>
          </div>
          <div class="head-gold ">
            <div class="head-gold-img"></div>
          </div>
          <div class="scene-input-div-all">
            <div class="scene-input-div scene-input-top-radius">
              <input type="text" placeholder="输入姓名" v-model="name" >
            </div>
            <div class="scene-input-div">
              <input type="tel" placeholder="输入手机号领取" v-model="phone" >
            </div>
            <div class="scene-input-div getcodediv">
              <input type="tel" placeholder="验证码" v-model="code" >
              <a href="javascript:" class="gei-cdoe-s" @click="getcode" :class="{click:is_getcode}">{{getcdetext}}</a>
            </div>
            <div class="scene-input-div scene-input-bot-radius hasjt-game" @click.top="show_classesname">
              <input type="text" placeholder="意向车型" disabled="disabled" v-model="classes_name" >
              <input type="hidden"disabled="disabled" v-model="classes_id" >
            </div>
            <div >
              <a href="javascript:" class="buttonA" @click="go_lq">领取</a>
            </div>
          </div>
      </div>
     <!--活动规则-->
      <div v-show="is_activity_rule">
      <div class="poput-div"></div>
      <div class="all-div" >
        <div class="all-div-div">
        <div class="zzc-center-dl">
          <div class="zzc-center-dl-tdiv">
            活动规则
            <a class="zzc-center-dl-x" @click="show_gz(0)"></a>
          </div>
        </div>
        <div class="zzc-center-dl">
          <div class="zzc-center-title">活动奖品</div>
            <p class="zc-center-p" v-for="(val,index) in prize.prizeList" :key="val.order_num">
              <span>{{val.prize_grade_name}}</span>：{{val.prize_all_name}}
            </p>
        </div>
         <div class="zzc-center-dl">
             <div class="zzc-center-title">活动时间</div>
             <p class="zc-center-p"> {{prize.startdate}} 至 {{prize.enddate}}</p>
         </div>
        <div class="zzc-center-dl">
          <div class="zzc-center-title">主办单位</div>
          <p class="zc-center-p">本次活动主办单位为<span style="color: #fffc00">{{prize.station_name}}</span></p>
        </div>
        <div class="zzc-center-dl">
          <div class="zzc-center-title">活动说明</div>
          <p class="zc-center-p">下订即可领取下订礼；</p>
          <p class="zc-center-p">本活动最终解析权归主办单位所有</p>
        </div>
        </div>
      </div>
      </div>
       <div v-show="is_myprize">
         <div class="poput-div"></div>
         <div class="all-div" >
           <div class="all-div-div">
             <div class="zzc-center-dl">
               <div class="zzc-center-dl-tdiv">
                 我的奖品
                 <a class="zzc-center-dl-x" @click="my_prize(0)"></a>
               </div>
             </div>
            <!-- <div class="zzc-center-dl color-w" v-for="val in myprizeObj">-->
               <div class="left">{{myprizeObj.prize_all_name}}</div>
               <div class="right">{{myprizeObj.prize_time}}</div>
             <!--</div>-->
           </div>
         </div>
       </div>
  </div>
</template>
<script>
  export default {
    name: "sceneactivityturntable",
    data() {
      return {
        canvash:275,//默认转盘大小
        isActive:true,//控制指示灯
        size:5,//转盘奖品数量
        obj:{},
        is_zj:false,//控制显示填写资料
        iscj_ok:false,//控制转盘是否转动
        is_true:true,//控制转盘不能重复点击
        is_poput:false,//控制中奖弹 是否显示
        is_myprize:false,//控制显示我的奖品
        is_activity_rule:false,//控制规则
        is_go_lq:false,//防止领取多次点击
        phone:'',
        code:'',
        name:'',
        classes_name:'',//车型名称
        classes_id:'',//车型ID
        prize:{},//活动信息
        myprizeObj:{},//我的奖品
        is_ok:false,
        is_getcode:false,
        getcdetext:"获取验证码",
        color:['#ffeb66','#fe895e','#fd66b7','#63a0f0','#50e3eb'],//转盘颜色
        list:{"0":"一等奖", "1":"二等奖", "2":"三等奖", "3":"四等奖", "4":"五等奖"},//转盘奖品
        styleObject:{//转盘停止时指向的角度
          'transform':'',
          '-webkit-transform':'',
        },
      }
    },
    created() {//DOM 还没初始化
      var re=sessionStorage.getItem("rem");
      var canvash=re*5.5;//
      this.canvash=canvash;//动态设置转盘大小  因为canvas 不支持css设置大小 css设置大小会导致图片变形
      let slef = this; // this 异步指向变更
      (function () {
        setInterval(function () {
          if(slef.isActive){
            slef.isActive=false;
          }else{
            slef.isActive=true;
          }
        },300);
      })();
      this.get_jp();
    },
    destroyed(){
      sessionStorage.removeItem("station_id"+this.$util.projectOnlyName);
    },
    mounted(){//DOM 初始化之后
      var data_={
        groupbuy_id:this.$route.query.groupbuy_id,
        type:this.$route.query.type,
      }
      this.getinit(data_);
    },
    methods: {
      createCircle:function(canvas,canvash,size,color){
        var ctx=canvas.getContext('2d');
        var edg=Math.PI/180;
        var r=360/size;//每个扇形的角度
        var asle=3*Math.PI/2;//270角的弧度
        asle=asle-r/2*edg;
        var startAngle = 0;//扇形的开始弧度
        var endAngle =asle;//扇形的终止弧度
        for (var i = 0; i< size; i++){
          startAngle=endAngle;
          endAngle =startAngle +r*edg;
          if(endAngle>2*Math.PI){
            endAngle=endAngle-2*Math.PI;
          }
          ctx.save();
          ctx.beginPath();
          ctx.arc(canvash/2,canvash/2,canvash/3, startAngle, endAngle, false);
          ctx.lineWidth =canvash/3;
          ctx.strokeStyle =  color[i];
          ctx.stroke();
          ctx.restore();
        }
      },
      createCirText:function(canvas,canvash,size,list){
        var ctx=canvas.getContext('2d');
        var r=360/size;//每个扇形的角度
        ctx.textAlign='left';
        ctx.textBaseline='middle';
        ctx.fillStyle = '#550a13';
        for ( var i = 0; i < size; i++) {
          ctx.save();
          ctx.beginPath();
          ctx.translate(canvash/2,canvash/2);
          ctx.rotate(r*i*Math.PI/180);
          ctx.translate(-20,10);
          ctx.font = " 20px Microsoft YaHei";
          ctx.fillStyle = "#550a13";
          /*         var s=-canvash/3;*/
          ctx.fillText(list[i],-10,-canvash/2.5,50);
          ctx.font = " 14px Microsoft YaHei";
          ctx.closePath();
          ctx.restore();
        }
      },
      get_jp:function () {
        let slef = this; // this 异步指向变更
        var data_={
          type:slef.$route.query.type
        };
        slef.Invok("88030",data_,function (data) {
          if (data.code != 0) {
            return false;
          } else {
            slef.myprizeObj=data.success;
          }
        });
      },
      go_cj:function(){
        let slef = this; // this 异步指向变更
        if(slef.is_ok){
          slef.$weui.alert('您已经参与过了');
          return false;
        }
        var data_={
          groupbuy_id:slef.$route.query.groupbuy_id,
          type:slef.$route.query.type
        };
        slef.iscj_ok=true;
        slef.Invok("88028",data_,function (data) {
          if (data.code != 0) {
            slef.iscj_ok=false;
            slef.$weui.alert(data.msg);
            return false;
          } else {
            var dat=data.success;
            slef.obj=dat;
            var Num={"1":"一等奖","2":"二等奖","3":"三等奖","4":"四等奖","5":"五等奖"}
            slef.obj.prize_grade_name=Num[dat.prize_grade];
            setTimeout(function () {
              var r=360/slef.size;//每个扇形的角度
              var deg=r*(dat.prize_grade-1);
              slef.iscj_ok=false;
              slef.styleObject['transform']="rotate("+-deg+"deg)";
              slef.styleObject['_webkit_transform']="rotate("+-deg+"deg)";
              slef.is_zj=true;
            },1000)
          }
        });
      },
      getinit:function (data_) {
        let slef = this; // this 异步指向变更
        /**查询游戏情况**/
        this.Invok("88029",data_,function (data) {
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            slef.size=data.success.prizeList.length||5;
            var prizeList=[];
            for(var i=0;i<data.success.prizeList.length;i++){
              var obj=data.success.prizeList[i]
              var Num={"1":"一等奖","2":"二等奖","3":"三等奖","4":"四等奖","5":"五等奖"}
              obj.prize_grade_name=Num[obj.prize_grade];
              prizeList.push(obj);
            }
            slef.prize=data.success;
            slef.prize.prizeList=prizeList;
            slef.phone=slef.prize.user_phone;
            slef.name=slef.prize.user_name;
            var canvas=document.getElementById('myCanvas');
            slef.createCircle(canvas,slef.canvash,slef.size,slef.color);
            slef.createCirText(canvas,slef.canvash,slef.size,slef.list);
          }
        });
      },
      this_lq:function(){//点击领取
        this.is_zj=false;
        this.is_poput=false;
        this.is_ok=true;
      },
      show_gz:function (e) {
        this.is_activity_rule=e;
      },
      my_prize:function (e) {
        this.is_myprize=e;
      },
      show_classesname:function () {
        let slef = this; // this 异步指向变更
        if(!slef.prize.classes_list){
          slef.$weui.alert('意向车型不存在');
          return false;
        }
        var classes_list=JSON.parse(slef.prize.classes_list).classes_list;
        var list=[];
        for(var i=0;i<classes_list.length;i++){
          list.push({
            label: classes_list[i].classes_name,
            value: classes_list[i].classes_id,
          })
        }
        slef.$weui.picker(list, {
          onChange: function onChange(result) {
            slef.classes_name=result[0].label;
            slef.classes_id=result[0].value;
          },
          onConfirm: function onConfirm(result) {
            slef.classes_name=result[0].label;
            slef.classes_id=result[0].value;
          },
          id: 'picker'
        });
      },
      go_lq:function (){
        if(this.is_go_lq)return false;
        let slef = this; // this 异步指向变更
       var validator = new slef.$util.Validator();
        validator.add(slef.name, [{
          strategy: 'isEmpty',
          msg: "姓名不能为空"
        }]);
        validator.add(slef.phone, [{
          strategy: 'isEmpty',
          msg: "手机号码不能为空"
        }]);
        validator.add(slef.phone, [{
          strategy: 'isPhone',
          msg: "请正确填写手机号码"
        }]);
        validator.add(slef.code, [{
          strategy: 'isEmpty',
          msg: "验证码不能为空"
        }]);
        validator.add(slef.classes_id, [{
          strategy: 'isEmpty',
          msg: "意向车型不能为空"
        }]);
        var mgs = validator.start();
        if(mgs){
          slef.$weui.alert(mgs);
          return false;
        }
        /**领取奖品**/
        var data_={
          "phone": slef.phone,
          "groupbuy_id":slef.$route.query.groupbuy_id,
          "type":slef.$route.query.type,
          "user_name":slef.name,
          "code":slef.code,
          "prizetemp_id":slef.obj.collectprize_id,
          "classes_id":slef.classes_id,
          "classes_name":slef.classes_name,
        }
        slef.is_go_lq=true;
        this.Invok("88027",data_,function (data) {//发送验证码
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            slef.is_go_lq=false;
            return false;
          } else {
              slef.is_go_lq=false;

              slef.is_zj=false;
              slef.is_poput=true;
              slef.is_ok=true;//已经参与过活动
         /*   var typecenter="恭喜您下定成功，请注意查看手机中奖信息";
            if(slef.$route.query.type=="5"){
              typecenter="恭喜您签到成功，请注意查看手机中奖信息";
            }
            slef.$weui.alert(typecenter);*/
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
        /**发送验证码**/
        var data={
          "phone": slef.phone,
          "groupbuy_id":slef.$route.query.groupbuy_id,
          "type":slef.$route.query.type,
        }
        this.Invok("88023",data,function (data) {//发送验证码
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            slef.getcdetext="重新发送";
            slef.is_getcode=false;
            return false;
          } else {
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
          }
        });
      },
    },
  }
</script>
