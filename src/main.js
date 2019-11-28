// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import { i18n } from './i18n/config' //  引入国际化插件
import store from './vuex/store'  //   引入vuex
import 'babel-polyfill' // 兼容ie10 11
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
axios.defaults.withCredentials = true // 存cookie
Vue.prototype.$http = axios
// Vue.prototype.$api = 'http://pk-web.5544444455.com/'
Vue.prototype.$api = 'https://api.pksport.ai/'
Vue.prototype.$changeDate = function (time, str='/', type=1) { // 时间戳转换
  function ifTime (value) { // 判断时间是否是个位数
    if (value < 10) {
      return '0' + value
    }
    return value
  }
  let newTime = new Date(time)
  let day = newTime.getDate()
  let month = newTime.getMonth() + 1
  let year = newTime.getFullYear()
  let hours = newTime.getHours()
  let min = newTime.getMinutes()
  switch (type) {
    case 1:
      return year + str + ifTime(month) + str + ifTime(day) + ' ' + ifTime(hours) + ':' + ifTime(min)
    case 2:
      return year + str + ifTime(month) + str + ifTime(day) + ' 00:00:00'
    case 3:
      return year + str + ifTime(month) + str + ifTime(day) + ' 23:59:59'
    case 4:
      return year + str + ifTime(month) + str + ifTime(day)
    case 5:
      return year + str + ifTime(month) + str + ifTime(day)
    case 6:
      return ifTime(hours) + ':' + ifTime(min)
    case 7:
      return year.toString().substring(2,4) + str + ifTime(month) + str + ifTime(day)
    case 8:
      return year + '年' + ifTime(month) + str + ifTime(day)
  }
}

Vue.filter('formattingMoney', function (value) { // 截取四位小数, 并格式化金额
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
})

Vue.prototype.$changeId = function(num, n) {
  var len = num.toString().length
  while(len < n) {
    num = '0' + num
    len++
  }
  return num
}
if (window.location.hash !== '#/home' && window.location.hash !== '#/notice' && window.location.hash.indexOf('/noticeDetail') !== '-1') {
  let requestLang = localStorage.getItem('Qlang')
  if (requestLang && requestLang.toLowerCase() !== 'cn') {
    axios.defaults.headers = {'pk-language': requestLang}
  }
}
Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  i18n,
  template: '<App/>'
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
// 非中文情况下请求头加上header字段
