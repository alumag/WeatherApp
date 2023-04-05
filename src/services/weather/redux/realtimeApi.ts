import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherApiCurrentResponse } from './types';

const REALTIME_API_BASE_URL = 'https://api.weatherapi.com/v1';

export const realtimeApi = createApi({
  reducerPath: 'realtimeApi',
  baseQuery: fetchBaseQuery({ baseUrl: REALTIME_API_BASE_URL }),
  endpoints: (builder) => ({
    getCurrent: builder.query<WeatherApiCurrentResponse, string>({
      query: (location: string) => {
        return {
          url: '/current.json',
          params: {
            q: location,
            key: import.meta.env.VITE_CLIENT_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCurrentQuery } = realtimeApi;
