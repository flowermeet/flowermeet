<template>
  <div>
    <header class="headerbar">
      <div class="headerbar-back">
        <a href="javascript:huatools.navigateBack();" class="navigation">
          <i class="iconfont iconfont-arrow-left"></i>
        </a>
      </div>
      <div class="headerbar-content">
        <div class="headerbar-content-left">
          <i class="iconfont iconfont-search"></i>
        </div>
        <div class="headerbar-content-center">
          <a href="/home/searching" style="display:inline-block;width:100%;height:100%;">搜索鲜花、蛋糕、礼品</a>
        </div>
      </div>
    </header>

    <section class="catebox">
      <!--CategoryBox LeftMenu-->
      <!-- 侧边导航组件位置 -->
      <saside></saside>
      <!-- 热门推荐 -->
      <!--CategoryBox RightDetails-->
      <section class="catebox-details">
        <article id="flower" name="flower" class="catebox-details-mode active">
                            <header class="catebox-details-banner">
                                <a class="navigation" href="/flower/">
                                    <img src="https://img02.hua.com/m/category/Classification/flower.png?v" alt="">
                                </a>
                            </header>
                                                        <div class="catebox-details-body">
                                        <div class="catebox-details-title">
                                            <h4 class="catebox-details-title-left">对象</h4>
                                            <div class="catebox-details-title-right">
                                                    <a href="/ranking/" class="navigation"><i class="iconfont iconfont-trophy"></i>鲜花排行榜</a>
                                            </div>
                                        </div>

                                    <nav class="catebox-details-list ">
                                                <div class="catebox-details-item">
                                                    <a href="/flower/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png" alt="全部">
                                                        <p class="catebox-details-item-desc">全部</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/songnvyouxianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png" alt="送女友鲜花">
                                                        <p class="catebox-details-item-desc">送女友鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/songnanyouxianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Boyfriend.png" alt="送男友鲜花">
                                                        <p class="catebox-details-item-desc">送男友鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/songzhangbeixianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Elder.png" alt="送长辈鲜花">
                                                        <p class="catebox-details-item-desc">送长辈鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/youqingxianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Friend.png" alt="送朋友鲜花">
                                                        <p class="catebox-details-item-desc">送朋友鲜花</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                                <div class="catebox-details-body">
                                        <div class="catebox-details-title">
                                            <h4 class="catebox-details-title-left">场合</h4>
                                            <div class="catebox-details-title-right">
                                            </div>
                                        </div>

                                    <nav class="catebox-details-list ">
                                                <div class="catebox-details-item">
                                                    <a href="/aiqingxianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Love.png" alt="爱情鲜花">
                                                        <p class="catebox-details-item-desc">爱情鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/shengrixianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Birthday.png" alt="生日鲜花">
                                                        <p class="catebox-details-item-desc">生日鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/tanbingweiwenxianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Visit.png" alt="探望慰问">
                                                        <p class="catebox-details-item-desc">探望慰问</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/businessFlower/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Business.png" alt="商务鲜花">
                                                        <p class="catebox-details-item-desc">商务鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/zhufuqinghexianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Congratulate.png" alt="祝福庆贺">
                                                        <p class="catebox-details-item-desc">祝福庆贺</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/hunqingxianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Wedding.png" alt="婚庆鲜花">
                                                        <p class="catebox-details-item-desc">婚庆鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/daoqianxianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Apologize.png" alt="道歉鲜花">
                                                        <p class="catebox-details-item-desc">道歉鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/aisixianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Grief.png" alt="哀思鲜花">
                                                        <p class="catebox-details-item-desc">哀思鲜花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/worldflora/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_gat.png" alt="港澳台鲜花">
                                                        <p class="catebox-details-item-desc">港澳台鲜花</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                                <div class="catebox-details-body">
                                        <div class="catebox-details-title">
                                            <h4 class="catebox-details-title-left">花材</h4>
                                            <div class="catebox-details-title-right">
                                            </div>
                                        </div>

                                    <nav class="catebox-details-list ">
                                                <div class="catebox-details-item">
                                                    <a href="/meigui/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Rose.png" alt="玫瑰">
                                                        <p class="catebox-details-item-desc">玫瑰</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/kangnaixin/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Carnation.png" alt="康乃馨">
                                                        <p class="catebox-details-item-desc">康乃馨</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/xiangrikui/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Sunflower.png" alt="向日葵">
                                                        <p class="catebox-details-item-desc">向日葵</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/baihe/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Lily.png" alt="百合">
                                                        <p class="catebox-details-item-desc">百合</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/xiuqiu/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Hydrangea.png" alt="绣球">
                                                        <p class="catebox-details-item-desc">绣球</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/yujinxiang/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Tulips.png" alt="郁金香">
                                                        <p class="catebox-details-item-desc">郁金香</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/fulang/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Gerbera.png" alt="扶郎/太阳花">
                                                        <p class="catebox-details-item-desc">扶郎/太阳花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/matilian/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Calla.png" alt="马蹄莲">
                                                        <p class="catebox-details-item-desc">马蹄莲</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                                <div class="catebox-details-body">
                                        <div class="catebox-details-title">
                                            <h4 class="catebox-details-title-left">玫瑰颜色</h4>
                                            <div class="catebox-details-title-right">
                                            </div>
                                        </div>

                                    <nav class="catebox-details-list ">
                                                <div class="catebox-details-item">
                                                    <a href="/hongsexianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Red.png?v" alt="红玫瑰">
                                                        <p class="catebox-details-item-desc">红玫瑰</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/fensexianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Pink.png?v" alt="粉玫瑰">
                                                        <p class="catebox-details-item-desc">粉玫瑰</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/baisexianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_White.png?v" alt="白玫瑰">
                                                        <p class="catebox-details-item-desc">白玫瑰</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/zisexianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Purple.png?v" alt="紫玫瑰">
                                                        <p class="catebox-details-item-desc">紫玫瑰</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/huangsexianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Yellow.png?v" alt="黄玫瑰">
                                                        <p class="catebox-details-item-desc">黄玫瑰</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/xiangbinsexianhua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Champagne.png?v" alt="香槟色">
                                                        <p class="catebox-details-item-desc">香槟色</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                                <div class="catebox-details-body">
                                        <div class="catebox-details-title">
                                            <h4 class="catebox-details-title-left">类别</h4>
                                            <div class="catebox-details-title-right">
                                            </div>
                                        </div>

                                    <nav class="catebox-details-list ">
                                                <div class="catebox-details-item">
                                                    <a href="/huashu/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bouquet.png" alt="花束">
                                                        <p class="catebox-details-item-desc">花束</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/hezhuanghua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Flowerbox.png" alt="花盒">
                                                        <p class="catebox-details-item-desc">花盒</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/hualan/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_flowerbasket.png" alt="桌面花篮">
                                                        <p class="catebox-details-item-desc">桌面花篮</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/pingchahua/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bottle.png" alt="瓶插花">
                                                        <p class="catebox-details-item-desc">瓶插花</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/giftsBasket/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Fruitbasket.png" alt="果篮">
                                                        <p class="catebox-details-item-desc">果篮</p>
                                                    </a>
                                                </div>
                                                <div class="catebox-details-item">
                                                    <a href="/businessFlower/kaiyehualan/" class="navigation">
                                                        <img class="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_business.png" alt="开业花篮">
                                                        <p class="catebox-details-item-desc">开业花篮</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                                <div class="catebox-details-body">
                                        <div class="catebox-details-title">
                                            <h4 class="catebox-details-title-left">价格</h4>
                                            <div class="catebox-details-title-right">
                                            </div>
                                        </div>

                                    <nav class="catebox-details-list catebox-details-list-text">
                                            <div class="catebox-details-item">
                                                    <a href="/tejiaxianhua/" class="navigation">
                                                        <p class="catebox-details-item-desc">特价鲜花</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/xianhuajiage/0-150/" class="navigation">
                                                        <p class="catebox-details-item-desc">150元以下</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/xianhuajiage/150-250/" class="navigation">
                                                        <p class="catebox-details-item-desc">150-200元</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/xianhuajiage/250-350/" class="navigation">
                                                        <p class="catebox-details-item-desc">250-350元</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/xianhuajiage/350-550/" class="navigation">
                                                        <p class="catebox-details-item-desc">350-550元</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/xianhuajiage/550-800/" class="navigation">
                                                        <p class="catebox-details-item-desc">550-800元</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/xianhuajiage/800-99999/" class="navigation">
                                                        <p class="catebox-details-item-desc">800元以上</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                                <div class="catebox-details-body">
                                        <div class="catebox-details-title">
                                            <h4 class="catebox-details-title-left">枝数</h4>
                                            <div class="catebox-details-title-right">
                                            </div>
                                        </div>

                                    <nav class="catebox-details-list catebox-details-list-text">
                                            <div class="catebox-details-item">
                                                    <a href="/jiuduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">9枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/shiyiduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">11枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/shijiuduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">19枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/ershierduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">22枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/ershijiuduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">29枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/sanshisanduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">33枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/wushiduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">50枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/liushiliuduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">66枝</p>
                                                    </a>
                                                </div>
                                            <div class="catebox-details-item">
                                                    <a href="/jiushijiuduomeigui/" class="navigation">
                                                        <p class="catebox-details-item-desc">99枝以上</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                    </article>
      </section>
    </section>
  </div>
</template>
<script>
import saside from '../views/saside'
export default {
    components:{
        saside
    }
};

</script>


<style lang="scss">
.catebox {
  background-color: #fff;
}
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
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-overflow-line2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.text-overflow-line3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -o-text-overflow: ellipsis;
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
html {
  background: #fff;
}
body {
  background: #fff;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
a:active {
  opacity: 0.8;
}
.active > a:active {
  background-color: transparent;
  opacity: 1;
}
.iconfont {
  font-size: 1.14285714rem;
}
.navigation {
  display: block;
}
.headerbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 9;
  height: 3.14285714rem;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  background: #fff;
  overflow: hidden;
  border-bottom: 2px solid #f1f3f6;
}
.headerbar-back {
  width: 3.14285714rem;
  max-width: 3.14285714rem;
  min-width: 3.14285714rem;
  height: 3.14285714rem;
  line-height: 3.14285714rem;
  text-align: center;
}
.headerbar-back > .iconfont {
  font-size: 1.42857143rem;
}
.headerbar-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 2.57142857rem;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0.28571429rem;
  background-color: #e9ecf0;
  border-radius: 0.28571429rem;
}
.headerbar-content-left,
.headerbar-content-right {
  width: 2.57142857rem;
  height: 2.57142857rem;
  line-height: 2.57142857rem;
  text-align: center;
}
.headerbar-content-center {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-right: 1.14285714rem;
  color: #71797f;
}
.headerbar-content-center input {
  color: #232628;
  width: 100%;
  height: 2.57142857rem;
  background-color: transparent;
  font-size: 1rem;
}
.catebox {
  position: relative;
  width: 100%;
  height: -webkit-calc(100vh - 3.5rem);
  height: calc(100vh - 3.5rem);
  padding-top: 3.14285714rem;
}
.catebox-menu {
  position: absolute;
  top: 3.14285714rem;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 21.06666667%;
  border-right: 1px solid #e9ecf0;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  //   -webkit-backface-visibility: hidden;
  //   -webkit-perspective: 1000;
  overflow-x: hidden;
  overflow-y: auto;
}
.catebox-menu-item {
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  overflow: hidden;
  position: relative;
}
.catebox-menu-item::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 2px;
  height: 2.28571429rem;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: transparent;
}
.catebox-menu-item > a {
  display: block;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.catebox-menu-item.active {
  color: #ff734c;
}
.catebox-menu-item.active::before {
  background-color: #ff734c;
}
.catebox-details {
  position: absolute;
  top: 3.14285714rem;
  left: 21.06666667%;
  width: 78.93333333%;
  bottom: 0;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  //   -webkit-backface-visibility: hidden;
  //   -webkit-perspective: 1000;
  overflow-x: hidden;
  overflow-y: auto;
}
.catebox-details-mode {
  display: none;
  padding: 0.85714286rem 0.85714286rem 3.14285714rem;
}
.catebox-details-mode.active {
  display: block;
}
.catebox-details-banner {
  height: 7rem;
  overflow: hidden;
  margin-bottom: 0.85714286rem;
}
.catebox-details-banner > .navigation {
  position: relative;
  display: block;
  height: 7rem;
}
.catebox-details-banner-price {
  position: absolute;
  top: 45.92%;
  left: 4.04%;
  font-size: 1rem;
  line-height: 1.42857143rem;
  font-weight: 500;
}
.catebox-details-banner-price p {
  display: inline-block;
  margin-left: 0.21428571rem;
  font-weight: normal;
  text-decoration: line-through;
  font-size: 0.71428571rem;
  line-height: 1.42857143rem;
}
.catebox-details-body {
  padding: 0.57142857rem 0.28571429rem;
  border-radius: 0.14285714rem;
  margin-bottom: 0.85714286rem;
  -webkit-box-shadow: 0px 2px 6px 0px #e9ecf0;
  box-shadow: 0px 2px 6px 0px #e9ecf0;
}
.catebox-details-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 0.85714286rem;
  padding: 0 0.85714286rem;
}
.catebox-details-title-left,
.catebox-details-title-right {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 1.42857143rem;
  line-height: 1.42857143rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.catebox-details-title-left {
  font-weight: normal;
}
.catebox-details-title-right {
  text-align: right;
  color: #71797f;
}
.catebox-details-title-right > .navigation {
  display: inline-block;
  padding: 0 0.28571429rem;
  height: 2.57142857rem;
  font-size: 0.85714286rem;
}
.catebox-details-title-right > .navigation .iconfont {
  font-size: inherit;
}
.catebox-details-list:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.catebox-details-list-square {
  padding: 0 0.14285714rem;
}
.catebox-details-list-square .catebox-details-row {
  font-size: 0;
  border-bottom: 1px solid #f7f9fa;
}
.catebox-details-list-square
  .catebox-details-row:first-child
  .catebox-details-item {
  height: 3.42857143rem;
  padding-top: 0;
}
.catebox-details-list-square .catebox-details-row:last-child {
  border-bottom: none;
}
.catebox-details-list-square
  .catebox-details-row:last-child
  .catebox-details-item {
  height: 3.42857143rem;
  padding-bottom: 0;
}
.catebox-details-list-square .catebox-details-item {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: none;
  display: inline-block;
  height: 4rem;
  border-right: 1px solid #f7f9fa;
  text-align: center;
  vertical-align: top;
}
.catebox-details-list-square .catebox-details-item:last-child {
  border-right: none;
}
.catebox-details-list-square .catebox-details-item .navigation img {
  width: 5.14285714rem;
  height: 2.85714286rem;
  border-radius: 0;
}
.catebox-details-list-text .catebox-details-item {
  margin: 0 0 0.85714286rem;
  padding: 0;
}
.catebox-details-list-text .catebox-details-item .navigation {
  width: 5.14285714rem;
  height: 2.57142857rem;
  margin: 0 auto;
  border-radius: 0.14285714rem;
  background: #f7f9fa;
}
.catebox-details-list-text .catebox-details-item .catebox-details-item-desc {
  margin: 0;
  font-size: 0.85714286rem;
  color: #232628;
  line-height: 2.57142857rem;
}
.catebox-details-item {
  float: left;
  width: 33.33333333%;
  padding: 0.57142857rem 0;
}
.catebox-details-item > .navigation {
  text-align: center;
}
.catebox-details-item > .navigation > img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  overflow: hidden;
}
.catebox-details-item > .navigation > p {
  font-size: 0.85714286rem;
  font-weight: 300;
  line-height: 1.33333333;
  max-width: 6em;
  margin: 0.57142857rem auto 0;
  color: #232323;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.catebox-details-item > .navigation > p:empty {
  display: none;
}
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  display: flex;
  align-items: center;
  height: 3.5rem;
  overflow: hidden;
  background: #f7f9fa;
}
.tabbar-item {
  flex: 1;
  text-align: center;
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
  padding-top: 0.28571429rem;
  box-sizing: border-box;
}
.tabbar-item .iconfont {
  font-size: 1.71428571rem;
  margin-top: 0.42857143rem;
  position: relative;
}
.tabbar-item .iconfont[data-dot]::after {
  content: " ";
  width: 0.42857143rem;
  height: 0.42857143rem;
  padding: 0;
  min-width: auto;
}
.tabbar-item .iconfont::after {
  content: attr(data-cartnum);
  position: absolute;
  top: 0;
  left: 90%;
  min-width: 0.71428571rem;
  line-height: 1;
  padding: 0 0.14285714rem;
  font-size: 0.71428571rem;
  color: #fff;
  background: #ff734c;
  border-radius: 1rem;
}
.tabbar-item .iconfont::after:empty {
  display: none;
}
.tabbar-item p {
  font-size: 0.78571429rem;
}
</style>