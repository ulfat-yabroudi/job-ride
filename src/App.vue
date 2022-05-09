<template>
  <v-app id="app">
    <app-bar>
    </app-bar>
    <v-main>
       <router-view />
    </v-main>
  </v-app>
</template>
<script>
import AppBar from '@/components/AppBar.vue'
export default {
  name: 'App',
  components: {
    AppBar
  }
}
</script>
<style>
.v-application {
  font-family: 'cairo' !important;
}

</style>
