<template>
    <div>
      <v-header></v-header>
      <div class="login-wrap">
        <div class="main">
          <!--
          <div class="main-l">
            <div class="arbitrage" :class="{mouseove: activeIndex === index}" @mouseover="hoverHand(index)" v-for="(item,index) in arbitrageData" :key="index" @click="$router.push('/arbitrage')">
            <div class="title">{{item.title}}</div>
            <div class="hr"></div>
            <div class="deadline">{{$t('home.text5')}}<span class="date">{{changeTime(item.endTime)}}</span></div>
            <div class="targetAmout">{{$t('home.text6')}}</div>
            <div class="targetAmout-num">{{item.maxTotalAmount}} {{item.currency}}</div>
            <div class="immediate">{{$t('home.text4')}}<span class="more" @click="$router.push({path: '/arbitrageDetail', query:{id:item.id}})" v-show="moreShow, activeIndex === index"></span></div>
          </div>
            <div class="more">
              <span class="text">{{$t('home.text7')}}</span>
            </div>
          </div>
          -->
          <div class="login-box">
            <div class="title">{{$t('login.text1')}}</div>
            <div class="title-hint">{{$t('login.text2')}}</div>
            <div class="from">
              <div class="user-hint">{{$t('login.text3')}}</div>
              <div class="user-box">
                <input class="user" v-model="usernameModel" type="text" ref="user" @blur="userBlur" @focus="userFocus" autocomplete="off" name="user" value="">
                <span class="focus" :class="{active: userActive}"></span>
              </div>
              <!--<div class="hint">{{userErrors.errorText}}</div>-->
              <div class="password-hint">{{$t('login.text4')}}</div>
              <div class="password-box">
                <input class="password" type="text" ref="pasword" v-model="passwordModel"  autocomplete="off" @blur="passwordBlur" @focus="passwordFocus" value=""/>
                <span class="focus" :class="{active: passwordActive}"></span>
              </div>
              <!--<div class="hint">{{passwordErrors.errorText}}</div>-->
              <!---->
              <div class="submit button-wayra" @click="handleLogin()">{{$t('login.text5')}}</div>
              <div class="hint">{{errorLogin}}</div>
            </div>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
/* eslint-disable */
import axios from 'axios'
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: '',
      errorLogin: '',
      userActive: false,
      passwordActive: false,
      activeIndex: -1,
      moreShow: false,
      userError: this.$t('login.text6'),
      passwordError: this.$t('login.text7'),
      systemError: this.$t('login.text8'),
      nullError: this.$t('login.text9'),
      arbitrageData: []
    }
  },
  created () {
    /*this.getryzen()*/
    if (this.$route.path === '/login') {
      document.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.handleLogin()
        }
      })
    }
  },
  computed: {
    // 用户名提示验证
    userErrors () {
      let errorText, status
      let uPattern = /^[a-zA-Z0-9_-]{4,16}$/
      if (!uPattern.test(this.usernameModel)) {
        status = false
        errorText = this.userError
      } else {
        status = true
        errorText = ''
      }
      if (this.usernameModel === '') { // 账号提示当打开弹窗默认errorText不出现提示或者value为空时,输入第一次显示
        errorText = ''
      }
      return {
        status,
        errorText
      }
    },
    // 密码提示验证
    passwordErrors () {
      let errorText, status
      //  /^[0-9A-Za-z]{8,14}$/
      let regExp = /^[0-9A-Za-z]{8,14}$/
      if (!regExp.test(this.passwordModel)) {
        status = false
        errorText = this.passwordError
      } else {
        status = true
        errorText = ''
      }
      if (this.passwordModel === '') {
        errorText = ''
      }
      return {
        status,
        errorText
      }
    }
  },
  components: {
    vHeader: resolve => require(['@/components/header'], resolve),
    vFooter: resolve => require(['@/components/footer'], resolve)
  },
  methods: {
    // time
    changeTime (time) {
      return this.$changeDate(time, ':', 1)
    },
    // pc滑过
    hoverHand (index) {
      setTimeout(() => {
        this.activeIndex = index
        this.mouseove = true
      }, 400)
    },
    // 取焦和失焦显示
    userFocus () {
      this.userActive = true
      this.errorLogin = ''
    },
    userBlur () {
      this.userActive = false
    },
    passwordFocus () {
      this.passwordActive = true
      this.errorLogin = ''
      this.$refs.pasword.type = 'password'
    },
    passwordBlur () {
      this.passwordActive = false
    },
    // 登录请求:
    handleLogin () {
      if (this.usernameModel !== '' && this.passwordModel !== '') {
        axios.post(`${this.$api}/user/userlogin?username=${this.usernameModel}&password=${this.passwordModel}`).then((res) => {
          this.usernameModel = ''
          this.passwordModel = ''
          if (res.data.success === false) {
            this.errorLogin = res.data.msg
          } else if (res.data.success === true) {
            this.$router.push('/home')
          } else {
            this.errorLogin = this.systemError
          }
        }).catch((error) => {
          console.log(error)
        })
      } else {
        this.errorLogin = this.nullError
      }
    },
//    valadata () {
//      let regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,14}$/
//      if (!regExp.test(this.passwordModel)) {
//        return false
//      }
//      let uPattern = /^[a-zA-Z0-9_-]{4,16}$/
//      if (!uPattern.test(this.usernameModel)) {
//        return false
//      }
//      return true
//    },
    // 热门套利
//    getryzen () {
//      let Url = `${this.$api}/arbitrage/hot/`
//      axios.post(Url).then((res) => {
//        if (res.data.status === 'success' && res.data.success === true) {
//          this.arbitrageData = res.data.data
//        }
//      }).catch((error) => {
//        console.log(error)
//      })
//    }
  }
}
</script>

<style lang="less" scoped>
.login-wrap{
  width: 100%;
  min-height: calc(100vh - 139px);
  margin-top: 60px;
  background: url("../../assets/images/login/login-bg.svg");
  background-size: 500px 500px;
  background-color: #f8f9fa;
  background-repeat: repeat;
  display: flex;
  align-items: center;
  @media screen and (max-height: 760px) {
    overflow: auto;
  }
  @media screen and (max-height: 550px) {
    display: block;
  }
  .main{
    width: 420px;
    height: 600px;
    margin: 0 auto;
    background-color: #fff;
    color: #fff;
    @media screen and (max-width: 1040px) {
      width: 60%;
      height: auto;
      padding: 20px 0;
      display: block;
    }
    @media screen and (max-height: 760px) {
      height: auto;
      padding: 16px 0;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
    }
    /*.main-l{
      width: 580px;
      height: 100%;
      @media screen and (max-width: 1040px) {
        display: none;
      }
      .arbitrage{
        width: 100%;
        height: 262px;
        background-color: rgba(1,31,60, .7);
        margin-bottom: 13px;
        color: #fff;
        @media screen and (max-width: 1040px) {
          height: auto;
          padding: 20px 0;
        }
        &.mouseove{
          color: #3653f5 !important;
        }
        .title{
          height: 50px;
          line-height: 50px;
          font-size: 20px;
          padding-left: 40px;
          @media screen and (max-width: 1040px) {
            height: auto;
          }
        }
        .hr{
          width: 100%;
          height: 1px;
          background-color: #001926;
        }
        .deadline{
          font-size: 16px;
          padding-left: 40px;
          padding-top: 16px;
          .date{
            padding-left: 60px;
          }
        }
        .targetAmout{
          font-size: 16px;
          padding: 22px 0 5px 40px;
        }
        .targetAmout-num{
          font-size: 34px;
          padding-bottom: 30px;
          padding-left: 40px;
        }
        .immediate{
          height: 16px;
          line-height: 16px;
          font-size: 16px;
          padding-left: 40px;
          .more{
            display: inline-block;
            width: 26px;
            height: 14px;
            margin-left: 10px;
            background: url("../../assets/images/login/row_blue.svg") no-repeat;
            cursor: pointer;
          }
        }
      }
      .more{
        height: 50px;
        line-height: 50px;
        width: 100%;
        padding: 0 40px;
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        background-color: rgba(1, 31, 60, 0.7);
        .text{
          font-size: 24px;
        }
        .more-btn{
          display: inline;
          width: 20px;
          height: 20px;
          margin-top: 15px;
          background: url("../../assets/images/login/add_white.svg") no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
        }
      }
    }*/
    .login-box{
      width: 420px;
      height: auto;
      padding-left: 40px;
      text-align: left;
      @media screen and (max-width: 1024px) {
        width: 100%;
        padding-left: 20px;
      }
      .title{
        font-size: 34px;
        color: #1a1a1a;
        font-weight: bold;
        padding: 40px 0 20px;
        @media screen and (max-width: 1024px) {
          padding: 0 0 20px;
          font-size: 26px;
        }
        @media screen and (max-width: 768px) {
          padding: 0 0 14px;
          font-size: 22px;
        }
      }
      .title-hint{
        font-size: 18px;
        line-height: 1.2;
        padding-bottom: 60px;
        color: #232044;
        @media screen and (max-width: 1024px){
          padding-bottom: 20px;
          font-size: 16px;
        }
        @media screen and (max-height: 760px){
          padding-bottom: 40px;
          font-size: 14px;
        }
      }
      .from{
        width: 100%;
        height: auto;
        .user-hint{
          font-size: 16px;
          font-weight: bold;
          color: #232044;
          padding-bottom: 10px;
          @media screen and (max-width: 1024px){
            font-size: 14px;
          }
          @media screen and (max-width: 768px) {
            padding-bottom: 0;
          }
        }
        .user-box{
          width: 340px;
          height: 50px;
          line-height: 50px;
          color: #666;
          background-color: #fff;
          border-bottom: 1px solid #666;
          position: relative;
          @media screen and (max-width: 1024px){
            font-size: 14px;
            width: 90%;
          }
          @media screen and (max-height: 760px) {
            height: 40px;
          }
          input:focus{
            outline:none;
          }
          .user{
            display: block;
            width: 100%;
            height: 100%;
            color: #232044;
            font-size: 16px;
            box-shadow: none;
            background:none;
            outline:none;
            border:0;
            @media screen and (max-width: 768px) {
              font-size: 14px;
            }
            &::placeholder{
              color: #232044;
            }
          }
          .focus{
            position: absolute;
            bottom: -1px;
            left: 0;
            z-index: 100;
            width: 0;
            height: 1px;
            display: block;
            transition: all 1s ease-in-out;
            background-color: #232044;
            &.active{
              width: 100%;
            }
          }
        }
        .password-hint{
          padding-top: 60px;
          padding-bottom: 10px;
          font-weight: bold;
          font-size: 16px;
          color: #232044;
          @media screen and (max-width: 1024px){
            font-size: 14px;
            padding: 20px 0 10px;
          }
          @media screen and (max-height: 768px){
            padding-top: 16px;
            padding-bottom: 0;
          }
        }
        .password-box{
          width: 340px;
          height: 50px;
          line-height: 50px;
          color: #666;
          background-color: #fff;
          border-bottom: 1px solid #666;
          position: relative;
          @media screen and (max-width: 1024px){
            width: 90%;
          }
          @media screen and (max-height: 760px){
            height: 40px;
          }
          input:focus{
            outline:none;
          }
          .password{
            display: block;
            width: 100%;
            height: 100%;
            color: #666;
            font-size: 16px;
            box-shadow: none;
            background:none;
            outline:none;
            border:0;
            &::placeholder{
              color: #232044;
            }
          }
          .focus{
            position: absolute;
            bottom: -1px;
            left: 0;
            z-index: 100;
            width: 0;
            height: 1px;
            transition: all 1s ease-in-out;
            display: block;
            background-color: #232044;
            &.active{
              width: 100%;
            }
          }
        }
        .submit{
          position: relative;
          z-index: 1;
          max-width: 340px;
          height: 50px;
          line-height: 50px;
          border: 1px solid red;
          margin-top: 60px;
          text-align: center;
          color: red;
          font-size: 18px;
          cursor: pointer;
          letter-spacing: 4px;
          text-transform: uppercase;
          @media screen and (max-width: 1024px){
            max-width: 90%;
            height: 40px;
            line-height: 40px;
            margin-top: 30px;
            font-size: 16px;
          }
          @media screen and (max-width: 768px){
            margin-top: 30px;
          }
        }
        .button-wayra{
          overflow: hidden;
          width: 340px;
          transition: border-color .3s,color .3s;
          transition-timing-function: cubic-bezier(.2,1,.3,1);
          @media screen and (max-width: 1024px){
            width: 90%;
          }
          &:after{
            content: '';
            position: absolute;
            top: 40px;
            left: 0;
            width: 50%;
            height: 100%;
            background: rgba(230,0,0,1);
            z-index: -1;
            transform: rotate3d(0,0,1,-45deg) translate3d(0,-3em,0);
            transform-origin: 0 100%;
            transition: transform .2s,opacity .2s,background-color .2s;
          }
          &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 150%;
            height: 100%;
            background: rgba(230,0,0,1);
            z-index: -1;
            transform: rotate3d(0,0,1,-45deg) translate3d(0,-3em,0);
            transform-origin: 0 100%;
            transition: transform .2s,opacity .2s,background-color .2s;
          }
          &:hover{
            color: #fff;
            &:before{
              background-color: rgba(230,0,0,1);
              transform: rotate3d(0,0,1,0deg);
              transition-timing-function: cubic-bezier(.2,1,.3,1);
            }
          }
          &:active{
            &:before{
              background-color: rgba(230,0,0,0.6);
              transform: rotate3d(0,0,1,0deg);
              transition-timing-function: cubic-bezier(.2,1,.3,1);
            }
          }
        }
        .hint{
          color: #e60000;
          font-size: 14px;
          line-height: 1.0;
          padding-top: 10px;
          display: block;
          @media screen and (max-width: 1024px){
            width: 90%;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
