<template>
  <div class="home">
    <v-header></v-header>
    <div class="banner">
      <swiper :options="swiperOption"  ref="mySwiper">
        <!-- 这部分放你要渲染的那些内容 -->
        <!--:style="{backgroundImage:'url('+ item.img +')'}"-->
        <swiper-slide v-for="(item, index) in $t('home.swiperList')" :key="index">
          <img :src="item.img" alt="">
          <h3>
            <p>{{item.text2}}</p>
            <i>{{item.text}}</i>
          </h3>
        </swiper-slide>
        <!-- 这是轮播的小圆点 -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="content1">
      <!--<div id="particles"></div>-->
      <div class="wrap">
        <div class="notice" @click="$router.push('/notice')">
          <p>{{$t('home.text1')}}：<span v-if="noticeList.title">{{noticeList.title}}</span></p>
          <i></i>
        </div>
        <!--arbitrageShow-->
        <div class="arbitrage" v-if="false">
          <div class="title">
            {{$t('home.text2')}}{{$t('home.text3')}}
          </div>
          <div class="plate" v-for="(item,index) in arbitrageList" :key="index" v-if="arbitrageList.length != 0" @click="$router.push({path: '/arbitrageDetail', query:{id:item.id}})">
            <!--四个角-->
            <div class="angle">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <h3><b><i></i><span v-if="flagLag">{{item.title}}</span><span v-if="!flagLag && item.remark" >{{item.remark.split(',')[0]}}</span></b><span>{{$t('cumulative.text3')}}{{item.id}}</span></h3>
            <div class="introduce" v-if="item.introduce && item.introduce != 19000101"><span>{{$t('pageTurn.text14')}}:</span><i>{{item.introduce}}</i></div>
            <div class="introduce" v-if="item.introduce && item.introduce == 19000101">{{$t('pageTurn.text15')}}</div>
            <div class="plate-box">
              <div class="plate-left">
                <h5>{{$t('arbitrageDetail.web.text18')}}</h5>
                <div class="times">
                  <p>{{item.alreadyAmount | formattingMoney}} {{item.currency}}</p>
                </div>
              </div>
              <div class="plate-center">
                <h5>{{$t('home.text6')}}</h5>
                <p>{{item.maxTotalAmount | formattingMoney}} {{item.currency}}</p>
              </div>
              <div class="plate-right">
                <h5>{{$t('arbitrageDetail.web.text1')}}</h5>
                <p class="times">{{parseDate(item.endTime)}} {{parseTime(item.endTime)}}</p>
                <div class="btn">{{$t('arbitrageDetail.web.text10')}}</div>
              </div>
            </div>
          </div>
          <div class="more" @click="$router.push('/arbitrage')">
            <span>{{$t('home.text7')}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="content5 different2">
      <div class="wrap">
        <div class="title">
          {{$t('home.text26')}}
        </div>
        <div class="text">
          <p>{{$t('home.text27')}}</p>
          <p>{{$t('home.text28')}}</p>
          <p>{{$t('home.text29')}}</p>
        </div>
        <div class="imgBox">
          <img src="../../assets/images/home/aboutUs.png" alt="">
        </div>
      </div>
    </div>
    <div class="content5 different2">
      <div class="wrap">
        <div class="title">
          {{$t('home.text30')}}
        </div>
        <div class="text">
          <p> {{$t('home.text31')}}<a href="http://boglefunds.biz/#/home" style="color: #4286ec;" target="_blank">[{{$t('boGe.text31')}}]</a></p>
          <!--<p> {{$t('home.text32')}}</p>-->
        </div>
        <div class="imgBox">
          <img src="../../assets/images/home/img-map_lg.png" alt="">
        </div>
      </div>
    </div>
    <div class="content5 different1">
      <div class="wrap">
        <div class="title">
         {{$t('home.text40')}}
        </div>
        <div class="text">
          <p>{{$t('home.text41')}}</p>
          <p>{{$t('home.text42')}}</p>
        </div>
        <!--<div class="imgBox">-->
          <!--<img src="../../assets/images/home/pic.png" alt="">-->
        <!--</div>-->
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<style lang="less" type="text/less" scoped>
@import "home";
</style>
<script type="text/ecmascript-6">
// import '../../../static/js/particles.min'
// import { partjs } from '../../../static/js/part'
export default {
  data () {
    return {
      page: '',
      index: '',
      lang: 1,
      flagLag: true, // 判断页面的语言类型默认是中文
      arbitrageShow: false, // 判断用户是否登录，热门套利是否隐藏
      swiperOption: { // swiper 配置
        autoplay: 5000,
        setWrapperSize: true,
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        observeParents: true,
        autoplayDisableOnInteraction: false
      },
      arbitrageList: [
      ],
      noticeList: {}
    }
  },
  components: {
    vHeader: resolve => require(['@/components/header'], resolve),
    vFooter: resolve => require(['@/components/footer'], resolve)
  },
  created () {
    this.getUserBalance()
    this._chooseLag()
  },
  mounted () {
    // partjs()
    let Qlang = localStorage.getItem('Qlang')
    if (Qlang === 'CN') {
      this.lang = 1
    } else if (Qlang === 'EN') {
      this.lang = 2
    }
    this.getHotArbitrage()
    this.getNoticeList()
  },
  methods: {
    _chooseLag () { // 判断当前网页的语言类型
      if (window.localStorage.Qlang === 'CN') {
        this.flagLag = true
      } else if (window.localStorage.Qlang === 'EN') {
        this.flagLag = !this.flagLag
      }
    },
    // 确认用户是否登录
    getUserBalance () {
      let url = `${this.$api}/user/balance`
      this.$http.post(url).then((res) => {
        if (res.data.resultCode === 'NOT_LOGGEDIN') {
          this.arbitrageShow = false
        } else if (res.data.success) {
          this.arbitrageShow = true
        }
      }).catch(() => {
      })
    },
    // 获取公告列表
    getNoticeList () {
      let baseUrl = 'https://api.kleingame.ai'
      let url = `${baseUrl}/notice/noticeListNew?pageSize=1&pageIndex=1&terrace=4&language=${this.lang}`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          let ndata = res.data.data
          if (ndata.totalPage) {
            this.noticeList = ndata.noticeList[0]
          } else {
            let newdata = JSON.parse(ndata)
            this.noticeList = newdata.noticeList[0]
          }
        }
      }).catch(() => {
      })
    },
    // 获取热门套利
    getHotArbitrage () {
      let url = `${this.$api}/arbitrage/hot`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.arbitrageList = res.data.data
        }
      }).catch(() => {
      })
    },
    // 日期
    parseDate (time, type = '/') {
      if (!time) {
        return ''
      } else {
        const date = new Date(time)
        const Y = date.getFullYear() + type
        const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + type
        const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
        return Y + M + D
      }
    },
    // 时分
    parseTime (time) {
      if (!time) {
        return ''
      } else {
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
  }
}
</script>
