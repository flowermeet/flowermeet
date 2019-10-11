<template>
    <div class="product-item product-item-vertical"
    @click='turn(datalist[number].ItemCode)'>
        <a class="navigation">
            <div class="product-item-pic">
                <img :src="'https://img01.hua.com/uploadpic/newpic/'+datalist[number].ItemCode+'.jpg_220x240.jpg'" />
            </div>
            <div class="product-item-info">
                <p class="product-item-info-name  text-overflow-line2">{{datalist[number].Instro}}</p>
                <p class="product-prices">
                      ¥{{datalist[number].Price}}
                 </p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props:["datalist","number"],
    methods:{
      turn(code) {
       this.$router.push({path:'/detail', 
         query:{ code:code }
      })
     }
    },
}
</script>

<style lang="scss">
    .product-prices {
    font-size: 1rem;
    color: #FF734C;
    font-weight: 500;
    position: absolute;
    bottom: 5px;
    }
    .product-item {
        position: relative;
    }
</style>