import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherApiLocationObject } from './types';

interface LocationState {
  data?: WeatherApiLocationObject;
}

const initialState: LocationState = {};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<WeatherApiLocationObject>) {
      state.data = action.payload;
    },
  },
});

export const locationActions = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
