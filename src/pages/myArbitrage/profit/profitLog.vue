<template>
  <div class="profitLog">
    <div class="profitLog-web" >
      <v-header></v-header>
      <div class="ord-w">
        <div class="wrap-web">
          <!--<div class="left-content">-->
            <!--<div class="account">-->
              <!--<div class="account-up">-->
                <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span class="account-title common-title">{{$t('achievement.text1')}}</span>-->
              <!--</div>-->
              <!--<div class="go-next" @click="$router.push({path: '/achievement'})">-->
                <!--<router-link class="choose" to="/achievement" active-class="active">{{$t('achievement.text2')}}</router-link>-->
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
                <!--<router-link to="/profitLog" active-class="active">{{$t('achievement.text6')}}</router-link>-->
                <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
              <!--</div>-->
              <!--<div class="go-next accumulativeper" @click="$router.push({path: '/accumulativePerformance'})">-->
                <!--<router-link class="choose" to="/accumulativePerformance" active-class="active">{{$t('achievement.text7')}}</router-link>-->
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
            <div class="right-title"><span>{{$t('achievement.text22')}} </span></div>
            <div class="filter">
              <div class="dateFilter">
                <h3>{{$t('pageTurn.text3')}}</h3>
                <el-date-picker
                  v-model="incomeValue"
                  type="daterange"
                  unlink-panels
                  :range-separator="$t('pageTurn.text4')"
                  :start-placeholder="$t('pageTurn.text5')"
                  :end-placeholder="$t('pageTurn.text6')"
                  format="yyyy-MM-dd"
                  value-format="yyyy-MM-dd"
                  :picker-options="pickerOptions0">
                </el-date-picker>
              </div>
              <div class="queryBtn" @click="getArbitrageLog(1)">
                {{$t('pageTurn.text12')}}
              </div>
            </div>
            <div class="table-wrap">
              <div class="table-title">
                <div>{{$t('achievement.text34')}}</div>
                <div style="width:22%">{{$t('achievement.text3')}}</div>
                <div style="width:18%">{{$t('achievement.text24')}}</div>
                <div style="width:18%">{{$t('achievement.text25')}}</div>
                <div style="width:16%">{{$t('achievement.text17')}}</div>
                <div style="width:16%">{{$t('achievement.text18')}}</div>
              </div>
              <div class="table-content" v-for="(item,index) in listData" :key="index" @click="$router.push({path: '/account/profitLogDetail', query: {id:item.id, proObj: JSON.stringify(item)}})">
                <div>{{item.id}}</div>
                <div style="width: 22%">{{item.orderId}}</div>
                <div style="width: 18%">{{item.total | formattingMoney}}{{item.betCurrency}}</div>
                <div style="width: 18%">{{item.pro | formattingMoney}}{{item.profitingCurrency}}</div>
                <div style="width: 16%">{{$changeDate(item.date, '/')}}</div>
                <div class="check-detail" style="width: 16%">
                  <router-link :to="{path: '/account/profitLogDetail', query: {id:item.id, proObj: JSON.stringify(item)}}">{{$t('achievement.text10')}}</router-link>
                </div>
              </div>
              <div class="load-more-box" v-show="isLoadMore">
                <p class="desc"></p>
                <div class="loading-img">
                  <img src="../../../assets/images/arbitrage/loading.gif" alt="">
                </div>
              </div>
              <div class="prompt" v-show="emptyData">{{$t('bogeFund.text9')}}</div>
              <v-turnPage v-if="this.listData !== ''" class="pagesList" :propsPage="pagesTotal" @profitTrunPage="parentTurnPage"></v-turnPage>
            </div>
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <!--手机结构-->
    <div class="profitLog-mobile">
      <div class="head">
        <div class="title">{{$t('achievement.text22')}}</div>
        <div class="back" @click="$router.go(-1)"></div>
      </div>
      <div class="de-c">
        <div class="tab-content">
          <ul>
            <router-link tag="li" v-for="item in listData" :key="item.index" :to="{path: '/account/profitLogDetail', query: {id:item.id, proObj: JSON.stringify(item)}}">
              <div class="content-top">
                <div class="num">{{$t('achievement.text23')}} {{item.id}}</div>
                <div class="date">{{$changeDate(item.date, '/')}}</div>
              </div>
              <div class="usd">
                <span>{{$t('achievement.text16')}}: </span><span style="font-weight: bold">{{item.total | formattingMoney}}</span> <span style="font-weight: bold;color: #e60000">{{item.betCurrency}}</span>
              </div>
              <div class="profits">
                <span>{{$t('achievement.text26')}} </span ><span style="font-weight: bold">{{item.pro | formattingMoney}}</span><span style="font-weight: bold;color: #e60000">{{item.profitingCurrency}}</span>
              </div>
            </router-link>
            <div class="load-more-box" v-show="isLoadMore">
              <!--<p class="desc">{{$t('popup.text9')}}</p>-->
              <div class="loading-img">
                <img src="../../../assets/images/arbitrage/loading.gif" alt="">
              </div>
            </div>
            <div class="prompt" v-show="emptyData">{{$t('bogeFund.text9')}}</div>
          </ul>
          <v-turnPage v-if="listData.length !== 0"  :propsPage="pagesTotal" @profitTrunPage="parentTurnPage"></v-turnPage>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() > Date.now() - 8.64e6
        }
      },
      emptyData: false,
      isLoadMore: true,
      active: false,
      listData: [],
      nowPage: 1, // 当前页数
      pagesTotal: 1, // 订单记录总页数
      incomeValue: ''
    }
  },
  components: {
    vTurnPage: resolve => require(['../../../components/turnPage.vue'], resolve),
    vHeader: resolve => require(['../../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../../components/footer.vue'], resolve)
  },
  mounted () {
    // this.getUserBalance()
    this.$nextTick(() => {
      this.getArbitrageLog(1)
    })
  },
  methods: {
    changeTime (time) {
      return this.$changeDate(time, '/')
    },
    // 登陆
    // login () {
    //     let url = `${this.$api}/bet/queryIncomeList?username=liulian&password=123123aA`
    //     this.$http.post(url).then((res) => {
    //       if (res.data.success) {
    //         this.getArbitrageLog(1)
    //         // this.getUserBalance()
    //       }
    //     }).catch(() => {
    //     })
    // },
    // 获取用户信息
    // getUserBalance () {
    //   let url = `${this.$api}/user/balance`
    //   this.$http.post(url).then((res) => {
    //     this.getArbitrageLog(1)
    //   }).catch(() => {
    //   })
    // },
    // 获取收益记录列表数据
    getArbitrageLog (page) {
      let url = ''
      if (this.incomeValue) {
        url = `${this.$api}/bet/queryIncomeList?pageSize=10&pageIndex=${page}&starttime=${this.incomeValue[0]} 00:00:00&endtime=${this.incomeValue[1]} 23:59:59`
      } else {
        url = `${this.$api}/bet/queryIncomeList?pageSize=10&pageIndex=${page}`
      }
      this.$http.post(url).then(res => {
        if (res.data.success) {
          // console.log(res.data.data)
          this.isLoadMore = false
          this.pagesTotal = res.data.mapData.sumpage // 总页数
          // let listObj = {id: '', orderId: '', total: '', pro: '', payTotal: '', accTotal: '', personAmount: '', date: ''}
          if (res.data.data.length > 0) {
            this.listData = []
            this.emptyData = false
            res.data.data.forEach((val) => {
              let listObj = {}
              listObj.id = val.id
              listObj.orderId = val.arbitrageId
              listObj.date = val.createTime
              listObj.betCurrency = val.betCurrency
              listObj.profitingCurrency = val.profitingCurrency
              this.listData.push(listObj)
            })
          } else {
            this.emptyData = true
            this.listData = []
          }
          if (this.listData.length > 0) {
            this.listData.forEach((val) => {
              // 投注总金额
              val.total = res.data.mapData.arsum[val.orderId].betAmount
              val.pro = res.data.mapData.arsum[val.orderId].profitingAmount
              val.payTotal = res.data.mapData.arsum[val.orderId].payAmount
              val.accTotal = res.data.mapData.arsum[val.orderId].accountAmount
              val.personAmount = res.data.mapData.arsum[val.orderId].personalAmount
              val.fundAmount = res.data.mapData.arsum[val.orderId].fundAmount
              val.groupAmount = res.data.mapData.arsum[val.orderId].groupAmount
              val.fundAmountUsd = res.data.mapData.arsum[val.orderId].fundAmountUsd
              val.groupAmountUsd = res.data.mapData.arsum[val.orderId].groupAmountUsd
              val.personalAmountUsd = res.data.mapData.arsum[val.orderId].personalAmountUsd
              val.accountAmount = res.data.mapData.arsum[val.orderId].accountAmount
              val.profitingAmount = res.data.mapData.arsum[val.orderId].profitingAmount
              val.profitingAmountSie = res.data.mapData.arsum[val.orderId].profitingAmountSie
            })
          }
          // if (res.data.resultCode === 'NOT_LOGGEDIN') {
          //   this.$router.push('/login')
          // } else {
          //   this.pagesTotal = 0
          // }
        } else {
          this.pagesTotal = 0
          this.isLoadMore = false
        }
      }).catch(err => {
        this.isLoadMore = false
        console.log(err)
      })
    },
    parentTurnPage (page) {
      this.nowPage = page
      this.getArbitrageLog(page)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  .ord-w
    position: relative
    min-height calc(100vh - 80px)
  .profitLog
    /*background #001926*/
    .profitLog-web
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
      .wrap-web
        width 100%
        margin 0 auto 160px
        padding-top 80px
        display flex
        flex-direction row
        @media screen and (max-width: 1300px){
          width 100%
          display flex
          flex-direction row
          /*align-items center*/
          white-space:nowrap
        }
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          height 800px
          background-color #f2f2f2
          @media screen and (max-width: 1300px){
            // height auto
            /*padding-left 50px*/
            margin-bottom: 0
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
            @media screen and (max-width: 1024px){
              font-size 16px
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
              @media screen and (max-width: 1024px)
                font-size 14px
              &:hover
                width 100%
                color #e60000 !important
            .isNow
              margin-bottom 30px
            a
              font-size 16px
              color #1a1a1a
              @media screen and (max-width: 1024px){
                font-size 14px
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
              display flex
              justify-content space-between
              a
                color #e60000
              .turn-next
                display block
            .accumulativeper
              display flex
              justify-content space-between
          @media screen and (max-width: 1300px){
            display flex
            flex-direction row
            height auto
          }
        /*右边样式*/
        .right-content
          width 100%
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
          .table-wrap
            width 100%
            .table-title
              display flex
              justify-content  space-between
              align-items center
              font-size 16px
              height 40px
              background-color #f2f2f2 !important
              @media screen and (max-width: 530px){
                font-size 14px
              }
              div
                color #1a1a1a
                width 10%
                font-weight bold
                text-align center
            .table-content
              cursor pointer
              display flex
              justify-content  space-between
              align-items center
              font-size 16px
              height 50px
              div
                width 10%
                text-align center
                font-size 16px
                color #1a1a1a
              &:hover
                position relative
                background-color #f2f2f2
                box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
              .check-detail
                a
                  font-size 16px
                  color #e60000
                  cursor pointer
            .table-content:nth-child(odd)
              background-color #f2f2f2
              /*opacity .7*/
  /*手机端样式*/
  .profitLog
    .profitLog-mobile
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
      .tab-content
        color #fff
        margin-bottom 30px
        ul
          padding-top 10px
          display flex
          flex-direction column
          width 100%
          li
            padding-left 20px
            padding-right 20px
            height 140px
            display flex
            flex-direction column
            justify-content space-around
            &:nth-of-type(odd)
              background #ffffff
            .content-top
              display flex
              flex-direction row
              justify-content space-between
              color #1a1a1a
              .num
                font-size 14px
              .date
                font-size 14px
            .usd
              font-size 16px
              color #1a1a1a
            .profits
              font-size 16px
              color #1a1a1a
        .prompt
          margin-top 30px
          text-align center
          color #c90010
  .pagesList
    margin-top 10px
    float right
    margin-right 0 !important
  //正在加载中样式
.load-more-box
  padding-bottom: 30px
  .desc
    font-size: 24px
    color #fff
    text-align: center
    margin-top: 30px
  .loading-img
    width: 50px
    height: 50px
    margin: 30px auto 0
    img
      width: 100%
      height: 100%
.prompt
  margin-top 30px
  text-align center
  color #c90010
</style>
