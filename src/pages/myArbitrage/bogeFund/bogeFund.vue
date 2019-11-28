<template>
  <div class="achievement">
    <div class="achievement-web" >
      <v-header></v-header>
      <div class="ord-w">
        <div class="wrap-web">
          <!--<div class="left-content">-->
            <!--<div class="account">-->
              <!--<div class="account-up">-->
                <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span class="account-title common-title">{{$t('achievement.text1')}}</span>-->
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
                <!--<router-link to="/profitLog" >{{$t('achievement.text6')}}</router-link>-->
                <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
              <!--</div>-->
              <!--<div class="go-next accumulativeper" @click="$router.push({path: '/accumulativePerformance'})">-->
                <!--<router-link to="/accumulativePerformance" >{{$t('achievement.text7')}}</router-link>-->
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
                <!--<router-link class="choose" to="/bogeFund">{{$t('bogeFund.text2')}}</router-link>-->
                <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
              <!--</div>-->
              <!--<div class="go-next" @click="$router.push('/myInformation')">-->
                <!--<router-link class="choose" to="/myInformation">{{$t('myInformation.text1')}}</router-link>-->
                <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <div class="right-content">
            <div class="right-title"><span>{{$t('bogeFund.text2')}}</span></div>
            <div class="content-one common-style">
              <p class="header common-text">{{$t('bogeFund.text3')}}</p>
              <p class="amount common-text">{{fundAmount | formattingMoney}} <span class="blue"> SIE</span></p>
            </div>
            <div class="table-wrap">
              <div class="table-title">
                <div>{{$t('achievement.text14')}}</div>
                <div style="width: 20%">{{$t('bogeFund.text6')}}</div>
                <div style="width:20%">{{$t('bogeFund.text4')}}(SIE)</div>
                <div style="width: 20%">{{$t('bogeFund.text5')}}</div>
                <div style="width: 20%">{{$t('bogeFund.text14')}}</div>
                <div style="width: 10%">{{$t('bogeFund.text7')}}</div>
              </div>
              <div class="table-content" v-for="(item,index) in listData" :key="index" @click="toDetail(item)">
                <div>{{item.id}}</div>
                <div style="width: 20%">{{recordStatus(item.category)}}</div>
                <div style="width:20%">{{item.amount | formattingMoney}} </div>
                <div style="width: 20%">{{$changeDate(item.createDate, '/', 1)}}</div>
                <div style="width: 20%">{{item.period}} {{$t('bogeFund.text15')}}</div>
                <div style="width: 10%; color: #e60000">{{$t('bogeFund.text8')}}</div>
              </div>
              <div class="load-more-box" v-show="isLoadMore">
                <p class="desc"></p>
                <div class="loading-img">
                  <img src="../../../assets/images/arbitrage/loading.gif" alt="">
                </div>
              </div>
              <div class="prompt" v-show="emptyData">{{$t('bogeFund.text9')}}</div>
              <v-turnPage v-show="this.listData !== ''" class="pagesList" :propsPage="pagesTotal" @accumulativeTrunPage="parentTurnPage"></v-turnPage>
            </div>
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <div class="achievement-mobile">
      <div class="head">
        <div class="back" @click="$router.go(-1)"></div>
        <div class="title">{{$t('bogeFund.text1')}}</div>
        <!--<div class="right-btn" @click="$router.push({path: '/account/myInformation',query:{flag:1}})">{{$t('myInformation.text1')}}</div>-->
      </div>
      <div class="de-c">
        <div class="main-content">
          <div class="content-title">{{$t('bogeFund.text3')}}</div>
          <div class="trade-money">{{fundAmount | formattingMoney}} <span class="money-yellow"> SIE</span></div>
        </div>
        <div class="tab-content">
          <div class="tab-content-now">
            <ul>
              <li v-for="(item,index) in listData" :key="index" @click="toDetail(item)">
                <div class="content-top">
                  <div class="num">{{$t('achievement.text14')}}：{{item.id}}</div>
                  <div class="date">{{$changeDate(item.createDate, '/', 1)}}</div>
                </div>
                <div class="buy-box">
                  <div class="num">{{$t('bogeFund.text4')}}</div>
                  <div class="date">{{item.amount | formattingMoney}} SIE</div>
                </div>
                <div class="rate-box">
                  <div class="num">{{$t('bogeFund.text6')}}</div>
                  <div class="date">{{recordStatus(item.category)}}</div>
                </div>
                <div class="rate-box">
                  <div class="num">{{$t('bogeFund.text14')}}</div>
                  <div class="date">{{item.period}}{{$t('bogeFund.text15')}}</div>
                </div>
              </li>
            </ul>
            <div class="prompt" v-show="emptyData">{{$t('bogeFund.text9')}}</div>
            <v-turnPage v-show="this.listData !== ''"  :propsPage="pagesTotal" @accumulativeTrunPage="parentTurnPage"></v-turnPage>
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
        isLoadMore: true,
        listData: [],
        emptyData: false,
        personalAmount: '',
        nowPage: 1, // 当前页数
        pagesTotal: 1, // 订单记录总页数
        person: '',
        fundAmount: '',
        betpaycurrency: ''
      }
    },
    components: {
      vHeader: resolve => require(['../../../components/header.vue'], resolve),
      vFooter: resolve => require(['../../../components/footer.vue'], resolve),
      vTurnPage: resolve => require(['../../../components/turnPage.vue'], resolve)
    },
    mounted () {
      // this.getBlance()
      this.getPerformanceLog(1)
      this.getFundAmount()
    },
    methods: {
      changeTime (time) {
        return this.$changeDate(time, '/', 1)
      },
      // 获取投资记录
      getPerformanceLog (page) {
        this.$http.get(`${this.$api}/fund/list?pageNo=${page}&pageSize=10`).then((res) => {
          if (res.data.success === true) {
            // console.log(res.data.data.results)
            this.isLoadMore = false
            this.listData = res.data.data.results
            if (this.listData.length > 0) {
              this.emptyData = false
            } else {
              this.emptyData = true
            }
            this.pagesTotal = res.data.data.totalPage // 总页数
          } else {
            this.isLoadMore = false
            this.pagesTotal = 0
          }
        }).catch(err => {
          console.log(err)
          this.isLoadMore = false
        })
      },
      toDetail(item) {
        this.$router.push({
          path: '/account/bogeFundDetail',
          query: {
            obj: JSON.stringify({
              id: item.id,
              createDate: item.createDate,
              rate: item.rate,
              endDate: item.endDate,
              endRate: item.endRate,
              fundId: item.fundId,
              period: item.period,
              amount: item.amount,
              category: item.category
            })
          }
        })
      },
      recordStatus (category) {
        if (category === 1) {
          return this.$t('bogeFund.text18')
        } else if (category === 2) {
          return this.$t('bogeFund.text19')
        } else if (category === 3) {
          return this.$t('bogeFund.text22')
        }
      },
      // 8.1.3 基金金额查询
      getFundAmount() {
        this.$http.get(`${this.$api}/fund/amount`).then((res) => {
          if (res.data.success === true) {
            // console.log(res.data)
            this.fundAmount = res.data.data.total
          }
        }).catch(err => {
          console.log(err)
        })
      },
      parentTurnPage(page) {
        this.nowPage = page
        this.getPerformanceLog(page)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  *{
    padding: 0;
    margin: 0;
  }
  .ord-w
    position: relative
    min-height calc(100vh - 80px)
  .achievement
    .achievement-web
      background-image url("../../../assets/images/common/bg_500_500.svg")
      background-repeat:repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-size: 500px 500px;
      background-position: 50% 50%;
      display block
      @media screen and (max-width: 1024px)
        display none
      .wrap-web
        /*width 960px*/
        margin 0 auto
        display flex
        flex-direction row
        /*padding-bottom 200px*/
        @media screen and (max-width: 1300px){
          display flex
          flex-direction row
          white-space:nowrap
        }
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          height 800px
          background-color #f2f2f2
          @media screen and (max-width: 1024px){
            background-color #f2f2f2
          }
          @media screen and (max-width: 1300px){
            // height auto
            margin-bottom 0
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
                font-size 12px
              &:hover
                color #e60000
            .isNow
              margin-bottom 30px
            a
              font-size 16px
              color #1a1a1a
              @media screen and (max-width: 1024px){
                font-size 12px
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
            .bogeFund-record
              display flex
              justify-content space-between
              a
                color #e60000
              .turn-next
                display block
          .profit
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
            .revenue-record
              display flex
              justify-content space-between
              &:hover
                a
                  color #e60000
            .accumulativeper
              display flex
              justify-content space-between
          /*@media screen and (max-width: 1300px){*/
            /*display flex*/
            /*flex-direction row*/
            /*height auto*/
          /*}*/
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
              @media screen and (max-width: 1000px)
                width: 100%;
          .common-style
            width 100%
            height 140px
            background-color #f2f2f2
            margin-bottom 20px
            .header
              font-size 18px
              color #1a1a1a
            .common-text
              padding-top  20px
              margin-left 40px
              color #232044
              font-size 16px
            .amount
              font-size 18px
              color #1a1a1a
              font-weight bold
              @media screen and (max-width: 530px){
                font-size 18px
              }
              .blue
                color #e60000
              .yellow
                color #ffc933
          .table-wrap
            width 100%
            @media screen and (max-width: 1000px){
              width: 100%;
            }
            .table-title
              display flex
              justify-content  space-between
              align-items center
              font-size 16px
              height 40px
              background-color #f2f2f2 !important
              @media screen and (max-width: 530px){
                font-size 16px
              }
              div
                color #1a1a1a
                font-weight bold
                width 10%
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
  .achievement-mobile
    position: absolute
    width: 100%
    top: 0
    height auto
    background-color #f8f9fa
    display none
    @media screen and (max-width: 1024px) {
      display block
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
       .right-btn
         position absolute
         top 0px
         right 18px
         font-size 14px

  .de-c
    position: fixed
    width 100%
    top: 60px
    bottom: 0
    overflow: auto
    background-color: #f8f9fa;
    .main-content
      margin 10px 20px 20px
      background-color #ffffff
      height 150px
      .content-title
        text-align center
        padding-top 20px
        font-size 16px
        color #1a1a1a
      .trade-money
        text-align center
        margin 20px 0
        font-size 28px
        color #1a1a1a
        font-weight bold
        .money-yellow
          color #e60000
          font-weight bold
    .tab-content
      .tab-content-now
        ul
          padding-top 10px
          display flex
          flex-direction column
          width 100%
          li
            padding-left 20px
            padding-right 20px
            height 120px
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
            .buy-box
              display flex
              flex-direction row
              justify-content space-between
              font-size 14px
              color #1a1a1a
            .rate-box
              display flex
              flex-direction row
              justify-content space-between
              font-size 14px
              color #1a1a1a
  .pagesList
    display flex
    flex-direction row-reverse
    /*margin-right 200px*/
    /*padding-bottom 200px*/
    @media screen and (max-width: 1700px) {
      margin-right 50px!important
    }
  .prompt
    margin-top 30px
    text-align center
    color #c90010
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
</style>
