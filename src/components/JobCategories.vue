 <template>

  <v-container
    id="categories"
    class="my-12" height="550">
    <v-row  v-vue-aos="{ animationClass: 'animate__fadeInRight animate__animated' }">
      <v-col cols="12">
        <div class=" text-h2 text-center my-10 teal--text ">
          Job Categories
        </div>
      </v-col>
      <v-col
        v-for="(Category, i) in categories"
        :key="i"
        cols="3"
      >
  <v-card
    class="mx-auto"
    max-width="344"
    max-height="360"
  >
    <v-img
     :src="Category.src"
      height="200px"
    ></v-img>

    <v-card-title>
      {{Category.title}}
    </v-card-title>
      <v-card-subtitle>
      {{Category.subtitle}}
    </v-card-subtitle>
<v-btn
class="teal accent-4 white--text ma-3 "
  elevation="2"
  rounded
  x-small
  tile
>{{Category.count}}</v-btn>
  </v-card>
          <!-- <div class="text-h1 text-center">
            <v-icon
              color="white"
              class="text-h1"
            >
              {{ stat.icon }}
            </v-icon>
          </div>
          <div class="text-h2 text-center white--text">
            {{ stat.title }}
          </div>
          <div class="subheading text-h5 text-center white--text">
            {{ stat.subtitle }}
          </div> -->
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        src: require('../assets/it.jpg'),
        title: 'Information Technology',
        subtitle: 'web developer / data analysist / graphic designer / software engineering',
        count: '20'
      },

      {
        src: require('../assets/eco.jpg'),
        title: 'Economy',
        subtitle: 'accountant / HR manager/ Banking / sales manager / supply chain ',
        count: '32'
      },

      {
        src: require('../assets/ad.jpg'),
        title: 'Adminstiration Mangement',
        subtitle: 'data entry / publishing / archiving / translation / customer services  / Logistic ',
        count: '19'
      },
      {
        src: require('../assets/other.jpg'),
        title: 'Others',
        subtitle: 'Secertaria/ Reseptionest  / writing editorial / negotietor',
        count: '11'
      }
    ]
  })
}
</script>

<style>

</style>
