<template>
  <v-app id="app">
    <!-- <EasyRefresh> -->
    <app-bar>
    </app-bar>
    <v-main>
       <router-view />
    </v-main>
    <!-- </EasyRefresh> -->
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
