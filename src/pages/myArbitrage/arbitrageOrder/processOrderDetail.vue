<template>
  <div class="processOrderDetail">
    <div class="processOrderDetail-web">
      <v-header></v-header>
      <input type="text" style="display: none;">
      <div class="wrap-web">
        <!--<div class="left-content">-->
          <!--<div class="account">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-1.svg"/><span class="account-title common-title">{{$t('achievement.text1')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next" @click="$router.push({path: '/achievement'})">-->
              <!--<router-link class="choose" to="/achievement" active-class="active">{{$t('achievement.text2')}}</router-link>-->
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
            <!--<div class="go-next ongoing isNow" @click="$router.push({path: '/orderProcess', query: {order: 1}})">-->
              <!--<div class="choose processing" >{{$t('achievement.text4')}}</div>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next completed" @click="$router.push({path: '/orderProcess', query: {order: 2}})">-->
              <!--<div class="choose isCompleted" >{{$t('achievement.text5')}}</div>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="profit">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">{{$t('achievement.text13')}}</span>-->
            <!--</div>-->
            <!--<div class="go-next revenue-record" @click="$router.push({path: '/profitLog'})">-->
              <!--<router-link class="choose" to="/profitLog" active-class="active">{{$t('achievement.text6')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next accumulativeper" @click="$router.push({path: '/accumulativePerformance'})">-->
              <!--<router-link class="choose" to="/accumulativePerformance" active-class="active">{{$t('achievement.text7')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
            <!--<div class="go-next accumulativeper" @click="$router.push({path: '/fundPerformance'})">-->
              <!--<router-link class="choose" to="/fundPerformance">{{$t('achievement.text01')}}</router-link>-->
              <!--<div class="turn-next"><img src="../../../assets/images/common/row-13-8.svg"/></div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="bogeFund">-->
            <!--<div class="account-up">-->
              <!--<img v-if="false" class="common-icon" src="../../../assets/images/arbitrage/icon-3.svg"/><span class="account-title common-title">{{$t('bogeFund.text1')}}</span>-->
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
        <div class="right-content">
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
            <span class="isClick" @click="pcTipBox = false"></span>
          </div>
          <div class="right-title">
            <span>{{$t('achievement.text3')}} </span>
            <i> > </i>
            <span> {{$t('achievement.text4')}}</span>
            <i> > </i>
            <span> {{$t('achievement.text27')}}</span>
          </div>
          <div class="introduce" v-if="introduce && introduce != 19000101">{{$t('pageTurn.text14')}}:{{introduce}}</div>
          <div class="introduce" v-if="introduce && introduce == 19000101">{{$t('pageTurn.text15')}}</div>
          <div class="content-one">
            <div class="content-title">
              <div class="project-name">
                <img src="../../../assets/images/common/PK_30_20.svg">
                <div v-if="flagLag" class="project-title">{{title}}</div>
                <div v-if="!flagLag" class="project-title">{{reTitle}}</div>
                <b @click="pcTipBox = true" class="tip-btn isClick"></b>
              </div>
              <div class="order-number">
                {{$t('achievement.text28')}}{{arbitrageId}}
              </div>
            </div>
            <div class="total-amount">
              <div class="amount">
                <div class="total-name">{{$t('achievement.text30')}}</div> <div class="total-number">{{targetAmount | formattingMoney}} {{currencyUSD}}</div>
                <div class="project-time">{{$t('achievement.text29')}}
                  <div class="time" v-show="endTime">{{$changeDate(endTime, '/', 1)}}</div></div>
                <div class="bar">
                  <div class="progress">
                    <div class="all"></div>
                    <div class="already" :style="styleObject"></div>
                  </div>
                  <div class="text"><span>{{$t('achievement.text52')}}</span> <span class="percentage">{{progress}}</span></div>
                </div>
              </div>
              <div class="result">
                <div class="result-title">{{$t('achievement.text53')}}</div>
                <div class="content-dec">
                  <div class="title-dec"><span ref="betAmount">{{remainAmount| formattingMoney}}</span> <span style="font-weight: bold">{{currencyUSD}}</span> </div>
                  <!--<div class="content-tip" v-show="errText">(投注已满)</div>-->
                </div>
                <div class="input-group">
                  <!-- @blur="inputNum"-->
                  <input  v-model="inputValue" :placeholder="$t('achievement.text54')"    @input="inputText"  type="text"/>
                  <span style="font-weight: bold" class="input-usd">{{betpaycurrency}}</span>
                </div>
                <div class="common-text">{{$t('achievement.text55')}}:<span style="font-size: 16px;color:#232044;font-weight: bold">{{personAmountUsd | formattingMoney}}</span> <span style="font-weight: bold">{{betpaycurrency}}</span></div>
                <div class="common-text" >{{$t('achievement.text56')}} <span style="font-size: 16px;color:#232044;font-weight: bold" ref="hasBalance">{{userSie | formattingMoney}}</span> <span style="font-weight: bold">{{betpaycurrency}}</span></div>
                <!--<div class="common-text">{{$t('achievement.text57')}} <span class="text-blue" ref="payBalance">{{payMoney}} </span><span style="font-weight: bold;color: #e60000">{{currency}}</span></div>-->
                <div class="common-text">{{$t('achievement.text57')}} <span class="text-blue" ref="payBalance">{{inputValue === '' ? 0 : Number(inputValue) | formattingMoney}} </span><span style="font-weight: bold;color: #e60000">{{betpaycurrency}}</span></div>
                <div v-if="canBet" class="btn" @click="showPay()">{{$t('achievement.text58')}}</div>
                <div v-if="finishedBtn"  class="finished-btn">{{$t('nowOrder.text2')}}</div>
                <div v-show="promptShow" class="prompt">{{errorText}}</div>
              </div>
            </div>
          </div>
          <!--套利方案-->
          <div class="content-two">
            <div class="title">{{$t('profit.text10')}}</div>
            <div class="table-wrap">
              <div class="table-title">
                <div class="profit-result">{{$t('achievement.text59')}}</div>
                <div class="odds-result">{{$t('achievement.text60')}}</div>
                <div class="total-profit">{{$t('achievement.text61')}}</div>
              </div>
              <div class="table-content" v-for="(item,index) in arbitrageList" :key="index">
                <img :src="matchResult[index].img" class="white" style="width: 36px;height: 20px;margin-right:24px;margin-left:30px;">
                <div v-if="flagLag" class="white-title"> {{item.name}}</div>
                <div v-else-if="item.link" class="white-title"> {{item.link.split(',')[0]}}</div>
                <div v-else class="white-title"></div>
                <div style="width: 200px">{{item.odds}}</div>
                <div style="width: 340px">{{getAbs(item.profit)}} <span style="color: #ffc933">{{unit}}</span></div>
              </div>
            </div>
          </div>
          <!-- 预计获利 -->
          <!--<div class="expected-profit">-->
            <!--<div class="title">{{$t('profit.text11')}}</div>-->
            <!--<div class="content-box">-->
              <!--<div class="box-header">-->
                <!--<ul>-->
                  <!--<li>{{$t('add.text2')}}</li>-->
                  <!--<li>{{$t('add.text3')}}</li>-->
                  <!--<li>{{$t('add.text4')}}</li>-->
                  <!--<li>{{$t('add.text5')}}</li>-->
                <!--</ul>-->
              <!--</div>-->
              <!--<div class="box-content">-->
                <!--<ul>-->
                  <!--<li>{{personAmountUsd | formattingMoney}} {{unit}}</li>-->
                  <!--<li>{{pAmountRandomzhu  | formattingMoney}} {{unit}}</li>-->
                  <!--<li>{{pAmountRandomke  | formattingMoney}} {{unit}}</li>-->
                  <!--<li>{{pAmountRandomhe  | formattingMoney}} {{unit}}</li>-->
                <!--</ul>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--个人预计获利-->
          <div class="content-three">
            <div class="title">{{$t('profit.text11')}}</div>
            <div class="table-wrap">
              <div class="table-title">
                <div style="width: 160px">{{$t('arbitrageDetail.mobile.text12')}}</div>
                <div style="width: 160px">{{$t('nowOrder.text1')}}</div>
                <div >{{$t('achievement.text16')}}</div>
                <div >{{$t('achievement.text19')}}</div>
              </div>
              <div class="table-content"  v-for="(item,index) in arbitrageList" :key="index">
                <div style="width: 160px" class="company-name name">{{item.companyName}}</div>
                <div style="width: 160px" v-if="flagLag" class="white-title"> {{item.name}}</div>
                <div style="width: 160px" v-else-if="item.link" class="white-title"> {{item.link.split(',')[0]}}</div>
                <div style="width: 160px" v-else class="white-title"></div>
                <div>{{item.sumbetAmount | formattingMoney}} {{item.currency}}</div>
                <div  v-if="index === 0"> {{getAbs(pAmountRandomzhu)}}<span style="color: #ffc933">{{item.currency}}</span></div>
                <div  v-if="index === 1"> {{getAbs(pAmountRandomhe)}}<span style="color: #ffc933">{{item.currency}}</span></div>
                <div  v-if="index === 2"> {{getAbs(pAmountRandomke)}}<span style="color: #ffc933">{{item.currency}}</span></div>
              </div>
            </div>
          </div>
          <!--投注记录-->
          <div class="content-four">
            <div class="title">{{$t('achievement.text49')}}</div>
            <div class="cumulative">{{$t('add.text6')}} <span class="value">{{personAmountUsd | formattingMoney}} </span><span style="color: #e60000;">{{betpaycurrency}}</span></div>
            <div class="table-wrap">
              <div class="table-title">
                <div class="number">{{$t('achievement.text62')}}</div>
                <div class="bet-time">{{$t('achievement.text63')}}</div>
                <div class="bet-money">{{$t('achievement.text16')}}</div>
                <div class="rate">{{$t('nowOrder.text3')}} (USD/SIE)</div>
                <div class="pay-money">{{$t('arbitrageDetail.web.text6')}}</div>
              </div>
              <div class="table-content" v-show="item.status === 1" v-for="(item,index) in betList" :key="index">
                <div class="bet-number">{{item.id}}</div>
                <div class="time">{{$changeDate(item.createTime, '/', 1)}}</div>
                <div class="amount">{{item.betAmount| formattingMoney}} {{item.betCurrency}}</div>
                <div class="exchange-rate">{{item.betExchangeRate}}</div>
                <div class="payment">{{item.payAmount | formattingMoney}} {{item.payCurrency}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<v-footer></v-footer>-->
    </div>
    <!--手机结构-->
    <div class="detail-mobile">
      <div class="de-c">
        <div class="content-mobile">
          <div class="head">
            <div class="back" @click="$router.push({path:'/account/orderProcess', query: {order: 1}})"></div>
            <div class="title">{{$t('achievement.text50')}}</div>
          </div>
          <!--用户须知弹窗-->
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
          <div class="detail-mobile-content">
            <div class="announcement">
              <div class="introduce" v-if="introduce && introduce != 19000101">{{$t('pageTurn.text14')}}:{{introduce}}</div>
              <div class="introduce" v-if="introduce && introduce == 19000101">{{$t('pageTurn.text15')}}</div>
              <div class="announcement-top">
                <p v-if="flagLag" class="top-title">{{title}} <b class="tip-btn" @click.stop="appTipBox = true"></b></p>
                <p v-if="!flagLag" class="top-title">{{reTitle}} <b class="tip-btn" @click.stop="appTipBox = true"></b></p>
                <p class="top-num">{{$t('achievement.text28')}} {{arbitrageId}}</p>
              </div>
              <div class="remaining">
                <div class="betting-text">{{$t('achievement.text53')}}</div>
                <div class="betting-status">{{remainAmount | formattingMoney}} <span style="color: #e60000; font-size: 22px">{{currencyUSD}}</span></div>
              </div>
              <div class="target">
                <span class="target-text">{{$t('arbitrageDetail.mobile.text3')}}</span>
                <span class="target-value">{{targetAmount | formattingMoney}} {{currencyUSD}}</span>
              </div>
              <div class="end-time">
                <span class="time-text">{{$t('achievement.text41')}}</span>
                <span class="time-value" v-show="endTime">{{$changeDate(endTime, '/', 1)}}</span>
              </div>
            </div>
            <div class="betting" @click="betRecord">
              <div class="betting-text">{{$t('betting.mobile.text6')}}</div>
              <div class="value-wrapper">
                <span class="value">{{personAmountUsd | formattingMoney}} <span style="color: #e60000; font-size: 16px">{{betpaycurrency}}</span></span>
                <span class="icon">
                <img src="../../../assets/images/common/right-34-24.svg"/>
              </span>
              </div>
            </div>
            <div class="game">
              <div class="game-top">
                <span class="top-title">{{$t('arbitrageDetail.mobile.text16')}}</span>
                <span class="top-date">{{competitionTime}}</span>
              </div>
              <div class="game-team-group">
                <div class="mark-wrapper">
                  <div class="mark">
                    <img :src="competitionLogo"/>
                  </div>
                  <!--<div class="game-event">{{competitionName}}</div>-->
                </div>
                <div class="game-team">
                  <div class="one-team">
                    <div class="one-team-log">
                      <img  :src="hostTeamLogo"/>
                    </div>
                    <div class="one-team-name">{{hostTeamName}}</div>
                  </div>
                  <div class="vs">
                    <img src="../../../assets/images/arbitrageDetial/VS.svg"/>
                  </div>
                  <span class="two-team">
                  <div class="two-team-log">
                    <img  :src="visitingTeamLogo"/>
                  </div>
                  <div class="two-team-name">{{visitingTeamName}}</div>
                </span>
                </div>
              </div>
            </div>
            <div class="plan-text">{{$t('profit.text10')}}</div>
            <div class="plan" v-for="(item,index) in arbitrageList" :key="index">
              <!--<div class="plan-text">{{$t('achievement.text47')}}</div>-->
              <div class="plan-list">
                <ul>
                  <li>
                    <div class="company">{{item.companyName}}</div>
                    <div class="odd">
                      <div class="odds-text" v-if="flagLag">{{item.name}}</div>
                      <div class="odds-text" v-if="!flagLag && item.link">{{item.link.split(',')[0]}}</div>
                      <div class="value">{{item.odds}}</div>
                    </div>
                    <div class="expect">
                      <span class="expect-text">{{$t('arbitrageDetail.mobile.text14')}}</span>
                      <span class="expect-value">{{item.profit | formattingMoney}} <span style=" font-size: 16px">{{item.currency}}</span></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!--个人预计获利-->
            <div class="person-profit">
              <div class="plan-text">{{$t('profit.text11')}}</div>
              <div class="plan" v-for="(item,index) in arbitrageList" :key="index">
                <div class="plan-list">
                  <ul>
                    <li>
                      <div class="company" v-if="flagLag">{{item.name}}</div>
                      <div class="company" v-if="!flagLag && item.remark">{{item.remark.split(',')[0]}}</div>
                      <div class="odd">
                        <div class="odds-text">{{$t('achievement.text16')}}</div>
                        <div class="value"> <div>{{item.sumbetAmount | formattingMoney}} {{item.currency}}</div></div>
                      </div>
                      <div class="expect">
                        <span class="expect-text">{{$t('achievement.text19')}}</span>
                        <span class="expect-value" v-if="index === 0">{{getAbs(pAmountRandomzhu)}}<span style=" font-size: 16px;color: #ffc933"> {{item.currency}}</span></span>
                        <span class="expect-value" v-if="index === 1">{{getAbs(pAmountRandomhe)}}<span style=" font-size: 16px;color: #ffc933"> {{item.currency}}</span></span>
                        <span class="expect-value" v-if="index === 2">{{getAbs(pAmountRandomke)}}<span style=" font-size: 16px;color: #ffc933"> {{item.currency}}</span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!--<div class="expected-profit">-->
              <!--<div class="profit-title">{{$t('achievement.text61')}}</div>-->
              <!--<div class="">-->
                <!--<span>{{$t('add.text2')}}</span>-->
                <!--<span>{{personAmountUsd | formattingMoney}} <span class="unit-word">{{unit}}</span></span>-->
              <!--</div>-->
              <!--<div class="">-->
                <!--<span>{{$t('add.text3')}}</span>-->
                <!--<span>{{pAmountRandomzhu | formattingMoney}} <span class="unit-word">{{unit}}</span></span>-->
              <!--</div>-->
              <!--<div class="">-->
                <!--<span>{{$t('add.text4')}}</span>-->
                <!--<span>{{pAmountRandomke  | formattingMoney}} <span class="unit-word">{{unit}}</span></span>-->
              <!--</div>-->
              <!--<div class="">-->
                <!--<span>{{$t('add.text5')}}</span>-->
                <!--<span>{{pAmountRandomhe  | formattingMoney}} <span class="unit-word">{{unit}}</span></span>-->
              <!--</div>-->
            <!--</div>-->
          </div>
        </div>
      </div>
      <div class="Immediate-bet">
        <div class="btn" v-if="canBet" @click="toBetting">{{$t('arbitrageDetail.mobile.text9')}}</div>
        <div v-if="finishedBtn"  class="finished-bet">{{$t('nowOrder.text2')}}</div>
        <div class="btn" v-if="login" @click="toLogin">{{$t('arbitrageDetail.mobile.text8')}}</div>
      </div>
    </div>
    <!--投注弹窗-->
    <input type="password" style="display: none;">
    <input type="text" style="display: none;">
    <div class="myPopup" v-show="payPopupShow">
      <div class="myPopup-box">
        <a class="close" @click="close"><img src="../../../assets/images/common/delete_16_16.svg" alt=""></a>
        <div class="formDiv">
          <h3 class="title">{{$t('dialog.text1')}}</h3>
          <input class="payPassword tradingCenter-input" type="password" v-model="payPassword" onfocus="this.type='password'" value="" :placeholder="$t('dialog.text2')">
          <!-- 短信-->
          <!--<div class="shortMsg" v-show="isgogoleDuanxin">-->
            <!--<div class="payMsg-box">-->
              <!--<input class="payMsg tradingCenter-input" v-model="payCode"  :placeholder="$t('dialog.text3')" type="text" value="">-->
              <!--<button class="sendMsg" @click="getCode()" ref="sendMsg" >{{sendBtnValue}}</button>-->
            <!--</div>-->
          <!--</div>-->
          <!--谷歌-->
          <div class="shortMsg" v-show="!isgogoleDuanxin">
            <div class="payMsg-box">
              <input class="payMsg tradingCenter-input" v-model="payCode"   :placeholder="$t('dialog.text4')" type="text" value="">
            </div>
          </div>
          <div v-show="payFail" class="errmsg-tips">{{payFailTip}}</div>
          <button class="tradingCenter-btn pay-btn" @click="confirmPay()">{{$t('dialog.text5')}}</button>
        </div>
      </div>
    </div>
    <!--完成弹窗-->
    <div class="myPopup" v-show="confirmShow">
      <div class="myPopup-box">
        <a class="close" @click="successClose"><img src="../../../assets/images/common/delete_16_16.svg" alt=""></a>
        <!--支付成功弹窗-->
        <div v-show="isSuccess">
          <h3 class="title">{{$t('dialog.text6')}}</h3>
          <p class="tip" v-show="textTip" style="text-align: center">{{$t('dialog.text7')}}</p>
          <div class="errinMsg">{{$t('dialog.text12')}}</div>
          <button class="tradingCenter-btn" @click="success">{{$t('dialog.text8')}}</button>
        </div>
        <!--支付失败弹窗-->
        <div v-show="!isSuccess">
          <h3 class="title">{{$t('dialog.text9')}}</h3>
          <div class="errinMsg">{{errinMsgText}}</div>
          <button class="tradingCenter-btn" @click="failedDialog">{{$t('dialog.text8')}}</button>
        </div>
      </div>
    </div>
    <!-- 未设置验证码-->
    <div class="myPopup" v-if="setSafeVerific">
      <div class="myPopup-box" >
        <div class="close" @click="setSafeVerific = false"><img src="../../../assets/images/common/delete_16_16.svg" alt=""></div>
        <p class="errin-Msg">{{$t('dialog.text13')}}</p>
        <button class="tradingCenter-btn" @click="setSafeVerific = false">{{$t('dialog.text8')}}</button>
      </div>
    </div>
    <!--请先绑定手机号码-->
    <!--<div class="myPopup" v-show="noBindPhoneShow">-->
      <!--<div class="myPopup-box">-->
        <!--<h3 class="title">{{$t('dialog.text11')}}</h3>-->
        <!--<button class="tradingCenter-btn" @click="noBindPhoneShow = false">{{$t('dialog.text8')}}</button>-->
      <!--</div>-->
    <!--</div>-->
    <!--数据请求失败的弹窗提示-->
    <div class="myPopup" v-show="requestFailedShow">
      <div class="myPopup-box">
        <h3 class="title">{{$t('add.text8')}}</h3>
        <button class="tradingCenter-btn" @click="$router.push({path: '/orderProcess', query: {order: 1}})">{{$t('dialog.text8')}}</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      matchResult: [
        {img: require('../../../assets/images/common/red-34-40.svg')},
        {img: require('../../../assets/images/common/bisai-36-20.svg')},
        {img: require('../../../assets/images/common/blue-34-40.svg')}
      ],
      canBet: false, // 是否隐藏投注按钮
      finishedBtn: false, // 已结束按钮
      flagLag: true, // 判断页面的语言类型默认是中文
      pAmountRandomzhu: '', // 主场
      pAmountRandomhe: '', // 平局
      pAmountRandomke: '', // 客场
      requestFailedShow: false,
      score: '', // 星级
      win: '', // 赢
      and: '', // 平
      lose: '', // 输
      pAmount: '',
      errText: true,
      errMsg: false,
      isLoadMore: false,
      bet: false,
      login: false,
      textTip: false,
      active: false,
      payFail: false,
      openTradePassword: 0, // 判断是否设置安全密码
      betList: Array, // 投注数据
      arbitrageList: Array, // 套利数据
      payPopupShow: false, // 支付弹窗
      confirmShow: false, // 完成弹窗
      setSafeVerific: false, // 未设置安全验证弹窗
      isgogoleDuanxin: true,
      paySuccessPopupShow: false, // 支付成功
      payFailPopupShow: false, // 获取短信失败
      setTradPassword: false,
      noBindPhoneShow: false,
      id: this.$route.query.id,
      userUsd: '', // 用户剩余USD
      userSie: '',
      endTime: '',
      title: '',
      reTitle: '', // 英文标题
      alreadyAmount: '',
      progress: '', // 当前进度
      promptShow: false, // 输入金额超过剩余可投金额的提示
      errorText: '', // 文本框错误提示
      siePrice: '', // USD转SIE的汇率
      inputValue: '',
      text1: this.$t('popup.text1'),
      text2: this.$t('popup.text2'),
      text3: this.$t('popup.text3'),
      text4: this.$t('popup.text4'),
      text5: this.$t('popup.text5'),
      text6: this.$t('popup.text6'),
      text7: this.$t('popup.text7'),
      text8: this.$t('popup.text8'),
      text9: this.$t('popup.text10'),
      sendBtnTimes: 60,
      createTime: '',
      currency: '', // 币种
      competitionTime: '',
      openMobileCode: '', // 短信验证码
      openGoogleCode: '', // 谷歌验证码
      payPassword: '', // 安全码
      payCode: '', // 短信验证码
      arbitrageId: '',
      isSuccess: true,
      errinMsgText: '', // 支付失败提示
      payFailTip: '', // 确认支付提示
      remainAmount: '', // 剩余可投金额
      personAmountUsd: '', // 累计投注
      targetAmount: '', // 套利投注总金额
      unit: '',
      currencyUSD: '',
      betpaycurrency: '',
      cumulativeArr: '', // 投注金额数组
      totalAccount: 0, // 累计投注
      sendBtnValue: this.$t('achievement.text51'),
      originalId: '',
      timer: null,
      competitionName: '', // 世界杯
      hostTeamName: '', // 主场
      visitingTeamName: '', // 客场
      competitionLogo: '',
      hostTeamLogo: '',
      visitingTeamLogo: '',
      hostTeam: false,
      visitingTeam: false,
      competition: false,
      isdisabled: false,
      maxValue: '',
      bonusesStatus: '', // 0:初始化   1：执行派奖  2：开始派奖 3：派奖中 4:派奖完成
      styleObject: {
        height: '10px',
        width: '',
        background: '#ffa800',
        position: 'absolute',
        top: '0',
        left: '0',
        borderRadius: '2px',
        flag: false
      },
      introduce: '',
      pcTipBox: false,
      appTipBox: false
    }
  },
  created () {
    this._chooseLag()
    this._getBlance()
    this.getFinishedLog()
  },
  components: {
    vHeader: resolve => require(['../../../components/header.vue'], resolve),
    vFooter: resolve => require(['../../../components/footer.vue'], resolve)
  },
  methods: {
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
    _chooseLag () { // 判断当前网页的语言类型
      if (window.localStorage.Qlang === 'CN') {
        this.flagLag = true
      } else if (window.localStorage.Qlang === 'EN') {
        this.flagLag = !this.flagLag
      }
    },
    // 盘口预计获利
    expectProfit (index) {
      if (index === 0) {
        return this.arbitrageList[0].profit
      } else if (index === 1) {
        return this.arbitrageList[1].profit
      } else if (index === 2) {
        return this.arbitrageList[2].profit
      }
    },
    inputText () {
      this.inputValue = this.inputValue.replace(/\D/g, '')
      // if (this.inputValue < 0) {
      //   this.inputValue = 0
      // }
      if (!/^\d*.{0,1}\d{0,4}$/.test(this.inputValue)) {
        this.inputValue = ''
      }
      if (!/^[0-9]+\.?[0-9]{0,1}$/.test(this.inputValue)) {
        // this.promptShow = true
        // this.errorText = this.text2
      } else if (this.inputValue < 0.1) {
        this.promptShow = true
        this.errorText = this.text3
        this.inputValue = ''
      } else if (this.inputValue > Number(this.userSie)) {
        if (Number(this.userSie) - Number(this.remainAmount) < 0) {
          this.promptShow = true
          this.errorText = this.$t('popup.text11')
        } else {
          this.promptShow = true
          this.errorText = this.text4
        }
      } else if (this.inputValue > Number(this.remainAmount)) {
        if (Number(this.remainAmount) - Number(this.userSie) < 0) {
          this.promptShow = true
          this.errorText = this.text4
        } else {
          this.promptShow = true
          this.errorText = this.$t('popup.text11')
        }
      } else if (this.inputValue === '') {
        this.promptShow = true
        this.errorText = this.text1
      } else {
        this.promptShow = false
      }

      // if (Number(this.remainAmount) < 100) {
      //   this.promptShow = true
      //   this.errorText = '投注已满'
      // }
    },
    // 获取进行中订单数据
    getFinishedLog () {
      let url = `${this.$api}/bet/queryBetDetail?arbitrageid=${this.id}`
      this.$http.post(url).then(res => {
        if (res.data.success) {
          // this.requestFailedShow = false
          // console.log(res.data)
          let ret = res.data.data
          this.betList = ret.betlist
          this.introduce = ret.introduce
          this.arbitrageList = ret.list
          this.arbitrageId = this.arbitrageList[0].arbitrageId
          this.endTime = ret.endTime
          this.createTime = this.$changeDate(ret.createTime, '/', 1)
          this.competitionTime = this.$changeDate(ret.competitionTime, '/', 1)
          this.title = ret.title
          if (ret.remark) {
            this.reTitle = ret.remark.split(',')[0]
          }
          if (window.localStorage.Qlang === 'CN') {
            this.title = ret.title
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.title = ret.remark.split(',')[0]
            }
          }
          this.pAmount = ret.pAmount
          this.pAmountRandomzhu = ret.pAmountRandomzhu // 主胜
          this.pAmountRandomhe = ret.pAmountRandomhe // 平局
          this.pAmountRandomke = ret.pAmountRandomke // 客胜
          var cumulative = []
          let sumTotal = 0
          for (let i = this.betList.length - 1; i >= 0; i--) { // 获取每次的投注金额
            this.betList[i].betAmount = Number(this.betList[i].betAmount)
            sumTotal += this.betList[i].betAmount
            cumulative.push(this.betList[i].betAmount)
          }
          this.totalAccount = sumTotal
          this.cumulativeArr = cumulative
          this.alreadyAmount = ret.alreadyAmount
          this.targetAmount = ret.maxTotalAmount
          this.remainAmount = (ret.maxTotalAmount - ret.alreadyAmount).toFixed(4)
          this.personAmountUsd = ret.personAmountUsd
          if (window.localStorage.Qlang === 'CN') {
            this.competitionName = ret.competitionName
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.competitionName = ret.remark.split(',')[1]
            }
          }
          if (window.localStorage.Qlang === 'CN') {
            this.hostTeamName = ret.hostTeamName
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.hostTeamName = ret.remark.split(',')[2]
            }
          }
          if (window.localStorage.Qlang === 'CN') {
            this.visitingTeamName = ret.visitingTeamName
          } else if (window.localStorage.Qlang === 'EN') {
            if (ret.remark) {
              this.visitingTeamName = ret.remark.split(',')[3]
            }
          }
          this.visitingTeamLogo = ret.visitingTeamLogo
          this.competitionLogo = ret.competitionLogo
          this.hostTeamLogo = ret.hostTeamLogo
          this.bonusesStatus = ret.bonusesStatus
          // if (this.bonusesStatus !== 0) {
          //   this.canBet = false
          //   this.bet = false
          // } else {
          //   this.canBet = true
          //   this.bet = true
          // }
          // console.log(ret.visitingTeamLogo)
          // if (ret.visitingTeamLogo && ret.competitionLogo && ret.competitionLogo) {
          //   this.visitingTeamLogo = ret.visitingTeamLogo
          //   this.competitionLogo = ret.competitionLogo
          //   this.hostTeamLogo = ret.hostTeamLogo
          //   this.hostTeam = true
          //   this.visitingTeamLogo = true
          //   this.competition = true
          // } else {
          //   this.hostTeam = false
          //   this.visitingTeamLogo = false
          //   this.competition = false
          // }
        }
      }).catch(err => {
        this.requestFailedShow = true
        console.log(err)
      })
    },
    // 累计投注记录
    getCumulative (index) {
      var sum = 0
      for (let i = this.betList.length - 1; i > index - 1; i--) {
        sum += this.betList[i].betAmount
      }
      return sum
    },
    // 文本框失去焦点
    inputNum () {
      // let changeNum = this.$refs.betAmount.innerHTML
      if (!/^[0-9]+\.?[0-9]{0,1}$/.test(this.inputValue)) {
        // this.promptShow = true
        // this.errorText = this.text2
      } else if (this.inputValue < 0.1) {
        this.promptShow = true
        this.errorText = this.text3
      } else if (this.inputValue > Number(this.remainAmount)) {
        this.promptShow = true
        this.errorText = this.text4
      } else {
        this.promptShow = false
      }
      if (this.inputValue === '') {
        this.promptShow = true
        this.errorText = this.text1
      }
    },
    // 点击投注按钮
    _getBlance () { // 获取用户的USD资产以及SIE资产的数据
      this.$http.post(`${this.$api}/user/balance`).then((res) => {
        if (res.data.success === true) {
          this.score = res.data.mapData.score
          this._getArbitrageListInfo()
          let ret = res.data.data
          this.openGoogleCode = ret.user.openGoogleCode
          this.openMobileCode = ret.user.openMobileCode
          this.openTradePassword = ret.user.openTradePassword
          this.betpaycurrency = res.data.mapData.betpaycurrency
          this.login = false // 关闭请登录后再投注按钮
          // console.log(this.openGoogleCode, this.openMobileCode)
          let userUsd = ret.userAccount.USD.balance
          this.siePrice = ret.siePrice
          // console.log(this.siePrice)
          if (userUsd) { // 判断用户是否存在userUsd字段防止后台为空会报错
            this.userUsd = userUsd.toFixed(4)
          } else {
            this.userUsd = 0.0000
          }
          if (this.inputValue > userUsd) { // 如果输入的金额大于剩余的金额显示的内容
            this.promptShow = true
          } else {
            this.promptShow = false
          }
          let userSie = ret.userAccount.SIE.balance
          this.currency = res.data.data.userAccount.SIE.currency
          if (userSie) { // 判断用户是否存在userSie字段防止后台为空会报错
            this.userSie = userSie.toFixed(4)
          } else {
            this.userUsd = 0.0000
          }
        } else {
          this.log = true // 开启请登录后再投注按钮
          this.bet = false // 关闭立即投注按钮
        }
      })
    },
    _getArbitrageListInfo () { // 获取用户的总金额等信息
      this.$http.post(`${this.$api}/arbitrage/info?id=${this.$route.query.id}`).then((res) => {
        if (res.data.success === true) {
          let ret = res.data.data
          // console.log(ret)
          this.originalId = ret.id
          this.currencyUSD = ret.currency
          // this.id = this.$changeId(ret.id, 6)
          // this.title = ret.introduce
          // this.endDate = this.$changeDate(ret.endTime, ':', 1)
          this.unit = ret.currency
          this.alreadyAmount = (ret.alreadyAmount).toFixed(4)
          this.progress = ((ret.alreadyAmount / ret.maxTotalAmount) * 100).toFixed(2) + '%' // 当前进度
          // console.log(this.progress === '100.00%')
          if (this.endTime <= Date.parse(new Date()) || this.progress === '100.00%' || this.bonusesStatus !== 0) {
            this.finishedBtn = true
            this.canBet = false
          } else {
            this.finishedBtn = false
            this.canBet = true
          }
          this.flag = true
          this.styleObject.width = this.progress
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    showPay () {
      let maxValue = this.getLevel(this.score)
      // console.log(maxValue)
      // this.$refs.sendMsg.disabled = false
      clearTimeout(this.timer)
      this.sendBtnValue = this.$t('achievement.text51')
      this.sendBtnTimes = 60
      // console.log(this.$refs.betAmount.innerHTML)
      if (this.$refs.betAmount.innerHTML.replace(/,/g, '') >= 100) { // 判断剩余可投金额大于100
        if (this.inputValue >= 100) { // 判断输入的值是否大于100
          if (Number(this.inputValue) <= Number(this.remainAmount)) { // 输入的值要小于剩余可投金额
            if (this.$refs.hasBalance.innerHTML.replace(/,/g, '') - this.$refs.payBalance.innerHTML.replace(/,/g, '') >= 0) { // 判断资产是否足够
              if (this.inputValue <= maxValue) { // 判断用户的最大单笔投注金额
                if (this.openGoogleCode !== 2) {
                  this.setSafeVerific = true
                } else {
                  this.payPopupShow = true
                  // 有谷歌
                  if (this.openGoogleCode === 2) {
                    this.isgogoleDuanxin = false
                    // 如果只有短信
                  }
                  // else if (this.openMobileCode === 2 && this.openGoogleCode !== 2) {
                  //   this.isgogoleDuanxin = true
                  //   // 都开通用谷歌
                  // }
                }
              } else {
                this.promptShow = true
                this.errorText = this.$t('popup.text13')
              }
            } else {
              this.promptShow = true
              this.errorText = this.$t('popup.text11')
            }
          } else {
            this.promptShow = true
            this.errorText = this.text4
          }
        } else {
          this.promptShow = true
          this.errorText = this.text9
        }
      } else {
        this.promptShow = true
        this.errorText = this.$t('popup.text12')
      }

      if (this.inputValue === '') {
        this.promptShow = true
        this.errorText = this.text1
      }
      // if (this.inputValue < 0.1 || this.inputValue > this.userUsd || !/^[0-9]+\.?[0-9]{0,1}$/.test(this.inputValue)) {
      //   return false
      // }
      this.payPassword = ''
      this.payCode = ''
      // console.log(Number(this.inputValue) <= Number(this.userUsd))
      if (this.inputValue >= 0.1 && Number(this.inputValue) <= Number(this.remainAmount) && this.inputValue >= 100 && this.$refs.hasBalance.innerHTML.replace(/,/g, '') - this.$refs.payBalance.innerHTML.replace(/,/g, '') >= 0 && this.inputValue <= maxValue) {
        // console.log('111')
        if (this.openGoogleCode !== 2) {
          this.setSafeVerific = true
        } else {
          this.payPopupShow = true
          // 有谷歌
          if (this.openGoogleCode === 2) {
            this.isgogoleDuanxin = false
            // 如果只有短信
          }
          // else if (this.openMobileCode === 2 && this.openGoogleCode !== 2) {
          //   this.isgogoleDuanxin = true
          //   // 都开通用谷歌
          // }
        }
      }
    },
    // 发送短信按钮
    getCode () {
      if (this.sendBtnValue === this.$t('achievement.text51')) {
        this.countDown()
        let formData = new FormData()
        formData.append('json', JSON.stringify({'type': 'code'}))
        this.$http.post(this.$api + '/user/sendSmsCode', formData).then((res) => {
          if (res.data.success) {
            // console.log(111)
            // this.$refs.sendMsg.disabled = true
            this.payFailTip = ''
          } else {
            this.payFail = true
            if (res.data.msg) {
              // this.isdisabled = false
              this.payFailTip = res.data.msg
            } else {
              this.payFailTip = this.text8
            }
          }
        }).catch((err) => {
          // this.isdisabled = false
          console.log(err)
        })
      }
    },
    // 图标关闭窗口
    close () {
      this.inputValue = ''
      // this.isdisabled = false
      this.payPopupShow = false
      this.errMsg = false
      this.payFail = false
    },
    // 失败关闭窗口
    failedDialog () {
      this.inputValue = ''
      this.confirmShow = false
    },
    // 图标关闭窗口
    successClose () {
      this.inputValue = ''
      this.confirmShow = false
      // this.getFinishedLog()
      // this._getBlance()
      // this.$router.push('/processOrderDetail')
    },
    // 成功后跳转
    success () {
      this.inputValue = ''
      this.confirmShow = false
      // this.getFinishedLog()
      // this._getBlance()
      // this.$router.push('/processOrderDetail')
    },
    // 短信倒计时
    countDown () {
      if (this.sendBtnTimes === 0) {
        this.sendBtnValue = this.$t('achievement.text51')
        this.sendBtnTimes = 60
        // this.$refs.sendMsg.disabled = false
      } else {
        this.sendBtnTimes--
        this.sendBtnValue = this.sendBtnTimes
        // this.$refs.sendMsg.disabled = true
        // this.$refs.sendMsg.style.color = 'rgba(255,255,255,0.6)'
        this.timer = setTimeout(() => this.countDown(), 1000)
      }
    },
    // 确认支付按钮
    confirmPay () {
      this.errinMsgText = ''
      if (this.payPassword === '') {
        this.payFailTip = this.text6
        this.payFail = true
        return false
      }
      if (this.payCode === '') {
        this.payFailTip = this.text7
        this.payFail = true
        return false
      }
      this.payFailTip = ''
      // let payBalance = this.$refs.payBalance.innerHTML // 所要支付的金额
      let fmData = new FormData()
      fmData.append('tradePwd', this.payPassword)
      fmData.append('verifyCode', this.payCode)
      fmData.append('amount', this.inputValue)
      fmData.append('id', this.$route.query.id)
      let ajaxLang1 = ''
      if (localStorage.getItem('Qlang') === 'EN') {
        ajaxLang1 = 'en'
      }
      // let url = `${this.$api}/bet?tradePwd=${this.payPassword}&verifyCode=${this.payCode}&id=${this.id}&amount=${this.inputValue}`
      if (this.openTradePassword === 1) {
        this.payFailTip = this.$t('arbitrageDetail.dialog.text8')
        this.payFail = true
      } else {
        this.$http.post(`${this.$api}/bet`, fmData, {headers: {'pk-language': ajaxLang1}}).then(res => {
          // 支付成功
          if (res.data.success === true && res.data.state === 'success' && res.data.status === 'success') {
            this.getFinishedLog()
            this._getBlance()
            this.noBindPhoneShow = false
            this.payPopupShow = false
            this.confirmShow = true
            this.isSuccess = true
          } else { // 支付失败
            this.errinMsgText = res.data.msg
            this.noBindPhoneShow = false
            this.payPopupShow = false
            this.confirmShow = true
            this.isSuccess = false
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    toBetting () {
      this.$router.push({path: '/betting', query: {id: this.originalId}})
    },
    toLogin () {
      this.$router.push({path: '/login', query: {status: '0'}})
    },
    betRecord () {
      this.$router.push({path: '/cumulative', query: {id: this.originalId, betpaycurrency: this.betpaycurrency}})
    },
    getLevel (str) {
      if (str === '1') {
        // let maxValue = 10000
        return 10000
      } else if (str === '2') {
        return 20000
      } else if (str === '3') {
        return 50000
      } else if (str === '4') {
        return 100000
      } else if (str === '5') {
        return 500000
      }
    }
  },
  computed: {
    // inputValue === '' ? 0 :(Number(inputValue) / siePrice).toFixed(4)
    payMoney () {
      if (this.inputValue === '') {
        return 0
      } else {
        let fixNum = (Number(this.inputValue) / this.siePrice).toFixed(4)
        let strNum = String((Number(this.inputValue) / this.siePrice).toFixed(4)).split('')
        if (strNum[strNum.length - 1] < 5) {
          // console.log(fixNum)
          return (Number(fixNum) + 0.0001).toFixed(4)
        } else {
          return fixNum
        }
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../assets/css/mixin.styl"
  input[type=number] {
    -moz-appearance:textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  }
  .processOrderDetail
    .processOrderDetail-web
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
        width 100%
        margin 0 auto
        padding-top 80px
        display flex
        flex-direction row
        @media screen and (max-width: 1300px){
          width 100%
          display flex
          flex-direction row
        }
        /*左边样式*/
        .left-content
          margin-top 50px
          margin-right 40px
          width 200px
          height 800px
          background-color #f2f2f2
          @media screen and (max-width: 1300px){
            height 600px
            min-width 200px
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
            @media screen and (max-width: 768px){
              font-size 14px
            }
          .go-next
            padding-left 40px
            cursor pointer
            user-select none
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
              @media screen and (max-width: 768px)
                font-size 16px
              &:hover
                color #e60000
            .isNow
              margin-bottom 30px
            a
              font-size 18px
              color #cccccc
              @media screen and (max-width: 768px){
                font-size 16px
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
            .ongoing
              .turn-next
                display block
              .processing
                font-size 16px
                color #e60000
          .profit
            .account-up
              padding-left 20px
              height 60px
              width 100%
              line-height 60px
          @media screen and (max-width: 1300px){
            display flex
            flex-direction row
            height auto
          }
        .bogeFund
          .account-up
            padding-left 20px
            height 60px
            width 100%
            line-height 60px
        /*右边样式*/
        .right-content
          width 100%
          margin-top 50px
          position relative
          @media screen and (max-width: 1300px)
            display flex
            flex-direction column
            padding 0 30px
          .tipBox
            padding 0 50px
            position absolute
            width 640px
            box-shadow 0px 0px 10px rgb(153,153,153)
            background-color #fff
            top 150px
            left 50%
            transform translate(-50%, 0)
            z-index 9
            span
              display inline-block
              width 20px
              height 20px
              background-color #fff
              position absolute
              right 30px
              top 30px
              background-image url("../../../assets/images/arbitrageDetial/close.png")
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
          .right-title
            color #1a1a1a
            font-size 16px
            margin-top 20px
            margin-bottom  40px
          .introduce
            height 40px
            text-align left
            width 100%
            background-color rgba(230,0,0,0.8)
            color: #fff
            margin-bottom 20px
            padding-left 30px
            line-height 40px
          .content-one
            width 100%
            height 400px
            background-color #ffffff
            @media screen and (max-width: 950px){
              height auto
            }
            .content-title
              display flex
              justify-content space-between
              align-items center
              height 60px
              margin-left 40px
              margin-right 40px
              /*border-bottom 1px solid #4d4d4d*/
              @media screen and (max-width: 900px){
                width 100%
                display flex
                flex-direction column
                align-items center
                height  120px
                padding 20px
                margin-left 0px
                margin-right 0px
              }
              .order-number
                font-size 16px
                color #232044
                @media screen and (max-width: 900px){
                  font-size 16px
                }
              .project-name
                font-size 20px
                color #1a1a1a
                font-weight bold
                display flex
                justify-content space-between
                @media screen and (max-width: 900px){
                  font-size 16px
                }
                img
                  width 38px
                  height 25px
            .total-amount
              margin-left 40px
              margin-right 40px
              display flex
              flex-direction row
              @media screen and (max-width: 950px)
                display flex
                flex-direction column
                align-items center
                margin-left 0px
                margin-right 0px
              .project-time
                margin-top 50px
                font-size 16px
                color #232044
                @media screen and (max-width: 950px){
                  font-size 16px
                }
                .time
                  color #1a1a1a
                  margin-top 18px
                  margin-bottom 38px
              .amount
                margin-top 40px
                width 50%
                @media screen and (max-width: 950px)
                  font-size 16px
                  margin-top 30px
                  margin-left 50px
                .total-name
                  font-size 16px
                  color #232044
                .total-number
                  margin-top 18px
                  font-size 28px
                  color #1a1a1a
                  font-weight bold
                  @media screen and (max-width: 950px)
                    font-size 18px
                    margin-top 20px
                  .blue
                    color #3653f5
                .bar
                  margin-top 38px
                  @media screen and (max-width: 1700px) {
                  margin-top 38px
                  }
                  @media screen and (max-width: 950px) {
                    margin-top 30px
                  }
                .progress
                  position relative
                  border-radius 2px
                  background #f0f0f0
                  width 70%
                  height 10px
                  @media screen and (max-width: 1700px) {
                    width 300px
                    height 10px
                  }
                  .all
                      position absolute
                      border-radius 2px
                      top 0
                      left 0
                      height 100px
                      width 100%
                .text
                  margin-top 20px
                  font-size 16px
                  color #232044
                  .percentage
                    font-size 16px
                    color #ffa800
                .finished
                  margin-top 100px
                  color #ffc933
                  font-size 16px
              .result
                margin-left 40px
                @media screen and (max-width: 1700px) {
                 padding-bottom 50px
                }
                .result-title
                  font-size 16px
                  color #232044
                  margin-top 20px
                  margin-bottom 10px
                .title-dec
                  font-size 16px
                  color #e60000
                  /*margin-bottom 20px*/
                  @media screen and (max-width: 1700px) {
                    font-size 18px
                  }
                  .white
                    display inline-block
                    width 16px
                    height 16px
                    margin-right 10px
                  .white-title
                    font-size 18px
                    color #ffffff
                .input-group
                  margin-top 20px
                  /*line-height 50px*/
                  input
                    width 320px
                    height 50px
                    padding-left 20px
                    font-size 16px
                    outline none
                    color #666666
                    border 2px solid #666666
                    background-color  #ffffff !important
                    @media screen and (max-width: 1700px) {
                      width 280px
                      height 30px
                      font-size 12px
                    }
                  .input-usd
                    margin-left 10px
                    font-size 30px
                    vertical-align middle
                    color #232044
                    @media screen and (max-width: 1700px) {
                      font-size 16px
                    }
                .prompt
                  width 100%
                  padding-top 10px
                  text-align left
                  font-size 18px
                  color #c90010
                .common-text
                  font-size 16px
                  color #232044
                  margin-top 10px
                  @media screen and (max-width: 1700px) {
                    font-size 14px
                  }
                  .text-blue
                    color #e60000
                .btn
                  margin-top 20px
                  width 320px
                  height 50px
                  color #fff
                  font-size 18px
                  cursor pointer
                  user-select none
                  background-color #e60000
                  text-align center
                  line-height 50px
                  @media screen and (max-width: 1700px) {
                  width 300px
                  height 30px
                  line-height 30px
                  }
                .finished-btn
                  margin-top 20px
                  width 320px
                  height 50px
                  color #fff
                  font-size 18px
                  cursor pointer
                  user-select none
                  background-color #666
                  text-align center
                  line-height 50px
                  @media screen and (max-width: 1700px) {
                    width 300px
                    height 30px
                    line-height 30px
                  }
                .number
                  font-size 18px
                  color #ffffff
                  margin-bottom 40px
                .blue
                  color #3653f5
                .yellow
                  color #ffc933
          .content-two
            margin-top 60px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              color #1a1a1a
              font-size 16px
              margin-top 30px
              margin-bottom 20px
              font-weight bold
            .table-wrap
              width 100%
              .table-title
                display flex
                align-items center
                font-size 16px
                height 40px
                background-color #ffffff !important
                div
                  color #1a1a1a
                  font-weight bold
                  text-align center
                .profit-result
                  width 300px
                  margin-left 90px
                .odds-result
                  width 200px
                .total-profit
                  width 340px
              .table-content
                display flex
                align-items center
                font-size 16px
                height 50px
                .white-title
                  width 300px
                  margin-left 0px
                  .white
                    display inline-block
                    width 43px
                    height 50px
                    position absolute
                    left 30px
                div
                  color #1a1a1a
                  width 300px
                  text-align center
              .table-content:nth-child(odd)
                background-color #ffffff
          .expected-profit
            margin-top 60px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              color #1a1a1a
              font-size 16px
              margin-top 30px
              margin-bottom 20px
              font-weight bold
            .content-box
              width 100%
              .box-header
                ul
                  display flex
                  flex-direction row
                  color #1a1a1a
                  font-weight bold
                  background-color #ffffff !important
                  li
                    height 40px
                    width 25%
                    line-height 40px
                    text-align center
              .box-content
                ul
                  display flex
                  flex-direction row
                  justify-content center
                  align-items center
                  color #1a1a1a
                  &:nth-child(even)
                    background-color #011f3c
                  li
                    display flex
                    flex-direction column
                    justify-content center
                    background-color #f5f6f7
                    height 40px
                    width 25%
                    line-height 40px
                    text-align center
          .content-three
            margin-top 60px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              color #1a1a1a
              font-size 16px
              margin-top 30px
              margin-bottom 20px
              font-weight bold
            .cumulative
              padding-top 10px
              font-size 18px
              color #1a1a1a
              font-weight bold
              padding-bottom 10px
              padding-left 20px
              background-color #ffffff
              border-bottom 1px solid #4c4c4c
              @media screen and (max-width: 1300px){
                width 100%
                text-align center
              }
            .table-wrap
              width 100%
              .table-title
                display flex
                justify-content  space-between
                align-items center
                font-size 16px
                height 40px
                font-weight bold
                background-color #ffffff !important
                div
                  color #1a1a1a
                  width 200px
                  text-align center
              .table-content
                display flex
                justify-content  space-between
                align-items center
                font-size 14px
                height 50px
                background-color #f5f6f7
                .white-title
                  position relative
                .white
                  display inline-block
                  width 43px
                  height 50px
                  left 30px
                div
                  color #1a1a1a
                  width 200px
                  text-align center
              .table-content:nth-child(odd)
                background-color #ffffff
          .content-four
            margin-top 60px
            @media screen and (max-width: 1300px){
              width 100%
              display flex
              flex-direction column
              align-items center
            }
            .title
              color #1a1a1a
              font-size 16px
              margin-top 30px
              margin-bottom 20px
              font-weight bold
            .cumulative
              padding-top 10px
              font-size 18px
              color #1a1a1a
              font-weight bold
              padding-bottom 10px
              padding-left 20px
              background-color #ffffff
              border-bottom 1px solid #4c4c4c
              @media screen and (max-width: 1300px){
                width 100%
                text-align center
              }
            .table-wrap
              width 100%
              .table-title
                display flex
                justify-content  space-between
                align-items center
                font-size 16px
                height 40px
                font-weight bold
                background-color #ffffff !important
                div
                  color #1a1a1a
                  flex 1
                  text-align center
              .table-content
                display flex
                justify-content  space-between
                align-items center
                font-size 14px
                height 50px
                background-color #f5f6f7
                .white-title
                  position relative
                .white
                  display inline-block
                  width 43px
                  height 50px
                  left 30px
                div
                  color #1a1a1a
                  flex 1
                  text-align center
              .table-content:nth-child(odd)
                background-color #ffffff
  .person-profit
    margin-top 10px
  /*交易所弹出窗*/
  .myPopup {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    @media screen and (max-width: 768px) {
      .myPopup .myPopup-box{
        width: 80%;
        height: 100%;
      }
    }
  }
  .myPopup .myPopup-box {
    width: 640px;
    padding: 0 40px;
    padding-top: 60px;
    padding-bottom: 80px;
    color: #1a1a1a;
    position: relative;
    background-color: #ffffff;
  }
  @media screen and (max-width: 768px) {
    .myPopup .myPopup-box{
      width:70%;
      padding 20px
    }
  }
  .myPopup .myPopup-box .close{
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    z-index: 999;
    cursor: pointer;
    user-select none
  }
  @media screen and (max-width: 768px) {
    .myPopup .myPopup-box .close{
      top: 4px;
      right: 4px;
    }
  }
  .myPopup .myPopup-box .close:active {
    opacity: 0.6;
  }
  .myPopup .myPopup-box .close img{
    display: block;
    width: 20px;
    height: 20px;
  }
  .myPopup .myPopup-box .title {
    font-size: 34px;
    font-weight bold
    margin-bottom: 20px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    .myPopup .myPopup-box .title {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  .myPopup .myPopup-box .errinMsg
    font-size: 18px;
    color: #c90010;
    margin-top 20px
    margin-bottom: 20px;
    text-align center
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  .errin-Msg
    font-size: 18px;
    color: #c90010;
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
    text-align center
    margin 50px 0
  .myPopup .myPopup-box input {
    height: 50px;
    width 560px
    font-size 16px
    border 1px solid #232044
    margin-bottom  60px
    position: relative;
    @media screen and (max-width: 768px) {
        width 100%
        margin-bottom  20px
    }
  }
  .myPopup .myPopup-box input::-webkit-input-placeholder {
    text-align: left;
    opacity: 0.6;
    color #666666
  }
  .myPopup .myPopup-box .errmsg-tips
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -50px;
    font-size: 18px;
    color: #c90010;
    @media screen and (max-width: 768px) {
      font-size: 14px;
      margin-top: 0px;
    }
  .tradingCenter-btn {
    display: block;
    width: 100%;
    height: 50px;
    margin 0 auto
    border-radius: 4px;
    text-align: center;
    background-color #ffffff
    color: #e60000;
    border 1px solid #e60000
    font-size: 20px;
    cursor: pointer;
    outline: none;
    user-select: none;
  }
    @media screen and (max-width: 768px) {
      .tradingCenter-btn{
        height: 40px;
        font-size: 14px;
        width 50%
        margin-top 20px
      }
    }
  .tradingCenter-btn:active {
    opacity: 0.6;
  }
  .tradingCenter-input {
    display: block;
    border-radius: 4px;
    padding: 0 30px;
    box-sizing border-box
    background-color: transparent;
    outline: none;
    border 1px solid #232044
    font-size: 16px;
    color #666666
  }
  @media screen and (max-width: 680px) {
    .tradingCenter-input {
      height: 40px;
      font-size: 14px!important;
    }
  }
  .tradingCenter-input::-webkit-input-placeholder {
    color #666666
    text-align: center;
  }
  .tradingCenter-tab {
    color: #ffffff;
    font-size: 14px;
    border-bottom: 1px solid #c90010;
    overflow: hidden;
  }
  .payMsg-box
    position relative
  .sendMsg
    display block
    /*width 88px*/
    height 50px
    line-height 50px
    padding 0 20px
    background-color transparent
    color #e60000
    font-size 16px
    position absolute
    right 0px
    bottom 0px
    border none
    outline none
    cursor pointer
    user-select none
    @media screen and (max-width 768px ) {
      height 50px
      line-height 50px
      position absolute
    }
    &:active
      opacity .6
  .tip
    margin-bottom 30px
  .text-tip
    margin-left 100px
    margin-bottom 30px
    @media screen and (max-width 680px ) {
      margin-left 0
    }
  //手机端样式
  .detail-mobile
    position: absolute
    width: 100%
    top: 0
    height auto
    background-color #f8f9fa
    z-index 999
    @media screen and (max-width: 1024px) {
      display block
    }
    @media screen and (min-width: 1024px) {
      display none
    }
    .content-mobile
      width: 100%
      height 100%
      min-height 100%
      display: inline-block
      &:after
        display: block;
        content: ".";
        height: 0;
        line-height: 0;
        clear: both;
        visibility: hidden;
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
    .de-c
      position: fixed
      width 100%
      top: 0
      bottom: 0
      overflow: auto
      background-color: #f8f9fa;
      .detail-mobile-content
        color #fff
        padding: 10px 20px 30px
        margin-bottom 30px
        margin-top 60px
        .announcement
          display flex
          flex-direction column
          justify-content space-between
          padding 20px 15px 10px 15px
          width 100%
          height 212px
          background #ffffff
          .introduce
            height 30px
            text-align left
            width 100%
            padding-left 20px
            background-color rgba(230,0,0,0.8)
            color: #fff
            margin-bottom 20px
            line-height 30px
            font-size: 14px;
          .announcement-top
            display flex
            flex-direction row
            justify-content space-between
            font-size 16px
            .top-title
              color #1a1a1a
              font-weight bold
            .top-num
              color #1a1a1a
          .remaining
            display flex
            flex-direction column
            align-items center
            .betting-text
              font-weight bold
              font-size 16px
              color #1a1a1a
            .betting-status
              margin-top 5px
              font-size 22px
              color #e60000
              font-weight bold
          .target
            display flex
            flex-direction row
            justify-content space-between
            .target-text
              font-size 16px
              color #1a1a1a
            .target-value
              font-size 16px
              color #e60000
          .end-time
            display flex
            flex-direction row
            justify-content space-between
            .time-text
              color #1a1a1a
              font-size 16px
            .time-value
              color #1a1a1a
              font-size 16px
        .betting
          padding-left 15px
          padding-right 15px
          margin-top 10px
          width 100%
          height 50px
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          background #ffffff
          .betting-text
            font-weight bold
            font-size 16px
            color #1a1a1a
          .value-wrapper
            font-size 16px
            color #1a1a1a
            .value
              margin-right 3px
            .icon
              img
                width 16px
                height 16px
                font-size 16px
        .result
          display flex
          flex-direction column
          justify-content space-between
          margin-top 10px
          padding 10px 15px
          background #ffffff
          width 100%
          height 180px
          .result-title
            font-weight bold
            font-size 16px
            color #1a1a1a
          .team-wrapper
            display flex
            flex-direction column
            align-items center
            .team-icon
              width 27px
              height 30px
              margin-bottom 5px
              img
                width 27px
                height 30px
            .team-name
              font-size 16px
              color #fff
          .all-get
            display flex
            flex-direction row
            justify-content space-between
            .get-title
              font-size 16px
              color #ccc
            .value
              font-size 16px
              color #fff
          .personal-get
            display flex
            flex-direction row
            justify-content space-between
            .personal-text
              font-size 16px
              color #ccc
            .personal-value
              font-size 16px
              color #fff
        .game
          display flex
          flex-direction column
          justify-content space-around
          margin-top 10px
          padding 10px 15px
          height 200px
          width 100%
          background #ffffff
          .game-top
            display flex
            flex-direction row
            justify-content space-between
            .top-title
              font-weight bold
              font-size 16px
              color #1a1a1a
            .top-date
              font-size 16px
              color #1a1a1a
          .game-team-group
            .mark-wrapper
              display flex
              flex-direction column
              align-items center
              .mark
                img
                  width 40px
                  height 40px
              .game-event
                font-size 16px
                color #1a1a1a
                margin 10px auto
            .game-team
              display flex
              flex-direction row
              align-items center
              justify-content center
              .one-team
                display flex
                flex-direction row
                align-items center
                .one-team-log
                  img
                    width 40px
                    height 40px
                    @media screen and (min-width: 411px) {
                      width 60px
                      height 60px
                    }
                .one-team-name
                  margin-left 8px
                  color #1a1a1a
                  font-size 16px
                  font-weight bold
              .vs
                margin 0 20px
                img
                  width 30px
                  height 40px
              .two-team
                display flex
                flex-direction row-reverse
                align-items center
                .two-team-log
                  img
                    width 40px
                    height 40px
                    @media screen and (min-width: 411px) {
                    width 60px
                    height 60px
                    }
                .two-team-name
                  margin-right 8px
                  color #1a1a1a
                  font-size 16px
                  font-weight bold
        .plan-text
          width 100%
          padding 10px 15px
          font-size 16px
          color #1a1a1a
          font-weight bold
          background #ffffff
        .plan
          height auto
          width 100%
          padding 10px 15px
          background #ffffff
          .plan-list
            ul
              li
                height 100px
                display flex
                flex-direction column
                justify-content space-between
                border-bottom-1px(#ccc)
                padding-bottom 15px
                margin-bottom 15px
                .company
                  font-weight bold
                  font-size 16px
                  color #1a1a1a
                .odd
                  color #1a1a1a
                  display flex
                  flex-direction row
                  justify-content space-between
                .expect
                  color #1a1a1a
                  display flex
                  flex-direction row
                  justify-content space-between
        .expected-profit
          margin-top 10px
          display flex
          flex-direction column
          color #1a1a1a
          background #ffffff
          line-height 50px
          padding 10px 15px
          .profit-title
            font-size 18px
            font-weight bold
          div
            display flex
            justify-content space-between
  .Immediate-bet
    width 100%
    position relative
    .btn
      font-weight bold
      font-size 18px
      color #fff
      line-height 50px
      text-align center
      display inline-block
      position fixed
      bottom 0
      width 100%
      height 50px
      background-color #e60000
    .finished-bet
      font-weight bold
      font-size 18px
      color #fff
      line-height 50px
      text-align center
      display inline-block
      position fixed
      bottom 0
      width 100%
      height 50px
      background-color #666
  .disabled
    pointer-events: none;
    cursor: default;
  .content-dec
    display flex
    flex-direction row
    .content-tip
      color #c90010
      margin-left 10px
</style>
