<template>
    <div class="footer" v-show="hiddenFooter">
      <div class="footer-wrap">
        <div class="text">Copyright PK inc 2018</div>
        <div class="friendsLink">
          <span>{{$t('header.text7')}}：</span>
          <a href="https://secretworth.com" target="_blank">{{$t('header.text8')}}</a>
          <i>|</i>
          <a href="http://www.boglefunds.biz" target="_blank">{{$t('header.text9')}}</a>
        </div>
      </div>
      <span></span>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      hiddenFooter: true
    }
  },
  mounted () {
    this.getpathFooter()
    let self = this
    window.onresize = function () {
      self.getpathFooter()
    }
  },
  methods: {
    getpathFooter () {
      if (this.$route.path.indexOf('account') !== 0 && window.innerWidth < 1024) {
        this.hiddenFooter = false
      } else {
        this.hiddenFooter = true
      }
    }
  },
  watch: {
    '$route': 'getpathFooter'
  }
}
</script>

<style lang="less" scoped>
.footer{
  width: 100%;
  min-height:59px;
  text-align: center;
  background-color: #1a1a1a;
  color: #e5e5e5;
  font-size: 14px;
  display: flex;
  justify-content: center;
  .footer-wrap{
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      width: 100%;
      padding: 0 20px;
    }
    .text{
      @media screen and (max-width: 768px) {
       text-align: center;
        margin: 10px auto 0;
      }
    }
    .friendsLink{
      @media screen and (max-width: 768px) {
        text-align: center;
        margin: 10px auto 0;
        text-align: center;
      }
      span{
        color: #e5e5e5;
        font-size: 14px;
      }
      a{
        color: #e5e5e5;
        font-size: 14px;
        line-height: 50px;
      }
      i{
        margin: 0 20px;
      }
    }
  }
}
</style>
