<template>
  <div class="header">
    <div class="wrap">
      <div class="head-cont">
        <div class="head-left">
          <h1>
            <router-link :to="{path:'/home'}"></router-link>
<!--            <span>{{$t('header.text10')}}</span>-->
          </h1>
          <div class="nav">
            <ul>
              <router-link tag="li" :to="{path:'/home'}">PK</router-link>
              <router-link tag="li" :to="{path:'/boGe'}">{{$t('bogeFund.text1')}}</router-link>
              <router-link v-show="loginFlag" tag="li" :to="{path:'/arbitrage'}" :class="{'isactive': activeflag}">{{$t('header.text4')}}</router-link>
              <router-link tag="li" :to="{path:'/pkRobot'}">{{$t('home.text26')}}</router-link>
              <router-link tag="li" :to="{path:'/notice'}">{{$t('header.text5')}}</router-link>
            </ul>
          </div>
        </div>
        <div class="head-right">
          <div class="user" v-if="loginFlag">
            <i :style="{backgroundImage:'url('+ imgUrl +')'}" v-if="!user.imgUrl"></i>
            <i :style="{backgroundImage:'url('+ user.imgUrl +')'}" v-if="user.imgUrl"></i>
            <span>{{user.userName}}</span>
            <b></b>
            <ul>
              <li @click="$router.push('/account/achievement')">{{$t('header.text1')}}</li>
              <li @click="$router.push('/pkRobot')">{{$t('header.text2')}}</li>
              <li @click="logout()">{{$t('header.text3')}}</li>
            </ul>
          </div>
          <div @click="$router.push('/login')" v-if="!loginFlag" style="cursor:pointer">{{$t('home.text25')}}</div>
          <i></i>
          <div class="lang">
            <div class="curLang">
              <span>{{curLang}}</span>
              <b></b>
            </div>
            <ul>
              <li v-for="(item,index) in langList" :key="index" @click="checkLanguage(item)">{{item.lang}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="head-mobile">
      <h1 @click="$router.push('/home')"></h1>
      <i :class="{'close': closeNav}" @click="closeNav =! closeNav"></i>
      <ul :class="{'close': closeNav}">
        <router-link tag="li" :to="{path:'/boGe'}">{{$t('bogeFund.text1')}}</router-link>
        <router-link v-show="loginFlag" tag="li" :to="{path:'/arbitrage'}" @click="closeNav =! closeNav"><span
          @click="closeNav =! closeNav;">{{$t('home.text22')}}</span></router-link>
        <router-link tag="li" :to="{path:'/pkRobot'}" @click="closeNav =! closeNav"><span
          @click="closeNav =! closeNav;">{{$t('home.text26')}}</span></router-link>
        <router-link v-show="loginFlag" tag="li" :to="{path:'/account/achievement'}"><span @click="closeNav =! closeNav;">{{$t('home.text24')}}</span>
        </router-link>
        <router-link v-show="!loginFlag" tag="li" :to="{path:'/login'}"><span @click="closeNav =! closeNav;">{{$t('login.text5')}}</span>
        </router-link>
        <li @click="toggleLang"><span @click="closeNav =! closeNav;">{{$t('arbitrage.text5')}}</span></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {i18n} from '../i18n/config'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        activeflag: false,
        closeNav: false,
        curLang: '',
        lanActive: 1,
        langList: [
          {
            lang: '简体中文',
            tag: 'CN'
          },
          {
            lang: 'English',
            tag: 'EN'
          }
        ],
        balance: {
          imgUrl: null
        },
        imgUrl: require('../assets/images/header/user.svg')
      }
    },
    mounted() {
      this.getUserBalance()
      if (this.$route.path === '/arbitrageDetail') {
        this.activeflag = true
      }
      let Qlang = localStorage.getItem('Qlang')
      for (let i in this.langList) {
        if (Qlang === this.langList[i].tag) {
          this.curLang = this.langList[i].lang
        }
      }
    },
    computed: {
      ...mapGetters([
        'loginFlag',
        'user'
      ])
    },
    methods: {
      ...mapActions([
        'getUserBalance'
      ]),
      // 退出登陆
      logout() {
        let url = `${this.$api}/user/logout`
        this.$http.get(url).then((res) => {
          // console.log('成功退出登录', res)
          if (res.data.success) {
            this.$router.push('/login')
          }
        }).catch((err) => {
          console.log('退出登录失败', err)
        })
      },
      checkLanguage(item) {
        this.curLang = item.lang
        this.lanActive = 1
        localStorage.setItem('Qlang', item.tag)
        i18n.locale = item.tag
        location.reload()
      },
      toggleLang() {
        // console.log(this.$route.query.lang)
        if (this.$route.query.lang) {
          this.$router.push({path: '/changeLanguage', query: {lang: this.$route.query.lang, path: 'header'}})
        } else {
          this.$router.push({path: '/changeLanguage', query: {path: 'header'}})
        }
      }
    }
  }
</script>

<style lang="less" type="text/less" scoped>
  .header {
    border-bottom: 1px solid #999;
    height: 80px;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    @media screen and (max-width: 1024px) {
      background-color: #fff;
      height: 60px;
    }
    .wrap {
      height: 100%;
      @media screen and (max-width: 1024px) {
        display: none;
      }
      @media screen and (max-width: 1200px) {
        width: 100%;
      }
    }
    .head-cont {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .head-left {
        height: 100%;
        display: flex;
        align-items: center;
        h1 {
          height: 30px;
          background-image: url(../assets/images/header/logo.svg);
          background-repeat: no-repeat;
          display: flex;
          cursor: pointer;
          align-items: flex-end;
          a {
            width: 100px;
            height: 100%;
            display: block;
            margin-right: 20px;
          }
          span {
            font-size: 14px;
            color: #e60000;
            line-height: 1;
          }
        }
        ul {
          margin-left: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
          height: 100%;
          li {
            margin: 0 15px;
            font-size: 15px;
            color: #1a1a1a;
            padding-bottom: 5px;
            cursor: pointer;
            &:hover {
              color: #e60000;
            }
            &.router-link-active {
              color: #e60000;
              border-bottom: 2px solid #e60000;
            }
            &.isactive {
              color: #e60000;
              border-bottom: 2px solid #e60000;
            }
          }
        }
      }
      .head-right {
        display: flex;
        height: 100%;
        align-items: center;
        font-size: 16px;
        color: #1a1a1a;
        .user {
          display: block;
          color: #1a1a1a;
          position: relative;
          height: 80px;
          line-height: 80px;
          cursor: pointer;
          &:hover {
            ul {
              height: 150px;
            }
          }
          ul {
            position: absolute;
            right: 0px;
            top: 80px;
            height: 0;
            overflow: hidden;
            transition: all .5s;
            text-align: center;
            box-shadow: 1px 1px 10px #e5e5e5;
            li {
              height: 50px;
              line-height: 60px;
              background-color: rgba(255, 255, 255, 0.5);
              border-bottom: 1px solid #e5e5f5;
              width: 130px;
              color: #1a1a1a;
              &:hover {
                color: #e60000;
                border-bottom: 1px solid #999;
                background-color: rgba(255, 255, 255, 1);
              }
            }
          }
          i {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: cover;
            vertical-align: middle;
            border: 1px solid #333;
            background-color: #fff;
            background-position: center;
          }
          span {
            font-size: 16px;
            display: inline-block;
            vertical-align: middle;
          }
          b {
            display: inline-block;
            vertical-align: middle;
            width: 10px;
            height: 6px;
            background-image: url("../assets/images/home/arrows.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          }
        }
        & > span {
          display: inline-block;
          cursor: pointer;
          padding: 20px 0;
          border-bottom: 2px solid #011f3c;
          &:hover {
            border-bottom: 2px solid #3653f5;
          }
          &.router-link-active {
            border-bottom: 2px solid #3653f5;
            color: #3653f5;
          }
        }
        i {
          display: inline-block;
          width: 30px;
          height: 30px;
          background-image: url('../assets/images/header/ball.svg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          margin: 0 8px 0 60px;
        }
        .lang {
          display: inline-block;
          cursor: pointer;
          position: relative;
          &:hover {
            ul {
              height: 100px;
            }
          }
          .curLang {
            height: 80px;
            line-height: 80px;
            width: 100px;
            text-align: center;
            span {
              font-size: 16px;
              color: #1a1a1a;
            }
            b {
              display: inline-block;
              width: 10px;
              height: 6px;
              background-image: url("../assets/images/home/arrows.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
          }
          ul {
            position: absolute;
            top: 80px;
            right: 0;
            height: 0;
            overflow: hidden;
            transition: all .5s;
            text-align: center;
            box-shadow: 1px 1px 10px #e5e5e5;
            li {
              height: 50px;
              line-height: 60px;
              background-color: rgb(255, 255, 255);
              border-bottom: 1px solid #e5e5f5;
              width: 130px;
              color: #1a1a1a;
              &:hover {
                border-bottom: 1px solid #999;
                color: #e60000;
                background-color: rgba(255, 255, 255, 1);
              }
            }
          }
        }
      }
    }
    .head-mobile {
      height: 100%;
      /*display: flex;*/
      justify-content: space-between;
      align-items: center;
      position: relative;
      display: none;
      padding: 0 20px;
      @media screen and (max-width: 1024px) {
        display: flex;
      }
      h1 {
        background-image: url("../assets/images/header/logo.svg");
        height: 20px;
        width: 60px;
        background-repeat: no-repeat;
      }
      i {
        display: block;
        width: 30px;
        height: 25px;
        background-image: url("../assets/images/header/menu.svg");
        background-repeat: no-repeat;
        &.close {
          background-image: url("../assets/images/header/close.svg");
        }
      }
      ul {
        width: 100%;
        position: absolute;
        top: 60px;
        left: 0;
        color: #fff;
        height: 0;
        overflow: hidden;
        transition: all 0.5s;
        z-index: 999;
        &.close {
          height: 259px;
        }
        li {
          height: 50px;
          line-height: 50px;
          background-color: rgba(0, 0, 0, 0.8);
          padding-left: 20px;
          border-bottom: 1px solid #e5e5e5;
          span {
            height: 100%;
            width: 100%;
            display: inline-block;
          }
          &.router-link-active {
            border-bottom: 1px solid #999;
            color: #e60000;
          }
        }
      }
    }

  }
</style>
