import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashCan, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'
import VueAxios from 'vue-axios'

library.add(faTrashCan,faMagnifyingGlass)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
}).$mount('#app')
