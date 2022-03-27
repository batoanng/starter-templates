import { combineReducers } from 'redux';

// @ts-ignore
const initialReducer = (state = {}, action) => state;

export const rootReducer = combineReducers({ initialReducer });
