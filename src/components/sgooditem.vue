<template>
<div>
    <router-link :to="'/sdetails'+'/'+number">
    <div class="product-item product-item-vertical">
        <a href="/product/9012089.html" class="navigation" data-link="9012089">
            <div class="product-item-pic">
                <img :src="'https://img01.hua.com/uploadpic/newpic/'+datalist[number].ItemCode+'.jpg_220x240.jpg'" :alt="datalist.Cpmc"/>
            </div>
            <div class="product-item-info">
                <p class="product-item-info-name  text-overflow-line2">{{datalist[number].Instro}}</p>
                <div class="product-item-info-bottom">
                    <p class="product-item-info-prices">
                        <strong data-id="9012089">¥{{datalist[number].Price}}</strong>
                    </p>
                </div>
            </div>
        </a>
    </div>
    </router-link>
</div>
</template>
<script>
export default {
    props:["datalist","number"],
    created() {
        console.log(this.datalist)
    },
}
</script>
<style lang="scss">
    
</style>