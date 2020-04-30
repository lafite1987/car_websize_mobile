<template>
  <div id="moneygame">
    <div v-show="is_gamezb==9">
      <div class="money-money-game">
        <a class="money-money-a">{{game_num}}</a>
      </div>
      <div class="naozhong-game">
        <a class="naozhong-a">{{game_tiems}}″</a>
      </div>
      <canvas id="canvas" width="300" height="250"></canvas>
      <div class="easejs-footer">本活动由深圳爱售科技有限公司提供技术支持</div>
    </div>
    <!--游戏准备-->
    <div v-show="is_gamezb==0">
      <div class="money_zbbj">
        <div class="money-zb-text">
          已经有
          <span class="color-ff">{{obj.players}}</span> 人参加了数钱游戏
        </div>
        <div class="money-money">
          <a class="money-money-a">0</a>
        </div>
        <div class="naozhong">
          <a class="naozhong-a">15″</a>
        </div>
        <div class="money_ds_3" v-show="money_ds==3"></div>
        <div class="money_ds_2" v-show="money_ds==2"></div>
        <div class="money_ds_1" v-show="money_ds==1"></div>
        <div class="money_ds_go" v-show="money_ds==0"></div>
        <div class="shumonet-button" v-show="game_ind==0">
          <a @click="game_state"></a>
        </div>
      </div>
    </div>
    <!--活动规则-->
    <Gamegz :suess="obj"/>
  </div>
</template>
<script>
import money_dl from "@/assets/jsimages/d0.png";
import money_game_bot from "@/assets/jsimages/mb0.png";
import money_go_img from "@/assets/jsimages/money_go.png";
import all_mp3 from "@/assets/music/a.wav";
import Gamegz from "@/components/gamegz";
export default {
  name: "moneygame",
  components: {
    Gamegz
  },
  data() {
    return {
      rem: 0,
      money_ds: 4,
      is_gamezb: 0, //0 游戏准备 1 玩过一次分享界面 2 玩过2次成绩界面 9游戏进行页面
      stage: {},
      bot: "", //控制去数钱按钮
      start_list: [],
      game_ind: "1", //游戏标识（0为可参与游戏，1不可参与游戏）
      obj: {}, //
      adddEveList: null,
      open_id: "",
      gameover_: true, //y游戏是否结束
      game_tiems: 15, //游戏时间倒计时 单位s
      game_num: 0, //游戏数的积分 单位s
      is_go_start: true //钱不停的转动 false 停止
    };
  },
  created: function() {
    //DOM 没有初始化
    this.rem = sessionStorage.getItem("rem") - 0;
    this.open_id =
      localStorage.getItem("open_id" + this.$util.projectOnlyName) || "";
    if (this.open_id == "") {
      //本地不存在获取url
      this.open_id = this.$route.query.open_id || "";
      if (this.open_id == "") {
        //url 也没有
        var redirect_uri = window.location.href; //.split('#')[0]+"#/login?groupbuy_id="+this.obj.groupbuy_id+"&to_device_id="+this.to_device_id+"&to_user_id="+this.to_user_id;
        location.href =
          this.$util.serviceUrl +
          "/wechat/userAuth.do?redirectUri=" +
          encodeURIComponent(redirect_uri);
      } else {
        localStorage.setItem(
          "open_id" + this.$util.projectOnlyName,
          this.open_id
        );
      }
    }
    if (this.$route.query.tg_moneygame_id) {
      this.init();
    } else {
      this.$weui.alert("活动ID为空");
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      //DOM 挂载完成
      let slef = this; // this 异步指向变更
      slef.$util.getScript(
        "./static/lib/createjs.min.js",
        function() {
          //异步加载游戏引擎
          slef.game_init();
        },
        "easel_js"
      );
    });
  },
  methods: {
    //函数
    init: function(type) {
      if (type) {
        console.log(type + "0");
        this.game_init();
        this.gameover_ = false;
        this.money_ds = 4;
      }
      var data = {
        tg_moneygame_id: this.$route.query.tg_moneygame_id,
        userinfo_id: this.$route.query.userinfo_id,
        open_id: this.open_id
      };
      let slef = this; // this 异步指向变更
      this.Invok(
        "10018",
        data,
        function(data) {
          //游戏权限查询
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            slef.obj = data.success;
            slef.game_ind = 0;
            slef.is_gamezb = 0;
            if (slef.is_gamezb === "1") {
              slef.$weui.alert("您已经参与过了");
              slef.game_ind = 1;
            }
          }
        },
        true
      );
    },
    game_init: function(e) {
      let slef = this; // this 异步指向变更
      let canvas = document.querySelector("#canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 15;
      //创建舞台
      const stage = new createjs.Stage(canvas);
      //舞台自动更新
      createjs.Ticker.on("tick", stage);
      createjs.Ticker.framerate = 60;
      //注册音乐
      createjs.Sound.alternateExtensions = ["wav", "ogg"];
      createjs.Sound.registerSound(all_mp3, "sound_", 0);
      //创建一个Shape对象 背景的红色
      let circle = new createjs.Shape();
      circle.graphics
        .beginFill("#fe361b")
        .drawRect(0, 0, canvas.width, canvas.height);
      stage.addChild(circle);
      slef.new_start(6, stage);
      for (var i = 0; i < slef.start_list.length; i++) {
        //转圈的钱 动画
        slef.go_start(slef.start_list[i]);
      }
      //创建一个底部的钱
      let money_game_ = new createjs.Bitmap(money_game_bot); //x=465 y=846
      money_game_.scaleY = (8.46 * this.rem) / 846;
      money_game_.scaleX = (4.65 * this.rem) / 465;
      money_game_.y = 5 * this.rem;
      money_game_.x = 1.3 * this.rem + i * 2;
      stage.addChild(money_game_);
      let money_go_ = new createjs.Bitmap(money_go_img); //x=429 y=870
      money_go_.scaleY = (8.7 * this.rem) / 870;
      money_go_.scaleX = (4.29 * this.rem) / 429;
      money_go_.y = 4 * this.rem + 50;
      money_go_.x = 1.2 * this.rem + 20;
      stage.addChild(money_go_);
      let money_go_sy = 0; //鼠标起始位置
      let money_go_sy_state = 0; //图片起始位置
      let money_go_move = 0; //鼠标移动距离
      //鼠标放上去
      this.adddEveList = function() {
        const a = createjs.Touch.enable(stage, true); //允许设备触控
        console.log(`结束开始允许设备触控=${a}`);
        money_go_.addEventListener("mousedown", mousedown_);
        //鼠标移动事件
        setTimeout(() => {
          money_go_.addEventListener("pressmove", pressmove_);
        }, 2000);
        //  const b=1
        //添加鼠标"松开"事件
        money_go_.addEventListener("pressup", pressup_);
      };

      function mousedown_(c) {
        if (slef.gameover_) return false; //游戏没开始
        money_go_sy = c.stageY;
        money_go_sy_state = money_go_.y;
        money_go_.scaleY = ((8.7 * slef.rem) / 870) * 0.8;
        money_go_.scaleX = ((4.29 * slef.rem) / 429) * 0.8;
        money_go_.x =
          money_go_.x +
          money_go_.x * ((1 - ((4.29 * slef.rem) / 429) * 0.8) / 2); //移动位置
      }
      function pressmove_(c) {
        //debugger
        if (slef.gameover_) return false; //游戏没开始
        money_go_.y = c.stageY; //(money_go_.y-money_go_move)+(c.stageY-money_go_sy);//图片跟着鼠标移动
        money_go_move = c.stageY - money_go_sy; //鼠标移动距离
      }
      function pressup_(c) {
        var px = -money_go_move;
        if (px > 200) {
          //播放
          createjs.Sound.play("sound_");
          createjs.Tween.get(money_go_, { loop: false }, false)
            .to(
              {
                y: -200
              },
              150
            )
            .call(function() {
              if (!slef.gameover_) slef.game_num += 100; //游戏没开始
              money_go_.y = money_go_sy_state;
              money_go_move = 0;
              money_go_.scaleX = (4.29 * slef.rem) / 429;
              money_go_.scaleY = (8.7 * slef.rem) / 870;
              money_go_.x = 1.2 * slef.rem + 20;
            });
        } else {
          money_go_.y = money_go_sy_state;
          money_go_move = 0;
          money_go_.scaleX = (4.29 * slef.rem) / 429;
          money_go_.scaleY = (8.7 * slef.rem) / 870;
          money_go_.x = 1.2 * slef.rem + 20;
        }
      }
      slef.removeevent_game = function() {
        const a = createjs.Touch.disable(stage); //
        console.log(`结束游戏${a}`);
        //鼠标放上去
        money_go_.removeEventListener("mousedown", mousedown_);
        //鼠标移动事件
        money_go_.removeEventListener("pressmove", pressmove_);
        //"松开"事件
        money_go_.removeEventListener("pressup", pressup_);
      };
    },
    clikc_type: function(key, value) {
      this[key] = value;
    },
    game_over: function() {
     // return false;
      this.gameover_ = true;
      var data = {
        tg_moneygame_id: this.$route.query.tg_moneygame_id,
        userinfo_id: this.$route.query.userinfo_id,
        open_id: this.open_id,
        score: this.game_num
      };
      this.get_score(data);
    },
    game_state: function() {
      if (this.game_ind == 1) return false;
      this.game_ind = 1;
      let slef = this; // this 异步指向变更
      slef.money_ds = 3;
      this.adddEveList();
      //sb
      var game_time_ = setInterval(function() {
        if (slef.money_ds == 0) {
          clearInterval(game_time_);
          slef.game_ind = 0;
          slef.is_gamezb = 9; //进入游戏界面
          slef.gameover_ = false;
          slef.game_tiems = 15;
          slef.game_num = 0;
          var game_time = setInterval(function() {
            if (slef.game_tiems == 1) {
              slef.game_over();
              slef.removeevent_game();
            }
            if (slef.game_tiems == 0) {
              clearInterval(game_time);
            } else {
              slef.game_tiems--;
            }
          }, 1000);
        } else {
          slef.money_ds--;
        }
      }, 1000);
    },
    new_start: function(len, stage) {
      let slef = this; // this 异步指向变更
      for (var i = 0; i < len; i++) {
        let start = new createjs.Bitmap(money_dl);
        start.regX = 63; //设置图形的X和Y轴位移
        start.regY = 97; //设置图形的X和Y轴位移
        start.scaleX = 0.5;
        start.scaleY = 0.5;
        start.y = slef.randomNum(-1000, -200);
        start.x = slef.randomNum(0, window.innerWidth);
        stage.addChild(start);
        slef.start_list.push(start);
      }
    },
    go_start: function(start_) {
      let slef = this; // this 异步指向变更
      createjs.Tween.get(start_, { loop: false })
        .to(
          {
            rotation: 1220 + slef.genRandom(400),
            x: slef.randomNum(0, window.innerWidth),
            y: window.innerHeight
          },
          1500
        )
        .call(function() {
          start_.set({
            x: slef.randomNum(0, window.innerWidth),
            y: slef.randomNum(-800, -200),
            rotation: 0
          });
          if (slef.is_go_start) slef.go_start(start_);
        });
    },
    genRandom: function(a) {
      return parseInt(Math.random() * a);
    },
    get_score: function(data_) {
      //添加 或者查询 分
      let slef = this; // this 异步指向变更
      this.Invok(
        "10017",
        data_,
        function(data) {
          //游戏结束获取最高分
          if (data.code != 0) {
            slef.$weui.alert(data.msg);
            return false;
          } else {
            // if (slef.obj.game_num == 1) {
            //   slef.is_gamezb = 2;
            // } else {
            //   slef.is_gamezb = 1;
            // }
            // var _query = slef.$route.query;
            // _query.is_gamezb = slef.is_gamezb;
            // _query.time_id = slef.obj.time_id;
            console.log(data.success);
            slef.$router.push({
              path: "/gameresult",
              query: slef.$route.query
            }); //游戏结束曲成绩界面
          }
        },
        true
      );
    },
    randomNum: function(minNum, maxNum) {
      switch (arguments.length) {
        case 1:
          return parseInt(Math.random() * minNum + 1, 10);
          break;
        case 2:
          return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
          break;
        default:
          return 0;
          break;
      }
    }
  }
};
</script>
