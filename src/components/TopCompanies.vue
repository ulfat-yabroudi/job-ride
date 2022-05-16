<template>
  <v-carousel
    align-content-center
    cycle
    height="450"
    hide-delimiters
    interval="3500"
    show-arrows-on-hover
    align="center"
    justify="center"
  >
    <v-col cols="12">
      <div class="text-h2 text-center my-4 teal--text">Tob Companies</div>
      <v-carousel-item v-for="(company, i) in companies" :key="i">
        <v-row>
        <v-card
          v-for="(c, j) in company"
          :key="j"
          align="center"
          justify="center"
          class="mx-auto mt-11 rounded-circle"
          max-width="180"
          max-height="150"
          circle
          rounded
          elevation-1
        >
          <v-img
            align="center"
            justify="center"
            class="rounded-circle"
            :src="c.src"
            height="150px"
            width="180px"
          ></v-img>
          <v-card-subtitle
            justify-center
            class="mt-1 text-center text-h5"
          >
            {{ c.subtitle }}
          </v-card-subtitle>
        </v-card>
        </v-row>
      </v-carousel-item>
    </v-col>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      companies: [
        [
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
          }
        ],
        [
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
          }
        ],

        [
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
      ]
    }
  }
}
</script>

<style>
</style>
