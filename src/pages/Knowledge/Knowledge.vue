<template>
  <section id="KnowledgeContainer">
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
    <div class="bodywraper">
      <div>
        <nav class="msite_nav border-1px">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in knowledge.banner" :key="index">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img :src="item.picUrl">
                  </div>
                  <div class="food_container_text">
                    <div class="content_text">
                      <span class="subTitle">{{item.subTitle}}</span>
                      <span class="desc">{{item.desc}}</span>
                      <span class="title">{{item.title}}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <div  class="food-lists-wrap">
          <ul  class="food-lists">
            <li v-for="(col,index) in knowledge.column" :key="index">
              <div class="artical_wrap">
                <img :src="col.picUrl">
                <div class="artical">{{col.articleCount}}</div>
              </div>
              <span>{{col.title}}</span>
            </li>
          </ul>
        </div>
        <Split/>
        <knowledgeListHeader  :title="titleArr[0]"/>
        <KnowledgeList :recommendOne="knowledge.recommendOne"/>
        <knowledgeFoodItem :recommend="knowledge.recommendThree"/>
        <knowledgeFoodItem :recommend="knowledge.recommendTwo"/>
        <knowledgeListHeader  :title="titleArr[1]"/>
        <div  class="day-topic">
          <ul  class="day-topic-ul">
            <li class="day-topic-li" v-for="(item,index) in knowledge.tenfifteen" v-if="knowledge.tenfifteen">
              <span class="topic">-今日话题-</span>
              <span class="title">{{item.title}}</span>
              <span class="desc">{{item.desc}}</span>
              <div class="avatar-person" v-if="item.participantAvatar">
                <img v-show="item.participantNum" :src="avatar" v-for="(avatar,index) in item.participantAvatar" >
                <span class="person-img" v-show="item.participantNum" >...</span>
                <span>{{item.participantNum}}人参与话题</span>
              </div>
            </li>
          </ul>
        </div>
        <knowledgeListHeader  :title="titleArr[2]"/>
        <KnowledgeList :recommendOne="knowledge.recommendOne"/>
        <knowledgeFoodItem :recommend="knowledge.zhenThree" />
        <knowledgeFoodItem :recommend="knowledge.recommendThree" />
        <knowledgeListHeader  :title="titleArr[3]"/>
        <div class="strict-look">
          <img src="https://yanxuan.nosdn.127.net/43202fd787c7fb9ed4ce09822cd519fc.jpg">
          <div class="img-avatar">
            <img :src="knowledge.yxLook.avatar" v-if="knowledge.yxLook">
            <span v-if="knowledge.yxLook">{{knowledge.yxLook.nickname}}</span>
          </div>
          <div class="yanxuanText" v-if="knowledge.findMore">{{knowledge.findMore[50].content}}</div>
        </div>
        <div class="throwLine">
          <span class="line"></span>
          <span class="throwLine-text">更多精彩</span>
        </div>
        <cateList :find="find" v-for="(find,index) in knowledge.findMore" :key="index"/>
      </div>
    </div>
  </section>
</template>

<script>
  import Split from '../../components/split/split.vue'
  import KnowledgeList from '../../components/KnowledgeList/KnowledgeList.vue'
  import knowledgeListHeader from '../../components/knowledgeListHeader/knowledgeListHeader.vue'
  import knowledgeFoodItem from '../../components/knowledgeFoodItem/knowledgeFoodItem.vue'
  import cateList from '../../components/cateList/cateList.vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        titleArr:['为你推荐','十点一刻','严选甄品','严选LOOK']
      }
    },
    computed:{
      ...mapState(['knowledge'])
    },
    components:{
      Split,
      KnowledgeList,
      knowledgeListHeader,
      knowledgeFoodItem,
      cateList
    },
    mounted(){
      this.$store.dispatch('getKnowledgeData',()=>{
        this.$nextTick(()=>{
           new Swiper('.swiper-container',{
            loop: true,
          });
            this._initScroll()


        })
      })
    },

    methods:{
      _initScroll(){
       this.bodywraper = new BScroll('.bodywraper',{
          click:true
        })
        this.foodListsWrap =new BScroll('.food-lists-wrap',{
          click:true,
          scrollX:true
        })
        this.dayWrap =new BScroll('.day-topic',{
          click:true,
          scrollX:true
        });

      },

      changeRoute(path){
        this.isLogin=false;
        this.$router.replace(path)
      }
    },
    watch:{
      knowledge(){
        this.$nextTick(() => {
          //确定数据列表有数据
          if(this.knowledge){
            this._initScroll();
            this.bodywraper.refresh();
            this.foodListsWrap.refresh()
            this.dayWrap.refresh()
          }

        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #KnowledgeContainer
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
      .msite_nav

        bottom-border-1px(#e4e4e4)
        height (800/$rem)
        background #fff
        .swiper-container
          width 100%
          height 100%
          margin-top (60/$rem)
          .swiper-wrapper
            width 96%
            height 100%
            border-radius (30/$rem)
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
                  position: absolute
                  top 0
                  left 0
                  img
                    display inline-block
                    width 80%
                    height 100%
                .food_container_text
                  position absolute
                  top 0
                  left 0
                  width 100%
                  height 100%
                  .content_text
                    width (932/$rem)
                    height (396/$rem)
                    position absolute
                    left 0
                    right 0
                    bottom 0
                    top 0
                    margin auto
                    background rgba(255,255,255,.9)
                    text-align center
                    span
                     display block
                     margin-top (34/$rem)
                     &.subTitle
                        font-size (24/$rem)
                        color #7f7f7f
                     &.desc
                        font-size (70/$rem)
                        color #333
                        font-weight 700
                     &.title
                        font-size (50/$rem)
                        color #333
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774


      .food-lists-wrap
        width 100%
        background #fff
        overflow hidden
        .food-lists
          height (560/$rem)
          display flex
          float left
          li
            width (400/$rem)
            height (500/$rem)
            display: flex
            flex-direction column
            padding  (30/$rem)
            .artical_wrap
              width (400/$rem)
              height (400/$rem)
              background #f4f4f4
              position relative
              img
                width 100%
                height 100%
                position absolute
                top 0
                left 0
              .artical
                width 100%
                height (64/$rem)
                position absolute
                top 0
                left 0
                text-align right
                color #fff
                background rgba(0,0,0,0.3)
                font-size (28/$rem)
            span
              color #333
              font-size (24/$rem)
              width 100%
              height (80/$rem)
              line-height (80/$rem)
              text-align center


      .day-topic
        width 100%
        margin-bottom (60/$rem)
        background-color  #fff
        overflow hidden
        .day-topic-ul
          height (822/$rem)
          display flex
          float left
          li
            height (822/$rem)
            width (1160/$rem)
            display: flex
            flex-direction column
            padding  (30/$rem)
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
            background-repeat no-repeat
            background-size 100% 100%
            margin 0 (40/$rem)
            .topic
              width 100%
              text-align center
              font-size (24/$rem)
              color #7f7f7f
              margin-top (80/$rem)
            .title
              width 100%
              font-size (80/$rem)
              font-weight 700
              margin-top (80/$rem)
              text-align center
            .desc
              width 100%
              text-align center
              font-size (24/$rem)
              margin-top (50/$rem)
            .avatar-person
              width 100%
              display: flex
              img
                width (96/$rem)
                height (96/$rem)
                border-radius (48/$rem)
              span
                color #7f7f7f
                font-size (24/$rem)
                margin-top (50/$rem)
                margin-left (50/$rem)
      .strict-look
        width 100%
        height (2300/$rem)
        background #fff
        img
          width 100%
          height (1800/$rem)
        .img-avatar
          padding-left (60/$rem)
          margin-top (60/$rem)
          img
            width (92/$rem)
            height (92/$rem)
            border-radius (46/$rem)
        .yanxuanText
            margin-left (60/$rem)
            margin-top (60/$rem)
            width 90%
            height (264/$rem)
            color #7f7f7f
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
      .throwLine
        width 90%
        height (100/$rem)
        position relative
        text-align center
        line-height (100/$rem)
        margin-top (100/$rem)
        .line
          width 100%
          height (10/$rem)
          position: absolute
          top (60/$rem)
          left 0
          z-index -1
          margin-left (80/$rem)
          background #eee
        .throwLine-text
          font-size (24/$rem)
          color #333


</style>
