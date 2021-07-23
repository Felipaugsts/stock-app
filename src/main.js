import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from "firebase";

Vue.config.productionTip = false

  var firebaseConfig = {
    apiKey: "AIzaSyBXBmDVVxTWE8XoyF2Kw9DrE-OAEvVanOo",
    authDomain: "stock-web-price.firebaseapp.com",
    projectId: "stock-web-price",
    storageBucket: "stock-web-price.appspot.com",
    messagingSenderId: "78691076952",
    appId: "1:78691076952:web:47cd365406f5969bb6732d",
    measurementId: "G-YZHF9DLCDD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
