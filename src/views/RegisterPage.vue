<template>
 <v-card
    class="mx-auto pa-4 mt-15"
    max-width="320"
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
      :counter="50"
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
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email }
  },

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submit () {
      this.$v.$touch()
    },
    clear () {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
    }
  }
}
</script>

<style>

</style>
