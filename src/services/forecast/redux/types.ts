import { WeatherApiCondition } from '../../common/types';
import { WeatherApiLocationObject } from '../../location/redux';
import { WeatherApiCurrentObject } from '../../weather/redux';

export interface WeatherApiForecastDay {
  maxtemp_c: number; // (decimal) Maximum temperature in celsius for the day.
  maxtemp_f: number; // (decimal) Maximum temperature in fahrenheit for the day
  mintemp_c: number; // (decimal) Minimum temperature in celsius for the day
  mintemp_f: number; // (decimal) Minimum temperature in fahrenheit for the day
  avgtemp_c: number; // (decimal) Average temperature in celsius for the day
  avgtemp_f: number; // (decimal) Average temperature in fahrenheit for the day
  maxwind_mph: number; // (decimal) Maximum wind speed in miles per hour
  maxwind_kph: number; // (decimal) Maximum wind speed in kilometer per hour
  totalprecip_mm: number; // (decimal) Total precipitation in milimeter
  totalprecip_in: number; // (decimal) Total precipitation in inches
  avgvis_km: number; // (decimal) Average visibility in kilometer
  avgvis_miles: number; // (decimal) Average visibility in miles
  avghumidity: number; // (int) Average humidity as percentage

  condition: WeatherApiCondition;
  uv: number; // (decimal) UV Index
}

export interface WeatherApiForecast {
  date: string;
  date_epoch: number;
  day: WeatherApiForecastDay;
  astro: unknown;
  hour: unknown;
}

export interface WeatherApiForecastResponse {
  location: WeatherApiLocationObject;
  current: WeatherApiCurrentObject;
  forecast: { forecastday: WeatherApiForecast[] };
}
