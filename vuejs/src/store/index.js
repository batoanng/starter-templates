import Vue from 'vue';
import Vuex from 'vuex';
import { MessageModule } from './message';
import { LoadingModule } from './loading';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    message: MessageModule,
    loading: LoadingModule,
  },
});
