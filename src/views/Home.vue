<template>
  <div class="home">
    <!-- 头部 -->
    <header class="headerbar">
        <div class="headerbar-left">
            <a href="/all.html">
                 <van-icon name="bars" class="iconfont"/>
            </a>
        </div>
        <div class="headerbar-logo"><img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"></div>
        <div class="headerbar-right" id="onlineChat">
           <div class="headerbar-right-kf active">
               <van-icon name="audio" class="iconfont"/>
           </div>
        </div>
    </header>


<!-- 轮播 -->
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item>
      <img src="https://img02.hua.com/slider/18_birthday_m.jpg?830" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://img02.hua.com/slider/17_banner_tc_m.jpg" alt="">
    </van-swipe-item>
    <van-swipe-item>
      <img src="https://img02.hua.com/slider/18_youflower_m.jpg?830" alt="">
    </van-swipe-item>
  </van-swipe>

<!-- 认证龙头企业 -->
   <div class="conpany-info">
        <div>
           <van-icon name="checked"  class="iconfont"/>
          认证龙头企业</div>
        <div>
          <van-icon name="checked"  class="iconfont"/>
          14年品牌</div>
        <div>
          <van-icon name="checked"  class="iconfont"/>
          3小时送花</div>
        <div>
          <van-icon name="checked"  class="iconfont"/>
          最近<a href="/productpj/"><u id="commentCount">334702</u></a>条好评</div>
   </div>

<!-- 首页导航 -->

<nav class="procate">
            <div class="procate-item">
                <a href="/flower/" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_flower.png" alt="鲜花">
                    <p>鲜花</p>
                </a>
            </div>
            <div class="procate-item">
                <a href="/yongshenghua/" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_ppf.png" alt="永生花">
                    <p>永生花</p>
                </a>
            </div>
            <div class="procate-item">
                <a href="/cake/" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_cake.png" alt="蛋糕">
                    <p>蛋糕</p>
                </a>
            </div>
            <div class="procate-item">
                <a href="/gifts/" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_gift.png" alt="礼品">
                    <p>礼品</p>
                </a>
            </div>
            <div class="procate-item">
                <a href="/gifts/chocolates/" class="navigation">
                    <img src="https://img02.hua.com/m/home/img/m_home_category_chocolate.png" alt="巧克力">
                    <p>巧克力</p>
                </a>
            </div>
    </nav>


<!-- 一秒选花 -->
<section class="scene">
        <div class="modetitle">一秒选花</div>

            <div class="scene-list">
                    <div class="scene-item scene-item-radius">
                        <a href="/aiqingxianhua/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_lover.png" alt="送恋人">
                            <span class="scene-item-use-title">送恋人</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="/songzhangbeixianhua/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_elder.png" alt="送长辈">
                            <span class="scene-item-use-title">送长辈</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="/youqingxianhua/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_friends.png" alt="送朋友">
                            <span class="scene-item-use-title">送朋友</span>
                        </a>
                    </div>
            </div>
        
            <div class="scene-list">
                    <div class="scene-item scene-item-radius">
                        <a href="/shengrixianhua/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_birthday.png?0718" alt="生日祝福">
                            <span class="scene-item-title">生日祝福</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="/biaobaiqiuhunxianhua/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_profess.png?0718" alt="表白求婚">
                            <span class="scene-item-title">表白求婚</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="/businessFlower/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_business.png?0718" alt="开业商务">
                            <span class="scene-item-title">开业商务</span>
                        </a>
                    </div>
                    <div class="scene-item scene-item-radius">
                        <a href="zhounianjinianxianhua" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_use_anniversary.png?0718" alt="周年纪念">
                            <span class="scene-item-title">周年纪念</span>
                        </a>
                    </div>
            </div>
        <!--mode-2-->

            <div class="scene-list">

                        <a href="/ranking/" class="scene-item scene-item-bg" style="background-image: url(https://img02.hua.com/m/home/img/m_home_ranklist.png?0718);">
                            <p class="scene-item-name">热销榜</p>
                            <p class="scene-item-desc">集万千宠爱</p>
                            <div class="scene-item-bottom">
                                <span class="scene-item-bottom-label">大家都在买</span>
                                <span class="scene-item-bottom-text">热销10.8万束</span>
                            </div>
                        </a>
                        <a href="/theme/tejiazhuanqu/" class="scene-item scene-item-bg" style="background-image: url(https://img02.hua.com/m/home/img/m_home_special.png?0718);">
                            <p class="scene-item-name">特价专区</p>
                            <p class="scene-item-desc">超值好货</p>
                            <div class="scene-item-bottom">
                                <span class="scene-item-bottom-label">限时直降</span>
                                <span class="scene-item-bottom-text" data-id="9012056" style="opacity: 1;">¥132<s>¥188</s></span>
                            </div>
                        </a>
            </div>
        <!--mode-3-->

            <div class="scene-list">
                    <div class="scene-item">
                        <a href="https://m.hua.com/theme/xinpinlaixi/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_category_new.png?0718" alt="新品来袭">
                            <span class="scene-item-pange">新品来袭</span>
                        </a>
                    </div>
                    <div class="scene-item">
                        <a href="https://m.hua.com/theme/pinweizhixuan/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_category_quality.png?0718" alt="品味之选">
                            <span class="scene-item-pange">品味之选</span>
                        </a>
                    </div>
                    <div class="scene-item">
                        <a href="https://m.hua.com/you/" class="navigation">
                            <img src="https://img02.hua.com/m/home/img/m_home_category_you.png?0718" alt="设计师臻选">
                            <span class="scene-item-pange">设计师臻选</span>
                        </a>
                    </div>
            </div>
    </section>




    <section class="product">
            <h3 class="product-title">送恋人/爱情鲜花</h3>
            <div class="product-list">
               <tgoodlist></tgoodlist>
            </div>
            <div class="product-more">
                <a href="/aiqingxianhua/" class="product-more-btn">查看更多</a>
            </div>
        </section>

    <tnav></tnav>
  </div>
</template>



<script>

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

import tnav from '@/components/t-nav.vue'
import tgoodlist from '@/components/t-goodlist.vue'

export default {
  name: 'home',
  components: {
    tnav,
    tgoodlist
  },
   created() {
    //  this.$axios
    //   .post("/home/GetProductListPrice")
    //   .then(res => {
    //     console.log(res);
    //   });

      // 发送 POST 请求
 this.axios({
  method: 'post',
  url: '/home/GetProductListPrice',
  data: {
    itemcodes: 9010966,9012177,9010011,9092112,9012154,9012243,9012055,9012009,9012201,9092149,9012204,9012092,9010736,9012440,1073247,1073185,1073033,1073244,5602016,5010023,5602045,5902028,1060038,1061019,1082001,1077029,1201002,1207010,1204041,1201003
  }
  }
}
</script>




<style>
@charset "utf-8";
/*  ==========
*   = 2018移动端首页样式代码 =
*   = time:2018-12-10 15:13:04 =
*   = auth:coldclub@hua.com =
*   ==========*/
body {
  width: 100%;
  max-width: 640px;
  padding: 0;
  margin: 0 auto;
  font-size: 14px;
  color: #232628;
  font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica, sans-serif;
  -webkit-tap-highlight-color: transparent;
}
body.overflow-hidden {
  overflow: hidden;
}
div,
ul,
ol,
dl,
p,
pre,
section,
article,
aside,
li,
nav,
input,
textarea {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
input,
textarea,
select {
  outline: none;
  appearance: none;
}
input::-webkit-autofill,
textarea::-webkit-autofill,
select::-webkit-autofill {
  background-color: transparent;
  background-image: none;
  color: inherit;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  line-height: 1em;
}
ul,
dl,
dt,
dd {
  list-style: none;
}
img {
  width: 100%;
  vertical-align: middle;
}
a {
  text-decoration: none;
  color: inherit;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  -webkit-focus-ring-color: transparent;
}
i,
em,
strong {
  font-style: normal;
}
.iconfont {
  font-size: inherit;
}
.navigation {
  display: block;
}
.text-overflow {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-overflow-line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.text-overflow-line3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
html,
body {
  background: #E9ECF0;
}
@media screen and (max-width: 267px) {
  html,
  body {
    font-size: 10px;
  }
}
@media screen and (min-width: 268px) and (max-width: 294px) {
  html,
  body {
    font-size: 11px;
  }
}
@media screen and (min-width: 295px) and (max-width: 321px) {
  html,
  body {
    font-size: 12px;
  }
}
@media screen and (min-width: 348px) and (max-width: 374px) {
  html,
  body {
    font-size: 13px;
  }
}
@media screen and (min-width: 375px) and (max-width: 401px) {
  html,
  body {
    font-size: 14px;
  }
}
@media screen and (min-width: 402px) and (max-width: 428px) {
  html,
  body {
    font-size: 15px;
  }
}
@media screen and (min-width: 429px) and (max-width: 455px) {
  html,
  body {
    font-size: 16px;
  }
}
@media screen and (min-width: 456px) and (max-width: 482px) {
  html,
  body {
    font-size: 17px;
  }
}
@media screen and (min-width: 483px) and (max-width: 508px) {
  html,
  body {
    font-size: 18px;
  }
}
@media screen and (min-width: 509px) and (max-width: 535px) {
  html,
  body {
    font-size: 19px;
  }
}
@media screen and (min-width: 536px) and (max-width: 562px) {
  html,
  body {
    font-size: 20px;
  }
}
@media screen and (min-width: 563px) and (max-width: 589px) {
  html,
  body {
    font-size: 21px;
  }
}
@media screen and (min-width: 590px) and (max-width: 616px) {
  html,
  body {
    font-size: 22px;
  }
}
@media screen and (min-width: 617px) and (max-width: 639px) {
  html,
  body {
    font-size: 23px;
  }
}
@media screen and (min-width: 640px) {
  html,
  body {
    font-size: 24px;
  }
}
.scrollbox {
  position: fixed;
  bottom: 7.14285714rem;
  right: 0.57142857rem;
  z-index: 10;
  display: none;
}
.scrollbox-item {
  display: block;
  width: 2.57142857rem;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  text-align: center;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
  cursor: pointer;
}
.scrollbox-item:active {
  background: #F7F9FA;
}
.scrollbox-item > .iconfont {
  font-size: 1.42857143rem;
}
.scrollbox-item + .scrollbox-item {
  margin-top: 2.28571429rem;
}
.iconfont {
  font-size: 1.14285714rem;
}
.navigation {
  display: block;
}
.text-overflow {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-overflow-line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.text-overflow-line3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.topbanner {
  position: relative;
  overflow: hidden;
  display: none;
}
.topbanner-close {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 12.8%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #CCCFD0;
}
.headerbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 3.42857143rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: #435448;
  overflow: hidden;
  color: #fff;
}
.headerbar .iconfont {
  font-size: 1.71428571rem;
}
.headerbar > .headerbar-logo {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
}
.headerbar > .headerbar-logo > img {
  width: 10.71428571rem;
}
.headerbar > .headerbar-left,
.headerbar > .headerbar-right {
  width: 3.42857143rem;
  height: 3.42857143rem;
  line-height: 3.42857143rem;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}
.headerbar-left {
  padding-left: 1rem;
}
.headerbar-right {
  padding-right: 1rem;
  text-align: right;
}
.headerbar-right-login,
.headerbar-right-user {
  display: none;
}
.headerbar-right-login a,
.headerbar-right-user a {
  height: 3.42857143rem;
}
.headerbar-right-login.active,
.headerbar-right-user.active {
  display: block;
}
.swiper-pagination-bullet {
  width: 0.42857143rem;
  height: 0.42857143rem;
  background: #fff;
  opacity: initial;
  border-radius: 2.28571429rem;
}
.swiper-pagination-bullet-active {
  background: #FF734C;
  width: 2.28571429rem;
}
.conpany-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 2.57142857rem;
  overflow: hidden;
  background: #fff;
}
.conpany-info > div {
  width: auto;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  text-align: center;
  font-size: 0.78571429rem;
}
.conpany-info > div .iconfont {
  vertical-align: middle;
}
.conpany-info > div > u {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  max-width: 3.92857143rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.conpany-info > div + div {
  margin-left: 0.85714286rem;
}
.procate {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  padding: 0.57142857rem 0;
}
.procate > .procate-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  font-size: 0.85714286rem;
}
.procate > .procate-item img {
  width: 2.57142857rem;
}
.festival {
  background: #fff;
}
.festival-list {
  padding: 12px 0.57142857rem;
}
.festival-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.festival-item {
  float: left;
  width: 50%;
  padding: 0 2px;
}
.festival-item:nth-child(2) ~ .festival-item {
  margin-top: 0.28571429rem;
}
.festival-item > .navigation {
  background: #fff;
  border-radius: 0.28571429rem;
}
.festival-item-name,
.festival-item-desc,
.festival-item-price {
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.festival-item .festival-item-name {
  font-weight: 400;
  padding-top: 0.85714286rem;
}
.festival-item .festival-item-desc {
  font-weight: 300;
  font-size: 0.85714286rem;
  color: #71797F;
}
.festival-item .festival-item-pic {
  padding-top: 0.57142857rem;
}
.festival-item .festival-item-price {
  font-weight: 500;
  padding-top: 0.85714286rem;
  color: #FF734C;
}
.festival-item.festival-item-horizontal > .navigation {
  padding: 0 0.85714286rem;
  height: 6.14285714rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
}
.festival-item.festival-item-vertical {
  width: 33.33333333%;
}
.festival-item.festival-item-vertical > .navigation {
  padding: 0 0.85714286rem;
  background-image: none !important;
  text-align: center;
}
.festival-item.festival-item-vertical .festival-item-price {
  padding: 8px 0 0.85714286rem;
}
.modetitle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.85714286rem;
  line-height: 1em;
  background: #fff;
  font-size: 1.14285714rem;
}
.modetitle:before {
  content: '';
  display: inline-block;
  width: 0.21428571rem;
  height: 1em;
  background: #435448;
  margin-right: 0.42857143rem;
}
.scene {
  background: #fff;
  padding-bottom: 1.14285714rem;
}
.scene > .scene-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0 6px;
}
.scene > .scene-list + .scene-list {
  margin-top: 0.57142857rem;
}
.scene-item {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  margin: 0 0.14285714rem;
  overflow: hidden;
}
.scene-item.scene-item-radius {
  border-radius: 0.28571429rem;
}
.scene-item.scene-item-bg {
  margin: 0;
  height: 9.57142857rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  padding: 0.85714286rem;
  border: 1px solid #E9ECF0;
}
.scene-item.scene-item-bg:nth-child(2n) {
  border-left: 0;
}
.scene-item-use-title {
  position: absolute;
  bottom: 0.28571429rem;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
}
.scene-item-title {
  position: absolute;
  top: 0.85714286rem;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scene-item-desc {
  font-size: 0.78571429rem;
  color: #71797F;
}
.scene-item-pange {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(35, 38, 40, 0.8);
  color: #fff;
  text-align: center;
  font-size: 0.85714286rem;
  padding: 0.28571429rem 0;
}
.scene-item-bottom {
  position: absolute;
  bottom: 0.85714286rem;
  left: 0.85714286rem;
  z-index: 1;
  font-size: 0.71428571rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.scene-item-bottom-label {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 2rem;
  background: #FF734C;
  padding: 0.07142857rem 0.42857143rem;
  color: #fff;
  margin-right: 2.14285714rem;
}
.scene-item-bottom-text > s {
  color: #B4BABF;
}
.product {
  margin-top: 0.57142857rem;
  background: #fff;
  padding-bottom: 1.42857143rem;
}
.product-title {
  font-size: 1.14285714rem;
  padding: 1.42857143rem 0;
  text-align: center;
  font-weight: normal;
}
.product-list {
  padding: 0 0.57142857rem 1.71428571rem;
}
.product-list.product-list-vertical {
  padding: 0 0.28571429rem 1.71428571rem;
}
.product-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.product-item > .navigation {
  overflow: hidden;
  -webkit-box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
  box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
  border-radius: 0.28571429rem;
}
.product-item-info-name {
  font-weight: 300;
}
.product-item-info-desc {
  font-size: 0.85714286rem;
  font-weight: 300;
}
.product-item-info-tags {
  font-size: 0;
}
.product-item-info-tags:empty {
  display: none;
}
.product-item-info-tags > span {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  border-radius: 10rem;
  border: 1px solid #FF734C;
  color: #FF734C;
  font-size: 0.71428571rem;
  padding: 0 0.28571429rem;
}
.product-item-info-tags > span + span {
  margin-left: 0.57142857rem;
}
.product-item-info-bottom {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.product-item-info-bottom-left {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.product-item-info-bottom-right {
  text-align: right;
}
.product-item-info-bottom .iconfont-buy {
  font-size: 1.42857143rem;
}
.product-item-info-prices > strong {
  font-size: 1.28571429rem;
  color: #FF734C;
  font-weight: 500;
}
.product-item-info-prices > s {
  font-size: 0.71428571rem;
  color: #71797F;
  margin-left: 0.42857143rem;
}
.product-item-info-sales {
  font-size: 0.71428571rem;
  color: #71797F;
}
.product-item.product-item-horizontal + .product-item.product-item-horizontal {
  margin-top: 0.85714286rem;
}
.product-item.product-item-horizontal > .navigation {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.product-item.product-item-horizontal .product-item-pic {
  width: 12.57142857rem;
  min-width: 12.57142857rem;
  max-width: 12.57142857rem;
}
.product-item.product-item-horizontal .product-item-info {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 13.07142857rem;
  padding: 0 1.42857143rem;
  position: relative;
}
.product-item.product-item-horizontal .product-item-info-name {
  padding-top: 1.28571429rem;
}
.product-item.product-item-horizontal .product-item-info-tags {
  margin-top: 0.42857143rem;
}
.product-item.product-item-horizontal .product-item-info-promo {
  margin-top: 0.85714286rem;
  padding: 0.71428571rem 0;
  border-top: 1px solid #E9ECF0;
  border-bottom: 1px solid #E9ECF0;
  font-size: 0.78571429rem;
  font-weight: 500;
}
.product-item.product-item-horizontal .product-item-info-bottom {
  position: absolute;
  left: 1.42857143rem;
  right: 1.42857143rem;
  bottom: 1.14285714rem;
  z-index: 1;
}
.product-item.product-item-vertical {
  float: left;
  width: 50%;
  padding: 0 0.28571429rem;
  margin-bottom: 0.57142857rem;
}
.product-item.product-item-vertical .product-item-pic {
  max-height: 13.57142857rem;
  overflow: hidden;
}
.product-item.product-item-vertical .product-item-info {
  padding: 0.57142857rem 0.57142857rem 1.14285714rem;
  height: 7.85714286rem;
  overflow: hidden;
  position: relative;
}
.product-item.product-item-vertical .product-item-info-tags {
  margin-bottom: 0.57142857rem;
}
.product-item.product-item-vertical .product-item-info-bottom {
  position: absolute;
  left: 0.57142857rem;
  right: 0.57142857rem;
  bottom: 1.14285714rem;
  z-index: 1;
}
.product-more-btn {
  display: block;
  margin: 0 auto;
  font-size: 0.85714286rem;
  border: 1px solid #232628;
  width: 6.71428571rem;
  height: 1.71428571rem;
  line-height: 1.71428571rem;
  text-align: center;
  border-radius: 0.14285714rem;
}
.brand {
  background: #fff;
}
.brand-title {
  font-size: 1.14285714rem;
  padding: 1.42857143rem 0;
  text-align: center;
  font-weight: normal;
}
.brand-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.brand-item {
  float: left;
  width: 33.33333333%;
  text-align: center;
  padding-bottom: 1.71428571rem;
}
.brand-item > img {
  width: 4.57142857rem;
  height: 4.57142857rem;
}
.brand-item > p {
  font-size: 0.85714286rem;
  margin-top: 0.28571429rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.footer {
  background: #fff;
  margin-top: 0.57142857rem;
  padding-bottom: 3.5rem;
}
.footer-links {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 1.42857143rem 0rem;
}
.footer-links-item {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.28571429rem 0.57142857rem;
  margin: 0 1rem;
  background: #E9ECF0;
  font-size: 0.85714286rem;
  text-align: center;
}
.footer-entry {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.footer-entry-item + .footer-entry-item {
  margin-left: 7.57142857rem;
}
.footer-entry-item {
  cursor: pointer;
  color: #232628;
  text-align: center;
}
.footer-entry-item .iconfont {
  display: block;
  width: 2.57142857rem;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  text-align: center;
  border-radius: 50%;
  background: #E9ECF0;
  font-size: 1.42857143rem;
}
.footer-entry-item p {
  font-size: 0.85714286rem;
  margin-top: 0.28571429rem;
}
.footer-copyright {
  padding: 1rem 0;
  font-size: 0.71428571rem;
  color: #B4BABF;
  text-align: center;
}
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 3.5rem;
  overflow: hidden;
  background: #F7F9FA;
}
.tabbar-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
}
.tabbar-item.active {
  color: #FF734C;
}
.tabbar-item.active .iconfont.iconfont-home::before {
  content: "\e662";
}
.tabbar-item.active .iconfont.iconfont-category::before {
  content: "\e65f";
}
.tabbar-item.active .iconfont.iconfont-smile::before {
  content: "\e665";
}
.tabbar-item > .navigation {
  height: 3.5rem;
  padding-top: 0.28571429rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabbar-item .iconfont {
  font-size: 1.71428571rem;
  margin-top: 0.42857143rem;
  position: relative;
}
.tabbar-item .iconfont[data-dot]::after {
  content: " ";
  width: 0.42857143rem;
  height: 0.42857143rem;
  padding: 0;
  min-width: auto;
}
.tabbar-item .iconfont::after {
  content: attr(data-cartnum);
  position: absolute;
  top: 0;
  left: 90%;
  min-width: 0.71428571rem;
  line-height: 1;
  padding: 0 0.14285714rem;
  font-size: 0.71428571rem;
  color: #fff;
  background: #FF734C;
  border-radius: 1rem;
}
.tabbar-item .iconfont::after:empty {
  display: none;
}
.tabbar-item p {
  font-size: 0.78571429rem;
}


.cart-elemnt {
  position: absolute;
  display: none;
  z-index: 9999;
  left: -999px;
  top: -999px;
  width: 0.85714286rem;
  height: 0.85714286rem;
  border-radius: 50%;
  background-color: #FF734C;
}

.product-item-info-prices {
  opacity: 0;
}

.product-item-info-tags .tag-promo {
  background-color: #FF734C;
  color: #fff;
}

.topbanner-title {
  position: absolute;
  top: 30%;
  left: 22%;
  width: 55%;
  font-size: 1rem;
  font-weight: 500;
}

.topbanner-btn {
  box-sizing: border-box;
  position: absolute;
  top: 25%;
  right: 4%;
  width: 18%;
  height: 50%;
  line-height: 1.71428571rem;
  border: 1px solid #232628;
  font-size: 0.85714286rem;
  text-align: center;
  border-radius: 2px;
}


</style>