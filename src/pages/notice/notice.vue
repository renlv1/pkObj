<template>
  <div class="notice">
    <v-header></v-header>
    <div class="notice-list">
      <div class="banner">
        <img src="../../assets/images/pkRobot/notice_banner.jpg" alt="">
        <span :class="{'cnKlass': lang == 1}">PK {{$t('header.text5')}}</span>
      </div>
      <div class="wrap">
        <vLoading v-show="isLoading"></vLoading>
        <ul>
          <li @click="toNoticeDetial(item.id)" v-for="(item, index) in noticeList" :key="index">
            <div class="title-date">
              <div class="title">{{item.title}}</div>
              <div class="date" v-if="item.updateTime">{{parseDate(item.updateTime )}} {{parseTime(item.updateTime)}}</div>
            </div>
            <div style="color: #001926" class="describe" v-html="item.content"></div>
          </li>
        </ul>
      </div>
      <div class="page">
        <div class="wrap">
          <v-turnPage class="pagesList" :propsPage="totalPage" @orderLogTrunPage="parentTurnPage"></v-turnPage>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
// import TurnPage from '../../components/TurnPage'
export default {
  data () {
    return {
      isLoading: true, // 加载动画
      noticeList: [
      ],
      lang: 1,
      pageSize: 5,
      pageIndex: 1,
      currentPage: 1,
      pagesTotal: 1, // 订单记录总页数
      totalPage: ''
    }
  },
  mounted () {
    let Qlang = localStorage.getItem('Qlang')
    if (Qlang === 'CN') {
      this.lang = 1
    } else if (Qlang === 'EN') {
      this.lang = 2
    }
    this.getNoticeList2(1)
  },
  methods: {
    toNoticeDetial (id) {
      this.$router.push({
        path: '/noticeDetail',
        query: {
          id: id
        }
      })
    },
    parentTurnPage (page) { // 页码
      this.currentPage = page
      this.getNoticeList2(page)
    },
    // 获取公告列表
    getNoticeList2 (page) {
      let baseUrl = 'https://api.kleingame.ai'
      let url = `${baseUrl}/notice/noticeListNew?pageSize=${this.pageSize}&pageIndex=${page}&terrace=4&language=${this.lang}`
      this.$http.post(url).then((res) => {
        this.isLoading = false // 加载动画
        let ndata = res.data.data
        if (ndata.totalPage) {
          this.noticeList = ndata.noticeList
          this.totalPage = ndata.totalPage
        } else {
          let newdata = JSON.parse(ndata)
          this.noticeList = newdata.noticeList
          this.totalPage = newdata.totalPage
        }
      }).catch(() => {
      })
    },
    pageUp () {
      this.pageIndex--
      this.getNoticeList()
    },
    pageDown () {
      this.pageIndex++
      this.getNoticeList()
    },
    // 日期
    parseDate (time) {
      if (time) {
        const date = new Date(time)
        const Y = date.getFullYear() + '/'
        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/'
        const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
        return Y + M + D
      }
    },
    // 时分
    parseTime (time) {
      if (time) {
        const date = new Date(time)
        let X = date.getHours()
        let Y = date.getMinutes()
        if (X < 10) {
          X = '0' + X
        }
        if (Y < 10) {
          Y = '0' + Y
        }
        return X + ':' + Y
      }
    }

  },
  components: {
    vHeader: resolve => require(['@/components/header'], resolve),
    vFooter: resolve => require(['@/components/footer'], resolve),
    vTurnPage: resolve => require(['../../components/turnPage.vue'], resolve),
    vLoading: resolve => require(['../../components/loading.vue'], resolve)
  }
}
</script>

<style lang="less" scoped>
  .notice{
    background-color: #f8f9fa;
  }
  .page{
    background-color: #F8F9FA;
  }
  .pagesList{
    margin: 20px 0 0;
    text-align: right;
    width: 100%;
  }
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
      @media screen and (max-width: 1280px){
        font-size: 25px;
        width: 100%;
      }
      &.cnKlass{
        font-size: 78px;
      }
    }
  }
  .notice-list{
    min-height: calc(100vh - 140px);
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
    ul{
      padding-top: 80px;
      @media screen and (max-width: 1024px) {
        padding-top: 30px;
      }
      li{
        border-bottom: 1px solid #ccc;
        background-color: #f8f9fa;
        cursor: pointer;
        padding: 20px 30px;
        margin-bottom: 60px;
        @media screen and (max-width: 1024px) {
          padding: 0 0 20px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        &:hover{
          background-color: #fff;
          .title-date{
            .title{
              color: #e60000;
            }
            .date{
              color: #e60000;
            }
          }
        }
        .title-date{
          min-height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          .title{
            color: #232044;
            font-weight: bold;
            font-size: 20px ;
            padding-right: 30px;
            text-overflow:ellipsis;
            white-space:nowrap;
            overflow:hidden;
          }
          .date{
            color: #232044;
            font-size: 16px;
          }
        }
        .describe{
          color: #232044;
          line-height: 2;
          font-size: 16px;
          height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          p{
            line-height: 2;
          }
        }
      }
    }
  }
</style>
