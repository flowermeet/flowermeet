<template>
  
<section class="container">
<!--HeaderBar-->
<header class="headerbar">
    <div class="headerbar-left">

         <router-link to='/'  class="navigation">
           <van-icon name="arrow-left" class="iconfont" />
         </router-link>

    </div>
    <div class="headerbar-center">
        <p class="headerbar-content">购物车</p>
    </div>
    <div class="headerbar-right">
        
        <div onclick="huatools.toggleCategoryMenu();" class="navigation headerbar-menu-toggle">
            <van-icon name="wap-nav" class="iconfont"/>
            <!--HeaderBarMenu-->

            <theadnav></theadnav>


        </div>
    </div>
</header>
<section class="main">
    <div class="cart-list" id="cart-list">
        <!--活动类商品 根据促销类型放在promo-list列表下-->
            <div class="promo-list">
                  
                <tcartlist 
                :cartdata='cartdata'
                v-for='(item,index) in cartdata'
                :key="index"
                :index='index'></tcartlist>

           </div>
    </div>

    <!--购买提示-->
        <div class="recommend">
        <p class="recommend-nav">
            <a class="active" href="javascript:void(0)">购买该商品的还购买了</a>
            <a href="javascript:void(0)">巧克力/花瓶</a>
        </p>
        <div class="product">
            <ul class="recommend-tab active" style="width: 790px;">
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1070017&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1070017.jpg_80x87.jpg"></div>
                            <p class="product-name">天使之恋</p>
                            <p class="product-price">159</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1073247&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1073247.jpg_80x87.jpg"></div>
                            <p class="product-name">花好月圆永生花台灯</p>
                            <p class="product-price">298</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1073243&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1073243.jpg_80x87.jpg"></div>
                            <p class="product-name">永生花带灯+蓝牙音箱/天空蓝</p>
                            <p class="product-price">398</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1076067&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1076067.jpg_80x87.jpg"></div>
                            <p class="product-name">施华洛世奇悦动的心项链/红色</p>
                            <p class="product-price">1269</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1073034&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1073034.jpg_80x87.jpg"></div>
                            <p class="product-name">快乐熊</p>
                            <p class="product-price">198</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1073211&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1073211.jpg_80x87.jpg"></div>
                            <p class="product-name">花漾蜜恋·轻柔蓝</p>
                            <p class="product-price">298</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1070076&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1070076.jpg_80x87.jpg"></div>
                            <p class="product-name">HelloKitty公主的花园永生花礼盒</p>
                            <p class="product-price">298</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1073140&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1073140.jpg_80x87.jpg"></div>
                            <p class="product-name">迷你兔·红</p>
                            <p class="product-price">188</p>
                        </a>
                    </li>
            </ul>
            <ul class="recommend-tab" style="width: 590px;">
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=3010005&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/3010005.jpg_80x87.jpg"></div>
                            <p class="product-name">费列罗榛果威化糖果巧克力礼盒8粒心形装</p>
                            <p class="product-price">68</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=3010006&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/3010006.jpg_80x87.jpg"></div>
                            <p class="product-name">费列罗榛果威化糖果巧克力礼盒16粒</p>
                            <p class="product-price">98</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=1207010&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/1207010.jpg_80x87.jpg"></div>
                            <p class="product-name">巧克巧蔻定制16粒装手工夹心巧克力</p>
                            <p class="product-price">288</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=3010001&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/3010001.jpg_80x87.jpg"></div>
                            <p class="product-name">精美玻璃花瓶</p>
                            <p class="product-price">38</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=3010003&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/3010003.jpg_80x87.jpg"></div>
                            <p class="product-name">德芙心语98克铁盒或109克礼盒</p>
                            <p class="product-price">68</p>
                        </a>
                    </li>
                    <li>
                        <a href="/Shopping/AddtoCart?product_code=3010008&amp;type=">
                            <div class="product-img"><img src="https://img01.hua.com/uploadpic/newpic/3010008.jpg_80x87.jpg"></div>
                            <p class="product-name">德芙精心之选140克或恋语150g（随机发货）</p>
                            <p class="product-price">105</p>
                        </a>
                    </li>
            </ul>
        </div>
    </div>

    

</section>

<footer class="footer">
    <span class="footer-left">合计:<em class="total">{{allmoney}}</em></span>
    <button class="footer-right" type="button" id="jieSuan">去结算<em class="total-num">{{allnumber}}</em></button>
</footer>


<!--SKU弹窗-->
<!--SKUSelectOpen-->
<section id="modal-sku" class="modal" style="display:none;">
    <div class="modal-shade"></div>
    <div class="modal-wrap">
        <div class="modal-close"><i class="iconfont iconfont-closed"></i></div>
        <div class="modal-content">
            <!--S+弹窗内容-->
            <div class="skumodal">
                <div class="skumodal-info">
                    <div class="skumodal-info-pic">
                        <img id="selectSkuImg">
                    </div>
                    <div class="skumodal-info-desc">
                        <p class="skumodal-info-desc-price" id="selectSkuPrice"></p>
                        <p class="skumodal-info-desc-name">
                            <span class="text-gray2">已选</span>&nbsp;<span id="selectSkuName"></span>
                        </p>
                    </div>
                </div>
                <div class="skumodal-scroll">
                    <div class="skumodal-options">
                        <div class="skumodal-options-title">选择</div>
                        <div class="skumodal-options-list">
                        </div>
                    </div>
                </div>
                <div class="skumodal-btngroup">
                    <a href="javascript:void(0)" class="skumodal-btngroup-btn skumodal-btngroup-btn-orange" id="skuChooseconfirm">确定</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="modal-select" style="display:none;" class="modal">
    <div class="modal-shade"></div>
    <div class="modal-wrap">
        <div class="modal-close"><i class="iconfont iconfont-closed"></i></div>
        <div class="modal-content">
            <div class="skumodal">
                <div class="skumodal-title">修改促销</div>
                <div class="skumodal-select">
                </div>
                <div class="skumodal-btngroup">
                    <a href="javascript:void(0)" class="skumodal-btngroup-btn skumodal-btngroup-btn-orange" id="promotionChooseconfirm">确认</a>
                </div>
            </div>
        </div>
    </div>
</section> 
  <div id="goTopBtn" style="display: none;"><span></span></div>


  </section>


</template>

<script>
import tcartlist from '@/components/t-cartlist.vue'
import theadnav from '@/components/t-headnav.vue'
export default {
  //  store,
   components:{
     tcartlist,
     theadnav,
   },
   computed:{
     cartdata() {
       return this.$store.state.cartdata
     },
     allmoney() {
       return this.$store.getters.allmoney
     },
      allnumber() {
       return this.$store.getters.allnumber
     }

   },

   created() {
     console.log(this.cartdata)
   }
}
</script>

<style lang="scss">

@charset "utf-8";
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
.headerbar {
  display: flex;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
}
.headerbar .iconfont {
  line-height: 3.14285714rem;
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
  flex: 1;
  max-width: 14.14285714rem;
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
  border: 1px solid #E9ECF0;
  border-radius: 0.28571429rem;
  box-shadow: 0 4px 12px 0 #E9ECF0;
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
  border-top: 1px solid #E9ECF0;
  border-left: 1px solid #E9ECF0;
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
section.main .cart-list {
  border-top: 1px solid #E9ECF0;
  background-color: #fff;
  font-size: 0;
}
section.main .cart-item {
  padding: 1rem 0;
  border-bottom: 1px solid #E9ECF0;
  overflow: hidden;
  color: #232628;
}
section.main .cart-item-checkbox {
  position: relative;
  display: inline-block;
  width: 11.73%;
  height: 8.14285714rem;
  vertical-align: top;
  text-align: center;
}
section.main .cart-item-checkbox input.check {
  outline: #E9ECF0;
  width: 1.42857143rem;
  height: 1.42857143rem;
  border-radius: 50%;
  border: 2px solid #333;
 margin-top: 3.28571429rem;
}
section.main .cart-item-checkbox .iconfont {
  display: inline-block;
  font-size: 1.42857143rem;
  margin-top: 3.28571429rem;
}
section.main .cart-item-checkbox .iconfont-checkout {
  color: #FF734C;
}
section.main .cart-item-right {
  display: inline-block;
  width: 88.27%;
  vertical-align: top;
}
section.main .cart-item-pic {
  display: inline-block;
  width: 31.41993958%;
  vertical-align: top;
}
section.main .cart-item-info {
  position: relative;
  display: inline-block;
  width: 68.58006042%;
  height: 8.14285714rem;
  padding: 0 0.85714286rem;
  vertical-align: top;
}
section.main .cart-item-title {
  width: 100%;
}
section.main .cart-item-title a {
  display: inline-block;
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.14285714rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
section.main .cart-item-inputs {
  margin-top: 0.42857143rem;
  overflow: hidden;
}
section.main .cart-item-size span,
section.main .cart-item-num span {
  font-size: 0.85714286rem;
  line-height: 1.71428571rem;
  vertical-align: top;
}
section.main .cart-item-num {
  margin-top: 0.42857143rem;
}
section.main .cart-item-setsize,
section.main .cart-item-setnum {
  display: inline-block;
  height: 1.71428571rem;
  margin-left: 1rem;
  background-color: #F7F9FA;
  border: 1px solid #E9ECF0;
}
section.main .cart-item-setsize span,
section.main .cart-item-setnum span {
  display: inline-block;
  width: 1.71428571rem;
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
  text-align: center;
  vertical-align: top;
}
section.main .cart-item-setsize span i,
section.main .cart-item-setnum span i {
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
}
section.main .cart-item-setsize .btn-cut,
section.main .cart-item-setnum .btn-cut {
  border-right: 1px solid #E9ECF0;
  font-size: 0.85714286rem;
  text-align: center;
  line-height: 1.57142857rem;
  width: 1.71428571rem
}
section.main .cart-item-setsize .btn-add,
section.main .cart-item-setnum .btn-add,
section.main .cart-item-setsize .btn-select,
section.main .cart-item-setnum .btn-select {
  border-left: 1px solid #E9ECF0;
}
section.main .cart-item-setsize .size-count,
section.main .cart-item-setnum .size-count,
section.main .cart-item-setsize .num-count,
section.main .cart-item-setnum .num-count {
  background-color: #F7F9FA;
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
  text-align: center;
  vertical-align: top;
}
section.main .cart-item-setsize .size-count,
section.main .cart-item-setnum .size-count {
  width: 5.71428571rem;
}
section.main .cart-item-setsize .num-count,
section.main .cart-item-setnum .num-count {
  width: 3.92857143rem;
}
section.main .cart-item-setsize .btn-select i,
section.main .cart-item-setnum .btn-select i {
  font-size: 0.85714286rem;
  line-height: 1.57142857rem;
}
section.main .cart-item-price {
  position: absolute;
  left: 0.85714286rem;
  bottom: 0;
  font-size: 1rem;
  color: #FF734C;
  font-weight: 500;
}
section.main .promo-list {
  border-bottom: 1px solid #E9ECF0;
}
section.main .promo-list .promo-title {
  padding-left: 11.73%;
  padding-top: 0.5rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
section.main .promo-list .promo-title-tag {
  margin-top: 0.14285714rem;
  vertical-align: top;
}
section.main .promo-list .promo-title-tag span {
  border: 1px solid #FF734C;
  border-radius: 0.85714286rem;
  padding: 0 0.71428571rem;
  font-size: 0.85714286rem;
  color: #FF734C;
  line-height: 1rem;
}
section.main .promo-list .promo-title-desc {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  max-width: 60%;
  margin-left: 0.57142857rem;
}
section.main .promo-list .promo-title-desc span {
  font-size: 0.85714286rem;
  line-height: 1rem;
}
section.main .promo-list .promo-title-nav {
  margin-right: 1.14285714rem;
  font-size: 0.85714286rem;
  color: #FF734C;
  line-height: 1.28571429rem;
}
section.main .promo-list .promo-title-nav i {
  font-size: 0.85714286rem;
  line-height: 1.28571429rem;
}
section.main .promo-list .cart-item {
  padding: 0.5rem 0 0;
  border: none;
}
section.main .promo-list .cart-item-right {
  border-bottom: 1px solid #E9ECF0;
}
section.main .promo-list .cart-item:last-child .cart-item-right {
  border-bottom: 0;
}
section.main .promo-list .nochange-item .cart-item-right {
  padding-bottom: 1rem;
}
section.main .spnbtn {
  font-size: 1rem;
  color: #fff;
  text-align: center;
}
section.main .promo-type {
  margin-top: 0.35714286rem;
}
section.main .promo-type * {
  font-size: 0.85714286rem;
  line-height: 1.71428571rem;
}
section.main .promo-type-desc {
  margin-left: 0.57142857rem;
  color: #71797F;
}
section.main .promo-type-change {
  float: right;
  margin-right: 1.14285714rem;
}
section.main .promo-item-huangou {
  padding-left: 11.73%;
  margin-top: 0.57142857rem;
  margin-bottom: 0.57142857rem;
}
section.main .promo-item-huangou-box {
  position: relative;
  padding: 0.42857143rem;
  background-color: #F7F9FA;
}
section.main .promo-item-huangou-box .iconfont-delete {
  position: absolute;
  right: 1.57142857rem;
  top: 50%;
  margin-top: -0.78571429rem;
  font-size: 1.57142857rem;
  line-height: 1.57142857rem;
  color: #B4BABF;
}
section.main .promo-item-huangou-pic {
  display: inline-block;
  width: 4.42857143rem;
  vertical-align: top;
}
section.main .promo-item-huangou-info {
  display: inline-block;
  margin-left: 0.85714286rem;
  vertical-align: top;
}
section.main .promo-item-huangou-title a {
  font-size: 0.85714286rem;
  line-height: 1.28571429rem;
}
section.main .promo-item-huangou-count {
  font-size: 0.85714286rem;
  color: #B4BABF;
  line-height: 1.28571429rem;
}
section.main .promo-item-huangou-price {
  font-size: 1rem;
  color: #FF734C;
  line-height: 1.42857143rem;
  font-weight: 500;
}
section.main .promo-item-huangou .spnbtn {
  line-height: 5.71428571rem;
}
section.main .promo-item-zuhe {
  position: relative;
  margin: 0.57142857rem 0;
}
section.main .promo-item-zuhe-left {
  display: inline-block;
  vertical-align: top;
  width: 11.73%;
}
section.main .promo-item-zuhe-right {
  display: inline-block;
  width: 88.27%;
  vertical-align: top;
}
section.main .promo-item-zuhe-pic {
  display: inline-block;
  width: 31.41993958%;
  vertical-align: top;
}
section.main .promo-item-zuhe-info {
  display: inline-block;
  width: 68.58006042%;
  padding-left: 0.85714286rem;
  vertical-align: top;
}
section.main .promo-item-zuhe-title {
  font-size: 1rem;
}
section.main .promo-item-zuhe-count {
  margin-top: 0.71428571rem;
  font-size: 0.85714286rem;
}
section.main .promo-item-zuhe-price {
  display: inline-block;
  margin-top: 1.71428571rem;
  font-size: 1rem;
  color: #FF734C;
  line-height: 1.42857143rem;
  font-weight: 500;
  vertical-align: top;
}
section.main .promo-item-zuhe-discount {
  display: inline-block;
  width: 39px;
  height: 39px;
  margin-top: 0.57142857rem;
  margin-left: 0.57142857rem;
  border-radius: 50% 50% 50% 0;
  vertical-align: top;
  font-size: 0.85714286rem;
  color: #fff;
  text-align: center;
  padding-top: 0.42857143rem;
  background-color: #FF734C;
  background: -webkit-gradient(linear, left top, left bottom, from(#ffac84), to(#ff734c));
  background: -webkit-linear-gradient(top, #ffac84 0%, #ff734c 100%);
  background: -o-linear-gradient(top, #ffac84 0%, #ff734c 100%);
  background: linear-gradient(180deg, #ffac84 0%, #ff734c 100%);
}
section.main .promo-item-zuhe .spnbtn {
  line-height: 8.28571429rem;
}
section.main .promo-item-zuhe .iconfont-delete {
  position: absolute;
  right: 1.57142857rem;
  top: 50%;
  margin-top: -0.78571429rem;
  font-size: 1.57142857rem;
  line-height: 1.57142857rem;
  color: #B4BABF;
}
section.main .cart-tips {
  padding: 0.71428571rem 1.07142857rem;
  font-size: 0;
  color: #FF734C;
  background-color: #fff;
}
section.main .cart-tips li {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
section.main .cart-tips li + li {
  margin-top: 0.42857143rem;
}
section.main .cart-tips .iconfont {
  width: 1.42857143rem;
  font-size: 1.14285714rem;
  vertical-align: top;
}
section.main .cart-tips-cont {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.85714286rem;
  line-height: 1.28571429rem;
  vertical-align: top;
}
section.main .recommend {
  background-color: #fff;
  margin-top: 0.57142857rem;
  margin-bottom: 4.14285714rem;
  padding: 0.85714286rem 1.14285714rem 0.71428571rem;
  color: #232628;
}
section.main .recommend-nav {
  font-size: 0;
  width: 100%;
  padding-bottom: 1.42857143rem;
}
section.main .recommend-nav a {
  display: inline-block;
  font-size: 0.85714286rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
section.main .recommend-nav a.active {
  color: #ff6a00;
}
section.main .recommend-nav a:first-child {
  width: 42%;
}
section.main .recommend-nav a:last-child {
  width: 58%;
  padding-left: 1.42857143rem;
}
section.main .recommend-nav a + a {
  border-left: 1px solid #D8D8D8;
}
section.main .recommend-tab {
  display: none;
  width: 85.71428571rem;
  zoom: 1;
}
section.main .recommend-tab.active {
  display: block;
}
section.main .recommend .product {
  padding-bottom: 0.71428571rem;
  overflow: auto;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
section.main .recommend .product li {
  float: left;
  width: 5.71428571rem;
  margin-right: 1.14285714rem;
}
section.main .recommend .product-img {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border: 1px solid #E9ECF0;
}
section.main .recommend .product-name {
  font-size: 0.85714286rem;
  margin-top: 0.57142857rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
section.main .recommend .product-name-tips {
  font-size: 0.71428571rem;
  margin-top: 0.28571429rem;
  color: #ff6a00;
}
section.main .recommend .product-price {
  font-weight: 500;
  font-size: 0.85714286rem;
  margin-top: 0.21428571rem;
}
section.main .recommend .product-price::before {
  content: "¥";
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  font-size: 0;
  background-color: #fff;
  line-height: 3.5rem;
}
.footer-left {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 66.67%;
  vertical-align: top;
  padding-left: 1.14285714rem;
  font-size: 1rem;
  border-top: 1px solid rgba(180, 186, 191, 0.5);
}
.footer-right {
  display: inline-block;
  width: 33.33%;
  vertical-align: top;
}
.footer .total {
  color: #FF734C;
  font-size: 1.14285714rem;
  font-weight: 500;
  margin-left: 0.57142857rem;
}
.footer .total::before {
  content: "¥";
}
.footer button {
  border: none;
  height: 100%;
  border-radius: 0;
  color: #fff;
  font-size: 1.14285714rem;
  text-align: center;
  background-color: #FF734C;
}
.footer .total-num::before {
  content: "(";
}
.footer .total-num:after {
  content: ")";
}
body.modal-open {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
}
body .modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: none;
}
body .modal.active {
  display: block;
}
body .modal-shade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(35, 38, 40, 0.8);
}
body .modal-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  -webkit-animation: slideUp 0.25s;
  animation: slideUp 0.25s;
}
body .modal-close {
  position: absolute;
  right: 1.14285714rem;
  top: 1.14285714rem;
  width: 1.14285714rem;
  height: 1.14285714rem;
  overflow: hidden;
}
body .modal-close .iconfont-closed {
  font-size: 1.14285714rem;
}
body .modal-content .skumodal {
  padding-bottom: 4.85714286rem;
}
body .modal-content .skumodal-title {
  width: 100%;
  height: 3.14285714rem;
  text-align: center;
  font-size: 1.14285714rem;
  line-height: 3.14285714rem;
}
body .modal-content .skumodal-select {
  margin-bottom: 2.28571429rem;
}
body .modal-content .skumodal-select-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 640px;
  margin: 0 auto;
  margin-top: 1.71428571rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
body .modal-content .skumodal-select-checkbox {
  width: 13.87%;
  text-align: center;
}
body .modal-content .skumodal-select-checkbox .iconfont {
  font-size: 1.42857143rem;
}
body .modal-content .skumodal-select-checkbox .iconfont-checkout {
  color: #FF734C;
}
body .modal-content .skumodal-select-tag {
  width: 21.87%;
  height: 1.14285714rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 0.85714286rem;
  line-height: 1rem;
  text-align: center;
  border: 1px solid #FF734C;
  color: #FF734C;
  border-radius: 0.85714286rem;
}
body .modal-content .skumodal-select-desc {
  width: 64.26%;
  font-size: 0.85714286rem;
  padding-left: 0.57142857rem;
  padding-right: 1.14285714rem;
}
body .modal-content .skumodal-promo {
  margin-bottom: 2.28571429rem;
}
body .modal-content .skumodal-promo-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 640px;
  margin: 0 auto;
  margin-top: 1.71428571rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
body .modal-content .skumodal-promo-checkbox {
  width: 13.87%;
  text-align: center;
}
body .modal-content .skumodal-promo-checkbox .iconfont {
  font-size: 1.42857143rem;
}
body .modal-content .skumodal-promo-checkbox .iconfont-checkout {
  color: #FF734C;
}
body .modal-content .skumodal-promo-pic {
  width: 16.53%;
}
body .modal-content .skumodal-promo-info {
  width: 69.6%;
  padding-left: 1.14285714rem;
  padding-right: 1.14285714rem;
}
body .modal-content .skumodal-promo-info-name {
  width: 12.85714286rem;
  font-size: 1rem;
  line-height: 1.42857143rem;
}
body .modal-content .skumodal-promo-info-price {
  margin-top: 0.85714286rem;
  font-size: 0.85714286rem;
  line-height: 1rem;
  color: #71797F;
}
body .modal-content .skumodal-promo-info-price span {
  color: #FF734C;
}
body .modal-content .skumodal-promo-info-price .cut-price {
  margin-left: 0.85714286rem;
  padding: 0 0.42857143rem;
  border: 1px solid #FF734C;
  border-radius: 0.85714286rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body .modal-content .skumodal-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  max-width: 640px;
  margin: 0 auto;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 1.14285714rem;
}
body .modal-content .skumodal-info-pic {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  width: 5.71428571rem;
  height: 6.28571429rem;
  overflow: hidden;
}
body .modal-content .skumodal-info-desc {
  margin-left: 1.71428571rem;
}
body .modal-content .skumodal-info-desc-price {
  color: #FF734C;
}
body .modal-content .skumodal-info-desc-name {
  font-size: 0.85714286rem;
  margin-top: 0.42857143rem;
}
body .modal-content .skumodal-scroll {
  max-height: 50vh;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
  overflow-x: hidden;
  overflow-y: auto;
}
body .modal-content .skumodal-options {
  max-width: 640px;
  margin: 0 auto;
  padding: 0 1.14285714rem;
}
body .modal-content .skumodal-options-title {
  font-size: 0.85714286rem;
  font-weight: 300;
  color: #71797F;
}
body .modal-content .skumodal-options-list {
  margin: 0.85714286rem -0.5rem 0;
}
body .modal-content .skumodal-options-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
body .modal-content .skumodal-options-item {
  float: left;
  width: 7.42857143rem;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  background-color: #F7F9FA;
  font-size: 0.85714286rem;
  border: 1px solid #F7F9FA;
  text-align: center;
  border-radius: 0.14285714rem;
  margin: 0 0.5rem 1rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
body .modal-content .skumodal-options-item:active {
  background-color: #F7F9FA;
}
body .modal-content .skumodal-options-item.active {
  border-color: #FF734C;
  background-color: #fff;
  color: #FF734C;
}
body .modal-content .skumodal-options-item-wide {
  width: auto;
  padding: 0 0.85714286rem;
}
body .modal-content .skumodal-btngroup {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
body .modal-content .skumodal-btngroup-btn {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 3.5rem;
  line-height: 3.5rem;
  text-align: center;
  background-color: #3D4D42;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body .modal-content .skumodal-btngroup-btn-orange {
  background-color: #FF734C;
}
body .modal-content .skumodal-btngroup-btn-gray {
  background-color: #71797F;
}
body .layui-m-layerchild.layer-delete {
  width: 70%;
  border-radius: 0.85714286rem;
  overflow: hidden;
}
body .layui-m-layerchild.layer-delete .layui-m-layercont {
  padding: 1.71428571rem 2rem;
  color: #71797F;
  font-size: 1rem;
}
body .layui-m-layerchild.layer-delete .layui-m-layerbtn {
  background-color: #fff;
  border-radius: 0 0 0.85714286rem 0.85714286rem;
}
body .layui-m-layerchild.layer-delete .layui-m-layerbtn span {
  font-size: 1rem;
}
body .layui-m-layerchild.layer-delete .layui-m-layerbtn span:active {
  background-color: #fff;
}
body .layui-m-layerchild.layer-delete .layui-m-layerbtn span[no] {
  color: #71797F;
}
body .layui-m-layerchild.layer-delete .layui-m-layerbtn span[yes] {
  color: #FF734C;
}
@-webkit-keyframes slideUp {
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



.layui-m-layer {
    position: relative;
    z-index: 19891014
}

.layui-m-layer * {
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box
}

.layui-m-layermain,.layui-m-layershade {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%
}

.layui-m-layershade {
    background-color: rgba(0,0,0,.7);
    pointer-events: auto
}

.layui-m-layermain {
    display: table;
    font-family: Helvetica,arial,sans-serif;
    pointer-events: none
}

.layui-m-layermain .layui-m-layersection {
    display: table-cell;
    vertical-align: middle;
    text-align: center
}

.layui-m-layerchild {
    position: relative;
    display: inline-block;
    text-align: left;
    background-color: #fff;
    font-size: 14px;
    border-radius: 5px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    pointer-events: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-duration: .2s;
    animation-duration: .2s
}

@-webkit-keyframes layui-m-anim-scale {
    0% {
        opacity: 0;
        -webkit-transform: scale(.5);
        transform: scale(.5)
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

@keyframes layui-m-anim-scale {
    0% {
        opacity: 0;
        -webkit-transform: scale(.5);
        transform: scale(.5)
    }

    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }
}

.layui-m-anim-scale {
    animation-name: layui-m-anim-scale;
    -webkit-animation-name: layui-m-anim-scale
}

@-webkit-keyframes layui-m-anim-up {
    0% {
        opacity: 0;
        -webkit-transform: translateY(800px);
        transform: translateY(800px)
    }

    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes layui-m-anim-up {
    0% {
        opacity: 0;
        -webkit-transform: translateY(800px);
        transform: translateY(800px)
    }

    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

.layui-m-anim-up {
    -webkit-animation-name: layui-m-anim-up;
    animation-name: layui-m-anim-up
}

.layui-m-layer0 .layui-m-layerchild {
    width: 90%;
    max-width: 640px
}

.layui-m-layer1 .layui-m-layerchild {
    border: none;
    border-radius: 0
}

.layui-m-layer2 .layui-m-layerchild {
    width: auto;
    max-width: 260px;
    min-width: 40px;
    border: none;
    background: 0 0;
    box-shadow: none;
    color: #fff
}

.layui-m-layerchild h3 {
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 5px 5px 0 0;
    text-align: center
}

.layui-m-layerbtn span,.layui-m-layerchild h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap
}

.layui-m-layercont {
    padding: 50px 30px;
    line-height: 22px;
    text-align: center
}

.layui-m-layer1 .layui-m-layercont {
    padding: 0;
    text-align: left
}

.layui-m-layer2 .layui-m-layercont {
    text-align: center;
    padding: 0;
    line-height: 0
}

.layui-m-layer2 .layui-m-layercont i {
    width: 25px;
    height: 25px;
    margin-left: 8px;
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    -webkit-animation: layui-m-anim-loading 1.4s infinite ease-in-out;
    animation: layui-m-anim-loading 1.4s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

.layui-m-layerbtn,.layui-m-layerbtn span {
    position: relative;
    text-align: center;
    border-radius: 0 0 5px 5px
}

.layui-m-layer2 .layui-m-layercont p {
    margin-top: 20px
}

@-webkit-keyframes layui-m-anim-loading {
    0%,100%,80% {
        transform: scale(0);
        -webkit-transform: scale(0)
    }

    40% {
        transform: scale(1);
        -webkit-transform: scale(1)
    }
}

@keyframes layui-m-anim-loading {
    0%,100%,80% {
        transform: scale(0);
        -webkit-transform: scale(0)
    }

    40% {
        transform: scale(1);
        -webkit-transform: scale(1)
    }
}

.layui-m-layer2 .layui-m-layercont i:first-child {
    margin-left: 0;
    -webkit-animation-delay: -.32s;
    animation-delay: -.32s
}

.layui-m-layer2 .layui-m-layercont i.layui-m-layerload {
    -webkit-animation-delay: -.16s;
    animation-delay: -.16s
}

.layui-m-layer2 .layui-m-layercont>div {
    line-height: 22px;
    padding-top: 7px;
    margin-bottom: 20px;
    font-size: 14px
}

.layui-m-layerbtn {
    display: box;
    display: -moz-box;
    display: -webkit-box;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 0;
    border-top: 1px solid #D0D0D0;
    background-color: #F2F2F2
}

.layui-m-layerbtn span {
    display: block;
    -moz-box-flex: 1;
    box-flex: 1;
    -webkit-box-flex: 1;
    font-size: 14px;
    cursor: pointer
}

.layui-m-layerbtn span[yes] {
    color: #40AFFE
}

.layui-m-layerbtn span[no] {
    border-right: 1px solid #D0D0D0;
    border-radius: 0 0 0 5px
}

.layui-m-layerbtn span:active {
    background-color: #F6F6F6
}

.layui-m-layerend {
    position: absolute;
    right: 7px;
    top: 10px;
    width: 30px;
    height: 30px;
    border: 0;
    font-weight: 400;
    background: 0 0;
    cursor: pointer;
    -webkit-appearance: none;
    font-size: 30px
}

.layui-m-layerend::after,.layui-m-layerend::before {
    position: absolute;
    left: 5px;
    top: 15px;
    content: '';
    width: 18px;
    height: 1px;
    background-color: #999;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border-radius: 3px
}

.layui-m-layerend::after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg)
}

body .layui-m-layer .layui-m-layer-footer {
    position: fixed;
    width: 95%;
    max-width: 100%;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 10px;
    background: 0 0
}

.layui-m-layer-footer .layui-m-layercont {
    padding: 20px;
    border-radius: 5px 5px 0 0;
    background-color: rgba(255,255,255,.8)
}

.layui-m-layer-footer .layui-m-layerbtn {
    display: block;
    height: auto;
    background: 0 0;
    border-top: none
}

.layui-m-layer-footer .layui-m-layerbtn span {
    background-color: rgba(255,255,255,.8)
}

.layui-m-layer-footer .layui-m-layerbtn span[no] {
    color: #FD482C;
    border-top: 1px solid #c2c2c2;
    border-radius: 0 0 5px 5px
}

.layui-m-layer-footer .layui-m-layerbtn span[yes] {
    margin-top: 10px;
    border-radius: 5px
}

body .layui-m-layer .layui-m-layer-msg {
    width: auto;
    max-width: 90%;
    margin: 0 auto;
    bottom: -150px;
    background-color: rgba(0,0,0,.7);
    color: #fff
}

.layui-m-layer-msg .layui-m-layercont {
    padding: 10px 20px
}



</style>