<template>
  <div class="achievement">
    <div class="achievement-web" >
      <v-header></v-header>
      <div class="ord-w">
        <div class="wrap-web">
          <div class="right-content">
            <div class="right-title"><span>{{$t('myInformation.text1')}}</span></div>
            <div class="rightCont">
              <!--个人信息-->
              <div class="info">
                <h5>{{$t('myInformation.text2')}}</h5>
                <h6 style="color: #e60000; margin-left: 40px;margin-top: 10px ">* {{$t('myInformation.text40')}}</h6>
                <div class="inputBox">
                  <div class="input-box">
                    <label>{{$t('myInformation.text3')}}</label>
                    <div class="cont">
                      <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text4')" v-model="name">
                      <div class="error" v-if="error1">{{error1}}</div>
                    </div>

                  </div>
                  <div class="input-box">
                    <label>{{$t('myInformation.text5')}}</label>
                    <div class="cont">
                      <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text6')" v-model="phone">
                      <div class="error" v-if="error2">{{error2}}</div>
                    </div>

                  </div>
                  <div class="input-box">
                    <label>{{$t('myInformation.text7')}}</label>
                    <div class="cont">
                      <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text8')" v-model="email">
                      <div class="error" v-if="error3">{{error3}}</div>
                    </div>

                  </div>
                  <div class="input-box">
                    <label>{{$t('myInformation.text9')}}</label>
                    <div class="cont">
                      <div class="cardType" @click.stop="toggleSelectBox()" :class="{'disable': !savaFlag}">
                        <p :class="{'selected': curCardType.type !== ''}">{{curCardType.text}} <i :class="{'close': closeFlag}"></i></p>
                        <ul :class="{'close': closeFlag}">
                          <li v-for="(item, index) in cardType" :key="index" @click="selectCardType(item)" :class="{'selected': curCardType.type === item.type}">{{item.text}}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="input-box">
                    <label>{{$t('myInformation.text10')}}</label>
                    <div class="cont">
                      <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text11')" v-model="idNumber">
                      <div class="error" v-if="error4">{{error4}}</div>
                    </div>
                  </div>
                </div>
              </div>
              <!--银行卡信息-->
              <div class="info">
                <h5>{{$t('myInformation.text12')}}</h5>
                <div class="inputBox">
                  <div class="input-box">
                    <label>{{$t('myInformation.text13')}}</label>
                    <div class="cont">
                      <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text14')" v-model="cardName">
                      <div class="error" v-if="error5">{{error5}}</div>
                    </div>
                  </div>
                  <div class="input-box">
                    <label>{{$t('myInformation.text15')}}</label>
                    <div class="cont">
                      <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text16')" v-model="cardNumber">
                      <div class="error" v-if="error6">{{error6}}</div>
                    </div>
                  </div>
                  <div class="input-box">
                    <label>{{$t('myInformation.text17')}}</label>
                    <div class="cont">
                      <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text18')" v-model="bankName">
                      <div class="error" v-if="error7">{{error7}}</div>
                    </div>
                  </div>
                  <div class="input-box">
                    <label></label>
                    <div class="cont">
                      <div class="btn" @click="sureSave()" v-if="savaFlag">{{$t('myInformation.text19')}}</div>
                      <div class="error"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <div class="achievement-mobile">
      <div class="head">
        <div class="back" @click="$router.go(-1)"></div>
        <div class="title">{{$t('myInformation.text1')}}</div>
        <div class="right-btn" @click="sureSave()" v-if="savaFlag">{{$t('myInformation.text19')}}</div>
      </div>
      <div class="de-c">
        <!--个人信息-->
        <div class="info">
          <h5>{{$t('myInformation.text2')}}</h5>
          <h6 style="color: #e60000;margin-bottom: 20px">* {{$t('myInformation.text40')}}</h6>
          <div class="inputBox">
            <div class="input-box">
              <label>{{$t('myInformation.text3')}}</label>
              <div class="cont">
                <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text4')" v-model="name">
                <div class="error" v-if="error1">{{error1}}</div>
              </div>

            </div>
            <div class="input-box">
              <label>{{$t('myInformation.text5')}}</label>
              <div class="cont">
                <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text6')" v-model="phone">
                <div class="error" v-if="error2">{{error2}}</div>
              </div>

            </div>
            <div class="input-box">
              <label>{{$t('myInformation.text7')}}</label>
              <div class="cont">
                <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text8')" v-model="email">
                <div class="error" v-if="error3">{{error3}}</div>
              </div>

            </div>
            <div class="input-box">
              <label>{{$t('myInformation.text9')}}</label>
              <div class="cont">
                <div class="cardType" @click.stop="toggleSelectBox()">
                  <p :class="{'selected': curCardType.type !== ''}">{{curCardType.text}} <i :class="{'close': closeFlag}"></i></p>
                  <ul :class="{'close': closeFlag}">
                    <li v-for="(item, index) in cardType" :key="index" @click="selectCardType(item)" :class="{'selected': curCardType.type === item.type}">{{item.text}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="input-box">
              <label>{{$t('myInformation.text10')}}</label>
              <div class="cont">
                <input type="text"  :disabled="!savaFlag" :placeholder="$t('myInformation.text11')" v-model="idNumber">
                <div class="error" v-if="error4">{{error4}}</div>
              </div>
            </div>
          </div>
        </div>
        <!--银行卡信息-->
        <div class="info">
          <h5>{{$t('myInformation.text12')}}</h5>
          <div class="inputBox">
            <div class="input-box">
              <label>{{$t('myInformation.text13')}}</label>
              <div class="cont">
                <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text14')" v-model="cardName">
                <div class="error" v-if="error5">{{error5}}</div>
              </div>
            </div>
            <div class="input-box">
              <label>{{$t('myInformation.text15')}}</label>
              <div class="cont">
                <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text16')" v-model="cardNumber">
                <div class="error" v-if="error6">{{error6}}</div>
              </div>
            </div>
            <div class="input-box">
              <label>{{$t('myInformation.text17')}}</label>
              <div class="cont">
                <input type="text" :disabled="!savaFlag" :placeholder="$t('myInformation.text18')" v-model="bankName">
                <div class="error" v-if="error7">{{error7}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Dialog from '@/components/dialog/dialog'
  export default {
    data () {
      return {
        isLoadMore: true,
        listData: [],
        personalAmount: '',
        nowPage: 1, // 当前页数
        pagesTotal: 1, // 订单记录总页数
        person: '',
        fundAmount: '',
        betpaycurrency: '',
        cardType: [
          {
            type: 1,
            text: this.$t('myInformation.text33')
          },
          {
            type: 2,
            text: this.$t('myInformation.text34')
          },
          {
            type: 3,
            text: this.$t('myInformation.text35')
          },
          {
            type: 4,
            text: this.$t('myInformation.text36')
          },
          {
            type: 5,
            text: this.$t('myInformation.text37')
          }
        ],
        curCardType: {
          type: '',
          text: this.$t('myInformation.text20')
        },
        closeFlag: false,
        error1: '',
        error2: '',
        error3: '',
        error4: '',
        error5: '',
        error6: '',
        error7: '',
        error8: '',
        name: '',
        phone: '',
        email: '',
        idType: '',
        idNumber: '',
        cardName: '',
        cardNumber: '',
        bankName: '',
        savaFlag: false

      }
    },
    components: {
      vHeader: resolve => require(['../../../components/header.vue'], resolve),
      vFooter: resolve => require(['../../../components/footer.vue'], resolve),
      vTurnPage: resolve => require(['../../../components/turnPage.vue'], resolve)
    },
    mounted () {
      this.getUserInfo()
    },
    methods: {
      toggleSelectBox () {
        if (this.savaFlag) {
          this.closeFlag = !this.closeFlag
        }
      },
      // 1.1.5 我的信息 user/getUserInfo
      getUserInfo () {
        let url = `${this.$api}/user/getUserInfo`
        this.$http.get(url).then(res => {
          if (res.data.success) {
            let _data = res.data.data
            if (_data) {
              this.savaFlag = false
              this.name = _data.name
              this.phone = _data.phone
              this.email = _data.email
              this.idNumber = _data.idNumber
              this.cardName = _data.cardName
              this.cardNumber = _data.cardNumber
              this.bankName = _data.bankName
              this.name = _data.name
              for (let i in this.cardType) {
                console.log(this.cardType[i].type)
                if (this.cardType[i].type === _data.idType) {
                  this.curCardType = this.cardType[i]
                }
              }
            } else {
              this.savaFlag = true
            }
          }
        })
      },
      showError () {
        if (this.name === '') {
          this.error1 = this.$t('myInformation.text21')
        } else {
          this.error1 = ''
        }
        if (this.phone === '') {
          this.error2 = this.$t('myInformation.text22')
        } else {
          this.error2 = ''
        }
        if (this.email === '') {
          this.error3 = this.$t('myInformation.text23')
        } else {
          if (/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.email)) {
            this.error3 = ''
          } else {
            this.error3 = this.$t('myInformation.text41')
          }
        }
        if (this.idNumber === '') {
          this.error4 = this.$t('myInformation.text24')
        } else {
          this.error4 = ''
        }
        if (this.cardName === '') {
          this.error5 = this.$t('myInformation.text25')
        } else {
          this.error5 = ''
        }
        if (this.cardNumber === '') {
          this.error6 = this.$t('myInformation.text26')
        } else {
          this.error6 = ''
        }
        if (this.bankName === '') {
          this.error7 = this.$t('myInformation.text27')
        } else {
          this.error7 = ''
        }
      },
      validata () {
        if (this.name === '') {
          return false
        }
        if (this.phone === '') {
          return false
        }
        if (this.email === '') {
          return false
        } else {
          if (!/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(this.email)) {
            return false
          }
        }

        if (this.curCardType.type === '') {
          return false
        }
        if (this.idNumber === '') {
          return false
        }
        if (this.cardName === '') {
          return false
        }
        if (this.cardNumber === '') {
          return false
        }
        if (this.bankName === '') {
          return false
        }
        return true
      },
      sureSave () {
        this.showError()
        if (this.validata()) {
          Dialog({
            title: this.$t('myInformation.text38'),
            content: this.$t('myInformation.text39'),
            okFn: () => {
              this.saveUserInfo()
            }
          })
        }
      },
      // 1.1.6 保存/修改用户信息 /user/saveUserInfo
      saveUserInfo () {
        let data = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          idType: this.curCardType.type,
          idNumber: this.idNumber,
          cardName: this.cardName,
          cardNumber: this.cardNumber,
          bankName: this.bankName
        }
        let url = `${this.$api}/user/saveUserInfo?${this.concatObj(data)}`
        this.$http.post(url).then(res => {
          if (res.data.success) {
            this.savaFlag = false
            Dialog({
              content: this.$t('myInformation.text29'),
              okFn: () => {
                if (this.flag === 1) {
                  this.$router.go(-1)
                } else {
                  this.getUserInfo()
                }
              }
            })
          }
        })
      },
      // 对象转字符串
      concatObj (data) {
        let str = ''
        let arr = Object.keys(data)
        arr.forEach((key, index) => {
          if (index < arr.length - 1) {
            str += `${key}=${data[key]}&`
          } else {
            str += `${key}=${data[key]}`
          }
        })
        return str
      },
      // 选择卡类型
      selectCardType (item) {
        this.curCardType = item
      },
      changeTime (time) {
        return this.$changeDate(time, '/', 1)
      },
      parentTurnPage(page) {
        this.nowPage = page
        this.getPerformanceLog(page)
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .right-content{
    .rightCont{
      width: 100%;
      background-color: #fff;
      padding-bottom: 80px;
      .info{
        padding-top: 40px;
        h5{
          font-size: 16px;
          font-weight:bold;
          color: #1a1a1a;
          margin-left: 40px;
        }
        .inputBox{
          margin-left: 80px;
          margin-top: 40px;
          .input-box{
            height: 40px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 480px;
            .cont{
              height: 40px;
              position: relative;
              .error{
                position: absolute;
                top: 40px;
                font-size: 14px;
                color: #e60000;
              }
              input{
                width: 360px;
                height: 40px;
                border: 1px solid #dfdfdf;
                padding-left: 20px;
                color: #1a1a1a;
                font-size: 16px;
                &::-webkit-input-placeholder{
                  color: #dfdfdf;
                }
                &:-moz-placeholder{
                  color: #dfdfdf;
                }
                &::-moz-placeholder{
                  color: #dfdfdf;
                }
                &:-ms-input-placeholder{
                  color: #dfdfdf;
                }
                &:disabled{
                  background-color: transparent;
                  cursor: not-allowed;
                }
              }
              &>.btn{
                width: 360px;
                height: 40px;
                background-color: #e60000;
                line-height: 40px;
                text-align: center;
                color: #fff;
                margin-top:50px;
                cursor: pointer;
              }
              .cardType{
                position: relative;
                width: 360px;
                height: 40px;
                border: 1px solid #dfdfdf;
                padding-left: 20px;
                &.disable{
                  cursor: not-allowed;
                }
                p{
                  color: #dfdfdf;
                  font-size: 16px;
                  line-height: 40px;
                  position: relative;
                  &.selected{
                    color: #1a1a1a;
                  }
                  i{
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background-color: transparent;
                    border-right: 2px solid #1a1a1a;
                    border-bottom: 2px solid #1a1a1a;
                    transform: translate(0, -50%) rotate(-45deg);
                    transition: all 0.5s;
                    right: 20px;
                    top:50%;
                    &.close{
                      transform: translate(0, -50%) rotate(45deg);
                    }
                  }
                }
                ul{
                  position: absolute;
                  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.15);
                  top:40px;
                  left: 0px;
                  background-color: #fff;
                  height: 0;
                  overflow: hidden;
                  transition: all 0.5s;
                  z-index: 9;
                  &.close{
                    height: 200px;
                  ;
                  }
                  li{
                    height: 40px;
                    width: 360px;
                    line-height: 40px;
                    border-bottom: 1px solid #dfdfdf;
                    text-align: center;
                    cursor: pointer;
                    color: #1a1a1a;
                    &.selected{
                      color: #e60000;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .de-c{
    padding: 0 15px;
    .info{
      padding-top: 40px;
      h5{
        font-size: 20px;
        font-weight:bold;
        color: #1a1a1a;
        margin-bottom: 20px;
      }
      .inputBox{
        .input-box{
          margin-bottom: 20px;
          width: 100%;
          .cont{
            height: 40px;
            position: relative;
            margin-top: 10px;
            .error{
              position: absolute;
              top: 40px;
              font-size: 14px;
              color: #e60000;
            }
            input{
              width:100%;
              height: 40px;
              border: 1px solid #dfdfdf;
              padding-left: 20px;
              color: #1a1a1a;
              font-size: 16px;
              &::-webkit-input-placeholder{
                color: #dfdfdf;
              }
              &:-moz-placeholder{
                color: #dfdfdf;
              }
              &::-moz-placeholder{
                color: #dfdfdf;
              }
              &:-ms-input-placeholder{
                color: #dfdfdf;
              }
              &:disabled{
                background-color: transparent;
                cursor: not-allowed;
              }

            }
            .cardType{
              position: relative;
              width: 100%;
              height: 40px;
              border: 1px solid #dfdfdf;
              padding-left: 20px;
              p{
                color: #dfdfdf;
                font-size: 16px;
                line-height: 40px;
                position: relative;
                &.selected{
                  color: #1a1a1a;
                }
                i{
                  position: absolute;
                  width: 10px;
                  height: 10px;
                  background-color: transparent;
                  border-right: 2px solid #1a1a1a;
                  border-bottom: 2px solid #1a1a1a;
                  transform: translate(0, -50%) rotate(-45deg);
                  transition: all 0.5s;
                  right: 20px;
                  top:50%;
                  &.close{
                    transform: translate(0, -50%) rotate(45deg);
                  }
                }
              }
              ul{
                position: absolute;
                box-shadow: 1px 1px 30px 1px rgba(0,0,0,0.4);
                top:40px;
                left: 0px;
                background-color: #fff;
                height: 0;
                overflow: hidden;
                transition: all 0.5s;
                z-index: 9;
                width: 100%;
                &.close{
                  height: 200px;
                ;
                }
                li{
                  height: 40px;
                  width: 100%;
                  line-height: 40px;
                  border-bottom: 1px solid #dfdfdf;
                  text-align: center;
                  cursor: pointer;
                  color: #1a1a1a;
                  &.selected{
                    color: #e60000;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  .ord-w
    position: relative
    min-height calc(100vh - 80px)
  .achievement
    .achievement-web
      background-image url("../../../assets/images/common/bg_500_500.svg")
      background-repeat:repeat;
      background-color #f8f9fa
      width: 100%;
      min-height 100vh
      height: auto;
      background-size: 500px 500px;
      background-position: 50% 50%;
      display block
      @media screen and (max-width: 1024px)
        display none
      .wrap-web
        /*width 1280px*/
        margin 0 auto
        padding-top 80px
        display flex
        flex-direction row
        /*padding-bottom 200px*/
        @media screen and (max-width: 1300px){
          width 100%
          display flex
          flex-direction row
          white-space:nowrap
        }
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          height 800px
          background-color #f2f2f2
          @media screen and (max-width: 1024px){
            background-color #f2f2f2
          }
          @media screen and (max-width: 1300px){
          // height auto
            margin-bottom 0
          }
          /*.common-icon*/
          /*display inline-block*/
          /*width 30px*/
          /*height 30px*/
          /*margin-right 20px*/
          /*vertical-align middle*/
          .common-title
            vertical-align top
            font-size 20px
            color #1a1a1a
            height  50px
            font-weight bold
            @media screen and (max-width: 1024px){
              font-size 16px
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
              .choose
                color #e60000 !important
              .turn-next
                display block
            .choose
              font-size 16px
              color #232044
              height 50px
              width 100%
              line-height 50px
              @media screen and (max-width: 1024px)
                font-size 12px
              &:hover
                color #e60000
            .isNow
              margin-bottom 30px
            a
              font-size 16px
              color #1a1a1a
              @media screen and (max-width: 1024px){
                font-size 12px
              }
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
          .bogeFund
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
            .bogeFund-record
              display flex
              justify-content space-between
              a
                color #e60000
              .turn-next
                display block
          .profit
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
            .revenue-record
              display flex
              justify-content space-between
              &:hover
                a
                  color #e60000
            .accumulativeper
              display flex
              justify-content space-between
        /*@media screen and (max-width: 1300px){*/
        /*display flex*/
        /*flex-direction row*/
        /*height auto*/
        /*}*/
        /*右边样式*/
        .right-content
          width 100%
          margin-top 50px
          @media screen and (max-width: 1300px){
            display flex
            flex-direction column
          }
  /*opacity .7*/
  /*手机端样式*/
  .achievement-mobile
    position: absolute
    width: 100%
    top: 0
    height auto
    background-color #f8f9fa
    display none
    @media screen and (max-width: 1024px) {
      display block
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
      background-color #fff
      z-index 999
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
        font-weight bold
        color #1a1a1a
      .right-btn
        position absolute
        top 0px
        right 18px
        font-size 14px
  .de-c
    position: fixed
    width 100%
    top: 60px
    bottom: 0
    overflow: auto
    background-color: #f8f9fa;
  .pagesList
    display flex
    flex-direction row-reverse
    /*margin-right 200px*/
    padding-bottom 200px
    @media screen and (max-width: 1700px) {
      margin-right 50px!important
    }
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
</style>
