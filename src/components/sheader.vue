<template>
  <div>
    <header class="headerbar">
      <div class="headerbar-left">
        <router-link to='/' class="navigation">
          <van-icon name="arrow-left" class="iconfont"/>
        </router-link>

      </div>
      <div class="headerbar-center">
        <p class="headerbar-content">{{title}}</p>
      </div>
      <div class="headerbar-right">
        <div class="navigation">
          <van-icon name="wap-nav" class="iconfont"/>
          <!--HeaderBarMenu-->

        </div>

      </div>
    </header>

    <nav class="filter">
      <div class="filter-item active">
        <a href="?r=0" class="navigation">综合</a>
      </div>
      <div class="filter-item">
        <a href="?r=4" class="navigation">销量</a>
      </div>
      <!--Dev:: data-sort 升序为asc,降序为desc,默认为升序-->
      <div class="filter-item" data-sort="desc">
        <a href="?r=2&act=price" class="navigation">
          价格
          <i class="filter-item-price"></i>
        </a>
      </div>
      <div class="filter-item">
        <a href="?r=3" class="navigation">新品</a>
      </div>
    </nav>
    <nav class="purpose">
      <div class="purpose-list">
        <div class="purpose-item">
          <a href="/songnvyouxianhua/" class="navigation">送女友</a>
        </div>
        <div class="purpose-item">
          <a href="/songnanyouxianhua/" class="navigation">送男友</a>
        </div>
        <div class="purpose-item">
          <a href="/youqingxianhua/" class="navigation">送朋友</a>
        </div>
        <div class="purpose-item">
          <a href="/songzhangbeixianhua/" class="navigation">送长辈</a>
        </div>
        <div class="purpose-item" id="showFilter">
          <a href="javascript:;" class="navigation">
            筛选
            <i class="iconfont iconfont-triangle-down"></i>
          </a>
        </div>
      </div>
      <aside class="purpose-layer" id="purposeAside">
        <div class="purpose-layer-shade"></div>
        <div class="purpose-layer-content">
          <div class="purpose-layer-warp">
            <h4>人群</h4>
            <div class="purpose-layer-list">
              <div class="purpose-layer-item">
                <a href="/songnvyouxianhua/" class="navigation">送女友</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/songnanyouxianhua/" class="navigation">送男友</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/youqingxianhua/" class="navigation">送朋友</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/songzhangbeixianhua/" class="navigation">送长辈</a>
              </div>
            </div>
            <h4>场合</h4>
            <div class="purpose-layer-list">
              <div class="purpose-layer-item">
                <a href="/aiqingxianhua/" class="navigation">爱情鲜花</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/shengrixianhua/" class="navigation">生日鲜花</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/tanbingweiwenxianhua/" class="navigation">探病慰问</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/businessFlower/" class="navigation">商务鲜花</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/zhufuqinghexianhua/" class="navigation">祝福庆贺</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/hunqingxianhua/" class="navigation">婚庆鲜花</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/daoqianxianhua/" class="navigation">道歉鲜花</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/aisixianhua/" class="navigation">哀思鲜花</a>
              </div>
            </div>
            <h4>花材</h4>
            <div class="purpose-layer-list">
              <div class="purpose-layer-item">
                <a href="/meigui/" class="navigation">玫瑰</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/baihe/" class="navigation">百合</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/kangnaixin/" class="navigation">康乃馨</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/xiangrikui/" class="navigation">向日葵</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/fulang/" class="navigation">扶郎</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/xiuqiu/" class="navigation">绣球</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/yujinxiang/" class="navigation">郁金香</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/matilian/?app_action=self" class="navigation">马蹄莲</a>
              </div>
            </div>
            <h4>类别</h4>
            <div class="purpose-layer-list">
              <div class="purpose-layer-item">
                <a href="/huashu/" class="navigation">传情花束</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/hezhuanghua/" class="navigation">创意花盒</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/pingchahua/" class="navigation">瓶插花</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/hualan/" class="navigation">精致花篮</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/businessFlower/kaiyehualan/" class="navigation">开业花篮</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/you/" class="navigation">设计师款</a>
              </div>
            </div>
            <h4>颜色</h4>
            <div class="purpose-layer-list">
              <div class="purpose-layer-item">
                <a href="/hongsexianhua/" class="navigation">红色</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/fensexianhua/" class="navigation">粉色</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/xiangbinsexianhua/" class="navigation">香槟色</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/huangsexianhua/" class="navigation">黄色</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/baisexianhua/" class="navigation">白色</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/zisexianhua/" class="navigation">紫色</a>
              </div>
              <div class="purpose-layer-item">
                <a href="/lansexianhua/" class="navigation">蓝色</a>
              </div>
            </div>
          </div>
          <div class="purpose-layer-clear">
            <a href="/flower/" class="navigation">清除选择</a>
          </div>
        </div>
      </aside>
    </nav>
  </div>
</template>
<script>
import Vue from 'vue';
import { Icon } from 'vant';
Vue.use(Icon);

export default {
    props:['title'],
    created() {
     console.log(13+this.title)
   }

}
</script>
<style lang="scss">
    
</style>