<template>
  <div class="achievement">
    <div class="achievement-web">
      <v-header></v-header>
      <div class="ord-web">
        <div class="wrap-web">
          <div class="flex-box">
            <!--<div class="left-content">-->
              <!--<div class="account">-->
                <!--<div class="account-up">-->
                  <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span-->
                  <!--class="account-title common-title">{{$t('achievement.text1')}}</span>-->
                <!--</div>-->
                <!--<div class="go-next active">-->
                  <!--<router-link to="/achievement">{{$t('achievement.text2')}}</router-link>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
                <!--<div class="go-next">-->
                  <!--<router-link to="/billingRecord" class="choose" >{{$t('achievement.text67')}}</router-link>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="profit-order">-->
                <!--<div class="account-up">-->
                  <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-2.svg"/><span-->
                  <!--class="account-title common-title">{{$t('achievement.text3')}}</span>-->
                <!--</div>-->
                <!--<div class="go-next ongoing isNow" @click="$router.push({path: '/orderProcess', query: {order: 1}})">-->
                  <!--<div class="choose" >-->
                    <!--{{$t('achievement.text4')}}-->
                  <!--</div>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
                <!--<div class="go-next completed isCompleted" @click="$router.push({path: '/orderProcess', query: {order: 2}})">-->
                  <!--<div class="choose" >-->
                    <!--{{$t('achievement.text5')}}-->
                  <!--</div>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="profit">-->
                <!--<div class="account-up">-->
                  <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span-->
                  <!--class="account-title common-title">{{$t('achievement.text13')}}</span>-->
                <!--</div>-->
                <!--<div class="go-next revenue-record" @click="$router.push('/profitLog')">-->
                  <!--<div class="choose" >{{$t('achievement.text6')}}</div>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
                <!--<div class="go-next accumulativeper" @click="$router.push('/accumulativePerformance')">-->
                  <!--<div class="choose" >{{$t('achievement.text7')}}</div>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
                <!--<div class="go-next accumulativeper" @click="$router.push({path: '/fundPerformance'})">-->
                  <!--<router-link class="choose" to="/fundPerformance">{{$t('achievement.text01')}}</router-link>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="bogeFund">-->
                <!--<div class="account-up">-->
                  <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span-->
                  <!--class="account-title common-title">{{$t('bogeFund.text1')}}</span>-->
                <!--</div>-->
                <!--<div class="go-next bogeFund-record" @click="$router.push('/bogeFund')">-->
                  <!--<div class="choose">{{$t('bogeFund.text2')}}</div>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
                <!--<div class="go-next" @click="$router.push('/myInformation')">-->
                  <!--<router-link class="choose" to="/myInformation">{{$t('myInformation.text1')}}</router-link>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="right-content">
              <div class="right-title"><span>{{$t('achievement.text2')}}</span></div>
              <div class="account-info">
                <div class="img-box">
                  <img src="../../../assets/images/header/user.svg">
                </div>
                <div class="info-box">
                  <div class="info-one">
                    {{user.userName}}
                  </div>
                  <div class="info-two">
                    {{$t('achievement.text71')}}：{{sieBalance | formattingMoney}} {{betpaycurrency}}
                  </div>
                  <div class="info-three">
                    {{$t('achievement.text71')}}：{{USDBalance | formattingMoney}} {{currencyUSD}}
                  </div>
                </div>
              </div>
              <div class="add-content">
                <div class="star-group">
                  <div class="title">{{$t('star.text7')}}:</div><span>{{this.score}} {{$t('achievement.text72')}}</span>
                  <!--<star :size="48" :score="Number(this.score)"></star>-->
                </div>
                <div class="money" style="color: #939399; font-size: 15px">
                  <div class="money-text">{{$t('star.text8')}}</div>
                  <div class="money-value">100- {{choose(Number(this.score)) | formattingMoney}} {{betpaycurrency}}</div>
                </div>
                <div class="steps">
                  <!--<el-steps :active="Number(this.score)" simple current="">-->
                    <!--<el-step></el-step>-->
                    <!--<el-step></el-step>-->
                    <!--<el-step></el-step>-->
                    <!--<el-step></el-step>-->
                    <!--<el-step></el-step>-->
                  <!--</el-steps>-->
                  <div class="myPopup">
                    <!--<div class="star-diolog1" v-show="false">-->
                    <!--<div class="star-box">-->
                    <!--<span class="star-one">1星级</span>-->
                    <!--<div class="img-tip"><img src="../../../assets/images/star/right.png"></div>-->
                    <!--<span>2星级</span>-->
                    <!--</div>-->
                    <!--<div class="upgrade">-->
                    <!--再投注{{missaccount}}次即可升级-->
                    <!--</div>-->
                    <!--</div>-->
                    <div class="star-diolog2" v-show="starShowTwo">
                      <div class="star-box">
                        <span class="star-one">{{$t('achievement.text73')}}</span>
                        <div class="img-tip"><img src="../../../assets/images/star/right.png"></div>
                        <span>{{$t('achievement.text74')}}</span>
                      </div>
                      <div class="upgrade">
                        {{$t('achievement.text75')}}{{missaccount}}{{$t('achievement.text76')}}
                      </div>
                    </div>
                    <div class="star-diolog4" v-show="starShowFour">
                      <div class="star-box">
                        <span class="star-one">{{$t('achievement.text77')}}</span>
                        <div class="img-tip"><img src="../../../assets/images/star/right.png"></div>
                        <span>{{$t('achievement.text78')}}</span>
                      </div>
                      <div class="upgrade">
                        {{$t('achievement.text75')}}{{missaccount}}{{$t('achievement.text76')}}
                      </div>
                    </div>
                    <div class="star-diolog5" v-show="starShowFive">
                      <div class="star-box">
                        <span class="star-one">{{$t('achievement.text78')}}</span>
                        <!--<div class="img-tip"><img src="../../../assets/images/star/right.png"></div>-->
                        <!--<span>3星级</span>-->
                      </div>
                      <div class="upgrade">
                        {{$t('achievement.text75')}}{{missaccount}}{{$t('achievement.text76')}}
                      </div>
                    </div>
                  </div>
                  <div class="circle-box" v-if="circleFlag">
                    <div class="default" :class="{finished: 1 <= Number(this.score), 'finished-last': Number(this.score) === 1}">
                      <div class="circle"></div>
                      <div class="line"></div>
                    </div>
                    <div class="default" :class="{finished: 2 <= Number(this.score), 'finished-last': Number(this.score) === 2}">
                      <div class="circle" :class="{isFinished: Number(this.score) + 1 === 2}">
                        <div class="myPopup">
                          <div class="star-diolog2">
                            <div class="star-box">
                              <span class="star-one">{{$t('achievement.text86')}}</span>
                              <div class="img-tip"><img src="../../../assets/images/star/right.png"></div>
                              <span>{{$t('achievement.text73')}}</span>
                            </div>
                            <div class="upgrade">
                              {{$t('achievement.text75')}}{{missaccount}}{{$t('achievement.text76')}}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="line"></div>
                    </div>
                    <div class="default" :class="{finished: 3 <= Number(this.score), 'finished-last': Number(this.score) === 3}">
                      <div class="circle" :class="{isFinished: Number(this.score) + 1  === 3}">
                        <div class="myPopup">
                          <div class="star-diolog3">
                            <div class="star-box">
                              <span class="star-one">{{$t('achievement.text73')}}</span>
                              <div class="img-tip"><img src="../../../assets/images/star/right.png"></div>
                              <span>{{$t('achievement.text74')}}</span>
                            </div>
                            <div class="upgrade">
                              {{$t('achievement.text75')}}{{missaccount}}{{$t('achievement.text76')}}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="line"></div>
                    </div>
                    <div class="default" :class="{finished: 4 <= Number(this.score), 'finished-last': Number(this.score) === 4}">
                      <div class="circle" :class="{isFinished: Number(this.score) + 1 === 4}">
                        <div class="myPopup">
                          <div class="star-diolog4">
                            <div class="star-box">
                              <span class="star-one">{{$t('achievement.text74')}}</span>
                              <div class="img-tip"><img src="../../../assets/images/star/right.png"></div>
                              <span>{{$t('achievement.text77')}}</span>
                            </div>
                            <div class="upgrade">
                              {{$t('achievement.text75')}}{{missaccount}}{{$t('achievement.text76')}}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="line"></div>
                    </div>
                    <div class="default" :class="{finished: 5 <= Number(this.score), 'finished-last': Number(this.score) === 5}">
                      <div class="circle" :class="{isFinished: Number(this.score) + 1 === 5}">
                        <div class="myPopup">
                          <div class="star-diolog5">
                            <div class="star-box">
                              <span class="star-one">{{$t('achievement.text77')}}</span>
                              <div class="img-tip"><img src="../../../assets/images/star/right.png"></div>
                              <span>{{$t('achievement.text78')}}</span>
                            </div>
                            <div class="upgrade">
                              {{$t('achievement.text75')}}{{missaccount}}{{$t('achievement.text76')}}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="line"></div>
                    </div>
                  </div>
                </div>
              </div>
              <!--<div class="content-one common-style">-->
                <!--<p class="header common-text">{{$t('achievement.text8')}}</p>-->
                <!--<p class="amount common-text">{{sieBalance | formattingMoney}}-->
                  <!--<span class="red">{{betpaycurrency}}</span></p>-->
              <!--</div>-->
              <!--<div class="content-two common-style" @click="$router.push('/profitLog')">-->
                <!--<div class="left">-->
                  <!--<p class="header common-text">{{$t('achievement.text9')}}</p>-->
                  <!--<p class="amount common-text">{{todayAmount | formattingMoney}}<span class="red"> {{betpaycurrency}}</span></p>-->
                <!--</div>-->
                <!--<div class="right" @click="$router.push('/profitLog')">-->
                  <!--<router-link to="/profitLog">{{$t('achievement.text10')}}</router-link>-->
                <!--</div>-->
              <!--</div>-->
              <div class="content-three common-style" @click="$router.push('/profitLog')">
                <div class="left">
                  <p class="header common-text">{{$t('achievement.text79')}}</p>
                </div>
                <div class="right">
                  <p class="amount common-text">{{sumAmount | formattingMoney}}<span class="red"> {{betpaycurrency}}</span></p>
                </div>
              </div>
              <div class="content-four">
                <a href="https://trade.secretworth.com/#/userAccount" class="google">
                  <div class="google">
                    <p class="google-code">{{$t('achievement.text80')}}</p>
                    <div class="open-box">
                      <div class="open" v-if="user.openGoogleCode ===2">{{$t('achievement.text81')}}</div>
                      <div class="open" v-if="user.openGoogleCode ===3">{{$t('bogeFund.text16')}}</div>
                      <div class="open" v-if="user.openGoogleCode ===1">{{$t('achievement.text85')}}</div>
                      <div class="img-right"><img src="../../../assets/images/star/right.png"></div>
                    </div>
                  </div>
                </a>
                <a href="https://trade.secretworth.com/#/userAccount" class="safe-password">
                  <div class="safe-password">
                    <p class="google-code">{{$t('achievement.text83')}}</p>
                    <div class="open-box">
                      <div class="open" v-if="user.openTradePassword && user.openTradePassword ===2">{{$t('achievement.text84')}}</div>
                      <div class="open" v-if="user.openTradePassword && user.openTradePassword !==2">{{$t('achievement.text85')}}</div>
                      <div class="img-right"><img src="../../../assets/images/star/right.png"><a href="https://trade.secretworth.com/#/userAccount"></a></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <!--手机结构-->
    <div class="achievement-app">
      <div class="head">
        <div class="title">{{$t('achievement.text2')}}</div>
        <div class="back" @click="$router.push('/home')"></div>
      </div>
      <div class="de-c">
        <div class="main-content">
          <div class="content-title">{{$t('achievement.text12')}}</div>
          <div class="trade-money">{{todayAmount| formattingMoney}}<span class="money-yellow">{{betpaycurrency}}</span></div>
          <router-link to="/account/profitLog">{{$t('achievement.text10')}}</router-link>
        </div>
        <div class="content-dec">
          <ul>
            <li>
              <div>{{$t('achievement.text8')}}</div>
              <div class="white-text">{{sieBalance | formattingMoney}} <span class="blue-text">{{betpaycurrency}}</span></div>
            </li>
            <li @click="$router.push('/account/billingRecord')">
              <div>{{$t('achievement.text67')}}</div>
              <img src="../../../assets/images/common/right-34-24.svg" alt="">
            </li>
            <li @click="toStar">
              <div class="title">{{$t('star.title')}}</div>
              <div class="star-group"><span>{{score === '' ? 0 : score}} {{$t('star.text9')}}</span> <img
                src="../../../assets/images/common/right-34-24.svg" alt=""></div>
            </li>
            <li @click="$router.push('/account/orderProcess')">
              <div>{{$t('achievement.text3')}}</div>
              <img src="../../../assets/images/common/right-34-24.svg" alt="">
            </li>
            <li @click="$router.push('/account/profitLog')">
              <div>{{$t('achievement.text6')}}</div>
              <div class="profit-record"><span>{{sumAmount | formattingMoney}}  </span><span style="color:#e60000">  {{betpaycurrency}} </span><img
                src="../../../assets/images/common/right-34-24.svg" alt=""></div>
            </li>
            <li @click="$router.push({path:'/account/accumulativePerformance'})">
              <div>{{$t('achievement.text7')}}</div>
              <div class="last-content"><span>{{personProfit | formattingMoney}}  </span><span class="yellow-text">  {{betpaycurrency}}</span><img
                src="../../../assets/images/common/right-34-24.svg" alt=""></div>
            </li>
            <li @click="$router.push({path:'/account/fundPerformance'})">
              <div>{{$t('achievement.text01')}}</div>
              <div class="last-content"><span>{{moneyGroup | formattingMoney}}  </span><span class="yellow-text">  {{betpaycurrency}}</span><img
                src="../../../assets/images/common/right-34-24.svg" alt=""></div>
            </li>
            <li @click="$router.push({path:'/account/bogeFund'})">
              <div>{{$t('bogeFund.text1')}}</div>
              <div class="last-content"><span>{{fundAmount | formattingMoney}}  </span><span class="yellow-text">  SIE</span><img
                src="../../../assets/images/common/right-34-24.svg" alt=""></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="login-out">
        <span class="btn" @click="logout">{{$t('header.text3')}}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      moneyGroup: '', // 基金业绩
      circleFlag: false,
      starShowTwo: false,
      starShowThree: false,
      starShowFour: false,
      starShowFive: false,
      score: '',
      sieBalance: '',
      USDBalance: '',
      todayAmount: '', // 今日收益
      sumAmount: '', // 累积收益
      personProfit: '', // 累计业绩
      currency: '', // 币种
      currencyUSD: '',
      fundAmount: '',
      missaccount: '', // 还缺多少次升级
      betpaycurrency: ''
    }
  },
  components: {
    vHeader: resolve => require(['../../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../../components/footer.vue'], resolve),
    star: resolve => require(['../../../components/star.vue'], resolve)
  },
  computed: {
    ...mapGetters([
      'loginFlag',
      'user'
    ])
  },
  mounted () {
    this.getUserBalance()
    this.queryArbitrageAccount()
    this.getPerformanceLog()
    this.getFundAmount()
  },
  methods: {
    // 获取用户信息
    getUserBalance () {
      let url = `${this.$api}/user/balance`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          // console.log('获取用户信息', res.data.data.userAccount.SIE.balance)
          this.circleFlag = true
          this.USDBalance = res.data.data.userAccount.USD.balance
          this.sieBalance = res.data.data.userAccount.SIE.balance
          this.currency = res.data.data.userAccount.SIE.currency
          this.currencyUSD = res.data.data.userAccount.USD.currency
          this.betpaycurrency = res.data.mapData.betpaycurrency
          this.score = res.data.mapData.score
          this.missaccount = res.data.mapData.missaccount
        }
      }).catch(() => {
      })
    },
    // 8.1.3 基金金额查询
    getFundAmount () {
      this.$http.get(`${this.$api}/fund/amount`).then((res) => {
        if (res.data.success === true) {
          this.fundAmount = res.data.data.total
        }
      }).catch(err => {
        console.log(err)
      })
    },
    aaa (index) {
      if (index > this.score) {
        if (index === 2) {
          this.starShowTwo = true
        } else if (index === 3) {
          this.starShowThree = true
        } else if (index === 4) {
          this.starShowFour = true
        } else if (index === 5) {
          this.starShowFive = true
        }
      }
    },
    bbb (index) {
      this.starShowTwo = false
      this.starShowThree = false
      this.starShowFour = false
      this.starShowFive = false
      // if (index > this.score) {
      //   if (index === 2) {
      //     this.starShowTwo = false
      //   } else if (index === 3) {
      //     this.starShowThree = false
      //   } else if (index === 4) {
      //     this.starShowFour = false
      //   } else if (index === 5) {
      //     this.starShowFive = false
      //   }
      // }
    },
    // 获取收益
    queryArbitrageAccount (n) {
      let url = `${this.$api}/bet/queryArbitrageAccountByToday?todayorsum=3`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.sumAmount = res.data.data.sumAmount
          this.todayAmount = res.data.data.todayAmount
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getPerformanceLog () {
      this.$http.post(`${this.$api}/accumulate/accumulateAccount`).then((res) => {
        if (res.data.success === true) {
          this.moneyGroup = res.data.data.group
          // console.log(res.data)
          this.personProfit = res.data.data.person
          this.personalAmount = res.data.data.person
          // if (this.listData.length === 0) { // 如果数组为空，但是页数为1，翻页仍然显示
          //   this.pagesTotal = 0
          // }
        }
      }).catch(err => {
        console.log(err)
        this.isLoadMore = false
      })
    },
    toStar () { // 前往星级的说明页
      this.$router.push({path: '/account/starDetail', query: {score: this.score}})
    },
    logout () {
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
    choose (num) { // 给星级返回对应的最大投注金额
      if (num === 1) {
        return 10000
      } else if (num === 2) {
        return 20000
      } else if (num === 3) {
        return 50000
      } else if (num === 4) {
        return 100000
      } else if (num === 5) {
        return 500000
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  * {
    padding: 0;
    margin: 0;
  }
  .achievement
    /*background #001926*/
    .achievement-web
      background-image url("../../../assets/images/common/bg_500_500.svg")
      background-repeat: repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-size: 500px 500px;
      background-position: 50% 50%;
      @media screen and (max-width: 1024px)
        display none
      @media screen and (min-width: 1024px)
        display block
      .ord-web
        position: relative
        min-height calc(100vh - 80px)
        @media screen and (max-width: 1300px)
          padding 0 30px
      .wrap-web
        width 100%
        margin 0 auto
        /*margin-bottom: 160px*/
        display flex
        flex-direction row
        /*padding-bottom 160px*/
        /*width 1280px*/
        /*margin 0 auto*/
        /*height: 100%*/
        /*min-height 100%*/
        /*display inline-block*/
        /*padding-top 80px*/
        &::after
          content '.'
          height: 0
          width: 0
          clear both
          visibility hidden
          display block
        /*display flex*/
        /*flex-direction row*/
        .flex-box
          /*padding-bottom 160px*/
          width 100%
          margin 0 auto
          display flex
          padding-top 80px
          margin-bottom 160px
          @media screen and (max-width: 1300px)
            width 100%
            display flex
            flex-direction row
            white-space: nowrap
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          height 800px
          background-color #F2F2F2
          @media screen and (max-width: 1024px) {
            height auto
            margin-right 50px
          }
          .common-icon
            width 30px
            height 30px
            margin-right 20px
            vertical-align middle
          .common-title
            vertical-align top
            font-size 20px
            color #1a1a1a
            height 50px
            font-weight bold
            @media screen and (max-width: 768px)
              font-size 18px
          .go-next
            padding-left 40px
            cursor pointer
            height 50px
            width 100%
            line-height 50px
            display flex
            padding-right 20px
            .turn-next
              width 22px
              display none
              img
                width 100%
            &:hover
              background-color #f2f4f5
              color #e60000
              .choose
                color #e60000 !important
              .turn-next
                display block
            .choose
              font-size 16px
              color #232044
              height 50px
              width 100%
              line-height 50px
              @media screen and (max-width: 768px)
                font-size 14px
              &:hover
                color #e60000
          .active
            display flex
            justify-content space-between
            a
              font-size 16px
              color #e60000
            .turn-next
              display block
          .account
            padding-top 60px
            @media screen and (max-width: 1300px){
              padding-top 0
            }
          .account-up
            padding-left 20px
            height 60px
            width 100%
            line-height 60px
          .profit-order
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
          .profit
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
          @media screen and (max-width: 1300px)
            display flex
            flex-direction column
        /*右边样式*/
        .right-content
          width 100%
          overflow: hidden
          @media screen and (max-width: 1024px)
            width 100%
            display flex
            flex-direction column
          .right-title
            color #1a1a1a
            font-size 16px
            margin-top 20px
            margin-bottom 40px
          .account-info
            width 100%
            height 140px
            padding-left 40px
            background #f2f2f2
            margin-bottom 20px
            display flex
            align-items center
            .img-box
              width 80px
              height 80px
              margin-right 20px
              img
                width 100%
                height 100%
            .info-box
              font-size 16px
              color #232044
              .info-one
                font-size 16px
                color #232044
                margin-bottom 12px
              .info-two
                font-size 16px
                color #232044
                margin-bottom 12px
          .add-content
            width 100%
            height 150px
            padding-left 40px
            background #f2f2f2
            margin-bottom 20px
            display flex
            flex-direction column
            justify-content center
            .star-group
              display flex
              flex-direction row
              justify-content flex-start
              margin-bottom 20px
              font-size 16px
              .title
                margin-right 20px
            .money
              display flex
              flex-direction row
              justify-content flex-start
              margin-bottom 20px
              .money-text
                margin-right 20px
                font-weight bold
              .money-value
                font-size 16px
                color #e60000
                font-weight bold
                display flex
                align-items center
            .steps
              width 100%
              position relative
              display flex
              flex-direction row
              .circle-box
                position absolute
                display flex
                .default
                  display flex
                  flex-direction row
                  align-items center
                  &:last-child
                    .line
                      display none
                  .circle
                    width 20px
                    height 20px
                    border-radius 100%
                    background #e1e1e6
                  .isFinished
                    cursor pointer
                    &:hover
                      .star-diolog2
                        display: flex
                      .star-diolog3
                        display: flex
                      .star-diolog4
                        display: flex
                      .star-diolog5
                        display: flex
                  .line
                    height 2px
                    width 50px
                    background #e1e1e6
                .finished
                  &.finished-last
                    .line
                      // display none
                      background none
                      background-image url("../../../assets/images/steps.png")
                      background-size 100%
                      background-position center
                      height 4px
                  // background #e1e1e6
                  .circle
                    background #f6a545
                    cursor default
                  .line
                    background #f6a545
          .content-one
            @media screen and (max-width: 1178px)
              width: 100%;
          .common-style
            width 100%
            height 140px
            background-color #f2f2f2
            margin-bottom 20px
            .header
              font-size 18px
              color #cccccc
            .common-text
              margin-left 40px
              color #232044
              font-size 18px
            .amount
              font-size 30px
              color #1a1a1a
              font-weight bold
              @media screen and (max-width: 768px)
                font-size 18px
              .red
                font-size 30px
                color #e60000
          .content-two
            display flex
            flex-direction row
            justify-content space-between
          .right
            margin-right 40px
            /*margin-top 90px*/
            a
              font-size 16px
              color #1a1a1a
              display inline-block
              height 31px
              border-bottom 1px solid #1a1a1a
          .content-three
            height 100px
            line-height 100px
            display flex
            align-items center
            justify-content space-between
          .content-four
            display flex
            width 100%
            height 100px
            .google
              width 440px
              background-color #f2f2f2
              margin-right 40px
              display flex
              align-items center
              justify-content space-between
              .google-code
                font-size 18px
                color #1a1a1a
                padding-left 30px
              .open-box
                font-size 18px
                color #1a1a1a
                display flex
                align-items center
                padding-right 60px
                .open
                  margin-right 20px
                .img-right
                  width 9px
                  height 14px
                  cursor pointer
            .safe-password
              width 440px
              background-color #f2f2f2
              display flex
              align-items center
              justify-content space-between
              .google-code
                font-size 18px
                color #1a1a1a
                padding-left 30px
              .open-box
                font-size 18px
                color #1a1a1a
                display flex
                align-items center
                padding-right 60px
                .open
                  margin-right 20px
                .img-right
                  width 9px
                  height 14px
                  cursor pointer
  /*手机端样式*/
  .achievement
    width 100%
    min-height 100vh
    height auto
    background-color #f8f9fa
    .achievement-app
      position: absolute
      width: 100%
      top: 0
      height auto
      background-color #f8f9fa
      @media screen and (max-width: 1024px) {
        display block
      }
      @media screen and (min-width: 1024px) {
        display none
      }
      .head
        position fixed
        top 0
        width 100%
        border-bottom 1px solid #666
        height 60px
        line-height 60px
        display flex
        flex-direction row
        justify-content center
        z-index 999
        background #fff
        .back
          position absolute
          top 22px
          left 18px
          /*background-image url("../../../assets/images/arbitrage/back@2x.png")*/
          background-image url("../../../assets/images/common/row-34-24_1.svg")
          background-position right
          background-repeat no-repeat
          width 30px
          height 20px
        .title
          font-weight bold
          font-size 20px
          color #1a1a1a
    .de-c
      width 100%
      margin-top: 60px
      overflow: auto
      height auto
      background-color: #f8f9fa;
      padding-bottom 60px
      .main-content
        margin 10px 20px 20px
        background-color #ffffff
        height auto
        .content-title
          text-align center
          padding-top 40px
          font-size 16px
          color #1a1a1a
        .trade-money
          text-align center
          margin 10px 0
          font-size 28px
          color #1a1a1a
          font-weight bold
          .money-yellow
            color #e60000
        a
          font-size 18px
          display block
          text-align center
          color #1a1a1a
      .content-dec
        padding 0 20px
        margin-bottom 30px
        background-color #ffffff
        ul
          li
            height 80px
            display flex
            justify-content space-between
            align-items center
            font-size 18px
            color #1a1a1a
            .star-group
              display flex
              flex-direction row
              align-items center
              img
                margin-left 20px
            img
              display block
              height 18px
              width 24px
              margin-left 20px
            .blue-text
              color #e60000
            .white-text
              color #1a1a1a
            .last-content
              display flex
              flex-direction row
              align-items center
              .yellow-text
                color #e60000
            /*margin-right 10px*/
            .profit-record
              display flex
              flex-direction row
              align-items center
    .login-out
      .btn
        width 100%
        height 40px
        color #e60000
        background #fff
        line-height 40px
        text-align center
        position fixed
        bottom 0
        border 1px solid #e60000
  .myPopup
    z-index 10
    position absolute
    top: -225px
    left: 0
    display: flex;
    align-items: center;
    justify-content: center;
    .star-diolog
      position: relative;
      width 440px
      height 211px
      border 1px solid #ebeef5
      border-radius 4px
      box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
      display flex
      flex-direction column
      justify-content center
      align-items center
      background-color #fff
      &::after
        content: '';
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        border-color: #ffffff transparent transparent transparent;
        border-style: solid;
        border-width: 20px
        top: 200px;
        left: 240px
    .star-diolog2
      position: relative;
      width 440px
      height 211px
      border 1px solid #ebeef5
      border-radius 4px
      box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
      display none
      flex-direction column
      justify-content center
      align-items center
      background-color #fff
      &::after
        content: '';
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        border-color: #ffffff transparent transparent transparent;
        border-style: solid;
        border-width: 20px
        top: 200px;
        left: 60px
      .star-box
        font-size 18px
        color #1a1a1a
        display flex
        margin-bottom 20px
      .star-one
        margin-right 20px
      .img-tip
        margin-right 20px
      .upgrade
        font-size 18px
        color #19191a
    .star-diolog3
      position: relative;
      width 440px
      height 211px
      border 1px solid #ebeef5
      border-radius 4px
      box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
      flex-direction column
      justify-content center
      align-items center
      background-color #fff
      display none
      &::after
        content: '';
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        border-color: #ffffff transparent transparent transparent;
        border-style: solid;
        border-width: 20px
        top: 200px;
        left: 130px;
      .star-box
        font-size 18px
        color #1a1a1a
        display flex
        margin-bottom 20px
      .star-one
        margin-right 20px
      .img-tip
        margin-right 20px
      .upgrade
        font-size 18px
        color #19191a
    .star-diolog4
      position: relative;
      width 440px
      height 211px
      border 1px solid #ebeef5
      border-radius 4px
      box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
      display none
      flex-direction column
      justify-content center
      align-items center
      background-color #fff
      &::after
        content: '';
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        border-color: #ffffff transparent transparent transparent;
        border-style: solid;
        border-width: 20px
        top: 200px;
        left: 200px
      .star-box
        font-size 18px
        color #1a1a1a
        display flex
        margin-bottom 20px
      .star-one
        margin-right 20px
      .img-tip
        margin-right 20px
      .upgrade
        font-size 18px
        color #19191a
    .star-diolog5
      position: relative;
      width 440px
      height 211px
      border 1px solid #ebeef5
      border-radius 4px
      box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
      display none
      flex-direction column
      justify-content center
      align-items center
      background-color #fff
      &::after
        content: '';
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        overflow: hidden;
        font-size: 0;
        line-height: 0;
        border-color: #ffffff transparent transparent transparent;
        border-style: solid;
        border-width: 20px
        top: 200px;
        left: 270px
      .star-box
        font-size 18px
        color #1a1a1a
        display flex
        margin-bottom 20px
        .star-one
          margin-right 20px
        .img-tip
          margin-right 20px
      .upgrade
        font-size 18px
        color #19191a
</style>
