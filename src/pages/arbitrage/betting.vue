<template>
    <div class="betting">
      <div class="detail-mobile" :class="{opacity: isOpacity}">
        <div class="head">
          <div class="back" @click="back"></div>
          <div class="title">{{$t('betting.mobile.text1')}}</div>
        </div>
        <div class="detail-mobile-content">
          <div class="mobile-wrapper">
            <div class="announcement">
              <div class="announcement-top">
                <p class="top-title">{{pkTitle}}</p>
                <p class="top-num">{{$t('betting.mobile.text2')}} {{id}}</p>
              </div>
              <div class="remaining">
                <div class="betting-text">{{$t('betting.mobile.text3')}}</div>
                <div class="betting-status"><span ref="already">{{hasAmount | formattingMoney}}</span> <span class="unit-high">{{unit}}</span></div>
              </div>
              <div class="target">
                <span class="target-text">{{$t('betting.mobile.text4')}}</span>
                <span class="target-value">{{maxTotalAmount | formattingMoney}} <span class="unit-high">{{unit}}</span></span>
              </div>
              <div class="end-time">
                <span class="time-text">{{$t('betting.mobile.text5')}}</span>
                <span class="time-value">{{endDate}}</span>
              </div>
            </div>
            <div class="betting" @click="toCumulative">
              <div class="betting-text">{{$t('betting.mobile.text6')}}</div>
              <div class="value-wrapper">
                <span class="value">{{totalAccount | formattingMoney}} <span style="color: #1a1a1a; font-size: 16px">{{unit}}</span></span>
                <span class="icon">
                  <img src="../../assets/images/arbitrageDetial/row1.svg"/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="betting-amount">
          <div class="amount-title">{{$t('betting.mobile.text7')}}({{betpaycurrency}})</div>
          <input ref="pay" v-model="inputValue" onkeyup="this.value=this.value.replace(/\D/g,'')" type="number" :placeholder="$t('betting.mobile.text8')" @input="balanceShow = false, isFull = false, minValueShow = false, insufficient = false, more = false">
          <div class="balance">{{$t('betting.mobile.text9')}} <span ref="hasBalance">{{userSie | formattingMoney}}</span> {{unitSie}}</div>
          <!--<div class="pay">{{$t('betting.mobile.text10')}} <span ref="payBalance">{{inputValue === '' ? 0 : (Number(inputValue) / siePrice).toFixed(4)}}</span> {{betpaycurrency}}</div>-->
          <div class="pay">{{$t('betting.mobile.text10')}} <span ref="payBalance">{{inputValue === '' ? '0.0000' : Number(inputValue) | formattingMoney}}</span> {{betpaycurrency}}</div>
          <div class="prompt" v-show="balanceShow">{{$t('arbitrageDetail.web.text8')}}</div>
          <div class="prompt" v-show="isFull">{{$t('arbitrageDetail.web.text15')}}</div>
          <div class="prompt" v-show="minValueShow">{{$t('arbitrageDetail.web.text16')}}</div>
          <div class="prompt" v-show="insufficient" >{{$t('betting.mobile.text11')}}</div>
          <div v-show="more" class="prompt">{{$t('arbitrage.text6')}}</div>
          <div style="margin-top: 10px; color: #000" class="agreement">{{$t('arbitrageDetail.web.text19')}}《<span @click="openDialog" class="isClick" style="color: #fc534c">{{$t('arbitrageDetail.web.text20')}}</span>》</div>
        </div>
        <div class="btn-wrapper">
          <span class="btn" @click="immBet">{{$t('betting.mobile.text12')}}</span>
        </div>
      </div>
      <!-- 交易奖励规则弹窗 -->
      <div class="dialog-rule" v-if="ruleDialog">
        <div class="dialog-content">
          <div class="dialog">
            <div class="dialog-title">{{$t('arbitrageDetail.web.text21')}}</div>
            <div class="rule">
              <p>{{$t('arbitrageDetail.web.text22')}}</p>
              <p>{{$t('arbitrageDetail.web.text23')}}</p>
              <p>{{$t('arbitrageDetail.web.text24')}}</p>
              <p>{{$t('arbitrageDetail.web.text25')}}</p>
              <p>{{$t('arbitrageDetail.web.text26')}}</p>
              <p>{{$t('arbitrageDetail.web.text27')}}</p>
              <p>{{$t('arbitrageDetail.web.text28')}}</p>
              <p>{{$t('arbitrageDetail.web.text29')}}</p>
              <p>{{$t('arbitrageDetail.web.text30')}}</p>
            </div>
            <button class="btn-dialog" @click="closeIsDialog">{{$t('dialog.text8')}}</button>
          </div>
        </div>
      </div>
      <!-- 投注支付弹窗 -->
      <div class="dialog-box" v-if="isDialog">
        <div class="dialog">
          <div class="dialog-header">
            <div class="title" v-show="isTitle">{{$t('betting.mobile.text13')}}</div>
            <div class="close" @click="close">
              <img src="../../assets/images/common/delete_16_16.svg">
            </div>
          </div>
          <div class="dialog-body">
            <div class="input-group" v-show="password">
              <div class="input-group-text">{{$t('betting.mobile.text14')}}</div>
              <input ref="password" class="password" type="password" :placeholder="$t('betting.mobile.text16')"/>
            </div>
            <div class="input-group" v-if='google'>
              <div class="input-group-text">{{$t('betting.mobile.text17')}}</div>
              <input ref="code" :placeholder="$t('betting.mobile.text18')"/>
            </div>
            <div class="input-group" v-if='send'>
              <div class="input-group-text">{{$t('betting.mobile.text19')}}</div>
              <div class="send-group">
                <input ref="code" :placeholder="$t('betting.mobile.text20')"/>
                <span ref="sendMsg" class="send" @click="getCode">{{sendBtnValue}}</span>
              </div>
            </div>
            <p class="errin-Msg" v-if="setSafeVerific">{{$t('dialog.text13')}}</p>
            <div class="bind" v-show="bind">{{$t('betting.mobile.text21')}}</div>
            <div v-show="errmsg" class="err-msg">{{errMsg}}</div>
            <div class="err-msg" v-show="isPayFailShow">{{payFailTip}}</div>
            <div class="err-msg" v-show="security">{{$t('arbitrageDetail.dialog.text8')}}</div>
          </div>
          <div class="btn" v-show="bind" @click="isDialog = false, isOpacity = false">{{$t('betting.mobile.text22')}}</div>
          <div class="btn" v-show="!bind" @click="pay">{{$t('betting.mobile.text22')}}</div>
        </div>
      </div>
      <!-- 投注支付成功后的弹窗 -->
      <div class="success-dialog-box" v-if="isSuccess">
        <div class="dialog">
          <div class="content">{{$t('betting.dialog.text1')}}</div>
          <div class="determine" @click="toDetail">{{$t('betting.dialog.text2')}}</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isTitle: false,
      setSafeVerific: false,
      ruleDialog: false, // 用户协议弹窗
      isDialog: false, // 支付弹窗
      isSuccess: false, // 支付成功后的弹窗
      isOpacity: false, // 弹出框后给主体内容透明度
      password: false, // 支付框
      google: false, // 谷歌输入框
      send: false, // 短信输入框
      bind: false, // 绑定手机
      score: '', // 判断用户单笔最大可投金额
      more: false, // 超过最大笔投注提示
      openTradePassword: 0,
      security: false, // 判断是否设置安全密码
      errmsg: false,
      inputValue: '',
      clickFlag: true,
      payFailTip: '',
      isPayFailShow: false,
      isFull: false, // 剩余可投金额是否小于100
      minValueShow: false, // 最小投注金额提醒
      insufficient: false, // 资产不足提醒
      balanceShow: false, // 输入金额大于已有金额的提示
      usd: '',
      id: '',
      pkTitle: '',
      maxPersonalAmount: '',
      unit: '',
      maxTotalAmount: '',
      hasAmount: '',
      endDate: '',
      userUsd: '',
      unitSie: '',
      userSie: '',
      betpaycurrency: '',
      alreadyAmount: '',
      totalAccount: 0, // 初始化累计投注为0
      siePrice: '',
      openGoogleCode: '', // 谷歌验证
      openMobileCode: '', // 短信验证
      sendBtnTimes: 60, // 初始状态60s
      sendBtnValue: this.$t('betting.mobile.text23'),
      errMsg: '',
      arbitrageid: ''
    }
  },
  mounted () {
    var that = this
    window.onresize = function () {
      that.routeRedirect() // 解决PC端空白问题
    }
  },
  created () {
    this._getBlance()
    this.getFinishedLog()
  },
  methods: {
    routeRedirect () {
      if (window.innerWidth > 1200) {
        this.$router.push({path: '/arbitrageDetail', query: {id: this.$route.query.id}})
      }
    },
    openDialog () {
      this.ruleDialog = true
    },
    closeIsDialog () {
      this.ruleDialog = false
      localStorage.setItem('userAgree', 'true')
      console.log(window.localStorage.getItem('userAgree'))
    },
    // login () {
    //  let url = `${this.$api}/user/userlogin?username=liulian&password=123123aA`
    //  this.$http.post(url).then((res) => {
    //    if (res.data.success === true) {
    //      this._getArbitrageListInfo()
    //      this._getBlance()
    //      this._getArbitrage()
    //    }
    //  }).catch((err) => {
    //    console.log(err)
    //  })
    // },
    _getArbitrageListInfo () { // 获取用户的总金额等信息
      this.$http.post(`${this.$api}/arbitrage/info?id=${this.$route.query.id}`).then((res) => {
        if (res.data.success === true) {
          let ret = res.data.data
          // console.log(ret)
          this.id = ret.id
          this.pkTitle = ret.title
          this.unit = ret.currency
          this.maxPersonalAmount = ret.maxPersonalAmount
          this.maxTotalAmount = (ret.maxTotalAmount).toFixed(4)
          this.hasAmount = (this.maxTotalAmount - ret.alreadyAmount).toFixed(4)
          this.title = ret.introduce
          this.endDate = this.$changeDate(ret.endTime, '/', 1)
          this.alreadyAmount = (ret.alreadyAmount).toFixed(4)
          this.progress = (ret.alreadyAmount / ret.maxTotalAmount).toFixed(4) * 100 + '%' // 当前进度
          this.styleObject.width = this.progress
        }
      }).catch(() => {
        // console.log(err)
      })
    },
    // determine () { // 成功支付后的行为
    //   console.log(this.$route.query.id)
    //   this.isSuccess = false // 关闭支付成功后的弹窗
    //   this.$router.push({path: '/processOrderDetail', query: {id: this.$route.query.id}})
    // },
    _getBlance () { // 获取用户的USD资产以及SIE资产的数据
      this.$http.post(`${this.$api}/user/balance`).then((res) => {
        if (res.data.success === true) {
          this.score = res.data.mapData.score
          // console.log(this.score)
          this._getArbitrageListInfo()
          this._getArbitrage()
          let ret = res.data.data
          let retD = res.data
          this.openGoogleCode = ret.user.openGoogleCode
          this.openMobileCode = ret.user.openMobileCode
          this.openTradePassword = ret.user.openTradePassword
          this.betpaycurrency = retD.mapData.betpaycurrency
          this.switch()
          // console.log(res.data.user.openMobileCode)
          this.siePrice = ret.siePrice
          let userUsd = ret.userAccount.USD.balance
          if (userUsd) { // 判断用户是否存在userUsd字段防止后台为空会报错
            this.userUsd = userUsd.toFixed(4)
          } else {
            this.userUsd = 0.0000
          }
          if (this.inputValue > userUsd) { // 如果输入的金额大于剩余的金额显示的内容
            this.promptShow = true
          } else {
            this.promptShow = false
          }
          let userSie = ret.userAccount.SIE.balance
          this.unitSie = ret.userAccount.SIE.currency
          if (userSie) { // 判断用户是否存在userSie字段防止后台为空会报错
            this.userSie = userSie.toFixed(4)
          } else {
            this.userSie = 0.0000
          }
        }
      })
    },
    getFinishedLog () { // 获得累计投注金额
      let url = `${this.$api}/bet/queryBetDetail?arbitrageid=${this.$route.query.id}`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          // console.log(res.data)
          let ret = res.data.data
          this.totalAccount = ret.personAmountUsd
        }
      })
    },
    _getArbitrage () {
      this.$http.post(`${this.$api}/bet/queryBetList?status=2&pageIndex=1&pageSize=10`).then((res) => {
        if (res.data.success === true) {
          let alreadyAmount = res.data.data.alreadyAmount
          this.arbitrageid = res.data.data.id
          if (alreadyAmount) {
            this.alreadyAmount = alreadyAmount
          } else {
            this.alreadyAmount = 0.0000
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    immBet () {
      if (this.openGoogleCode !== 2) {
        this.isTitle = false
        this.isDialog = true
        this.isOpacity = true
      } else if (this.openGoogleCode === 2) {
        // console.log(Number(this.$refs.already.innerHTML.replace(/,/g, '')))
        // console.log(this.score)
        let maxValue = this.choose(this.score) // 获得最大的额度
        // console.log(maxValue, typeof maxValue)
        if (Number(this.isNew) !== 1 || window.localStorage.getItem('userAgree') === 'true') {
          if (Number(this.$refs.already.innerHTML.replace(/,/g, '')) >= 100) { // 判断剩余可投金额是否小于100
            if (this.inputValue && this.inputValue >= 100) { // 判断投注的值是否小于100
              if (this.inputValue <= Number(this.$refs.already.innerHTML.replace(/,/g, ''))) { // 判断输入的USD是否小于剩余可投的USD
                if (this.$refs.hasBalance.innerHTML.replace(/,/g, '') - this.$refs.payBalance.innerHTML.replace(/,/g, '') >= 0) { // 判断用户资产是否足够
                  if (this.inputValue && this.inputValue <= maxValue) {
                    this.isDialog = true
                    this.isOpacity = true
                    this.isTitle = true
                  } else {
                    // console.log(maxValue, Number(this.$refs.already.innerHTML.replace(/,/g, '')))
                    this.more = true
                  }
                } else {
                  this.insufficient = true
                }
              } else {
                this.balanceShow = true
              }
            } else {
              this.minValueShow = true
            }
          } else {
            this.isFull = true
          }
        } else {
          this.ruleDialog = true
        }
      }
      // if (this.usd && this.usd > 0) {
      //   let has = Number(this.$refs.hasBalance.innerHTML)
      //   let pay = Number(this.$refs.payBalance.innerHTML)
      //   if (has < pay) {
      //     this.balanceShow = true
      //   } else {
      //     this.balanceShow = false
      //     this.isDialog = true
      //     this.isOpacity = true
      //   }
      // }
    },
    back () {
      this.$router.go(-1)
    },
    toCumulative () {
      this.$router.push({path: '/cumulative', query: {id: this.$route.query.id, betpaycurrency: this.betpaycurrency}})
    },
    pay () {
      let ajaxLang1 = ''
      if (localStorage.getItem('Qlang') === 'EN') {
        ajaxLang1 = 'en'
      }
      if (this.setSafeVerific === true) {
        this.isDialog = false
        this.isOpacity = false
      } else {
        let password = this.$refs.password.value // 支付密码
        let code = this.$refs.code.value // 验证码
        let id = this.$route.query.id // 套利id
        let payBalance = this.$refs.pay.value // 所投注的金额
        if (this.openTradePassword === 1) {
          this.security = true
        } else {
          this.$http.post(`${this.$api}/bet?tradePwd=${password}&verifyCode=${code}&id=${id}&amount=${payBalance}`, {}, {headers: {'pk-language': ajaxLang1}}).then((res) => {
            if (res.data.success === true) {
              this.isDialog = false // 关闭支付弹窗
              this.isOpacity = true
              this.isSuccess = true
              this.errmsg = false
            } else {
              this.errMsg = res.data.msg
              this.errmsg = true
            }
          })
        }
      }
    },
    close () {
      this.isDialog = false // 关闭支付弹窗
      this.isOpacity = false
      this.errmsg = false
      this.isPayFailShow = false
      this.security = false
    },
    // switch () { // 切换是谷歌验证还是短信验证
    //   if (this.openMobileCode === 2 && this.openGoogleCode !== 2) { // 只有短信验证没有谷歌
    //     this.password = true
    //     this.send = true
    //     this.google = false
    //     this.bind = false
    //   } else if (this.openMobileCode !== 2 && this.openGoogleCode === 2) { // 只有谷歌
    //     this.password = true
    //     this.send = false
    //     this.google = true
    //     this.bind = false
    //   } else if (this.openMobileCode === 2 && this.openGoogleCode === 2) { // 谷歌
    //     this.password = true
    //     this.google = true
    //     this.send = false
    //     this.bind = false
    //   } else {
    //     this.password = false
    //     this.google = false
    //     this.send = false
    //     this.bind = true
    //   }
    // },
    switch () {
      if (this.openGoogleCode === 2) {
        this.isTitle = true
        this.password = true
        this.send = false
        this.google = true
        this.bind = false
      } else if (this.openGoogleCode !== 2) {
        this.isTitle = false
        this.setSafeVerific = true
        this.password = false
        this.send = false
        this.google = false
        this.bind = false
      }
    },
    getCode () { // 发送短信验证码
      if (this.clickFlag) {
        this.clickFlag = false
        if (this.sendBtnValue === this.$t('betting.mobile.text23')) {
          this.countDown()
          let formData = new FormData()
          formData.append('json', JSON.stringify({'type': 'code'}))
          this.$http.post(this.$api + '/user/sendSmsCode', formData).then((res) => {
            this.clickFlag = true
            if (res.data.success) {
              this.payFailTip = ''
              this.$refs.sendMsg.disabled = true
            } else {
              // 验证码获取失败
              this.payFailTip = res.data.msg
              this.isPayFailShow = true
            }
          }).catch((err) => {
            this.clickFlag = true
            this.payFailTip = '网络错误'
            console.log(err)
          })
        }
      }
    },
    countDown () { // 短信倒计时
      if (this.sendBtnTimes === 0) {
        this.sendBtnValue = '发送'
        this.sendBtnTimes = 60
        this.$refs.sendMsg.disabled = false
      } else {
        this.sendBtnTimes--
        this.sendBtnValue = this.sendBtnTimes
        setTimeout(() => this.countDown(), 1000)
      }
    },
    toDetail () {
      this.isSuccess = false
      this.$router.push({path: '/processOrderDetail', query: {id: this.$route.query.id}})
    },
    choose (str) { // 给星级返回对应的最大投注金额
      if (str === '1') {
        return 10000
      } else if (str === '2') {
        return 20000
      } else if (str === '3') {
        return 50000
      } else if (str === '4') {
        return 100000
      } else if (str === '5') {
        return 500000
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mixin"
  .betting
    .detail-mobile
      background-color #f8f9fa
      min-height 100vh
      height 100%
      padding-bottom 50px
      @media screen and (min-width: 1024px) {
        display none
      }
      @media screen and (max-width: 1025px) {
        display block
      }
      .head
        width 100%
        background #fff
        height 60px
        line-height 60px
        display flex
        flex-direction row
        justify-content center
        border-bottom 1px solid #ccc
        .back
          position absolute
          top 22px
          left 18px
          background-image url("../../assets/images/arbitrageDetial/back.svg")
          background-position right
          background-repeat no-repeat
          width 26px
          height 16px
        .title
          font-size 22px
          color #1a1a1a
      .detail-mobile-content
        padding-right 20px
        padding-left 20px
        .announcement
          margin-top 15px
          display flex
          flex-direction column
          justify-content space-between
          padding 5px 15px 5px 15px
          width 100%
          height 200px
          background #fff
          .announcement-top
            display flex
            flex-direction row
            justify-content space-between
            font-size 16px
            .top-title
              color #1a1a1a
              font-weight bold
            .top-num
              color #1a1a1a
          .remaining
            display flex
            flex-direction column
            align-items center
            .betting-text
              font-size 16px
              color #1a1a1a
            .betting-status
              margin-top 10px
              font-size 22px
              color #1a1a1a
              font-weight bold
              .unit-high
                color #1a1a1a
                font-weight bold
          .target
            display flex
            flex-direction row
            justify-content space-between
            .target-text
              font-size 16px
              color #1a1a1a
            .target-value
              font-size 16px
              color #1a1a1a
              .unit-high
                color #1a1a1a
          .end-time
            display flex
            flex-direction row
            justify-content space-between
            .time-text
              font-size 16px
              color #1a1a1a
            .time-value
              font-size 16px
              color #1a1a1a
        .betting
          padding-left 15px
          padding-right 15px
          margin-top 10px
          width 100%
          height 50px
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          background #fff
          .betting-text
            font-size 16px
            color #1a1a1a
          .value-wrapper
            font-size 16px
            color #1a1a1a
            .value
              margin-right 3px
            .icon
              img
                width 16px
                height 16px
                font-size 16px
        .result
          display flex
          flex-direction column
          justify-content space-between
          margin-top 10px
          padding 10px 15px
          background #011f3c
          width 100%
          height 180px
          .result-title
            font-size 16px
            color #fefefe
          .team-wrapper
            display flex
            flex-direction column
            align-items center
            .team-icon
              width 27px
              height 30px
              margin-bottom 5px
              img
                width 27px
                height 30px
            .team-name
              font-size 16px
              color #fff
          .all-get
            display flex
            flex-direction row
            justify-content space-between
            .get-title
              font-size 16px
              color #ccc
            .value
              font-size 16px
              color #fff
          .personal-get
            display flex
            flex-direction row
            justify-content space-between
            .personal-text
              font-size 16px
              color #ccc
            .personal-value
              font-size 16px
              color #fff
        .game
          display flex
          flex-direction column
          justify-content space-around
          margin-top 10px
          padding 10px 15px
          height 200px
          width 100%
          background #011f3c
          .game-top
            display flex
            flex-direction row
            justify-content space-between
            .top-title
              font-size 16px
              color #fff
            .top-date
              font-size 16px
              color #ccc
          .game-team-group
            .mark-wrapper
              display flex
              flex-direction column
              align-items center
              .mark
                img
                  width 40px
                  height 40px
              .game-event
                font-size 16px
                color #ccc
            .game-team
              display flex
              flex-direction row
              justify-content center
              .one-team
                display flex
                flex-direction row
                align-items center
                .one-team-log
                  img
                    width 30px
                    height 40px
                .one-team-name
                  margin-left 8px
                  color #fff
                  font-size 16px
                  font-weight bold
              .vs
                margin 0 20px
                img
                  width 30px
                  height 40px
              .two-team
                display flex
                flex-direction row-reverse
                align-items center
                .two-team-log
                  img
                    width 30px
                    height 40px
                .two-team-name
                  margin-right 8px
                  color #fff
                  font-size 16px
                  font-weight bold
        .plan
          height auto
          width 100%
          padding 10px 15px
          background #011f3c
          .plan-text
            font-size 16px
            color #fff
            font-weight bold
          .plan-list
            padding-top 15px
            ul
              li
                height 100px
                display flex
                flex-direction column
                justify-content space-between
                .company
                  font-size 16px
                  color #ccc
                .odd
                  display flex
                  flex-direction row
                  justify-content space-between
                .expect
                  display flex
                  flex-direction row
                  justify-content space-between
      .betting-amount
        margin-left 20px
        margin-right 20px
        margin-top 10px
        padding 0 15px
        color #fff
        height auto
        padding-bottom 30px
        background #fff
        display flex
        flex-direction column
        .amount-title
          color #1a1a1a
          font-weight bold
          padding-top 10px
        input
          margin-top 10px
          padding-left 20px
          height 40px
          background #fff
          color #1a1a1a
          font-size 16px
          border 1px solid #1a1a1a
        .balance
          color #1a1a1a
          font-size 16px
          margin-top 10px
        .pay
          margin-top 10px
          color #1a1a1a
          font-size 16px
        .prompt
          margin-top 10px
          color #cc2929
      .btn-wrapper
        width 100%
        height 100%
        position relative
        .btn
          font-weight bold
          font-size 18px
          color #fff
          line-height 50px
          text-align center
          display inline-block
          position fixed
          bottom 0
          width 100%
          height 50px
          background: #e60000
    .opacity
      opacity .3
      background #fff
      z-index -1
    .dialog-rule
      position fixed
      top 0
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      background-color:rgba(0,0,0,.5)
      z-index 999
      .dialog-content
        height 60%
        width 50%
        position relative
        @media screen and (max-width: 1024px) {
          width 90%
        }
        .dialog
          overflow: auto
          margin 0 auto
          text-align: center
          border-radius: 8px;
          box-shadow: 0 0 5px #d7d9db;
          width 100%
          // height 100%
          max-height 100%
          height auto
          font-family "Microsoft YaHei UI Light"
          background #fff
          position relative
          @media screen and (max-width: 1024px) {
            width 100%
          }
          .close
            position absolute
            top 30px
            right 20px
            cursor pointer
            user-select none
            @media screen and (max-width: 1024px) {
              top 15px
              right 20px
            }
            img
              @media screen and (max-width: 1024px) {
                width 20px
                height 20px
              }
          .dialog-title
            padding-top 90px
            font-size 22px
            color #181818
            @media screen and (max-width: 1024px) {
              padding-top 30px
            }
          .rule
            width 90%
            text-align: left
            margin: 40px auto 0
            line-height 2
            font-size 16px
            @media screen and (max-width: 1024px) {
              width 80%
            }
          .btn-dialog
            margin 30px 0
            padding 10px 0
            text-align center
            background #fc534c
            border-radius 4px
            border 1px solid #d7d9db
            cursor pointer
            user-select none
            font-family "Microsoft YaHei UI"
            font-size 20px
            color #fff
            width 90%
            @media screen and (max-width: 1024px) {
              margin-top 20px
              width: 80%
            }
    .dialog-box
      position fixed
      top 0
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      background-color rgba(0, 0, 0, .3)
      .dialog
        position relative
        width 640px
        height auto
        display flex
        flex-direction column
        align-items center
        background #fff
        padding-bottom 30px
        @media screen and (max-width: 700px) {
          width 90%
          height auto
          padding-bottom 15px
        }
        .dialog-header
          .title
            margin-top 60px
            font-weight bold
            color #1a1a1a
            font-size 36px
            @media screen and (max-width: 414px) {
              margin-top 20px
              font-size 16px
            }
          .close
            position absolute
            height 16px
            width 16px
            top 15px
            right 15px
            cursor pointer
            img
              font-size 16px
              text-align center
        .dialog-body
          width 100%
          @media screen and (max-width: 414px) {
            height 100%
          }
          .errin-Msg
            margin 30px 0
            font-size 20px
            text-align center
          .input-group
            margin-bottom 15px
            display block
            width 100%
            padding 0 10%
            @media screen and (max-width: 414px) {
              margin-top 20px
            }
            .input-group-text
              margin-bottom 5px
              text-align left
              color #1a1a1a
              font-size 18px
              @media screen and (max-width: 414px) {
                margin-bottom 5px
                font-size 14px
              }
            input
              align-items center
              width 80%
              margin-top 5px
              height 60px
              padding-left 20px
              font-size 18px
              background #fff
              color #1a1a1a
              border 1px solid #1a1a1a
              @media screen and (max-width: 414px) {
                width 100%
                height 30px
                font-size 14px
              }
            .password
              align-items center
              width 80%
              margin-top 5px
              height 60px
              padding-left 20px
              font-size 18px
              background #fff
              color #1a1a1a
              border 1px solid #1a1a1a
              @media screen and (max-width: 414px) {
                width 100%
                height 30px
                font-size 14px
              }
            .send-group
              width 80%
              position relative
              input
                align-items center
                width 100%
                margin-top 5px
                height 60px
                padding-left 20px
                font-size 18px
                background #fff
                color #1a1a1a
                border 1px solid #1a1a1a
                @media screen and (max-width: 414px) {
                  height 30px
                  font-size 14px
                }
              .send
                position absolute
                height 58px
                width 60px
                top 6px
                color #e60000
                line-height 58px
                text-align center
                right 1px
                cursor pointer
                @media screen and (max-width: 414px) {
                  height 28px
                  line-height 28px
                  font-size 14px
                  width 42px
                }
          .bind
            margin 20px 0
            color #ccc
            font-size 16px
            text-align center
          .err-msg
            margin-top 10px
            font-size 20px
            color #e60000
            text-align center
            padding 0 10%
            @media screen and (max-width: 414px) {
              font-size 16px
            }
        .btn
          margin-top 60px
          width 200px
          height 54px
          line-height 54px
          text-align center
          color #fff
          cursor pointer
          background #e60000
          @media screen and (max-width: 414px) {
            margin-top 20px
            height 30px
            width 100px
            line-height 30px
            font-size 14px
          }
    .success-dialog-box
      position absolute
      top 0
      z-index 100
      width 100%
      min-height 100vh
      display flex
      justify-content center
      align-items center
      background-color rgba(0,0,0,0.5)
      .dialog
        width 300px
        height 400px
        display flex
        flex-direction column
        justify-content center
        align-items center
        background #fff
        @media screen and (max-width: 414px) {
          width 80%
          height 200px
          }
          .content
            height 100px
            color #1a1a1a
            margin-top 10px
            font-size 30px
            margin-bottom 25px
            text-align center
            @media screen and (max-width: 414px) {
              font-size 25px
              padding 0 10px
              margin-bottom 0
            }
          .determine
            margin-bottom 5px
            width 200px
            height 54px
            line-height 54px
            text-align center
            color #fff
            cursor pointer
            background #e60000
            @media screen and (max-width: 414px) {
              margin-bottom 0
              height 30px
              width 100px
              line-height 30px
              font-size 14px
            }
</style>
