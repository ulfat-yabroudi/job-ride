<template>
  <v-app id="app">
    <AppBar>
    </AppBar>
    <AppHero>
    </AppHero>
    <top-companies>
    </top-companies>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue'
import AppHero from './components/AppHero.vue'
import TopCompanies from './components/TopCompanies.vue'
export default {

  components: {
    AppBar,
    AppHero,
    TopCompanies
  }
}
</script>
<style>
.v-application {
  font-family: 'Teko' !important;
}

</style>
