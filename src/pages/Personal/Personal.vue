<template>
  <section id="personalContainer">
    <div class="headerWraper bottom-border-1px">
      <div class="header-search">
        <i class="iconfont icon-home" @click="changeRoute('/home')"></i>
        <a href="javascript:;"></a>
        <div>
          <i class="iconfont icon-search"></i>
          <i class="iconfont icon-tubiaozhizuomoban1" @click="changeRoute('/shoppingcart')"></i>
        </div>

      </div>
    </div>
    <router-view v-if="isLogin" :loginType="loginType"></router-view>

    <div class="bodywraper" v-else>
      <div class="img-Header">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
      </div>
      <div class="phoneLogin">
        <i class="iconfont icon-phone" ></i>
          <span @click="changeLogin('phone')">
            <router-link to="/personal/login">
              手机号码登陆
            </router-link>
          </span>

      </div>
      <div class="mailLogin">
        <i class="iconfont icon-email"></i>
        <span @click="changeLogin('email')">
          <router-link to="/personal/login">
              邮箱账号登陆
          </router-link>
        </span>
      </div>
      <div class="phoneRegist">
        <span>手机号快速注册</span>
        <i class="iconfont icon-goto" ></i>
      </div>
      <ul class="footer">
        <li class="weixin">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </li>
        <li class="qq">
          <i class="iconfont icon-web-icon-"></i>
          <span>QQ</span>
        </li>
        <li class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </li>
      </ul>
    </div>
  </section>

</template>

<script>
  export default {
    data() {
      return {
        isLogin:false,
        loginType:'phone'
      }
    },
    mounted(){
      this.isLogin=false
      console.log("1")
    },

    methods:{
      changeLogin(type){
        this.isLogin = true
        this.loginType =type
      },
      changeRoute(path){
        this.isLogin=false;
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #personalContainer
    width  100%
    height 100%
    overflow hidden
    background #f4f4f4
    .headerWraper
      width 100%
      height (200/$rem)
      position fixed
      top 0
      left 0
      z-index 1
      background #fff
      .header-search
        width 100%
        height (160/$rem)
        display flex
        justify-content: space-around
        line-height (160/$rem)
        >i
          font-size (120/$rem)
        a
          width 28%
          height 70%
          display inline-block
          margin-top (40/$rem)
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png')
          background-size: cover;
          background-position: center;
          transform scale(0.8)
        div
          height (180/$rem)
          line-height (180/$rem)
          display flex
          justify-content space-between
          width 20%
          margin-right -(80/$rem)
          i
            font-size (120/$rem)



    >.bodywraper
      width 100%
      height 100%
      margin-top (220/$rem)
      .img-Header
        width 100%
        height (820/$rem)
        text-align center
        line-height (820/$rem)
        margin-top (410/$rem)
        img
          width (600/$rem)
          height 30%

      .phoneLogin,.mailLogin
        width 90%
        height (180/$rem)
        border-radius (20/$rem)
        margin-top (40/$rem)
        background-color #b4282d
        margin-left 5%
        text-align center
        line-height (180/$rem)
        span
          a
           color #fff
      .mailLogin
        background-color transparent
        border 1px solid #b4282d
        color #000
        span
          a
           color #000
      .phoneRegist
        width 90%
        height (40/$rem)
        margin-top (80/$rem)
        margin-left  5%
        text-align center
        font-size (64/$rem)

      .footer
        width 100%
        height (80/$rem)
        display flex
        padding-left (200/$rem)
        position absolute
        bottom (200/$rem)
        left 0
        li
          width 20%
          height 100%
          border-right 1px solid #333
          margin-left (80/$rem)


</style>
