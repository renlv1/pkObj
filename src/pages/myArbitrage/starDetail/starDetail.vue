<template>
  <div class="star-wrapper">
    <div class="head">
      <div class="title">{{$t('star.title')}}</div>
      <div class="back" @click="back"></div>
    </div>
    <div class="star-group">
      <star :size="48" :score=score></star>
    </div>
    <div class="text-group">
      <div class="title">{{$t('star.text1')}}</div>
      <div class="description">
        <ul>
          <li>{{$t('star.text2')}}</li>
          <li>{{$t('star.text3')}}</li>
          <li>{{$t('star.text4')}}</li>
          <li>{{$t('star.text5')}}</li>
          <li>{{$t('star.text6')}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      score: Number(this.$route.query.score)
    }
  },
  components: {
    star: resolve => require(['../../../components/star.vue'], resolve)
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../assets/css/mixin.styl"
.star-wrapper
  position relative
  min-height 100vh
  height 100%
  .head
    top 0
    width 100%
    height 60px
    line-height 60px
    display flex
    flex-direction row
    justify-content center
    border-bottom-1px(#ccc)
    background-color #fff
    position fixed
    z-index 999
    @media screen and (min-width: 1024px) {
      display none
    }
    .back
      position absolute
      top 22px
      left 18px
      background-image url("../../../assets/images/arbitrageDetial/back.svg")
      background-position right
      background-repeat no-repeat
      width 26px
      height 16px
    .title
      font-size 22px
      color #1a1a1a
  .star-group
    width 100%
    text-align center
    margin-top 100px
  .text-group
    margin-left 20px
    margin-right 20px
    .title
      margin-top 40px
      font-size 22px
      font-weight bold
      color #1a1a1a
      margin-bottom 20px
    .description
      ul
        li
          width: 100%
          color #232044
          font-size 16px
          line-height 20px
          font-family "Microsoft YaHei UI"
          /*word-break break-all*/
          word-wrap break-word
          margin-top 15px
</style>
