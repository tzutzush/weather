import "./styles/index.css";
import "reflect-metadata";
import { container } from "tsyringe";
import { Weather } from "./weather/weather";
import { AirQuality } from "./air-quality/air-quality";
import { ChuckNorris } from "./chuck-norris/chuck-norris";
import { Header } from "./shared/header";

class Controller {
  header = container.resolve(Header);
  airQuality = container.resolve(AirQuality);
  chuckNorris = container.resolve(ChuckNorris);
  weather = container.resolve(Weather);

  constructor() {
    location.hash = "weather";
    this.weather.displayData();
    this.header.weatherSignal.addListener((weatherData) => {
      this.weather.displayData(weatherData);
    });
    this.header.airQualitySignal.addListener((airQualityData) => {
      this.airQuality.displayData(airQualityData);
    });

    window.addEventListener("hashchange", () => {
      const pathName = window.location.hash.slice(1);
      if (pathName === "air-quality") {
        controller.airQuality.displayData();
      } else if (pathName === "daily-chuck-norris") {
        controller.chuckNorris.displayData();
      } else if (pathName === "weather") {
        controller.weather.displayData();
      }
    });
  }
}

const controller = new Controller();
