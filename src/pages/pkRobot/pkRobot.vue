<template>
  <div class="pkRobot">
    <v-header></v-header>
    <div class="banner">
      <img src="../../assets/images/pkRobot/swiper2.jpg" alt="">
      <span>{{$t('pkRobot.text1')}}</span>
    </div>
    <div class="pkRobot-content">
      <div class="wrap">
        <div class="content-title">{{$t('pkRobot.text2')}}{{$t('pkRobot.text3')}}</div>
        <div class="content-dec common" v-show="openDec" style="color: #3653f5;">
          <p>{{$t('pkRobot.text16')}} </p>
        </div>
        <div class="content-one common">
          <p>{{$t('pkRobot.text17')}}</p>
        </div>
        <p class="content-two common">{{$t('pkRobot.text5')}}</p>
        <div class="content-three common">
          <p class="three-dec">{{$t('pkRobot.text6')}}</p>
          <ul>
            <li v-for="(item,index) in $t('pkRobot.items')" :key="index">
              <span class="icon"></span><span class="icon-dec">{{item.title}}</span>
            </li>
          </ul>
        </div>
        <div class="content-four common">
          <p>{{$t('pkRobot.text13')}}</p>
        </div>
        <div class="openTime">
          <div class="btn"  @click="openPkRobot()"  v-show="!isOpen">
            <span class="btn-dec">{{btnText}}</span>
          </div>
          <span class="error" v-show="errShow">{{errText}}</span>
          <div class="btn active" v-show="isOpen" @click="$router.push('/arbitrage')"><span class="btn-dec" >{{nowAttend}}</span></div>
          <div class="time" v-show="isOpen && openTime">{{$t('pkRobot.text18')}}: <span class="time-dec">{{openTime}}</span></div>
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="wrap">
        <div class="title">
          {{$t('home.text9')}}{{$t('home.text10')}}
          <i></i>
          <h6>Platform features</h6>
        </div>
        <div class="cont1">
          <ul>
            <li>
              <div class="li-cont">
                <div class="imgbox">
                  <img src="../../assets/images/home/icon1.png" alt="">
                </div>
                <p>{{$t('home.text11')}}</p>
              </div>
            </li>
            <li>
              <div class="li-cont">
                <div class="imgbox">
                  <img src="../../assets/images/home/icon2.png" alt="">
                </div>
                <p>{{$t('home.text12')}}</p>
              </div>

            </li>
            <li>
              <div class="li-cont">
                <div class="imgbox">
                  <img src="../../assets/images/home/icon3.png" alt="">
                </div>
                <p>{{$t('home.text13')}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div class="content3">
      <div class="wrap">
        <div class="title">
          PK{{$t('home.text14')}}
        </div>
        <div class="cont-text">
          <p>{{$t('home.text15')}}</p>
          <p></p>
        </div>
        <div class="btn" @click="$router.push('/case')">{{$t('home.text17')}}</div>
      </div>
    </div>
    <div class="content4">
      <div class="wrap">
        <div class="title">
          PK{{$t('home.text18')}}
        </div>
        <div class="cont-text">
          <p>{{$t('home.text19')}}</p>
          <p>{{$t('home.text20')}} </p>
        </div>
        <div class="btn" @click="$router.push('/pkRobot')">{{$t('home.text21')}}</div>
      </div>
    </div>
    <div class="content5 different3">
      <div class="wrap">
        <div class="title">
          {{$t('home.text33')}}
        </div>
        <div class="text">
          <p> {{$t('home.text34')}}</p>
          <h3> {{$t('home.text35')}}</h3>
          <div class="text-level">
            <p> {{$t('home.text36')}}</p>
            <p> {{$t('home.text37')}}</p>
            <p> {{$t('home.text38')}}</p>
          </div>
          <p> {{$t('home.text39')}}</p>
        </div>
        <div class="imgBox">
          <img src="../../assets/images/home/club.png" alt="">
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      openDec: true,
      isActive: false,
      btnText: this.$t('pkRobot.text14'),
      nowAttend: this.$t('pkRobot.text15'),
      isOpen: false, // 是否开通机器人1:true 2：false
      openTime: '',
      balance: '', // 账户余额
      loginFlag: false,
      errShow: false,
      errText: ''
    }
  },
  mounted () {
    this.getUserBalance()
  },
  components: {
    vHeader: resolve => require(['@/components/header'], resolve),
    vFooter: resolve => require(['@/components/footer'], resolve)
  },
  methods: {
    // 获取用户信息
    getUserBalance () {
      let url = `${this.$api}/user/balance`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.loginFlag = true
          if (res.data.data.isopenpk === '1') { // 是否开通机器人1:是 2：否
            this.isOpen = true
            this.openTime = res.data.data.opentime
            this.openDec = false
            this.isActive = true
          } else {
            this.balance = res.data.data.userAccount.SIE.balance
            this.openDec = true
            this.isActive = false
            this.isOpen = false
            this.openTime = ''
          }
        } else {
          this.loginFlag = false
        }
      }).catch(() => {
      })
    },
    //   开通PK机器人
    openPkRobot () {
      console.log('账户余额', this.balance)
      if (!this.loginFlag) {
        this.errShow = true
        this.errText = this.$t('pkRobot.text19')
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
        return
      }
      if (this.balance < 10000) {
        this.errShow = true
        this.errText = this.$t('pkRobot.text20')
      } else {
        let url = `${this.$api}/robot/buyRobot?type=3`
        this.$http.post(url).then((res) => {
          if (res.data.success) {
            this.getUserBalance()
          }
        }).catch(() => {
        })
      }
    },
    // 日期
    parseDate (time) {
      const date = new Date(time)
      const Y = date.getFullYear() + '/'
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/'
      const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
      return Y + M + D
    },
    // 时分
    parseTime (time) {
      const date = new Date(time)
      let X = date.getHours()
      let Y = date.getMinutes()
      if (X < 10) {
        X = '0' + X
      }
      if (Y < 10) {
        Y = '0' + Y
      }
      return X + ':' + Y
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
.error{
  color: red;
  font-size: 16px;
  display: inline-block;
  margin: 20px auto 0;
}
.banner{
  margin-top: 80px;
  min-height: 125px;
  position: relative;
  background: #fff;
  @media screen and (max-width: 1024px) {
    margin-top: 60px;
  }
  img{
    width: 100%;
    min-height: 125px;
    display: block;
  }
  span{
    font-weight: bold;
    font-size:40px;
    color: #fff;
    text-align: center;
    display: block;
    width: 100%;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 1280px){
      font-size: 25px;
      width: 100%;
    }
  }
}
  .pkRobot-content{
    width: 100%;
    height: auto;
    @media screen and (max-width: 767px){
      font-size: 16px;
    }
  }
  .content-dec{
    margin-top: 80px;
    margin-bottom: 60px;
    color: #e60000;
    font-size: 16px;
    @media screen and (max-width: 767px){
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 16px;
    }
    p{
      color: #e60000;
    }
  }
  .content-title {
    padding-top: 100px;
    font-weight: bold;
    color: #1a1a1a;
    font-size: 40px;
    text-align: center;
    @media screen and (max-width: 767px) {
      padding-top: 30px;
      font-size: 24px;
    }
  }
  .content-one{
    margin-top: 80px;
    margin-bottom: 30px;
    @media screen and (max-width: 767px){
      margin-top: 20px;
    }
  }
  .common{
    width: 1200px;
    font-size: 16px;
    color: #1a1a1a;
    line-height: 2;
    @media screen and (max-width: 1024px){
      width: 100%;
    }
    @media screen and (max-width: 767px){
      font-size: 16px;
      width: 100%;
    }
  }
  .content-two{
    line-height: 2;
    margin-bottom: 30px;
    @media screen and (max-width: 767px){
      font-size: 16px;
      margin: 20px auto;
      line-height: 1.5;
    }
  }
  .content-three
    .three-dec{
    margin-bottom: 30px;
    @media screen and (max-width: 767px){
      margin: 20px auto;
    }
  }
    ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li
    .icon{
    display: inline-block;
    width: 22px;
    height: 18px;
    @media screen and (max-width: 767px) {
      margin-right: 5px;
      display: inline-block;
      width: 16px;
    }
  }
  .icon-dec{
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
  .content-four{
    margin-top: 30px;
    @media screen and (max-width: 767px) {
      margin-top: 20px;
    }
  }
  .btn{
    background-color: rgba(255,255,255,1);
    cursor: pointer;
    width: 340px;
    height: 50px;
    display: flex;
    color: rgba(230,0,0,1);
    justify-content: center;
    align-items: center;
    border: 1px solid #e60000;
    margin: 120px auto 0;
    user-select: none;
    @media screen and (max-width: 767px) {
      margin-top: 20px;
      width: 120px;
      height: 30px;
    }
    &:active{
      background-color: rgb(230,0,0);
      opacity: 0.6;
      span{
        color: #fff;
      }
    }
    &:hover{
      background-color: rgb(230,0,0);
      span{
        color: #fff;
      }
    }
  }
  .active{
    /*background: -webkit-linear-gradient(left, #49a8f7 , #1c66e9); !* Safari 5.1 - 6.0 *!*/
    /*background: -o-linear-gradient(right, #49a8f7 , #1c66e9); !* Opera 11.1 - 12.0 *!*/
    /*background: -moz-linear-gradient(right, #49a8f7, #1c66e9); !* Firefox 3.6 - 15 *!*/
    /*background: linear-gradient(to right, #49a8f7 , #1c66e9); !* 标准的语法 *!*/
  }
  .btn-dec{
    font-size: 16px;
    color: #e60000;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
  .time{
    text-align: center;
    font-size: 18px;
    color: #c90010;
    margin-top: 30px;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }
  }
  .openTime{
    padding-bottom: 200px;
    text-align: center;
  }
.content2{
  border-top: 1px solid #e3e4e6;
  padding-top: 140px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
  }
  .title{
    text-align: center;
    i{
      display: block;
      margin: 10px auto;
      width: 50px;
      height: 1px;
      background-color: #000;
    }
    h6{
      display: block;
      font-size: 16px;
      color: #ebebeb;

    }
  }
  .cont1{
    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      li{
        background-image: url('../../assets/images/home/tedian_bg.png');
        background-repeat: no-repeat;
        background-size: cover;
        width: 33%;
        text-align: center;
        height: 390px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 767px) {
          width: 100%;
          height: 300px;
        }
        .li-cont{
          .imgbox{
            width: 144px;
            height: 144px;
            margin: 0 auto 50px;
          }
          p{
            color:#1a1a1a;
            font-size:20px;
            @media screen and (max-width: 1024px) {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
.content3{
  background-color: #f8f9fa;
  border-top: 1px solid #e3e4e6;
  padding: 140px 0;
  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
  .title{
    margin-bottom: 100px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 40px;
    }
  }
  .cont-text{
    margin-bottom: 20px;
    p{
      font-size:18px;
      color: #1a1a1a;
      line-height:2;
      @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 16px;
      }
    }
  }
  .btn{
    color: #e60000;
    text-align: center;
    width: 320px;
    height: 50px;
    border: 1px solid #e60000;
    line-height: 50px;
    cursor: pointer;
    user-select: none;
    margin: 100px auto 0;
    background-color: transparent;
    @media screen and (max-width: 1024px) {
      margin: 40px auto 0;
      width: 100%;
    }
    &:hover{
      background-color: #e60000;
      color: #fff;
    }
    &:active{
      opacity: 0.6
    }
  }
}
.content4{
  background-color: #fff;
  border-top: 1px solid #e3e4e6;
  padding-top: 140px;
  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
  .title{
    margin-bottom: 100px;
    @media screen and (max-width: 1024px) {
      margin-bottom: 40px;
    }
  }
  .cont-text{
    margin-bottom: 20px;
    p{
      font-size:18px;
      color: #1a1a1a;
      line-height:2;
      margin-bottom: 40px;
      @media screen and (max-width: 1024px) {
        width: 100%;
        font-size: 16px;
      }
    }
  }
  .btn{
    color: #e60000;
    text-align: center;
    width: 320px;
    padding: 11px 0;
    border: 1px solid #e60000;
    cursor: pointer;
    margin: 100px auto 140px;
    background-color: transparent;
    @media screen and (max-width: 1024px) {
      margin: 40px auto;
      width: 100%;
    }
    &:hover{
      background-color: #e60000;
      color: #fff;
    }
  }
}
.content5{
  padding-top: 80px;
  border-top: 1px solid #e3e4e6;
  color: #1a1a1a;
  &.different1{
    background-color: #f8f9fa;
    padding-bottom: 80px;
  }
  &.different2{
    margin-bottom: 140px;
  }
  &.different3{
    margin-bottom: 30px;
    background-color: #f8f9fa;
  }

  .title{
    margin-bottom: 40px;
  }
  .text{
    margin-bottom: 40px;
    &>p{
      line-height: 2;
      margin-bottom: 40px;
    }
    .text-level{
      padding-bottom: 40px;
      line-height: 2;
      p{
        line-height: 2;
      }
    }
    h3{
      margin-bottom: 10px;
    }
  }
  .imgBox{
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    img{
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }
}
</style>
