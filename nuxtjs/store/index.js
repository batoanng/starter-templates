import Vuex from 'vuex';
import { MessageModule } from '~/store/message';
import { LoadingModule } from '@/store/loading';

const createStore = () => {
  return new Vuex.Store({
    modules: {
      message: MessageModule,
      loading: LoadingModule,
    },
    actions: {},
  });
};
export default createStore;
