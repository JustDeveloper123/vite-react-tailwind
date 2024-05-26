import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseCounter(state) {
      state.count += 1;
    },
  },
});

export default counterSlice.reducer;
