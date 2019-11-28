<template>
  <div class="orderCompleted">
    <div class="orderCompleted-web">
      <div class="wrap" >
        <div class="left-content">
          <div class="account">
            <div class="account-up">
              <img class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span class="account-title common-title">概览</span>
            </div>
            <div class="goNext"> <router-link to="/achievement" active-class="active">账户概览</router-link></div>
          </div>
          <div class="profit-order">
            <div class="account-up">
              <img class="common-icon" src="../../../assets/images/arbitrage/icon-2.svg"/><span class="account-title common-title">套利订单</span>
            </div>
            <div class="goNext ongoing"> <router-link to="/orderProcess" active-class="active">进行中</router-link></div>
            <div class="goNext completed"> <router-link to="/orderCompleted" active-class="active">已完成</router-link></div>
          </div>
          <div class="profit">
            <div class="account-up">
              <img class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">收益</span>
            </div>
            <div class="goNext revenue-record"> <router-link to="/profitLog" active-class="active">收益记录</router-link></div>
            <div class="goNext accumulativeper"> <router-link to="/accumulativePerformance" active-class="active">业绩累计</router-link></div>
          </div>
        </div>
        <div class="right-content">
          <div class="right-title"><span>套利订单 </span><i> > </i><span> 已完成</span></div>
          <div class="table-wrap">
            <div class="table-title">
              <div>订单编号</div>
              <div style="width: 200px">套利项目</div>
              <div style="width: 240px">投注金额</div>
              <div style="width: 240px">获利金额</div>
              <div>时间</div>
              <div>操作</div>
            </div>
            <div class="table-content" v-for="(item,index) in listData" :key="index">
              <div>{{item.id}}</div>
              <div style="width: 200px">{{item.title}}</div>
              <div style="width: 240px">{{item.alreadyAmount}}{{item.currency}}</div>
              <div style="width: 240px">{{item.betlist}} {{item.currency}}</div>
              <div>{{changeTime(item.endTime)}}</div>
              <div class="checkDetail">
                <router-link :to="{path: '/completedOrderDetail', query: {id: item.id}}" >查看详情</router-link>
              </div>
            </div>
            <v-turnPage class="pagesList" :propsPage="pagesTotal" @discountTrunPage="parentTurnPage"></v-turnPage>
          </div>
        </div>
      </div>
    </div>
    <arbitrageOrder class="orderCompleted-mobile"></arbitrageOrder>
  </div>
</template>

<script type="text/ecmascript-6">
import arbitrageOrder from './arbitrageOrder.vue'
export default {
  data () {
    return {
      active: false,
      items: [
        {id: '001', project: 'sdfsdf', amount: '500000USD', profit: '500000USD', time: '2018/7/12 12:00'},
        {id: '001', project: 'sdfsdf', amount: '500000USD', profit: '500000USD', time: '2018/7/12 12:00'},
        {id: '001', project: 'sdfsdf', amount: '500000USD', profit: '500000USD', time: '2018/7/12 12:00'},
        {id: '001', project: 'sdfsdf', amount: '500000USD', profit: '500000USD', time: '2018/7/12 12:00'}
      ],
      pagesTotal: 1, // 查看业绩总页数
      nowPage: 1, // 当前页数
      listData: {}
    }
  },
  created () {
    this.$nextTick(() => {
      // this.getArbitrageLog(1)
      this.login()
    })
  },
  components: {
    vTurnPage: resolve => require(['../../../components/turnPage.vue'], resolve),
    arbitrageOrder
  },
  methods: {
    changeTime (time) {
      return this.$changeDate(time, '/', 1)
    },
    // 登陆
    login () {
      let url = `${this.$api}/user/userlogin?username=liulian&password=123123aA`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.getArbitrageLog(1)
          // this.getUserBalance()
        }
      }).catch(() => {
      })
    },
    // 获取已完成列表数据
    getArbitrageLog (page) {
      let url = `${this.$api}/bet/queryBetList?pageSize=10&pageIndex=${page}&status=2`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          console.log(res.data)
          this.listData = res.data.data
          if (res.data.mapData.totalpage) {
            this.pagesTotal = res.data.mapData.totalPage // 总页数
            if (this.listData.length === 0) { // 如果数组为空，但是页数为1，翻页仍然显示
              this.pagesTotal = 0
            }
          } else if (res.data.resultCode === 'NOT_LOGGEDIN') {
            this.$router.push('/login')
          } else {
            this.pagesTotal = 0
          }
        }
      }).catch(err => {
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
  *{
    padding: 0;
    margin: 0;
  }
  .orderCompleted
    padding-bottom 200px
    .orderCompleted-web
      background-image url("../../../assets/images/common/bg_500_500.svg")
      background-repeat:repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-repeat: repeat;
      background-size: 500px 500px;
      background-position: 50% 50%;
      @media screen and (max-width: 768px)
        display none
      @media screen and (min-width: 769px)
        display block
      .wrap
        width 1280px
        margin 0 auto
        padding-top 80px
        display flex
        flex-direction row
        @media screen and (max-width: 1300px){
          width 100%
          flex-direction column
          align-items center
        }
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 320px
          height 800px
          background-color #011f3c
          .common-icon
            display inline-block
            width 30px
            height 30px
            margin-right 20px
            vertical-align middle
          .common-title
            vertical-align top
            font-size 24px
            color #ffffff
            @media screen and (max-width: 768px){
              font-size 18px
            }
          .goNext
            margin-left 90px
            a
              font-size 20px
              color #cccccc
              @media screen and (max-width: 768px){
                font-size 16px
              }
          .completed
            a
              color #3653f5
          .account
            padding-top 60px
            .account-up
              margin-left 40px
              margin-bottom 30px
          .profit-order
            margin-top 60px
            .account-up
              margin-left 40px
              margin-bottom 30px
            .ongoing
              margin-bottom 30px
          .profit
            padding-top 60px
            .account-up
              margin-left 40px
              margin-bottom 30px
            .revenue-record
              margin-bottom 30px
          @media screen and (max-width: 1300px)
            width 100%
            display flex
            flex-direction column
            align-items center
            height 600px
            margin-right 0
        /*右边样式*/
        .right-content
          width 920px
          margin-top 50px
          @media screen and (max-width: 1300px){
            width 100%
            display flex
            flex-direction column
            align-items center
          }
          .right-title
            color #ffffff
            font-size 20px
            margin-top 20px
            margin-bottom  40px
          .table-wrap
            width 100%
            .table-title
              display flex
              justify-content  space-between
              align-items center
              font-size 18px
              height 40px
              background-color #011f3c !important
              @media screen and (max-width: 530px){
                font-size 16px
              }
              div
                color #ffffff
                width 160px
                text-align center
            .table-content
              display flex
              justify-content  space-between
              align-items center
              font-size 16px
              height 50px
              div
                color #cccccc
                width 160px
                text-align center
              &:hover
                background-color #082a4d !important
                opacity 1 !important
              .checkDetail
                a
                  font-size 16px
                  color #3653f5
                  cursor pointer
            .table-content:nth-child(odd)
              background-color #011f3c
              opacity .7
  .pagesList
    position absolute
    top 800px
  .orderCompleted-mobile
    @media screen and (max-width: 768px) {
      display block
    }
    @media screen and (min-width: 769px) {
      display none
    }
</style>
