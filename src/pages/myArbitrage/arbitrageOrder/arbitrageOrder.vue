<template>
  <div class="arbitrage">
    <div class="arbitrage-mobile">
      <div class="head">
        <div class="title">套利订单</div>
        <div class="back" @click="$router.go(-1)"></div>
      </div>
      <div class="tab">
        <ul>
          <li ref="now" class="now" :class="{active: isNow}" @click="swicth">进行中</li>
          <li ref="before" :class="{active: isBefore}" class="before" @click="otherSwich">已完成</li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-content-now" v-show="isNow">
          <ul>
            <router-link tag="li" v-for="item in nowList" :key="item.index" :to="{path: '/processOrderDetail', query: {id: item.id}}">
              <div class="content-top">
                <div class="num">订单编号: {{item.id}}</div>
                <div class="date">{{changeTime(item.startTime)}}</div>
              </div>
              <div class="usd">
                {{item.alreadyAmount}} {{item.currency}}
              </div>
            </router-link>
          </ul>
          <div class="prompt" v-if="nowList.length === 0">暂时还没有进行中的套利哇！</div>
        </div>
        <div class="tab-content-before" v-show="isBefore">
          <ul>
            <router-link tag="li" v-for="item in beforeList" :key="item.index" :to="{path: '/completedOrderDetail', query: {id: 'item.id'}}">
              <div class="content-top">
                <div class="num">订单编号: {{item.id}}</div>
                <div class="date">{{changeTime(item.endTime)}}</div>
              </div>
              <div class="usd">
                {{item.alreadyAmount}} {{item.currency}}
              </div>
              <div class="profits">
                {{item.betlist}} {{item.currency}}
              </div>
            </router-link>
          </ul>
          <div class="prompt" v-if="beforeList.length === 0">暂时还没有往期套利哇！</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isNow: true,
      isBefore: false,
      currentPage: 1,
      status: 1, // 默认状态为1
      nowList: {}, // 进行中数据
      beforeList: {}, // 已完成数据
      nowPage: 1, // 当前页数
      pagesTotal: 1 // 订单记录总页数
    }
  },
  mounted () {
    // this.login()
  },
  methods: {
    changeTime (time) {
      return this.$changeDate(time, '/', 1)
    },
    swicth () {
      this.isNow = true
      this.isBefore = false
    },
    otherSwich () {
      this.isNow = false
      this.isBefore = true
      this.getBetList(1)
    },
    // 登陆
    // login () {
    //   let url = `${this.$api}/user/userlogin?username=super123&password=123123xX`
    //   this.$http.post(url).then((res) => {
    //     if (res.data.success) {
    //       this.getArbitrageLog(1)
    //       // this.getUserBalance()
    //     }
    //   }).catch(() => {
    //   })
    // },
    // 获取进行中列表数据
    getArbitrageLog (page) {
      let url = `${this.$api}/bet/queryBetList?pageSize=10&pageIndex=${page}&status=1`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          console.log(res.data)
          this.nowList = res.data.data
        }
      })
    },
    // 获取已完成列表数据
    getBetList (page) {
      let url = `${this.$api}/bet/queryBetList?pageSize=10&pageIndex=${page}&status=2`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          console.log(res.data)
          this.beforeList = res.data.data
        }
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/css/mixin.styl"
  *{
    padding 0
    margin 0
    font-family "Microsoft YaHei"
  }
  .arbitrage
    .arbitrage-mobile
      height 100vh
      background #001926
      .head
        position fixed
        width 100%
        background #001926
        height 60px
        line-height 60px
        display flex
        flex-direction row
        justify-content center
        .back
          position absolute
          top 22px
          left 18px
          bg-image('../../../assets/images/arbitrage/back')
          background-position right
          background-repeat no-repeat
          width 26px
          height 16px
        .title
          font-size 20px
          color #fff
      .tab
        padding-top 70px
        padding-bottom 5px
        ul
          height 55px
          display flex
          flex-direction row
          justify-content space-around
          li
            line-height 60px
            list-style none
            color #ccc
            font-size 18px
            cursor pointer
          .active
            color #3653f5
            border-bottom 1px solid #3653f5
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
                background #011f3c
              .content-top
                display flex
                flex-direction row
                justify-content space-between
                color #fff
                .num
                  font-size 14px
                .date
                  font-size 14px
              .usd
                font-size 16px
                color #fff
          .prompt
            margin-top 30px
            text-align center
            color #c90010
        .tab-content-before
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
                background #011f3c
              .content-top
                display flex
                flex-direction row
                justify-content space-between
                color #fff
                .num
                  font-size 14px
                .date
                  font-size 14px
              .usd
                font-size 16px
                color #fff
              .profits
                font-size 16px
                color #fff
          .prompt
            margin-top 30px
            text-align center
            color #c90010
</style>
