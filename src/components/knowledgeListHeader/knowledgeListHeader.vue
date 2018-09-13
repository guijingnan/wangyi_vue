<template>
  <div class="headerList">
{{title}}
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props:['title'],


  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .headerList
    width 100%
    height (300/$rem)
    background #fff
    text-align center
    line-height (300/$rem)
    font-size (80/$rem)
    color #333
</style>
