import { useEffect, useState } from 'react';
import { useGetForecastQuery, WeatherApiForecast } from '../redux';

export const useForecast = (location: string) => {
  const { data, isLoading, isError, refetch } = useGetForecastQuery(location);
  const [forecast, setForecast] = useState<WeatherApiForecast[]>();

  useEffect(() => {
    if (isLoading) {
      setForecast(undefined);
    } else if (data && !isError) {
      setForecast(data.forecast.forecastday);
    } else {
      // TODO: handle errors
    }
  }, [data, isLoading, isError]);

  return { forecast, refetch };
};
