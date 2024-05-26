import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers';

const reducer = combineReducers({
  counter: counterReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer,
  });
};
