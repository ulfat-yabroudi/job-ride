<template>
<div>
 <AppHero>
  </AppHero>
    <JobCategories>
    </JobCategories>
    <TopCompanies>
    </TopCompanies>
      <BannerSec>
      </BannerSec>
  <PeopleReviews>
  </PeopleReviews>

</div>
</template>

<script>
import AppHero from '@/components/AppHero.vue'
import TopCompanies from '@/components/TopCompanies.vue'
import JobCategories from '@/components/JobCategories.vue'
import BannerSec from '@/components/BannerSec.vue'
import PeopleReviews from '@/components/PeopleReviews.vue'
export default {
  name: 'HomePage',
  components: {
    AppHero,
    TopCompanies,
    JobCategories,
    BannerSec,
    PeopleReviews
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap');
.text-h1{
 font-family: 'macondo';
}
</style>
