import { useEffect, useState } from 'react';
import { useGetCurrentQuery } from '../redux/realtimeApi';
import { WeatherApiCurrentObject } from '../redux/types';

export const useCurrentWeather = (location: string) => {
  const { data, isLoading, isError, refetch } = useGetCurrentQuery(location);
  const [currentWeather, setCurrentWeather] = useState<WeatherApiCurrentObject>();

  useEffect(() => {
    if (isLoading) {
      setCurrentWeather(undefined);
    } else if (data && !isError) {
      setCurrentWeather(data.current);
    } else {
      // TODO: handle errors
    }
  }, [data, isLoading, isError]);

  return { currentWeather, refetch };
};
