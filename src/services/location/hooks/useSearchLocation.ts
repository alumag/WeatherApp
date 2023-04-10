import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../redux/store';
import { useSearchQuery, locationActions, WeatherApiLocationObject } from '../redux';

export const useSearchLocations = (query: string) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useSearchQuery(query);

  const [locations, setLocations] =
    useState<Pick<WeatherApiLocationObject, 'id' | 'name' | 'country'>[]>();

  useEffect(() => {
    if (isLoading) {
      setLocations(undefined);
    } else if (data && !isError) {
      setLocations(
        _.uniqBy(data, 'name').map(({ id, name, country }) => ({
          id,
          name,
          country,
        })),
      );
    } else {
      // TODO: handle errors
    }
  }, [data, isLoading, isError]);

  const selectLocation = (locationId: number) => {
    const locationData = data?.find(item => item.id === locationId);
    if (!locationData) {
      return;
    }

    dispatch(locationActions.setLocation(locationData));
  };

  return { locations, selectLocation };
};
