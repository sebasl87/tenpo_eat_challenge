import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {  Location } from './googleSlice';

export interface IAddress {
  formated_address: string | undefined;
  extra_data_address?: string | undefined;
  geolocation?: Location | undefined;
}

const initialAddressState = {
  address: {} as IAddress,
};

export const addressSlice = createSlice({
  name: 'address',
  initialState: initialAddressState,
  reducers: {
    setAddress(state, action: PayloadAction<IAddress>) {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;
