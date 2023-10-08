import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingStarted: (state, action) => {
      state.isLoading = true;
    },
    setLoadingEnd: (state, action) => {
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoadingStarted, setLoadingEnd } = loadingSlice.actions;

export default loadingSlice.reducer;
