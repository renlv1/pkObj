<template>
  <div class="OrderProcess">
    <div class="OrderProcess-web">
      <v-header></v-header>
      <div class="ord-w">
      <div class="wrap-web">
        <!--<div class="left-content">-->
          <!--<div class="account">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span class="account-title common-title">{{$t('achievement.text1')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next" @click="$router.push({path: '/achievement'})">-->
              <!--<router-link to="/achievement" active-class="active" class="choose">{{$t('achievement.text2')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next">-->
              <!--<router-link to="/billingRecord" class="choose" >{{$t('achievement.text67')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="profit-order">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-2.svg"/><span class="account-title common-title">{{$t('achievement.text3')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next ongoing isNow" @click="process(1)">-->
              <!--<div :class="{active:currency === 1 }" class="choose"  >{{$t('achievement.text4')}}</div>-->
              <!--<div class="turn-next" ref="isNow" :class="{active:currency === 1 }"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next ongoing isCompleted" @click="process(2)">-->
              <!--<div :class="{active:currency === 2}" class="choose"  >{{$t('achievement.text5')}}</div>-->
              <!--<div class="turn-next" ref="isCompleted" :class="{active:currency === 2}"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="profit">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">{{$t('achievement.text13')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next revenue-record" @click="$router.push({path: '/profitLog'})">-->
              <!--<router-link to="/profitLog" class="choose">{{$t('achievement.text6')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next accumulativeper" @click="$router.push({path: '/accumulativePerformance'})">-->
              <!--<router-link to="/accumulativePerformance" class="choose">{{$t('achievement.text7')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next accumulativeper" @click="$router.push({path: '/fundPerformance'})">-->
              <!--<router-link class="choose" to="/fundPerformance">{{$t('achievement.text01')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="bogeFund">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span-->
              <!--class="account-title common-title">{{$t('bogeFund.text1')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next bogeFund-record" @click="$router.push('/bogeFund')">-->
              <!--<div class="choose">{{$t('bogeFund.text2')}}</div>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next" @click="$router.push('/myInformation')">-->
              <!--<router-link class="choose" to="/myInformation">{{$t('myInformation.text1')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--进行中的数据-->
        <div class="right-content" v-if="processing">
          <div class="right-title"><span>{{$t('achievement.text3')}} </span><i> > </i><span> {{$t('achievement.text4')}}</span></div>
          <div class="filter">
            <div class="dateFilter">
              <h3>{{$t('pageTurn.text3')}}</h3>
              <el-date-picker
              v-model="underwayValue"
              unlink-panels
              type="daterange"
              :range-separator="$t('pageTurn.text4')"
              :start-placeholder="$t('pageTurn.text5')"
              :end-placeholder="$t('pageTurn.text6')"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd">
              </el-date-picker>
            </div>
            <div class="statuFilter">
              <h3>{{$t('pageTurn.text7')}}</h3>
              <div class="selectStatu">
                <div class="curStatu" @click="selectFlag = !selectFlag"><span>{{curStatu.text}}</span><i :class="{'close':selectFlag}"></i></div>
                <ul :class="{'close': selectFlag}">
                  <li v-for="(item, index) in statuList" :key="index" @click="curStatu = item;selectFlag = false">{{item.text}}</li>
                </ul>
              </div>
            </div>
            <div class="queryBtn" @click="filterQuery(1)">
              {{$t('pageTurn.text12')}}
            </div>
          </div>
          <div class="table-wrap">
            <div class="table-title">
              <div style="width:11%">{{$t('achievement.text14')}}</div>
              <div style="width:22%">{{$t('achievement.text15')}}</div>
              <div style="width: 22%">{{$t('achievement.text16')}}</div>
              <div style="width: 22%">{{$t('achievement.text17')}}</div>
              <div style="width: 11%">{{$t('pageTurn.text7')}}</div>
              <div style="width: 11%">{{$t('achievement.text18')}}</div>
            </div>
            <div class="table-content" v-for="(item,index) in listData" :key="index" @click="$router.push({path: '/account/processOrderDetail', query: {id: item.id}})">
              <div style="width: 11%">{{item.id}}</div>
              <div v-if="flagLag" style="width: 22%">{{item.title}}</div>
              <div v-else-if="item.remark" style="width: 22%">{{item.remark.split(',')[0]}}</div>
              <div v-else style="width: 22%"></div>
              <div style="width: 22%">{{getAbs(item.personalAmountStr)}}{{item.currency}}</div>
              <div style="width: 22%">{{changeTime(item.competitionTime)}}</div>
              <div style="width: 11%">{{parseArstatus(item)}}</div>
              <!--<div style="width: 200px" >{{item.remark.split(',')[0]}}</div>-->
              <div class="check-detail" style="width: 11%">
                <router-link :to="{path:'/account/processOrderDetail', query: {id: item.id}}">{{$t('achievement.text10')}}</router-link>
              </div>
            </div>
            <div class="load-more-box" v-show="isLoadMore">
              <p class="desc"></p>
              <div class="loading-img">
                <img src="../../../assets/images/arbitrage/loading.gif" alt="">
              </div>
            </div>
            <div class="prompt" v-show="emptyData">{{$t('bogeFund.text9')}}</div>
            <v-turnPage v-show="this.listData !== ''" class="pagesList" :propsPage="pagesTotal" @discountTrunPage="parentTurnPage" ref="turnPage"></v-turnPage>
          </div>
        </div>
        <!--已完成的数据-->
        <div class="completed-content" v-if="completed">
          <div class="right-title"><span>{{$t('achievement.text3')}} </span><i> > </i><span> {{$t('achievement.text5')}}</span></div>
          <div class="filter">
            <div class="dateFilter">
              <h3>{{$t('pageTurn.text3')}}</h3>
              <el-date-picker
                v-model="completedValue"
                unlink-panels
                type="daterange"
                :range-separator="$t('pageTurn.text4')"
                :start-placeholder="$t('pageTurn.text5')"
                :end-placeholder="$t('pageTurn.text6')"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                :picker-options="pickerOptions0"
              >
              </el-date-picker>
            </div>
            <div class="queryBtn" @click="filterQuery(2)">
              {{$t('pageTurn.text12')}}
            </div>
          </div>
          <div class="table-wrap">
            <div class="table-title">
              <div>{{$t('achievement.text14')}}</div>
              <div style="width:22%">{{$t('achievement.text15')}}</div>
              <div style="width:18%">{{$t('achievement.text16')}}</div>
              <div style="width:18%">{{$t('achievement.text19')}}</div>
              <div style="width:16%">{{$t('achievement.text17')}}</div>
              <div style="width:16%">{{$t('achievement.text18')}}</div>
            </div>
            <div class="table-content" v-for="(item,index) in completedData" :key="index" @click="$router.push({path: '/account/completedOrderDetail', query: {id: item.id}})">
              <div>{{item.id}}</div>
              <div v-if="flagLag" style="width:22%">{{item.title}}</div>
              <div v-else-if="item.remark" style="width:22%">{{item.remark.split(',')[0]}}</div>
              <div v-else style="width:22%"></div>
              <div style="width:18%">{{getAbs(item.personalAmountStr)}}{{item.currency}}</div>
              <div style="width:18%">{{item.getAmountStr}} {{item.currency}}</div>
              <div style="width:16%">{{changeTime(item.competitionTime)}}</div>
              <div class="checkDetail" style="width:16%">
                <router-link :to="{path: '/account/completedOrderDetail', query: {id: item.id}}" >{{$t('achievement.text10')}}</router-link>
              </div>
            <div class="load-more-box" v-show="completedLoadMore">
              <p class="desc"></p>
              <div class="loading-img">
                <img src="../../../assets/images/arbitrage/loading.gif" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="prompt" v-show="emptyCompletedData">{{$t('bogeFund.text9')}}</div>
        <v-turnPage v-if="this.completedData !== ''" class="pagesList" :propsPage="ompletedDataTotal" @isOverTrunPage="isOverTurnPage" ref="turnPage"></v-turnPage>
      </div>
      </div>
    </div>
    <!--<div class="footer-w">-->
      <!--<v-footer></v-footer>-->
    <!--</div>-->
  </div>
    <!--手机结构-->
    <div class="arbitrage-mobile">
      <div class="head">
        <div class="title">{{$t('achievement.text3')}}</div>
        <div class="back" @click="$router.go(-1)"></div>
      </div>
      <div class="de-c">
        <div class="tab">
          <ul>
            <li ref="now" class="now" :class="{active: isNow}" @click="swicth">{{$t('achievement.text4')}}</li>
            <li ref="before" :class="{active: isBefore}" class="before" @click="otherSwich">{{$t('achievement.text5')}}</li>
          </ul>
        </div>
        <div class="tab-content">
          <!--进行中-->
          <div class="tab-content-now" v-show="isNow">
            <ul>
              <router-link tag="li" v-for="item in listData" :key="item.index" :to="{path: '/account/processOrderDetail', query: {id: item.id}}">
                <div class="content-top">
                  <div class="num">{{$t('achievement.text14')}}: {{item.id}}</div>
                  <div class="date">{{changeTime(item.competitionTime)}}</div>
                </div>
                <div class="usd">
                  <span>{{$t('achievement.text16')}}: </span><span style="font-weight: bold">{{item.personalAmountStr}}</span> <span style="font-size: 16px;font-weight: bold">{{item.currency}}</span>
                </div>
              </router-link>
              <div class="load-more-box" v-show="isLoadMore">
                <!--<p class="desc">{{$t('popup.text9')}}</p>-->
                <div class="loading-img">
                  <img src="../../../assets/images/arbitrage/loading.gif" alt="">
                </div>
              </div>
              <div class="prompt" v-show="emptyData">{{$t('bogeFund.text9')}}</div>
              <div class="prompt" v-show="listData.length === 0">{{$t('bogeFund.text9')}}</div>
            </ul>
            <!--<div class="prompt" v-if="listData.length === 0">暂时还没有进行中的套利哇！</div>-->
          </div>
          <!--已完成-->
          <div class="tab-content-before" v-show="isBefore">
            <ul>
              <router-link tag="li" v-for="item in completedData" :key="item.index" :to="{path: '/account/completedOrderDetail', query: {id: item.id}}">
                <div class="content-top">
                  <div class="num">{{$t('achievement.text14')}}: {{item.id}}</div>
                  <div class="date">{{changeTime(item.competitionTime)}}</div>
                </div>
                <div class="usd">
                  <span>{{$t('achievement.text16')}}: </span> <span style="font-weight: bold; font-size: 16px">{{getAbs(item.personalAmountStr)}}{{item.currency}}</span>
                </div>
                <div class="profits">
                  <span>{{$t('achievement.text19')}}: </span><span style="font-weight: bold; font-size: 16px">{{getAbs(item.getAmountStr)}} {{item.currency}}</span>
                </div>
              </router-link>
              <div class="load-more-box" v-show="completedLoadMore">
                <!--<p class="desc">{{$t('popup.text9')}}</p>-->
                <div class="loading-img">
                  <img src="../../../assets/images/arbitrage/loading.gif" alt="">
                </div>
              </div>
            </ul>
            <!--<div class="prompt" v-if="completedData.length === 0">暂时还没有已完成数据哇！</div>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import arbitrageOrder from './arbitrageOrder.vue'
export default {
  data () {
    return {
      isCompleted: false,
      pickerOptions0: {
        disabledDate (time) {
          return time.getTime() > Date.now() - 8.64e6
        }
      },
      isLoadMore: true,
      flagLag: true, // 判断页面的语言类型默认是中文
      completedLoadMore: true,
      active: false,
      pagesTotal: 1, // 查看业绩总页数
      nowPage: 1, // 当前页数
      ompletedDataTotal: 1, // 已完成总页数
      listData: [],
      completedData: [],
      emptyData: false,
      emptyCompletedData: false,
      processing: false,
      completed: false,
      currency: Number(this.$route.query.order),
      isNow: true,
      isBefore: false,
      currentPage: 1,
      status: 1, // 默认状态为1
      completedValue: '',
      underwayValue: '',
      statuList: [ // 状态选择下拉框选项
        {
          text: this.$t('pageTurn.text8'),
          tag: ''
        },
        {
          text: this.$t('pageTurn.text9'),
          tag: 1
        },
        {
          text: this.$t('pageTurn.text10'),
          tag: 2
        },
        {
          text: this.$t('pageTurn.text11'),
          tag: 3
        },
        {
          text: this.$t('pageTurn.text16'),
          tag: 4
        }
      ],
      curStatu: { // 当前选择的状态 默认为全部
        text: this.$t('pageTurn.text8'),
        tag: ''
      },
      selectFlag: false, // 状态筛选下拉框 开关
      selectFlag2: false
    }
  },
  components: {
    vTurnPage: resolve => require(['../../../components/turnPage.vue'], resolve),
    vHeader: resolve => require(['../../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../../components/footer.vue'], resolve),
    arbitrageOrder
  },
  created () {
    this._chooseLag()
    if (parseInt(this.$route.query.order) === 2) {
      this.processing = false
      this.completed = true
    }
    if (parseInt(this.$route.query.order) === 1) {
      this.processing = true
      this.completed = false
    }
    this.getCompletedLog(1)
    this.$nextTick(() => {
      this.getUserBalance()
      // this.login()
    })
  },
  mounted () {
    this.getPath()
  },
  methods: {
    getPath () {
      let index = this.$route.query.order
      this.currency = index
      if (index === 1) {
        this.processing = true
        this.completed = false
        this.selectFlag = false
        this.status = 1
      }
      if (index === 2) {
        // this.completedLoadMore = true
        this.processing = false
        this.completed = true
        this.selectFlag2 = false
        this.status = 2
        // this.getCompletedLog(1)
      }
      // console.log(index)
    },
    // 解析套利状态
    // 投注中endTime >=now() AND startTime<=now() AND maxTotalAmount - alreadyAmount>=100
    // 待开奖(NOW()<start_time OR NOW()>end_time OR max_total_amount-already_amount<100)
    // 结算中bonuses_status=1 or bonuses_status=2 or bonuses_status=3
    getAbs (account) {
      if (account < 0) {
        let accounts = Math.abs(account)
        accounts = '-' + this.formattingMoney(accounts)
        return accounts
      } else {
        let accounts = Math.abs(account)
        accounts = this.formattingMoney(accounts)
        return accounts
      }
    },
    formattingMoney (value) {
      if (value === '') {
        return 0.0000
      } else {
        if (!isNaN(value) && value !== null) {
          let f = Math.floor(value * 10000) / 10000
          let _value = f.toString()
          let rs = _value.indexOf('.')
          if (rs < 0) {
            rs = _value.length
            _value += '.'
          }
          while (_value.length <= rs + 4) {
            _value += '0'
          }
          let newStr = _value.split('.')
          if (newStr[0].length <= 3) {
            return newStr[0] + '.' + newStr[1]
          }
          var r = newStr[0].length % 3
          _value = r > 0 ? newStr[0].slice(0, r) + ',' + newStr[0].slice(r, newStr[0].length).match(/\d{3}/g).join(',') : newStr[0].slice(r, newStr[0].length).match(/\d{3}/g).join(',')
          _value = _value + '.' + newStr[1]
          return _value
        }
      }
    },
    parseArstatus (item) {
      let curTime = new Date().getTime()
      if (item.endTime >= curTime && item.startTime <= curTime && (item.maxTotalAmount - item.alreadyAmount) >= 100) {
        return this.$t('pageTurn.text9')
      } else if (item.bonusesStatus === 0 && (curTime < item.startTime || curTime > item.endTime || (item.maxTotalAmount - item.alreadyAmount) < 100)) {
        return this.$t('pageTurn.text10')
      } else if (item.bonusesStatus === 1 || item.bonusesStatus === 2 || item.bonusesStatus === 3) {
        return this.$t('pageTurn.text11')
      } else if (item.bonusesStatus === 6 || item.bonusesStatus === 5) {
        return this.$t('pageTurn.text16')
      }
    },
    _chooseLag () { // 判断当前网页的语言类型
      if (window.localStorage.Qlang === 'CN') {
        this.flagLag = true
      } else if (window.localStorage.Qlang === 'EN') {
        this.flagLag = !this.flagLag
      }
    },
    process (index) {
      // this.isLoadMore = true
      this.currency = index
      if (index === 1) {
        this.processing = true
        this.completed = false
        this.selectFlag = false
        this.status = 1
      }
      if (index === 2) {
        // this.completedLoadMore = true
        this.processing = false
        this.completed = true
        this.selectFlag2 = false
        this.status = 2
        // this.getCompletedLog(1)
      }
    },
    changeTime (time) {
      return this.$changeDate(time, '/', 1)
    },
    swicth () {
      this.isNow = true
      this.isBefore = false
    },
    otherSwich () {
      // this.completedLoadMore = true
      this.isNow = false
      this.isBefore = true
      this.getCompletedLog(1)
    },
    // 登陆
    // login () {
    //   let url = `${this.$api}/user/userlogin?username=liulian&password=123123aA`
    //   this.$http.post(url).then((res) => {
    //     if (res.data.success) {
    //       this.getArbitrageLog(1)
    //       // this.getUserBalance()
    //     }
    //   }).catch(() => {
    //   })
    // },
    // 获取用户信息
    getUserBalance () {
      let url = `${this.$api}/user/balance`
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.getArbitrageLog(1)
        }
      }).catch(() => {
      })
    },
    // 获取进行中列表数据
    filterQuery (status) {
      if (status === 1) {
        this.getArbitrageLog(1)
      } else if (status === 2) {
        this.getCompletedLog(1)
      }
    },
    getArbitrageLog (page) {
      let url = ''
      if (this.underwayValue) {
        url = `${this.$api}/bet/queryBetList?pageSize=10&pageIndex=${page}&status=1&starttime=${this.underwayValue[0]} 00:00:00&endtime=${this.underwayValue[1]} 23:59:59&arstatus=${this.curStatu.tag}`
      } else {
        url = `${this.$api}/bet/queryBetList?pageSize=10&pageIndex=${page}&status=1&arstatus=${this.curStatu.tag}`
      }
      this.$http.post(url).then(res => {
        if (res.data.success) {
          this.isLoadMore = false
          // console.log(res.data.data)
          this.listData = res.data.data
          if (this.listData.length > 0) {
            this.emptyData = false
          } else {
            this.emptyData = true
          }
          this.pagesTotal = res.data.mapData.sumpage // 总页数
          // console.log(this.pagesTotal)
        } else {
          this.isLoadMore = false
          this.pagesTotal = 0
        }
      }).catch(err => {
        console.log(err)
        this.isLoadMore = false
      })
    },
    // 获取已完成列表数据
    getCompletedLog (page) {
      let url = ''
      if (this.completedValue) {
        url = `${this.$api}/bet/queryBetList?pageSize=10&pageIndex=${page}&status=2&starttime=${this.completedValue[0]} 00:00:00&endtime=${this.completedValue[1]} 23:59:59`
      } else {
        url = `${this.$api}/bet/queryBetList?pageSize=10&pageIndex=${page}&status=2`
      }
      this.$http.post(url).then(res => {
        if (res.data.success) {
          // console.log(res.data)
          this.completedLoadMore = false
          this.completedData = res.data.data
          if (this.completedData.length > 0) {
            this.emptyCompletedData = false
          } else {
            this.emptyCompletedData = true
          }
          // console.log(this.completedData.length)
          this.ompletedDataTotal = res.data.mapData.sumpage // 总页数
        } else {
          this.completedLoadMore = false
          this.ompletedDataTotal = 0
        }
      }).catch(err => {
        console.log(err)
        this.completedLoadMore = false
      })
    },
    parentTurnPage (page) {
      this.nowPage = page
      this.getArbitrageLog(page)
    },
    isOverTurnPage (page) {
      this.nowPage = page
      this.getCompletedLog(page)
    }
  },
  watch: {
    '$route': 'getPath'
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  .footer-w
    position: relative
    width: 100%
    height: 59px
    clear both
    margin-top: -59px
  .ord-w
    position: relative
    min-height calc(100vh - 80px)
  .OrderProcess
    .OrderProcess-web
      background-image url("../../../assets/images/common/bg_500_500.svg")
      background-repeat:repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-repeat: repeat;
      background-size: 500px 500px;
      background-position: 50% 50%;
      display block
      @media screen and (max-width: 1024px)
        display none
      .wrap-web
        width 100%
        margin 0 auto
        padding-top 80px
        /*margin-bottom: 160px*/
        display flex
        flex-direction row
        @media screen and (max-width: 1300px)
          width 100%
          flex-direction row
          /*align-items center*/
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          height 800px
          margin-bottom: 160px
          background-color #f2f2f2
          @media screen and (max-width: 1024px){
            // height auto
            /*padding-left 50px*/
            margin-bottom: 0
          }
          .common-icon
            width 30px
            height 30px
            margin-right 20px
            vertical-align middle
          .common-title
            vertical-align top
            font-size 20px
            color #1a1a1a
            height  50px
            font-weight bold
            @media screen and (max-width: 1024px){
              font-size 18px
            }
          .go-next
            padding-left 40px
            cursor pointer
            height 50px
            width 100%
            line-height 50px
            display flex
            padding-right 20px
            .turn-next
              width 25px
              height 8px
              display none
              img
                width 100%
            &:hover
              background-color #f2f4f5
              color #e60000
              .turn-next
                display block
              .choose
                color #e60000 !important
            .choose
              font-size 16px
              color #232044
              height 50px
              width 100%
              line-height 50px
              @media screen and (max-width: 1024px){
                font-size 12px
              }
              &:hover
                color #e60000
          .account
            padding-top 60px
            @media screen and (max-width: 1300px){
              padding-top 0
            }
          .account-up
            padding-left 20px
            height 60px
            width 100%
            line-height 60px
          .profit-order
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
            .isNow
              &:hover
                background-color #f2f4f5
                color #e60000
                .turn-next
                  display block
              .active
                font-size 16px
                color #e60000
                display block
            .isCompleted
              &:hover
                background-color #f2f4f5
                color #e60000
                .turn-next
                  display block
              .active
                font-size 16px
                color #e60000
                display block
          .profit
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
          @media screen and (max-width: 1300px){
            display flex
            flex-direction column
            // height auto
          }
        /*右边样式*/
        .right-content
          width 100%
          margin-top 50px
          overflow: hidden
          @media screen and (max-width: 1024px){
            width 100%
            display flex
            flex-direction column
          }
          @media screen and (max-width: 1300px){
            padding 0 30px
          }
          .right-title
            color #1a1a1a
            font-size 16px
            margin-top 20px
            margin-bottom  40px
          .table-wrap
            width 100%
            .table-title
              display flex
              justify-content  space-between
              align-items center
              font-size 18px
              height 40px
              background-color #f2f2f2 !important
              @media screen and (max-width: 1024px){
                justify-content left
                font-size 14px
              }
              div
                color #1a1a1a
                width 10%
                font-weight bold
                text-align center
            .table-content
              cursor pointer
              display flex
              justify-content  space-between
              align-items center
              font-size 16px
              height 50px
              div
                width 10%
                text-align center
                font-size 16px
                color #1a1a1a
              &:hover
                position relative
                background-color #f2f2f2
                box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
              .check-detail
                a
                  font-size 16px
                  color #e60000
                  cursor pointer
            .table-content:nth-child(odd)
              background-color #f2f2f2
        /*opacity .7*/
        .completed-content
          width 100%
          margin-top 50px
        @media screen and (max-width: 1300px){
          width 100%
          display flex
          flex-direction row
          white-space:nowrap
        }
        .right-title
          color #1a1a1a
          font-size 16px
          margin-top 20px
          margin-bottom  40px
        .table-wrap
          width 100%
          .table-title
            display flex
            justify-content  space-between
            align-items center
            font-size 18px
            height 40px
            background-color #f2f2f2 !important
            @media screen and (max-width: 1024px){
              font-size 14px
            }
            div
              color #1a1a1a
              width 10%
              font-weight bold
              text-align center
          .table-content
            cursor pointer
            display flex
            justify-content  space-between
            align-items center
            font-size 16px
            height 50px
            div
              display inline-block
              width 10%
              text-align center
              font-size 16px
              color #1a1a1a
            &:hover
              position relative
              background-color #f2f2f2
              box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
            .checkDetail
              a
                font-size 16px
                color #e60000
                cursor pointer
          .table-content:nth-child(odd)
            background-color #f2f2f2
  .pagesList
    margin-top 10px
    margin-right 0 !important
    float right
  .arbitrage-mobile
    position: absolute
    width: 100%
    top: 0
    height auto
    background-color #f8f9fa
    @media screen and (max-width: 1024px) {
      display block
    }
    @media screen and (min-width: 1024px) {
      display none
    }
    .head
      position fixed
      top 0
      width 100%
      border-bottom 1px solid #666
      height 60px
      line-height 60px
      display flex
      flex-direction row
      justify-content center
      z-index 999
      background #fff
    .back
      position absolute
      top 22px
      left 18px
      background-image url("../../../assets/images/common/row-34-24_1.svg")
      background-position right
      background-repeat no-repeat
      width 30px
      height 20px
    .title
      font-size 20px
      color #1a1a1a
      font-weight bold
    .de-c
      position: fixed
      width 100%
      top: 60px
      bottom: 0
      overflow: auto
      background-color: #f8f9fa;
    .tab
      color #1a1a1a
      ul
        height 55px
        display flex
        flex-direction row
        justify-content space-around
        li
          line-height 60px
          list-style none
          color #1a1a1a
          font-size 18px
          cursor pointer
        .active
          color #e60000
          font-weight bold
          border-bottom 1px solid #e60000
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
            height 100px
            display flex
            flex-direction column
            justify-content space-around
            &:nth-of-type(odd)
              background #ffffff
            .content-top
              display flex
              flex-direction row
              justify-content space-between
              color #1a1a1a
              .num
                font-size 14px
              .date
                font-size 14px
            .usd
              font-size 16px
              color #1a1a1a
        .prompt
          margin-top 30px
          text-align center
          color #c90010
      .tab-content-before
        ul
          padding-top 10px
          display flex
          flex-direction column
          width 100%
          li
            padding-left 20px
            padding-right 20px
            height 140px
            display flex
            flex-direction column
            justify-content space-around
            &:nth-of-type(odd)
              background #ffffff
            .content-top
              display flex
              flex-direction row
              justify-content space-between
              color #1a1a1a
              .num
                font-size 14px
              .date
                font-size 14px
            .usd
              font-size 16px
              color #1a1a1a
            .profits
              font-size 16px
              color #1a1a1a
        .prompt
          margin-top 30px
          text-align center
          color #c90010
  //正在加载中样式
  .load-more-box
    padding-bottom: 30px
    .desc
      font-size: 24px
      color #fff
      text-align: center
      margin-top: 30px
    .loading-img
      width: 50px
      height: 50px
      margin: 30px auto 0
      img
        width: 100%
        height: 100%
  .prompt
    margin-top 30px
    text-align center
    color #c90010
</style>
