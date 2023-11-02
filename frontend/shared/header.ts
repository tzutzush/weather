import { injectable } from "tsyringe";
import { signal } from "./signal";
import {
  WeatherDataCurrent,
  WeatherDataForecast,
} from "../../backend/weather-service/weather-constants";
import { AirQualityApiResponse } from "../../backend/air-quality-service/air-quality-constants";

@injectable()
export class Header {
  public searchForm: HTMLFormElement = document.querySelector("#searchBar");
  public searchInput: HTMLInputElement = document.querySelector("#searchInput");
  public weatherSignal = signal<[WeatherDataCurrent, WeatherDataForecast]>();
  public airQualitySignal = signal<AirQualityApiResponse>();

  constructor() {
    this.searchForm.addEventListener("submit", this.onSearch.bind(this));
  }

  async onSearch(event: Event) {
    event.preventDefault();
    const searchValue = this.searchInput.value.trim();
    this.searchInput.value = "";

    const pathName = window.location.hash.slice(1);
    if (pathName === "air-quality") {
      const data: AirQualityApiResponse = await fetch(
        `/api/air-quality?location=${searchValue}`
      ).then((data) => data.json());
      this.airQualitySignal.dispatch(data);
    } else if (pathName === "weather") {
      const data: [WeatherDataCurrent, WeatherDataForecast] = await fetch(
        `/api/weather?location=${searchValue}`
      ).then((data) => data.json());
      this.weatherSignal.dispatch(data);
    }
  }
}
