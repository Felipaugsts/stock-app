<template>
  <v-card
    class="card mx-auto"
    color="primary"
    flat
  >
    <v-card-title>
      <v-btn icon :loading="isloading" class="white--text mr-2 hidden-sm-and-down">

      <v-icon
        :color="checking ? 'white' : 'success'"
        class="mr-2"
        size="44"
      >
        mdi-currency-usd-off
      </v-icon>
      </v-btn>
      <v-row align="start" class=" d-flex flex-column">
        <div class="caption ml-3 grey--text text-uppercase">
          {{symbol}}
        </div>
        
        <div class="price success--text ml-2  mb-4">
          <span
            class="display-1 font-weight-black"
            
          >{{price.high}} </span>
          <strong> BRL</strong>
        </div>
      </v-row>
      <div class="d-flex flex-column" id="details">
        <div class="float-right caption mb-1 grey--text text-uppercase">
         Highest: <strong>{{price.high}} BRL</strong>
        </div>

        <div class="float-right caption mb-12 grey--text text-uppercase">
         Lowest: <strong>{{price.low}} BRL</strong>
        </div>

      </div>
    </v-card-title>

  <v-card
    class="sheetCard mt-4 mx-auto primary " flat
    
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="primary"
      elevation="12"
      max-width="calc(100% - 0px)"
    >
        <v-sparkline
          :value="value"
          color="success"
          line-width="1"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <!-- <template v-slot:label="item">
            ${{ item.value }}
          </template> -->
        </v-sparkline>
    </v-sheet>

        <v-card-text class="pt-0">
      <div class="subheading font-weight-light grey--text">
        Last Campaign Performance
      </div>
      <v-divider class="my-2"></v-divider>
      <v-icon
        class="mr-2"
        color="white"
        small
      >
        mdi-clock
      </v-icon>
      <span class="text-caption grey--text font-weight-light">last updated: {{UpdatedAt}}</span>
    </v-card-text>

  </v-card>
  </v-card>
</template>

<script>

  export default {
    props: ['symbol', 'UpdatedAt', 'price'],
    data: () => ({
      checking: false,
            value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
        423,
        446,
        675,
        510,
        590,
        
      ],
      
    }),
    computed: { 
      isloading() {return this.$store.getters.isloading},
      
    }
  }
</script>
<style scoped>
.card { 
width:100%
}
/* @media only screen and (min-width: 850px) {
  .card {
    max-width:auto;
  }
} */
.sheetCard { 
  width:90%
}
@media only screen and (max-width: 600px) {
  .sheetCard {
    width: 100%;
  }
}
.sheet { 
  max-width: 100%;
}
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>