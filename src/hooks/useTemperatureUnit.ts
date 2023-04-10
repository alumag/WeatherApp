import { useAppSelector } from '../redux/store';

export const useTemperatureUnit = () => {
  return useAppSelector(({ app }) => app.temperatureUnit);
};
