<template>
  <div id="easejs">
    <div v-show="is_game">
      <div class="money-money-game"><a class="money-money-a">{{game_num}}</a></div>
      <div class="naozhong-game"><a class="naozhong-a">{{game_tiems}}″</a></div>
      <canvas id="canvas" width="300" height="250"></canvas>
      <div class="easejs-footer">
        本活动由深圳爱售科技有限公司提供技术支持
      </div>
    </div>
    <!--显示成绩-->
    <div v-show="is_sygz">
      <div class="poput-div-"></div>
      <div class="easejs-poput">
        <div class="easejs-poput-title"></div>
        <div class="easejs-poput-cj">您的成绩为：{{obj.my_integral}}</div>
        <div class="easejs-poput-cj_">获得购车抵用券：{{obj.time_bonus}}元</div>
        <div class="easejs-poput-cj_" v-show="share_time==0">再来一次可以叠加获得购车抵用券</div>
        <div class="easejs-poput-cj_" v-show="share_time>0">两次累计获得购车抵用券：{{obj.all_bonus}}元</div>
        <div class="easejs-poput-phb hassub">
          数钱排行榜
        </div>

        <ul class="easejs-poput-ul">
          <li class="easejs-poput-li" :class="get_calssName(val.seq)" v-for="val in obj.rank_list">
            <span>{{seq_name[val.seq]}}</span>
            <span class="easejs-poput-li-span">{{val.name}}</span>
            <span>{{val.all_integral}}</span>
          </li>
        </ul>
        <div class="easejs-pm">
          1、以上排名仅为当前参加游戏选手排名<br/>
          2、购车抵用券联系活动主办车商即可兑现
        </div>
        <div class="easejs-poput-button" v-if="share_time==0">
          <a class="easejs-poput-button-a" @click="hidefx(1)">分享再来一次</a>
          分享即可多玩一次,两次的购车抵用券可累计使用
        </div>
        <div class="easejs-poput-button" v-else>
          <!-- <a class="easejs-poput-button-a">确定</a>-->
          购车抵用券可在“我的奖品”查看。
        </div>
      </div>
    </div>
    <!--信息填写-->
    <div v-show="is_qsq">
      <div class="poput-div-"></div>
      <div class="easejs-poput">
        <div class="easejs-poput-alert">
          <div class="easejs-poput-ale-top">
            <h1>数的越多，送的越多</h1>
            <p>一起数钱吧！</p>
            <a class="easejs-text-ri-" @click="show_gz(1)">活动规则</a>
          </div>
          <div>
            <div class="easejs_li__" v-show="brand_list.length>0" @click="xqbrand_name">
              <label class="easejs_li__label">品牌</label>
              <input class="easejs_li__value" type="text" placeholder="请选择品牌" disabled="disabled" v-model="brand_name">
          </div>
            <div class="easejs_li__">
              <label class="easejs_li__label">姓名</label>
              <input class="easejs_li__value" type="text" placeholder="请输入姓名" v-model="name">
            </div>
            <div class="easejs_li__">
              <label class="easejs_li__label">手机</label>
              <input class="easejs_li__value" type="tel" placeholder="请输入手机号码" v-model="phone">
            </div>
            <div class="easejs_li__ getcodediv">
              <label class="easejs_li__label">验证码</label>
              <input class="easejs_li__value" type="tel" placeholder="请输入验证码" v-model="ver_code">
              <a  class="easejs-cdoe-s" @click="getcode" :class="{click:is_getcode}">{{getcdetext}}</a>
            </div>
            <div class="easejs-poput-button-0">
              <a class="easejs-poput-button-0-a" :class="bot" @click="go_sumoney">去数钱</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--游戏准备-->
    <div v-show="is_gamezb">
      <div class="money_zbbj">
        <a class="my-prize" @click="my_prize(1)"></a>
        <div class="money-zb-text">已经有 <span  class="color-ff">{{people_num}}</span> 人参加了数钱游戏</div>
        <div class="money-money"><a class="money-money-a">0</a></div>
        <div class="naozhong"><a class="naozhong-a">15″</a></div>
        <div class="easejs-footer">
          本活动由深圳爱售科技有限公司提供支持
          <a class="easejs-text-ri" @click="show_gz(1)">活动规则</a>
        </div>
        <div class="money_ds_3" v-show="money_ds==3"></div>
        <div class="money_ds_2" v-show="money_ds==2"></div>
        <div class="money_ds_1" v-show="money_ds==1"></div>
        <div class="money_ds_go" v-show="money_ds==0"></div>
        <div class="shumonet-button" v-show="join_ind==1&&game_ind==0">
          <a @click="game_state"></a>
        </div>
      </div>
    </div>
    <!--我的奖品-->
    <div v-show="is_myprize">
      <div class="poput-div-"></div>
      <div class="all-div" >
        <div class="all-div-div">
          <div class="zzc-center-dl">
            <div class="zzc-center-dl-tdiv">
              我的奖品
              <a class="zzc-center-dl-x" @click="my_prize(0)"></a>
            </div>
          </div>
          <div class="zzc-center-dl">
            <p class="zc-center-p" v-for="(val,index) in prize_list">
              <span>{{val.prize_content}}</span>
            </p>
            <p class="zc-center-p" v-show="prize_list.length==0">
              <span>暂无奖品内容</span>
            </p>
          </div>
          <!-- <div class="zzc-center-dl color-w" v-for="val in myprizeObj">-->
          <div class="left"></div>
          <div class="right"></div>
          <!--</div>-->
        </div>
      </div>
    </div>
    <!--活动规则-->
    <div v-show="is_activity_rule">
      <div class="poput-div-of"></div>
      <div class="all-div-" >
        <div class="all-div-div">
          <div class="zzc-center-dl">
            <div class="zzc-center-dl-tdiv">
              活动规则
              <a class="zzc-center-dl-x" @click="show_gz(0)"></a>
            </div>
          </div>
          <div class="zzc-center-dl" style="color: white">
            游戏开始后，划动屏幕数钱1张获得100积分，快速划动屏幕，15秒内获得积分数可以按汽车经销商设定比例兑换购车优惠券。
            如100积分兑换1元优惠券，则10000积分可兑换100元优惠。
          </div>
        </div>
      </div>
    </div>
    <div v-show="fx_is">
      <div class="zzc" >
      </div>
      <div class="zzc-text" @click="hidefx(0)">
        <div class="zzc-h1">
          <div class="left">（请点击右上角“...”选择</div>
          <a class="zzc-fx left"></a>
          <div class="left"> 分享给您的朋友）</div>
        </div>
        <p></p>
        <p></p>
        <p class="zzcp3"></p>
        <div class="button-01">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
  import money_dl from '../assets/jsimages/d0.png'
  import money_game_bot from '../assets/jsimages/mb0.png'
  import money_go_img from '../assets/jsimages/money_go.png'
  import all_mp3 from '../assets/music/a.wav'
  export default {
    name: "easejs",
    data() {
      return {
        rem:0,
        is_sygz:false,//游戏结束显示成绩
        money_ds:4,
        join_ind:2,//信息填写
        is_qsq:false,//信息填写
        is_getcode:false,//验证码
        brand_name:'',
        brand_id:'',
        is_gamezb:true,//游戏准备界面
        is_myprize:false,//我的礼品
        is_game:false,//游戏界面
        getcdetext:'获取验证码',
        seq_name:{'1':'冠军', '2':'亚军', '3':'季军',},
        is_activity_rule:false,
        stage:{},
        obj:{},//完成游戏后 排行榜信息
        bot:'',//控制去数钱按钮
        start_list:[],
        prize_list:[],//我的奖品
        user_id:'',
        game_ind:'1',//游戏标识（0为可参与游戏，1不可参与游戏）
        phone:'',
        fx_is:false,//分享
        ver_code:'',
        name:'',
        brand_list:[],
        integral:'',
        voucher:'',
        share_time:0,
        saleuser_id:'',
        people_num:'',//参与人数
        gameover_:true,//y游戏是否结束
        game_tiems:15,//游戏时间倒计时 单位s
        game_num:0,//游戏数的积分 单位s
        is_go_start:true//钱不停的转动 false 停止
      }
    },
    created:function() {//DOM 没有初始化
      this.rem=sessionStorage.getItem('rem')-0;
      if(this.$route.query.event_id){
        this.init();
      }else{
        this.$weui.alert("活动ID为空");
      }
    },
    mounted:function(){//DOM 挂载完成
      let slef = this; // this 异步指向变更
      slef.$util.getScript('./static/lib/createjs.min.js',function () {//异步加载游戏引擎
        slef.game_init();
      },'easel_js');
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
                  title:'快来参加数钱游戏',// action_obj.event_title,//
                  desc:'游戏积分抵车款，多数多省钱',// action_obj.event_content,
                  link:window.location.href.split('#')[0]+'#/activitybymoney?event_id='+slef.$route.query.event_id+"&type_id="+slef.$route.query.type_id+"&saleuser_id="+(slef.$route.query.saleuser_id||""),
                  imgUrl:action_obj.poster_url,
                  success: function () {
                    // 用户确认分享后执行的回调函数
                    slef.wxfx_su();
                  }
                });
                //分享到朋友圈
                slef.$wx.onMenuShareTimeline({
                  title:'快来参加数钱游戏',//action_obj.event_title,
                  link:window.location.href.split('#')[0]+'#/activitybymoney?event_id='+slef.$route.query.event_id+"&type_id="+slef.$route.query.type_id+"&saleuser_id="+(slef.$route.query.saleuser_id||""),
                  imgUrl:action_obj.poster_url,
                  success: function () {
                    // 用户确认分享后执行的回调函数
                    slef.wxfx_su();
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
    methods: {//函数
      init:function () {
        var data={
          'event_id':this.$route.query.event_id,
        };
        let slef = this; // this 异步指向变更
        this.Invok("2506",data,function (data) {//游戏权限查询
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            // slef.obj=data.success;//user_id
            if(data.success.game_ind==1&&data.success.share_time>0){
              slef.$weui.alert('您已参加过本活动，奖品可在左上角"我的奖品"里查看');
            }else if(data.success.game_ind==1&&data.success.share_time==0){
              slef.$weui.alert('您已参加过一次活动，您可以分享之后再玩一次');
            }
            slef.game_ind=data.success.game_ind;
            slef.user_id=data.success.user_id;
            slef.integral=data.success.integral;
            slef.voucher=data.success.voucher;
            slef.people_num=data.success.people_num;
            slef.join_ind=data.success.join_ind;
            var brand_list=[];
            if(data.success.brand_list){
              for(var i=0;i<data.success.brand_list.length;i++){
                brand_list.push({
                  label: data.success.brand_list[i].brand_name,
                  value: data.success.brand_list[i].brand_id,
                })
              }
            }
            slef.brand_list=brand_list;
            if(data.success.join_ind==0){
              slef.is_qsq=true;
            }
          }
        },true);
      },
      game_init:function (e){
        let slef = this; // this 异步指向变更
        let canvas = document.querySelector('#canvas');
        canvas.width =window.innerWidth;
        canvas.height =window.innerHeight-15;
        //创建舞台
        slef.stage = new createjs.Stage(canvas);
        //舞台自动更新
        createjs.Ticker.on('tick',this.stage);
        createjs.Ticker.setFPS(60);
        createjs.Touch.enable(this.stage); //允许设备触控
        //注册音乐
        createjs.Sound.alternateExtensions = ["wav", "ogg"];
        createjs.Sound.registerSound(all_mp3, 'sound_',0)
        //创建一个Shape对象 背景的红色
        let circle = new createjs.Shape();
        circle.graphics.beginFill("#fe361b").drawRect(0, 0,canvas.width,canvas.height );
        slef.stage.addChild(circle);
        slef.new_start(6);
        for(var i=0;i<slef.start_list.length;i++){//转圈的钱 动画
          slef.go_start(slef.start_list[i]);
        }
        //创建一个底部的钱
        let money_game_= new createjs.Bitmap(money_game_bot);//x=465 y=846
        money_game_.scaleY=8.46*this.rem/846;
        money_game_.scaleX=4.65*this.rem/465;
        money_game_.y=5*this.rem;
        money_game_.x=1.3*this.rem+(i*2);
        slef.stage.addChild(money_game_);
        let money_go_ = new createjs.Bitmap(money_go_img);//x=429 y=870
        money_go_.scaleY=8.7*this.rem/870;
        money_go_.scaleX=4.29*this.rem/429;
        money_go_.y=4*this.rem+50;
        money_go_.x=1.2*this.rem+20;
        slef.stage.addChild(money_go_);
        let money_go_sy =0;//鼠标起始位置
        let money_go_sy_state=0;//图片起始位置
        let money_go_move=0;//鼠标移动距离
        //鼠标放上去
        money_go_.addEventListener("mousedown",mousedown_);
        //鼠标移动事件
        money_go_.addEventListener("pressmove",pressmove_);
        //添加鼠标"松开"事件
        money_go_.addEventListener("pressup",pressup_);
        function mousedown_(c) {
          if(slef.gameover_) return false;//游戏没开始
          money_go_sy = c.stageY;
          money_go_sy_state=money_go_.y;
          money_go_.scaleY=(8.7*slef.rem/870)*0.8;
          money_go_.scaleX=(4.29*slef.rem/429)*0.8;
          money_go_.x=money_go_.x+money_go_.x*((1-(4.29*slef.rem/429)*0.8)/2);//移动位置
        }
        function pressmove_(c) {
            if(slef.gameover_) return false;//游戏没开始
            money_go_.y=c.stageY   //(money_go_.y-money_go_move)+(c.stageY-money_go_sy);//图片跟着鼠标移动
            money_go_move=c.stageY-money_go_sy;//鼠标移动距离
        }
        function pressup_(c) {
          var px=-money_go_move;
          if(px>150){
            //播放
            createjs.Sound.play('sound_');
            createjs.Tween.get(money_go_, {loop: false},false).to({
              y:-200,
            }, 100).call(function () {
              if(!slef.gameover_) slef.game_num+=100;//游戏没开始
              money_go_.y=money_go_sy_state;
              money_go_move=0;
              money_go_.scaleX=4.29*slef.rem/429;
              money_go_.scaleY=8.7*slef.rem/870;
              money_go_.x=1.2*slef.rem+20;
            });
          }else{
            money_go_.y=money_go_sy_state;
            money_go_move=0;
            money_go_.scaleX=4.29*slef.rem/429;
            money_go_.scaleY=8.7*slef.rem/870;
            money_go_.x=1.2*slef.rem+20;
          }
        }
        slef.removeevent_game=function () {
          //鼠标放上去
          money_go_.removeEventListener("mousedown",mousedown_);
          //鼠标移动事件
          money_go_.removeEventListener("pressmove",pressmove_);
          //"松开"事件
          money_go_.removeEventListener("pressup",pressup_);
        }
      },
      my_prize:function (e) {
        this.is_myprize=e;
        if(e){
          var data={
            'event_id':this.$route.query.event_id,
            'user_id':this.user_id,
          };
          let slef = this; // this 异步指向变更
          this.Invok("2511",data,function (data) {//游戏权限查询
            if (data.code != 0) {
              slef.$weui.alert(data.msg);
              return false;
            } else {
              slef.prize_list=data.success.prize_list;
            }
          },true);
        }
      },
      show_gz:function (e) {
        this.is_activity_rule=e
      },
      hidefx:function (e) {
        this.fx_is=e;
      },
      get_calssName:function (e) {
        if(e==3){
          return 'jj'
        }else if(e==2){
          return 'yj'
        }else{
          return ''
        }
      },
      game_over:function () {
        this.gameover_=true;
        var data={
          'event_id':this.$route.query.event_id,
          'integral':this.game_num,
          'user_id':this.user_id,
        };
        let slef = this; // this 异步指向变更
        this.Invok("2509",data,function (data) {
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            slef.obj=data.success;//user_id
            slef.share_time=data.success.share_time;
            slef.is_sygz=true;
          }
        },true);
      },
      game_state:function () {
        if(this.game_ind==1)return false
        let slef = this; // this 异步指向变更
        slef.money_ds=3;
        var game_time_=setInterval(function () {
          if(slef.money_ds==0){
            clearInterval(game_time_);
            slef.is_gamezb=false;
            slef.is_game=true;
            slef.gameover_=false;
            slef.game_tiems=15;
            slef.game_num=0;
            var game_time=setInterval(function () {
              if(slef.game_tiems==1){
                slef.game_over();
                slef.removeevent_game();
              }
              if(slef.game_tiems==0){
                clearInterval(game_time);
              }else{
                slef.game_tiems--;
              }

            },1000);
          }else{
            slef.money_ds--;
          }
        },1000);
      },
      go_sumoney:function () {
        if(this.bot==="click")return false;
        var validator = new this.$util.Validator();
       /* validator.add(this.brand_id, [{
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
            slef.user_id=data.success.user_id;//user_id
            sessionStorage.setItem("easejs_user_id"+slef.$util.projectOnlyName,slef.user_id);
            slef.is_gamezb=true;
            slef.is_qsq=false;
            if(slef.game_ind==0){
              slef.game_state();
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
      new_start:function (len) {
        let slef = this; // this 异步指向变更
        for(var i=0;i<len;i++){
          let start = new createjs.Bitmap(money_dl);
          start.regX= 63;//设置图形的X和Y轴位移
          start.regY= 97;//设置图形的X和Y轴位移
          start.scaleX=0.5;
          start.scaleY=0.5;
          start.y = slef.randomNum(-1000,-200);
          start.x =slef.randomNum(0,window.innerWidth);
          slef.stage.addChild(start);
          slef.start_list.push(start);
        }
      },
      go_start:function (start_) {
        let slef = this; // this 异步指向变更
        createjs.Tween.get(start_, {loop: false}).to({
          rotation:1220+slef.genRandom(400),
          x:slef.randomNum(0,window.innerWidth),
          y:window.innerHeight,
        }, 1500).call(function(){
          start_.set({
            x:slef.randomNum(0,window.innerWidth),
            y:slef.randomNum(-800,-200),
            rotation:0,
          });
          if(slef.is_go_start)slef.go_start(start_);
        })
      },
      genRandom:function (a) {
        return parseInt(Math.random() * a)
      },
      wxfx_su:function(){
        if(this.share_time>0)return false;
        let slef=this;
        var data={
          "event_id":slef.$route.query.event_id,
          "phone": slef.phone,
          "saleuser_id":slef.$route.query.saleuser_id,
          "type":slef.$route.query.type_id,
          "user_id":slef.user_id
        }
        this.Invok("2510",data,function (data){//分享再来一次
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            slef.is_sygz=false;
            slef.hidefx(0);//隐藏分享提示层
            /*slef.init();*/
            location.reload();
          }
        },true);
      },
      randomNum:function (minNum,maxNum){
        switch(arguments.length){
          case 1:
            return parseInt(Math.random()*minNum+1,10);
            break;
          case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
          default:
            return 0;
            break;
        }
      },
    }
  }
</script>
