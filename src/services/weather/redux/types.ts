import { WeatherApiLocationObject } from '../../location/redux';

export interface WeatherApiCurrentObject {
  last_updated: string; // Local time when the real time data was updated.
  last_updated_epoch: number; // (int) Local time when the real time data was updated in unix time.
  temp_c: number; // (decimal) Temperature in celsius
  temp_f: number; // (decimal) Temperature in fahrenheit
  feelslike_c: number; // (decimal) Feels like temperature in celsius
  feelslike_f: number; // (decimal) Feels like temperature in fahrenheit
  'condition:text': string; // Weather condition text
  'condition:icon': string; // Weather icon url
  'condition:code': number; // Weather condition unique code.
  wind_mph: number; // (decimal) Wind speed in miles per hour
  wind_kph: number; // (decimal) Wind speed in kilometer per hour
  wind_degree: number; // (int) Wind direction in degrees
  wind_dir: string; // Wind direction as 16 point compass. e.g.: NSW
  pressure_mb: number; // (decimal) Pressure in millibars
  pressure_in: number; // (decimal) Pressure in inches
  precip_mm: number; // (decimal) Precipitation amount in millimeters
  precip_in: number; // (decimal) Precipitation amount in inches
  humidity: number; // (int) Humidity as percentage
  cloud: number; // (int) Cloud cover as percentage
  is_day: number; // (int) 1 = Yes 0 = No

  // Whether to show day condition icon or night icon
  uv: number; // (decimal) UV Index
  gust_mph: number; // (decimal) Wind gust in miles per hour
  gust_kph: number; // (decimal) Wind gust in kilometer per hour
}

export interface WeatherApiCurrentResponse {
  location: WeatherApiLocationObject;
  current: WeatherApiCurrentObject;
}
