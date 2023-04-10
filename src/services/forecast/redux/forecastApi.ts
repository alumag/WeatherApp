import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherApiForecastResponse } from './types';

const FORECAST_API_BASE_URL = '/api';

export const forecastApi = createApi({
  reducerPath: 'forecastApi',
  baseQuery: fetchBaseQuery({ baseUrl: FORECAST_API_BASE_URL }),
  endpoints: builder => ({
    getForecast: builder.query<WeatherApiForecastResponse, string>({
      query: (query: string) => {
        return {
          url: '/forecast.json',
          params: {
            q: query,
            days: 5,
          },
        };
      },
    }),
  }),
});

export const { useGetForecastQuery } = forecastApi;
