import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { forecastApi } from '../services/forecast/redux';
import { locationReducer, searchApi } from '../services/location/redux';
import { realtimeApi } from '../services/weather/redux';
import { appReducer } from './appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
    location: locationReducer,
    [searchApi.reducerPath]: searchApi.reducer,
    [realtimeApi.reducerPath]: realtimeApi.reducer,
    [forecastApi.reducerPath]: forecastApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      searchApi.middleware,
      realtimeApi.middleware,
      forecastApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
