<template>
        <v-app-bar
      app
      color="primary"
      dark
    >

      <div class="logo d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://freepikpsd.com/media/2019/10/stock.png-5-Transparent-Images.png"
          transition="scale-transition"
          width="40"
        /> -->

        <v-img
          alt="Vuetify Name"

          contain
          min-width="100"
          src="https://cdn.pixabay.com/photo/2014/03/24/13/48/wall-street-294443_640.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
        <div class="search-bar">
            <TextField :fields="text_sample" />
        </div>

    </v-app-bar>
</template>
<script>
import TextField from '@/components/Inputs/TextField'
export default {
  name: 'App',
  components: { 
    TextField
  },

  data: () => ({
    text_sample: {
      placeholder: 'Enter Text',
      text: ''
    },
  }),
};
</script>
<style scoped>
.logo { 
  margin-left: 10%;
  margin-right: 20%;;
}
.search-bar { 
  margin-right: 7%;
  margin-top: 8px;
}
</style>