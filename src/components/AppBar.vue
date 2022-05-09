<template>
    <v-app-bar
      app
      dark
      class="teal accent-4"
      elevation="2"
      flat
      height="60px"
      absolute
      scroll-target="#scrolling-techniques"
      fixed
    >
      <v-img
        class="mx-2 ml-5"
        src="../assets/job.png"
        max-height="100"
        max-width="130"
        contain
      ></v-img>

      <!-- <v-app-bar-title class="ml-3"> JOB RIDE </v-app-bar-title> -->
      <v-spacer></v-spacer>

      <v-btn
        class="d-flex justify-center justify-space-around mr-5"
        large
        text
        height="35"
      >
        LogIn
      </v-btn>

      <v-btn
        class="d-flex justify-center justify-space-around mr-7"
        large
        text
        height="35"
      >
        Register
      </v-btn>
    </v-app-bar>
</template>
