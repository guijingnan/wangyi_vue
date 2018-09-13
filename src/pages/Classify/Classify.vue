<template>
  <section id="classifyContainer">
    <div class="headerWraper bottom-border-1px">
      <div class="header-search">
        <div>
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="搜索商品,共13249款好货">
        </div>
      </div>
    </div>
    <div class="classify-body">
      <div class="classify-left">
        <ul class="classify-left-content">
          <li v-for="(area,index) in classify.categoryL1List" :key="index"
              class="classify-area" :class="{on:activeIndex===index}"
              @click="slideTo(index)"
          >
            {{area.name}}
          </li>
        </ul>
      </div>
      <div class="classify-right">
        <div>
          <img :src="currentObj.bannerUrl">
          <ul class="imgList">
            <li v-for="(item,index) in currentArr" :key="index" v-if="currentArr">
              <img :src="item.wapBannerUrl">
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        activeIndex:0,
        currentArr:[],
        currentObj:{}
      }
    },
    computed:{
      ...mapState(['classify'])
    },
    mounted(){
      let {activeIndex} = this;
      this.$store.dispatch('getClassifyData',()=>{
        this.$nextTick(()=>{
            this._initScroll();
            this._getPic(activeIndex);
        })
      })
    },
    methods:{
      _initScroll(){
        this.classifyLeft =new BScroll('.classify-left',{
          click:true,
        })
        this.classifyLeft =new BScroll('.classify-right',{
          click:true,
        })
      },
      slideTo(index){
        this.activeIndex = index;
      },
      _getPic(activeIndex){
        this.currentArr = this.classify.categoryL3List[activeIndex].subCateList
        this.currentObj = this.classify.categoryL3List[activeIndex]

      }
    },
    watch:{
      classify(){
        this.$nextTick(()=>{
          this._initScroll()


        })
      },
      activeIndex(){
        let {activeIndex} = this;
        this._getPic(activeIndex);
       /* this.currentArr = this.classify.categoryL1List[activeIndex].subCateList
        this.currentObj = this.classify.categoryL1List[activeIndex]*/

      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #classifyContainer
    width  100%
    height 100%
    overflow hidden
    background #f4f4f4
    .headerWraper
      width 100%
      height (176/$rem)
      position fixed
      top 0
      left 0
      z-index 1
      background #fff
      .header-search
        width 100%
        height (140/$rem)
        div
          width 90%
          background: #ededed
          height  (112/$rem)
          border-radius (10/$rem)
          line-height (112/$rem)
          text-align center
          font-size (24/$rem)
          color #666
          margin-top (32/$rem)
          margin-left (100/$rem)
          padding-top (15/$rem)
          i
            vertical-align middle
          input
            vertical-align middle
            background-color transparent

    .classify-body
      width 100%
      height 86%
      margin-top  (190/$rem)
      display flex
      .classify-left
        /*width (324/$rem)*/
        width 20%
        height 100%
        background-color #fff
        .classify-left-content
          width 100%
          padding-top (2/$rem)
          li
            width 100%
            height (100/$rem)
            margin  (140/$rem) 0
            text-align center
            line-height (100/$rem)
            font-size (24/$rem)
            color #333
            &.on
              color #ab2b2b
              border-left 1px solid #ab2b2b



      .classify-right
        width 80%
        height 100%
        background-color #fff
        div
          width 100%
          >img
             width 90%
             height (384/$rem)
             margin-left (47/$rem)
             margin-top (50/$rem)
          .imgList
             width 90%
             overflow hidden
             >li
               float left
               width (288/$rem)
               height (450/$rem)
               margin (60/$rem)
               >img
                  width (288/$rem)
                  height (288/$rem)
                  display block
               >span
                  width 100%
                  height (144/$rem)
                  font-size (30/$rem)
                  text-align center
                  display block
                  color #333


</style>
