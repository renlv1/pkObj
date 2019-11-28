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
              <!--<div class="go-next revenue-record" @click="$router.push({path: '/fundPerformance'})">-->
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
            <div class="right-title"><span>{{$t('achievement.text7')}}</span></div>
            <div class="content-one common-style">
              <p class="header common-text">{{$t('achievement.text65')}}</p>
              <p class="amount common-text">{{personalAmount | formattingMoney}} <span class="blue">{{betpaycurrency}}</span></p>
            </div>
            <div class="table-wrap">
              <div class="table-title">
                <div>{{$t('achievement.text14')}}</div>
                <div style="width:27%">{{$t('achievement.text20')}}</div>
                <div style="width: 21%">{{$t('achievement.text0')}}</div>
                <div style="width: 31%">{{$t('achievement.text17')}}</div>
              </div>
              <div class="table-content" v-for="(item,index) in listData" :key="index">
                <div>{{item.id}}</div>
                <div style="width:27%">{{item.name}}</div>
                <div style="width: 21%">{{item.amount | formattingMoney}} SIE</div>
                <div style="width: 31%">{{$changeDate(item.updateAt, '/', 1)}}</div>
              </div>
              <div class="load-more-box" v-show="isLoadMore">
                <p class="desc"></p>
                <div class="loading-img">
                  <img src="../../../assets/images/arbitrage/loading.gif" alt="">
                </div>
              </div>
              <div class="prompt" v-if="listData === null">{{$t('bogeFund.text9')}}</div>
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
        <div class="title">{{$t('achievement.text7')}}</div>
      </div>
      <div class="de-c">
        <div class="main-content">
          <div class="content-title">{{$t('achievement.text21')}}</div>
          <div class="trade-money">{{personalAmount | formattingMoney}} <span class="money-yellow">{{betpaycurrency}}</span></div>
        </div>
        <div class="tab-content">
          <div class="tab-content-now">
            <ul>
              <li v-for="item in listData" :key="item.index">
                <div class="content-top">
                  <div class="num">{{item.name}}</div>
                  <div class="date">{{$changeDate(item.updateAt, '/', 1)}}</div>
                </div>
                <div class="usd">
                  {{item.amount | formattingMoney}} <span style="color: #ffc933">SIE</span>
                </div>
              </li>
            </ul>
            <div class="prompt" v-if="listData === null">{{$t('bogeFund.text9')}}</div>
            <!--<div class="prompt" v-if="listData.length === 0">暂时还没有进行中的套利哇！</div>-->
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
      personalAmount: '',
      nowPage: 1, // 当前页数
      pagesTotal: 1, // 订单记录总页数
      person: '',
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
    this.getUserBalance()
  },
  methods: {
    changeTime (time) {
      return this.$changeDate(time, '/', 1)
    },
    // 用户信息
    // getBlance () {
    //   this.$http.post(`${this.$api}/user/balance`).then((res) => {
    //     if (res.data.success === true) {
    //       this.getPerformanceLog(1)
    //     }
    //   })
    // },
    // 获取用户信息
    getUserBalance () {
      let url = `${this.$api}/user/balance`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.betpaycurrency = res.data.mapData.betpaycurrency
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 获取业绩累计数据
    getPerformanceLog (page) {
      this.$http.post(`${this.$api}/accumulate/accumulateAccount?pageIndex=${page}&pageSize=10`).then((res) => {
        if (res.data.success === true) {
          this.isLoadMore = false
          this.listData = res.data.data.list
          this.personalAmount = res.data.data.person
          // console.log(res.data.data.person)
          this.pagesTotal = res.data.data.totalPage // 总页数
          // if (this.listData.length === 0) { // 如果数组为空，但是页数为1，翻页仍然显示
          //   this.pagesTotal = 0
          // }
        } else {
          this.isLoadMore = false
          this.pagesTotal = 0
        }
      }).catch(err => {
        console.log(err)
        this.isLoadMore = false
      })
    },
    parentTurnPage (page) {
      this.nowPage = page
      this.getPerformanceLog(page)
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
      background-repeat: repeat;
      background-size: 500px 500px;
      background-position: 50% 50%;
      display block
      @media screen and (max-width: 1024px)
        display none
      .wrap-web
        width 100%
        margin 0 auto
        padding-top 80px
        display flex
        flex-direction row
        padding-bottom 200px
        @media screen and (max-width: 1300px){
          width 100%
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
              a
                color #e60000
              .turn-next
                display block
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
              height 100px
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
          .prompt
            margin-top 30px
            text-align center
            color #c90010
  .pagesList
    display flex
    flex-direction row-reverse
    /*margin-right 200px*/
    padding-bottom 200px
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
