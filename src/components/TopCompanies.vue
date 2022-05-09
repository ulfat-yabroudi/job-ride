<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
   <!-- <v-sheet
        height="100%"
      > -->
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>
  </v-card>
    </v-carousel-item>
   <!-- </v-sheet> -->
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ]
    }
  }
}
</script>

<style>

</style>
