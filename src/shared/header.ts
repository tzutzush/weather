import { injectable } from "tsyringe";
import { AirQualityService } from "../air-quality/air-quality.service";
import { WeatherService } from "../weather/weather-service";
import { Signal, signal } from "./signal";
import {
  WeatherDataCurrent,
  WeatherDataForecast,
} from "../weather/weather-constants";
import { AirQualityApiResponse } from "../air-quality/air-quality-constants";

@injectable()
export class Header {
  public searchForm: HTMLFormElement = document.querySelector("#searchBar");
  public searchInput: HTMLInputElement = document.querySelector("#searchInput");
  public weatherSignal = signal<[WeatherDataCurrent, WeatherDataForecast]>();
  public airQualitySignal = signal<AirQualityApiResponse>();

  constructor(
    private weatherService: WeatherService,
    private airQualityService: AirQualityService
  ) {
    this.searchForm.addEventListener("submit", this.onSearch.bind(this));
  }

  async onSearch(event: Event) {
    const pathName = window.location.hash.slice(1);
    event.preventDefault();
    const searchValue = this.searchInput.value.trim();
    this.searchInput.value = "";

    if (pathName === "weather") {
      const data = await this.weatherService.getCurrentWeatherAndForecast(
        searchValue
      );
      this.weatherSignal.dispatch(data);
    } else if (pathName === "air-quality") {
      const data = await this.airQualityService.getAirQualityBasedOnLocation(
        searchValue
      );
      this.airQualitySignal.dispatch(data);
    }
  }
}
