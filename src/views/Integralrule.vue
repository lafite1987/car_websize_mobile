<template>
    <div id="integralrule">
      <div class="head">
        <router-link class="head-jt" to="/integralshop"></router-link>
        <div class="head-text">积分规则</div>
      </div>
      <div class="center">
        <ul>
          <li class="hassub">
            <div class="jffz-jf ">
              <div class="jffz-jf-bj">注册：100分</div>
              <div class="jffz-jf-p1">首次验证注册即可获取</div>
            </div>
          </li>
          <li class="hassub">
            <div class="jffz-jf">
              <div class="jffz-jf-bj">登录送：9分／天    </div>
              <div class="jffz-jf-p1">每次打开送3分，累加共送9分上限</div>
            </div>
          </li>
          <li class="hassub">
            <div class="jffz-jf">
              <div class="jffz-jf-bj">分享团购送：100分／团购</div>
              <div class="jffz-jf-p1">已结束的团购不参与分享团购的积分</div>
            </div>
          </li>
          <li class="hassub">
            <div class="jffz-jf">
              <div class="jffz-jf-bj">分享团购后朋友下订送：10000分／单</div>
              <div class="jffz-jf-p1">朋友下订后可获取</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
    export default {
        name: "integralrule",
        data() {
            return {}
        },
        created() {

        },
        methods: {}
    }
</script>
