<template>
    <div class="product-item product-item-horizontal">
              <a href="/product/9010966.html?huaPid=homepage-f101" class="navigation">
                  <div class="product-item-pic">
                      <img :src="`https://img01.hua.com/uploadpic/newpic/${tgoods[num].ItemCode}.jpg_220x240.jpg`" alt="一往情深">
                 </div> 
                  <div class="product-item-info">
                      <p class="product-item-info-name text-overflow">{{tgoods[num].Cpmc}}</p>
                      <!--Dev:: text-overflow Or text-overflow-line2-->
                      <p class="product-item-info-desc text-overflow-line2 ">{{tgoods[num].Instro}}</p>
                      <div class="product-item-info-promo">经典爆款，年销售冠军！</div>
                      <div class="product-item-info-bottom">
                          <div class="product-item-info-bottom-left">
                              <p class="product-item-info-prices" data-id="9010966" style="opacity: 1;"><strong>¥{{tgoods[num].Price}}</strong><s>¥{{tgoods[num].LinePrice}}</s></p>
                              <p class="product-item-info-sales">已销售7.3万件</p>
                          </div>
                          <div class="product-item-info-bottom-right" data-id="9010966">
                            <van-icon name="cart-o" class="iconfont"/>
                            </div>
                      </div>
                  </div>
              </a>
          </div>

</template>

<script>

import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

export default {
   props:['tgoods','num'],
   created() {
    //    console.log(this.tgoods)
   }
}
</script>

<style>

</style>