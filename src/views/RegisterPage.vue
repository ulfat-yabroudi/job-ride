<template>
<<<<<<< Updated upstream
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
<form>
=======
<v-card
  class="mx-auto , mt-9"
    max-width="390"
    height="380"
    >
    <v-card-text>
      <h1 class="text-center , font-weight-black , text-uppercase">
      Register
    </h1>
<form class="mt-7">
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <h3>
      Sign as:
    </h3>
    <v-btn
      class="ml-6 mt-6 white--text teal accent-4"
=======
    <h3 class=" ">
       sign as:
     </h3>
      <v-btn
      outlined
      class="mt-10 ml-9 teal accent-4 white--text"
      @click="submit"
    >
      Employee
    </v-btn>

    <v-btn
      class="mt-10 ml-15 teal accent-4  white--text"
>>>>>>> Stashed changes
      @click="submit"
      elevation="3"
      small
    >
<<<<<<< Updated upstream
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
=======
      Company
    </v-btn>
  </form>
  </v-card-text>
</v-card>
</template>

<script>
// import { validationMixin } from 'vuelidate'
// import { required, maxLength, email } from 'vuelidate/lib/validators'

// export default {
//   mixins: [validationMixin],

//   validations: {
//     name: { required, maxLength: maxLength(10) },
//     email: { required, email },
//     select: { required }
//   },

//   data: () => ({
//     name: '',
//     email: ''
//   }),

//   computed: {
//     checkboxErrors () {
//       const errors = []
//       if (!this.$v.checkbox.$dirty) return errors
//       !this.$v.checkbox.checked && errors.push('You must agree to continue!')
//       return errors
//     },
//     selectErrors () {
//       const errors = []
//       if (!this.$v.select.$dirty) return errors
//       !this.$v.select.required && errors.push('Item is required')
//       return errors
//     },
//     nameErrors () {
//       const errors = []
//       if (!this.$v.name.$dirty) return errors
//       !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
//       !this.$v.name.required && errors.push('Name is required.')
//       return errors
//     },
//     emailErrors () {
//       const errors = []
//       if (!this.$v.email.$dirty) return errors
//       !this.$v.email.email && errors.push('Must be valid e-mail')
//       !this.$v.email.required && errors.push('E-mail is required')
//       return errors
//     }
//   },

//   methods: {
//     next () {
//       this.$v.$touch()
//     }
//   }
// }
// </script>//
>>>>>>> Stashed changes

<style>

</style>
