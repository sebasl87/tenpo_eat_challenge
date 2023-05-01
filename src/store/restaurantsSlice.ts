import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REACT_APP_BASE_API } from 'dotenv';

import { IRestaurante } from '../../App';

export const fetchRestos = createAsyncThunk(
  'restaurants/fetchRestos',
  async () => {
    const response = await fetch(`${REACT_APP_BASE_API}restaurants`);
    return await response.json();
  }
);

export const initialRestosState = {
  restoList: [] as IRestaurante[],
  loading: false,
};

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: initialRestosState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchRestos.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchRestos.fulfilled, (state, action) => {
      state.restoList = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchRestos.rejected, state => {
      state.loading = false;
    });
  },
});

export const googleActions = restaurantsSlice.actions;
