import { configureStore } from '@reduxjs/toolkit';

import { googleSlice } from './googleSlice';
import { addressSlice } from './addressSlice';

export const store = configureStore({
  reducer: {
    google: googleSlice.reducer,
    address: addressSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
