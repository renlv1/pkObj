<template>
  <div class="load-more-box">
    <div class="loading-img">
      <img src="../assets/images/common/loading.gif" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  //  加载中的样式
  .load-more-box
    .desc
      font-size: 28px;
      color: #fff;
      text-align: center;
      margin-top: 30px;
    .loading-img
      width: 50px;
      height: 50px;
      margin: 60px auto 0;
      img
        width: 100%
        height: 100%
</style>
