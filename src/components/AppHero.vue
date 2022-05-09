<template>
  <v-card height="600">
    <v-row class="fill-height" align-content="center">
      <v-col class="text-left justify-start" cols="7" sm="6">
        <h2
          class="
            font-weight-medium
            text-h2 text-left
            font-weight-thin
            ml-15
            mt-13
            align-center
            justify-center
            black--text
          "
        >
          Choose your road <br />
          from here !
        </h2>
        <v-container>
          <!-- <v-icon large color="teal accent-4 "> mdi-magnify </v-icon>        -->
          <v-textarea
            class="justify-left mt-16 ml-15 mr-16"
            label="enter your search here"
            prepend-inner-icon="mdi-magnify x-large"
            auto-grow
            outlined
            rows="1"
            row-height="5"
          ></v-textarea>
        </v-container>
      </v-col>
      <v-col cols="6">
        <v-img class="ml-15" src="../assets/jobb.png" height="400" width="500">
        </v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {}
</script>

<style>
.h2 {
  margin-top: 100px;
  font-family: "cairo";
}
</style>
