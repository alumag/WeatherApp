import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { useSearchQuery } from '../redux/searchApi';
import { locationActions } from '../redux/locationSlice';
import { WeatherApiLocationObject } from '../redux/types';

export const useSearchLocations = (query: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useSearchQuery(query);

  const [locations, setLocations] =
    useState<Pick<WeatherApiLocationObject, 'id' | 'name' | 'country'>[]>();

  useEffect(() => {
    if (isLoading) {
      setLocations(undefined);
    } else if (data && !isError) {
      setLocations(data.map(({ id, name, country }) => ({ id, name, country })));
    } else {
      // TODO: handle errors
    }
  }, [data, isLoading, isError]);

  const selectLocation = (locationId: number) => {
    console.log(locationId);
    const locationData = data?.find((item) => item.id === locationId);
    if (!locationData) {
      console.log(locationData);

      return;
    }

    console.log(locationData);

    dispatch(locationActions.setLocation(locationData));
  };

  return { locations, selectLocation };
};
