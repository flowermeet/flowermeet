<template>
  <div>
    <!-- 头部组件位置 -->
    <header class="headerbar">
      <div class="headerbar-left">
        <a href="javascript:huatools.navigateBack();" class="navigation">
          <van-icon name="arrow-left" />
        </a>
      </div>
      <div class="headerbar-center">
        <p class="headerbar-content">
          <a href="/">
            <img
              class="headerbar-logo"
              src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
              alt="hua.com,logo"
            />
          </a>
        </p>
      </div>

      <div class="headerbar-right">
        <div onclick="huatools.toggleCategoryMenu();" class="navigation headerbar-menu-toggle">
          <i class="iconfont iconfont-menu"></i>
          <!--HeaderBarMenu-->
          <nav class="headerbar-menu" id="headerbarMenu">
            <div class="headerbar-menu-item">
              <a href="/" class="navigation">
                <i class="iconfont iconfont-home"></i>
                <span>首页</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/all.html" class="navigation">
                <i class="iconfont iconfont-category"></i>
                <span>分类搜索</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/Shopping/ShowCart/" class="navigation">
                <i class="iconfont iconfont-shopcart" id="cartCount"></i>
                <span>购物车</span>
              </a>
            </div>
            <div class="headerbar-menu-item">
              <a href="/member/membercenter/" class="navigation">
                <i class="iconfont iconfont-smile"></i>
                <span>我的</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <!-- 轮播 -->
    <!--Banner-->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="https://img01.hua.com/uploadpic/newpic/9010855.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img01.hua.com/uploadpic/newpic/201806191207082187.jpg" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://img01.hua.com/uploadpic/newpic/201806191045164671.jpg " />
      </van-swipe-item>
    </van-swipe>
    <!-- 产品价格以及标题 -->
    <section class="proinfo">
      <div class="proinfo-head">
        <div class="proinfo-head-title">
          不变的承诺-99枝红玫瑰
          <span class="text-orange">经典99枝，鼎力推荐！</span>
        </div>
        <div class="proinfo-head-collect">
          <a href="javascript:;" class="navigation">
            <i class="iconfont iconfont-collect"></i>
          </a>
        </div>
      </div>
      <div class="proinfo-body">
        <div class="proinfo-body-price">
          <span class="proinfo-body-price-sjg">¥539</span>
          <s class="proinfo-body-price-jg">¥766</s>
        </div>
        <div class="proinfo-body-sales">
          已售
          <span>6.10万</span>件
        </div>
      </div>
    </section>
    <div onclick="GotoApp()" class="media">
      <div class="media-left">
        <i class="iconfont iconfont-iphone"></i>
      </div>
      <div class="media-center">
        <font class="fontsize-16">
          APP下单立减
          <i>11</i>元
        </font>
      </div>
      <div class="media-right">
        <i class="iconfont iconfont-arrow-right"></i>
      </div>
    </div>
    <!-- 花语 -->
    <section class="detailsinfo">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">花语</div>
        <div
          class="detailsinfo-item-desc"
        >下雨的时候，给她撑一把雨伞；寒冷的时候，给她一个温暖的臂弯；天黑了，永远有一盏灯为她点亮；晨起时，给她一缕温暖的阳光。爱她，就送她一束99枝的玫瑰花！</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">材料</div>
        <div class="detailsinfo-item-desc">99枝红玫瑰</div>
      </div>
      <div class="detailsinfo-item hidden" data-toggle="true">
        <div class="detailsinfo-item-title">配送</div>
        <div class="detailsinfo-item-desc">全国</div>
        <div class="detailsinfo-item-right"></div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">附送</div>
        <div class="detailsinfo-item-desc">下单填写留言，即免费赠送精美贺卡！</div>
      </div>
    </section>
    <!-- 选择配送地址 -->
    <section></section>
    <!-- 产品图文详情 -->
    <section class="panel">
      <div class="panel-head">
        <div class="panel-head-title">图文详情</div>
      </div>
      <div class="panel-body">
        <div class="proimgdetails">
          <img
            src="https://img01.hua.com/uploadpic/images/by_20190904094653787.jpg"
            data-original="https://img01.hua.com/uploadpic/images/by_20190904094653787.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/by_2019090317591249.jpg"
            data-original="https://img01.hua.com/uploadpic/images/by_2019090317591249.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126113526406778.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126113526406778.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126113645949118.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126113645949118.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/20178111731418207965.jpg"
            data-original="https://img01.hua.com/uploadpic/images/20178111731418207965.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/by_20180703175901652.jpg"
            data-original="https://img01.hua.com/uploadpic/images/by_20180703175901652.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126115465741705.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126115465741705.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126115565531573.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126115565531573.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126116449249498.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126116449249498.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/by_20180719152944968.jpg"
            data-original="https://img01.hua.com/uploadpic/images/by_20180719152944968.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126117359896636.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126117359896636.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/by_20180719152952685.jpg"
            data-original="https://img01.hua.com/uploadpic/images/by_20180719152952685.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126121584402853.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126121584402853.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img01.hua.com/uploadpic/images/201708111126123890710878.jpg"
            data-original="https://img01.hua.com/uploadpic/images/201708111126123890710878.jpg"
            alt="产品详情图"
            style
          />
          <img
            src="https://img02.hua.com/pc/images/xianhua_cardstyle.jpg"
            data-original="https://img02.hua.com/pc/images/xianhua_cardstyle.jpg"
            alt="产品详情图"
            style
          />
        </div>
      </div>
    </section>
    <!-- 企业介绍 -->
    <section class="disseminate">
      <div class="well">
        <div class="well-title well-title-bb">龙头企业认证·14年品牌</div>
        <div class="well-body">
          <p>始于2005，多次获中国电子商务协会“鲜花龙头企业”认证。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_01.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_01.png"
            alt="鲜花龙头企业"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">12道品控标准 + 送前实拍</div>
        <div class="well-body">
          <p>行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送、售后全程覆盖，将产品及服务标准化；每束花均实拍回传总部审核，符合品控标准方可送出。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_02.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_02.png"
            alt="送前实拍"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">花艺设计团队</div>
        <div class="well-body">
          <p>国内领先的原创花艺：中国花艺博览会赛事冠军花艺师打造团队，坚持原创设计，创作花款迄今已畅销千万束。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_03.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_03.png"
            alt="花艺设计团队"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">当日新鲜花材制作，极速送达</div>
        <div class="well-body">
          <p>门店覆盖全国2000+城市，鲜花皆由当地门店花艺师在配送当日使用新鲜A级花材制作，确保鲜花娇艳欲滴！并由专人专车送货上门，最快1小时送达，快人一步！</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_04.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_04.png"
            alt="新鲜花材"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">客服团队</div>
        <div class="well-body">
          <p>建设一支较其他电商更大规模的客服团队，将常规客服升级为售前订花顾问、售中专人跟单、售后快速响应的一站式管家客服模式。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_05.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_05.png"
            alt="客服团队"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">优秀平台汇聚优秀人才</div>
        <div class="well-body">
          <p>我们相信优秀的平台环境可以吸引同样气质、热爱花礼行业的优秀人才。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_06.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_06.png"
            alt="优秀平台汇聚优秀人才"
            style
          />
        </div>
      </div>
      <div class="well">
        <div class="well-title well-title-bb">不只鲜花 · 跨界音乐微电影</div>
        <div class="well-body">
          <p>联合GIMC打造“勇敢爱”系列原创微电影、赞助《不要音乐》大型音乐旅行节目，全网播放超5000万次。</p>
          <img
            src="https://img02.hua.com/m/pro_detail/m_details_point_07.png"
            data-original="https://img02.hua.com/m/pro_detail/m_details_point_07.png"
            alt="跨界音乐微电影"
            style
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);

import { Icon } from "vant";
Vue.use(Icon);

export default {
    props:["datalist"],
    data() {
        return {
            glist:[]
        }
    },
    created() {
        // console.log(this.$route.params)
        let idx = this.$route.params.idx;
        console.log(datalist[idx]);
        this.glist = datalist[idx];
    },
};
</script>
<style lang="scss">
@charset "utf-8";

/*  ==========
*   = 2018移动端详情页样式代码 =
*   = time:2018-12-24 14:04:57=
*   = url:/product/xxxx.html=
*   ==========*/

body {
  width: 100%;
  max-width: 640px;
  padding: 0;
  margin: 0 auto;
  font-size: 14px;
  color: #232628;
  font-family: SourceHanSansCN, -apple-system, Verdana, Arial, Helvetica,
    sans-serif;
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
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
input,
textarea,
select {
  outline: none;
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
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-overflow-line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-overflow-line3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
}
html,
body {
  background: #e9ecf0;
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
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
  box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
  cursor: pointer;
}
.scrollbox-item:active {
  background: #f7f9fa;
}
.scrollbox-item > .iconfont {
  font-size: 1.42857143rem;
}
.scrollbox-item + .scrollbox-item {
  margin-top: 2.28571429rem;
}
[v-clock] {
  display: none;
}
.fontsize-16 {
  font-size: 1.14285714rem;
}
.fontsize-12 {
  font-size: 0.85714286rem;
}
.text-orange {
  color: #ff734c;
}
.text-gray1 {
  color: #232628;
}
.text-gray2 {
  color: #71797f;
}
.text-gray3 {
  color: #b4babf;
}
.mt-8 {
  margin-top: 0.57142857rem;
}
.headerbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  background: #fff;
}
.headerbar-left,
.headerbar-right {
  width: 6.28571429rem;
  height: 3.14285714rem;
  font-size: 0;
}
.headerbar-left > .navigation,
.headerbar-right > .navigation {
  display: inline-block;
  width: 3.14285714rem;
  height: 3.14285714rem;
  text-align: center;
}
.headerbar-left > .navigation .iconfont,
.headerbar-right > .navigation .iconfont {
  font-size: 1.42857143rem;
}
.headerbar-left {
  text-align: left;
}
.headerbar-right {
  text-align: right;
}
.headerbar-center {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 14.14285714rem;
  max-width: -webkit-calc(100% - 12.57142857rem);
  max-width: -moz-calc(100% - 12.57142857rem);
  max-width: calc(100% - 12.57142857rem);
  text-align: center;
}
.headerbar-content {
  font-size: 1.14285714rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.headerbar-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0.57142857rem;
  z-index: 9;
  background: #fff;
  border: 1px solid #e9ecf0;
  -webkit-border-radius: 0.28571429rem;
  -moz-border-radius: 0.28571429rem;
  border-radius: 0.28571429rem;
  -webkit-box-shadow: 0 4px 12px 0 #e9ecf0;
  box-shadow: 0 4px 12px 0 #e9ecf0;
}
.headerbar-menu.active {
  display: block;
}
.headerbar-menu::before {
  content: "";
  position: absolute;
  top: -0.28571429rem;
  right: 0.85714286rem;
  width: 0.28571429rem;
  height: 0.28571429rem;
  background: #fff;
  border-top: 1px solid #e9ecf0;
  border-left: 1px solid #e9ecf0;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
.headerbar-menu-toggle {
  position: relative;
}
.headerbar-menu-item {
  width: 6.85714286rem;
  height: 3.42857143rem;
  text-align: left;
}
.headerbar-menu-item > .navigation {
  padding: 0 0.85714286rem;
  font-size: 14px;
  color: #232628;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.headerbar-menu-item > .navigation > .iconfont {
  vertical-align: middle;
}
.headerbar-menu-item > .navigation > span {
  margin-left: 0.42857143rem;
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
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: #fff;
  -webkit-box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
  box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
  cursor: pointer;
}
.scrollbox-item:active {
  background: #f7f9fa;
}
.scrollbox-item > .iconfont {
  font-size: 1.42857143rem;
}
.scrollbox-item + .scrollbox-item {
  margin-top: 2.28571429rem;
}
.headerbar-logo {
  width: auto;
  height: 1.42857143rem;
  max-width: 10.71428571rem;
}
.probanner-pagination {
  position: absolute;
  bottom: 1rem;
  right: 0.57142857rem;
  z-index: 2;
  width: 2.57142857rem;
  height: 1.28571429rem;
  line-height: 1.28571429rem;
  background-color: rgba(255, 255, 255, 0.7);
  font-size: 0.85714286rem;
  -webkit-border-radius: 0.14285714rem;
  -moz-border-radius: 0.14285714rem;
  border-radius: 0.14285714rem;
  text-align: center;
  letter-spacing: 2px;
  overflow: hidden;
  text-overflow: clip;
  white-space: nowrap;
}
.probanner-video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: none;
}
.probanner-video-playbtn {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  bottom: 2.14285714rem;
  text-align: center;
}
.probanner-video-playbtn-box {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.14285714rem 0.71428571rem 0.14285714rem 0.14285714rem;
  -webkit-border-radius: 10rem;
  -moz-border-radius: 10rem;
  border-radius: 10rem;
  cursor: pointer;
}
.probanner-video-playbtn-btn {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border: 2px solid #232628;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
}
.probanner-video-playbtn-btn .iconfont {
  font-size: 1.14285714rem;
}
.probanner-video-playbtn-btn .iconfont:before {
  content: "\e669";
}
.probanner-video-muted {
  position: absolute;
  bottom: 4.57142857rem;
  right: 0.57142857rem;
  z-index: 10;
  width: 2.28571429rem;
  height: 2.28571429rem;
  line-height: 2.28571429rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.probanner-video-muted .iconfont {
  font-size: 1.14285714rem;
}
.probanner-video-muted .iconfont:before {
  content: "\e656";
}
.probanner-video-muted.active .iconfont:before {
  content: "\e657";
}
.probanner-video-close {
  position: absolute;
  top: 1.42857143rem;
  right: 0.57142857rem;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
  -webkit-border-radius: 10rem;
  -moz-border-radius: 10rem;
  border-radius: 10rem;
  font-size: 0.85714286rem;
  padding: 0.14285714rem 0.28571429rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}
.probanner-video-player {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  overflow: hidden;
  display: none;
}
.probanner .video-js {
  color: #232628;
}
.probanner .video-js button {
  outline: none;
}
.probanner .video-js .vjs-control-bar {
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  -webkit-transition: all 0.3s !important;
  -o-transition: all 0.3s !important;
  -moz-transition: all 0.3s !important;
  transition: all 0.3s !important;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.probanner .video-js .vjs-play-progress {
  background: #ff734c;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff734c),
    to(#ff3d12)
  );
  background: -webkit-linear-gradient(left, #ff734c 0%, #ff3d12 100%);
  background: -moz-linear-gradient(left, #ff734c 0%, #ff3d12 100%);
  background: -o-linear-gradient(left, #ff734c 0%, #ff3d12 100%);
  background: linear-gradient(90deg, #ff734c 0%, #ff3d12 100%);
}
.probanner .video-js .vjs-play-progress-holder {
  -ms-touch-action: none;
  touch-action: none;
  pointer-events: none;
}
.probanner .video-js .vjs-play-progress:before {
  color: #fff;
}
.probanner .video-js .vjs-slider,
.probanner .video-js .vjs-load-progress {
  background-color: #71797f;
}
.probanner .video-js .vjs-slider div,
.probanner .video-js .vjs-load-progress div {
  background-color: #71797f;
}
.probanner .video-js .vjs-time-control {
  display: block;
  font-size: 0.85714286em;
  height: auto;
  line-height: 3em;
  padding-top: 0.14285714em;
  padding: 0;
}
.probanner .video-js .vjs-time-control.vjs-time-divider {
  min-width: auto;
}
.probanner .video-js .vjs-volume-panel,
.probanner .video-js .vjs-remaining-time,
.probanner .video-js .vjs-big-play-button {
  display: none;
}
.probanner .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {
  opacity: 1;
  height: 0.3em;
}
.probanner .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-progress-holder {
  margin: 0;
}
.probanner
  .vjs-has-started.vjs-user-inactive.vjs-playing
  .vjs-play-progress:before,
.probanner .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-time-control,
.probanner .vjs-has-started.vjs-user-inactive.vjs-playing .vjs-play-control,
.probanner
  .vjs-has-started.vjs-user-inactive.vjs-playing
  .vjs-fullscreen-control {
  display: none;
}
.proinfo {
  padding: 0.85714286rem 1.14285714rem;
  background: #fff;
  margin-bottom: 1px;
}
.proinfo-head {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.proinfo-head-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.proinfo-head-collect {
  width: 2.85714286rem;
  min-height: 1.42857143rem;
  height: 100%;
  text-align: right;
}
.proinfo-head-collect .iconfont {
  font-size: 1.42857143rem;
}
.proinfo-head-collect .navigation.active .iconfont {
  color: #ff734c;
}
.proinfo-head-collect .navigation.active .iconfont:before {
  content: "\e66e";
}
.proinfo-body {
  margin-top: 0.85714286rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.proinfo-body-price {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0;
}
.proinfo-body-price-sjg {
  font-size: 1.42857143rem;
  color: #ff734c;
  font-weight: 600;
}
.proinfo-body-price-jg {
  color: #b4babf;
  margin-left: 0.42857143rem;
  font-size: 1rem;
  margin-right: 1.14285714rem;
}
.proinfo-body-sales {
  width: 8em;
  font-size: 0.85714286rem;
  text-align: right;
}
.proinfo-footer {
  margin-top: 0.85714286rem;
}
.proinfo-doubleprice {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.proinfo-doubleprice-item {
  width: auto;
  height: 2.28571429rem;
  line-height: 2.28571429rem;
  -webkit-border-radius: 0.14285714rem;
  -moz-border-radius: 0.14285714rem;
  border-radius: 0.14285714rem;
  font-size: 0.85714286rem;
  border: 1px solid #232628;
  padding: 0 0.57142857rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.proinfo-doubleprice-item + .proinfo-doubleprice-item {
  margin-left: 0.57142857rem;
}
.proinfo-doubleprice-item:active {
  background-color: #f7f9fa;
}
.proinfo-doubleprice-item.active {
  color: #ff734c;
  border-color: #ff734c;
}
.label {
  display: inline-block;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  border-radius: 1em;
  font-size: 0.71428571rem;
  font-weight: 300;
  background-color: #3d4d42;
  color: #fff;
  padding: 1px 0.42857143rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.label:empty {
  display: none;
}
.label + .label {
  margin-left: 0.57142857rem;
}
.media {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  padding: 1rem 1.14285714rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.media + .media {
  position: relative;
}
.media + .media:before {
  content: "";
  position: absolute;
  left: 4.14285714rem;
  right: 1.14285714rem;
  top: 0;
  height: 0;
  display: block;
  border-top: 1px solid #e9ecf0;
}
.media:active {
  background-color: #f7f9fa;
}
.media-left {
  width: 3rem;
  min-width: 3rem;
  font-size: 0.85714286rem;
  font-weight: 500;
  line-height: 1.42857143rem;
}
.media-left .iconfont {
  font-size: 1.28571429rem;
  line-height: initial;
  margin-left: 0.21428571rem;
}
.media-center {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.media-right {
  width: 1.42857143rem;
  text-align: right;
  font-size: 1.14285714rem;
}
.media-right .iconfont-arrow-right {
  font-size: 0.85714286rem;
}
.media-desc {
  font-size: 0.85714286rem;
  padding-left: 1.42857143rem;
  margin-top: 0.28571429rem;
}
.detailsinfo {
  margin-top: 0.57142857rem;
  background: #fff;
  padding: 0.57142857rem 1.14285714rem;
}
.detailsinfo-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 0.85714286rem;
  position: relative;
}
.detailsinfo-item.hidden:active {
  background-color: #f7f9fa;
}
.detailsinfo-item.hidden .detailsinfo-item-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detailsinfo-item.hidden .detailsinfo-item-right .iconfont:before {
  content: "\e638";
}
.detailsinfo-item-title {
  width: 3rem;
  min-width: 3rem;
  font-weight: 500;
  color: #232323;
  padding: 0.85714286rem 0;
}
.detailsinfo-item-desc {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0.85714286rem 0;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.detailsinfo-item-right {
  width: 1.71428571rem;
  text-align: right;
  padding: 0.85714286rem 0;
}
.detailsinfo-item-right .iconfont:before {
  content: "\e637";
}
.detailsinfo-item + .detailsinfo-item:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 2.85714286rem;
  right: 0;
  height: 0;
  border-bottom: 1px solid #e9ecf0;
}
.coupon {
  display: inline-block;
  color: #ff734c;
  padding: 0.28571429rem 0.71428571rem;
  border: 1px solid #ff734c;
  -webkit-border-radius: 0.14285714rem;
  -moz-border-radius: 0.14285714rem;
  border-radius: 0.14285714rem;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  font-size: 0.85714286rem;
}
.coupon + .coupon {
  margin-left: 0.42857143rem;
}
.coupon:after,
.coupon:before {
  content: "";
  position: absolute;
  top: 50%;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  border-bottom: 1px solid #ff734c;
  border-right: 1px solid #ff734c;
  width: 0.57142857rem;
  height: 0.57142857rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background-color: #fff;
}
.coupon:after {
  left: 100%;
  margin-top: -0.28571429rem;
  margin-left: -0.28571429rem;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}
.coupon:before {
  right: -webkit-calc(100% - 0.285714rem);
  right: -moz-calc(100% - 0.285714rem);
  right: calc(100% - 0.285714rem);
  margin-top: -0.28571429rem;
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.skuselect {
  margin-top: 0.57142857rem;
}
.panel {
  background-color: #fff;
  margin-top: 0.57142857rem;
}
.panel-head {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0.85714286rem 1.14285714rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.panel-head-title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 1.14285714rem;
}
.panel-head-link {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.85714286rem;
  color: #71797f;
  text-align: right;
}
.panel-body {
  border-top: 1px solid #e9ecf0;
}
.comments-item {
  padding: 0.85714286rem 1.14285714rem;
  background-color: #fff;
}
.comments-item + .comments-item {
  border-top: 1px solid #e9ecf0;
}
.comments-item-head {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.comments-item-head-left {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.comments-item-head-right {
  width: 4.28571429rem;
  max-width: 4.28571429rem;
  min-width: 4.28571429rem;
  height: 0.64285714rem;
  overflow: hidden;
  text-align: right;
}
.comments-item-head-pic {
  width: 1.42857143rem;
  height: 1.42857143rem;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  overflow: hidden;
}
.comments-item-head-name {
  font-size: 0.85714286rem;
  margin-left: 0.57142857rem;
}
.comments-item-head-star {
  display: block;
  width: 4.28571429rem;
  max-width: 4.28571429rem;
  min-width: 4.28571429rem;
  height: 0.64285714rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}
.comments-item-head-star.star1 {
  background-image: url("https://img02.hua.com/m/pro_detail/star1.png");
}
.comments-item-head-star.star2 {
  background-image: url("https://img02.hua.com/m/pro_detail/star2.png");
}
.comments-item-head-star.star3 {
  background-image: url("https://img02.hua.com/m/pro_detail/star3.png");
}
.comments-item-head-star.star4 {
  background-image: url("https://img02.hua.com/m/pro_detail/star4.png");
}
.comments-item-head-star.star5 {
  background-image: url("https://img02.hua.com/m/pro_detail/star5.png");
}
.comments-item-content {
  margin-top: 0.85714286rem;
  font-size: 0.92857143rem;
}
.comments-item-imglist {
  margin-top: 1rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
}
.comments-item-imglist-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 5.71428571rem;
  height: 5.71428571rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.comments-item-imglist-item > a {
  display: block;
  width: 5.71428571rem;
  height: 5.71428571rem;
}
.comments-item-imglist-item + .comments-item-imglist-item {
  margin-left: 0.57142857rem;
}
.comments-item-imglist-item:nth-child(4) ~ .comments-item-imglist-item {
  display: none;
}
.comments-item-imglist-num {
  position: absolute;
  right: 0.28571429rem;
  bottom: 0.28571429rem;
  color: #fff;
  background-color: rgba(73, 73, 73, 0.8);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  font-size: 0.71428571rem;
  padding: 0 0.42857143rem;
}
.comments-item-address {
  margin-top: 0.57142857rem;
  color: #b4babf;
  font-size: 0.78571429rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.comments-item-address .iconfont-address {
  margin-right: 0.14285714rem;
}
.comments-more {
  text-align: center;
  padding: 0.57142857rem 0 1.71428571rem;
}
.comments-more:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.comments-more > a {
  display: inline-block;
  font-size: 0.85714286rem;
  border: 1px solid #232628;
  padding: 0.28571429rem 0.57142857rem;
  -webkit-border-radius: 0.14285714rem;
  -moz-border-radius: 0.14285714rem;
  border-radius: 0.14285714rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.comments-more > a:active {
  background-color: #f7f9fa;
}
.well {
  background-color: #fff;
}
.well-title {
  text-align: center;
  padding: 1.71428571rem 1.14285714rem 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.well-title-bb {
  font-size: 1.28571429rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media screen and (min-width: 640px) {
  .well-title-bb {
    font-weight: normal;
  }
}
.well-title-bb:after {
  content: "";
  position: absolute;
  bottom: 0.57142857rem;
  left: 0;
  right: 0;
  width: 3.42857143rem;
  margin: 0 auto;
  height: 0;
  border-bottom: 1px solid #d8d8d8;
}
.well-title h4 {
  display: inline-block;
  font-size: 1.14285714rem;
  font-weight: 400;
  padding: 0 0.85714286rem;
}
.well-body {
  padding: 0 1.14285714rem 1.14285714rem;
}
.well-body > p {
  font-size: 0.85714286rem;
}
.well-body > img {
  margin-top: 1.42857143rem;
}
.brandlist:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.brandlist-item {
  float: left;
  width: 33.33333333%;
  text-align: center;
  margin-top: 1.71428571rem;
}
.brandlist-item > img {
  width: 4.57142857rem;
  height: 4.57142857rem;
}
.brandlist-item > p {
  font-size: 0.85714286rem;
  padding: 0.14285714rem 0 0.28571429rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.proimgdetails {
  font-size: 0;
}
.disseminate {
  padding-bottom: 3.57142857rem;
}
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 3.5rem;
  overflow: hidden;
  background: #f7f9fa;
}
.tabbar:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.tabbar-left,
.tabbar-right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.tabbar-left {
  float: left;
  width: 40%;
}
.tabbar-left .tabbar-item + .tabbar-item {
  position: relative;
}
.tabbar-left .tabbar-item + .tabbar-item:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 0;
  border-left: 1px solid #e9ecf0;
}
.tabbar-right {
  float: left;
  width: 60%;
}
.tabbar-item {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  height: 3.5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 0.57142857rem;
}
.tabbar-item.tabbar-item-block {
  padding: 0;
  line-height: 3.5rem;
  background-color: #3d4d42;
  color: #fff;
}
.tabbar-item.tabbar-item-block.tabbar-item-orange {
  background-color: #ff734c;
}
.tabbar-item.tabbar-item-block.tabbar-item-gray {
  background-color: #71797f;
}
.tabbar-item.active {
  color: #ff734c;
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
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tabbar-item .iconfont {
  min-width: 100%;
  font-size: 1.42857143rem;
  position: relative;
}
.tabbar-item .iconfont[data-dot="true"]::after {
  content: " ";
  width: 0.42857143rem;
  height: 0.42857143rem;
  padding: 0;
  min-width: auto;
}
.tabbar-item .iconfont::after {
  content: attr(data-num);
  position: absolute;
  top: 0;
  left: 90%;
  min-width: 0.71428571rem;
  line-height: 1;
  padding: 0 0.14285714rem;
  font-size: 0.71428571rem;
  color: #fff;
  background: #ff734c;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  border-radius: 1rem;
}
.tabbar-item .iconfont::after:empty {
  display: none;
}
.tabbar-item p {
  font-size: 0.78571429rem;
}
body.modal-open {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: none;
}
.modal.active {
  display: block;
}
.modal-shade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(35, 38, 40, 0.8);
}
.modal-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  -webkit-animation: slideUp 0.25s;
  -moz-animation: slideUp 0.25s;
  -o-animation: slideUp 0.25s;
  animation: slideUp 0.25s;
}
.modal-close {
  position: absolute;
  right: 1.14285714rem;
  top: 1.14285714rem;
  width: 1.14285714rem;
  height: 1.14285714rem;
  overflow: hidden;
}
.modal-close .iconfont-closed {
  font-size: 1.14285714rem;
}
@-webkit-keyframes slideUp {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
}
@-moz-keyframes slideUp {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
}
@-o-keyframes slideUp {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
}
@keyframes slideUp {
  from {
    bottom: -100%;
  }
  to {
    bottom: 0;
  }
}
.skumodal {
  padding-bottom: 4.85714286rem;
}
.skumodal-scroll {
  max-height: 50vh;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
  overflow-x: hidden;
  overflow-y: auto;
}
.skumodal-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 640px;
  margin: 0 auto;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1.14285714rem;
}
.skumodal-info-pic {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 5.71428571rem;
  height: 6.28571429rem;
  overflow: hidden;
}
.skumodal-info-desc {
  margin-left: 1.71428571rem;
}
.skumodal-info-desc-price {
  color: #ff734c;
}
.skumodal-info-desc-name {
  font-size: 0.85714286rem;
  margin-top: 0.42857143rem;
}
.skumodal-options {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 1.14285714rem;
}
.skumodal-options-title {
  font-size: 0.85714286rem;
  font-weight: 300;
  color: #71797f;
}
.skumodal-options-list {
  margin: 0.85714286rem -0.5rem 0;
}
.skumodal-options-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.skumodal-options-item {
  float: left;
  width: 7.42857143rem;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  background-color: #f7f9fa;
  font-size: 0.85714286rem;
  border: 1px solid #f7f9fa;
  text-align: center;
  -webkit-border-radius: 0.14285714rem;
  -moz-border-radius: 0.14285714rem;
  border-radius: 0.14285714rem;
  margin: 0 0.5rem 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.skumodal-options-item.skumodal-options-item-wide {
  width: auto;
  padding: 0 0.85714286rem;
}
.skumodal-options-item:active {
  background-color: #f7f9fa;
}
.skumodal-options-item.active {
  border-color: #ff734c;
  background-color: #fff;
  color: #ff734c;
}
.skumodal-btngroup {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.skumodal-btngroup-btn {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  background-color: #3d4d42;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.skumodal-btngroup-btn.skumodal-btngroup-btn-orange {
  background-color: #ff734c;
}
.skumodal-btngroup-btn.skumodal-btngroup-btn-gray {
  background-color: #71797f;
}
.citytips {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 14px;
  display: none;
}
.citytips.active {
  display: block;
  z-index: 19891016;
}
.citytips-content {
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: #fff;
  overflow: hidden;
  color: #232628;
  height: 373px;
}
.citytips-content-close {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  cursor: pointer;
}
.citytips-content-title {
  width: 100%;
  height: 36px;
  line-height: 36px;
  color: #ff734c;
  text-align: center;
}
.citytips-content-box {
  padding: 16px;
}
.citytips-content-btn {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ff734c;
  color: #fff;
  font-size: 16px;
  text-align: center;
  height: 44px;
  line-height: 44px;
}
.promo-info {
  margin-top: 0.57142857rem;
  border-bottom: 0.07142857rem solid #e9ecf0;
}
.promo-info .media {
  padding: 0.57142857rem 1.14285714rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 0;
}
.promo-info .promo-good-img {
  display: inline-block;
  vertical-align: top;
  text-align: center;
}
.promo-info .promo-good-img img {
  width: 4.42857143rem;
}
.promo-info .promo-good-img p {
  width: 6.14285714rem;
  font-size: 0.85714286rem;
  line-height: 1.14285714rem;
  margin-top: 0.28571429rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.promo-info .promo-good-info {
  display: inline-block;
  max-width: 9.64285714rem;
  padding-left: 0.85714286rem;
  margin-top: 1.14285714rem;
  vertical-align: top;
}
.promo-info .promo-good-title {
  width: 100%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.85714286rem;
  line-height: 1.21428571rem;
}
.promo-info .promo-good-price {
  margin-top: 0.28571429rem;
}
.promo-info .promo-good-price .text-bold {
  color: #ff734c;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.42857143rem;
}
.promo-info .promo-good-price .text-gray {
  color: #b4babf;
  font-size: 0.85714286rem;
  line-height: 1.21428571rem;
  margin-left: 0.35714286rem;
  text-decoration: line-through;
}
.promo-info .promo-add-cart {
  display: inline-block;
  width: 4.42857143rem;
  height: 1.57142857rem;
  border: 0.07142857rem solid #ff734c;
  color: #ff734c;
  text-align: center;
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
  border-radius: 0.14285714rem;
}
.promo-info .huangou .promo-add-cart {
  float: right;
  margin-top: 1.57142857rem;
}
.promo-info .huangou .media-right {
  margin-left: 0.71428571rem;
}
.promo-info .icon-add {
  display: inline-block;
  padding: 2.07142857rem 0.42857143rem 0;
  vertical-align: top;
}
.promo-info .icon-add .iconfont-add {
  font-size: 1rem;
}
.promo-info .promo-right {
  float: right;
  width: 4.57142857rem;
  padding-top: 0.71428571rem;
  vertical-align: top;
  text-align: center;
}
.promo-info .promo-right .promo-totalprice {
  font-size: 1rem;
  line-height: 1.14285714rem;
  color: #ff734c;
  font-weight: bold;
}
.promo-info .promo-right .promo-add-cart {
  margin-top: 0.57142857rem;
  margin-right: 0;
}
.promo-info .promo-right .promo-saveprice {
  margin-top: 1rem;
  font-size: 0.85714286rem;
  line-height: 1rem;
  color: #b4babf;
}
</style>
