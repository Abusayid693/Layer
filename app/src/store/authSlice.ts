import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false,
  isAuthenticating: true
};

// Actual Slice
export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuthSliceState(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    },
  },
});

export const {setAuthSliceState} = authSlice.actions;

export default authSlice.reducer;