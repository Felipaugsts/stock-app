<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="primary card  white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="(icon, i ) in icons"
          :key="i"
          class="mx-4 white--text"
          icon
        >   <v-btn icon blank :href="icon.to" >
          <v-icon size="24px" :color="icon.color" >
            {{ icon.icon }}
          </v-icon>
          </v-btn>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        This website was created by Felipe Augusto for academic purpose <br/>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong> <a href="Felipas.com" class="success--text">Felipas.com</a></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        {icon: 'mdi-web', color: 'grey', to: 'https://www.felipas.com/'},
        {icon: 'mdi-linkedin',color: 'blue', to: 'https://www.linkedin.com/in/felipe-augusto-091b8917a/'},
      ],
    }),
  }
</script>
<style scoped>
.card { 
    width: 100%;
}
a { 
    list-style: none;
    text-decoration: none;
}
</style>