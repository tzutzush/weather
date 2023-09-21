import "reflect-metadata";
import { container } from "tsyringe";
import { AirQuality } from "./air-quality/air-quality";
import { ChuckNorris } from "./chuck-norris/chuck-norris";

switch (window.location.pathname) {
  case "/air-quality":
    const airQuality = container.resolve(AirQuality);
    airQuality.displayData();
    break;

  case "/daily-chuck-norris":
    const chuckNorris = container.resolve(ChuckNorris);
    break;
  default:
    const airQualityDefault = container.resolve(AirQuality);
    airQualityDefault.displayData();
    break;
}
