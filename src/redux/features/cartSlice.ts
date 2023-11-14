import { createSlice } from '@reduxjs/toolkit';

interface ToggleState {
  value: number;
}

const initialState: ToggleState = {
  value: 0,
};

export const toggleSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value - 1 === -1 ? 0 : state.value - 1;
    },
  },
});

export const { increment, decrement } = toggleSlice.actions;
export default toggleSlice.reducer;
