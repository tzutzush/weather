import { injectable } from "tsyringe";
import { LocationService } from "../shared/location-service";
import {
  WEATHER_API_URL,
  WEATHER_API_URL_ENDING_FOR_FORECAST,
  WeatherDataCurrent,
  WeatherDataForecast,
} from "./weather-constants";

@injectable()
export class WeatherService {
  constructor(private locationService: LocationService) {}

  private async getWeatherBasedOnLocation(locationInput?: string) {
    if (!locationInput) {
      try {
        const location = await this.locationService.getCurrentLocation();
        const response = await fetch(
          `${WEATHER_API_URL}${location.latitude},${location.longitude}${WEATHER_API_URL_ENDING_FOR_FORECAST}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const response = await fetch(
          `${WEATHER_API_URL}${locationInput}${WEATHER_API_URL_ENDING_FOR_FORECAST}`
        );
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }
  }

  public async getCurrentWeatherAndForecast(
    locationInput?: string
  ): Promise<[WeatherDataCurrent, WeatherDataForecast]> {
    const data = await this.getWeatherBasedOnLocation(locationInput);
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
        (value: { time_epoch: number }) =>
          value.time_epoch > currentTimeInSeconds
      )
      .slice(0, 6)
      .map((item) => {
        item.time = item.time.slice(-5);
        return item;
      });

    return [current, hourlyForecasts];
  }
}
