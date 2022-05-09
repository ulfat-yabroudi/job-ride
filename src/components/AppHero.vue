<template>
  <v-img class="pt-1 mt-1 mb-1" src="../assets/bg9.jpg" height="600" contain>
    <v-layout column align-center justify-center>
      <v-row class="fill-height" align-content="center">
        <v-col class="text-left" cols="12">
          <!-- <h1
            class="
              font-weight-medium
              text-h2 text-left
              font-weight-thin
              mb-10
              justify-left
              black--text
            "
          >
            Choose your road from here!
          </h1> -->
          <v-container>
            <!-- <v-icon large color="teal accent-4 "> mdi-magnify </v-icon> -->
            <v-textarea
              label="enter your search here"
              prepend-inner-icon="mdi-magnify x-large"
              auto-grow
              outlined
              rows="1"
              row-height="10"
            ></v-textarea>
          </v-container>
        </v-col>
      </v-row>
    </v-layout>
  </v-img>
</template>

<script>
export default {}
</script>

<style>
</style>
