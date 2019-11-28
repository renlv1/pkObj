<template>
  <div class="boGe">
    <div class="boGe-web">
      <v-header></v-header>
      <div class="wrap">
        <div class="topBox">
          <div class="title">{{$t('boGe.text1')}}</div>
          <div class="content">
            <div class="contLeft">
              <div class="contTop">
                <h4><span>{{$t('boGe.text2')}}：</span><i class="more" @click="$router.push('/account/bogeFund')" v-if="loginFlag">{{$t('boGe.text27')}}>></i></h4>
                <p v-if="loginFlag"><span>{{balanceNum | formattingMoney}}</span> <i>SIE</i></p>
              </div>
              <div class="contBtm">
                <h5><span>{{$t('boGe.text001')}}</span> <span>{{$t('boGe.text3')}}</span> <span>{{$t('boGe.text4')}}</span> <span>{{$t('boGe.text5')}}</span></h5>
                <p><span>{{$t('boGe.text002')}}</span><span>2018/11/11-18/12/11</span> <span>2 {{$t('boGe.text29')}}</span> <span>2021/01/01</span></p>
                <p><span>{{$t('boGe.text003')}}</span><span>{{$changeDate(fundDetial.startdDate,'/', 5)}}-{{$changeDate(fundDetial.endDate, '/', 7)}}</span> <span>{{fundDetial.period}} {{$t('boGe.text29')}}</span> <span>{{$changeDate(fundDetial.unlockDate, '/', 5)}}</span></p>
              </div>
            </div>
            <div class="contRight">
              <h4>{{$t('boGe.text6')}}</h4>
              <div class="amount"><input type="text" :placeholder="$t('boGe.text7')" v-model.trim="amount" @input="checkAmount()"><i>SIE</i></div>
              <div class="error" v-if="errMsg">{{errMsg}}</div>
              <p class="curAmount">{{$t('boGe.text8')}}：<span>{{SIE.balance}}</span> SIE</p>
              <p>{{$t('boGe.text9')}}：<span>{{amount | formattingMoney}}</span> SIE</p>
              <div class="btn" v-if="loginFlag" @click="clickForward()" :class="{'disable': !amount ||  !agreement || fundDetial.serverDate < fundDetial.startdDate || fundDetial.serverDate > fundDetial.endDate}">{{$t('boGe.text10')}}</div>
              <div class="btn" v-if="!loginFlag" @click="$router.push('/login')"> {{$t('boGe.text28')}}</div>
              <div class="agreement" v-show="loginFlag"><i :class="{'not': agreement}" @click="agreement = !agreement"></i><span>{{$t('boGe.text11')}}<em style="color: #4286ec; cursor: pointer" @click="agreementBoxFlag = true">《{{$t('boGe.text12')}}》</em></span></div>
            </div>
          </div>
        </div>
        <div class="btmBox">
          <ul>
            <li v-for="(item, index) in $t('boGe.tab')" :key="index" :class="{'active': curTab === index}" @click="curTab = index">
              {{item.text}}
            </li>
          </ul>
          <div class="content">
            <div class="content-box" v-for="(item, index) in $t('boGe.aaa')" :key="index" v-if="curTab === index">
              <div class="box" v-for="(item1, index1) in item.text" :key="index1">
                <p><span v-if="index ===1 && index1 ===1"></span>{{item1.msg}}</p>
              </div>
            </div>
            <div class="content-box"   v-if="curTab === 2">
              <div class="compact-head" v-if="loginFlag">
                <div class="info">
                  <h5 v-if="!userInfoFlag">{{$t('myInformation.text2')}}</h5>
                  <h5 v-if="userInfoFlag"><span>{{$t('myInformation.text42')}}</span> <i @click="toEdit">{{$t('boGe.text32')}}</i></h5>
                  <ul>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text3')}}</span><i v-if="userInfoFlag">{{userInfoData.name}}</i>
                      <div class="inputBox" v-if="!userInfoFlag">
                        <input type="text" :placeholder="$t('myInformation.text4')" v-model="name">
                        <div class="error" v-if="error1">
                          {{error1}}
                        </div>
                      </div>
                    </li>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text5')}}</span><i v-if="userInfoFlag">{{userInfoData.phone}}</i>
                      <div class="inputBox" v-if="!userInfoFlag">
                        <input type="text" :placeholder="$t('myInformation.text6')" v-model="phone">
                        <div class="error" v-if="error2">
                          {{error2}}
                        </div>
                      </div>
                    </li>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text7')}}</span><i v-if="userInfoFlag">{{userInfoData.email}}</i>
                      <div class="inputBox" v-if="!userInfoFlag">
                        <input type="text" :placeholder="$t('myInformation.text8')" v-model="email">
                        <div class="error" v-if="error3">
                          {{error3}}
                        </div>
                      </div>
                    </li>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text9')}}</span><i v-if="userInfoFlag">{{parseCardType(userInfoData.idType)}}</i>
                      <div class="inputBox cardType" v-if="!userInfoFlag" @click.stop="toggleSelectBox()">
                        <p :class="{'selected': curCardType.type !== ''}">{{curCardType.text}} <i :class="{'close': closeFlag}"></i></p>
                        <ul :class="{'close': closeFlag}">
                          <li v-for="(item, index) in cardType" :key="index" @click="selectCardType(item)" :class="{'selected': curCardType.type === item.type}">{{item.text}}</li>
                        </ul>
                      </div>
                    </li>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text10')}}</span><i v-if="userInfoFlag">{{userInfoData.idNumber}}</i>
                      <div class="inputBox" v-if="!userInfoFlag">
                        <input type="text" :placeholder="$t('myInformation.text11')" v-model="idNumber">
                        <div class="error" v-if="error4">
                          {{error4}}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="info">
                  <h5>{{$t('myInformation.text12')}}</h5>
                  <ul>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text13')}}</span><i v-if="userInfoFlag">{{userInfoData.cardName}}</i>
                      <div class="inputBox" v-if="!userInfoFlag">
                        <input type="text" :placeholder="$t('myInformation.text14')" v-model="cardName">
                        <div class="error" v-if="error5">
                          {{error5}}
                        </div>
                      </div>
                    </li>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text15')}}</span><i v-if="userInfoFlag">{{userInfoData.cardNumber}}</i>
                      <div class="inputBox" v-if="!userInfoFlag">
                        <input type="text" :placeholder="$t('myInformation.text16')" v-model="cardNumber">
                        <div class="error" v-if="error6">
                          {{error6}}
                        </div>
                      </div>
                    </li>
                    <li :class="{'notLog': userInfoFlag}">
                      <span>{{$t('myInformation.text17')}}</span><i v-if="userInfoFlag">{{userInfoData.bankName}}</i>
                      <div class="inputBox" v-if="!userInfoFlag">
                        <input type="text" :placeholder="$t('myInformation.text18')" v-model="bankName">
                        <div class="error" v-if="error7">
                         {{error7}}
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="btn-box" @click="sureSave" v-if="!userInfoFlag">
                    <div class="btn">
                      <em>{{$t('myInformation.text19')}}</em>
                      <span v-if="error8">{{error8}}</span>
                      <i>* {{$t('myInformation.text40')}}</i>
                    </div>
                  </div>
                </div>
              </div>
              <div v-html="template" style="padding: 10px;color: #1a1a1a;">
              </div>
            </div>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
    <div class="boGe-app">
      <div class="head">
        <div class="back" @click="$router.push('/home')"></div>
        <div class="title">{{$t('boGe.text18')}}</div>
      </div>
      <div class="content wrap">
        <div class="curAmount">
          <div class="title">
            {{$t('boGe.text1')}}
          </div>
          <div class="info">
            <h5>{{$t('boGe.text2')}}:</h5>
            <p v-if="loginFlag"><span>{{balanceNum | formattingMoney}}</span> <i>SIE</i></p>
            <em v-if="loginFlag"  @click="$router.push('/account/bogeFund')">{{$t('boGe.text27')}}>></em>
            <div class="notLogin" v-if="!loginFlag" @click="$router.push('/login')">{{$t('boGe.text28')}}</div>
          </div>
        </div>
        <div class="rule">
          <div class="title">{{$t('boGe.text30')}}</div>
          <ul class="ul-c ul-c-t">
            <li>{{$t('boGe.text002')}}</li>
            <li>
              <span>{{$t('boGe.text3')}}</span> <span>2018/11/11-18/12/11</span>
            </li>
            <li>
              <span>{{$t('boGe.text4')}}</span><span>2 {{$t('boGe.text29')}}</span>
            </li>
            <li>
              <span>{{$t('boGe.text5')}}</span><span>2021/01/01</span>
            </li>
          </ul>
          <ul class="ul-c ">
            <li>{{$t('boGe.text003')}}</li>
            <li>
              <span>{{$t('boGe.text3')}}</span> <span>{{$changeDate(fundDetial.startdDate,'/', 5)}}-{{$changeDate(fundDetial.endDate, '/', 7)}}</span>
            </li>
            <li>
              <span>{{$t('boGe.text4')}}</span><span>{{fundDetial.period}} {{$t('boGe.text29')}}</span>
            </li>
            <li>
              <span>{{$t('boGe.text5')}}</span><span>{{$changeDate(fundDetial.unlockDate, '/', 5)}}</span>
            </li>
          </ul>
        </div>
        <div class="about">
          <ul>
            <li>
              <div class="title" @click="close1 = !close1">
                <h5>{{$t('boGe.tab[0].text')}}</h5>
                <i :class="{'close': close1}"></i>
              </div>
              <div class="box" :class="{'close': close1}">
                <p>{{$t('boGe.aaa[0].text[0].msg')}}</p>
                <p>{{$t('boGe.aaa[0].text[1].msg')}}</p>
              </div>
            </li>
            <li>
              <div class="title" @click="close2 = !close2">
                <h5>{{$t('boGe.tab[1].text')}}</h5>
                <i :class="{'close': close2}"></i>
              </div>
              <div class="box" :class="{'close': close2}">
                <p>{{$t('boGe.aaa[1].text[0].msg')}}</p>
                <p>{{$t('boGe.text15')}} {{change(fundDetial.startdDate)}}-{{change(fundDetial.endDate)}} {{$t('boGe.aaa[1].text[1].msg')}}</p>
              </div>
            </li>
            <li>
              <div class="title" @click="close3 = !close3">
                <h5 >{{$t('boGe.tab[2].text')}}</h5>
                <i :class="{'close': close3}"></i>
              </div>
              <div v-html="template" style="padding: 10px;">
              </div>
            </li>
            <li v-if="loginFlag">
              <div class="title" @click="close4 = !close4">
                <h5>{{$t('myInformation.text1')}}</h5>
                <i :class="{'close': close4}"></i>
              </div>
              <div class="box" :class="{'close': close4}">
                 <div v-if="userInfoFlag" class="de-b">
                   <div class="info">
                     <h5>{{$t('myInformation.text42')}} <i @click="toEdit()">{{$t('boGe.text32')}}</i></h5>
                     <ul>
                       <li>
                         <span>{{$t('myInformation.text3')}}</span><span>{{userInfoData.name}}</span>
                       </li>
                       <li>
                         <span>{{$t('myInformation.text5')}}</span><span>{{userInfoData.phone}}</span>
                       </li>
                       <li>
                         <span>{{$t('myInformation.text7')}}</span><span>{{userInfoData.email}}</span>
                       </li>
                       <li>
                         <span>{{$t('myInformation.text9')}}</span><span>{{parseCardType(userInfoData.idType)}}</span>
                       </li>
                       <li>
                         <span>{{$t('myInformation.text10')}}</span><span>{{userInfoData.idNumber}}</span>
                       </li>
                     </ul>
                   </div>
                   <div class="info">
                     <h5>{{$t('myInformation.text12')}}</h5>
                     <ul>
                       <li>
                         <span>{{$t('myInformation.text13')}}</span><span>{{userInfoData.cardName}}</span>
                       </li>
                       <li>
                         <span>{{$t('myInformation.text17')}}</span><span>{{userInfoData.bankName}}</span>
                       </li>
                       <li>
                         <span>{{$t('myInformation.text15')}}</span><span>{{userInfoData.cardNumber}}</span>
                       </li>
                     </ul>
                   </div>
                 </div>
                  <div  v-if="!userInfoFlag" class="de-c">
                    <div class="info">
                      <h5>{{$t('myInformation.text2')}}</h5>
                      <h6 style="color: #e60000;margin-bottom: 20px;font-size: 12px">* {{$t('myInformation.text40')}}</h6>
                      <div class="inputBox">
                        <div class="input-box">
                          <label>{{$t('myInformation.text3')}}</label>
                          <div class="cont">
                            <input type="text"  :placeholder="$t('myInformation.text4')" v-model="name">
                            <div class="error" v-if="error1">{{error1}}</div>
                          </div>

                        </div>
                        <div class="input-box">
                          <label>{{$t('myInformation.text5')}}</label>
                          <div class="cont">
                            <input type="text"  :placeholder="$t('myInformation.text6')" v-model="phone">
                            <div class="error" v-if="error2">{{error2}}</div>
                          </div>

                        </div>
                        <div class="input-box">
                          <label>{{$t('myInformation.text7')}}</label>
                          <div class="cont">
                            <input type="text" :placeholder="$t('myInformation.text8')" v-model="email">
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
                            <input type="text"  :placeholder="$t('myInformation.text11')" v-model="idNumber">
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
                            <input type="text" :placeholder="$t('myInformation.text14')" v-model="cardName">
                            <div class="error" v-if="error5">{{error5}}</div>
                          </div>
                        </div>
                        <div class="input-box">
                          <label>{{$t('myInformation.text15')}}</label>
                          <div class="cont">
                            <input type="text" :placeholder="$t('myInformation.text16')" v-model="cardNumber">
                            <div class="error" v-if="error6">{{error6}}</div>
                          </div>
                        </div>
                        <div class="input-box">
                          <label>{{$t('myInformation.text17')}}</label>
                          <div class="cont">
                            <input type="text" :placeholder="$t('myInformation.text18')" v-model="bankName">
                            <div class="error" v-if="error7">{{error7}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="btn" @click="sureSave">
                      {{$t('myInformation.text19')}}
                    </div>
                  </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn" @click="$router.push('/shiftTo')" v-if="loginFlag">{{$t('boGe.text19')}}</div>
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
    <div class="agreementBox" v-if="agreementBoxFlag" @click="agreementBoxFlag = false">
      <div class="content">
        <h3>{{$t('agreement.text1')}}</h3>
        <h4>{{$t('agreement.text2')}}</h4>
        <h4>{{$t('agreement.text3')}}</h4>
        <h4>{{$t('agreement.text4')}}</h4>
        <div class="cont" v-for="(item, index) in $t('agreements')" :key="index">
          <h6>{{item.title}}</h6>
          <p v-for="(item2, index2) in item.text" :key="index2">{{item2.msg}}</p>
        </div>
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
        errMsg: '',
        tradePwd: '', // 交易密码
        verifyCode: '', // google验证码
        isDialog: false,
        isCover: false,
        balanceNum: '',
        amount: '',
        fundDetial: '',
        agreement: false,
        agreementBoxFlag: false,
        errText: '',
        compact: '',
        compactUrl: [
          {
            url: './static/js/cn.html'
          },
          {
            url: './static/js/en3.html'
          }
        ],
        close1: false,
        close2: false,
        close3: false,
        close4: false,
        curTab: 0,
        userInfoFlag: false,
        userInfoData: '',
        template: '',
        // 证件类型
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
        error1: '',
        error2: '',
        error3: '',
        error4: '',
        error5: '',
        error6: '',
        error7: '',
        error8: '',
        closeFlag: '',
        name: '',
        phone: '',
        email: '',
        idType: '',
        idNumber: '',
        cardName: '',
        cardNumber: '',
        bankName: ''
      }
    },
    mounted () {
      this.fundAmount()
      this.getUserInfo()
      this.getTemplate()
      this.getFundDetail()
      this.getUserBalance()
    },
    methods: {
      ...mapActions([
        'getUserBalance'
      ]),
      sureSave () {
        this.showError2()
        if (this.validata()) {
          this.saveUserInfo()
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
              okText: this.$t('dialog.text8'),
              okFn: () => {
                this.fundAmount()
                this.getUserInfo()
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
      showError2 () {
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
          if (/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/.test(this.email)) {
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
          if (!/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-zA-Z0-9]+[-a-zA-Z0-9]*[a-zA-Z0-9]+.){1,63}[a-zA-Z0-9]+$/.test(this.email)) {
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
      // 证件类型选择开关
      toggleSelectBox () {
          this.closeFlag = !this.closeFlag
      },
      // 选择卡类型
      selectCardType (item) {
        this.curCardType = item
      },
      // 1.1.5 我的信息 user/getUserInfo
      getUserInfo () {
        let url = `${this.$api}/user/getUserInfo`
        this.$http.get(url).then(res => {
          if (res.data.success) {
            this.userInfoData = res.data.data
            this.name = res.data.data.name
            this.phone = res.data.data.phone
            this.email = res.data.data.email
            this.idNumber = res.data.data.idNumber
            this.cardName = res.data.data.cardName
            this.cardNumber = res.data.data.cardNumber
            this.bankName = res.data.data.bankName
            for (let i in this.cardType) {
              if (res.data.data.idType === this.cardType[i].type) {
                this.curCardType = this.cardType[i]
              }
            }
          }
        })
      },
      parseCardType (type) {
        for (let i in this.cardType) {
          if (type === this.cardType[i].type) {
            return this.cardType[i].text
          }
        }
      },
      getTemplate () {
        let Qlang = window.localStorage.getItem('Qlang')
        if (Qlang === 'CN') {
          this.compact = this.compactUrl[0].url
        } else {
          this.compact = this.compactUrl[1].url
        }
        this.$http.get(this.compact).then((res) => {
          this.template = res.data
        }).catch(err => {
          console.log(err)
        })
      },
      toEdit () {
        this.userInfoFlag = false
      },
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
      checkAmount () {
        if (!/^\d+(\.\d{0,4})?$/.test(this.amount)) {
          this.amount = this.amount.substring(0, this.amount.length - 1)
        }
        if (this.amount > this.SIE.balance) {
          this.amount = this.SIE.balance
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
                  this.curTab = 2
                }
              })
              } else {
                this.isDialog = true
              }
            }
          }
        })
      },
      // 8.1.1 基金购买 fund/buyFund
      buyFund () {
        if (this.user.openGoogleCode === 2 && this.user.openTradePassword === 2) {
          let url = `${this.$api}/fund/buyFund?amount=${this.amount}&tradePwd=${this.tradePwd}&verifyCode=${this.verifyCode}`
          this.$http.get(url).then(res => {
            if (res.data.success) {
              this.isDialog = false
              this.fundAmount()
              this.getFundDetail()
              this.tradePwd = ''
              this.verifyCode = ''
              this.amount = ''
            } else {
              this.errText = res.data.msg
            }
          })
        }
      },
      // 8.1.3 基金金额查询 fund/amount
      fundAmount () {
        let url = `${this.$api}/fund/amount`
        this.$http.get(url).then(res => {
          if (res.data.success) {
            this.balanceNum = res.data.data.total
            this.userInfoFlag = res.data.data.userInfo
//          if (this.userInfoFlag === 0) {
//            Dialog({
//              title: this.$t('myInformation.text30'),
//              content: this.$t('myInformation.text31'),
//              okText: this.$t('myInformation.text32'),
//              okFn: () => {
//                this.$router.push({
//                  path: '/myInformation',
//                  query: {
//                    flag: 1
//                  }
//                })
//              }
//            })
//          }
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
    components: {
      vHeader: resolve => require(['@/components/header'], resolve),
      vFooter: resolve => require(['@/components/footer'], resolve)
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
  .boGe{
    margin-top: 80px;
    @media screen and (max-width: 1024px) {
      margin-top: 0;
    }
    .boGe-web{
      height: calc(100vh - 80px);
      display: block;
      @media screen and (max-width: 1024px) {
        display: none;
      }
    }
    .boGe-app{
      display: none;
      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
  }
  .boGe-web{
    background-image: url("../../assets/images/arbitrage/bg.svg");
    background-repeat: repeat;
    background-size: 500px 500px;
    width: 100%;
    height: 100vh;
    padding-top: 60px;
    .topBox{
      background-color: #fff;
      width: 100%;
      box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.1);
      .title{
        color: #1a1a1a;
        font-size: 20px;
        font-weight:bold;
        height: 60px;
        line-height: 60px;
        padding-left: 30px;
        border-bottom: 1px solid #e6e6e6;
      }
      .content{
        margin-top: 30px;
        padding-bottom: 30px;
        display: flex;
        height: 320px;
        justify-content: space-between;
        .contLeft{
          flex: 1;
          border-right: 1px solid #e6e6e6;
          .contTop{
            margin-left: 50px;
            margin-bottom: 30px;
            h4{
              display: flex;
              justify-content: space-between;
              margin: 10px 0 20px;
              span{
                display: block;
                font-size: 16px;
                color: #232044;
              }
              i{
                display: block;
                font-size: 14px;
                color: #3653f5;
                margin-right: 60px;
                cursor: pointer;
              }
            }
            p{
              span{
                display: inline-block;
                font-size: 28px;
                color: #232044;
                font-weight:bold;
              }
              i{
                display: inline-block;
                font-size: 28px;
                color: #e60000;
                font-weight:bold;
              }
            }
          }
          .contBtm{
            margin-left: 50px;
            padding-top: 40px;
            h5{
              margin-bottom: 20px;
              display: flex;
              span{
                flex: 1;
                display: block;
                text-align: left;
                color: #232044;
                font-size: 16px;
              }
            }
            p{
              margin-bottom: 20px;
              display: flex;
              align-items: center;
              justify-content:space-between;
              span{
                flex: 1;
                display: block;
                text-align: left;
                color: #232044;
                font-size: 16px;
              }
            }
          }
        }
        .contRight{
          flex: 1;
          padding: 10px 0 30px 60px;
          h4{
            font-size: 16px;
            color: #232044;
            margin-bottom: 20px;
          }
          .amount{
            height: 50px;
            width: 380px;
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
            width: 380px;
            height: 50px;
            border: 1px solid #e60000;
            text-align: center;
            line-height: 50px;
            margin-top: 10px;
            color: #e60000;
            cursor: pointer;
            user-select: none;
            &:active{
              opacity: 0.4;
            }
            &.disable{
              cursor: not-allowed;
              color: #808080;
              border: 1px solid #abaab1;
              &:active{
                opacity: 1;
              }
            }
          }
          .agreement{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin-top: 10px;
            i{
              width: 20px;
              height: 20px;
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
    }
    .btmBox{
      margin-top: 50px;
      background-color: #fff;
      box-shadow: 0px 0px 30px 5px rgba(0,0,0,0.1);
      &>ul{
        display: flex;
        align-items: center;
        height: 60px;
        padding-left: 30px;
        border-bottom: 1px solid #e6e6e6;
        li{
          color: #b3b3b3;
          font-size: 18px;
          height: 60px;
          line-height: 60px;
          margin-right: 100px;
          cursor: pointer;
          &.active{
            color: #1a1a1a;
            border-bottom: 1px solid #1a1a1a;
          }
        }
      }
      .content{
        min-height: 400px;
        margin-bottom: 60px;
        padding: 30px 30px 170px 30px;
        position: relative;
        a{
          display: block;
          position: absolute;
          bottom: 50px;
          right: 48px;
          color: #4286ec;
          font-size: 18px;
        }
        .box{
          h6{
            font-size: 18px;
            color: #1a1a1a;
            margin-bottom: 20px;
            font-weight: bold;
          }
          p{
            color: #1a1a1a;
            font-size: 16px;
            line-height: 2;
            margin-bottom: 15px;
          }
        }
      }
    }
  }
  .boGe-app{
    background-color: #F8F9FA;
    padding-top: 80px;
    padding-bottom: 80px;
    &>.btn{
      height: 60px;
      position: fixed;
      bottom: 0px;
      width: 100%;
      line-height: 60px;
      text-align: center;
      color: #fff;
      font-weight: bold;
      background-color: #e60000;
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
      z-index: 999;
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
      .right-btn{
        position: absolute;
        top: 0px;
        right: 18px;
        font-size: 14px;
      }
    }
    .content{
      .curAmount{
        background-color: #fff;
        .title{
          color: #1a1a1a;
          font-size: 16px;
          margin-left: 15px;
          height: 45px;
          line-height: 45px;
          font-weight: bold;
        }
        .info{
          padding: 25px 0;
          text-align: center;
          .notLogin{
            color: #e60000;
            font-size:16px;
            margin-top: 30px;
          }
          h5{
            font-size:16px;
            color: #232044;
          }
          p{
            margin: 20px 0;
            font-weight: bold;
            span{
              font-size:24px;
              color: #232044;
            }
            i{
              font-size:24px;
              color: #e60000;
            }
          }
          em{
            font-size: 14px;
            color: #3653f5;
            cursor: pointer;
            display: block;
          }
        }
      }
      .rule{
        background-color: #fff;
        margin-top: 20px;
        .title{
          color: #1a1a1a;
          font-size: 16px;
          margin-left: 15px;
          height: 45px;
          line-height: 45px;
          font-weight: bold;
        }
        ul{
          padding: 15px;
          li{
            height: 30px;
            line-height: 30px;
            font-size:16px;
            color: #1a1a1a;
            display: flex;
            justify-content: space-between;
            &:nth-last-child(1) {
              border-bottom: none;
            }
          }
        }
        .ul-c-t{
          border-top: 1px solid #f0f0f0;
          border-bottom: 1px solid #f0f0f0;
        }
      }
      .about{
        background-color: #fff;
        margin-top: 20px;
        ul{
          li{
            .title{
              display: flex;
              justify-content: space-between;
              align-items: center;
              h5{
                color: #1a1a1a;
                font-size: 16px;
                margin-left: 15px;
                height: 45px;
                line-height: 45px;
                font-weight: bold;
              }
              i{
                display: block;
                margin-right: 30px;
                width: 10px;
                height: 10px;
                border-right:2px solid #1a1a1a;
                border-bottom: 2px solid #1a1a1a;
                background-color: transparent;
                transform: rotate(-45deg);
                transition: all 0.5s;
                &.close{
                  transform: rotate(45deg);
                }
              }
            }
            .box{
              position: relative;
              z-index: 0;
              display: none;
              padding-bottom: 50px;
              &.close{
                display: block;
              }
              a{
                display: block;
                position: absolute;
                bottom: 20px;
                right: 30px;
                color: #4286ec;
                font-size: 18px;
              }
              /*h6{*/
                /*color: #1a1a1a;*/
                /*font-size: 16px;*/
                /*margin-left: 15px;*/
                /*height: 45px;*/
                /*line-height: 45px;*/
                /*font-weight: bold;*/
              /*}*/
              p{
                padding: 0px 10px 20px;
                color: #1a1a1a;
                font-size: 14px;
                line-height:1.5;
              }
            }
            .de-b{
              .info{
                h5{
                  display: flex;
                  justify-content: space-between;
                  color: #1a1a1a;
                  font-size: 14px;
                  font-weight: bold;
                  margin-left: 10px;
                  line-height: 50px;
                  height: 50px;
                  i{
                    color: #e60000;
                    cursor: pointer;
                    margin-right: 10px;
                  }
                }
                ul{
                  li{
                    padding-left: 15px;
                    padding-right: 10px;
                    height: 45px;
                    line-height: 45px;
                    display: flex;
                    justify-content: space-between;
                    border-bottom: 1px solid #f0f0f0;
                    span{
                      color: #1a1a1a;
                      font-size: 14px;

                    }
                  }
                }
              }
            }
            .de-c{
              padding: 0 15px;
              .btn{
                height: 40px;
                width: 100%;
                line-height: 40px;
                margin-top: 40px;
                font-size: 16px;
                border: 1px solid #e60000;
                color: #e60000;
                text-align: center;
              }
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
          }
        }
      }
    }
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
  .compact-head{
    margin-bottom: 40px;
    .info{
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #e6e6e6;
      padding-left: 30px;
      padding-bottom: 50px;
      &:nth-child(2) {
        margin-top: 40px;
      }
      h5{
        color: #1a1a1a;
        font-size: 18px;
        font-weight:bold;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        span{

        }
        i{
          cursor: pointer;
          display: block;
          width: 100px;
          height: 32px;
          font-size:16px;
          line-height: 32px;
          text-align: center;
          background-color: #e60000;
          color: #fff;
          border-radius: 5px;
          cursor: pointer;
          &:active{
            cursor: pointer;
          }
        }
      }
      .btn-box{
        width: 45%;
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
        padding: 10px 30px 20px 0;
        .btn{
          width: 340px;
          height: 40px;
          color: #fff;
          text-align: center;
          line-height: 40px;
          position: relative;
          cursor: pointer;
          user-select: none;
          em{
            width: 100%;
            height: 100%;
            display: block;
            background-color: #e60000;
            &:active{
              opacity: 0.4;
            }
          }
          i{
            position: absolute;
            top: 42px;
            left: 3px;
            color: #e60000;
            font-size:14px;
            line-height:1.5;
            text-align: left;
          }
          span{
            position: absolute;
            top: -35px;
            left: 3px;
            color: #e60000;
            font-size:12px;
            line-height:1.5;
            text-align: left;
          }
        }
      }
      &>ul{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        &>li{
          width: 45%;
          padding:10px 30px 20px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          &:nth-child(even) {
            width: 50%;
          }
          &.notLog{
            justify-content: flex-start;
          }
          span{
            font-size: 14px;
            color: #1a1a1a;
          }
          .inputBox{
            position: relative;
            border: 1px solid #e6e6e6;
            width: 340px;
            height: 40px;
            padding-left: 20px;
            input{
              width: 100%;
              height: 100%;
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
            }
            .error{
              position: absolute;
              top: 45px;
              left: 0;
              font-size: 12px;
              color: #e60000;
            }
            &.cardType{
              position: relative;
              width: 340px;
              height: 40px;
              border: 1px solid #dfdfdf;
              padding-left: 20px;
              cursor: pointer;
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
                }
                li{
                  height: 40px;
                  width: 340px;
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

          &:nth-child(even) {
            padding-left: 60px;
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
