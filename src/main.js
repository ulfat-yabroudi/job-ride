import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import 'animate.css'
import * as VueAos from 'vue-aos'
import { ValidationProvider } from 'vee-validate'
import EasyRefresh from 'vue-easyrefresh'
import UploadButton from 'vuetify-upload-button'

Vue.config.productionTip = false
Vue.use(VueAos)
Vue.component('ValidationProvider', ValidationProvider)
Vue.use(EasyRefresh)
Vue.use(UploadButton)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
