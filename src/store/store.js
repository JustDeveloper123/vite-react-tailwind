import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({
  // here you need to place reducers
});

// Use this function to create a store
export const setupStore = () => {
  return configureStore({
    reducer,
  });
};
