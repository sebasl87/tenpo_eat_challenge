import { configureStore } from '@reduxjs/toolkit';

import { googleSlice } from './googleSlice';

export const store = configureStore({
  reducer: {
    google: googleSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
