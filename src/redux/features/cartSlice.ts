import { createSlice } from '@reduxjs/toolkit';

interface ToggleState {
  value: boolean;
}

const initialState: ToggleState = {
  value: false,
};

export const toggleSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    handleChange: (state) => {
      state.value = !state.value;
    },
  },
});

export const { handleChange } = toggleSlice.actions;
export default toggleSlice.reducer;
