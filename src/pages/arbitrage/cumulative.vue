<template>
    <div class="cumulative">
      <div class="detail-mobile">
        <div class="head">
          <div class="back" @click="back"></div>
          <div class="title">{{$t('cumulative.text1')}}</div>
        </div>
        <div class="detail-mobile-content">
          <div class="mobile-wrapper">
            <div class="announcement">
              <div class="announcement-top">
                <p class="top-title">{{title}}</p>
                <p class="top-num">{{$t('cumulative.text3')}} {{num}}</p>
              </div>
              <div class="remaining">
                <div class="betting-text">{{$t('cumulative.text2')}}</div>
                <div class="betting-status">{{personAmountUsd | formattingMoney}} <span style="color: #e60000">{{this.$route.query.betpaycurrency}}</span></div>
              </div>
            </div>
            <div class="cumulative-list">
              <ul>
                <li v-if="item.status !== 0" v-for="item in betlist" :key="item.index">
                  <div class="cumulative-box">
                    <div class="value">{{item.betAmount | formattingMoney}} <span style="color: #e60000">{{item.betCurrency}}</span></div>
                    <div class="time">{{changeTime(item.createTime)}}</div>
                  </div>
                  <div class="exchange-rate">
                    <span>=</span><span>{{item.payAmount | formattingMoney}} {{item.payCurrency}}</span><span>({{item.betExchangeRate}} USD/SIE)</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      betlist: Array,
      title: '',
      num: '',
      totalAccount: 0,
      personAmountUsd: ''
    }
  },
  created () {
    // console.log(this.$route.query.id)
    this.getBetDetail()
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    changeTime (time) { // 转换时间的格式
      return this.$changeDate(time, '/', 1)
    },
    getBetDetail () {
      this.$http.post(`${this.$api}/bet/queryBetDetail?arbitrageid=${this.$route.query.id}`).then((res) => {
        if (res.data.success) {
          let ret = res.data.data
          this.title = ret.title
          this.num = ret.id
          this.personAmountUsd = ret.personAmountUsd
          this.betlist = ret.betlist
          var cumulative = []
          for (let i = this.betlist.length - 1; i >= 0; i--) { // 获取每次的投注金额
            this.betlist[i].betAmount = Number(this.betlist[i].betAmount)
            // console.log(this.betList[i].betAmount)
            this.totalAccount += this.betlist[i].betAmount
            cumulative.push(this.betlist[i].betAmount)
          }
        }
      })
    },
    getCumulative (index) {
      var sum = 0
      for (let i = this.betlist.length - 1; i > index - 1; i--) {
        sum += this.betlist[i].betAmount
        // console.log(sum)
      }
      return sum
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/mixin"
  .detail-mobile
    min-height 100vh
    height 100%
    background #f8f9fa
    position relative
    @media screen and (min-width: 1024px) {
      display none
    }
    @media screen and (max-width: 1025px) {
      display block
    }
    .head
      position fixed
      top 0
      width 100%
      background #fff
      height 60px
      line-height 60px
      display flex
      flex-direction row
      justify-content center
      border 1px solid #ccc
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
    .mobile-wrapper
      padding-top 10px
    .detail-mobile-content
      color #fff
      padding-right 20px
      padding-left 20px
      margin-top 60px
      width 100%
      min-height 100vh
      height 100%
      .announcement
        display flex
        flex-direction column
        justify-content space-between
        padding 10px 15px 20px 15px
        width 100%
        height auto
        background #fff
        .announcement-top
          display flex
          flex-direction row
          justify-content space-between
          font-size 16px
          .top-title
            font-size 16px
            color #1a1a1a
            font-weight bold
          .top-num
            font-size 16px
            color #1a1a1a
            font-weight bold
        .remaining
          display flex
          flex-direction column
          align-items center
          margin-top 15px
          color #1a1a1a
          .betting-text
            margin-bottom 10px
            font-size 16px
            color #1a1a1a
            font-weight bold
          .betting-status
            margin-top 5px
            font-size 22px
            margin-bottom 5px
            font-weight bold
            color #1a1a1a
      .cumulative-list
        margin-top 10px
        background #fff
        ul
          li
            height 60px
            display flex
            flex-direction column
            padding 5px 15px
            color #1a1a1a
            &:nth-of-type(even)
              background #f8f9fa
            .cumulative-box
              display flex
              justify-content space-between
              align-items center
            .exchange-rate
              font-size 14px
              margin-top 5px
</style>
