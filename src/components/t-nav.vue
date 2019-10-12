<template>
<van-tabbar
  v-model="active"
  active-color="#FF734C"
  inactive-color="#333"
>
  <van-tabbar-item icon="wap-home" 
    to="/">首页</van-tabbar-item>
  <van-tabbar-item icon="bars" >分类</van-tabbar-item>
  <van-tabbar-item icon="cart" :info="allnumber"
    to="/cart">购物车</van-tabbar-item>
  <van-tabbar-item icon="manager">我的</van-tabbar-item>
</van-tabbar>

</template>

<script>
export default {
    data() {
      return{
        active:'',
      }
    },
   computed:{
     allnumber() {
       return this.$store.getters.allnumber
     }
   }
}
</script>

<style  lang="scss">

</style>
