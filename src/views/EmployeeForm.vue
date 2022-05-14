<template>
<v-card
  elevation="2"
  outlined
  tile
  class="mx-auto pa-4 mt-5"
  max-width="1000"
  height="1230"
>
 <v-card-text>
    <h1 class="text-center">
      Your Information
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
            :rules="PhoneRules"
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
            :rules="PhoneRules"
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
            label="Email"
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
            label=""
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
            v-model="select"
            :items="city"
            label=""
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
            :items="nathionality"
            label=""
            required
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
         <v-col
          cols="12"
        >
        <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
         >
         <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          label="Birthday date"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
        </template>
      <v-date-picker
        v-model="date"
        :active-picker.sync="activePicker"
        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
      </v-menu>
      </v-col>
      </v-row>
      <v-row>
          <v-col
          cols="12"
        >
        <h3>Gender</h3>
          <v-select
            v-model="Gender"
            :items="gender"
            label=""
            required
          ></v-select>
        </v-col>
      </v-row>
       <v-row>
          <v-col
          cols="12"
        >
        <h3>Military Service</h3>
          <v-select
            v-model="Service"
            :items="service"
            label=""
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
      <v-col>
       <h3>About Me</h3>
          <v-text-field
            v-model="aboutme"
            :rules="aboutme"
            label=""
            required
          ></v-text-field>
        </v-col>
      </v-row>
         <v-btn
      class="mt-6 white--text teal accent-4"
      @click="submit"
      elevation="3"
      small
      >
      Submit
    </v-btn>
    </v-container>
  </v-form>
</v-card>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    MobileNumber: '',
    PhoneNumber: '',
    PhoneRules: [
      v => !!v || 'Phone is required',
      v => v.length <= 10 || 'Phone must be less than 10 characters'
    ],
    city: [
      'Damascus',
      'Homs',
      'Hama',
      'Aleppo',
      'Lattakia',
      'Tartus',
      'Daraa',
      'Deir ez-Zur',
      'Idlib',
      'Al Hasaka',
      'Ar Raqqa',
      'Al-Suwayda',
      'Al-Qunayṭirah',
      'Al-Qāmishlī'
    ],
    nathionality: [
      'Syrian',
      'Palestinian',
      'Lebanese',
      'Iraqi',
      'Jordanian'
    ],
    gender: [
      'male',
      'female'
    ],
    service: [
      'postponed',
      'unpostponed'
    ]
  })
}
</script>

<style>

</style>
