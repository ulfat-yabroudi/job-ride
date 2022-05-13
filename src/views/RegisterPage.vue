<template>
 <v-card
    class="mx-auto pa-4 mt-15"
    max-width="330"
    height="350"
  >
  <v-card-text>
    <h1 class="text-center">
      Register
    </h1>
  </v-card-text>
<form class="mt-7">
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
    <h3>
      Sign as:
    </h3>
    <v-btn
      class="ml-6 mt-6 white--text teal accent-4"
      @click="submit"
      elevation="3"
      small
    >
      Employee.
    </v-btn>
     <v-btn
      class="ml-12 mt-6 white--text teal accent-4"
      @click="submit"
      elevation="3"
      small
      >
      Company.
    </v-btn>
  </form>
  </v-card>
</template>

<script>

</script>

<style>

</style>
