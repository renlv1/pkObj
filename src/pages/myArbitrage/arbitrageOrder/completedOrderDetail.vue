<template>
  <div class="completedOrderDetail">
    <div class="completedOrderDetail-web">
      <v-header></v-header>
      <div class="wrap">
        <!--<div class="left-content">-->
          <!--<div class="account">-->
            <!--<div class="account-up">-->
             <!--<span class="account-title common-title">{{$t('achievement.text1')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next" @click="$router.push({path: '/achievement'})">-->
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
              <!--<span class="account-title common-title">{{$t('achievement.text3')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next ongoing isNow" @click="$router.push({path: '/orderProcess', query: {order: 1}})">-->
              <!--<div class="choose" >{{$t('achievement.text4')}}</div>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next completed " @click="$router.push({path: '/orderProcess', query: {order: 2}})">-->
              <!--<div class="choose isCompleted" >{{$t('achievement.text5')}}</div>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="profit">-->
            <!--<div class="account-up">-->
              <!--<span class="account-title common-title">{{$t('achievement.text13')}}</span>-->
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
          <div class="right-title"><span>{{$t('achievement.text3')}} </span><i> > </i><span> {{$t('achievement.text5')}}</span><i> > </i><span> {{$t('achievement.text27')}}</span></div>
          <div class="content-one">
            <div class="content-title">
              <div class="project-name"><img src="../../../assets/images/common/PK_30_20.svg"><div class="project-title">{{title}}</div></div><div class="order-number">{{$t('achievement.text28')}}{{idProdeuce}}</div>
            </div>
            <div class="total-amount">
              <div class="amount">
                <div class="total-name">{{$t('profit.text13')}}</div> <div class="total-number"> {{maxTotalAmount | formattingMoney}}{{currencyUSD}}</div>
                <div class="project-time" v-show="bonusesStatus && bonusesStatus !==7">{{$t('achievement.text29')}}
                  <div class="time" v-show="endTime">{{$changeDate(endTime, '/', 1)}}</div>
                </div>
                <div class="finished" v-show="bonusesStatus && bonusesStatus !==7">{{$t('achievement.text31')}}</div>
                <div class="finished" v-show="bonusesStatus && bonusesStatus ===7" style="color: #ffa800;margin-top: 96px">{{$t('achievement.text68')}}</div>
              </div>
              <div class="result">
                <div class="result-title">{{$t('profit.text12')}}</div>
                <!--<span class="white"></span>-->
                <div class="title-dec" v-show=" bonusesStatus && bonusesStatus !==7">
                  <img :src="imgsrc" alt="">
                  <span class="white-title">{{name}}</span>
                </div>
                <div class="title-dec" v-show="bonusesStatus && bonusesStatus ===7">
                  <img src="../../../assets/images/common/stop.png"/>
                  <span class="white-title" style="margin-left: 10px">{{$t('achievement.text69')}}</span>
                </div>
                <div class="result-title" v-show="bonusesStatus && bonusesStatus !==7">{{$t('profit.text14')}}</div><div class="number" v-show="bonusesStatus && bonusesStatus !==7">{{Number(accountAmount)| formattingMoney}}<span class="blue"> {{betpaycurrency}}</span></div>
                <div class="result-title" v-show="bonusesStatus && bonusesStatus ===7" style="margin-top: 96px">{{$t('achievement.text70')}}</div><div class="number" v-show="bonusesStatus && bonusesStatus ===7">{{personAmountUsd | formattingMoney}}<span class="blue"> {{betpaycurrency}}</span></div>
                <div class="result-title" v-show="bonusesStatus && bonusesStatus !==7">{{$t('achievement.text43')}}</div><div class="personal-number" v-show="bonusesStatus && bonusesStatus !==7">{{personalAmount | formattingMoney}}<span class="yellow"> {{betpaycurrency}}</span></div>
              </div>
            </div>
          </div>
          <!--套利方案-->
          <div class="content-two" v-show="bonusesStatus && bonusesStatus !==7">
            <div class="title">{{$t('profit.text10')}}</div>
            <div class="table-wrap">
              <div class="table-title">
                <div class="white-title">{{$t('achievement.text59')}}</div>
                <div style="width: 200px">{{$t('achievement.text60')}}</div>
                <div style="width: 340px">{{$t('achievement.text61')}}</div>
              </div>
              <ul class="table-content">
                <li v-for="(item,index) in arbitrageList" :key="item.index">
                  <img :src="matchResult[index].img" class="white" style="width: 36px;height: 20px;margin-right:24px;">
                  <div class="num" v-if="flagLag">{{item.name}}</div>
                  <div class="num" v-else-if="item.link">{{item.link.split(',')[0]}}</div>
                  <div class="num" v-else></div>
                  <div class="product" style="width: 200px">{{item.odds}}</div>
                  <div class="investment" style="width: 340px">{{item.profit | formattingMoney}} {{item.currency}}</div>
                </li>
              </ul>
              <!--
              <div class="table-content" v-for="(item,index) in arbitrageList" :key="index">
                <div class="white-title"> <span class="white"></span>1</div>
                <div style="width: 160px">2</div>
                <div>3</div>
              </div>
              -->
            </div>
          </div>
          <!--预计获利-->
          <!--<div class="expected-profit">-->
            <!--<div class="title">{{$t('profit.text15')}}</div>-->
            <!--<div class="table-wrap">-->
              <!--<div class="table-title">-->
                <!--<div>{{$t('profit.text4')}}</div>-->
                <!--<div>{{$t('profit.text5')}}</div>-->
                <!--<div>{{$t('profit.text6')}}</div>-->
                <!--<div>{{$t('profit.text7')}}</div>-->
              <!--</div>-->
              <!--<ul class="table-content">-->
                <!--<li v-if="this.arbitrageList">-->
                  <!--<div><span> {{personAmountUsd | formattingMoney}} </span>USD</div>-->
                  <!--<div :class="{'winActive':isActive === 0}">{{slecleWin(1)}}</div>-->
                  <!--<div :class="{'winActive':isActive === 2}">{{slecleWin(2)}}</div>-->
                  <!--<div :class="{'winActive':isActive === 1}">{{slecleWin(3)}}</div>-->
                  <!--&lt;!&ndash;<div>{{earnProfit | formattingMoney}} USD</div>&ndash;&gt;-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
          <!--个人预计获利-->
          <div class="content-four" v-show=" bonusesStatus && bonusesStatus !==7">
            <div class="title">{{$t('profit.text11')}}</div>
            <div class="table-wrap">
              <div class="table-title">
                <div class="company">{{$t('arbitrageDetail.mobile.text12')}}</div>
                <div class="odds">{{$t('nowOrder.text1')}}</div>
                <div class="bet-money">{{$t('achievement.text16')}}</div>
                <div class="rate">{{$t('nowOrder.text4')}} (USD/SIE)</div>
                <div class="pay-money">{{$t('achievement.text19')}}</div>
              </div>
              <div class="table-content" v-show="item.result === 2"  v-for="(item,index) in arbitrageList" :key="index">
                <div class="companyName">{{item.companyName}}</div>
                <div  v-if="flagLag">{{item.name}}</div>
                <div  v-else-if="!flagLag && item.link">{{item.link.split(',')[0]}}</div>
                <div  v-else></div>
                <div>{{item.sumbetAmount | formattingMoney}} {{item.currency}}</div>
                <div class="close-rate">{{closeExchangeRate}} </div>
                <div > {{getRandom(index) | formattingMoney}} <span style="color: #ffc933">{{item.currency}}</span></div>
              </div>
            </div>
          </div>
          <!--投注记录-->
          <div class="content-three">
            <div class="title">{{$t('achievement.text49')}}</div>
            <div class="table-wrap">
              <div class="cumulativeBet">{{$t('profit.text8')}}<span> {{personAmountUsd | formattingMoney}} </span><span style="color: #e60000; font-size: 16px"> {{betpaycurrency}}</span></div>
              <div class="table-title">
                <div class="number">{{$t('achievement.text62')}}</div>
                <div class="bet-time">{{$t('achievement.text63')}}</div>
                <div class="bet-money">{{$t('achievement.text16')}}</div>
                <div class="rate">{{$t('nowOrder.text3')}}(USD/SIE)</div>
                <div class="pay-money">{{$t('arbitrageDetail.web.text6')}}</div>
                <!--<div>{{$t('achievement.text64')}}</div>-->
              </div>
              <ul class="table-content">
                <li v-show="item.status === 1" v-for="(item,index) in betList" :key="index">
                  <div class="bet-number">{{item.id}}</div>
                  <div class="time">{{$changeDate(item.createTime, '/', 1)}}</div>
                  <div class="amount">{{item.betAmount| formattingMoney}}{{item.betCurrency}}</div>
                  <div class="exchange-rate">{{item.betExchangeRate}}</div>
                  <div class="payment">{{item.payAmount| formattingMoney}}{{item.payCurrency}}</div>
                  <!--<div>{{Number(getCumulative(index)).toFixed(4)}}{{item.betCurrency}}</div>-->
                </li>
              </ul>
            </div>
          </div>
          <!--<v-turnPage class="pagesList" :propsPage="pagesTotal" @completedTrunPage="parentTurnPage"></v-turnPage>-->
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <div class="detail-mobile" >
      <div class="head">
        <div class="back" @click="$router.push({path:'/account/orderProcess', query: {order: 2}})"></div>
        <div class="title">{{$t('achievement.text50')}}</div>
      </div>
      <div class="de-c">
        <div class="detail-mobile-content">
          <div class="announcement">
            <div class="announcement-top">
              <p class="top-title">{{title}}</p>
              <p class="top-num">{{$t('achievement.text28')}} {{idProdeuce}}</p>
            </div>
            <div class="remaining">
              <!--<div class="betting-text">{{$t('profit.text13')}}</div>-->
              <div class="betting-status" v-show="bonusesStatus && bonusesStatus !==7">{{$t('achievement.text39')}}</div>
              <div class="betting-status" v-show="bonusesStatus && bonusesStatus ===7">{{$t('achievement.text68')}}</div>
            </div>
            <div class="target">
              <span class="target-text">{{$t('profit.text13')}}</span>
              <span class="target-value">{{maxTotalAmount| formattingMoney}} {{currencyUSD}}</span>
            </div>
            <div class="end-time" v-show="bonusesStatus && bonusesStatus !==7">
              <span class="time-text">{{$t('achievement.text41')}}</span>
              <span class="time-value" v-show="endTime">{{$changeDate(endTime, '/', 1)}}</span>
            </div>
          </div>
          <div class="betting" @click="betRecord">
            <div class="betting-text">{{$t('betting.mobile.text6')}}</div>
            <div class="value-wrapper">
              <span class="value">{{personAmountUsd | formattingMoney}} <span style="color: #e60000; font-size: 16px">{{betpaycurrency}}</span></span>
              <span class="icon">
                <img src="../../../assets/images/common/right-34-24.svg"/>
              </span>
            </div>
          </div>
          <div class="result">
            <div class="result-title">{{$t('profit.text12')}}</div>
            <div class="team-wrapper">
              <div class="team-icon" v-show="bonusesStatus && bonusesStatus !==7">
                <img :src="imgsrc"/>
              </div>
              <div class="team-name" v-show="bonusesStatus && bonusesStatus !==7">{{name}}</div>
              <div class="team-icon" v-show="bonusesStatus && bonusesStatus ===7">
                <img src="../../../assets/images/common/stop.png"/>
              </div>
              <div class="team-name" v-show="bonusesStatus && bonusesStatus ===7">{{$t('achievement.text69')}}</div>
            </div>
            <div class="all-get" v-show="bonusesStatus && bonusesStatus !==7">
              <span class="get-title">{{$t('profit.text14')}}</span>
              <span class="value">{{Number(accountAmount)| formattingMoney}}<span style=" font-size: 16px">{{betpaycurrency}}</span></span>
            </div>
            <div class="all-get" v-show="bonusesStatus && bonusesStatus ===7">
              <span class="get-title">{{$t('achievement.text70')}}</span>
              <span class="value">{{personAmountUsd | formattingMoney}}<span style=" font-size: 16px">{{betpaycurrency}}</span></span>
            </div>
            <div class="personal-get" v-show="bonusesStatus && bonusesStatus !==7">
              <span class="personal-text">{{$t('achievement.text43')}}</span>
              <span class="personal-value">{{personalAmount | formattingMoney}}<span style=" font-size: 16px">{{betpaycurrency}}</span></span>
            </div>
            <div class="exchange-rate" v-show="bonusesStatus && bonusesStatus !==7">
              <span class="close-rate">SIE {{$t('nowOrder.text3')}}</span>
              <span class="rate-price">{{closeExchangeRate}}</span>
            </div>
          </div>
          <div class="game" v-show="bonusesStatus && bonusesStatus !==7">
            <div class="game-top">
              <span class="top-title">{{$t('arbitrageDetail.mobile.text16')}}</span>
              <span class="top-date">{{$changeDate(competitionTime, '/', 1)}}</span>
            </div>
            <div class="game-team-group">
              <div class="mark-wrapper">
                <div class="mark">
                  <img :src="competitionLogo"/>
                </div>
                <div class="game-event">{{competitionName}}</div>
              </div>
              <div class="game-team">
                <div class="one-team">
                  <div class="one-team-log">
                    <img :src="hostTeamLogo"/>
                  </div>
                  <div class="one-team-name">{{hostTeamName}}</div>
                </div>
                <div class="vs">
                  <img src="../../../assets/images/arbitrageDetial/VS.svg"/>
                </div>
                <span class="two-team">
                  <div class="two-team-log">
                     <img :src="visitingTeamLogo"/>
                  </div>
                  <div class="two-team-name">{{visitingTeamName}}</div>
                </span>
              </div>
            </div>
          </div>
          <div class="plan" v-show="bonusesStatus && bonusesStatus !==7">
            <!--<div class="plan-text">{{item.companyName}}</div>-->
            <div class="plan-text">{{$t('profit.text10')}}</div>
            <div class="plan-list" v-for="(item,index) in arbitrageList" :key="index">
              <ul>
                <li>
                  <div class="company">{{item.companyName}}</div>
                  <div class="odd">
                    <div class="odds-text" v-if="flagLag">{{item.name}}</div>
                    <div class="odds-text" v-if="!flagLag && item.link">{{item.link.split(',')[0]}}</div>
                    <div class="value">{{item.odds}}</div>
                  </div>
                  <div class="expect">
                    <span class="expect-text">{{$t('achievement.text61')}}</span>
                    <span class="expect-value">{{expectProfit(index) | formattingMoney}} <span style="font-size: 16px">{{item.currency}}</span></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--<div class="exceptProfit">-->
            <!--<div class="profit-content">-->
              <!--<ul>-->
                <!--<li v-if="this.arbitrageList">-->
                  <!--<div class="profit-title">{{$t('profit.text15')}}</div>-->
                  <!--<div class="total-profit">-->
                    <!--<div class="odds-text">{{$t('profit.text4')}}</div>-->
                    <!--<div class="value">{{personAmountUsd | formattingMoney}} USD</div>-->
                  <!--</div>-->
                  <!--<div class="home">-->
                    <!--<span class="homeWin">{{$t('profit.text5')}}</span>-->
                    <!--<span class="profitMoney" :class="{'winActive':isActive === 0}">{{slecleWin(1)}} </span>-->
                  <!--</div>-->
                  <!--<div class="visit">-->
                    <!--<span class="visitWin">{{$t('profit.text6')}}</span>-->
                    <!--<span class="profitMoney" :class="{'winActive':isActive === 2}">{{slecleWin(2)}} </span>-->
                  <!--</div>-->
                  <!--<div class="draw">-->
                    <!--<span class="drawWin">{{$t('profit.text7')}}</span>-->
                    <!--<span class="profitMoney" :class="{'winActive':isActive === 1}">{{slecleWin(3)}} </span>-->
                  <!--</div>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
          <!--个人预计获利-->
          <div class="person-profit" v-show="bonusesStatus && bonusesStatus !==7">
            <div class="plan-text">{{$t('profit.text11')}}</div>
            <div class="plan" v-show="item.result === 2" v-for="(item,index) in arbitrageList" :key="index">
              <div class="plan-list">
                <ul>
                  <li>
                    <div class="company" v-if="flagLag">{{item.name}}</div>
                    <div class="company" v-if="!flagLag && item.link">{{item.link.split(',')[0]}}</div>
                    <div class="odd">
                      <div class="odds-text">{{$t('achievement.text16')}}</div>
                      <div class="value">{{item.sumbetAmount | formattingMoney}} {{item.currency}}</div>
                    </div>
                    <div class="expect">
                      <span class="expect-text">{{$t('achievement.text19')}}</span>
                      <span class="expect-value"> {{getRandom(index) | formattingMoney}} <span style=" font-size: 16px;color: #ffc933">{{item.currency}}</span></span>
                    </div>
                  </li>
                </ul>
              </div>
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
      flagLag: true, // 判断页面的语言类型默认是中文
      pAmountRandomzhu: '', // 主场
      pAmountRandomhe: '', // 平局
      pAmountRandomke: '', // 客场
      imgsrc: '',
      isActive: -1,
      active: false,
      arbitrageList: '', // 套利数据
      isDialog: false,
      id: this.$route.query.id,
      title: '', // 项目名称
      idProdeuce: '', // 订单编号
      accountAmount: '', // 总获利
      personalAmount: '', // 个人获利
      endTime: '', // 截至时间
      name: '', // 套利结果
      betList: '', // 投注记录
      cumulativeArr: '', // 投注金额数组
      maxTotalAmount: '', // 套利投资总金额
      createTime: '',
      totalAccount: 0,
      currency: '', // 币种
      currencyUSD: '',
      betpaycurrency: '',
      competitionName: '', // 世界杯
      hostTeamName: '', // 主场
      visitingTeamName: '', // 客场
      competitionLogo: '',
      hostTeamLogo: '',
      visitingTeamLogo: '',
      nowPage: 1, // 当前页数
      pagesTotal: 1, // 订单记录总页数
      earnProfit: '', // 平局获利,
      personAmountUsd: '', // 累计投注
      competitionTime: '',
      closeExchangeRate: '', // 结算汇率
      bonusesStatus: '' // 判断是否已退款
    }
  },
  created () {
    this.getBlance()
    // this.getFinishedLog(1)
    this._chooseLag()
  },
  components: {
    vHeader: resolve => require(['../../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../../components/footer.vue'], resolve)
    // vTurnPage: resolve => require(['../../../components/turnPage.vue'], resolve)
  },
  methods: {
    _chooseLag () { // 判断当前网页的语言类型
      if (window.localStorage.Qlang === 'CN') {
        this.flagLag = true
      } else if (window.localStorage.Qlang === 'EN') {
        this.flagLag = !this.flagLag
      }
    },
    // 盘口预计获利
    expectProfit (index) {
      if (index === 0) {
        return this.arbitrageList[0].profit
      } else if (index === 1) {
        return this.arbitrageList[1].profit
      } else if (index === 2) {
        return this.arbitrageList[2].profit
      }
    },
    getRandom (num) {
      if (num === 0) {
        return this.pAmountRandomzhu
      } else if (num === 1) {
        return this.pAmountRandomhe
      } else if (num === 2) {
        return this.pAmountRandomke
      }
    },
    fixedNum (num) {
      return num.toFixed(4)
    },
    slecleWin (n) {
      if (n === 1) {
        if (this.arbitrageList[0].result === 2) {
          // console.log(this.earnProfit)
          return Number(this.pAmountRandomzhu).toFixed(4) + 'USD'
        } else {
          return '-'
        }
      } else if (n === 2) {
        if (this.arbitrageList[2].result === 2) {
          return Number(this.pAmountRandomke).toFixed(4) + 'USD'
        } else {
          return '-'
        }
      } else if (n === 3) {
        if (this.arbitrageList[1].result === 2) {
          return Number(this.pAmountRandomhe).toFixed(4) + 'USD'
        } else {
          return '-'
        }
      }
    },
    // 用户信息
    getBlance () {
      this.$http.post(`${this.$api}/user/balance`).then((res) => {
        if (res.data.success === true) {
          this.getFinishedLog()
          this.currency = res.data.data.userAccount.SIE.currency
          this.betpaycurrency = res.data.mapData.betpaycurrency
        }
      })
    },
    getCumulative (index) {
      var sum = 0
      for (let i = this.betList.length - 1; i > index - 1; i--) {
        sum += this.betList[i].betAmount
      }
      return sum
    },
    // 获取已完成数据
    getFinishedLog () {
      // console.log(this.$route.query.id)
      let url = `${this.$api}/bet/queryBetDetail?arbitrageid=${this.$route.query.id}`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          // console.log(res.data)
          this.accountAmount = res.data.data.getAmountStr
          // console.log(this.accountAmount)
          this.personalAmount = res.data.data.personalAmountStr
          // let betList = res.data.data.betlist
          let ret = res.data.data
          this.bonusesStatus = ret.bonusesStatus
          this.arbitrageList = ret.list // 套利方案列表
          this.betList = ret.betlist // 投注记录
          this.currencyUSD = ret.currency
          this.closeExchangeRate = ret.betlist[0].closeExchangeRate
          this.competitionTime = ret.competitionTime
          this.arbitrageList.forEach((val, index) => {
            if (val.result === 2) {
              this.isActive = index
            }
            if (val.result === 2) {
              if (window.localStorage.Qlang === 'CN') {
                this.name = val.name
              } else if (window.localStorage.Qlang === 'EN') {
                if (val.link) {
                  this.name = val.link.split(',')[0]
                }
              }
              this.imgsrc = this.matchResult[index].img
              // console.log(this.imgsrc)
            }
          })
          this.earnProfit = ret.pAmount
          var cumulative = []
          let sumTotal = 0
          for (let i = this.betList.length - 1; i >= 0; i--) { // 获取每次的投注金额
            this.betList[i].betAmount = Number(this.betList[i].betAmount)
            cumulative.push(this.betList[i].betAmount)
            sumTotal += this.betList[i].betAmount
          }
          this.totalAccount = sumTotal
          this.cumulativeArr = cumulative
          if (window.localStorage.Qlang === 'CN') {
            this.title = ret.title
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.title = ret.remark.split(',')[0]
            }
          }
          this.idProdeuce = ret.id // 订单编号
          this.endTime = ret.endTime // 截至时间
          // this.name = ret.list[0].name // 套利结果
          this.personAmountUsd = ret.personAmountUsd
          this.maxTotalAmount = ret.alreadyAmount // 套利投资总金额
          this.createTime = this.$changeDate(ret.createTime, '/', 1)
          if (window.localStorage.Qlang === 'CN') {
            this.competitionName = ret.competitionName
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.competitionName = ret.remark.split(',')[1]
            }
          }
          if (window.localStorage.Qlang === 'CN') {
            this.hostTeamName = ret.hostTeamName
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.hostTeamName = ret.remark.split(',')[2]
            }
          }
          if (window.localStorage.Qlang === 'CN') {
            this.visitingTeamName = ret.visitingTeamName
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.visitingTeamName = ret.remark.split(',')[3]
            }
          }
          this.competitionLogo = ret.competitionLogo
          this.hostTeamLogo = ret.hostTeamLogo
          this.visitingTeamLogo = ret.visitingTeamLogo
          this.pAmountRandomzhu = ret.pAmountRandomzhu // 主胜
          this.pAmountRandomhe = ret.pAmountRandomhe // 平局
          this.pAmountRandomke = ret.pAmountRandomke // 客胜
          this.pAmountRandomzhu = ret.pAmountRandomzhu // 主胜
          this.pAmountRandomhe = ret.pAmountRandomhe // 平局
          this.pAmountRandomke = ret.pAmountRandomke // 客胜
        }
      })
    },
    // 判断状态
    // getStatus (result) {
    //   if (result === 1) {
    //   }
    // },
    // parentTurnPage (page) {
    //   this.nowPage = page
    //   this.getFinishedLog(page)
    // },
    // 累计投注跳转
    betRecord () {
      this.$router.push({path: '/cumulative', query: {id: this.id, betpaycurrency: this.betpaycurrency}})
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
  .completedOrderDetail
    .completedOrderDetail-web
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
              font-size 18px
            }
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
              font-size 16px
            &:hover
              color #e60000
          .completed
            .isCompleted
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
          .bogeFund
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
          @media screen and (max-width: 1300px){
            display flex
            flex-direction row
            height auto
          }
        /*右边样式*/
        .right-content
          width 100%
          margin-top 50px
          @media screen and (max-width: 1300px){
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
            height 420px
            background-color #ffffff
            @media screen and (max-width: 950px){
              height auto
            }
            .content-title
              display flex
              justify-content space-between
              align-items center
              height 60px
              margin-left 40px
              margin-right 40px
              /*border-bottom 1px solid #4d4d4d*/
              @media screen and (max-width: 900px){
                width 100%
                display flex
                flex-direction column
                align-items center
                height  120px
                padding 20px
                margin-left 0px
                margin-right 0px
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
                  font-size 16px
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
              @media screen and (max-width: 950px)
                display flex
                flex-direction column
                align-items center
                margin-left 0px
                margin-right 0px
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
                @media screen and (max-width: 950px)
                  font-size 20px
                  margin-top 30px
                  margin-left 180px
                .total-name
                  font-size 16px
                  color #232044
                .total-number
                  margin-top 18px
                  font-size 28px
                  color #1a1a1a
                  font-weight bold
                  @media screen and (max-width: 950px)
                    font-size 18px
                    margin-top 20px
                .finished
                  margin-top 30px
                  color #1a1a1a
                  font-size 16px
                  @media screen and (max-width: 950px)
                    margin-top 20px
              .result
                margin-left 100px
                @media screen and (max-width: 950px)
                  margin-left 0px
                .result-title
                  font-size 16px
                  color #232044
                  margin-top 20px
                  margin-bottom 10px
                .title-dec
                  font-size 16px
                  color #e60000
                  display flex
                  flex-direction row
                  /*margin-bottom 40px*/
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
                .personal-number
                  font-size 24px
                  color #ffa800
                  font-weight bold
                .blue
                  font-size 24px
                  color #1a1a1a
                  font-weight bold
                .yellow
                  color #ffa800
          .content-two
            margin-top 60px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              color #1a1a1a
              font-size 16px
              margin-top 30px
              margin-bottom 20px
              font-weight bold
            .table-wrap
              width 100%
              .table-title
                display flex
                align-items center
                font-size 16px
                height 40px
                background-color #ffffff !important
                color #1a1a1a
                font-weight bold
                div
                  color #1a1a1a
                  font-weight bold
                  text-align center
                .white-title
                  width 300px
                  margin-left 90px
              .table-content
                font-size 16px
                height 50px
                li
                  background-color #f5f6f7
                  display flex
                  align-items center
                  flex-direction row
                  justify-content space-around
                  width 100%
                  padding 0 25px
                  height 50px
                  line-height 50px
                  &:nth-child(even)
                    background #ffffff
                  div
                    color #1a1a1a
                    width 300px
                    text-align center
          .content-three
            margin-top 100px
            margin-bottom 30px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              color #1a1a1a
              font-size 16px
              margin-top 30px
              margin-bottom 20px
              font-weight bold
            .table-wrap
              width 100%
              .cumulativeBet
                padding-top 10px
                font-size 18px
                color #1a1a1a
                font-weight bold
                padding-bottom 10px
                padding-left 20px
                background-color #ffffff
                border-bottom 1px solid #4c4c4c
              .table-title
                display flex
                justify-content center
                align-items center
                font-size 16px
                height 40px
                background-color #ffffff !important
                color #1a1a1a
                font-weight bold
                div
                  text-align center
                  flex 1
              .table-content
                font-size 16px
                li
                  display flex
                  flex-direction row
                  justify-content center
                  align-items center
                  color #1a1a1a
                  height 50px
                  line-height 50px
                  background-color #f5f6f7
                  &:nth-child(even)
                    background #ffffff
                  div
                    text-align center
                    flex 1
          .content-four
            margin-top 150px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              color #1a1a1a
              font-size 16px
              margin-top 30px
              margin-bottom 20px
              font-weight bold
            .cumulative
              padding-top 10px
              font-size 18px
              color #1a1a1a
              font-weight bold
              padding-bottom 10px
              padding-left 20px
              background-color #ffffff
              border-bottom 1px solid #4c4c4c
              @media screen and (max-width: 1300px){
                width 100%
                text-align center
              }
            .table-wrap
              width 100%
              .table-title
                display flex
                justify-content  space-between
                align-items center
                font-size 16px
                height 40px
                font-weight bold
                background-color #ffffff !important
                div
                  color #1a1a1a
                  flex 1
                  text-align center
              .table-content
                display flex
                justify-content  space-between
                align-items center
                font-size 14px
                height 50px
                background-color #f5f6f7
                .white-title
                  position relative
                .white
                  display inline-block
                  width 43px
                  height 50px
                  left 30px
                div
                  color #1a1a1a
                  flex 1
                  text-align center
              .table-content:nth-child(odd)
                background-color #f5f6f7
  //手机端样式
  .detail-mobile
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
    .person-profit
      margin-top 10px
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
        width 26px
        height 16px
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
          align-items center
          .target-text
            font-size 14px
            color #1a1a1a
          .target-value
            font-size 14px
            color #e60000
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
        background #ffffff
        .betting-text
          font-weight bold
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
        background #ffffff
        width 100%
        height 180px
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
            img
              width 36px
              height 20px
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
            font-weight bold
            font-size 16px
            color #1a1a1a
        .personal-get
          display flex
          flex-direction row
          justify-content space-between
          .personal-text
            font-size 16px
            color #1a1a1a
          .personal-value
            font-weight bold
            font-size 16px
            color #1a1a1a
        .exchange-rate
          display flex
          flex-direction row
          justify-content space-between
          font-size 14px
          color #1a1a1a
      .game
        display flex
        flex-direction column
        justify-content space-around
        margin-top 10px
        padding 10px 15px
        height 200px
        width 100%
        background #ffffff
        .game-top
          display flex
          flex-direction row
          justify-content space-between
          .top-title
            font-size 16px
            color #1a1a1a
            font-weight bold
          .top-date
            font-size 16px
            color #1a1a1a
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
              color #1a1a1a
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
                color #1a1a1a
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
                color #1a1a1a
                font-size 16px
                font-weight bold
      .plan-text
        margin-top 10px
        font-size 16px
        color #1a1a1a
        font-weight bold
        margin-bottom 10px
      .plan
        height auto
        width 100%
        padding 10px 15px
        background #ffffff
        /*margin-top 10px*/
        .plan-list
          padding-top 15px
          ul
            li
              height 100px
              display flex
              flex-direction column
              justify-content space-between
              border-bottom-1px(#ccc)
              padding-bottom 15px
              margin-bottom 15px
              .company
                font-weight bold
                font-size 16px
                color #1a1a1a
              .odd
                color #1a1a1a
                display flex
                flex-direction row
                justify-content space-between
              .expect
                color #1a1a1a
                display flex
                flex-direction row
                justify-content space-between
  .dialog-box
    position fixed
    top 0
    width 100%
    height 100%
    display flex
    justify-content center
    .dialog
      position relative
      margin-top 240px
      width 640px
      height 476px
      display flex
      flex-direction column
      align-items center
      background #011f3c
      padding-bottom 70px
      .dialog-header
        .title
          margin-top 60px
          font-weight bold
          color #fff
          font-size 36px
        .close
          position absolute
          height 16px
          width 16px
          top 30px
          right 30px
          cursor pointer
          img
            font-size 16px
            text-align center
      .description
        margin-top 60px
        color #ccc
        font-size 18px
        line-height 36px
        margin-right 40px
        margin-left 40px
      .btn
        margin-top 80px
        width 320px
        height 64px
        line-height 64px
        text-align center
        color #fff
        border 2px solid #3653f5
        cursor pointer
  .pagesList
      display flex
      flex-direction row-reverse
      margin-right 0!important
  .expected-profit
    margin-top 150px
    @media screen and (max-width: 1300px){
      width 100%
      display flex
      flex-direction column
      align-items center
    }
    .title
      color #1a1a1a
      font-size 16px
      margin-top 30px
      margin-bottom 20px
      font-weight bold
    .table-wrap
      width 100%
      .table-title
        display flex
        justify-content center
        align-items center
        font-size 16px
        height 40px
        background-color #ffffff !important
        color #1a1a1a
        font-weight bold
        div
          text-align center
          width 25%
      .table-content
        font-size 16px
        li
          background-color #f5f6f7
          display flex
          flex-direction row
          justify-content center
          align-items center
          color #1a1a1a
          height 50px
          line-height 50px
          &:nth-child(even)
            background #011f3c
          div
            text-align center
            width 25%
  .exceptProfit
    margin-top 10px
    height auto
    width 100%
    padding 10px 15px
    background #ffffff
    .profit-content
      padding-top 15px
      ul
        li
          height 200px
          display flex
          color #1a1a1a
          flex-direction column
          justify-content space-between
          .profit-title
            font-size 16px
            font-weight bold
            color #1a1a1a
          .total-profit
            display flex
            flex-direction row
            justify-content space-between
          .home
            display flex
            flex-direction row
            justify-content space-between
          .visit
            display flex
            flex-direction row
            justify-content space-between
          .draw
            display flex
            flex-direction row
            justify-content space-between
  .winActive
    font-size 16px
    color #ffa800
</style>
