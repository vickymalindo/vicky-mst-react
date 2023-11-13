import { createSlice } from '@reduxjs/toolkit';

interface ToggleState {
  value: number;
}

const initialState: ToggleState = {
  value: 1,
};

export const toggleSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = toggleSlice.actions;
export default toggleSlice.reducer;
