<template>
    <v-container id="reviews">
      <v-row  v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }">
      <v-col cols="12">
        <div class=" text-h2 text-center my-10 teal--text ">
          People Reviews
        </div>
      </v-col>
      <v-col
        v-for="(review, i) in reviews"
        :key="i"
        cols="3"
      >
    <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{review.title}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
         v-model="review.rate"
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>
    </v-card-text>
    </v-card>
      </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    reviews: [
      {
        src: require('../assets/syriatel.png'),
        subtitle: 'Syriatel'
      }
    ]
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

<style>

</style>
