<template>
  <div class="home">
    <!-- 头部 -->
     <theader></theader>

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
            <div v-for='(item,index) in navlist'
            :key='index'
            class="procate-item" 
            @click="typeSkip(index)"
           >
              <a class="navigation">
               <img :src="navlist[index].src">
                 <p>{{navlist[index].name}}</p>
              </a>
            </div>
   </nav>


<!-- 一秒选花 -->
<section class="scene">
        <div class="modetitle">一秒选花</div>

            <div class="scene-list">
                    <div class="scene-item scene-item-radius"
                    v-for='(item,index) in list1'
                    :key='index'>
                        <a class="navigation">
                            <img :src="item.src">
                            <span class="scene-item-use-title">{{item.name}}</span>
                        </a>
                    </div>
            </div>
        
            <div class="scene-list">
                    <div class="scene-item scene-item-radius"
                    v-for='(item,index) in list2'
                    :key='index'>
                        <a class="navigation">
                            <img :src="item.src">
                            <span class="scene-item-title">{{item.name}}</span>
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
                    <div class="scene-item"
                    v-for='(item,index) in list3'
                    :key='index'>
                        <a  class="navigation">
                            <img :src="item.src" alt="新品来袭">
                            <span class="scene-item-pange">{{item.name}}</span>
                        </a>
                    </div>

            </div>
    </section>



  <section class="product">
            <h3 class="product-title">送恋人/爱情鲜花</h3>
            <div class="product-list">

               <tgoodlist :tgoods='tgoods1'
               v-for='(item,index) in tgoods1'
               :key="index"
               :num='index'
               ></tgoodlist>

            </div>
            <div class="product-more">
                <a @click='typeSkip(0)' class="product-more-btn">查看更多</a>
            </div>
  </section>


     <section class="product">
            <h3 class="product-title">送长辈鲜花</h3>
            <div class="product-list">
                 <tgoodlist :tgoods='tgoods2'
               v-for='(item,index) in tgoods2'
               :key="index"
               :num='index'
               ></tgoodlist>
            </div>
            <div class="product-more">
                <a @click='typeSkip(1)' class="product-more-btn">查看更多</a>
            </div>
        </section>

<!-- 永生花 -->
<section class="product">
            <h3 class="product-title">永生花推荐</h3>
            <div class="product-list product-list-vertical">
   
           <tsgoodlist :tgoods='tgoods3'
               v-for='(item,index) in tgoods3'
               :key="index"
               :num='index'></tsgoodlist>


            </div>
            <div class="product-more">
               <a @click='typeSkip(2)' class="product-more-btn">查看更多</a>
            </div>
     </section>


<!-- 蛋糕推荐 -->

<section class="product">
            <h3 class="product-title">蛋糕推荐</h3>
            <div class="product-list product-list-vertical">

             <tsgoodlist :tgoods='tgoods4'
               v-for='(item,index) in tgoods4'
               :key="index"
               :num='index'></tsgoodlist>


            </div>
            <div class="product-more">
                <a @click='typeSkip(3)' class="product-more-btn">查看更多</a>
            </div>
        </section>

<!-- 礼品推荐 -->
<section class="product">
            <h3 class="product-title">礼品推荐</h3>
            <div class="product-list product-list-vertical">

            <tsgoodlist :tgoods='tgoods5'
               v-for='(item,index) in tgoods5'
               :key="index"
               :num='index'></tsgoodlist>

            </div>
            <div class="product-more">
                <a @click='typeSkip(4)' class="product-more-btn">查看更多</a>
            </div>
        </section>



<!-- 巧克力推荐 -->
<section class="product">
            <h3 class="product-title">巧克力推荐</h3>
            <div class="product-list product-list-vertical">
             <tsgoodlist :tgoods='tgoods6'
               v-for='(item,index) in tgoods6'
               :key="index"
               :num='index'></tsgoodlist>
           
            </div>
            <div class="product-more">
                 <a @click='typeSkip(5)' class="product-more-btn">查看更多</a>
            </div>
        </section>

   <section class="qiyetuangou">
        <a href="/qiyetuangou/" class="navigation"><img src="https://img02.hua.com/m/home/img/m_home_qiyetuangou.png"></a>
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
import tsgoodlist from '@/components/t-goodlistsmall.vue'
import theader from '@/components/thead.vue'

export default {
  name: 'home',
  components: {
    tnav,
    tgoodlist,
    tsgoodlist,
    theader
  },
  
  data() {
  return {
    tgoods1:[],
    tgoods2:[],
    tgoods3:[],
    tgoods4:[],
    tgoods5:[],
    tgoods6:[],
    navlist:[
      {src:'https://img02.hua.com/m/home/img/m_home_category_flower.png',
      name:'鲜花'},
      {src:'https://img02.hua.com/m/home/img/m_home_category_ppf.png',
      name:'永生花'},
      {src:'https://img02.hua.com/m/home/img/m_home_category_cake.png',
      name:'蛋糕'},         
      {src:'https://img02.hua.com/m/home/img/m_home_category_gift.png',
      name:'礼品'},
      {src:'https://img02.hua.com/m/home/img/m_home_category_chocolate.png',
      name:'巧克力'}
    ],
    list1:[
      {src:'https://img02.hua.com/m/home/img/m_home_use_lover.png',
      name:'送恋人'},
      {src:'https://img02.hua.com/m/home/img/m_home_use_elder.png',
      name:'送长辈'},
      {src:'https://img02.hua.com/m/home/img/m_home_use_friends.png',
      name:'送朋友'},
    ],
    list2:[
      {src:'https://img02.hua.com/m/home/img/m_home_use_birthday.png?0718',
      name:'生日祝福'},
      {src:'https://img02.hua.com/m/home/img/m_home_use_profess.png?0718',
      name:'表白求婚'},
      {src:'https://img02.hua.com/m/home/img/m_home_use_business.png?0718',
      name:'开业商务'},
      {src:'https://img02.hua.com/m/home/img/m_home_use_anniversary.png?0718',
      name:'周年纪念'},
    ],
    list3:[
      {src:'https://img02.hua.com/m/home/img/m_home_category_new.png?0718',
      name:'新品来袭'},
      {src:'https://img02.hua.com/m/home/img/m_home_category_quality.png?0718',
      name:'品味之选'},
      {src:'https://img02.hua.com/m/home/img/m_home_category_you.png?0718',
      name:'设计师臻选'}
    ],
  }
  },
  methods: {
    // 路由跳转
    typeSkip(index) {
      this.$router.push({path:'/sflower', query:{ index:index }});
    },

  },

   created() {
    this.$axios
      .post("https://m.hua.com/home/GetProductListPrice?itemcodes=9010966,9012177,9010011,9092112,9012154,9012243,9012055,9012009,9012201,9092149,9012204,9012092,9010736,9012440,1073247,1073185,1073033,1073244,5602016,5010023,5602045,5902028,1060038,1061019,1082001,1077029,1201002,1207010,1204041,1201003")
      .then(res => {
          this.tgoods1=res.data.Datas.ProductPrices.slice(0,8)
          this.tgoods2=res.data.Datas.ProductPrices.slice(8,14)
          this.tgoods3=res.data.Datas.ProductPrices.slice(14,18)
          this.tgoods4=res.data.Datas.ProductPrices.slice(18,22)
          this.tgoods5=res.data.Datas.ProductPrices.slice(22,26)
          this.tgoods6=res.data.Datas.ProductPrices.slice(26,30)
          console.log(this.tgoods3)
      });
   }
}
</script>




<style>
   @import '../assets/css/index.css'
</style>