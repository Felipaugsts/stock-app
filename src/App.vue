<template>
  <v-app>
    <Navbar />      <!-- Navigation Bar -->
    <v-main class="grey darken-4">
      <router-view/>
    </v-main>
    <Footer />     <!-- Footer -->
  </v-app>
</template>
<script>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Footer/Footer.vue'
export default {
  components: { 
    Navbar,
    Footer
  }
}
</script>


