<template>
  <div class="foodListWrap" v-if="recommend">
    <div class="foodListLeft">
      <div class="avatar" >
        <img :src="recommend.avatar">
        <span>{{recommend.nickname}}</span>
      </div>
      <span class="title">{{recommend.title}}</span>
      <span class="subTitle">{{recommend.subTitle}}</span>
    </div>
    <div class="foodListRight">
      <img :src="recommend.picUrl">
      <div>{{recommend.typeName}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props:['recommend']
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .foodListWrap
    width 96%
    height (544/$rem)
    border 1px solid #eee
    padding (30/$rem)
    display flex
    background #fff
    .foodListLeft
      width 60%
      height 100%
      display flex
      flex-direction column
      .avatar
        width 100%
        height (96/$rem)
        img
          width (92/$rem)
          height (92/$rem)
          border-radius (46/$rem)
        span
          font-size (24/$rem)
          color #7e8c8d
      .title
        margin-top (30/$rem)
        font-size (80/$rem)
        text-overflow ellipsis
        overflow hidden
      .subTitle
        margin-top (30/$rem)
        width 100%
        height (200/$rem)
    .foodListRight
      width 40%
      height 100%
      position: relative
      img
        width 100%
        height 100%
      div
        position: absolute
        top (30/$rem)
        left (30/$rem)
        display: inline-block;
        height (100/$rem)
        line-height (100/$rem)
        background-color: rgba(255,255,255,.9);
        border: 1px solid #d9d9d9;
        border-radius (40/$rem)
        color: #333;
        font-size (24/$rem)
</style>
