<template>
  <div id="activitybymoney_ys" :style="styleObject">
    <div class="center" style="padding-top: 0">
      <div class="tg-hd-title">
        <!-- <a  :style="{backgroundImage:'url(' + obj.pic_url + ')'}"/>-->
        <a :style="{backgroundImage:'url(' + pic_url + ')'}" v-if="pic_url"></a>
        <div class="tg-hd-title-div" v-else></div>
        <div class="activitybymoney-tilte-zzc"></div>
        <div class="activitybymoney-tilte-text">
          <p class="activitybymoney-tilte-h3">{{obj.event_title||'阿里bb淘bao店优惠专场'}}</p>
          <p class="activitybymoney-tilte-h4">{{obj.sub_title||'淘bao店优惠专场'}}</p>
        </div>
      </div>
      <div class="tg-hdgzsm">
        <div class="tg-hdgzsm-title hassub" >活动详情</div>
        <div class="thecxdx">
          <div v-html="obj.event_content"></div>
        </div>
        <div class="tg-sygz">
          <div>有效期：{{obj.event_start_time||'2017-09-29'}}至{{obj.event_end_time||'2017-10-29'}}</div>
          <div class="tg-sygz-content tg-sygz-data">活动内容活动内容活动内容活动内容</div>
          <div class="tg-hdgzsm-gonggao" style="">
          现在报名，还可以参与数钱游戏，<br>
          数的越多，送的越多。
          <a  class="tg-hdgzsm-gonggao-a">马上数钱</a></div></div>
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
          <ul class="activitybymoney-ul" v-if="obj.create_ind=='A'">
            <li class="tg-hdgzsm-activitybymoney-li" :class="val.className"  v-for="val in obj.gift_list">
              <div class="tg-hdgzsm-activitybymoney-div">
                <div class="money_li_title color-bu">
                  <a class="money_li_title_a">{{val.seq}}</a>
                  <span>{{val.title}}</span>
                </div>
                <div class="strok-outside">{{val.detail}}</div>
              </div>
            </li>
          </ul>

          <ul class="activitybymoney-ul">
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_qdl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">1</a>
                <span>签到礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_dcl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">2</a>
                <span>订车礼</span>
              </div>
              <div class="strok-outside">
                9月9-10日到深圳东风日产华旭店：<br/>
                1、免费享受二手车查定评估服务；<br/>
                2、成功置换东风日产新车时，可以直接抵扣1000元
                购车款。</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_xyl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">3</a>
                <span>幸运礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_zdl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">4</a>
                <span>早订礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_qxl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">5</a>
                <span>齐心礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_xhcjl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">6</a>
                <span>循环抽奖礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_zjl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">7</a>
                <span>转介礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_pgl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">8</a>
                <span>评估礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_zhl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">9</a>
                <span>置换礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_jrl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">10</a>
                <span>金融礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_byl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">11</a>
                <span>保养礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_qwhzl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">12</a>
                <span>趣味互动礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_yyjpl">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">13</a>
                <span>一元竞拍礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
            <li class="tg-hdgzsm-activitybymoney-li activitybymoney_xll">
              <div class="tg-hdgzsm-activitybymoney-div">
              <div class="money_li_title color-bu">
                <a class="money_li_title_a">14</a>
                <span>限量礼</span>
              </div>
              <div class="strok-outside">9月9-10日到深圳东风日产华旭店购车扫描二维码参与报名，即可免费获得腾讯VIP会员！</div>
              </div>
            </li>
          </ul>
          <div class="activitybymoney-div-text">
            <p>更多惊喜，到店享！</p>
            <p>您还可以参与数钱游戏，你数的越多，送的越多！</p>
          </div>
          <div class="activitybymoney_shu"  v-show="obj.game_ind==1">
          </div>
          <div v-show="obj.game_ind!=1">
            <div>
              <div class="activitybymoney_top"></div>
              <div>
                <div class="myzl-li">
                  <label class="address-label">品牌</label>
                  <input type="text" disabled="disabled"  class="activitybymoney-input" placeholder="请选择品牌"/>
                </div>
                <div class="myzl-li">
                  <label class="address-label">姓名</label>
                  <input type="text" class="activitybymoney-input" placeholder="请输入姓名"/>
                </div>
                <div class="myzl-li ">
                  <label class="address-label">手机号</label>
                  <input type="text" class="activitybymoney-input" placeholder="请输入手机号"/>

                </div>
                <div class="myzl-li position">
                  <label class="address-label">验证码</label>
                  <input type="text" class="activitybymoney-input" placeholder="请输入验证码"/>
                  <a class="activitybymoneyinput-yzm" >获取验证码</a>
                </div>
              </div>
              <div style="margin: .2rem 0">
                <div class="button-01">提交</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import pic_url from '@/assets/images/activitybymoney/activitybymoney_ys.png'
  export default {
    name: "activitybymoney_ys",
    data () {
      return {
        obj:{},
        window_init:false,
        classNameList:['_cyl','_qdl','_dcl','_xyl','_zdl','_qxl','_xhcjl','_zjl','_pgl','_zhl','_jrl','_byl','_qwhzl','_yyjpl','_xll'],
        pic_url:pic_url,
        tel:"javascript:void(0);",
        styleObject:{},
      }
    },
    created(){//初始化数据
      window.init=this.init;
      if(window.device && window.device.didFinishLoad){//ios
        window.device.didFinishLoad();
      }
    },
    mounted:function () {

    },
    methods:{//监听函数
      init:function(data_) {//给爱售宝 暴露接口 屏蔽拨打电话
        //slef.tel="javascript:void(0);";
        console.log(data_);
        let  slef=this;
        slef.styleObject={
          'pointer-events':'none',
        };
        if(slef.window_init)return false;
        slef.window_init=true;
        var obj= eval("( "+data_+" ) ")||{};
        var obj=obj.data;
        obj.create_ind='A';
        var list=[];
        if(obj.gift_list){
          for(var i=0;i<obj.gift_list.length;i++){
            var ob_=obj.gift_list[i];
            ob_.className="activitybymoney"+(slef.classNameList[ob_.seq]||"");
            ob_.seq=i+1;
            list.push(ob_);
          }
          delete obj.gift_list;
          obj.gift_list=list;
          if(obj.poster_url)slef.pic_url=obj.poster_url;
        }
        if(slef.$util.isEmpty(slef.tel))slef.tel="tel:"+obj.saleuser_phone;
        slef.obj=obj;

      }
    }
  }
</script>
