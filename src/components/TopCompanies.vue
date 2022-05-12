<template>
  <v-carousel
    align-content-center
    cycle
    height="450"
    hide-delimiters
    interval="2500"
    show-arrows-on-hover
    class="grey lighten-3"
    align="center"
    justify="center"
  >
       <v-col cols="12">
        <div class="text-h2 text-center my-4 teal--text">
          Tob Companies
        </div>
    <v-carousel-item  v-for="(company, i) in companies" :key="i">
      <v-card
        align="center"
        justify="center"
        class="mx-auto mt-15 rounded-circle"
        max-width="200"
        max-height="200"
        circle
        rounded
        elevation-1
      >
        <v-img
          align="center"
          justify="center"
          class="rounded-circle"
          :src="company.src"
          height="200px"
          width="200px"
        ></v-img>
        <v-card-subtitle justify-center class="mt-1 text-center  text-h5 black--text">
          {{ company.subtitle }}
        </v-card-subtitle>
      </v-card>
    </v-carousel-item>
       </v-col>
  </v-carousel>

</template>

<script>
export default {
  data () {
    return {
      companies: [
        {
          src: require('../assets/syriatel.png'),
          subtitle: 'Syriatel'
        },
        {
          src: require('../assets/mtn.jpg'),
          subtitle: 'MTN'
        },
        {
          src: require('../assets/sham.jpg'),
          subtitle: 'Sham Wings'
        },
        {
          src: require('../assets/maryam.png'),
          subtitle: 'Maryam Store'
        },
        {
          src: require('../assets/talis.jpg'),
          subtitle: 'Talis'
        },
        {
          src: require('../assets/terranova.png'),
          subtitle: 'Terranova'
        },
        {
          src: require('../assets/ibnsina.jpg'),
          subtitle: 'Ibn Sina'
        },
        {
          src: require('../assets/ultram.jpg'),
          subtitle: 'Ultra Medica'
        },
        {
          src: require('../assets/asia.jpg'),
          subtitle: 'Asia'
        },
        {
          src: require('../assets/hafez.png'),
          subtitle: 'AL-Hafez'
        }
      ]
    }
  }
}
</script>

<style>
</style>
