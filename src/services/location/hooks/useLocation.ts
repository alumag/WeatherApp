import { useAppSelector } from '../../../redux/store';

export const useLocation = () => {
  return useAppSelector((state) => state.location.name);
};
