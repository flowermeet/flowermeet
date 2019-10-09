<template>
  <div class="product-item product-item-vertical">
      <a href="/product/1073247.html?huaPid=homepage-f301" class="navigation">
          <div class="product-item-pic">
            <img :src="`https://img01.hua.com/uploadpic/newpic/${tgoods[num].ItemCode}.jpg_220x240.jpg`">
            </div>
          <div class="product-item-info">
                  <div class="product-item-info-tags">
                          <span>热销单品</span>
                  </div>
              <!--Dev:: text-overflow Or text-overflow-line2-->
              <p class="product-item-info-name  text-overflow ">{{tgoods[num].Cpmc}}·{{tgoods[num].Instro}}</p>
              <div class="product-item-info-bottom">
                  <div class="product-item-info-bottom-left">
                      <p class="product-item-info-prices" data-id="1073247" style="opacity: 1;"><strong>¥{{tgoods[num].Price}}</strong><s>¥{{tgoods[num].LinePrice}}</s></p>
                      <p class="product-item-info-sales">已销售688件</p>
                  </div>
                  <div class="product-item-info-bottom-right" data-id="1073247"><i class="iconfont iconfont-buy"></i></div>
              </div>
          </div>
      </a>
   </div>
</template>

<script>
export default {
   props:['tgoods','num']
}
</script>

<style>

</style>