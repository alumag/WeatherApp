import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  temperatureUnit: 'celsius' | 'fahrenheit';
}

const initialState: AppState = {
  temperatureUnit: 'celsius',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTemperatureUnit(state, action: PayloadAction<'celsius' | 'fahrenheit'>) {
      state.temperatureUnit = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
