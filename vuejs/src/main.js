import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router/router';
import helpers from './plugins/helpers';
import GlobalMixin from './mixins/global';
import { BootstrapVue } from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import store from './store';
import langOptions from './i18n/options';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(BootstrapVue);

const i18n = new VueI18n(langOptions);

const router = createRouter();
router.beforeEach((to, from, next) => {
    const lang = to.query.lang;
    if (lang) {
        i18n.locale = lang;
    }

    return next();
});

const app = new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
    mixins: [GlobalMixin],
}).$mount('#app');

//plugins
Vue.prototype.$helpers = helpers(app);
