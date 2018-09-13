<template>
  <div id="login">
    <div class="login-body">
      <div class="img-Header">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" >
      </div>
      <div class="phoneLoginType " v-show="getType">
        <input type="text" placeholder="请输入手机号" class="inputPhone" v-model="phone">
        <div class="verify">
          <input type="text" placeholder="请输入短信验证码" v-model="code">
          <span >获取验证码</span>
        </div>
        <div class="err-login">
          <span>遇到问题</span>
          <a>使用密码验证登陆</a>
        </div>
          <button  @click="login" class="phoneLogin">
           登陆
          </button>
          <button class="otherLogin">其他方式登陆</button>
        <div class="register">
          注册账号
          <i class="iconfont icon-go"></i>
        </div>
      </div>
      <div class="emailLoginType" v-show="!getType">
        <input type="text" placeholder="邮箱账号" class="inputPhone" v-model="email">
        <div class="verify">
          <input type="text" placeholder="密码" v-model="password">
        </div>
        <div class="err-login">
          <span>注册账号</span>
          <a>密码</a>
        </div>
          <button class="phoneLogin" @click="login">
           登陆
          </button>
          <button class="otherLogin">其他方式登陆</button>

      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  import {Toast, MessageBox} from 'mint-ui'
  export default {
    data() {
      return {
        isShow:true,
        phone:'',
        code:'',
        email:'',
        password:''
      }
    },
    mounted(){

    },
    props:['loginType'],
    computed:{
      getType(){
        if(this.loginType==='phone'){
          this.isShow = true
        }else{
          this.isShow = false
        }
        return this.isShow
      },
      isRightPhone(){
        return  /^1\d{10}$/.test(this.phone)
      }
      },
    methods:{

      alertMsg(msg){
        return MessageBox.alert(msg)
      },
      login(){
        const {phone,code,email,password} = this;
        console.log(phone,code,email,password)
        if(this.loginType==='email'){
          if(!/^[a-zA-Z0-9]+@[a-z]+\.[a-z]{3}$/.test(email)){
            this.alertMsg('请输入邮箱')
            return
          }else if(!/^[a-zA-z0-9_]{10}$/.test(password)){
            this.alertMsg('请输入密码')
            return
          }
        }else{
          console.log("22");
          console.log(this.isRightPhone)
          if(!this.isRightPhone){
            console.log("11")
            this.alertMsg('请输入正确的手机号')
            return
          }else if(!/^\d{6}$/.test(this.code)){
            console.log("333")
            this.alertMsg('请输入验证码')
            return
          }
        }
      }

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    #login
      width 100%
      height 100%
      background-color #fff
      display flex
      flex-direction column
      align-items center
      .login-body
        width 80%
        .img-Header
          width 100%
          height (820/$rem)
          text-align center
          line-height (820/$rem)
          margin-top (100/$rem)
          img
            width (500/$rem)
            height 20%
        .phoneLoginType,.emailLoginType
          width 90%
          margin-left 5%
          position absolute
          top (820/$rem)
          left 0
          &.on
            display block
          >.inputPhone
            width 100%
            font-size (24/$rem)
            padding (50/$rem) 0
            border-bottom 1px solid #7f7f7f

          .verify
            font-size (24/$rem)
            padding (60/$rem) 0
            border-bottom 1px solid #7f7f7f
            >input
              margin-top (60/$rem)
              height (92/$rem)
              width 60%
            >span
              width 28%
              height (80/$rem)
              line-height (80/$rem)
              display inline-block
              padding (20/$rem)
              text-align center
              border 1px solid #7f7f7f
              color #333
              border-radius (30/$rem)
              margin-left (60/$rem)

          .err-login
            color #7f7f7f
            font-size (24/$rem)
            margin-top (140/$rem)
            display flex
            justify-content space-between
          .phoneLogin,.otherLogin
            width 100%
            height (180/$rem)
            border-radius (14/$rem)
            margin-top (80/$rem)
            background-color #b4282d
            text-align center
            line-height (180/$rem)
            span
              color #fff
          .otherLogin
            background-color transparent
            border 1px solid #b4282d
            color #000
            span
              color #000
          .register
            width 100%
            height (60/$rem)
            line-height (60/$rem)
            color #333
            font-size (24/$rem)
            text-align center
            margin-top (80/$rem)
</style>
