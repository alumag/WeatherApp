import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherApiCurrentResponse } from './types';

const REALTIME_API_BASE_URL = '/api';

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
          },
        };
      },
    }),
  }),
});

export const { useGetCurrentQuery } = realtimeApi;
