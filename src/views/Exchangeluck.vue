<template>
    <div id="exchangeluck">
        <div class="head">
          <router-link class="head-jt" to="/integralshop"></router-link>
          <div class="head-text-jf">兑换抽奖</div>

          <router-link class="exchangeluck-titel" to="/winningrecord">中奖记录</router-link>
        </div>
        <div class="center">
          <div class="exchangeluck-top">
            <div class="exchangeluck-top-text">积分余额：5200</div>
            <div class="right has-wh">活动说明</div>
          </div>

          <div class="canvas_zjd_bj">
              <div class="myCanvas_div">
                <div class="myCanvas-div-yx-zb"></div>
                <div :class="[isActive ? 'myCanvas_div_yx_zddd' : 'myCanvas_div_yx_zddd1']"></div>
                <div class="canvasDiv">
                  <canvas id="myCanvas"  :height="canvash" :width="canvash" class="myCanvas" :class="{settransform:iscj_ok}" :style="styleObject"></canvas>
                </div>
                <div  class="myCanvas_yq"  @click="go_cj"></div>
              </div>
            <div class="myCanvas_div_ts">每次游戏消耗<span class="myCanvas_div_jf">20积分哦~</span></div>
          </div>
          <div class="canvas_buttom"></div>
          <div class="canvas_zzc"></div>
        </div>
      <div v-show="is_poput">
        <div class="poput-div"></div>
        <div class="poput-center">
          <div class="poput-center-p1">恭喜您，中得10元话费充值卡
            可在中奖记录中查看</div>
          <div class="poput-zj">
            <div class="poput-zj-left">¥10</div>
            <div class="poput-zj-ri">
              <p class="poput-name">话费充值卡</p>
              <p>有效期：2017-12-28至2017-12-28</p>
            </div>
          </div>
          <div class="poput-but">
            <div class="left">立即查看</div>
            <div class="right">立即分享</div>
          </div>
          <div class="poput-x"></div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
        name: "exchangeluck",
        data() {
            return {
              canvash:275,//默认转盘大小
              isActive:true,//控制指示灯
              size:5,//转盘奖品数量
              iscj_ok:false,//控制转盘是否转动
              is_true:true,//控制转盘不能重复点击
              is_poput:false,//控制中奖弹 是否显示
              color:['#ffeb66','#fe895e','#fd66b7','#63a0f0','#50e3eb'],//转盘颜色
              list:{"0":"一等奖", "1":"二等奖", "2":"三等奖", "3":"四等奖", "4":"五等奖"},//转盘奖品
              styleObject:{//转盘停止时指向的角度
                'transform':'',
                '-webkit-transform':'',
              }
            }
        },
        created() {//DOM 还没初始化
          var re=sessionStorage.getItem("rem");
          var canvash=re*5.5;//
          this.canvash=canvash;//动态设置转盘大小  因为canvas 不支持css设置大小 css设置大小会导致图片变形
        },
        mounted(){//DOM 初始化之后
          var canvas=document.getElementById('myCanvas');
          this.createCircle(canvas,this.canvash,this.size,this.color);
          this.createCirText(canvas,this.canvash,this.size,this.list);
          let slef = this; // this 异步指向变更
          setInterval(function () {
            if(slef.isActive){
              slef.isActive=false;
            }else{
              slef.isActive=true;
            }
          },300);
        },
        methods: {
          createCircle(canvas,canvash,size,color){
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
          createCirText(canvas,canvash,size,list){
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
          go_cj(){
            let slef = this; // this 异步指向变更
            slef.iscj_ok=true;
            setTimeout(function () {
              var r=360/slef.size;//每个扇形的角度
              var deg=r*(3-1);
              slef.iscj_ok=false;
              slef.styleObject['transform']="rotate("+-deg+"deg)";
              slef.styleObject['_webkit_transform']="rotate("+-deg+"deg)";
            },2000)

          }
        },
    }
</script>
