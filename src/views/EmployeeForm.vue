<template>
<v-card
  elevation="2"
  outlined
  tile
  class="mx-auto pa-4 mt-5"
  max-width="1000"
  height="600"
>
 <v-card-text>
    <h1 class="text-center">
      Employee's Information
    </h1>
  </v-card-text>
  <v-form class="jusify-center">
    <v-container >
      <v-row>
        <v-col
          cols="16"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="16"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="16"
        >
        <v-text-field
            v-model="PhoneNumber"
            :rules="nameRules"
            :counter="10"
            label="Phone Number"
            required
          ></v-text-field>
        </v-col>
          <v-col
          cols="16"
        >
        <v-text-field
            v-model="MobileNumber"
            :rules="nameRules"
            :counter="10"
            label="Mobile Number"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="e.g. example@example.com"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
        >
        <h3>Address</h3>
          <v-text-field
            v-model="address"
            :rules="address"
            label="e.g. baramkeh"
            required
          ></v-text-field>
        </v-col>
      </v-row>
       <v-row>
          <v-col
          cols="12"
        >
        <h3>City</h3>
          <v-select
            v-model="city"
            :rules="city"
            label="e.g. damascus"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
        >
        <h3>Nationality</h3>
          <v-select
            v-model="Nationality"
            :rules="nathionality"
            label="e.g. Syrian"
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <h2>
        Your Birthday:
        </h2>
      </v-row>
      <v-row>
      <!-- <v-sheet
      tile
      height="54"
      class="d-flex"
      >
      </v-sheet> -->
      <!-- <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->
      <v-select
        v-model="day"
        :items="day"
        dense
        outlined
        hide-details
        class="ma-2"
        label="day"
      ></v-select>
      <v-select
        v-model="Month"
        :items="Month"
        dense
        outlined
        hide-details
        label="month"
        class="ma-2"
      ></v-select>
      <v-select
        v-model="Year"
        :items="Year"
        dense
        outlined
        hide-details
        label="year"
        class="ma-2"
      ></v-select>
      </v-row>
      <v-row>
          <v-col
          cols="12"
        >
        <h3>Gender</h3>
          <v-select
            v-model="Gender"
            :rules="Gender"
            label="male"
            required
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</v-card>
</template>
<script>
export default {

}
</script>

<style>

</style>
