<template>
  <div class="achievement">
    <div class="achievement-web" >
      <!--<v-header></v-header>-->
      <div class="ord-w">
        <div class="wrap-cont">
          <div class="left-content">
            <div class="account">
              <div class="account-up">
                <img v-if="false" class="common-icon" src="../../assets/images/arbitrage/icon-1.svg"/><span class="account-title common-title">{{$t('achievement.text1')}}</span>
              </div>
              <div class="go-next" :class="{isClick: isFlag0 === 0}" @click="selectList(0)">
                <router-link class="choose" to="/account/achievement">{{$t('achievement.text2')}}</router-link>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
              <div class="go-next" :class="{isClick: isFlag0 === 1}" @click="selectList(1)">
                <router-link to="/account/billingRecord" class="choose" >{{$t('achievement.text67')}}</router-link>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
            </div>
            <div class="profit-order">
              <div class="account-up">
                <img v-if="false" class="common-icon" src="../../assets/images/arbitrage/icon-2.svg"/><span class="account-title common-title">{{$t('achievement.text3')}}</span>
              </div>
              <div class="go-next ongoing isNow" :class="{isClick: isFlag0 === 2}" @click="selectList(2)" >
                <div class="choose" >{{$t('achievement.text4')}}</div>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
              <div class="go-next completed" :class="{isClick: isFlag0 === 3}" @click="selectList(3)" >
                <div class="choose" >{{$t('achievement.text5')}}</div>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
            </div>
            <div class="profit">
              <div class="account-up">
                <img v-if="false" class="common-icon" src="../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">{{$t('achievement.text13')}}</span>
              </div>
              <div class="go-next revenue-record" :class="{isClick: isFlag0 === 4}" @click="selectList(4)">
                <router-link class="choose" to="/account/profitLog" >{{$t('achievement.text6')}}</router-link>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
              <div class="go-next accumulativeper" :class="{isClick: isFlag0 === 5}" @click="selectList(5)">
                <router-link class="choose" to="/account/accumulativePerformance" >{{$t('achievement.text7')}}</router-link>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
              <div class="go-next accumulativeper" :class="{isClick: isFlag0 === 6}" @click="selectList(6)">
                <router-link class="choose" to="/account/fundPerformance">{{$t('achievement.text01')}}</router-link>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
            </div>
            <div class="bogeFund">
              <div class="account-up">
                <img v-if="false" class="common-icon" src="../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">{{$t('bogeFund.text1')}}</span>
              </div>
              <div class="go-next" :class="{isClick: isFlag0 === 7}" @click="selectList(7)">
                <router-link class="choose" to="/account/bogeFund">{{$t('bogeFund.text2')}}</router-link>
                <div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>
              </div>
              <!--<div class="go-next bogeFund-record" :class="{isClick: isFlag0 === 8}" @click="selectList(8)">-->
                <!--<router-link class="choose" to="/account/myInformation">{{$t('myInformation.text1')}}</router-link>-->
                <!--<div class="turn-next"><img src="../../assets/images/common/row-13-8.svg"/></div>-->
              <!--</div>-->
            </div>
          </div>
          <div class="right-cont">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        isFlag0: 0,
        isLoadMore: true,
        listData: [],
        personalAmount: '',
        nowPage: 1, // 当前页数
        pagesTotal: 1, // 订单记录总页数
        person: '',
        fundAmount: '',
        betpaycurrency: ''
      }
    },
    components: {
      vHeader: resolve => require(['@/components/header.vue'], resolve),
      vFooter: resolve => require(['@/components/footer.vue'], resolve),
      vTurnPage: resolve => require(['@/components/turnPage.vue'], resolve)
    },
    mounted () {
      this.getPath()
    },
    methods: {
      selectList (index) {
        this.isFlag0 = index
        if (index === 0) {
          this.$router.push({
            path: '/account/achievement'
          })
        } else if (index === 1) {
          this.$router.push({
            path: '/account/billingRecord'
          })
        } else if (index === 2) {
          this.$router.push({
            path: '/account/orderProcess',
            query: {
              order: 1
            }
          })
        } else if (index === 3) {
          this.$router.push({
            path: '/account/orderProcess',
            query: {
              order: 2
            }
          })
        } else if (index === 4) {
          this.$router.push({
            path: '/account/profitLog'
          })
        } else if (index === 5) {
          this.$router.push({
            path: '/account/accumulativePerformance'
          })
        } else if (index === 6) {
          this.$router.push({
            path: '/account/fundPerformance'
          })
        } else if (index === 7) {
          this.$router.push({
            path: '/account/bogeFund'
          })
        } else if (index === 8) {
          this.$router.push({
            path: '/account/myInformation'
          })
        }
      },
      getPath () {
        if (this.$route.path === '/account/achievement') {
          this.isFlag0 = 0
        } else if (this.$route.path === '/account/billingRecord') {
          this.isFlag0 = 1
        } else if (this.$route.path === '/account/recordDetail') {
          this.isFlag0 = 1
        } else if (Number(this.$route.query.order) === 1) {
          this.isFlag0 = 2
        } else if (Number(this.$route.query.order) === 2) {
          this.isFlag0 = 3
        } else if (this.$route.path === '/account/completedOrderDetail') {
          this.isFlag0 = 3
        } else if (this.$route.path === '/account/processOrderDetail') {
          this.isFlag0 = 2
        } else if (this.$route.path === '/account/profitLog') {
          this.isFlag0 = 4
        } else if (this.$route.path === '/account/profitLogDetail') {
          this.isFlag0 = 4
        } else if (this.$route.path === '/account/accumulativePerformance') {
          this.isFlag0 = 5
        } else if (this.$route.path === '/account/fundPerformance') {
          this.isFlag0 = 6
        } else if (this.$route.path === '/account/bogeFund') {
          this.isFlag0 = 7
        } else if (this.$route.path === '/account/bogeFundDetail') {
          this.isFlag0 = 7
        } else if (this.$route.path === '/account/myInformation') {
          this.isFlag0 = 8
        }
      }
    },
    watch: {
      '$route': 'getPath'
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mixin.styl"
  *{
    padding: 0;
    margin: 0;
  }
  .ord-w
    position: relative
    min-height calc(100vh - 80px)
  .achievement
    .achievement-web
      background-image url("../../assets/images/common/bg_500_500.svg")
      background-repeat:repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-size: 500px 500px;
      background-position: 50% 50%;
      display block
      @media screen and (max-width: 1024px){
        background-image: none
      }
      .wrap-cont
        width 1280px
        margin 0 auto
        padding-top 80px
        display flex
        flex-direction row
        padding-bottom 100px
        @media screen and (max-width: 1300px){
          width 100%
          display flex
          flex-direction row
          white-space:nowrap
        }
        @media screen and (max-width: 1024px){
          white-space:inherit
        }
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          min-width 200px
          height auto
          background-color #f2f2f2
          @media screen and (max-width: 1300px){
            background-color #f2f2f2
            display none
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
          .isClick
            display flex
            justify-content space-between
            .choose
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
        /*@media screen and (max-width: 1300px){*/
        /*display flex*/
        /*flex-direction row*/
        /*height auto*/
        /*}*/
        /*右边样式*/
        .right-content
          width 920px
          margin-top 50px
          @media screen and (max-width: 1300px){
            display flex
            flex-direction column
          }
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
      .back
        position absolute
        top 22px
        left 18px
        background-image url("../../assets/images/common/row-34-24_1.svg")
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
  .right-cont
    flex 1
    @media screen and (max-width: 1200px) {
      width: 100%
    }
</style>
