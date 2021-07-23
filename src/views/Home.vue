<template>
<v-layout wrap class="wrappper grey darken-4 pa-4 mt-6" justify-center>
    <v-flex lg11 md12 sm12 xs12 >
        <v-layout wrap>
          <v-flex lg9 md8 sm12 class=" pr-3 pb-5 pl-3">
              <!-- SparkLine -->
            <SparkLine :symbol="Info ['2. Symbol']" :UpdatedAt="Info ['3. Last Refreshed']" :price="stockPrice" />
              <v-layout wrap>
                    <v-flex v-for="(item, i ) in extraStock" :key="i" lg3 md4 sm4 xs6 
                          class="d-flex pa-2 justify-center"  @click="getStock(item)">
                      <StockCards :TechName="item.title" :Price="item.price" :Performance="item.Performance" :Subtitle="item.sub"/>
                    </v-flex>
              </v-layout>
          </v-flex>
                          <!-- News card hidden on sm screen sizes -->
          <v-flex lg3 md4  class="hidden-sm-and-down pr-3 pb-5 pl-3">
              <News />
          </v-flex>
        </v-layout>
    </v-flex>
</v-layout>
</template>

<script>
  import StockCards from '../components/Cards/StockCards'
  import News from '../components/Cards/NewsCard'
  import SparkLine from '../components/Spark/SparkLine.vue'

  export default {
    name: 'Home',

    data() { 
      return { 
        extraStock: [
                      // Some fake Data to search on card click

          { title: 'TSLA34', sub: 'Tesla', price: '110.00',  Performance: '5'},
          { title: 'AMZO34', sub: 'Amazon', price: '130.00',  Performance: '2'},
          { title: 'FBOK34', sub: 'Facebook', price: '110.00',  Performance: '5'},
          { title: 'BIDI11', sub: 'Banco Inter', price: '110.00',  Performance: '5'},
          { title: 'MSFT34', sub: 'Microsoft', price: '110.00',  Performance: '5'},
        ]
      }
    },

    components: {
      StockCards,
      SparkLine,
      News
    },
    methods: { 
                // Get Stock onclick
      getStock(item) { 
        const search = item.title
        console.log('search', search)
        this.$store.dispatch('searchStock', search)
      }
    },
    computed: { 
      // Get stock information
      Info() { return this.$store.getters.Info},
      // Get Stock prices
      stockPrice() { return this.$store.getters.stockPrice}
    },
    mounted() { 
        // Get stock when page rendered
      this.$store.dispatch('getStock')
    }
  }
</script>
<style scoped>
.wrappper { 
  margin-left: 50px;
  margin-right: 50px;
}
@media only screen and (max-width: 700px) {
  .wrappper {
  margin-left: 0px;
  margin-right: 0px;
  /* display: none; */
  }
}
</style>
