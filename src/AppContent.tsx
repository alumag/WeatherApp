import { Typography } from 'antd';
import { WeatherApiLocationObject } from './services/location/redux';
import { Weather } from './services/weather/Weather';

interface Props {
  location: WeatherApiLocationObject;
}
export const AppContent: React.FC<Props> = ({ location }) => {
  return (
    <>
      <Typography.Title>{location.name}</Typography.Title>
      <Weather location={String(location.id)} />
    </>
  );
};
