import "./styles/index.css";
import "reflect-metadata";
import { container } from "tsyringe";
import { Weather } from "./weather/weather";
import { AirQuality } from "./air-quality/air-quality";
import { ChuckNorris } from "./chuck-norris/chuck-norris";
import { Header } from "./shared/header";
// import { Coordinates } from "../backend/geocode-service/geocode-constants";

class Controller {
  header = container.resolve(Header);
  airQuality = container.resolve(AirQuality);
  chuckNorris = container.resolve(ChuckNorris);
  weather = container.resolve(Weather);

  constructor() {
    //LISTENERS
    this.header.weatherSignal.addListener((weatherData) => {
      this.weather.displayData(weatherData);
    });
    this.header.airQualitySignal.addListener((airQualityData) => {
      this.airQuality.displayData(airQualityData);
    });

    window.addEventListener("hashchange", () => {
      const pathName = window.location.hash.slice(1);
      if (pathName === "air-quality") {
        fetch("/api/air-quality").then((response) =>
          response
            .json()
            .then((data) => controller.airQuality.displayData(data))
        );
      } else if (pathName === "weather") {
        fetch("/api/weather").then((response) =>
          response.json().then((data) => controller.weather.displayData(data))
        );
      }
    });
  }

  // sendLocationData(coordinates: Coordinates): Promise<globalThis.Response> {
  //   let wrapperObject = {
  //     coordinates: coordinates,
  //   };
  //   return fetch("/api/user-location", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(wrapperObject),
  //   }).then((response) => {
  //     if (!response.ok) {
  //       console.error("Failed to send location data");
  //     }
  //     return response;
  //   });
  // }
}

const controller = new Controller();
