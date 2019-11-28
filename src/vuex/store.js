import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import axios from 'axios'
// const api = 'http://pk-web.5544444455.com/'
const api = 'https://api.pksport.ai/'
Vue.use(Vuex)
const balance = {
  state: {
    isopenpk: '', //  开通pk机器人 1开通 2 未开通
    opentime: '', // 开通时间
    loginFlag: false, // 是否登陆
    user: { // 用户信息
    },
    ETH: {
    },
    SIE: {
    },
    USD: {
    }
  },
  getters: {
    loginFlag: state => state.loginFlag,
    isopenpk: state => state.isopenpk,
    opentime: state => state.opentime,
    user: state => state.user,
    ETH: state => state.ETH,
    SIE: state => state.SIE,
    USD: state => state.USD
  },
  actions: {
    // 获取用户信息
    getUserBalance ({commit}) {
      let url = `${api}/user/balance`
      axios.post(url).then((res) => {
        commit('GET_LOGIN_FLAG', res.data) // 提交mutations
      }).catch(() => {
      })
    }
  },
  mutations: {
    GET_LOGIN_FLAG (state, data) {
      // console.log(window.location.hash)
      if (data.resultCode === 'NOT_LOGGEDIN') {
        state.loginFlag = false
      }
      if (data.success) {
        state.isopenpk = data.data.isopenpk
        state.opentime = data.data.opentime
        state.loginFlag = true
        state.user = data.data.user
        state.ETH = data.data.userAccount.ETH
        state.SIE = data.data.userAccount.SIE
        state.USD = data.data.userAccount.USD
      } else {
        state.isopenpk = ''
        state.opentime = ''
        state.loginFlag = false
        state.user = ''
        state.SIE = ''
        state.USD = ''
      }
    }
  }
}
export default new Vuex.Store({
  modules: {
    balance
  }

})
