<template>
  <div>
    <!-- 头部 -->
    <header class="headerbar">
      <div class="headerbar-left">
        <router-link to="/">
          <van-icon name="arrow-left" class="iconfont" />
        </router-link>
      </div>
      <div class="headerbar-logo">
        <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" />
      </div>
      <div class="headerbar-right" id="onlineChat">
        <div class="headerbar-right-kf active">
          <van-icon name="wap-nav" class="iconfont" />
        </div>
      </div>
    </header>
    <img :src="'https://img01.hua.com/uploadpic/newpic/'+codeid+'.jpg'" alt class="bannerimg" />

    <section class="proinfo">
      <div class="proinfo-head">
        <div class="proinfo-head-title">
          99枝玫瑰赠德芙心语巧克力-33枝戴安娜、66枝红玫瑰、1扎满天星
          <span class="text-orange">张杰演唱会定制款</span>
        </div>
        <!-- 收藏图标 -->
        <div class="proinfo-head-collect" 
        v-if='detaildata.iscolect==false'
        @click="detaildata.iscolect=true"
        >
          <a href="javascript:;" class="navigation">
            <van-icon name="star-o" class="iconfont" />
          </a>
        </div>

        <div class="proinfo-head-collect second" 
         v-else
         @click="detaildata.iscolect=false">
          <a href="javascript:;" class="navigation">
            <van-icon name="star" class="iconfont" />
          </a>
        </div>

      </div>
      <div class="proinfo-body">
        <div class="proinfo-body-price">
          <span class="proinfo-body-price-sjg">¥{{detaildata.data.Price.Default.Sjg}}</span>
          <s class="proinfo-body-price-jg">¥{{detaildata.data.Price.Default.Jg}}</s>
        </div>
        <div class="proinfo-body-sales">
          已售
          <span>{{detaildata.data.SalesVolume}}</span>件
        </div>
      </div>
    </section>

    <div class="media">
      <div class="media-left">
        <van-icon name="graphic" class="iconfont" />
      </div>
      <div class="media-center">
        <font class="fontsize-16">
          APP下单立减
          <i>{{detaildata.data.VpsSaveMoney}}</i>元
        </font>
      </div>
      <div class="media-right">
        <van-icon name="arrow" class="iconfont" />
      </div>
    </div>

    <section class="detailsinfo">
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">花语</div>
        <div class="detailsinfo-item-desc">你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。</div>
      </div>
      <div class="detailsinfo-item">
        <div class="detailsinfo-item-title">材料</div>
        <div class="detailsinfo-item-desc">
          高档礼盒装鲜花:19枝红玫瑰，勿忘我0.1扎
          <br />
        </div>
      </div>
      <div data-toggle="true" class="detailsinfo-item">
        <div class="detailsinfo-item-title">配送</div>
        <div
          class="detailsinfo-item-desc address"
        >限送100多个主要城市的市区及近郊：北京,上海,深圳,广州,成都,武汉,南京,杭州,苏州,天津,西安,长沙,东莞,厦门,佛山,沈阳,合肥,重庆,大连,郑州,青岛,太原,无锡,石家庄,济南,宁波,哈尔滨,乌鲁木齐,贵阳,昆明,福州,长春,南昌,兰州,珠海,南宁,中山,常州,金华,邯郸,泉州,海口,嘉兴,南通,呼和浩特,廊坊,唐山,温州,徐州,绵阳,烟台,襄阳,保定,潍坊,镇江,衡阳,包头,赣州,扬州,清远,荆州,莆田,汉中,洛阳,湛江,九江,鞍山,大庆,秦皇岛,张家口,桂林,吉林,淄博,蚌埠,柳州,遵义,邢台,宜春,漳州,三亚,宜宾,东营,临沂,德州,开封,大同,龙岩,齐齐哈尔,连云港,新乡,黄冈,焦作,十堰,驻马店,信阳,牡丹江,黄石,宝鸡,丹东,阜阳,北海,聊城,锦州,许昌,内江,萍乡,安庆,承德,商丘,盘锦,乐山,沧州,河源,营口,平顶山,临汾,韶关,日照,新余,晋城,松原,淮北,淮南,晋中,潮州,滨州,自贡,六安,株州,濮阳,常熟,晋江,顺德,江阴,吴江,昆山,义乌,惠阳,银川,温江,燕郊,新都,涿州,南沙,宜兴,即墨,海安县,都江堰,增城,仙桃,菏泽</div>
        <div class="detailsinfo-item-right">
          <van-icon name="arrow-down" class="iconfont" />
        </div>
      </div>
    </section>

    <div class="media first">
      <div class="media-left">已选</div>
      <div class="media-center">一如初见</div>
      <div class="media-right">
        <van-icon name="ellipsis" class="iconfont" />
      </div>
    </div>

    

   <!-- 地址 -->
    <van-cell is-link @click="showPopup">
      <div class="media">
            <div class="media-left">配送至</div>
            <div class="media-center">
              <p>
                <van-icon name="location-o" class="iconfont" />&nbsp;
                <span>请选择配送地区</span>
              </p>
              <p class="media-desc"></p>
            </div>
            <div class="media-right">
              <van-icon name="ellipsis" class="iconfont" />
            </div>
      </div>
    </van-cell>

    <van-popup v-model="show"
     position="bottom"
     :style="{ height: '20%' }">
      <!-- <van-area :area-list="areaList" /> -->
    </van-popup>

   

    <!-- 底部导航购物车 -->
    <nav class="tabbar">
      <div class="tabbar-left">
        <a  class="tabbar-item">
          <van-icon name="service-o" class="iconfont" />
          <p>客服</p>
        </a>

        <router-link to='/cart' class="tabbar-item">
          <van-icon name="shopping-cart-o" class="iconfont" />
          <van-tag round type="danger"
            style='position:absolute;
                   top:0px;
                   left:45px;'
          >{{allnumber}}</van-tag>
          <p>购物车</p>
        </router-link>

      </div>
      <div class="tabbar-right">

        <a class="tabbar-item tabbar-item-block"
        @click='addcart(detaildata)'
        >加入购物车</a>

        <a
          id="soonBuy"
          href="/shopping/soonbuy?num=1&amp;pp=9010970"
          class="tabbar-item tabbar-item-block tabbar-item-orange"
        >立即购买</a>
      </div>
    </nav>

    <img :src="'https://img01.hua.com/uploadpic/newpic/'+codeid+'.jpg'" alt class="bannerimg" style='margin-top:50px'/>

  </div>
</template>

<script>
import Vue from 'vue';
import { Tag } from 'vant';
Vue.use(Tag);

import { Area } from 'vant';
Vue.use(Area);

  export default {
    components: {},
    data() {
      return {
        codeid: this.$route.query.code,
        detaildata: {},
        show: false
      };
    },
    created() {
      this.$axios
        .post("https://m.hua.com/Product/DetailPrice?code=" + this.codeid)
        .then(res => {
          this.detaildata = res;
          Vue.set(this.detaildata, 'iscolect', false)
            console.log(this.detaildata)
        });
    },
    computed: {
      allnumber() {
        return this.$store.getters.allnumber
      },
    },
    methods:{
      addcart(obj) {
         this.$store.commit('addcart',obj)
      },
      showPopup() {
       this.show = true;
     }
    }

  };
</script>

<style>
  @import "../assets/css/detail.css";
</style>