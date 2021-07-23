
<template>
  <div class="card">
    <v-card flat class=" primary rounded-lg ma-2 ">
      <v-card-title class="white--text mt-3">{{TechName}}</v-card-title>
      <v-card-subtitle class="white--text"> 
        <v-icon small class="mr-2" color="white">mdi-star</v-icon>
        <span class="mt-3">{{Subtitle}}</span>

        <h2 class="mt-8 success--text">$ {{Price}}</h2>
        <h5 class="red--text font-weight-light">{{Performance}}% This week</h5>
      </v-card-subtitle>
    </v-card>
  </div>
</template>
<script>
export default { 
props: ['TechName', 'Price', 'Subtitle', 'Performance' ]
}
</script>
<style scoped>

.card {
  width: 220px;
  height: 200px;
  margin-bottom: 10px;
  margin-top: 9px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid #616161;
}
.card:hover { 
    border: 1px solid #BDBDBD;
}
</style>