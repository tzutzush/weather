import { injectable } from "tsyringe";
import { WeatherService } from "./weather-service";
import {
  WEATHER_HTML,
  WeatherDataCurrent,
  WeatherDataForecast,
} from "./weather-constants";

@injectable()
export class Weather {
  constructor(private weatherService: WeatherService) {}

  async displayData(weatherData?: [WeatherDataCurrent, WeatherDataForecast]) {
    let current: WeatherDataCurrent;
    let hourlyForecasts: WeatherDataForecast;
    if (!weatherData) {
      [current, hourlyForecasts] =
        await this.weatherService.getCurrentWeatherAndForecast();
    } else {
      [current, hourlyForecasts] = weatherData;
    }
    //CURRENT WEATHER
    document.querySelector("#main").classList.add("flex-col", "gap-12");
    document.querySelector("#main")!.innerHTML = WEATHER_HTML;
    document.querySelector("#location").textContent = current.location;
    document
      .querySelectorAll(".humidity")
      .forEach((item) => (item.textContent = current.humidity.toString()));
    document.querySelector("#currentTemperature").textContent =
      current.temperature.toString();
    document
      .querySelector("#currentImage")
      .setAttribute("src", current.conditionImageURL);
    document.querySelector("#location").textContent = current.location;
    document.querySelector("#location").textContent = current.location;
    document.querySelector("#location").textContent = current.location;
    document.querySelector("#location").textContent = current.location;
    document.querySelector("#realFeel").textContent =
      current.realFeel.toString();
    document.querySelector("#uv").textContent = current.uv.toString();
    document.querySelector("#wind").textContent = current.wind.toString();

    //FORECAST
    document
      .querySelectorAll(".time")
      .forEach((item: Element, index: number) => {
        item.textContent = hourlyForecasts[index].time;
      });
    document
      .querySelectorAll(".next-temperature")
      .forEach((item: Element, index: number) => {
        item.textContent = hourlyForecasts[index].temp_c.toString();
      });

    document
      .querySelectorAll(".forecast-image")
      .forEach((item: Element, index: number) => {
        item.setAttribute("src", hourlyForecasts[index].condition.icon);
      });
  }
}
