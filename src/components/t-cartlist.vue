<template>
  <div class="cart-item nochange-item" data-promotionid="0">
      <div class="cart-item-checkbox">

          <van-icon name="checked" class="iconfont"
           v-if='cartdata[index].ischeck'
           @click="cartdata[index].ischeck=false"/>

          <input type="checkbox" class="check" v-else
          @click="cartdata[index].ischeck=true">
          

      </div>
      <div class="cart-item-right">
          <div class="cart-item-details">
              <div class="cart-item-pic">
                  <a href="/product/9012177.html">
                   <img :src="'https://img01.hua.com/uploadpic/newpic/'+cartdata[index].ItemCode+'.jpg_220x240.jpg'">
                  </a>
              </div>
              <div class="cart-item-info">
                  <p class="cart-item-title">
                      <a href="/product/9012177.html">{{cartdata[index].Cpmc}}</a>
                  </p>
                  <!--发货地显示-->
                  <div class="cart-item-inputs">
                      <div class="cart-item-num">
                          <span>数量</span>
                          <div class="cart-item-setnum">

                              <span class="btn-cut" 
                              v-if='cartdata[index].number!=1' 
                              @click="reduce(index)">-</span>

                              <van-icon name="delete" v-else class="btn-cut"
                              @click="del(index)"/>

                              <input class="num-count" name="cpsl" type="tel" :value="cartdata[index].number" maxlength="3" readonly>

                              <span class="btn-add"
                              @click="add(index)">+</span>

                          </div>
                      </div>
                  </div>
                  <p class="cart-item-price">¥<span>{{cartdata[index].Price*cartdata[index].number}}</span></p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  props:['cartdata','index'],
  methods:{
    // 加法
     add(index) {
        this.$store.commit('add',index)
     },
    //  减法
    reduce(index) {
        this.$store.commit('reduce',index)
     },
    //  删除
     del(index) {
        this.$store.commit('del',index)
     },
  }
}
</script>

<style>
.cart-item-checkbox .iconfont {
  color: #FF734C;
}


</style>