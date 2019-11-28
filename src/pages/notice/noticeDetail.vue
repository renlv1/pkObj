<template>
  <div class="wrapper">
    <v-header></v-header>
    <div class="detail">
      <div class="banner">
        <img src="../../assets/images/pkRobot/notice_banner.jpg" alt="">
        <!--<span>PK<i> {{$t('header.text5')}}</i></span>-->
        <span :class="{'cnKlass': lang == 1}">PK {{$t('header.text5')}}</span>
      </div>
      <div class="wrap">
        <div class="branch">
          <span @click="$router.push('/notice')"> {{$t('header.text6')}}</span><i> > </i><span v-if="noticeData.title">{{noticeData.title}}</span>
        </div>
        <div class="title">{{noticeData.title}}</div>
        <div class="date" v-if="noticeData.updateTime">{{$changeDate(noticeData.updateTime)}}</div>
        <div class="content"  v-html="noticeData.content"></div>
      </div>
    </div>
    <!--<div class="detail-wrapper">-->
      <!--<div class="detail">-->
        <!--<div class="detail-header">-->
          <!--<span class="back-icon" @click="back"></span>-->
        <!--</div>-->
        <!--<div class="detail-content">-->
          <!--<div class="content-title">{{noticeData.title}}</div>-->
          <!--<div class="date">{{$changeDate(noticeData.updateTime)}}</div>-->
          <!--<div class="main-content" v-html="noticeData.content"></div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      id: this.$route.query.id,
      noticeData: {},
      lang: 1
    }
  },
  mounted () {
    this.getNoticeDetail()
    let Qlang = localStorage.getItem('Qlang')
    if (Qlang === 'CN') {
      this.lang = 1
    } else if (Qlang === 'EN') {
      this.lang = 2
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    // 获取公告详情
    getNoticeDetail () {
      let baseUrl = 'https://api.kleingame.ai'
      let url = `${baseUrl}/notice/noticeDetailNew?id=${this.id}`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          if (res.data.data.title) {
            this.noticeData = res.data.data
          } else {
            this.noticeData = JSON.parse(res.data.data)
          }
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    vHeader: resolve => require(['@/components/header'], resolve),
    vFooter: resolve => require(['@/components/footer'], resolve)
  }
}
</script>

<style lang="less" rel="stylesheet/stylus" scoped>
.banner{
    margin-top: 80px;
    min-height: 125px;
    position: relative;
    background: #fff;
  @media screen and (max-width: 1024px) {
    margin-top: 60px;
  }
    img{
      width: 100%;
      min-height: 125px;
      display: block;
    }
    span{
      font-weight: bold;
      text-align: center;
      display: block;
      width: 1200px;
      font-size:80px;
      color: #fff;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-style: italic;
      &.cnKlass{
        font-size: 78px;
      }
      i{
        color: #fff;
      }
      @media screen and (max-width: 1280px){
        font-size: 25px;
        width: 100%;
      }
    }
  }
.branch{
  margin: 20px 0 40px;
  color: #1a1a1a;
  font-size: 14px;
  @media screen and (max-width: 1024px) {
    margin: 10px 0 20px;
  }
  span{
    &:first-child{
      cursor: pointer;
    }
  }
}
.detail{
  min-height: calc(100vh - 140px);
  .title{
    font-size:34px;
    color: #1a1a1a;
    font-weight: bold;
    @media screen and (max-width: 1024px) {
      font-size: 22px;
    }
  }
  .date{
    font-size: 20px;
    color: #1a1a1a;
    margin: 30px 0 50px;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      margin: 20px 0;
    }
  }
  .content{
    line-height: 2;
  }
}

</style>
