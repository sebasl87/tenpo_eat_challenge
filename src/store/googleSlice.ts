import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  REACT_APP_GOOGLE_GEOCODE_URL,
  REACT_APP_GOOGLE_GEOCODE_KEY,
} from '@env';

export interface Geocode {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
  plus_code?: PlusCode;
}

export interface PlusCode {
  compound_code: string;
  global_code: string;
}

export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Geometry {
  bounds?: Bounds;
  location: Location;
  location_type: LocationType;
  viewport: Bounds;
}

export interface Bounds {
  northeast: Location;
  southwest: Location;
}

export interface Location {
  lat: number;
  lng: number;
}

export enum LocationType {
  Approximate = 'APPROXIMATE',
  GeometricCenter = 'GEOMETRIC_CENTER',
  Rooftop = 'ROOFTOP',
}

export const fetchAddress = createAsyncThunk(
  'google/fetchAddress',
  async ({ lat, lng }: Location) => {
    const response = await fetch(
      `${REACT_APP_GOOGLE_GEOCODE_URL}latlng=${
        lat + ',' + lng
      }&key=${REACT_APP_GOOGLE_GEOCODE_KEY}`
    );
    return (await response.json()).results;
  }
);

const initialGoogleState = {
  geocode: [] as Geocode[],
  loading: false,
};

export const googleSlice = createSlice({
  name: 'google',
  initialState: initialGoogleState,
  reducers: {
    clearGeocode(state) {
      state = initialGoogleState;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAddress.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchAddress.fulfilled, (state, action) => {
      state.geocode = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAddress.rejected, state => {
      state.loading = false;
    });
  },
});

export const { clearGeocode } = googleSlice.actions;
export const googleActions = googleSlice.actions;
