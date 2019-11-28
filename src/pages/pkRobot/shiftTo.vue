<template>
  <div class="shiftTo">
    <div class="head">
      <div class="back" @click="$router.go(-1)"></div>
      <div class="title">{{$t('boGe.text10')}}</div>
    </div>
    <div class="content wrap">
      <h4>{{$t('boGe.text6')}}</h4>
      <div class="amount"><input type="text" :placeholder="$t('boGe.text7')" v-model="amount" @input="checkAmount()"><i>SIE</i></div>
      <div class="error" v-if="errMsg">{{errMsg}}</div>
      <p class="curAmount">{{$t('boGe.text8')}}：<span>{{SIE.balance}}</span> SIE</p>
      <p>{{$t('boGe.text9')}}：<span>{{amount | formattingMoney}}</span> SIE</p>
      <div class="btn" @click="clickForward()" :class="{'disable': !amount ||  !agreement || fundDetial.serverDate < fundDetial.startdDate || fundDetial.serverDate > fundDetial.endDate}">{{$t('boGe.text10')}}</div>
      <div class="agreement"><i :class="{'not': agreement}" @click="agreement = !agreement"></i><span>{{$t('boGe.text11')}}<router-link style="color: #4286ec; cursor: pointer" to="/agreenment" target="_blank">《{{$t('boGe.text12')}}》</router-link></span></div>
    </div>
    <div class="dialog-box" v-if="isDialog">
      <div class="dialog">
        <div class="dialog-header">
          <div class="title">{{$t('arbitrageDetail.dialog.text1')}}</div>
          <div class="close" @click="close">
            <img src="../../assets/images/common/delete_16_16.svg">
          </div>
        </div>
        <div class="dialog-body" v-if="user.openGoogleCode===2 && user.openTradePassword ===2">
          <div class="input-group">
            <div class="input-group-text">{{$t('boGe.text20')}}</div>
            <input class="password" v-model="tradePwd" type="password" :placeholder="$t('arbitrageDetail.dialog.inputPlaceHold1')"/>
          </div>
          <div class="input-group">
            <div class="input-group-text">{{$t('arbitrageDetail.dialog.text3')}}</div>
            <input v-model="verifyCode" :placeholder="$t('arbitrageDetail.dialog.inputPlaceHold2')"/>
          </div>
        </div>
        <!--{{$t('dialog.text13')}}-->
        <div class="err-msg" v-if="errText">{{errText}}</div>
        <div class="err-msg" v-if="user.openGoogleCode !== 2">{{$t('dialog.text13')}}</div>
        <div class="err-msg" v-if="user.openTradePassword !==2">{{$t('arbitrageDetail.dialog.text8')}}</div>
        <span class="btn" @click="buyFund()" v-if="user.openGoogleCode===2 && user.openTradePassword ===2">{{$t('arbitrageDetail.dialog.text6')}}</span>
        <span class="btn" @click="close()" v-if="user.openGoogleCode!== 2 || user.openTradePassword !==2">{{$t('arbitrageDetail.dialog.text6')}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Dialog from '@/components/dialog/dialog'
export default {
  data () {
    return {
      amount: '',
      errMsg: '',
      isDialog: false,
      tradePwd: '', // 交易密码
      verifyCode: '', // google验证码
      agreement: false,
      errText: '',
      userInfoFlag: ''
    }
  },
  mounted () {
    this.fundAmount()
    this.getFundDetail()
    this.getUserBalance()
  },
  methods: {
    ...mapActions([
      'getUserBalance'
    ]),
    showError () {
      if (this.amount === '') {
        this.errMsg = this.$t('boGe.text21')
      } else {
        this.errMsg = ''
        if (this.agreement) {
          this.errMsg = ''
          if (this.fundDetial.serverDate >= this.fundDetial.startdDate && this.fundDetial.serverDate <= this.fundDetial.endDate) {
            this.errMsg = ''
          } else {
            this.errMsg = this.$t('boGe.text22')
          }
        } else {
          this.errMsg = this.$t('boGe.text23')
        }
      }
    },
    // 检查数据
    checkAmount () {
      if (!/^\d+(\.\d{0,4})?$/.test(this.amount)) {
        this.amount = this.amount.substring(0, this.amount.length - 1)
      }
      if (this.amount > this.SIE.balance) {
        this.amount = this.SIE.balance
      }
    },
    // 8.1.3 基金金额查询 fund/amount
    fundAmount () {
      let url = `${this.$api}/fund/amount`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.balanceNum = res.data.data
          this.userInfoFlag = res.data.data.userInfo
          if (this.balanceNum > 0) {
            this.agreement = true
          }
        }
      })
    },
    // 8.1.4 基金信息 fund/detail
    getFundDetail () {
      let url = `${this.$api}/fund/detail`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.fundDetial = res.data.data
        }
      })
    },
    // 8.1.1 基金购买 fund/buyFund
    buyFund () {
      if (this.user.openGoogleCode === 2 && this.user.openTradePassword === 2) {
        let url = `${this.$api}/fund/buyFund?amount=${this.amount}&tradePwd=${this.tradePwd}&verifyCode=${this.verifyCode}`
        this.$http.get(url).then(res => {
          if (res.data.success) {
             this.$router.push('/boGe')
          } else {
            this.errText = res.data.msg
          }
        })
      }
    },
    clickForward () {
      let url = `${this.$api}/fund/detail`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.showError()
          this.fundDetial = res.data.data
          if (this.amount !== '' && this.agreement && this.fundDetial.serverDate >= this.fundDetial.startdDate && this.fundDetial.serverDate <= this.fundDetial.endDate) {
            if (this.userInfoFlag === 0) {
              Dialog({
                title: this.$t('myInformation.text30'),
                content: this.$t('myInformation.text31'),
                okFn: () => {
                  this.$router.push({
                    path: '/boGe'
                  })
                }
              })
            } else {
              this.isDialog = true
            }
          }
        }
      })
    },
    ifTime (value) {
      if (value < 10) {
        return '0' + value
      }
      return value
    },
    change (value) {
      let newTime = new Date(value)
      let day = newTime.getDate()
      let month = newTime.getMonth() + 1
      let year = newTime.getFullYear()
      return year + this.$t('boGe.text24') + this.ifTime(month) + this.$t('boGe.text25') + this.ifTime(day) + this.$t('boGe.text26')
    },
    close () {
      this.isDialog = false // 关闭支付弹窗
      this.tradePwd = ''
      this.verifyCode = ''
      this.errText = ''
    }
  },
  computed: {
    ...mapGetters([
      'loginFlag',
      'user',
      'SIE'
    ])
  }
}
</script>
<style lang="less" type="text/less" scoped>
.shiftTo{
  padding-top: 80px;
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
  .agreementBox{
    overflow: hidden;
    position: fixed;
    top: 80px;
    left:0;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: rgba(0,0,0,0.6);
    z-index: 999;
    .content{
      padding: 40px 30px;
      width: 80%;
      height: 80%;
      overflow: auto;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      h3{
        text-align: center;
        font-weight: bold;
        font-size:20px;
        color: #1a1a1a;
        margin-bottom: 50px;
      }
      h4{
        padding-bottom: 15px;
        font-size: 14px;
        color: #1a1a1a;
        line-height: 1.5;
      }
      .cont{
        h6{
          font-weight: bold;
          padding-bottom: 15px;
          font-size: 16px;
          color: #1a1a1a;
          line-height: 1.5;
        }
        p{
          padding-bottom: 15px;
          font-size: 14px;
          color: #1a1a1a;
          line-height: 1.5;
        }
      }

    }
  }
  .head{
    position: fixed;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    top:0;
    width: 100%;
    height: 60px;
    display: flex;
    line-height: 60px;
    justify-content: center;
    flex-direction: row;
    .title{
      font-size: 22px;
      color: #1a1a1a;
    }
    .back{
      position: absolute;
      top: 22px;
      left: 18px;
      background-image: url("../../assets/images/arbitrageDetial/back.svg");
      background-position: right;
      background-repeat: no-repeat;
      width: 26px;
      height: 16px;
    }
  }
  .content{
    flex: 1;
    h4{
      font-size: 16px;
      color: #232044;
      margin-bottom: 20px;
    }
    .amount{
      height: 50px;
      width: 100%;
      border: 1px solid #e6e6e6;
      padding-left: 20px;
      position: relative;
      input{
        height: 100%;
        width: 100%;
        line-height: 50px;
        font-size: 16px;
        color: #232044;
      }
      i{
        position:absolute;
        top:50%;
        right: 0px;
        transform: translate(0, -50%);
        font-size: 18px;
        width: 50px;
        height:  48px;
        line-height: 48px;
        background-color: #fff;
        font-weight:bold;
      }
    }
    .error{
      color: #e60000;
      font-size: 14px;
    }
    p{
      color: #232044;
      font-size: 16px;
      span{

      }
      &.curAmount{
        margin-bottom: 10px;
        margin-top: 10px;
      }
    }
    .btn{
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      cursor: pointer;
      user-select: none;
      background-color: #e60000;
      color: #fff;
      margin-top: 140px;
      &:active{
        opacity: 0.4;
      }
      &.disable{
        cursor: not-allowed;
        color: #fff;
        &:active{
          opacity: 1;
        }
      }
    }
    .agreement{
      display: flex;
      align-items: top;
      justify-content: flex-start;
      margin-top: 10px;
      i{
        width: 20px;
        height: 20px;
        margin-right: 10px;
        display: inline-block;
        background-image: url("../../assets/images/pkRobot/not_agreement.png");
        background-repeat: no-repeat;
        background-size: 14px 14px;
        background-position: center;
        cursor: pointer;
        &.not{
          background-image: url("../../assets/images/pkRobot/agreement.png");
        }

      }
    }
  }
}
</style>
<style lang="stylus" type="text/stylus" scoped>
  .dialog-box
    position fixed
    top 0
    width 100%
    height 100%
    display flex
    justify-content center
    align-items center
    background-color:rgba(0,0,0,.5)
    .dialog
      position relative
      width 640px
      height auto
      display flex
      flex-direction column
      align-items center
      justify-content center
      background #fff
      @media screen and (max-width: 700px) {
        width 90%
        height: auto
        padding-bottom 30px
      }
      .dialog-header
        .title
          margin-top 60px
          font-weight bold
          color #1a1a1a
          font-size 34px
          @media screen and (max-width: 700px) {
            margin-top 40px
            font-size 30px
          }
        .close
          position absolute
          height 16px
          width 16px
          top 30px
          right 30px
          cursor pointer
          img
            font-size 16px
            text-align center
      .dialog-body
        width 100%
        display flex
        flex-direction column
        align-items center
        @media screen and (max-width: 414px) {
          height 100%
        }
        .errin-Msg
          margin 40px 0
          font-size 32px
        .input-group
          display flex
          flex-direction column
          width 100%
          margin-left 20%
          margin-top 30px
          @media screen and (max-width: 414px) {
            margin-top 10px
            height 100px
          }
          .input-group-text
            margin-bottom 10px
            text-align left
            color #232044
            font-size 18px
            @media screen and (max-width: 414px) {
              margin-bottom 5px
              font-size 14px
            }
          .password
            align-items center
            width 80%
            margin-top 10px
            height 50px
            padding-left 20px
            font-size 18px
            background #fff
            color #666
            border 1px solid #232044
            @media screen and (max-width: 414px) {
              height 30px
              font-size 14px
            }
          input
            align-items center
            width 80%
            margin-top 5px
            height 50px
            padding-left 20px
            font-size 18px
            background #fff
            color #666
            border 1px solid #232044
            @media screen and (max-width: 414px) {
              height 30px
              font-size 14px
            }
          .send-group
            width 80%
            position relative
            input
              align-items center
              width 100%
              margin-top 10px
              height 50px
              padding-left 20px
              font-size 16px
              background #fff
              color #666
              border 1px solid #1a1a1a
              @media screen and (max-width: 414px) {
                height 30px
                font-size 14px
              }
            .send
              position absolute
              height 50px
              width 50px
              top 6px
              color #e60000
              line-height 58px
              text-align center
              right 5px
              font-size 16px
              cursor pointer
              @media screen and (max-width: 414px) {
                height 30px
                line-height 30px
                font-size 14px
                width 42px
              }
        .bind
          color #ccc
          margin-top 100px
          margin-bottom 100px
          font-size 30px
          text-align center
      .err-msg
        color #e60000
        margin-top 30px
        font-size 20px
        @media screen and (max-width: 414px) {
          font-size 14px
        }
      .btn
        margin 40px 0 50px
        width 80%
        height 50px
        line-height 50px
        text-align center
        color #e60000
        border 1px solid #e60000
        cursor pointer
        @media screen and (max-width: 700px) {
          margin-top 40px
          margin-bottom 40px
          height 30px
          line-height 30px
          width 50%
        }
</style>
