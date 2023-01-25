import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    checkStatus: (state) => {
      state.push('Under construction');
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
