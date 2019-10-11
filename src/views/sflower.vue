<template>
    <div>
       <sheader :title='title[codeIndex]'></sheader> 
       <sgooditem :datalist='list' v-for="(item,index) in list" :key="index" :number="index" >
        </sgooditem> 
    </div>
</template>
<script>
import sheader from '../components/sheader'
import sgooditem from '../components/sgooditem'

export default {
    components:{
      sheader,
      sgooditem
    },
    data() {
      return {
        list:[],
        codeIndex: this.$route.query.index,
        codeList:['9012177,9010011,9010966,9012154,9010855,9012332,9012089,9012009,9012437,9012243,9012345,9010969', 
                  '1073263,1073186,1073247,1073264,1060030,1073244,1070076,1073120,1060022,1073209,1073033,1073181',
                  '5302015,5302066,5302019,5302017,5302063,5302008,5302010,5302014,5302003,5902028,5302062,5302071',
                  '1076062,1070072,1076057,1076067,1077008,1077011,1061053,1077022,1076053,1077024,1076040,1070074',
                  '1207002,1201003,1201002,1207050,1207008,1201019,1207062,1207068,1207051,1207071,1207070,1207040'],
        title:['鲜花','永生花','蛋糕','礼品','巧克力']
      }
    },
     created() {
       console.log(this.$route)
      this.$axios
      .post("https://m.hua.com/home/GetProductListPrice?itemcodes=" + this.codeList[this.codeIndex])
      .then(res => {
        console.log('12', res)
        this.list=res.data.Datas.ProductPrices
      });

  },
  
}
</script>
<style lang="scss">
@import '../assets/css/sflower.css'

</style>