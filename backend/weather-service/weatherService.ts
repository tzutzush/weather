import { cache } from "..";
import {
  WEATHER_API_URL,
  WEATHER_API_URL_ENDING_FOR_FORECAST,
  WeatherDataCurrent,
  WeatherDataForecast,
} from "./weather-constants";

export const getWeatherBasedOnLocation = async (locationInput: string) => {
  try {
    const cachedValue: string | undefined = cache.get(
      `${locationInput}:weather`
    );
    if (cachedValue) {
      return cachedValue;
    } else {
      const response = await fetch(
        `${WEATHER_API_URL}${locationInput}${WEATHER_API_URL_ENDING_FOR_FORECAST}`
      );
      const data = await response.json();
      cache.set(`${locationInput}:weather`, data);
      return data;
    }
  } catch (error) {
    throw error;
  }
};

export const getCurrentWeatherAndForecast = async (
  locationInput: string = "Szeged"
): Promise<[WeatherDataCurrent, WeatherDataForecast]> => {
  const data = await getWeatherBasedOnLocation(locationInput);
  const current: WeatherDataCurrent = {
    location: data.location.name,
    temperature: data.current.temp_c,
    conditionImageURL: data.current.condition.icon,
    humidity: data.current.humidity,
    realFeel: data.current.feelslike_c,
    uv: data.current.uv,
    wind: data.current.wind_kph,
  };

  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
  const hourlyForecasts: WeatherDataForecast = [
    ...data.forecast.forecastday[0].hour,
    ...data.forecast.forecastday[1].hour,
  ]
    .filter(
      (value: { time_epoch: number }) => value.time_epoch > currentTimeInSeconds
    )
    .slice(0, 6)
    .map((item) => {
      item.time = item.time.slice(-5);
      return item;
    });

  return [current, hourlyForecasts];
};
