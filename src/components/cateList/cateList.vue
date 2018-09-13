<template>
  <div class="cateContainer">
    <img :src="find.itemPicUrl">
    <span>{{find.title}}</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props:['find']
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .cateContainer
    margin-top (80/$rem)
    width 90%
    margin-left  (80/$rem)
    display flex
    flex-direction column
    background #fff
    img
      width 90%
      height (720/$rem)
      margin (60/$rem)
    span
      width 100%
      height (180/$rem)
      margin-top (30/$rem)
      padding-left: (60/$rem)
      font-size (32/$rem)
</style>
