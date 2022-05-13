<template>
  <v-app id="app">
    <app-bar>
    </app-bar>
    <v-main>
       <router-view />
    </v-main>
    <footer-sec />
  </v-app>
</template>
<script>
import AppBar from '@/components/AppBar.vue'
import FooterSec from '@/components/FooterSec.vue'
export default {
  name: 'App',
  components: {
    AppBar,
    FooterSec
  }
}
</script>
<style>
.v-main{
  font-family: 'macondo' !important;
}
</style>
