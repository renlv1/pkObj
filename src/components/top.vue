<template>
  <div class="top-wrapper">
    <div class="goback-box" @click="goback">
      <div class="goback"></div>
    </div>
    <h6 class="title">{{title}}</h6>
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  },
  methods: {
    goback () {
      if (this.flag) {
        this.$router.go(-1)
      } else {
        this.$emit('gotoBack')
      }
    }
  },
  props: {
    title: '',
    flag: {
      default: true
    }
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/css/mixin.styl'
  .top-wrapper
    background-color: #fff
    position: fixed
    z-index: 10
    width: 100%
    .goback-box
      cursor pointer
      position: absolute
      z-index: 10
      left: 0
      top: 0
      padding: 0px 10px
      .goback
        width: 22px
        height: 15px
        background-image url("../assets/images/arbitrageDetial/back.svg")
    .title
      width: 100%
      position: absolute
      left: 50%
      transform translateX(-50%)
      color #1a1a1a
      text-align: center
      padding-bottom: 30px
      font-size: 18px
      line-height: 15px
</style>
