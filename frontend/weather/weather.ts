import {
  WeatherDataCurrent,
  WeatherDataForecast,
  WEATHER_HTML,
} from "../../backend/weather-service/weather-constants";

export class Weather {
  async displayData(data?: [WeatherDataCurrent, WeatherDataForecast]) {
    let current: WeatherDataCurrent;
    let hourlyForecasts: WeatherDataForecast;
    if (!data) {
      const data: [WeatherDataCurrent, WeatherDataForecast] = await fetch(
        "/api/weather"
      ).then((data) => data.json());
      current = data[0];
      hourlyForecasts = data[1];
    } else {
      current = data[0];
      hourlyForecasts = data[1];
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

  // async getData(): Promise<[WeatherDataCurrent, WeatherDataForecast]> {
  //   const data: [WeatherDataCurrent, WeatherDataForecast] = await fetch(
  //     "/weather"
  //   ).then((data) => data.json());
  //   return data;
  // }
}
