 <template>
  <div class="arbitrage">
    <div class="arbitrage-web">
      <v-header></v-header>
      <div class="tipBox" v-if="pcTipBox">
        <h4>{{$t('tips.text7')}}</h4>
        <div class="tips">
          <h5>{{$t('tips.text1')}}</h5>
          <p>{{$t('tips.text2')}}</p>
          <p>{{$t('tips.text3')}}</p>
          <p>{{$t('tips.text4')}}</p>
          <p>{{$t('tips.text5')}}</p>
          <h6>{{$t('tips.text6')}}</h6>
        </div>
        <span @click="pcTipBox = false"></span>
      </div>
      <div class="tab-wrapper">
        <div class="tab">
          <ul>
            <li ref="now" class="now" :class="{active: isNow}" @click="swicth">{{$t('arbitrage.tab1')}}</li>
            <li ref="before" :class="{active: isBefore}" class="before" @click="otherSwich">{{$t('arbitrage.tab2')}}</li>
          </ul>
        </div>
        <div class="tab-content">
          <div class="now-content" v-show="isNow">
            <vLoading v-show="isLoading"></vLoading>
            <ul>
              <router-link tag="li" v-for="item in nowList" :key="item.index" :to="{path: '/arbitrageDetail', query: {id: item.id}}">
                <div class="angle">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div class="li-header">
                  <div class="li-title blue" v-if="flagLag"><i></i><span>{{item.title}}</span></div>
                  <div class="li-title blue" v-if="!flagLag"><i></i><span v-if="item.remark">{{item.remark.split(',')[0]}}</span></div>
                  <span ref="num" class="li-number blue">{{$t('arbitrageDetail.mobile.text1')}} {{item.id}}</span>
                </div>
                <div class="introduce" v-if="item.introduce && item.introduce != 19000101"><span>{{$t('pageTurn.text14')}}:</span><i>{{item.introduce}}</i> <b class="tip-btn" @click.stop="pcTipBox = true"></b></div>
                <div class="introduce"  v-if="item.introduce && item.introduce == 19000101"><span>{{$t('pageTurn.text15')}}</span> <b class="tip-btn" @click.stop="pcTipBox = true"></b></div>
                <div class="main-body">
                  <div class="remaining">
                    <div class="remaining-text text blue">{{$t('arbitrageDetail.web.text2')}}</div>
                    <div class="usd blue">{{item.maxTotalAmount | formattingMoney}} {{item.currency}}</div>
                  </div>
                  <div class="profit">
                    <div class="profit-text text yellow">{{$t('arbitrageDetail.web.text9')}}</div>
                    <div class="usd yellow">{{item.profit | formattingMoney}} {{item.currency}}</div>
                  </div>
                  <div class="btn-time">
                    <div class="li-date blue">{{$t('arbitrageDetail.web.text1')}}</div>
                    <div class="li-date blue">{{changeTime(item.endTime)}}</div>
                    <div class="btn">{{$t('arbitrageDetail.web.text10')}}</div>
                  </div>
                </div>
              </router-link>
            </ul>
            <div class="no-now" v-if="nowListShow">{{$t('arbitrage.text1')}}</div>
          </div>
          <div class="before-content" v-show="isBefore">
            <vLoading v-show="isLoading"></vLoading>
            <ul>
              <li v-for="item in beforeList" :key="item.index">
                <div class="angle">
                  <i></i>
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div class="li-header">
                  <div class="li-title blue" v-if="flagLag"><i class="bg"></i><span>{{item.title}}</span></div>
                  <div class="li-title blue" v-if="!flagLag"><i></i><span v-if="item.remark">{{item.remark.split(',')[0]}}</span></div>
                  <span class="li-number blue">{{$t('arbitrageDetail.mobile.text1')}} {{item.id}}</span>
                </div>
                <div class="main-body">
                  <div class="remaining">
                    <div class="remaining-text text blue">{{$t('arbitrage.text3')}}</div>
                    <div class="usd blue">{{item.maxTotalAmount| formattingMoney}} {{item.currency}}</div>
                  </div>
                  <div class="profit">
                    <div class="profit-text text yellow">{{$t('arbitrage.text4')}}</div>
                    <div class="usd yellow">{{item.profit | formattingMoney}} {{item.currency}}</div>
                  </div>
                  <div class="btn-time">
                    <div class="li-date blue">{{$t('arbitrageDetail.web.text1')}}</div>
                    <div class="li-date blue">{{changeTime(item.endTime)}}</div>
                    <router-link v-show="judgeTime(item.endTime)" class="btn" :to="{path: '/arbitrageDetail', query: {id: item.id}}">{{$t('arbitrageDetail.web.text10')}}</router-link>
                    <div v-show="!judgeTime(item.endTime)" class="btn">{{$t('arbitrageDetail.web.text14')}}</div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="no-before" v-if="beforeListShow">{{$t('arbitrage.text2')}}</div>
          </div>
        </div>
        <v-turnPage class="pagesList" :propsPage="propPage" @orderLogTrunPage="parentTurnPage" ref="pcTurnPage"></v-turnPage>
      </div>
      <v-footer class="footer"></v-footer>
    </div>
    <div class="arbitrage-mobile">
      <div class="app-tip" v-if="appTipBox">
        <div class="tipBox">
          <h4>{{$t('tips.text7')}}</h4>
          <div class="tips">
            <h5>{{$t('tips.text1')}}</h5>
            <p>{{$t('tips.text2')}}</p>
            <p>{{$t('tips.text3')}}</p>
            <p>{{$t('tips.text4')}}</p>
            <p>{{$t('tips.text5')}}</p>
            <h6>{{$t('tips.text6')}}</h6>
          </div>
          <span @click="appTipBox = false"></span>
        </div>
      </div>
      <div class="head">
        <div class="title">{{$t('arbitrage.arbitrageTitle')}}</div>
        <div class="back" @click="back"></div>
      </div>
      <div class="tab">
        <ul>
          <li ref="now" class="now" :class="{active: isNow}" @click="swicth">{{$t('tab.text1')}}</li>
          <li ref="before" :class="{active: isBefore}" class="before" @click="otherSwich">{{$t('tab.text2')}}</li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-content-now" v-show="isNow">
          <vLoading v-show="isLoading"></vLoading>
          <ul>
            <router-link tag="li" v-for="item in nowList" :key="item.index" :to="{path: '/arbitrageDetail', query: {id: item.id}}">
              <div class="content-top">
                <div class="top-wrapper">
                  <div class="title" v-if="flagLag">{{item.title}}</div>
                  <div class="title" v-if="!flagLag && item.remark">{{item.remark.split(',')[0]}}</div>
                  <div class="num">{{$t('arbitrageDetail.mobile.text11')}} {{item.id}}</div>
                </div>
                <div class="date">{{$t('arbitrageDetail.mobile.text4')}} {{changeTime(item.endTime)}}</div>
                <div class="remaining"><span class="remaining-text">{{$t('arbitrageDetail.mobile.text10')}}</span> <span class="remaining-value">{{hasDecimal(item.maxTotalAmount, 4)}}</span> <span class="remaining-unit">{{item.currency}}</span></div>
                <div class="expect"><span class="expect-text">{{$t('arbitrageDetail.mobile.text7')}} </span> <span class="expect-value">{{item.profit | formattingMoney}}</span> <span class="expect-unit">{{item.currency}}</span></div>
                <div class="introduce" v-if="item.introduce && item.introduce != 19000101"><span>{{$t('pageTurn.text14')}}:</span><i>{{item.introduce}}</i><b class="tip-btn" @click.stop="appTipBox = true"></b></div>
                <div class="introduce" v-if="item.introduce && item.introduce == 19000101"><span>{{$t('pageTurn.text15')}}</span><b class="tip-btn" @click.stop="appTipBox = true"></b></div>
              </div>
            </router-link>
          </ul>
          <div class="prompt" v-if="nowListShow">{{$t('arbitrage.text1')}}</div>
        </div>
        <div class="tab-content-before" v-show="isBefore">
          <vLoading v-show="isLoading"></vLoading>
          <ul>
            <router-link tag="li" v-for="item in beforeList" :key="item.index" :to="{path: '/arbitrageDetail', query: {id: item.id}}">
              <div class="content-top">
                <div class="top-wrapper">
                  <div class="title" v-if="flagLag">{{item.title}}</div>
                  <div class="title" v-if="!flagLag && item.remark">{{item.remark.split(',')[0]}}</div>
                  <div class="num">{{$t('arbitrageDetail.mobile.text11')}} {{item.id}}</div>
                </div>
                <div class="date">{{$t('arbitrageDetail.web.text1')}} {{changeTime(item.endTime)}}</div>
                <div class="remaining"><span class="remaining-text">{{$t('arbitrageDetail.mobile.text10')}} </span> <span class="remaining-value">{{item.maxTotalAmount | formattingMoney}}</span> <span class="remaining-unit">{{item.currency}}</span></div>
                <div class="expect">
                  <span class="expect-text">{{$t('arbitrageDetail.mobile.text7')}} </span>
                  <span class="expect-value">{{item.profit | formattingMoney}}</span>
                  <span class="expect-unit">{{item.currency}}</span>
                </div>
              </div>
            </router-link>
          </ul>
          <div class="prompt" v-if="beforeListShow">{{$t('arbitrage.text2')}}</div>
        </div>
      </div>
      <v-turnPage class="mobilePagesList" :propsPage="propPage" @orderLogTrunPage="parentTurnPage" ref="turnPage"></v-turnPage>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      isLoading: true, // 加载动画
      flagLag: true, // 判断页面的语言类型默认是中文
      isNow: true,
      isBefore: false,
      overdue: false, // 判断是否过期
      currentPage: 1,
      status: 1, // 默认状态为1
      nowList: '',
      totalPage: '',
      flag: 1,
      maxTotalAmount: '',
      beforeList: '',
      nowListShow: '', // 正在进行中的列表是否为空
      beforeListShow: '', // 往期列表是否为空
      timeArr: [], // 时间戳集合
      pcTipBox: false,
      appTipBox: false
    }
  },
  created () {
    this._getArbitrageList(1)
    // this._getBeforeList(1)
    this._chooseLag()
  },
  components: {
    vHeader: resolve => require(['../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../components/footer.vue'], resolve),
    vTurnPage: resolve => require(['../../components/turnPage.vue'], resolve),
    vLoading: resolve => require(['../../components/loading.vue'], resolve)
  },
  mounted () {
    this.getBlance()
  },
  methods: {
    _chooseLag () { // 判断当前网页的语言类型
      if (window.localStorage.Qlang === 'CN') {
        this.flagLag = true
      } else if (window.localStorage.Qlang === 'EN') {
        this.flagLag = !this.flagLag
      }
    },
    judgeTime (time) {
      if (time >= Date.parse(new Date())) {
        return true
      } else {
        return false
      }
    },
    hasDecimal (num, digits) { // 保留digits个小数
      if (!isNaN(num) && num !== null) {
        return Number(num).toFixed(digits)
      }
    },
    changeTime (time) { // 转换时间的格式
      return this.$changeDate(time, '/', 1)
    },
    fixedNum (num) {
      return num.toFixed(4)
    },
    swicth () {
      this.isNow = true
      this.isBefore = false
      this._getArbitrageList(1)
      this.flag = 1
      this.$refs.pcTurnPage.resetPage(1)
      this.$refs.turnPage.resetPage(1)
      this.currentPage = 1
      // console.log(this.currentPage)
    },
    otherSwich () {
      this.isNow = false
      this.isBefore = true
      this._getBeforeList(1)
      this.flag = 2
      this.$refs.pcTurnPage.resetPage(1)
      this.$refs.turnPage.resetPage(1)
      // console.log(this.currentPage)
    },
    getBlance () {
      let url = `${this.$api}/user/balance`
      this.$http.post(url).then((res) => {
        if (res.data.success === true) {
          // this._getArbitrageList(1)
          // this._getBeforeList(1)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // login () {
    //  let url = `${this.$api}/user/userlogin?username=liulian&password=123123aA`
    //  this.$http.post(url).then((res) => {
    //    if (res.data.success === true) {
    //      this._getArbitrageList(1)
    //      this._getBeforeList(1)
    //    }
    //  }).catch(() => {
    //  })
    //  },
    _getArbitrageList (page) { // 获得进行中的套利列表
      this.$http.post(`${this.$api}/arbitrage/list?pageSize=4&pageIndex=${page}&status=1`).then((res) => {
        if (res.data.success === true) {
          this.isLoading = false
          this.nowList = res.data.data.results
          if (this.nowList.length === 0) {
            this.nowListShow = true
            this.totalPage = 0
          } else {
            this.nowListShow = false
          }
          // console.log(res.data.data.totalPage)
          this.totalPage = res.data.data.totalPage
          // console.log(this.currentPage)
          // this.parentTurnPage(this.currentPage)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    _getBeforeList (page) { // 获得往期套利列表
      this.$http.post(`${this.$api}/arbitrage/list?pageSize=4&pageIndex=${page}&status=2`).then((res) => {
        if (res.data.success === true) {
          this.isLoading = false
          this.beforeList = res.data.data.results
          if (this.beforeList.length === 0) {
            this.beforeListShow = true
            this.totalPage = 0
          } else {
            this.beforeListShow = false
          }
          this.totalPage = res.data.data.totalPage
          // this.parentTurnPage(this.currentPage)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    parentTurnPage (page) { // 页码
      this.currentPage = page
      if (this.flag === 1) {
        this._getArbitrageList(page)
      } else {
        this._getBeforeList(page)
      }
    },
    back () {
      this.$router.push('/home')
    },
    toDetail () {

    }
  },
  computed: {
    propPage () {
      return this.totalPage
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../assets/css/mixin"
$theme-color = #e60000
.arbitrage
  .arbitrage-web
    background url("../../assets/images/arbitrage/bg.svg")
    background-repeat repeat
    position absolute
    width 100%
    min-height 100vh
    height auto
    background-size 500px 500px
    background-position 50% 50%
    @media screen and (min-width: 1025px) {
      display block
    }
    @media (max-width: 1024px),  handheld and (orientation: landscape) {
      display none
    }
    .tipBox
      padding 0 50px
      position absolute
      width 640px
      box-shadow 0px 0px 10px rgb(153,153,153)
      background-color #fff
      top 50%
      left 50%
      transform translate(-50%, -50%)
      z-index 9
      span
        display inline-block
        width 20px
        height 20px
        background-color #fff
        position absolute
        right 30px
        top 30px
        background-image url("../../assets/images/arbitrageDetial/close.png")
        background-size 100%
        background-position center
      h4
        text-align center
        color #1a1a1a
        font-size: 34px
        font-weight bold
        margin 56px 0
      .tips
        text-align left
        font-size:18px;
        color: #1a1a1a
        margin-bottom 80px
        p
          margin-bottom 10px
        h5
          line-height: 2
          margin-bottom 30px
          font-size:18px;
          color: #1a1a1a
        h6
          line-height: 2
          margin-top 30px
          font-size:18px;
          color: #1a1a1a
    .tab-wrapper
      padding-top 100px
      margin-left 10%
      margin-right 10%
      margin-bottom 70px
      min-height 100vh
      height 100%
      .tab
        ul
          height 100px
          display flex
          flex-direction row
          justify-content space-around
          li
            line-height 100px
            list-style none
            font-size 34px
            font-family big
            font-weight bold
            cursor pointer
            user-select none
            color #1a1a1a
            border-bottom 1px solid #1a1a1a
            @media screen and (max-width: 1400px) {
              font-size 24px
            }
          .active
            color $theme-color
            border-bottom 1px solid $theme-color
      .tab-content
        .now-content
          position relative
          margin-top 60px
          ul
            width 100%
            display flex
            flex-direction column
            justify-content center
            align-items center
            li
              width 1200px
              color #1a1a1a
              height 258px
              list-style none
              margin-bottom 40px
              background #fff
              padding-right 40px
              padding-left 40px
              cursor pointer
              user-select none
              border 1px solid #e5e5e5
              position relative
              @media screen and (max-width: 1024px) {
                width 800px
              }
              @media screen and (max-width: 1400px) {
                width 1000px
              }
              .angle{
                i{
                  display: block;
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  border: 1px solid rgba(35,32,68,0.2);
                  &:nth-child(1) {
                    left: -1px;
                    top: -1px;
                    border-right:none;
                    border-bottom:none;
                  }
                  &:nth-child(2) {
                    right: -1px;
                    top: -1px;
                    border-left:none;
                    border-bottom:none;
                  }
                  &:nth-child(3) {
                    left: -1px;
                    bottom: -1px;
                    border-right:none;
                    border-top:none;
                  }
                  &:nth-child(4) {
                    right: -1px;
                    bottom: -1px;
                    border-left:none;
                    border-top:none;
                  }
                }
              }
              .li-header
                display flex
                flex-direction row
                justify-content space-between
                height 60px
                line-height 60px
                .li-number
                  font-size 20px
                .li-title
                  font-weight bold
                  font-size 20px
                  @media screen and (max-width: 768px) {
                    font-size 16px
                  }
                  @media screen and (max-width: 1280px) {
                    font-size 18px
                  }
                  i
                    display inline-block
                    width 30px
                    height 20px
                    background-repeat no-repeat
                    margin-right 10px
                    background-image url('../../assets/images/home/s-logo.svg')
                    vertical-align middle
              .introduce
                font-size:16px
                color: #1a1a1a
                font-weight bold
                span
                  color: #1a1a1a
                i
                  color: #e60000
              .main-body
                display flex
                flex-direction row
                justify-content space-between
                align-items center
                margin-top 20px
                .remaining
                  font-weight bold
                  @media screen and (max-width: 1100px) {
                    margin-right 20px
                    word-break break-all
                  }
                  .remaining-text
                  .text
                    font-size 24px
                    margin-bottom 18px
                    @media screen and (max-width: 1400px) {
                      font-size 18px
                    }
                  .usd
                    color $theme-color
                    font-size 28px
                    @media screen and (max-width: 1024px) {
                      font-size 18px
                    }
                .profit
                  font-weight bold
                  .text
                    font-size 24px
                    @media screen and (max-width: 1400px) {
                      font-size 18px
                    }
                    margin-bottom 18px
                  .usd
                    color $theme-color
                    font-size 28px
                    @media screen and (max-width: 1024px) {
                      font-size 18px
                    }
                .btn-time
                  display flex
                  flex-direction column
                  justify-content space-between
                  align-items center
                  font-size 24px
                  .li-date
                    margin-top 5px
                    font-size 24px
                    font-weight bold
                    @media screen and (max-width: 1400px) {
                      font-size 18px
                    }
                  .btn
                    margin-top 15px
                    display block
                    width 240px
                    height 50px
                    border 1px solid #e60000
                    background #fff
                    text-align center
                    line-height 50px
                    font-size 18px
                    color #e60000
                    @media screen and (max-width: 1400px) {
                      width 200px
                      height 54px
                      line-height 54px
                    }
                    @media screen and (max-width: 768px) {
                      width 140px
                      height 34px
                      line-height 34px
                    }
              &:hover
                box-shadow 0 0 1px 1px #e5e5e5
                position: relative
                .angle
                  i{
                    display: block;
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border: 1px solid rgba(35,32,68,1);
                    &:nth-child(1) {
                      left: -1px;
                      top: -1px;
                      border-right:none;
                      border-bottom:none;
                    }
                    &:nth-child(2) {
                      right: -1px;
                      top: -1px;
                      border-left:none;
                      border-bottom:none;
                    }
                    &:nth-child(3) {
                      left: -1px;
                      bottom: -1px;
                      border-right:none;
                      border-top:none;
                    }
                    &:nth-child(4) {
                      right: -1px;
                      bottom: -1px;
                      border-left:none;
                      border-top:none;
                    }
                  }
                .main-body
                  .btn-time
                    .btn
                     background #e60000
                     color #fff
                     &:active{
                       opacity: 0.6
                      }
          .no-now
            margin-top 30px
            text-align center
            color #c90010
            font-size 24px
          .page-index
            position absolute
            right 0
            bottom -40px
            color #fff
        .before-content
          position relative
          margin-top 60px
          ul
            width 100%
            display flex
            flex-direction column
            justify-content center
            align-items center
            li
              width 1200px
              color #1a1a1a
              height 258px
              list-style none
              margin-bottom 40px
              background #fff
              padding-right 40px
              padding-left 40px
              cursor pointer
              user-select none
              border 1px solid #e5e5e5
              position relative
              @media screen and (max-width: 1024px) {
                width 800px
              }
              @media screen and (max-width: 1400px) {
                width 1000px
              }
              .angle{
                i{
                  display: block;
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  border: 1px solid rgba(35,32,68,0.2);
                  &:nth-child(1) {
                    left: -1px;
                    top: -1px;
                    border-right:none;
                    border-bottom:none;
                  }
                  &:nth-child(2) {
                    right: -1px;
                    top: -1px;
                    border-left:none;
                    border-bottom:none;
                  }
                  &:nth-child(3) {
                    left: -1px;
                    bottom: -1px;
                    border-right:none;
                    border-top:none;
                  }
                  &:nth-child(4) {
                    right: -1px;
                    bottom: -1px;
                    border-left:none;
                    border-top:none;
                  }
                }
              }
              .li-header
                display flex
                flex-direction row
                justify-content space-between
                height 60px
                line-height 60px
                .li-number
                  font-size 18px
                .li-title
                  font-weight bold
                  font-size 20px
                  @media screen and (min-width: 768px) {
                    font-size 20px
                  }
                  @media screen and (max-width: 1280px) {
                    font-size 20px
                  }
                  i
                    display inline-block
                    width 30px
                    height 20px
                    background-repeat no-repeat
                    margin-right 10px
                    background-image url('../../assets/images/home/s-logo.svg')
                    vertical-align middle
                .li-date
                  font-size 20px
              .main-body
                display flex
                flex-direction row
                justify-content space-between
                align-items center
                padding-top 20px
                .remaining
                  font-weight bold
                  @media screen and (max-width: 1100px) {
                    margin-right 20px
                    word-break break-all
                  }
                  .remaining-text
                  .text
                    font-size 24px
                    margin-bottom 18px
                    @media screen and (max-width: 1024px) {
                      font-size 18px
                    }
                  .usd
                    font-size 28px
                    @media screen and (max-width: 1024px) {
                      font-size 18px
                    }
                .profit
                  font-weight bold
                  .text
                    font-size 24px
                    margin-bottom 18px
                    @media screen and (max-width: 1024px) {
                      font-size 18px
                    }
                  .usd
                    font-size 28px
                    @media screen and (max-width: 1024px) {
                      font-size 18px
                    }
                .btn-time
                  display flex
                  flex-direction column
                  justify-content space-between
                  align-items center
                  font-size 24px
                  .li-date
                    font-weight bold
                    margin-top 5px
                    font-size 24px
                    @media screen and (max-width: 1400px) {
                      font-size 18px
                    }
                  .btn
                    margin-top 15px
                    display block
                    width 240px
                    height 50px
                    border 1px solid #1a1a1a
                    background #fff
                    text-align center
                    line-height 50px
                    font-size 18px
                    color #1a1a1a
                    @media screen and (max-width: 1400px) {
                      width 200px
                      height 54px
                      line-height 54px
                    }
                    @media screen and (max-width: 768px) {
                      width 140px
                      height 34px
                      line-height 34px
                    }
                .close
                  margin-right 60px
                  @media screen and (max-width: 768px) {
                    margin-right 30px
                    margin-left 10px
                  }
                  .close-text
                    font-size 20px
                    color #ccc
                    @media screen and (max-width: 1400px) {
                      font-size 16px
                    }
                  .icon
                    margin-top 25px
                    display none
              &:hover
                box-shadow 0 0 1px 1px #e5e5e5
                position relative
                .angle
                  i{
                    display: block;
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    border: 1px solid rgba(35,32,68,1);
                    &:nth-child(1) {
                      left: -1px;
                      top: -1px;
                      border-right:none;
                      border-bottom:none;
                    }
                    &:nth-child(2) {
                      right: -1px;
                      top: -1px;
                      border-left:none;
                      border-bottom:none;
                    }
                    &:nth-child(3) {
                      left: -1px;
                      bottom: -1px;
                      border-right:none;
                      border-top:none;
                    }
                    &:nth-child(4) {
                      right: -1px;
                      bottom: -1px;
                      border-left:none;
                      border-top:none;
                    }
                  }
                .main-body
                  .remaining
                    .usd
                     color $theme-color
                  .profit
                    .usd
                      color $theme-color
                  .btn-time
                    .btn
                      background #1a1a1a
                      color #fff
          .no-before
            margin-top 30px
            text-align center
            color #c90010
            font-size 24px
          .page-index
            position absolute
            right 0
            bottom -40px
            color #fff
      .pagesList
        margin-right 10% !important
        float right
  .arbitrage-mobile
    background-color #f8f9fa
    height auto
    @media (max-width: 1024px),  handheld and (orientation: landscape) {
      display block
    }
    @media screen and (min-width: 1025px) {
      display none
    }
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
      .back
        position absolute
        top 22px
        left 18px
        background-image url("../../assets/images/arbitrageDetial/back.svg")
        background-position right
        background-repeat no-repeat
        width 26px
        height 16px
      .title
        font-size 22px
        color #1a1a1a
    .tab
      margin-top 60px
      padding-bottom 5px
      ul
        height 55px
        display flex
        flex-direction row
        justify-content space-around
        li
          line-height 60px
          list-style none
          color #1a1a1a
          font-weight bold
          font-size 18px
          cursor pointer
          user-select none
        .active
          color $theme-color
          border-bottom 1px solid $theme-color
    .tab-content
      .tab-content-now
        ul
          padding-top 10px
          display flex
          flex-direction column
          width 100%
          li
            padding-left 20px
            padding-right 20px
            height auto
            padding-bottom 3px
            display flex
            flex-direction column
            justify-content space-around
            margin-bottom 10px
            &:nth-of-type(odd)
              background #fff
            .content-top
              padding 5px 0
              height auto
              justify-content space-between
              display flex
              flex-direction column
              color #fff
              .top-wrapper
                display flex
                flex-direction row
                justify-content space-between
                .title
                  font-size 16px
                  color #1a1a1a
                  font-weight bold
                .num
                  font-size 14px
                  color #1a1a1a
              .date
                margin-top 15px
                font-size 14px
                color #1a1a1a
              .remaining
                margin-top 15px
                font-weight bold
                color #1a1a1a
                .remaining-text
                  font-size 15px
                  margin-top 15px
                  color #1a1a1a
                .remaining-value
                  font-size 15px
                  color #1a1a1a
                  font-weight bold
                .remaining-unit
                  color $theme-color
                  font-weight bold
                  font-size 15px
              .expect
                margin-top 15px
                .expect-text
                  color #1a1a1a
                  font-size 15px
                .expect-value
                  font-size 15px
                  color #1a1a1a
                  font-weight bold
                .expect-unit
                  color $theme-color
                  font-weight bold
                  font-size 15px
              .introduce
                font-size: 16px;
                height 30px
                margin-top 10px
                span
                  color: #1a1a1a
                i
                  color: #e60000
        .prompt
          padding-top 30px
          background #fff
          text-align center
          color #c90010
      .tab-content-before
        ul
          margin-top 10px
          display flex
          flex-direction column
          width 100%
          background #fff
          li
            padding-left 20px
            padding-right 20px
            height auto
            padding-bottom 3px
            display flex
            flex-direction column
            justify-content space-around
            margin-bottom 10px
            &:nth-of-type(odd)
              background #fff
            .content-top
              padding 5px 0
              height auto
              justify-content space-between
              display flex
              flex-direction column
              color #fff
              .top-wrapper
                display flex
                flex-direction row
                justify-content space-between
                .title
                  font-size 16px
                  color #1a1a1a
                  font-weight bold
                .num
                  font-size 14px
                  color #1a1a1a
              .date
                margin-top 15px
                font-size 14px
                color #1a1a1a
              .remaining
                margin-top 10px
                .remaining-text
                  margin-top 15px
                  font-size 15px
                  color #1a1a1a
                .remaining-value
                  font-size 15px
                  color #1a1a1a
                  font-weight bold
                .remaining-unit
                  color #1a1a1a
                  font-weight bold
                  font-size 15px
              .expect
                margin-top 15px
                .expect-text
                  color #1a1a1a
                  font-size 15px
                .expect-value
                  font-size 15px
                  color #1a1a1a
                  font-weight bold
                .expect-unit
                  color #1a1a1a
                  font-weight bold
                  font-size 15px
        .prompt
          padding-top 30px
          text-align center
          background #fff
          color #c90010
    .mobilePagesList
      text-align right
      margin-top 20px
      width 100%
      background #fff
</style>
