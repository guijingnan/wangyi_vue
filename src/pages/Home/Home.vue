<template>
  <section id="homeContainer">
    <div class="headerWraper">
      <div class="header-search">
        <a href="javascript:;"></a>
        <div>
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="搜索商品">
        </div>
      </div>
      <div class="header-tab">
        <ul ref="searchItem" class="searchItem">
          <li v-for="(item,index) in home.headCateList"  :key="index"  @click.stop="handlerTo(index)" :class="{on:currentIndex===index}" class="lis-Li">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="bodywraper">
      <div class="body-content">
        <nav class="msite_nav border-1px">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in home.headCateList" :key="index">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img :src="item.bannerUrl">
                  </div>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>

        <ul class="g-grow">
          <li>
            <i class="iconfont icon-gou"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="iconfont icon-gou"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="iconfont icon-gou"></i>
            <span>网易自营品牌</span>
          </li>
        </ul>
        <div class="shopList">
          <div class="shop-List-header">
            <span>品牌制造商直供</span>
            <i class="iconfont icon-go"></i>
          </div>
          <div class="shop-List-foods">
            <ul class="foods">
              <li v-for="(tag, index) in tages" :key="index">
                <div class="list-text">
                  <span>{{tag.name}}</span>
                  <span>{{tag.floorPrice}}元起</span>
                  <span>上新</span>
                </div>
                <div class="img-list">
                  <img :src="tag.picUrl">
                </div>
              </li>

            </ul>
          </div>
        </div>
        <div :class="`shopListX${index} `" class="shopListX" v-for="(a,index) in 2" >
          <div class="shopListX-header">
            <span>新品首发</span>
            <span>查看全部</span>
          </div>
          <div :class="`food-lists-wrap${index}`" class="food-lists-wrap">
            <ul :class="`food-lists${index}`" class="food-lists">
              <li v-for="(item,index) in home.newItemList" :key="index">
                <div>
                  <img :src="item.primaryPicUrl">
                </div>
                <span>{{item.name}}</span>
                <span>{{item.simpleDesc}}</span>
                <span>￥{{item.retailPrice}}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="limit-buy" >
          <a href="javascript:;">
            <div>
              <div class="limit-buy-text">
                <span class="limit-buys">严选限时购</span>
                <span class="limit-time">
                  <span>03</span>
                  <span class="noneS">:</span>
                  <span>47</span>
                  <span class="noneS">:</span>
                  <span>04</span>
                </span>
                <span class="limit-back">下一场22：00开始</span>
              </div>
              <div class="limit-buy-img">
                <img src="http://yanxuan.nosdn.127.net/191be005f37aecfef781d567042954cd.png">
              </div>
            </div>
          </a>
        </div>
        <div class="go-look" >
          <a href="javascript:;" >
            <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg">
          </a>
        </div>
        <div class="main-topic">
          <div class="main-topic-header">
            <span>专题精选</span>
            <i class="iconfont icon-go"></i></div>
          <div class="main-topic-body">
            <ul  class="main-topics">
              <li  class="main-topic-imgs" v-for="(top,index) in home.topicList">
                <div class="topic-imgs-d">
                  <img :src="top.scenePicUrl">
                </div>
                <div class="topic-imgs-t">
                  <div>
                    <span>{{top.subtitle}}</span>
                    <span>{{top.title}}</span>
                  </div>
                  <span>{{top.priceInfo}}元起</span>
                </div>

              </li>
            </ul>
          </div>

        </div>
        <div class="homeThing" v-for="(list,index) in home.cateList" :key="index">
          <div class="homeThing-header">
            <span>{{list.name}}好物</span>
          </div>
          <div class="homeThing-foods">
            <ul class="Thing">
              <li v-for="(item, index) in list.itemList" :key="index" v-if="list.itemList">

                <div class="img-list">
                  <img :src="item.listPicUrl">
                </div>
                <div class="list-text">
                  <span>{{item.simpleDesc}}</span>
                  <span>{{item.name}}</span>
                  <span>￥{{item.couponPrice}}</span>
                </div>
              </li>

            </ul>
          </div>
        </div>
        <HomeFooter/>
      </div>
    </div>

  </section>
</template>

<script>
  import HomeFooter from '../../components/HomeFooter/HomeFooter.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        currentIndex:0
      }
    },
    components:{
      HomeFooter
    },
    mounted(){

      this.$store.dispatch('getHomeData',()=>{
        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
             loop: true,
             autoplay:true,
             pagination: {
               el: '.swiper-pagination',
             }
           });
            this._initScroll();
        })
      })
    },
    computed:{
      ...mapState(['home']),
      tages(){
        if(this.home.tagList){
          const tags = this.home.tagList.slice(0,4);
          return tags
        }
      },
      cate(){
        const catlist = this.home.newItemList
        return catlist
      }
    },
    methods:{
      _initScroll(){
        //加了判断BScroll是否存在的条件,就不能滑动
        this.bodywraper= new BScroll('.bodywraper',{
          click:true
        })
        //因为在遍历两次父容器后，只会给子元素添加一次样式，因为类名一样，better-scroll只识别一次
        for(let i=0;i<2;i++)   {
          this.foodListsWrap = new BScroll('.food-lists-wrap'+i,{
            click:true,
            scrollX:true,
            scrollY:false
          });
        }
        this.headerTab =  new BScroll('.header-tab',{
          click:true,
          scrollX:true,
          scrollY:false
        });
        new BScroll('.main-topic-body',{
          click:true,
          scrollX:true,
          scrollY:false
        })
      },
      handlerTo(index){
        this.currentIndex = index
      }
    },
    watch:{
      home(){
        this.$nextTick(() => {

          this._initScroll();
          this.bodywraper.refresh();
          this.foodListsWrap.refresh();
          this.headerTab.refresh();
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #homeContainer
    width  100%
    height 100%
    overflow hidden
    .headerWraper
      width 100%
      height (321/$rem)
      position fixed
      top 0
      left 0
      z-index 1
      background #fff
      .header-search
        width 100%
        height (140/$rem)
        display flex
        justify-content: space-around
        a
          width 24%
          height 60%
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png')
          background-size: cover;
          background-position: center;
          margin-top (32/$rem)
          transform scale(0.8)
        div
          width 66%
          background: #ededed
          height  (100/$rem)
          border-radius (10/$rem)
          line-height  (100/$rem)
          text-align center
          font-size (24/$rem)
          color #666
          margin-top (32/$rem)
          >input
            background-color transparent
      .header-tab
        width 100%
        overflow hidden
        ul
          margin-top (10/$rem)
          overflow hidden
          height (180/$rem)
          display: flex
          float left
          >li
            font-size (24/$rem)
            padding (20/$rem)
            width (166/$rem)
            height (120/$rem)
            text-align center
            line-height (120/$rem)
            &.on
              color red
              border-bottom   2px solid red


    >.bodywraper
      margin-bottom  (2000/$rem)
      width 100%
      height 100%
      margin-top (323/$rem)
      .body-content
        width 100%
        .msite_nav
          bottom-border-1px(#e4e4e4)
          height (800/$rem)
          background #fff
          .swiper-container
            width 100%
            height 100%
            .swiper-wrapper
              width 100%
              height 100%
              .swiper-slide
                display flex
                width 100%
                height 100%
                justify-content center
                align-items flex-start
                flex-wrap wrap
                .link_to_food
                  width 100%
                  height: 100%
                  .food_container
                    display block
                    width 100%
                    height 100%
                    text-align center
                    padding-bottom 10px
                    font-size 0
                    img
                      display inline-block
                      width 100%
                      height 100%
            .swiper-pagination
              >span.swiper-pagination-bullet-active
                background #02a774


        .g-grow
          display: flex

          li
            flex 1
            margin (24/$rem)
            font-size (24/$rem)
            .iconfont
              color red
        .shopList
          width 100%
          .shop-List-header
            width 100%
            height (220/$rem)
            line-height (220/$rem)
            text-align center
            span
              font-size (32/$rem)
              color #333

          .shop-List-foods
            width 100%
            height (952/$rem)
            display flex
            justify-content center
            .foods
              width 95%
              height (952/$rem)
              display flex
              flex-wrap wrap
              li
                position relative
                width 46%
                height (476/$rem)
                background #f4f4f4
                margin (30/$rem)
                .list-text
                  position absolute
                  top 0
                  left 0
                  width 100%
                  height 100%
                  display flex
                  flex-direction column
                  font-size 12px
                  span
                    margin-top 5px
                    padding 5px
                .img-list
                  width 100%
                  height 100%
                  position absolute
                  top 0
                  left 0
                  img
                    width 100%
                    height 100%
        .shopListX
          width 100%
          height (1520/$rem)
          margin-top (120/$rem)
          .shopListX-header
            background #eef5fc
            height (500/$rem)
            display flex
            flex-direction column
            align-items center
            justify-content center
            >span
              color #8BA0B6
              font-size (80/$rem)
              &:last-child
                font-size (24/$rem)
                width (400/$rem)
                height (100/$rem)
                text-align center
                line-height (100/$rem)
                background #d8e5f1
                margin-top (70/$rem)
          .food-lists-wrap
            width 100%
            overflow hidden
            .food-lists
              height (828/$rem)
              display flex
              float: left
              li
                width (560/$rem)
                height (828/$rem)
                display: flex
                flex-direction column
                padding  10px
                div
                  width (560/$rem)
                  height (560/$rem)
                  background #f4f4f4
                  img
                    width 100%
                    height 100%
                span
                  color #333
                  font-size (30/$rem)
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  &:last-child
                    color red
        .limit-buy
          height (760/$rem)
          width 100%
          background #fff
          margin (20/$rem)
          a
            width 100%
            height 100%
            &.pinkC
              background-image url('http://yanxuan.nosdn.127.net/a3ea2d1….jpg')
            div
              width 100%
              height 100%
              display flex
              justify-content space-around
              .limit-buy-text
                width 40%
                height 80%
                display flex
                flex-direction column
                color #333
                font-weight 700
                .limit-buys
                  font-size (100/$rem)
                  height (72/$rem)
                .limit-time
                  span
                    display inline-block
                    line-height (102/$rem)
                    text-align center
                    width (124/$rem)
                    height (102/$rem)
                    font-size (24/$rem)
                    color #fff
                    border-radius (10/$rem)
                    background #444
                    &.noneS
                      color #333;
                      font-size (24/$rem)
                      width: (20/$rem)
                      display: inline-block;
                      text-align: center;
                      background transparent
                .limit-back
                  font-size (26/$rem)


              .limit-buy-img
                width 40%
                height 100%
                img
                  width 100%
                  height 100%

        .go-look
          height (760/$rem)
          width 100%
          background #fff
          margin (20/$rem)
          a
            width 100%
            height 100%
            img
              width 100%
              height 100%
        .main-topic
          width 100%
          height (1126/$rem)
          .main-topic-header
            width 100%
            height (220/$rem)
            text-align center
            line-height  (220/$rem)
          .main-topic-body
            width 100%
            overflow: hidden
            .main-topics
              height (828/$rem)
              display flex
              float left
              .main-topic-imgs
                width (1150/$rem)
                height (828/$rem)
                display: flex
                flex-direction column
                padding  10px
                .topic-imgs-d
                  width (1150/$rem)
                  height (644/$rem)
                  background #f4f4f4
                  img
                    width 100%
                    height 100%
                .topic-imgs-t
                  width (1150/$rem)
                  height (200/$rem)
                  color #333
                  font-size (30/$rem)
                  display flex
                  justify-content space-between
                  >div
                    width 70%
                    display flex
                    flex-direction column
                    span
                      width 100%
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      overflow: hidden;
                      margin-top (20/$rem)
                      &:last-child
                        color #7F7F7F
                  >span
                    width 30%
                    color red




        .homeThing
          width 100%
          height (4636/$rem)
          margin-top (400/$rem)
          .homeThing-header
            width 100%
            height (220/$rem)
            text-align center
            line-height (220/$rem)
          .homeThing-foods
            width 100%
            height (952/$rem)
            display flex
            justify-content center
            .Thing
              width 95%
              height (952/$rem)
              display flex
              flex-wrap wrap
              li
                width 46%
                height (1174/$rem)
                margin (30/$rem)
                .img-list
                  width 100%
                  height (690/$rem)
                  background #f4f4f4
                  img
                    width 100%
                    height 100%
                .list-text
                  width 100%
                  height (460/$rem)
                  display flex
                  flex-direction column
                  font-size 12px
                  overflow hidden
                  background #fff
                  span
                    margin-top 5px
                    padding 5px
                    text-overflow ellipsis
                    white-space nowrap
                    overflow hidden
                    &:first-child
                      width 100%
                      height (100/$rem)
                      line-height (100/$rem)
                      background #F1ECE2
                      color #9F8A60
                    &:last-child
                      color red
</style>
