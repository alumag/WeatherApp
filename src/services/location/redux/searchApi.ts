import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WeatherApiLocationObject } from './types';

const SEARCH_API_BASE_URL = '/api';

export const searchApi = createApi({
  reducerPath: 'searchApi',
  baseQuery: fetchBaseQuery({ baseUrl: SEARCH_API_BASE_URL }),
  endpoints: builder => ({
    search: builder.query<WeatherApiLocationObject[], string>({
      query: (query: string) => {
        return {
          url: '/search.json',
          params: {
            q: query,
          },
        };
      },
    }),
  }),
});

export const { useSearchQuery } = searchApi;
