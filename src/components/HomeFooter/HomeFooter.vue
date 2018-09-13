<template>
  <div class="homeFooter">
    <div class="homeFooterH">
      <a href="javascript:;">下载APP</a>
      <a href="javascript:;">电脑版</a>
    </div>
    <div class="homeFooterT">
      <span class="copyright">网易公司版权所有 © 1997-</span>
      <span class="licence">食品经营许可证：JY13301080111719</span>
    </div>

  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .homeFooter
    width 100%
    height (490/$rem)
    background #414141
    display flex
    flex-direction column
    justify-content space-around
    margin-top (490/$rem)
    .homeFooterH
      width 90%
      height (124/$rem)
      display flex
      justify-content space-around
      line-height (124/$rem)
      a
        width (400/$rem)
        font-size (30/$rem)
        text-align center
        color: #fff;
        border 1px solid #fff
        border-radius (30/$rem)
    .homeFooterT
      font-size (30/$rem)
      line-height (80/$rem)
      text-align center
      color #999;
      display flex
      flex-direction column

</style>
