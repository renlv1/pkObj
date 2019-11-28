<template>
  <div class="profitLogDetail">
    <div class="profitLogDetail-web" >
      <v-header></v-header>
      <div class="wrap">
        <!--<div class="left-content">-->
          <!--<div class="account">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span class="account-title common-title">{{$t('achievement.text1')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next account-down" @click="$router.push({path: '/achievement'})">-->
              <!--<router-link class="choose" to="/achievement">{{$t('achievement.text2')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next">-->
              <!--<router-link to="/billingRecord" class="choose" >{{$t('achievement.text67')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="profit-order">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-2.svg"/><span class="account-title common-title">{{$t('achievement.text3')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next ongoing isNow" @click="$router.push({path: '/orderProcess', query: {order: 1}})">-->
              <!--<div class="choose" >{{$t('achievement.text4')}}</div>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next completed" @click="$router.push({path: '/orderProcess', query: {order: 2}})">-->
              <!--<div class="choose" >{{$t('achievement.text5')}}</div>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="profit">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">{{$t('achievement.text13')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next revenue-record" @click="$router.push({path: '/profitLog'})">-->
              <!--<router-link class="choose" to="/profitLog">{{$t('achievement.text6')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next accumulativeper" @click="$router.push({path: '/accumulativePerformance'})">-->
              <!--<router-link class="choose" to="/accumulativePerformance">{{$t('achievement.text7')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next accumulativeper" @click="$router.push({path: '/fundPerformance'})">-->
              <!--<router-link class="choose" to="/fundPerformance">{{$t('achievement.text01')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="bogeFund">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">{{$t('bogeFund.text1')}}</span>-->
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
          <div class="right-title"><span>{{$t('achievement.text13')}} </span><i> > </i><span> {{$t('achievement.text22')}}</span><i> > </i><span> {{$t('achievement.text27')}}</span></div>
          <div class="content-one">
            <div class="content-title">
              <div class="project-name"><img src="../../../assets/images/common/PK_30_20.svg"><div class="project-title">{{title}}</div></div><div class="order-number">{{$t('achievement.text28')}}{{orderId}}</div>
            </div>
            <div class="total-amount">
              <div class="amount">
                <div class="total-name">{{$t('achievement.text30')}}</div> <div class="total-number">{{betAmount | formattingMoney}}{{betCurrency}} </div>
                <div class="project-time">{{$t('achievement.text29')}}
                  <div class="time" v-show="endDate">{{endDate}}</div>
                </div>
                <div class="finished">{{$t('achievement.text31')}}</div>
              </div>
              <div class="result">
                <div class="result-title">{{$t('profit.text12')}}</div>
                <!--<span class="white"></span>-->
                <div class="title-dec">
                  <img :src="imgsrc" alt="">
                  <span class="white-title">{{name}}</span>
                </div>
                <div class="result-title">{{$t('achievement.text42')}}</div><div class="number">{{accountAmount | formattingMoney}}<span class="blue"> {{accountCurrency}}</span></div>
                <!--<div class="result-title">{{$t('achievement.text43')}}</div><div class="number">{{personalAmount | formattingMoney}}<span class="yellow"> SIE</span></div>-->
              </div>
            </div>
          </div>
          <div class="content-two">
            <div class="title">{{$t('achievement.text44')}}</div>
            <div class="table-wrap">
              <div class="table-title">
                <table class="tradingCenter-table">
                  <tr>
                    <td>{{$t('achievement.text34')}}</td>
                    <td>{{id}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('achievement.text3')}}</td>
                    <td>{{arbitrageId}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('achievement.text24')}}</td>
                    <td>{{maxTotalAmount | formattingMoney}}{{profitingCurrency}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('achievement.text35')}}</td>
                    <td>{{payAmount | formattingMoney}}{{payCurrency}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('achievement.text38')}}</td>
                    <td>{{updateTime}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="content-three">
            <div class="table-wrap">
              <div class="table-title">
                <table class="tradingCenter-table">
                 <tr>
                   <td></td>
                   <td>{{$t('profit.text18')}}</td>
                   <td>{{$t('profit.text19')}}</td>
                 </tr>
                  <tr>
                    <td>{{$t('profit.text20')}}</td>
                    <td>{{proObj.profitingAmount | formattingMoney}}{{profitingCurrency}}</td>
                    <td>{{proObj.profitingAmountSie | formattingMoney}}{{payCurrency}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('profit.text16')}}</td>
                    <td>{{proObj.personalAmountUsd | formattingMoney}}{{profitingCurrency}}</td>
                    <td>{{personalAmount | formattingMoney}}{{payCurrency}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('profit.text22')}}</td>
                    <td>{{proObj.fundAmountUsd | formattingMoney}}{{profitingCurrency}}</td>
                    <td>{{proObj.fundAmount | formattingMoney}}{{payCurrency}}</td>
                  </tr>
                  <tr>
                    <td>{{$t('profit.text23')}}</td>
                    <td>{{proObj.groupAmountUsd | formattingMoney}}{{profitingCurrency}}</td>
                    <td>{{proObj.groupAmount | formattingMoney}}{{payCurrency}}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <!--手机结构-->
    <div class="profitLogDetail-mobile">
      <div class="head">
        <div class="back" @click="$router.go(-1)"></div>
        <div class="title">{{$t('achievement.text33')}}</div>
      </div>
      <div class="de-c">
        <div class="detail-mobile-content">
        <div class="announcement">
          <div class="announcement-top">
            <p class="top-title">{{title}}</p>
            <p class="top-num">
              {{$t('achievement.text28')}} {{orderId}}</p>
          </div>
          <div class="remaining">
            <div class="betting-text">{{$t('achievement.text30')}}</div>
            <div class="betting-status">{{$t('achievement.text39')}}</div>
          </div>
          <div class="target">
            <span class="target-text">{{$t('achievement.text40')}}</span>
            <span class="target-value">{{betAmount | formattingMoney}}{{betCurrency}}</span>
          </div>
          <div class="end-time">
            <span class="time-text">{{$t('achievement.text41')}}</span>
            <span class="time-value">{{endDate}}</span>
          </div>
        </div>
        <div class="result">
          <div class="result-title">{{$t('profit.text12')}}</div>
          <div class="team-wrapper">
            <div class="team-icon">
              <img :src="imgsrc"/>
            </div>
            <div class="team-name">{{name}}</div>
          </div>
          <div class="all-get">
            <span class="get-title">{{$t('achievement.text42')}}</span>
            <span class="value">{{accountAmount | formattingMoney}} <span style="font-size: 16px">{{accountCurrency}}</span></span>
          </div>
          <!--<div class="personal-get">-->
            <!--<span class="personal-text">{{$t('achievement.text43')}}</span>-->
            <!--<span class="personal-value">{{personalAmount | formattingMoney}} <span style="color: #ffc933; font-size: 16px">SIE</span></span>-->
          <!--</div>-->
        </div>
        <!--获利收益明细-->
        <div class="plan">
          <div class="plan-text">{{$t('achievement.text44')}}</div>
          <div class="plan-list">
            <ul>
              <li>
                <div class="common-title">
                  <div class="left">{{$t('achievement.text34')}}</div>
                  <div class="right">{{id}}</div>
                </div>
                <div class="common-title">
                  <div class="odds-text">{{$t('achievement.text3')}}</div>
                  <div class="value">{{arbitrageId}}</div>
                </div>
                <div class="common-title">
                  <span class="expect-text">{{$t('achievement.text24')}}</span>
                  <span class="expect-value">{{maxTotalAmount | formattingMoney}} <span>{{profitingCurrency}}</span></span>
                </div>
                <div class="common-title">
                  <span class="expect-text">{{$t('achievement.text35')}}</span>
                  <span class="expect-value">{{payAmount | formattingMoney}} <span>{{payCurrency}}</span></span>
                </div>
                <div class="common-title">
                  <span class="expect-text">{{$t('achievement.text38')}}</span>
                  <span class="expect-value">{{updateTime}}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--获利总金额-->
        <div class="plan">
          <div class="plan-text">{{$t('profit.text20')}}</div>
          <div class="plan-list">
            <ul>
              <li>
                <div class="common-title">
                  <div class="left">{{$t('profit.text18')}}</div>
                  <div class="right">{{proObj.profitingAmount | formattingMoney}}{{profitingCurrency}}</div>
                </div>
                <div class="common-title">
                  <div class="odds-text">{{$t('profit.text19')}}</div>
                  <div class="value">{{proObj.profitingAmountSie | formattingMoney}}{{payCurrency}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--个人到账部分-->
        <div class="plan">
          <div class="plan-text">{{$t('profit.text16')}}</div>
          <div class="plan-list">
            <ul>
              <li>
                <div class="common-title">
                  <div class="left">{{$t('profit.text18')}}</div>
                  <div class="right">{{proObj.personalAmountUsd | formattingMoney}}{{profitingCurrency}}</div>
                </div>
                <div class="common-title">
                  <div class="odds-text">{{$t('profit.text19')}}</div>
                  <div class="value">{{personalAmount | formattingMoney}}{{payCurrency}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--纳入基金部分-->
        <div class="plan">
          <div class="plan-text">{{$t('profit.text22')}}</div>
          <div class="plan-list">
            <ul>
              <li>
                <div class="common-title">
                  <div class="left">{{$t('profit.text18')}}</div>
                  <div class="right">{{proObj.fundAmountUsd | formattingMoney}}{{profitingCurrency}}</div>
                </div>
                <div class="common-title">
                  <div class="odds-text">{{$t('profit.text19')}}</div>
                  <div class="value">{{proObj.fundAmount | formattingMoney}}{{payCurrency}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!--业绩结算部分-->
        <div class="plan">
          <div class="plan-text">{{$t('profit.text23')}}</div>
          <div class="plan-list">
            <ul>
              <li>
                <div class="common-title">
                  <div class="left">{{$t('profit.text18')}}</div>
                  <div class="right">{{proObj.groupAmountUsd | formattingMoney}}{{profitingCurrency}}</div>
                </div>
                <div class="common-title">
                  <div class="odds-text">{{$t('profit.text19')}}</div>
                  <div class="value">{{proObj.groupAmount | formattingMoney}}{{payCurrency}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      matchResult: [
        {img: require('../../../assets/images/common/red-34-40.svg')},
        {img: require('../../../assets/images/common/bisai-36-20.svg')},
        {img: require('../../../assets/images/common/blue-34-40.svg')}
      ],
      imgsrc: '',
      active: false,
      id: '', // 奖励编号
      arbitrageId: '', // 套利订单
      endDate: '', // 截止时间
      betCurrency: '', // 投注货币
      betAmount: '', // 套利投注总金额
      updateTime: '',
      payAmount: '', // 支付金额
      payCurrency: '', // 支付币种
      profitingAmount: '', // 获利金额
      profitingCurrency: '', // 获利币种
      accountAmount: '', // 总获利
      accountCurrency: '',
      personalAmount: '', // 个人获利
      title: '', // 项目名称
      maxTotalAmount: '', // 总金额
      alreadyAmount: '', // 已经到账金额
      currency: '',
      name: '', // 胜方
      orderId: '',
      createTime: '',
      proObj: Object,
      fundAmount: '', // 基金
      groupAmount: '' // 业绩
    }
  },
  components: {
    vHeader: resolve => require(['../../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../../components/footer.vue'], resolve)
  },
  mounted () {
    this.profitLogInfo()
    // this.login()
    this.proObj = JSON.parse(this.$route.query.proObj)
  },
  methods: {
    // login () {
    //   let url = `${this.$api}/user/userlogin?username=super123&password=123123xX`
    //   this.$http.post(url).then((res) => {
    //     if (res.data.success) {
    //       this.profitLogInfo()
    //       // this.getUserBalance()
    //     }
    //   }).catch(() => {
    //   })
    // },
    profitLogInfo () {
      this.$http.post(`${this.$api}/bet/queryIncomeDetail?betid=${this.$route.query.id}`).then((res) => {
        if (res.data.success) {
          // console.log(res.data)
          let ret = res.data.data
          this.id = ret.id
          this.orderId = ret.arbitrage.id
          this.arbitrageId = ret.arbitrageId
          this.endDate = this.$changeDate(ret.arbitrage.endTime, '/', 1)
          this.betCurrency = ret.betCurrency
          this.betAmount = (ret.arbitrage.alreadyAmount).toFixed(4)
          this.payAmount = this.proObj.payTotal
          this.payCurrency = ret.payCurrency
          this.profitingAmount = this.proObj.pro
          this.profitingCurrency = ret.profitingCurrency
          this.accountAmount = this.proObj.accTotal
          this.fundAmount = ret.fundAmount
          this.groupAmount = ret.groupAmount
          ret.arbitrage.list.forEach((val, index) => {
            if (val.result === 2) {
              if (window.localStorage.Qlang === 'CN') {
                this.name = val.name
              } else if (window.localStorage.Qlang === 'EN') {
                this.name = val.link.split(',')[0]
              }
              this.imgsrc = this.matchResult[index].img
            }
          })
          this.accountCurrency = ret.accountCurrency
          this.personalAmount = this.proObj.personAmount
          if (window.localStorage.Qlang === 'CN') {
            this.title = ret.arbitrage.title
          } else if (window.localStorage.Qlang === 'EN') {
            this.title = ret.remark.split(',')[0]
          }
          this.maxTotalAmount = this.proObj.total
          this.alreadyAmount = this.proObj.accTotal
          this.currency = ret.arbitrage.currency
          this.updateTime = this.$changeDate(ret.updateTime, '/', 1)
          this.createTime = this.$changeDate(ret.createTime, '/', 1)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  *{
    padding: 0;
    margin: 0;
  }
  .profitLogDetail
    /*background #001926*/
    .profitLogDetail-web
      background-image url("../../../assets/images/common/bg_500_500.svg")
      background-repeat:repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-repeat: repeat;
      background-size: 500px 500px;
      background-position: 50% 50%;
      display block
      @media screen and (max-width: 1024px)
        display none
      .wrap
        width 960px
        margin 0 auto
        padding-top 80px
        display flex
        flex-direction row
        @media screen and (max-width: 1300px){
          width 100%
          display flex
          flex-direction row
        }
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          height 800px
          background-color #f2f2f2
          @media screen and (max-width: 1300px){
            height 600px
            min-width 200px
          }
          /*.common-icon*/
            /*display inline-block*/
            /*width 30px*/
            /*height 30px*/
            /*margin-right 20px*/
            /*vertical-align middle*/
          .common-title
            vertical-align top
            font-size 20px
            color #1a1a1a
            height  50px
            font-weight bold
            @media screen and (max-width: 768px){
              font-size 16px
            }
          .account-down
            display flex
            justify-content space-between
          .go-next
            padding-left 40px
            cursor pointer
            height 50px
            width 100%
            line-height 50px
            display flex
            padding-right 20px
            .turn-next
              width 25px
              height 8px
              display none
              img
                width 100%
            &:hover
              background-color #f2f4f5
              color #e60000
              .turn-next
                display block
              .choose
                color #e60000 !important
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
            .isNow
              margin-bottom 30px
            a
              font-size 16px
              color #1a1a1a
              @media screen and (max-width: 768px){
                font-size 16px
              }
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
          .bogeFund
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
            .revenue-record
              a
                color  #e60000
              .turn-next
                display block
          @media screen and (max-width: 1300px){
            display flex
            flex-direction row
            height auto
          }
        /*右边样式*/
        .right-content
          width 920px
          margin-top 50px
          @media screen and (max-width: 1300px){
            width 100%
            display flex
            flex-direction column
            padding 0 30px
          }
          .right-title
            color #1a1a1a
            font-size 16px
            margin-top 20px
            margin-bottom  40px
          .content-one
            width 100%
            height 370px
            background-color #ffffff
            @media screen and (max-width: 900px){
              height auto
            align-items center
            }
            .content-title
              display flex
              justify-content space-between
              align-items center
              height 60px
              margin-left 40px
              margin-right 40px
              @media screen and (max-width: 900px){
                width 100%
                display flex
                flex-direction column
                align-items center
                height  120px
                padding 20px
                margin-left 0
                margin-right 0
              }
              .order-number
                font-size 18px
                color #232044
                @media screen and (max-width: 900px){
                  font-size 16px
                }
              .project-name
                font-size 20px
                color #1a1a1a
                font-weight bold
                display flex
                justify-content space-between
                @media screen and (max-width: 900px){
                  font-size 18px
                }
                img
                  width 38px
                  height 25px
              .project-time
                font-size 18px
                color #cccccc
                @media screen and (max-width: 900px){
                  font-size 16px
                }
            .total-amount
              margin-left 40px
              margin-right 40px
              display flex
              flex-direction row
              @media screen and (max-width: 900px){
                width 100%
                display flex
                flex-direction column
                align-items center
                margin-left 0px
                margin-right 0px
              }
              .project-time
                margin-top 30px
                font-size 16px
                color #232044
                @media screen and (max-width: 950px){
                font-size 16px
                }
                .time
                  color #1a1a1a
                  margin-top 18px
                  margin-bottom 38px
              .amount
                margin-top 40px
                width 50%
                @media screen and (max-width: 900px){
                  margin-top 30px
                }
                .total-name
                  font-size 16px
                  color #232044
                  @media screen and (max-width: 900px){
                    font-size 16px
                  }
                .total-number
                  margin-top 18px
                  font-size 28px
                  color #1a1a1a
                  font-weight bold
                  @media screen and (max-width: 900px){
                    margin-top 10px
                    font-size 18px
                  }
                .finished
                  margin-top 30px
                  color #1a1a1a
                  font-size 16px
                  @media screen and (max-width: 900px){
                    margin-top 10px
                  }
              .result
                margin-left 100px
                .result-title
                  font-size 16px
                  color #232044
                  margin-top 20px
                  margin-bottom 10px
                .title-dec
                  font-size 16px
                  color #e60000
                  margin-bottom 20px
                  display flex
                  flex-direction row
                  img
                    width 45px
                    height 30px
                  .white
                    display inline-block
                    width 16px
                    height 16px
                    background-color #ffffff
                    margin-right 10px
                  .white-title
                    font-size 24px
                    color #1a1a1a
                    font-weight bold
                .number
                  font-size 24px
                  color #1a1a1a
                  font-weight bold
                  margin-bottom 40px
                .blue
                  font-size 24px
                  color #1a1a1a
                  font-weight bold
                .yellow
                  color #ffc933
          .content-two
            margin-top 60px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              font-size 18px
              color #1a1a1a
              font-weight bold
              margin-bottom 20px
            .table-wrap
              width 100%
              padding-bottom 50px
              .tradingCenter-table tr:nth-child(odd)
                background-color #ffffff
              .tradingCenter-table
                width 100%
                tr
                  background-color #f5f6f7
                  height 50px
                  font-size 16px
                  color #1a1a1a
                  display flex
                  justify-content space-around
                  align-items center
                  td
                    flex 1
                    /*width 50%*/
                    /*text-align center*/
                    margin-left 30px
          .content-three
            margin-top 10px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              font-size 18px
              color #ffffff
              margin-bottom 20px
            .table-wrap
              width 100%
              padding-bottom 50px
              .tradingCenter-table tr:nth-child(odd)
                background-color #ffffff
              .tradingCenter-table
                width 100%
                tr
                  height 50px
                  font-size 16px
                  color #1a1a1a
                  display flex
                  justify-content center
                  align-items center
                  td
                    flex 1
                    /*width 33.3%*/
                    text-align center
  //手机端样式
  .profitLogDetail-mobile
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
        background-image url("../../../assets/images/common/row-34-24_1.svg")
        background-position right
        background-repeat no-repeat
        width 30px
        height 20px
      .title
        font-size 20px
        font-weight bold
        color #1a1a1a
    .de-c
      position: fixed
      width 100%
      top: 60px
      bottom: 0
      overflow: auto
      background-color: #f8f9fa;
    .detail-mobile-content
      color #fff
      padding: 10px 20px 30px
      .announcement
        display flex
        flex-direction column
        justify-content space-between
        padding 20px 15px 10px 15px
        width 100%
        height 252px
        background #ffffff
        .announcement-top
          display flex
          flex-direction row
          justify-content space-between
          font-size 16px
          .top-title
            color #1a1a1a
            font-weight bold
            margin-left 0
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
            margin-top 5px
            font-size 22px
            color #1a1a1a
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
        .end-time
          display flex
          flex-direction row
          justify-content space-between
          .time-text
            color #1a1a1a
            font-size 16px
          .time-value
            color #1a1a1a
            font-size 16px
      .result
        display flex
        flex-direction column
        justify-content space-between
        margin-top 10px
        padding 10px 15px
        background #ffffff
        width 100%
        height 180px
        margin-bottom  10px
        .result-title
          font-size 16px
          color #1a1a1a
          font-weight bold
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
            color #1a1a1a
        .all-get
          display flex
          flex-direction row
          justify-content space-between
          .get-title
            font-size 16px
            color #1a1a1a
          .value
            font-size 16px
            color #1a1a1a
            font-weight bold
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
        margin-bottom 100px
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
        background #ffffff
        margin-bottom 10px
        .plan-text
          font-size 16px
          color #1a1a1a
          font-weight bold
        .plan-list
          padding-top 15px
          ul
            li
              display flex
              flex-direction column
              justify-content space-between
              .common-title
                font-size 16px
                color #1a1a1a
                height 40px
                display flex
                flex-direction row
                justify-content space-between
              .odd
                display flex
                flex-direction row
                justify-content space-between
              .expect
                display flex
                flex-direction row
                justify-content space-between
      .total-profit
        height auto
        width 100%
        padding 10px 15px
        background #ffffff
        margin-bottom 10px
        .plan-text
          font-size 16px
          color #1a1a1a
          font-weight bold
</style>
