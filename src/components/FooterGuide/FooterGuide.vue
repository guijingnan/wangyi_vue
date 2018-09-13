<template>
  <footer class="footer_guide border-1px">
    <span  class="guide_item " :class="{on:'/home'===$route.path}" @click="todo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <span  class="guide_item" :class="{on:'/knowledge'===$route.path}" @click="todo('/knowledge')">
      <span class="item_icon">
        <i class="iconfont icon-wuzi"></i>
      </span>
      <span>识物</span>
    </span>
    <span  class="guide_item" :class="{on:'/classify'===$route.path}" @click="todo('/classify')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </span>
    <span  class="guide_item" :class="{on:'/shoppingcart'===$route.path}" @click="todo('/shoppingcart')">
      <span class="item_icon">
        <i class="iconfont icon-tubiaozhizuomoban1"></i>
      </span>
      <span>购物车</span>
    </span>
    <span  class="guide_item" :class="{on:'/personal'===$route.path}" @click="todo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-tubiaozhizuomoban"></i>
      </span>
      <span>个人</span>
    </span>
  </footer>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods:{
      todo(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
