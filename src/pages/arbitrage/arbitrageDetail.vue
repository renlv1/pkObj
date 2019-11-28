<template>
  <div class="detail-wrapper">
    <div class="detail-web">
      <v-header></v-header>
      <div class="detail">
        <div class="introduce" v-if="introduce && introduce != 19000101">{{$t('pageTurn.text14')}}:{{introduce}}</div>
        <div class="introduce" v-if="introduce && introduce == 19000101">{{$t('pageTurn.text15')}}</div>
        <div class="panel" :class="{cover: isCover}">
          <div class="tipBox" v-if="pcTipBox">
            <h4>{{$t('tips.text7')}}</h4>
            <div class="tips">
              <h5>{{$t('tips.text1')}}</h5>
              <p>{{$t('tips.text2')}}</p>
              <p>{{$t('tips.text3')}}</p>
              <p>{{$t('tips.text4')}}</p>
              <p>{{$t('tips.text5')}}</p>
              <h6>{{$t('tips.text6')}}</h6>
            </div>
            <span class="isClick" @click="pcTipBox = false"></span>
          </div>
          <div class="panel-header">
            <div class="panel-title isClick"><i></i>{{pkTitle}}<b @click="pcTipBox = true"></b></div>
            <div class="panel-number"><span>{{$t('arbitrageDetail.mobile.text1')}}</span>{{id}}</div>
          </div>
          <div class="main-body">
            <div class="main-left">
              <div class="left-title">{{$t('arbitrageDetail.web.text2')}}</div>
              <div class="left-usd">{{maxTotalAmount | formattingMoney}} {{unit}}</div>
              <div class="panel-date">
                <div class="text">{{$t('arbitrageDetail.web.text1')}}</div>
                <div class="date">{{endDate}}</div>
              </div>
              <div class="bar">
                <div class="text">{{$t('arbitrageDetail.web.text3')}} <span style="color: #ffa800">{{progress}}</span>
                </div>
                <div class="progress">
                  <div class="all"></div>
                  <div class="already" :style="styleObject"></div>
                </div>
              </div>
            </div>
            <div class="main-right">
              <div class="left-text" v-show="alreadyLogin">{{$t('arbitrageDetail.web.text4')}}</div>
              <div class="left-usd" v-show="alreadyLogin"><span ref="already">{{difference | formattingMoney}}</span>
                {{unit}}
              </div>
              <div class="input-group">
                <input class="number-input" @input=" inputText" type="text" ref="inputValue" v-model="inputValue"
                       :placeholder="$t('arbitrageDetail.web.text11')"/>
                <span class="input-usd">{{betpaycurrency}}</span>
              </div>
              <div class="text-group" v-show="alreadyLogin">
                <p class="text-user">{{$t('arbitrageDetail.web.text5')}}: <span class="has" ref="hasBalance">{{userSie | formattingMoney}}</span>
                  <span class="has">{{betpaycurrency}}</span></p>
                <!--<p class="text-pay">{{$t('arbitrageDetail.web.text6')}}:  <span class="pay" ref="payBalance">{{inputValue === '' ? 0 : (Number(inputValue) / siePrice) | formattingMoney}}</span> <span class="pay">{{betpaycurrency}}</span></p>-->
                <p class="text-pay">{{$t('arbitrageDetail.web.text6')}}: <span class="pay" ref="payBalance">{{inputValue === '' ? 0 : Number(inputValue) | formattingMoney}}</span>
                  <span class="pay">{{betpaycurrency}}</span></p>
              </div>
              <div class="btn" @click="toOpen" v-show='alreadyLogin'>{{$t('arbitrageDetail.web.text7')}}</div>
              <div class="btn" @click="toLogin" v-show='noLogin'>{{$t('arbitrageDetail.web.text12')}}</div>
              <div class="btn" @click="openPk" v-show='openpk'>{{$t('arbitrageDetail.mobile.text18')}}</div>
              <div v-show="isFull" class="prompt">{{$t('arbitrageDetail.web.text15')}}</div>
              <div v-show="minValueShow" class="prompt">{{$t('arbitrageDetail.web.text16')}}</div>
              <div v-show="promptShow" class="prompt">{{$t('arbitrageDetail.web.text8')}}</div>
              <div v-show="insufficient" class="prompt">{{$t('arbitrageDetail.web.text17')}}</div>
              <div v-show="more" class="prompt">{{$t('arbitrage.text6')}}</div>
              <div style="margin-top: 10px" class="agreement">{{$t('arbitrageDetail.web.text19')}}《<span
                @click="openDialog" class="isClick" style="color: #fc534c">{{$t('arbitrageDetail.web.text20')}}</span>》
              </div>
            </div>
          </div>
        </div>
        <div class="panel-arbitrage" :class="{cover: isCover}">
          <div class="arbitrage-header">
            <div class="arbitrage-title">{{pkTitle}}</div>
            <div class="arbitrage-content">
              <div class="pic1">
                <img width="80" height="60" :src="this.competitionLogo">
              </div>
              <div class="text">
                <p class="comment-text">{{competitionName}}</p>
                <p class="comment-text">{{$t('arbitrageDetail.web.text13')}}: {{competitionTime}}</p>
              </div>
              <div class="other">
                <div class="box1">
                  <div class="pic2">
                    <img width="34" height="40" :src="this.hostTeamLogo">
                  </div>
                  <div class="name other-style1">{{hostTeamName}}</div>
                </div>
                <div class="text-pic2">VS</div>
                <div class="box2">
                  <div class="name other-style2">{{visitingTeamName}}</div>
                  <div class="pic2">
                    <img width="34" height="40" :src="this.visitingTeamLogo">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="arbitrage-panel">
            <ul>
              <li v-for="item in planList" :key="item.index">
                <div class="company">
                  <div class="company-name name">{{item.companyName}}</div>
                  <div class="company-value value">{{item.sumbetAmount | formattingMoney}} {{item.currency}}</div>
                </div>
                <div class="company" v-if="item.odds !== $t('arbitrageDetail.mobile.text13')">
                  <div class="home-name name" v-if="flagLag">{{item.name}}</div>
                  <div class="home-name name" v-if="!flagLag && item.link">{{item.link.split(',')[0]}}</div>
                  <div class="home-value value">{{item.odds}}</div>
                </div>
                <div class="profit">
                  <div class="home-name name">{{$t('arbitrageDetail.mobile.text14')}}</div>
                  <div class="home-value value">{{item.profit | formattingMoney}} {{item.currency}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 交易奖励规则弹窗 -->
        <div class="dialog-box" v-if="ruleDialog">
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
      </div>
      <v-footer></v-footer>
    </div>
    <div class="detail-mobile" :class="{opacity: isOpacity}">
      <div class="head">
        <div class="back" @click="back"></div>
        <div class="title">{{$t('arbitrageDetail.mobile.text15')}}</div>
      </div>
      <div class="detail-mobile-content">
        <div class="mobile-wrapper">
          <div class="introduce" v-if="introduce && introduce != 19000101">{{$t('pageTurn.text14')}}:{{introduce}}</div>
          <div class="introduce" v-if="introduce && introduce == 19000101">{{$t('pageTurn.text15')}}</div>
          <div class="announcement">
            <div class="announcement-top">
              <p class="top-title"><span>{{pkTitle}}</span> <b class="tip-btn" @click="appTipBox = true"></b></p>
              <p class="top-num">{{$t('arbitrageDetail.mobile.text1')}} {{id}}</p>
            </div>
            <div class="remaining">
              <div class="betting-text">{{$t('arbitrageDetail.mobile.text2')}}</div>
              <div class="betting-status">{{maxTotalAmount-alreadyAmount | formattingMoney}} {{unit}}</div>
            </div>
            <div class="target">
              <span class="target-text">{{$t('arbitrageDetail.mobile.text3')}}</span>
              <span class="target-value">{{maxTotalAmount | formattingMoney}} {{unit}}</span>
            </div>
            <div class="end-time">
              <span class="time-text">{{$t('arbitrageDetail.mobile.text4')}}</span>
              <span class="time-value">{{endDate}}</span>
            </div>
          </div>
          <ul class="planList">
            <!--
            <li v-for="item in planList" :key="item.index">
            -->
            <div class="game">
              <div class="game-top">
                <span class="top-title">{{$t('arbitrageDetail.mobile.text16')}}</span>
                <span class="top-date">{{competitionTime}}</span>
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
                    <img src="../../assets/images/arbitrageDetial/VS.svg"/>
                  </div>
                  <div class="two-team">
                    <div class="two-team-log">
                      <img :src="visitingTeamLogo"/>
                    </div>
                    <div class="two-team-name">{{visitingTeamName}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="plan">
              <div class="plan-text">{{$t('arbitrageDetail.mobile.text17')}}</div>
              <div class="plan-list">
                <ul>
                  <li v-for="item in planList" :key="item.index">
                    <div class="company-name name">{{item.companyName}}</div>
                    <div class="odd">
                      <div class="odds-text" v-if="flagLag">{{item.name}}</div>
                      <div class="odds-text" v-if="!flagLag && item.remark">{{item.remark.split(',')[0]}}</div>
                      <div class="value">{{item.odds}}</div>
                    </div>
                    <div class="expect">
                      <span class="expect-text">{{$t('arbitrageDetail.mobile.text14')}}</span>
                      <span class="expect-value">{{item.profit | formattingMoney}} <span
                        style="color: #1a1a1a; font-size: 16px">{{item.currency}}</span></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div class="btn-wrapper">
        <span class="btn" v-show="log" @click="toLogin">{{$t('arbitrageDetail.mobile.text8')}}</span>
        <span class="btn" v-if="isBet" v-show="bet" @click="toBet">{{$t('arbitrageDetail.mobile.text9')}}</span>
        <span class="btn" v-show="open" @click="openPk">{{$t('arbitrageDetail.mobile.text18')}}</span>
      </div>
    </div>
    <div class="app-tip" v-if="appTipBox">
      <div class="tipBox">
        <h4>{{$t('tips.text7')}}</h4>
        <div class="tips">
          <h5>{{$t('tips.text1')}}</h5>
          <p>{{$t('tips.text2')}}</p>
          <p>{{$t('tips.text3')}}</p>
          <p>{{$t('tips.text4')}}</p>
          <p>{{$t('tips.text5')}}</p>
          <h6>{{$t('tips.text6')}}</h6>
        </div>
        <span @click="appTipBox = false"></span>
      </div>
    </div>
    <div class="dialog-box" v-if="isDialog">
      <div class="dialog">
        <div class="dialog-header">
          <div class="title" v-show="isTitle">{{$t('arbitrageDetail.dialog.text1')}}</div>
          <div class="close" @click="close">
            <img src="../../assets/images/common/delete_16_16.svg">
          </div>
        </div>
        <div class="dialog-body">
          <div class="input-group" v-if="password">
            <div class="input-group-text">{{$t('arbitrageDetail.dialog.text2')}}</div>
            <input ref="password" class="password" type="password"
                   :placeholder="$t('arbitrageDetail.dialog.inputPlaceHold1')"/>
          </div>
          <div class="input-group" v-if='google'>
            <div class="input-group-text">{{$t('arbitrageDetail.dialog.text3')}}</div>
            <input ref="code" :placeholder="$t('arbitrageDetail.dialog.inputPlaceHold2')"/>
          </div>
          <div class="input-group" v-if='send'>
            <div class="input-group-text">{{$t('arbitrageDetail.dialog.text4')}}</div>
            <div class="send-group">
              <input ref="code" :placeholder="$t('arbitrageDetail.dialog.inputPlaceHold3')"/>
              <span ref="sendMsg" class="send" @click="getCode">{{sendBtnValue}}</span>
            </div>
          </div>
          <p class="errin-Msg" v-if="setSafeVerific">{{$t('dialog.text13')}}</p>
          <div class="bind" v-show="bind">{{$t('arbitrageDetail.dialog.text5')}}</div>
        </div>
        <div class="err-msg" v-show="errShow">{{payFailTip}}</div>
        <div class="err-msg" v-show="security">{{$t('arbitrageDetail.dialog.text8')}}</div>
        <span class="btn" v-show="bind" @click="isDialog = false, isCover = false">{{$t('arbitrageDetail.dialog.text6')}}</span>
        <span class="btn" v-show="!bind" @click="pay">{{$t('arbitrageDetail.dialog.text6')}}</span>
      </div>
    </div>
    <div class="success-dialog-box" v-if="isSuccess">
      <div class="dialog">
        <div class="dialog-header">
          <div class="title">{{$t('arbitrageDetail.dialog.text7')}}</div>
          <div class="close" @click="closeInner">
            <img src="../../assets/images/common/delete_16_16.svg">
          </div>
        </div>
        <div class="btn" @click="toDetail">{{$t('arbitrageDetail.dialog.text6')}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        isTitle: false,
        setSafeVerific: false,
        userAgree: false, // 判断用户是否同意协议
        isNew: '', // 判断是否是新用户
        ruleDialog: false,
        clickFlag: true,
        flagLag: true, // 判断页面的语言类型默认是中文
        errShow: false, // 错误信息显示
        log: false, // 登陆过期后跳入登陆页面
        bet: false, // 可直接投注
        isSuccess: false, // 成功投注后的弹窗
        isDialog: false, // 投注弹窗
        isFull: false, // 剩余可投金额是否小于100
        minValueShow: false, // 最小投注金额提醒
        insufficient: false, // 资产不足提醒
        more: false, // 超过用户最大单笔投注金额
        score: '', // 用户的星级
        alreadyLogin: false,
        openTradePassword: 0,
        security: false, // 判断是否设置安全密码
        noLogin: false,
        isBet: false,
        open: false,
        isCover: false,
        openpk: false,
        google: false, // 谷歌输入框
        send: false, // 短信验证框
        bind: false, // 绑定手机
        password: false, // 密码
        isLoginShow: false,
        payFailShow: false,
        isOpacity: false,
        promptShow: false, // 输入金额超过剩余可投金额的提示
        id: '',
        errMsg: '', // 支付失败后返回的信息
        originalId: '',
        endDate: '',
        unit: '',
        betpaycurrency: '',
        siePrice: '', // USD转SIE的汇率
        isNumber: '',
        progress: '',
        competitionTime: '',
        maxPersonalAmount: '',
        payFailTip: '',
        pkTitle: '',
        userUsd: '',
        timeout: '', // 原始时间戳
        userSie: '',
        difference: '',
        alreadyAmount: '',
        maxTotalAmount: '',
        planList: [], // 比赛列表
        loginPlaceholderUser: '请输入用户名',
        loginPlaceholderPassword: '请输入密码',
        openMobileCode: '', // 短信验证码
        openGoogleCode: '', // 谷歌验证码
        sendBtnValue: this.$t('arbitrageDetail.dialog.sendBtnValue'),
        sendBtnTimes: 60, // 定时器初始值为60s
        competitionName: '',
        hostTeamName: '',
        visitingTeamName: '',
        competitionLogo: '',
        hostTeamLogo: '',
        visitingTeamLogo: '',
        styleObject: {
          height: '10px',
          width: '',
          background: '#ffa800',
          position: 'absolute',
          top: '0',
          left: '0',
          borderRadius: '2px'
        },
        inputValue: '',
        introduce: '',
        pcTipBox: false,
        appTipBox: false
      }
    },
    created() {
      this._getBlance()
      this._getArbitrageListInfo()
      this._chooseLag()
    },
    components: {
      vHeader: resolve => require(['../../components/header.vue'], resolve),
      vFooter: resolve => require(['../../components/footer.vue'], resolve),
      vTurnPage: resolve => require(['../../components/turnPage.vue'], resolve)
    },
    methods: {
      openDialog() {
        this.ruleDialog = true
      },
      closeIsDialog() {
        this.ruleDialog = false
        localStorage.setItem('userAgree', 'true')
        console.log(window.localStorage.getItem('userAgree'))
      },
      _chooseLag() { // 判断当前网页的语言类型
        if (window.localStorage.Qlang === 'CN') {
          this.flagLag = true
        } else if (window.localStorage.Qlang === 'EN') {
          this.flagLag = !this.flagLag
        }
      },
      // input框提示
      inputText() {
        this.inputValue = this.inputValue.replace(/\D/g, '')
        this.promptShow = false
        this.isFull = false
        this.minValueShow = false
        this.insufficient = false
        this.more = false
        let flagValue = ''
        if (this.difference >= this.$refs.hasBalance.innerHTML.replace(/,/g, '')) {
          flagValue = this.$refs.hasBalance.innerHTML.replace(/,/g, '')
          if (Number(this.inputValue) > flagValue) {
            this.insufficient = true
          } else {
            this.insufficient = false
          }
        } else {
          flagValue = this.difference
          if (Number(this.inputValue) > flagValue) {
            this.promptShow = true
          } else {
            this.promptShow = false
          }
        }
      },
      changeTime(time) { // 转换时间的格式
        return this.$changeDate(time, '/', 1)
      },
      toOpen() { // 只有输入符合条件的数值才能弹出支付框
        // console.log(this.score)
        let maxValue = this.choose(this.score) // 获得最大的额度
        // console.log(window.localStorage.getItem('userAgree') === 'true')
        if (Number(this.isNew) !== 1 || window.localStorage.getItem('userAgree') === 'true') {
          if (Number(this.$refs.already.innerHTML.replace(/,/g, '')) >= 100) { // 判断剩余可投金额是否小于100
            if (this.inputValue && this.inputValue >= 100) { // 判断投注的值是否小于100
              if (this.inputValue <= Number(this.$refs.already.innerHTML.replace(/,/g, ''))) { // 判断输入的USD是否小于剩余可投的USD
                if (this.$refs.hasBalance.innerHTML.replace(/,/g, '') - this.$refs.payBalance.innerHTML.replace(/,/g, '') >= 0) { // 判断用户资产是否足够
                  if (this.inputValue && this.inputValue <= maxValue) {
                    this.isDialog = true
                    this.isCover = true
                  } else {
                    // console.log(maxValue, this.inputValue && this.inputValue)
                    this.more = true
                  }
                } else {
                  this.insufficient = true
                }
              } else {
                this.promptShow = true
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
        // if (this.inputValue && this.inputValue > 100) {
        //   if (this.$refs.already.innerHTML.replace(/,/g, '') > 100) {
        //     let has = this.$refs.hasBalance.innerHTML.replace(/,/g, '')
        //     let pay = this.$refs.payBalance.innerHTML.replace(/,/g, '')
        //     if (has - pay > 0) {
        //       this.promptShow = false
        //       this.isDialog = true
        //       this.isCover = true
        //     } else {
        //       this.promptShow = true
        //     }
        //   } else {
        //     this.minhundred = true
        //   }
        // } else {
        //   this.minValueShow = true
        // }
      },
      openPk() { // 去开通PK
        this.$router.push('/pkRobot')
      },
      // login () {
      //   let url = `${this.$api}/user/userlogin?username=liulian&password=123123aA`
      //   this.$http.post(url).then((res) => {
      //     if (res.data.success === true) {
      //       this._getArbitrageListInfo()
      //       this._getBlance()
      //       this._getcompany()
      //     }
      //   }).catch((err) => {
      //     console.log(err)
      //   })
      // },
      _getArbitrageListInfo() { // 获取用户的总金额等信息
        this.$http.post(`${this.$api}/arbitrage/info?id=${this.$route.query.id}`).then((res) => {
          if (res.data.success === true) {
            let ret = res.data.data
            // console.log(ret)
            if (window.localStorage.Qlang === 'CN') {
              this.competitionName = ret.competitionName
            } else if (window.localStorage.Qlang === 'EN') {
              this.competitionName = ret.remark.split(',')[1]
            }
            if (window.localStorage.Qlang === 'CN') {
              this.hostTeamName = ret.hostTeamName
            } else if (window.localStorage.Qlang === 'EN') {
              this.hostTeamName = ret.remark.split(',')[2]
            }
            if (window.localStorage.Qlang === 'CN') {
              this.visitingTeamName = ret.visitingTeamName
            } else if (window.localStorage.Qlang === 'EN') {
              this.visitingTeamName = ret.remark.split(',')[3]
            }
            this.competitionLogo = ret.competitionLogo
            this.hostTeamLogo = ret.hostTeamLogo
            this.visitingTeamLogo = ret.visitingTeamLogo
            this.originalId = ret.id
            // console.log(this.originalId)
            this.introduce = ret.introduce
            this.id = ret.id
            this.timeout = ret.endTime
            this.endDate = this.$changeDate(ret.endTime, '/', 1)
            this.unit = ret.currency
            this.alreadyAmount = (ret.alreadyAmount).toFixed(4)
            this.progress = ((ret.alreadyAmount / ret.maxTotalAmount) * 100).toFixed(2) + '%' // 当前进度
            this.styleObject.width = this.progress
            if (window.localStorage.Qlang === 'CN') {
              this.pkTitle = ret.title
            } else if (window.localStorage.Qlang === 'EN') {
              this.pkTitle = ret.remark.split(',')[0]
            }
            this.maxTotalAmount = ret.maxTotalAmount
            this.difference = this.maxTotalAmount - this.alreadyAmount
            this.maxPersonalAmount = ret.maxPersonalAmount
            this.competitionTime = this.$changeDate(ret.competitionTime, '/', 1)
            this.planList = ret.list
            this.profit = this.planList[0].profit // 拿到第一个profit
            this.judgeTime()
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      back() {
        this.$router.go(-1)
      },
      judgeTime() {
        if (this.timeout >= Date.parse(new Date())) {
          this.isBet = true
        } else {
          this.isBet = false
        }
      },
      _getBlance() { // 获取用户的USD资产以及SIE资产的数据
        this.$http.post(`${this.$api}/user/balance`).then((res) => {
          if (res.data.success === true) {
            let ret = res.data.data
            this.score = res.data.mapData.score
            this.openGoogleCode = ret.user.openGoogleCode
            this.openMobileCode = ret.user.openMobileCode
            this.openTradePassword = ret.user.openTradePassword
            this.isNew = res.data.mapData.isnew
            this.betpaycurrency = res.data.mapData.betpaycurrency
            if (res.data.isopenpk === 2) {
              this.openpk = true
              this.alreadyLogin = false
              this.noLogin = false
            } else {
              this.openpk = false
            }
            this.alreadyLogin = true
            this.noLogin = false
            // console.log(this.openGoogleCode, this.openMobileCode)
            this.switch()
            this.bet = true // 开启立即投注按钮
            this.log = false // 关闭请登录后再投注按钮
            this.siePrice = ret.siePrice
            let userUsd = ret.userAccount.USD.balance
            if (userUsd) { // 判断用户是否存在userUsd字段防止后台为空会报错
              this.userUsd = userUsd.toFixed(4)
            } else {
              this.userUsd = 0.0000
            }
            // if (this.inputValue > userUsd) { // 如果输入的金额大于剩余的金额显示的内容
            //   this.promptShow = true
            // } else {
            //   this.promptShow = false
            // }
            let userSie = ret.userAccount.SIE.balance
            if (userSie) { // 判断用户是否存在userSie字段防止后台为空会报错
              this.userSie = userSie.toFixed(4)
            } else {
              this.userSie = 0.0000
            }
          } else {
            this.log = true // 开启请登录后再投注按钮
            this.bet = false // 关闭立即投注按钮
            this.alreadyLogin = false
            this.noLogin = true
          }
        })
      },
      toLogin() {
        this.$router.push({path: '/login', query: {status: 0}})
      },
      toBet() {
        this.$router.push({path: '/betting', query: {id: this.originalId}})
      },
      pay() {
        let ajaxLang1 = ''
        if (localStorage.getItem('Qlang') === 'EN') {
          ajaxLang1 = 'en'
        }
        if (this.setSafeVerific === true) {
          this.isDialog = false
          this.isCover = false
        } else {
          let password = this.$refs.password.value // 支付密码
          let code = this.$refs.code.value // 验证码
          let id = this.$route.query.id // 套利id
          let payBalance = this.$refs.inputValue.value // 所要支付的金额
          if (this.openTradePassword === 1) {
            this.security = true
          } else {
            this.$http.post(`${this.$api}/bet?tradePwd=${password}&verifyCode=${code}&id=${id}&amount=${payBalance}`, {}, {headers: {'pk-language': ajaxLang1}}).then((res) => {
              if (res.data.success === true) {
                this.isSuccess = true
                this.isDialog = false
                this.setSafeVerific = false
                this.isCover = true
                // this._getBlance()
              } else {
                this.errShow = true
                this.payFailTip = res.data.msg
              }
            })
          }
        }
      },
      close() {
        this.isDialog = false // 关闭支付弹窗
        this.isCover = false
        this.errShow = false
        this.errMsg = ''
        this.payFailShow = false
        this.security = false
      },
      closeInner() {
        this.isSuccess = false
        this.isDialog = false
        this.isCover = false
        this.payFailShow = false
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
      //     this.bind = true
      //     this.google = false
      //     this.send = false
      //   }
      // },
      switch() {
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
      getCode() { // 发送短信验证码
        if (this.clickFlag) {
          this.clickFlag = false
          if (this.sendBtnValue === this.$t('arbitrageDetail.dialog.sendBtnValue')) {
            this.countDown()
            let formData = new FormData()
            formData.append('json', JSON.stringify({'type': 'code'}))
            this.$http.post(this.$api + '/user/sendSmsCode', formData).then((res) => {
              this.clickFlag = true
              if (res.data.success) {
                this.$refs.sendMsg.disabled = true
                this.payFailTip = ''
              } else {
                // 验证码获取失败
                this.payFailTip = res.data.msg
                this.errShow = true
              }
            }).catch((err) => {
              this.clickFlag = true
              this.errShow = '网络错误'
              console.log(err)
            })
          }
        }
      },
      countDown() { // 短信倒计时
        if (this.sendBtnTimes === 0) {
          this.sendBtnValue = this.$t('arbitrageDetail.dialog.sendBtnValue')
          this.sendBtnTimes = 60
          this.$refs.sendMsg.disabled = false
        } else {
          this.sendBtnTimes--
          this.sendBtnValue = this.sendBtnTimes
          setTimeout(() => this.countDown(), 1000)
        }
      },
      toDetail() {
        this.isSuccess = false
        this.isDialog = false
        this.$router.push({path: '/processOrderDetail', query: {id: this.$route.query.id, order: 1}})
      },
      choose(str) { // 给星级返回对应的最大投注金额
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

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/mixin"
  .btn-agree
    float: left;
    margin 50px 0 30px
    width 60%
    padding 11px 0
    margin-right: -1px;
    border none
    border-radius 5px
    outline: none; //消除默认点击蓝色边框效果
    background #fc534c
    color #fff

  .detail-wrapper
    position relative
    .detail-web
      @media screen and (min-width: 1024px) {
        display block
      }
      @media screen and (max-width: 1025px) {
        display none
      }
      .detail
        width 100%
        display flex
        flex-direction column
        align-items center
        padding-top 120px
        padding-left 10%
        padding-right 10%
        padding-bottom 30px
        background url("../../assets/images/arbitrage/bg.svg")
        background-repeat repeat
        background-size 500px 500px
        background-position 50% 50%
        .introduce
          height 40px
          text-align left
          width 90%
          background-color rgba(230, 0, 0, 0.8)
          color: #fff
          margin-bottom 20px
          padding-left 30px
          line-height 40px
        .panel
          width 1200px
          display flex
          flex-direction column
          height 460px
          background #fff
          border 1px solid #e5e5e5
          position relative
          @media screen and (max-width: 1600px) {
            width 90%
          }
          .tipBox
            padding 0 50px
            position absolute
            width 640px
            box-shadow 0px 0px 10px rgb(153, 153, 153)
            background-color #fff
            top 60px
            left 50%
            transform translate(-50%, 0)
            z-index 9
            span
              display inline-block
              width 20px
              height 20px
              background-color #fff
              position absolute
              right 30px
              top 30px
              background-image url("../../assets/images/arbitrageDetial/close.png")
              background-size 100%
              background-position center
            h4
              text-align center
              color #1a1a1a
              font-size: 34px
              font-weight bold
              margin 56px 0
            .tips
              text-align left
              font-size: 18px;
              color: #1a1a1a
              margin-bottom 80px
              p
                margin-bottom 10px
              h5
                line-height: 2
                margin-bottom 30px
                font-size: 18px;
                color: #1a1a1a
              h6
                line-height: 2
                margin-top 30px
                font-size: 18px;
                color: #1a1a1a
          .panel-header
            height 60px
            line-height 60px
            align-items center
            display flex
            flex-direction row
            justify-content space-between
            margin-right 30px
            margin-left 30px
            @media screen and (max-width: 1000px) {
              flex-direction column
              height 100px
              padding-bottom 8px
            }
            .panel-number
              font-size 20px
              color #1a1a1a
            .panel-title
              font-size 24px
              font-weight bold
              color #232044
              position relative
              i {
                display: inline-block;
                width: 30px;
                height: 20px;
                background-repeat: no-repeat;
                margin-right: 10px;
                background-image: url('../../assets/images/home/s-logo.svg');
                vertical-align: middle;
              }
              b
                width 30px
                height 30px
                display inline-block
                background-image url("../../assets/images/arbitrageDetial/tips.png")
                background-repeat no-repeat
                background-size cover
                vertical-align middle
                margin-left 10px
            .panel-date
              font-size 20px
              color #fff
          .main-body
            display flex
            flex-direction row
            height 100%
            @media screen and (max-width: 1024px) {
              width 100%
              flex-direction column
              align-items center
            }
            .main-left
              margin-top 32px
              padding-left 30px
              width 50%
              height 100%
              @media screen and (max-width: 1024px) {
                display flex
                flex-direction column
                width 100%
                align-items center
              }
              .left-title
                font-size 16px
                color #1a1a1a
                margin-top 50px
                margin-bottom 10px
              .left-usd
                font-size 28px
                color #e60000
                font-weight bold
                @media screen and (max-width: 1700px) {
                  font-size 30px
                }
              .panel-date
                color #1a1a1a
                margin-top 50px
                font-size 16px
                .text
                  margin-bottom 10px
              .bar
                margin-top 50px
                .text
                  margin-bottom 20px
                  font-size 16px
                  color #1a1a1a
                .progress
                  position relative
                  border-radius 2px
                  background #fff
                  width 70%
                  height 10px
                  @media screen and (max-width: 1700px) {
                    width 300px
                  }
                  .all
                    background #ccc
                    position absolute
                    border-radius 2px
                    top 0
                    left 0
                    height 10px
                    width 100%
            .main-right
              width 50%
              height 100%
              display flex
              flex-direction column
              justify-content center
              @media screen and (max-width: 1024px) {
                width 100%
                margin-left 40px
                margin-right 40px
                display flex
                flex-direction column
                align-items center
              }
              .left-text
                font-size 16px
                color #1a1a1a
              .left-usd
                margin-top 10px
                font-size 24px
                color #e60000
              .input-group
                margin-top 20px
                line-height 50px
                display flex
                align-items center
                input
                  width 340px
                  height 50px
                  padding-left 20px
                  font-size 16px
                  outline none
                  color #1a1a1a
                  font-weight bold
                  border 1px solid #1a1a1a
                  background #fff
                  @media screen and (max-width: 1700px) {
                    width 280px
                    height 30px
                    font-size 12px
                  }
                .input-usd
                  margin-left 20px
                  font-size 36px
                  vertical-align middle
                  color #1a1a1a
                  font-weight bold
                  @media screen and (max-width: 1700px) {
                    font-size 24px
                  }
              .prompt
                text-align left
                width 100%
                margin-top 15px
                font-size 18px
                color #e60000
                @media screen and (max-width: 1024px) {
                  text-align center
                }
              .text-group
                @media screen and (max-width: 1024px) {
                  text-align center
                }
                .text-user
                  font-size 20px
                  margin-top 20px
                  .has
                    color #1a1a1a
                    font-size 20px
                    font-weight bold
                .text-pay
                  .pay
                    font-size 20px
                    font-weight bold
                    color #e60000
                .text-pay
                  margin-top 20px
                  font-size 20px
                  color #1a1a1a
                  @media screen and (max-width: 1024px) {
                    margin-top 30px
                  }
              .btn
                margin-top 20px
                width 340px
                height 50px
                color #fff
                font-size 16px
                background #e60000
                text-align center
                line-height 50px
                cursor pointer
                @media screen and (max-width: 1024px) {
                  width 300px
                  height 40px
                  line-height 40px
                }
        .cover
          opacity .3
          background #fff
        .panel-arbitrage
          width 1200px
          margin-top 40px
          background #fff
          border 1px solid #e5e5e5
          margin-bottom 130px
          height auto
          @media screen and (max-width: 1600px) {
            width 90%
            padding-bottom 50px
          }
          .arbitrage-header
            .arbitrage-title
              text-align center
              font-size 20px
              height 60px
              line-height 60px
              padding-left 30px
              padding-right 30px
              color #1a1a1a
              font-weight bold
            .arbitrage-content
              height 240px
              display flex
              flex-direction column
              align-items center
              border-bottom 2px solid #e5e5e5
              @media screen and (max-width: 1024px) {
                height 380px
              }
              .pic1
                margin-top 20px
              .text
                .comment-text
                  width 100%
                  text-align center
                  font-size 16px
                  color #1a1a1a
                  margin-bottom 10px
              .other
                width 100%
                display flex
                flex-direction row
                justify-content center
                align-items center
                @media screen and (max-width: 1024px) {
                  flex-direction column
                  justify-items center
                  margin-top 20px
                }
                .box1
                  display flex
                  flex-direction row
                  align-items center
                  .other-style1
                    line-height 60px
                    margin-left 20px
                  .name
                    font-size 20px
                    color #232044
                    font-weight bold
                    @media screen and (min-width: 1024px) {
                      font-size 20px
                    }
                .text-pic2
                  margin 0 60px
                  font-size 40px
                  color #ffc933
                  font-weight bold
                  @media screen and (max-width: 1024px) {
                    font-size 30px
                  }
                .box2
                  display flex
                  flex-direction row
                  align-items center
                  .other-style2
                    line-height 60px
                    margin-right 20px
                  .name
                    font-size 20px
                    color #232044
                    font-weight bold
                    @media screen and (min-width: 1024px) {
                      font-size 20px
                    }
          .arbitrage-panel
            padding-top 40px
            ul
              li
                list-style none
                display flex
                flex-direction row
                justify-content center
                width 100%
                height 160px
                .company
                  width 320px
                .name
                  height 60px
                  line-height 60px
                  color #232044
                  font-size 16px
                  text-align center
                .value
                  height 100px
                  line-height 100px
                  text-align center
                  color #232044
                  font-size 18px
                  font-weight bold
                .profit
                  width 460px
        .dialog-box
          position fixed
          top 0
          width 100%
          height 100%
          display flex
          justify-content center
          align-items center
          background-color: rgba(0, 0, 0, .5)
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
                padding 10px 0 35px
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
    .detail-mobile
      min-height 100vh
      height auto
      background-color #f8f9fa
      @media screen and (min-width: 1024px) {
        display none
      }
      @media screen and (max-width: 1025px), handheld and (orientation: landscape) {
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
        z-index 999
        border-bottom-1px(#ccc)
        position fixed
        top 0
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
        margin-top 60px
        color #fff
        padding-right 20px
        padding-left 20px
        .mobile-wrapper
          .introduce
            height 30px
            text-align left
            width 100%
            background-color rgba(230, 0, 0, 0.8)
            color: #fff
            margin-bottom 20px
            line-height 30px
            font-size: 14px;
            text-align center
          .announcement
            margin-top 20px
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
                span
                  color #1a1a1a
                  font-weight bold
                  display inline-block
                  vertical-align middle
                b
                  width 20px
                  height 20px
                  display inline-block
                  background-image url("../../assets/images/arbitrageDetial/tips.png")
                  background-size cover
                  background-position center
                  vertical-align middle
                  margin-left 15px
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
                font-size 18px
                font-weight bold
                color #e60000
            .target
              display flex
              flex-direction row
              justify-content space-between
              .target-text
                font-size 16px
                color #1a1a1a
              .target-value
                font-size 16px
                color #e60000
            .end-time
              display flex
              flex-direction row
              justify-content space-between
              .time-text
                font-size 16px
                color #1a1a1a
              .time-value
                color #1a1a1a
                font-size 16px
          .planList
            padding-bottom 50px
            .game
              display flex
              flex-direction column
              justify-content space-around
              margin-top 15px
              padding 10px 15px
              height auto
              width 100%
              background #fff
              .game-top
                display flex
                flex-direction row
                justify-content space-between
                .top-title
                  font-size 16px
                  color #1a1a1a
                .top-date
                  font-size 16px
                  color #1a1a1a
              .game-team-group
                .mark-wrapper
                  margin-top 10px
                  display flex
                  flex-direction column
                  align-items center
                  justify-content center
                  .mark
                    margin-bottom 10px
                    img
                      width 40px
                      height 40px
                  .game-event
                    margin-bottom 15px
                    font-size 18px
                    color #1a1a1a
                .game-team
                  display flex
                  flex-direction row
                  justify-content center
                  align-items center
                  .one-team
                    display flex
                    flex-direction row
                    align-items center
                    .one-team-log
                      img
                        vertical-align middle
                        width 40px
                        height 40px
                    .one-team-name
                      margin-left 8px
                      color #1a1a1a
                      font-size 16px
                      font-weight bold
                  .vs
                    margin 0 20px
                    img
                      width 40px
                      height 40px
                  .two-team
                    display flex
                    flex-direction row-reverse
                    align-items center
                    .two-team-log
                      img
                        width 40px
                        height 40px
                    .two-team-name
                      color #1a1a1a
                      margin-right 8px
                      font-size 16px
                      font-weight bold
            .plan
              height auto
              width 100%
              padding 10px 15px
              background #fff
              .plan-text
                font-size 20px
                color #1a1a1a
                font-weight bold
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
                    color #1a1a1a
                    .company
                      font-size 16px
                      color #1a1a1a
                      font-weight bold
                    .odd
                      display flex
                      flex-direction row
                      justify-content space-between
                      font-size 16px
                      color #1a1a1a
                    .expect
                      display flex
                      flex-direction row
                      justify-content space-between
                      font-size 16px
                      color #1a1a1a
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
          background #e60000
    .dialog-box
      position fixed
      top 0
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      background-color: rgba(0, 0, 0, .5)
      .dialog
        position relative
        width 640px
        height auto
        display flex
        flex-direction column
        align-items center
        justify-content center
        background #fff
        @media screen and (max-width: 700px) {
          width 90%
          height: auto
          padding-bottom 30px
        }
        .dialog-header
          .title
            margin-top 60px
            font-weight bold
            color #1a1a1a
            font-size 34px
            @media screen and (max-width: 700px) {
              margin-top 40px
              font-size 30px
            }
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
        .dialog-body
          width 100%
          display flex
          flex-direction column
          align-items center
          @media screen and (max-width: 414px) {
            height 100%
          }
          .errin-Msg
            margin 40px 0
            font-size 32px
          .input-group
            display flex
            flex-direction column
            width 100%
            margin-left 20%
            margin-top 30px
            @media screen and (max-width: 414px) {
              margin-top 10px
              height 100px
            }
            .input-group-text
              margin-bottom 10px
              text-align left
              color #232044
              font-size 18px
              @media screen and (max-width: 414px) {
                margin-bottom 5px
                font-size 14px
              }
            .password
              align-items center
              width 80%
              margin-top 10px
              height 50px
              padding-left 20px
              font-size 18px
              background #fff
              color #666
              border 1px solid #232044
              @media screen and (max-width: 414px) {
                height 30px
                font-size 14px
              }
            input
              align-items center
              width 80%
              margin-top 5px
              height 50px
              padding-left 20px
              font-size 18px
              background #fff
              color #666
              border 1px solid #232044
              @media screen and (max-width: 414px) {
                height 30px
                font-size 14px
              }
            .send-group
              width 80%
              position relative
              input
                align-items center
                width 100%
                margin-top 10px
                height 50px
                padding-left 20px
                font-size 16px
                background #fff
                color #666
                border 1px solid #1a1a1a
                @media screen and (max-width: 414px) {
                  height 30px
                  font-size 14px
                }
              .send
                position absolute
                height 50px
                width 50px
                top 6px
                color #e60000
                line-height 58px
                text-align center
                right 5px
                font-size 16px
                cursor pointer
                @media screen and (max-width: 414px) {
                  height 30px
                  line-height 30px
                  font-size 14px
                  width 42px
                }
          .bind
            color #ccc
            margin-top 100px
            margin-bottom 100px
            font-size 30px
            text-align center
        .err-msg
          color #e60000
          margin-top 30px
          font-size 20px
          @media screen and (max-width: 414px) {
            font-size 14px
          }
        .btn
          margin 40px 0 50px
          width 80%
          height 50px
          line-height 50px
          text-align center
          color #e60000
          border 1px solid #e60000
          cursor pointer
          @media screen and (max-width: 700px) {
            margin-top 40px
            margin-bottom 40px
            height 30px
            line-height 30px
            width 50%
          }
    .success-dialog-box
      position fixed
      top 0
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      background-color rgba(0, 0, 0, 0.5)
      .dialog
        position relative
        width 640px
        display flex
        flex-direction column
        align-items center
        justify-content center
        background #fff
        border 1px solid #e5e5e5
        @media screen and (max-width: 700px) {
          width 440px
          height 260px
        }
        .dialog-header
          .title
            margin-top 60px
            margin-bottom 100px
            font-weight bold
            font-size 34px
            color #1a1a1a
            @media screen and (max-width: 700px) {
              margin-top 20px
              font-size 30px
            }
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
          .dialog-body
            width 100%
            display flex
            flex-direction column
            align-items center
            @media screen and (max-width: 414px) {
              height 100%
            }
        .btn
          margin-bottom 80px
          width 340px
          height 50px
          line-height 50px
          text-align center
          color #e60000
          border 1px solid #e60000
          cursor pointer
          @media screen and (max-width: 700px) {
            margin-bottom 40px
            height 30px
            line-height 30px
            width 50%
          }
</style>
