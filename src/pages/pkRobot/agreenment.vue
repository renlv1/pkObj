<template>
  <div class="">
    <div class="agreementBox">
      <div class="content">
        <h3>{{$t('agreement.text1')}}</h3>
        <h4>{{$t('agreement.text2')}}</h4>
        <h4>{{$t('agreement.text3')}}</h4>
        <h4>{{$t('agreement.text4')}}</h4>
        <div class="cont" v-for="(item, index) in $t('agreements')" :key="index">
          <h6>{{item.title}}</h6>
          <p v-for="(item2, index2) in item.text" :key="index2">{{item2.msg}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {

    },
    methods: {

    }
  }
</script>
<style lang="less" type="text/less" scoped>
.content{
  padding: 40px 15px;
  overflow: auto;
  background-color: #fff;
  h3{
    text-align: center;
    font-weight: bold;
    font-size:20px;
    color: #1a1a1a;
    margin-bottom: 50px;
  }
  h4{
    padding-bottom: 15px;
    font-size: 14px;
    color: #1a1a1a;
    line-height: 1.5;
  }
  .cont{
    h6{
      font-weight: bold;
      padding-bottom: 15px;
      font-size: 16px;
      color: #1a1a1a;
      line-height: 1.5;
    }
    p{
      padding-bottom: 15px;
      font-size: 14px;
      color: #1a1a1a;
      line-height: 1.5;
    }
  }

}
</style>
