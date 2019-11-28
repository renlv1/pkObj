<template>
  <transition name="move">
    <div class="secret-wrapper">
      <div class="secret-container">
        <top :title="title"></top>
        <div class="safe-v">
          <div class="input-one" v-for="(item, index) in langData" :key="index"  @click="checkOne(index)">
            <div class="right">{{item}}</div>
            <div class="check-box">
              <span class="el-checkbox__inner" :class="{'active': isActive === index}"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import top from '../../components/top'
import { i18n } from '../../i18n/config'
export default {
  data () {
    return {
      title: '切换语言',
      isActive: 0,
      langData: this.$t('arbitrage.langData')
    }
  },
  created () {
    // console.log(this.$route.query.lang)
    if (this.$route.query.lang) {
      this.isActive = parseInt(this.$route.query.lang)
    }
    // console.log('123')
    // if (localStorage.getItem('__secretAPPlang__') === 'EN') {
    //   this.isActive = 2
    // }
  },
  methods: {
    checkOne (num) {
      this.isActive = num
      if (num === 0) {
        let lan = 'CN'
        let language = navigator.browserLanguage ? navigator.browserLanguage : navigator.language
        let langSub = language.substr(0, 2) // 获取lang字符串的前两位
        if (langSub === 'zh') {
          localStorage.setItem('__secretAPPlang__', 'CN')
          lan = 'CN'
        } else {
          localStorage.setItem('__secretAPPlang__', 'EN')
          lan = 'EN'
        }
        i18n.locale = lan
      } else if (num === 1) {
        i18n.locale = 'CN'
        localStorage.setItem('Qlang', 'CN')
      } else if (num === 2) {
        i18n.locale = 'EN'
        localStorage.setItem('Qlang', 'EN')
      }
      // console.log(this.$route.query.path)
      if (this.$route.query.path) {
        this.$router.push({path: '/home', query: {lang: num}})
      } else {
        this.$router.push({path: '/login', query: {lang: num}})
      }
    }
  },
  components: {
    top
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .safe-v
    margin-top 16px
    padding 30px
    .input-one
      width: 100%
      height: 60px
      line-height: 60px
      border-radius 6px
      display flex
      align-items center
      justify-content space-between
      font-size: 15px
      color #1a1a1a
      background-image: -webkit-gradient(linear, left bottom, left top, from(#252626), color-stop(100%, #252626), color-stop(0, transparent));
      background-image: linear-gradient(0deg, #252626, #252626 100%, transparent 0);
      background-size: 100% 1px;
      background-repeat: no-repeat;
      background-position: bottom;
      .check-box
        display flex
        align-items center
        justify-content center
        .el-checkbox__inner
          width: 15px
          height: 15px
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          z-index: 1;
          border: 1px solid #404042
          border-radius 4px
          transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
          &.active
            background-color: #00D563;
            border-color: #00D563;
            &::after
              transform: rotate(45deg) scaleY(1);
          &::after
            transform: scale(0);
            box-sizing: content-box;
            content: "";
            border: 2px solid #fff;
            border-left: 0;
            border-top: 0;
            height: 10px;
            width: 5px;
            position: absolute;
            left: 4px;
            transition: transform .15s ease-in .05s;
            transform-origin: center;
</style>
