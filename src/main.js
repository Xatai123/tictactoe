import Vue from 'vue'
import './index.scss'
import store from './store'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.component('v-select', vSelect);
Vue.use(VueSweetalert2);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
