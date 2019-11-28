<template>
  <div>
    <div class="special">
      <div class="text">特别推荐</div>
      <ul>
        <li>小米股票123454878阿迪王</li>
        <li>小米股票123454878阿迪王</li>
        <li>小米股票123454878阿迪王</li>
        <li>小米股票123454878阿迪王</li>
        <li>小米股票123454878阿迪王</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    this._getAnnouncement()
  },
  methods: {
    _getAnnouncement () {
      this.$axios.get(`${this.$api}/arbitrage/hot`).then((res) => {
        if (res.data.success === true) {
          console.log(res)
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
   $theme-color = #3653f5
   *{
     padding 0
     margin 0
   }
   .special
     width 320px
     .text
       height 70px
       line-height 70px
       font-family "Microsoft YaHei"
       font-weight bold
       font-size 20px
       color $theme-color
       background #011f3c
       border-bottom 1px solid $theme-color
       padding-left 20px
       padding-right 20px
     ul
       li
         height 50px
         line-height 50px
         font-family "Microsoft YaHei"
         font-size 16px
         list-style none
         color #fff
         background #011f3c
         border-bottom 1px solid #4d4d4d
         padding-left 20px
         padding-right 20px
         &:last-child
           border-bottom none
</style>
