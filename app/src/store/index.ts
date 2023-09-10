import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
