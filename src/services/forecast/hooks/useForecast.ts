import { useEffect, useState } from 'react';
import { useGetForecastQuery, WeatherApiForecastResponse } from '../redux';

export const useForecast = (location: string) => {
  const { data, isLoading, isError, refetch } = useGetForecastQuery(location);
  const [forecast, setForecast] = useState<WeatherApiForecastResponse[]>();

  useEffect(() => {
    if (isLoading) {
      setForecast(undefined);
    } else if (data && !isError) {
      setForecast(data);
    } else {
      // TODO: handle errors
    }
  }, [data, isLoading, isError]);

  return { forecast, refetch };
};
