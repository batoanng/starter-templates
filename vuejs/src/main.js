import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router/router';
import helpers from './plugins/helpers';
import GlobalMixin from './mixins/global';
import { BootstrapVue } from 'bootstrap-vue';
import store from './store';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const router = createRouter();

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
  mixins: [GlobalMixin],
}).$mount('#app');

//plugins
Vue.prototype.$helpers = helpers(app);
