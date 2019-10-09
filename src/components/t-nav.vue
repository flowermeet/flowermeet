<template>
     <nav class="tabbar">
        <div class="tabbar-item active">
            <a href="/" class="navigation">
                <van-icon name="wap-home" class="iconfont"/>
                <p>首页</p>
            </a>
        </div>

        <div class="tabbar-item">
            <a href="/all.html" class="navigation">
                 <van-icon name="bars" class="iconfont"/>
                <p>分类</p>
            </a>
        </div>

        <div class="tabbar-item" data>
            <a href="/Shopping/ShowCart" class="navigation">
                 <van-icon name="cart" class="iconfont"/>
                <p>购物车</p>
            </a>
        </div>

        <div class="tabbar-item">
            <a href="/member/membercenter" class="navigation">
                 <van-icon name="manager" class="iconfont"/>
                <p>我的</p>
            </a>
        </div>
    </nav>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant';
Vue.use(Icon);

export default {

}
</script>

<style  lang="scss">

</style>
