<template>
  <div class="pkProfit">
    <v-header></v-header>
    <div class="banner">
      <img src="../../assets/images/pkRobot/case_banner.jpg" alt="">
      <span>{{$t('pkRobot.text1')}}</span>
    </div>
    <div class="pkProfit-content">
      <div class="wrap">
        <div class="content-title">PK{{$t('case.text2')}}</div>
        <div class="content-two">
          <p>{{$t('case.text3')}}</p>
          <div class="company">
            <p>{{$t('case.text4')}}</p>
            <p>{{$t('case.text5')}}</p>
            <p>{{$t('case.text6')}}</p>
          </div>
          <div class="cathectic">
            <p>{{$t('case.text7')}}</p>
            <p>{{$t('case.text8')}}</p>
            <p>{{$t('case.text9')}}</p>
            <p>{{$t('case.text10')}}</p>
            <p>{{$t('case.text11')}}</p>
          </div>
          <div class="result">
            <p>{{$t('case.text12')}}</p>
            <p>{{$t('case.text13')}}</p>
            <p>{{$t('case.text14')}}</p>
          </div>
          <div class="answer">
            <p>{{$t('case.text15')}}</p>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  components: {
    vHeader: resolve => require(['@/components/header'], resolve),
    vFooter: resolve => require(['@/components/footer'], resolve)
  }
}
</script>

<style lang="less" scoped>
  .banner{
    margin-top: 80px;
    height: 125px;
    position: relative;
    background: #fff;
    img{
      width: 100%;
      height: 100%;
      display: block;
    }
    span{
      text-align: center;
      font-size:40px;
      color: #fff;
      display: block;
      width: 1200px;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media screen and (max-width: 1280px){
        font-size: 25px;
        width: 100%;
      }
    }
  }
  .pkProfit-content{
    width:100%;
    height: auto;
  }
  .content-title{
    text-align: center;
    padding-top: 100px;
    color: #1a1a1a;
    font-size:40px;
    padding-bottom: 60px;
    @media screen and (max-width: 767px){
      padding-top: 30px;
      font-size: 24px;
    }
  }
  .content-one{
    width: 600px;
    height: 200px;
    margin-bottom: 80px;
    @media screen and (max-width: 767px){
      width: 100%;
    }
  }
  .content-two{
    width: 1200px;
    font-size: 16px;
    line-height: 2;
    color: #232044;
    @media screen and (max-width: 1060px){
      width: 100%;
      font-size: 16px;
    }
  }
  .company{
    margin-top: 30px;
  }
  .cathectic{
    margin-top: 30px;
  }
  .result{
    margin-top: 30px;
  }
  .answer{
    margin-top: 30px;
    padding-bottom: 300px;
  }
</style>
