import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home', // 首页
      name: 'home',
      component: home
    },
    {
      path: '/login', // 登陆
      name: 'login',
      component: resolve => require(['@/pages/login/login'], resolve)
    },
    {
      path: '/changeLanguage', // 移动端切换语言
      name: 'changeLanguage',
      component: resolve => require(['@/pages/changeLanguage/changeLanguage'], resolve)
    },
    {
      path: '/notice', // 公告列表
      name: 'notice',
      component: resolve => require(['@/pages/notice/notice'], resolve)
    },
    {
      path: '/noticeDetail', // 公告详情
      name: 'noticeDetail',
      component: resolve => require(['@/pages/notice/noticeDetail'], resolve)
    },
    {
      path: '/case', // 案例 pk如何获利
      name: 'case',
      component: resolve => require(['@/pages/case/case'], resolve)
    },
    {
      path: '/arbitrage', // 套利
      name: 'arbitrage',
      component: resolve => require(['@/pages/arbitrage/arbitrage'], resolve)
    },
    {
      path: '/arbitrageDetail', // 套利详情
      name: 'arbitrageDetail',
      component: resolve => require(['@/pages/arbitrage/arbitrageDetail'], resolve)
    },
    {
      path: '/betting', // 套利详情
      name: 'betting',
      component: resolve => require(['@/pages/arbitrage/betting'], resolve)
    },
    {
      path: '/cumulative', // 套利详情
      name: 'cumulative',
      component: resolve => require(['@/pages/arbitrage/cumulative'], resolve)
    },
    {
      path: '/pkRobot', // PK机器人
      name: 'pkRobot',
      component: resolve => require(['@/pages/pkRobot/pkRobot'], resolve)
    },
    {
      path: '/boGe', // 博格一号
      name: 'boGe',
      component: resolve => require(['@/pages/pkRobot/boGe'], resolve)
    },
    {
      path: '/shiftTo', // 博格一号  移动端转入
      name: 'shiftTo',
      component: resolve => require(['@/pages/pkRobot/shiftTo'], resolve)
    },
    {
      path: '/agreenment', // 博格一号  移动端转入
      name: 'agreenment',
      component: resolve => require(['@/pages/pkRobot/agreenment'], resolve)
    },
    // 我的账户
    {
      path: '/account', // 我的账户
      name: 'account',
      redirect: {name: 'achievement'},
      component: resolve => require(['@/pages/myArbitrage/accountNav'], resolve),
      children: [
        {
          path: 'achievement', // 我的账户
          name: 'achievement',
          component: resolve => require(['@/pages/myArbitrage/achievement/achievement'], resolve)
        },
        {
          path: 'billingRecord', // 账单记录
          name: 'billingRecord',
          component: resolve => require(['@/pages/myArbitrage/record/billingRecord'], resolve)
        },
        {
          path: 'recordDetail', // 账单记录详情
          name: 'recordDetail',
          component: resolve => require(['@/pages/myArbitrage/record/recordDetail'], resolve)
        },
        {
          path: 'arbitrageOrder', // 套利订单
          name: 'arbitrageOrder',
          component: resolve => require(['@/pages/myArbitrage/arbitrageOrder/arbitrageOrder'], resolve)
        },
        {
          path: 'orderProcess', // 套利订单进行中
          name: 'orderProcess',
          component: resolve => require(['@/pages/myArbitrage/arbitrageOrder/orderProcess'], resolve)
        },
        {
          path: 'completedOrderDetail', // 套利订单已完成详情
          name: 'completedOrderDetail',
          component: resolve => require(['@/pages/myArbitrage/arbitrageOrder/completedOrderDetail'], resolve)
        },
        {
          path: 'processOrderDetail', // 套利订单进行中详情
          name: 'processOrderDetail',
          component: resolve => require(['@/pages/myArbitrage/arbitrageOrder/processOrderDetail'], resolve)
        },
        {
          path: 'orderCompleted', // 套利订单已完成
          name: 'orderCompleted',
          component: resolve => require(['@/pages/myArbitrage/arbitrageOrder/orderCompleted'], resolve)
        },
        // {
        //   path: 'achievement', // 套利订单详情
        //   name: 'achievement',
        //   component: resolve => require(['@/pages/myArbitrage/achievement/achievement'], resolve)
        // },
        {
          path: 'profitLog', // 收益记录
          name: 'profitLog',
          component: resolve => require(['@/pages/myArbitrage/profit/profitLog'], resolve)
        },
        {
          path: 'profitLogDetail', // 收益记录详情
          name: 'profitLogDetail',
          component: resolve => require(['@/pages/myArbitrage/profit/profitLogDetail'], resolve)
        },
        {
          path: 'accumulativePerformance', // 套利业绩
          name: 'accumulativePerformance',
          component: resolve => require(['@/pages/myArbitrage/profit/accumulativePerformance'], resolve)
        },
        {
          path: 'fundPerformance', // 业绩累计
          name: 'fundPerformance',
          component: resolve => require(['@/pages/myArbitrage/fundPerformance/fundPerformance'], resolve)
        },
        {
          path: 'starDetail', // 星级说明页
          name: 'starDetail',
          component: resolve => require(['@/pages/myArbitrage/starDetail/starDetail'], resolve)
        },
        {
          path: 'bogeFund', // 博格基金
          name: 'bogeFund',
          component: resolve => require(['@/pages/myArbitrage/bogeFund/bogeFund'], resolve)
        },
        {
          path: 'bogeFundDetail', // 博格基金详情
          name: 'bogeFundDetail',
          component: resolve => require(['@/pages/myArbitrage/bogeFund/bogeFundDetail'], resolve)
        },
        {
          path: 'myInformation', // 我的信息
          name: 'myInformation',
          component: resolve => require(['@/pages/myArbitrage/myInformation/myInformation'], resolve)
        }
      ]
    }
  ]
})
