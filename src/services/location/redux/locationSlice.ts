import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherApiLocationObject } from './types';

type LocationState = WeatherApiLocationObject;

const initialState: LocationState = {
  id: -1,
  lat: 0,
  lon: 0,
  name: '',
  region: '',
  country: '',
  url: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<WeatherApiLocationObject>) {
      state = action.payload;
    },
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
