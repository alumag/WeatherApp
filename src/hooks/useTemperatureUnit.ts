import { appActions } from '../redux/appSlice';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const useTemperatureUnit = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector(({ app }) => app.temperatureUnit);
  const setValue = (newValue: typeof value) => {
    dispatch(appActions.setTemperatureUnit(newValue));
  };

  return { temperatureUnit: value, setTemperatureUnit: setValue };
};
