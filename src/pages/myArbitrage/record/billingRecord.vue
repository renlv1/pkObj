<template>
  <div class="achievement">
    <div class="achievement-web">
      <v-header></v-header>
      <div class="ord-w">
        <div class="wrap">
          <div class="flex-box">
            <!--<div class="left-content">-->
              <!--<div class="account">-->
                <!--<div class="account-up">-->
                  <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span-->
                  <!--class="account-title common-title">{{$t('achievement.text1')}}</span>-->
                <!--</div>-->
                <!--<div class="go-next">-->
                  <!--<router-link to="/achievement" class="choose">{{$t('achievement.text2')}}</router-link>-->
                  <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
                <!--</div>-->
                <!--<div class="go-next active">-->
                  <!--<router-link to="/billingRecord">{{$t('achievement.text67')}}</router-link>-->
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
              <div class="bread">
                <span>{{$t('billingRecord.text1')}}</span>
              </div>
              <table class="pcListTable">
                <thead>
                  <tr>
                    <td>{{$t('billingRecord.text2')}}</td>
                    <td>{{$t('billingRecord.text3')}}</td>
                    <td>{{$t('billingRecord.text4')}}</td>
                    <td>{{$t('billingRecord.text5')}}</td>
                    <td>{{$t('billingRecord.text6')}}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr @click="$router.push({path: '/account/recordDetail',query: {id: item.id}})" v-for="(item, index) in transactionList" :key="index">
                    <td>{{item.dingdanid}}</td>
                    <td>{{getAbs(item.amount)}} {{item.currency}}</td>
                    <td>{{parsePaymentType(item.paymentType)}}</td>
                    <td>{{$changeDate(item.createAt, '/')}}</td>
                    <td class="view">{{$t('billingRecord.text7')}}</td>
                  </tr>
                </tbody>
              </table>
              <v-turnPage class="pagesList" :propsPage="propPage" @orderLogTrunPage="parentTurnPage" ref="turnPage"></v-turnPage>
            </div>
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <div class="billing-app">
      <div class="billing-head">
        <router-link tag="div" to="/home" class="back"></router-link>
        <div class="title">{{$t('billingRecord.text8')}}</div>
      </div>
      <ul>
        <li @click="$router.push({path: '/account/recordDetail',query: {id: item.id}})" v-for="(item, index) in transactionList" :key="index">
          <p><span>{{getAbs(item.amount)}} {{item.currency}}</span> <i>{{parsePaymentType(item.paymentType)}}</i></p>
          <p><i>{{$t('billingRecord.text9')}}:{{item.dingdanid}}</i> <i>{{$changeDate(item.createAt, '/')}}</i></p>
        </li>
      </ul>
      <v-turnPage class="pagesList" :propsPage="propPage" @orderLogTrunPage="parentTurnPage" ref="turnPage"></v-turnPage>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      pageIndex: 1,
      pageSize: 10,
      totalPage: 1,
      currentPage: 1,
      transactionList: []
    }
  },
  mounted () {
    this.getTransactionList(1)
  },
  computed: {
    propPage () {
      return this.totalPage
    }
  },
  methods: {
    getTransactionList (page) {
      let url = `${this.$api}/trade/transactionList?page=${page}&pageSize=${this.pageSize}`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          this.transactionList = res.data.data
          this.totalPage = res.data.mapData.page
        }
      }).catch(err => {
        console.log(err)
      })
    },
    parsePaymentType (type) {
      let self = this
      switch (type) {
        case 60 :
          return self.$t('billingRecord.text10')
        case 64 :
          return self.$t('billingRecord.text11')
        case 65 :
          return self.$t('billingRecord.text12')
        case 66 :
          return self.$t('billingRecord.text13')
        case 90 :
          return self.$t('billingRecord.text14')
        case 91 :
          return self.$t('billingRecord.text15')
        case 2 :
          return self.$t('billingRecord.text11')
        case 119 :
          return self.$t('billingRecord.text22')
        default :
          return '--'
      }
    },
    parentTurnPage (page) { // 页码
      this.currentPage = page
      this.getTransactionList(page)
    },
    getAbs (account) {
      if (account < 0) {
        let accounts = Math.abs(account)
        accounts = '-' + this.formattingMoney(accounts)
        return accounts
      } else {
        let accounts = Math.abs(account)
        accounts = this.formattingMoney(accounts)
        return accounts
      }
    },
    formattingMoney (value) {
      if (value === '') {
        return 0.0000
      } else {
        if (!isNaN(value) && value !== null) {
          let f = Math.floor(value * 10000) / 10000
          let _value = f.toString()
          let rs = _value.indexOf('.')
          if (rs < 0) {
            rs = _value.length
            _value += '.'
          }
          while (_value.length <= rs + 4) {
            _value += '0'
          }
          let newStr = _value.split('.')
          if (newStr[0].length <= 3) {
            return newStr[0] + '.' + newStr[1]
          }
          var r = newStr[0].length % 3
          _value = r > 0 ? newStr[0].slice(0, r) + ',' + newStr[0].slice(r, newStr[0].length).match(/\d{3}/g).join(',') : newStr[0].slice(r, newStr[0].length).match(/\d{3}/g).join(',')
          _value = _value + '.' + newStr[1]
          return _value
        }
      }
    }
  },
  components: {
    vHeader: resolve => require(['../../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../../components/footer.vue'], resolve),
    vTurnPage: resolve => require(['../../../components/turnPage.vue'], resolve)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  .achievement
    /*background #001926*/
    .billing-app
      background-color #F8F9FA
      min-height 100vh
      @media screen and (max-width: 1024px)
        display block
      @media screen and (min-width: 1024px)
        display none
    .achievement-web
      background-image url("../../../assets/images/common/bg_500_500.svg")
      background-repeat: repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-repeat: repeat;
      background-size: 500px 500px;
      background-position: 50% 50%;
      @media screen and (max-width: 1024px)
        display none
      @media screen and (min-width: 1025px)
        display block
      .wrap
        width: 100%
        height: 100%
        min-height 100%
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
          width 960px
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
          background-color #f2f2f2
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
        .right-content
          width 100%
          margin-top 50px
          overflow: hidden
          @media screen and (max-width: 1024px){
            width 100%
            display flex
            flex-direction column
          }
          @media screen and (max-width: 1300px){
            padding 0 30px
          }
</style>
