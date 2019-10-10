<template>
    <div>
       <sheader></sheader> 
       <sgooditem :datalist='list' v-for="(item,index) in list" :key="index" :number="index" >
        </sgooditem> 
    </div>
</template>
<script>
import sheader from '../components/sheader'
import sgooditem from '../components/sgooditem'

export default {
    components:{
      sheader,
      sgooditem
    },
    data() {
      return {
        list:[],
      }
    },
     created() {
      this.$axios
      .post("https://m.hua.com/home/GetProductListPrice?itemcodes=9012177,9010011,9010966,9012154,9010855,9012332,9012089,9012009,9012437,9012243,9012345,9010969")
      .then(res => {
        this.list=res.data.Datas.ProductPrices
      });
  },
  
}
</script>
<style lang="scss">

@charset "utf-8";


.product-item{
  margin-top:10px;
}

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
.headerbar {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 3.14285714rem;
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
  border: 1px solid #E9ECF0;
  -webkit-border-radius: 0.28571429rem;
     -moz-border-radius: 0.28571429rem;
          border-radius: 0.28571429rem;
  -webkit-box-shadow: 0 4px 12px 0 #E9ECF0;
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
  background: #F7F9FA;
}
.scrollbox-item > .iconfont {
  font-size: 1.42857143rem;
}
.scrollbox-item + .scrollbox-item {
  margin-top: 2.28571429rem;
}
.filter {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  background: #fff;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  overflow: hidden;
  -webkit-box-sizing: content-box;
     -moz-box-sizing: content-box;
          box-sizing: content-box;
  border-bottom: 1px solid #E9ECF0;
}
.filter-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  text-align: center;
}
.filter-item.active {
  color: #FF734C;
}
.filter-item.active[data-sort] .filter-item-price::before {
  border-bottom-color: #FF734C;
}
.filter-item.active[data-sort="asc"] .filter-item-price::before {
  border-bottom-color: #FF734C;
}
.filter-item.active[data-sort="asc"] .filter-item-price::after {
  border-top-color: #B4BABF;
}
.filter-item.active[data-sort="desc"] .filter-item-price::before {
  border-bottom-color: #B4BABF;
}
.filter-item.active[data-sort="desc"] .filter-item-price::after {
  border-top-color: #FF734C;
}
.filter-item-price {
  position: relative;
  top: 0.14285714rem;
  margin-left: 0.28571429rem;
}
.filter-item-price::after,
.filter-item-price::before {
  content: "";
  display: block;
  position: absolute;
  top: -1px;
  left: 0;
  width: 0;
  height: 0;
  font-size: 0;
  border: 0.28571429rem solid transparent;
}
.filter-item-price::before {
  border-bottom-color: #B4BABF;
}
.filter-item-price::after {
  border-top-color: #B4BABF;
  top: 0.57142857rem;
}
.purpose {
  width: 100%;
  background-color: #fff;
  position: relative;
}
.purpose-warp {
  width: -webkit-max-content;
  padding-right: 0.71428571rem;
  font-size: 0;
}
.purpose-warp .purpose-item {
  padding: 0;
  display: inline-block;
  float: none;
  width: auto;
}
.purpose-warp .purpose-item > .navigation {
  padding: 0 0.28571429rem;
}
.purpose-warp .purpose-item + .purpose-item {
  margin-left: 0.57142857rem;
}
.purpose-container {
  padding: 0.71428571rem;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}
.purpose-list {
  padding: 0.71428571rem 0.28571429rem;
}
.purpose-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.purpose-item {
  float: left;
  width: 20%;
  padding: 0 0.28571429rem;
}
.purpose-item.purpose-item-city {
  padding: 0;
}
.purpose-item.purpose-item-city > .navigation {
  background-color: transparent;
  border: none;
}
.purpose-item.purpose-item-city > .navigation > span {
  font-size: 0.85714286rem;
  font-weight: 500;
}
.purpose-item.purpose-item-city > .navigation > .iconfont {
  font-size: 0.71428571rem;
  position: relative;
  top: -2px;
}
.purpose-item > .navigation {
  max-width: 100%;
  height: 1.71428571rem;
  line-height: 1.71428571rem;
  border: 1px solid #F7F9FA;
  background-color: #F7F9FA;
  font-size: 0.85714286rem;
  -webkit-border-radius: 0.14285714rem;
     -moz-border-radius: 0.14285714rem;
          border-radius: 0.14285714rem;
  text-align: center;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.purpose-item .iconfont {
  vertical-align: middle;
  font-size: 0.85714286rem;
}
.purpose-item.active .navigation {
  background-color: #fff;
  color: #FF734C;
  border-color: #FF734C;
}
.purpose-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: none;
}
.purpose-layer.active {
  display: block;
}
.purpose-layer-shade {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
}
.purpose-layer-content {
  position: absolute;
  left: 10%;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background-color: #fff;
  -webkit-animation: moveLeft 0.25s ease-out;
     -moz-animation: moveLeft 0.25s ease-out;
       -o-animation: moveLeft 0.25s ease-out;
          animation: moveLeft 0.25s ease-out;
}
@-webkit-keyframes moveLeft {
  0% {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
}
@-moz-keyframes moveLeft {
  0% {
    -moz-transform: translateX(100%);
         transform: translateX(100%);
  }
  100% {
    -moz-transform: translateX(0);
         transform: translateX(0);
  }
}
@-o-keyframes moveLeft {
  0% {
    -o-transform: translateX(100%);
       transform: translateX(100%);
  }
  100% {
    -o-transform: translateX(0);
       transform: translateX(0);
  }
}
@keyframes moveLeft {
  0% {
    -webkit-transform: translateX(100%);
       -moz-transform: translateX(100%);
         -o-transform: translateX(100%);
            transform: translateX(100%);
  }
  100% {
    -webkit-transform: translateX(0);
       -moz-transform: translateX(0);
         -o-transform: translateX(0);
            transform: translateX(0);
  }
}
.purpose-layer-warp {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 3.42857143rem;
  padding: 0 1em;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
     -moz-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
}
.purpose-layer-warp > h4 {
  font-weight: 500;
  font-size: 1.14285714rem;
  padding: 1.14285714rem 0;
}
.purpose-layer-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.purpose-layer-item {
  float: left;
  width: 33.33333333%;
  text-align: center;
  padding: 0 0.42857143rem;
  margin-bottom: 0.85714286rem;
}
.purpose-layer-item > .navigation {
  height: 2.42857143rem;
  line-height: 2.42857143rem;
  background-color: #F7F9FA;
  -webkit-border-radius: 0.14285714rem;
     -moz-border-radius: 0.14285714rem;
          border-radius: 0.14285714rem;
  border: 1px solid #F7F9FA;
  font-size: 0.85714286rem;
}
.purpose-layer-item.active > .navigation {
  background-color: #fff;
  border-color: #FF734C;
  color: #FF734C;
}
.purpose-layer-clear {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3.42857143rem;
  line-height: 3.42857143rem;
  font-size: 1.14285714rem;
  text-align: center;
  background-color: #E9ECF0;
}
.product {
  margin-top: 0.57142857rem;
}
.product-title {
  font-size: 1.14285714rem;
  padding: 1.42857143rem 0;
  text-align: center;
  font-weight: normal;
}
.product-list {
  padding: 0 0.57142857rem 1.14285714rem;
}
.product-list.product-list-vertical {
  padding: 0 0.28571429rem 1.14285714rem;
}
.product-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.product-item > .navigation {
  background: #fff;
  overflow: hidden;
  -webkit-box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
          box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
  -webkit-border-radius: 0.28571429rem;
     -moz-border-radius: 0.28571429rem;
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
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-border-radius: 10rem;
     -moz-border-radius: 10rem;
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
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
     -moz-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
.product-item-info-bottom-left {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
     -moz-box-flex: 1;
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
.product-item.product-item-vertical {
  float: left;
  width: 50%;
  padding: 0 0.28571429rem;
  margin-bottom: 0.57142857rem;
}
.product-item.product-item-vertical .product-item-pic {
  max-height: 13.35714286rem;
  min-height: 13.35714286rem;
  overflow: hidden;
}
.product-item.product-item-vertical .product-item-info {
  padding: 0.57142857rem 0.57142857rem 1.14285714rem;
  height: 5.85714286rem;
  overflow: hidden;
  position: relative;
}
.product-item.product-item-vertical .product-item-info-tags {
  margin-bottom: 0.28571429rem;
}
.product-item.product-item-vertical .product-item-info-name {
  font-size: 0.85714286rem;
}
.product-item.product-item-vertical .product-item-info-name.text-overflow-line2 {
  line-height: 1.6;
}
.product-item.product-item-vertical .product-item-info-prices > strong {
  font-size: 1rem;
  color: #FF734C;
  font-weight: 500;
}
.product-item.product-item-vertical .product-item-info-prices > s {
  font-size: 0.71428571rem;
  color: #71797F;
  margin-left: 0.42857143rem;
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
  -webkit-border-radius: 0.14285714rem;
     -moz-border-radius: 0.14285714rem;
          border-radius: 0.14285714rem;
}
.product-footer {
  text-align: center;
  height: 40px;
  overflow: hidden;
}
.product-footer.loading .product-footer-reachbottom {
  display: none;
}
.product-footer.loading .product-footer-loading {
  display: block;
}
.product-footer.end .product-footer-reachbottom {
  display: block;
}
.product-footer.end .product-footer-loading {
  display: none;
}
.product-footer-reachbottom {
  display: none;
  color: #71797F;
  font-size: 0.85714286rem;
}
.product-footer-loading {
  position: relative;
  width: 40px;
  height: 40px;
  margin: auto;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle fill='%23FF9B80' fill-rule='nonzero' opacity='.8' cx='16' cy='16' r='16'/%3E%3Cpath d='M18.233 13.481h-.913v-.776c-.031-.937-.997-1.009-1.028-1.01h-.001V10.21h1.03V8h1.518v2.21h4.116v1.485h-2.82s-1.296 0-1.296 1.181v.012a.601.601 0 0 1-.606.593zm-8.009 4.02a4.397 4.397 0 0 0 1.342-3.15h1.52v9.056a.603.603 0 0 1-.609.593h-.91v-4.673c-.11-.706-.801-.315-.801-.315l-.001-.005A6.134 6.134 0 0 1 7 20.294v-1.483a4.608 4.608 0 0 0 3.224-1.31zm8.98-1.841c0 1.181 1.295 1.181 1.295 1.181H23v1.484h-2.501s-1.43.002-1.191 1.326a3.7 3.7 0 0 0 1.011 1.776A3.833 3.833 0 0 0 23 22.517V24a5.364 5.364 0 0 1-3.754-1.524 5.115 5.115 0 0 1-1.561-3.668v-4.456h1.518v1.308zm-6.105-5.957v.507h1.03v1.484h-.001c-.032.001-1.03.075-1.03 1.059v.108a.602.602 0 0 1-.607.593h-.91v-.579c0-1.181-1.298-1.181-1.298-1.181H7.465V10.21h4.115V8H13.1v1.703z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 28px 28px;
  display: none;
}
.product-footer-loading > li {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  opacity: 0;
  -webkit-transform: rotate(225deg);
     -moz-transform: rotate(225deg);
      -ms-transform: rotate(225deg);
       -o-transform: rotate(225deg);
          transform: rotate(225deg);
  -webkit-transform-origin: center center;
     -moz-transform-origin: center center;
      -ms-transform-origin: center center;
       -o-transform-origin: center center;
          transform-origin: center center;
  -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
       -o-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-name: orbit;
     -moz-animation-name: orbit;
       -o-animation-name: orbit;
          animation-name: orbit;
  -webkit-animation-duration: 5.5s;
     -moz-animation-duration: 5.5s;
       -o-animation-duration: 5.5s;
          animation-duration: 5.5s;
}
.product-footer-loading > li:after {
  content: '';
  position: absolute;
  width: 4px;
  height: 4px;
  -webkit-border-radius: 100%;
     -moz-border-radius: 100%;
          border-radius: 100%;
  background: #FFAF99;
}
.product-footer-loading > li:nth-child(2) {
  -webkit-animation-delay: 240ms;
     -moz-animation-delay: 240ms;
       -o-animation-delay: 240ms;
          animation-delay: 240ms;
}
.product-footer-loading > li:nth-child(3) {
  -webkit-animation-delay: 480ms;
     -moz-animation-delay: 480ms;
       -o-animation-delay: 480ms;
          animation-delay: 480ms;
}
.product-footer-loading > li:nth-child(4) {
  -webkit-animation-delay: 720ms;
     -moz-animation-delay: 720ms;
       -o-animation-delay: 720ms;
          animation-delay: 720ms;
}
.product-footer-loading > li:nth-child(5) {
  -webkit-animation-delay: 960ms;
     -moz-animation-delay: 960ms;
       -o-animation-delay: 960ms;
          animation-delay: 960ms;
}
@-webkit-keyframes orbit {
  0% {
    -webkit-transform: rotate(225deg);
            transform: rotate(225deg);
    opacity: 1;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  7% {
    -webkit-transform: rotate(345deg);
            transform: rotate(345deg);
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
  }
  30% {
    -webkit-transform: rotate(455deg);
            transform: rotate(455deg);
    -webkit-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
  }
  39% {
    -webkit-transform: rotate(690deg);
            transform: rotate(690deg);
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
  }
  70% {
    -webkit-transform: rotate(815deg);
            transform: rotate(815deg);
    opacity: 1;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  75% {
    -webkit-transform: rotate(945deg);
            transform: rotate(945deg);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  76% {
    -webkit-transform: rotate(945deg);
            transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(945deg);
            transform: rotate(945deg);
    opacity: 0;
  }
}
@-moz-keyframes orbit {
  0% {
    -moz-transform: rotate(225deg);
         transform: rotate(225deg);
    opacity: 1;
    -moz-animation-timing-function: ease-out;
         animation-timing-function: ease-out;
  }
  7% {
    -moz-transform: rotate(345deg);
         transform: rotate(345deg);
    -moz-animation-timing-function: linear;
         animation-timing-function: linear;
  }
  30% {
    -moz-transform: rotate(455deg);
         transform: rotate(455deg);
    -moz-animation-timing-function: ease-in-out;
         animation-timing-function: ease-in-out;
  }
  39% {
    -moz-transform: rotate(690deg);
         transform: rotate(690deg);
    -moz-animation-timing-function: linear;
         animation-timing-function: linear;
  }
  70% {
    -moz-transform: rotate(815deg);
         transform: rotate(815deg);
    opacity: 1;
    -moz-animation-timing-function: ease-out;
         animation-timing-function: ease-out;
  }
  75% {
    -moz-transform: rotate(945deg);
         transform: rotate(945deg);
    -moz-animation-timing-function: ease-out;
         animation-timing-function: ease-out;
  }
  76% {
    -moz-transform: rotate(945deg);
         transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    -moz-transform: rotate(945deg);
         transform: rotate(945deg);
    opacity: 0;
  }
}
@-o-keyframes orbit {
  0% {
    -o-transform: rotate(225deg);
       transform: rotate(225deg);
    opacity: 1;
    -o-animation-timing-function: ease-out;
       animation-timing-function: ease-out;
  }
  7% {
    -o-transform: rotate(345deg);
       transform: rotate(345deg);
    -o-animation-timing-function: linear;
       animation-timing-function: linear;
  }
  30% {
    -o-transform: rotate(455deg);
       transform: rotate(455deg);
    -o-animation-timing-function: ease-in-out;
       animation-timing-function: ease-in-out;
  }
  39% {
    -o-transform: rotate(690deg);
       transform: rotate(690deg);
    -o-animation-timing-function: linear;
       animation-timing-function: linear;
  }
  70% {
    -o-transform: rotate(815deg);
       transform: rotate(815deg);
    opacity: 1;
    -o-animation-timing-function: ease-out;
       animation-timing-function: ease-out;
  }
  75% {
    -o-transform: rotate(945deg);
       transform: rotate(945deg);
    -o-animation-timing-function: ease-out;
       animation-timing-function: ease-out;
  }
  76% {
    -o-transform: rotate(945deg);
       transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    -o-transform: rotate(945deg);
       transform: rotate(945deg);
    opacity: 0;
  }
}
@keyframes orbit {
  0% {
    -webkit-transform: rotate(225deg);
       -moz-transform: rotate(225deg);
         -o-transform: rotate(225deg);
            transform: rotate(225deg);
    opacity: 1;
    -webkit-animation-timing-function: ease-out;
       -moz-animation-timing-function: ease-out;
         -o-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  7% {
    -webkit-transform: rotate(345deg);
       -moz-transform: rotate(345deg);
         -o-transform: rotate(345deg);
            transform: rotate(345deg);
    -webkit-animation-timing-function: linear;
       -moz-animation-timing-function: linear;
         -o-animation-timing-function: linear;
            animation-timing-function: linear;
  }
  30% {
    -webkit-transform: rotate(455deg);
       -moz-transform: rotate(455deg);
         -o-transform: rotate(455deg);
            transform: rotate(455deg);
    -webkit-animation-timing-function: ease-in-out;
       -moz-animation-timing-function: ease-in-out;
         -o-animation-timing-function: ease-in-out;
            animation-timing-function: ease-in-out;
  }
  39% {
    -webkit-transform: rotate(690deg);
       -moz-transform: rotate(690deg);
         -o-transform: rotate(690deg);
            transform: rotate(690deg);
    -webkit-animation-timing-function: linear;
       -moz-animation-timing-function: linear;
         -o-animation-timing-function: linear;
            animation-timing-function: linear;
  }
  70% {
    -webkit-transform: rotate(815deg);
       -moz-transform: rotate(815deg);
         -o-transform: rotate(815deg);
            transform: rotate(815deg);
    opacity: 1;
    -webkit-animation-timing-function: ease-out;
       -moz-animation-timing-function: ease-out;
         -o-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  75% {
    -webkit-transform: rotate(945deg);
       -moz-transform: rotate(945deg);
         -o-transform: rotate(945deg);
            transform: rotate(945deg);
    -webkit-animation-timing-function: ease-out;
       -moz-animation-timing-function: ease-out;
         -o-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  76% {
    -webkit-transform: rotate(945deg);
       -moz-transform: rotate(945deg);
         -o-transform: rotate(945deg);
            transform: rotate(945deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(945deg);
       -moz-transform: rotate(945deg);
         -o-transform: rotate(945deg);
            transform: rotate(945deg);
    opacity: 0;
  }
}


body {
  width: 100%;
  max-width: 640px;
  padding: 0;
  margin: 0 auto;
  font-size: 14px;
  font-family: SourceHanSansCN, -apple-system, sans-serif, 'microsoft yahei', Verdana, Arial, Helvetica, sans-serif;
  -webkit-tap-highlight-color: transparent;
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
.cl {
  *zoom: 1;
}
.cl:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
/*Main*/
section.main {
  background: #F0EFED;
}
/*头部*/
.header-bar {
  height: 44px;
  text-align: center;
  background: rgba(250, 250, 250, 0.9);
  border-bottom: 1px solid #E4E4E4;
  padding: 0 12px;
  position: relative;
}
.header-bar-chat {
  position: absolute;
  right: 54px;
  top: 10px;
  line-height: 0.9;
  display: none;
}
.header-bar-chat > b {
  display: block;
  font-size: 10px;
}
.header-bar .icon-chat {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("//img02.hua.com/m/icon/chat_icon_new.png") no-repeat center center;
  -webkit-background-size: contain;
  background-size: contain;
}
.header-bar.transparent {
  background-color: transparent;
  border-color: transparent;
}
.header-bar p {
  font-size: 16px;
  line-height: 44px;
  text-align: center;
  white-space: nowrap;
  text-overflow: clip;
  overflow: hidden;
}
.icon-arrow-left {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("//img02.hua.com/m/icon/iconChevronLeft@2x.png") no-repeat center center;
  background-size: 24px 24px;
  position: absolute;
  left: 12px;
  top: 10px;
}
.icon-menu {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("//img02.hua.com/m/icon/iconMore@2x.png") no-repeat center center;
  background-size: 24px 24px;
  position: absolute;
  right: 16px;
  top: 10px;
}
.icon-home {
  background: url("//img02.hua.com/m/icon/home_icon_new.png") no-repeat center center;
}
.icon-categore {
  background: url("//img02.hua.com/m/icon/classify_icon_new.png") no-repeat center center;
}
.icon-shopcar {
  background: url("//img02.hua.com/m/icon/cart_icon_new.png") no-repeat center center;
}
.icon-user {
  background: url("//img02.hua.com/m/icon/my_icon_new.png") no-repeat center center;
}
.icon-home,
.icon-categore,
.icon-shopcar,
.icon-user {
  background-size: 20px 20px;
  display: inline-block;
  width: 20px;
  height: 20px;
}
.icon-badge {
  position: absolute;
  top: -3px;
  left: 100%;
  padding: 0 3px;
  width: auto;
  height: 13px;
  display: inline-block;
  border-radius: 50%;
  background: #f60;
  color: #fff;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  font-style: normal;
  display: none;
}
nav.nav {
  display: none;
  position: static;
  width: 100%;
  margin: 0;
  padding: 5px 0;
  box-sizing: border-box;
  height: 48px;
  line-height: initial;
  border: none;
  border-bottom: 1px solid #E4E4E4;
  background: #fff;
}
.nav ul li {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 10px;
}
.nav ul li a {
  display: block;
  color: #494949;
  padding: 0;
  font-size: 10px;
  width: 100%;
  line-height: initial;
}
.nav ul li p {
  line-height: normal;
}
.nav ul li:nth-child(3) span {
  position: relative;
}
#goTopBtn {
  display: none;
  position: fixed;
  bottom: 60px;
  right: 15px;
  cursor: pointer;
  height: 36px;
  width: 36px;
  background-color: #fff;
  border-radius: 22px;
  opacity: .8;
  z-index: 999;
  border: 1px solid #999;
  box-sizing: border-box;
}
#goTopBtn span {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url(//img02.hua.com/m/icon/arrow_Top.png) no-repeat center;
  background-size: 24px 24px;
  margin-top: 5px;
  margin-left: 5px;
}
.footer {
  padding-top: 20px;
}
.footer ul {
  *zoom: 1;
  padding-bottom: 10px;
}
.footer ul:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.footer ul li {
  float: left;
  text-align: center;
  font-size: 12px;
  width: 33.3%;
}
.footer ul li a {
  color: #444;
  border-radius: 2px;
  display: inline-block;
  padding: 4px 19px;
}
.footer .user-login {
  margin-bottom: 10px;
}
.footer .user-login a {
  background: #e7e6e6;
}
.footer ul.help {
  border-bottom: 1px solid #E4E4E4;
}
.footer .platform {
  overflow: hidden;
  padding: 16px 10% 14px;
  color: #777777;
  font-size: 12px;
  border-bottom: 1px solid #eee;
  text-align: center;
  *zoom: 1;
}
.footer .platform:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.footer .platform dl {
  width: 50%;
  float: left;
}
.footer .platform img {
  display: inline-block;
  width: 24px;
  margin: 5px 0 8px;
}
.footer .platform dl a {
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 1px solid #444;
  border-radius: 50%;
}
.footer .platform dd {
  margin: 0;
}
.footer .copyright {
  font-size: 10px;
  text-align: center;
  color: #ccc;
  padding: 16px 0;
}
/*LoadMore*/
.more-tips {
  text-align: center;
  background: #fff;
  color: #777;
}
.more-tips .tips {
  margin-left: 5px;
}
.more-tips img {
  width: 20%;
  height: auto;
  vertical-align: middle;
}
.more-tips .more {
  margin: 10px 0;
}
.more-tips .more img {
  width: 20px;
}
.more-tips .no-more {
  display: none;
}
/*nav-chat*/
body.chat {
  padding-bottom: 48px;
}
.nav-chat {
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;
  max-width: 640px;
  display: none;
}
.nav-chat .item {
  float: left;
  width: 50%;
  line-height: 48px;
  font-size: 14px;
  color: #fff;
  text-align: center;
}
.nav-chat .item .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  -webkit-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  vertical-align: middle;
  margin-right: 4px;
}
.nav-chat .item a {
  display: block;
  color: inherit;
}
.nav-chat .item.item-phone {
  background-color: #FFA747;
}
.nav-chat .item.item-phone .icon {
  background-image: url("//img02.hua.com/m/icon/icon_tel_whtie@3x.png");
}
.nav-chat .item.item-chat {
  background-color: #FE6600;
}
.nav-chat .item.item-chat .icon {
  background-image: url("//img02.hua.com/m/icon/icon_chat_whtie@3x.png");
}
.float-btn {
  position: fixed;
  right: 15px;
  bottom: 110px;
  z-index: 998;
}
.float-btn a {
  display: block;
  width: 36px;
  height: 36px;
  -webkit-background-size: contain;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #999;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
}
.float-btn > .float-btn-chat {
  background-image: url("//img02.hua.com/m/icon/chat_icon_new.png");
  -webkit-background-size: 22px;
  background-size: 22px;
  display: none;
}
/*Tag*/
.tag {
  display: inline-block;
  padding: 0 4px;
  font-size: 10px;
  border-radius: 4px;
  margin-left: 8px;
  vertical-align: bottom;
}
.tag:empty {
  display: none;
}
.tag.tag-outline {
  background: transparent;
  border: 1px solid transparent;
}
.tag.tag-outline.tag-primary {
  border-color: #fe6600;
  color: #fe6600;
}


</style>