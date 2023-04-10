import { Typography } from 'antd';
import { Forecast } from './services/forecast/Forecast';
import { WeatherApiLocationObject } from './services/location/redux';
import { Weather } from './services/weather/Weather';

interface Props {
  location: WeatherApiLocationObject;
}
export const AppContent: React.FC<Props> = ({ location }) => {
  return (
    <>
      <Typography.Title>{location.name}</Typography.Title>
      <Weather location={location.url} />
      <Forecast location={location.url} />
    </>
  );
};
