import { useAppSelector } from '../../../redux/store';

export const useLocation = () => {
  return useAppSelector(({ location }) => location.data);
};
