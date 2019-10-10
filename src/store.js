import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartdata: [
      {
      'Cpmc': "花好月圆永生花台灯",
      'Instro': "精选进口奥斯汀永生玫瑰台灯",
      'ItemCode': "1073247",
      'LinePrice': 398,
      'Price': 298,
        'ischeck': true,
     'number':1
      },
      {
      'Cpmc': "我如此爱你-口红款999",
      'Instro': "专柜正品Dior#999口红＋进口永生玫瑰礼盒",
      'ItemCode': "1073185",
      'LinePrice': 788,
       'Price': 588,
        'ischeck': true,
        'number':1
      },
    ]
  },
  getters: {
    // 计算购物车总价
    allmoney(state) {
      let allmoney = 0;
       state.cartdata.forEach((val) => {
         allmoney += val.Price * val.number
       })
      return allmoney
    },
    // 计算购物车总数
    allnumber(state) {
      let allnumber = 0;
       state.cartdata.forEach((val) => {
         allnumber += val.number
       })
      return allnumber
    },
  },
  mutations: {
    // 购物车+
    add(state,index) {
      state.cartdata[index].number++
    },
    // 购物车-
    reduce(state,index) {
      state.cartdata[index].number--
    },
    // 购物车删除
    del(state,index) {
      Vue.delete(state.cartdata,index)
    },
    // 加入购物车
    addcart(state, obj) {
      console.log(obj)
      let bool = true;
      state.cartdata.forEach((val) => {
        if (obj.ItemCode == val.ItemCode) {
          val.number++;
          bool = false;
          return false
        }
     })

      if (bool) {
        Vue.set(obj, 'number', 1)
        Vue.set(obj, 'ischeck', true)
        state.cartdata.push(obj)
      }
    },
    


  },
  actions: {

  }
})
