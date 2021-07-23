import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    StockInformation: '',
    stockPrice: '',
    isloading: false
  },
  getters : { 
      Info: (state) => state.StockInformation,
      stockPrice: (state) => state.stockPrice,
      isloading: (state) => state.isloading
  },
  mutations: {
      StockInformation(state, stockInfo) { state.StockInformation = stockInfo; },

      stockPrice(state, stockPrice) {  state.stockPrice = stockPrice; },

      isloading(state) {  state.isloading = !state.isloading }
  },
  actions: {

async searchStock({commit}, item) {
  commit('isloading')
await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol='+item+'.sa&apikey=JQL8CA8U78P0TXDS')
  .then(resp => resp.json())
  .then(response => {
    console.log("response", response['Meta Data']['2. Symbol'])
    const stockInfo = response['Meta Data']
    const highLow = Object.keys(response['Time Series (Daily)']).map(date => {
      return {
        date,
        high: response['Time Series (Daily)'][date]['2. high'],
        low: response['Time Series (Daily)'][date]['3. low'],
      }
    })
    const stockPrice = highLow[0]
    commit('StockInformation', stockInfo)
    commit('stockPrice', stockPrice)
        commit('isloading')
  })
  .catch(error => {
    console.log(error);
  });
},

async getStock({commit}) {
  commit('isloading')
await fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=petr4.sa&apikey=JQL8CA8U78P0TXDS')
  .then(resp => resp.json())
  .then(response => {
    console.log("response", response['Meta Data']['2. Symbol'])
    const stockInfo = response['Meta Data']
    const highLow = Object.keys(response['Time Series (Daily)']).map(date => {
      return {
        date,
      }
    })
    const stockPrice = highLow[0]
    commit('StockInformation', stockInfo)
    commit('stockPrice', stockPrice)
        commit('isloading')
  })
  .catch(error => {
    console.log(error);
    commit('isloading')
  });
}
  },
  modules: {
  }
})
