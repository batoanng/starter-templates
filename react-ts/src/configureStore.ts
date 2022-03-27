import { createStore } from 'redux';
import { rootReducer } from './store/index';

export default function configureStore(initialState = {}) {
    return createStore(rootReducer, initialState);
}
