<template>
  <div class="know-wrap" v-if="recommendOne">
    <div class="img-title">
      <img :src="recommendOne.picUrl" >
    </div>
    <div class="title-price">
      <span>
      {{recommendOne.title}}
    </span>
      <span class="price">
       {{recommendOne.priceInfo}}元起
      </span>
    </div>
    <div class="subTitle">{{recommendOne.subTitle}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props:['recommendOne']
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .know-wrap
    width 90%
    padding (80/$rem)
    padding-top 0
    background #fff
  .img-title
    width 100%
    height (772/$rem)
    margin-top (16/$rem)
    img
      width 100%
      height 100%
  .title-price
      margin-top (16/$rem)
      width 100%
      height (86/$rem)
      display flex
      justify-content space-between
  .subTitle
      margin-top (16/$rem)
      width 100%
      color #7f7f7f
      height (66/$rem)
      line-height (66/$rem)
      font-size (24/$rem)
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
</style>
