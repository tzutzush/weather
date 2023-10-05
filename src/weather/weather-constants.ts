export const WEATHER_API_KEY = "a4f671e009464742b52111859232609";
export const WEATHER_API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=`;
export const WEATHER_API_URL_ENDING_FOR_FORECAST = "&days=2&aqi=no&alerts=no";

export type WeatherDataCurrent = {
  location: string;
  temperature: number;
  conditionImageURL: string;
  humidity: number;
  realFeel: number;
  uv: number;
  wind: number;
};

export type WeatherDataForecast = {
  time_epoch: number;
  time: string;
  temp_c: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
  };
  wind_kph: number;
  humidity: number;
  chance_of_rain: number;
}[];

export const WEATHER_HTML = `<div class="top flex gap-96 justify-center sm:gap-48 phone:gap-6">
<div class="flex flex-col gap-6 items-center">
  <div class="w-40 flex flex-col items-center">
    <h2 class="text-4xl font-bold text-gray-800" id="location"></h2>
    <p class="text-lg font-semibold text-gray-700">
      Humidity: <span class="humidity"></span><span>%</span>
    </p>
  </div>
  <p class="text-6xl font-bold tracking-tighter text-gray-800">
    <span id="currentTemperature"></span><span>°</span>
  </p>
</div>
<img id="currentImage" class="w-40 h-40" src="" alt="" />
</div>
<div class="middle flex justify-center">
<div class="flex flex-col bg-lightGrey rounded-xl max-w-4xl shadow-sbar">
  <div class="text-gray-600 font-bold">
    <p class="tracking-tight p-5">NEXT HOURS</p>
    <div
      class="next hours pb-5 flex w-896 justify-around md:w-740 sm:w-610 phone:flex-col phone:w-72 phone:gap-3"
    >
      <div
        class="text-lg flex flex-col items-center grow shrink basis-auto border-r-2 border-gray-300 phone:border-r-0 phone:border-b-2 phone:p-3 phone:flex-row phone:justify-center"
      >
        <p class="time"></p>
        <img
          class="forecast-image w-24 h-24 phone:w-12 phone:h-12"
          src=""
          alt="hourly time"
        />
        <p class="text-gray-800 text-2xl">
          <span class="next-temperature"></span><span>°</span>
        </p>
      </div>
      <div
        class="text-lg flex flex-col items-center grow shrink basis-auto border-r-2 border-gray-300 phone:border-r-0 phone:border-b-2 phone:p-3 phone:flex-row phone:justify-center"
      >
        <p class="time"></p>
        <img
          class="forecast-image w-24 h-24 phone:w-12 phone:h-12"
          src=""
          alt="hourly time"
        />
        <p class="text-gray-800 text-2xl">
          <span class="next-temperature"></span><span>°</span>
        </p>
      </div>
      <div
        class="text-lg flex flex-col items-center grow shrink basis-auto border-r-2 border-gray-300 phone:border-r-0 phone:border-b-2 phone:p-3 phone:flex-row phone:justify-center"
      >
        <p class="time"></p>
        <img
          class="forecast-image w-24 h-24 phone:w-12 phone:h-12"
          src=""
          alt="hourly time"
        />
        <p class="text-gray-800 text-2xl">
          <span class="next-temperature"></span><span>°</span>
        </p>
      </div>
      <div
        class="text-lg flex flex-col items-center grow shrink basis-auto border-r-2 border-gray-300 phone:border-r-0 phone:border-b-2 phone:p-3 phone:flex-row phone:justify-center"
      >
        <p class="time"></p>
        <img
          class="forecast-image w-24 h-24 phone:w-12 phone:h-12"
          src=""
          alt="hourly time"
        />
        <p class="text-gray-800 text-2xl">
          <span class="next-temperature"></span><span>°</span>
        </p>
      </div>
      <div
        class="text-lg flex flex-col items-center grow shrink basis-auto border-r-2 border-gray-300 phone:border-r-0 phone:border-b-2 phone:p-3 phone:flex-row phone:justify-center"
      >
        <p class="time"></p>
        <img
          class="forecast-image w-24 h-24 phone:w-12 phone:h-12"
          src=""
          alt="hourly time"
        />
        <p class="text-gray-800 text-2xl">
          <span class="next-temperature"></span><span>°</span>
        </p>
      </div>
      <div
        class="text-lg flex flex-col items-center grow shrink basis-auto phone:flex-row phone:justify-center"
      >
        <p class="time"></p>
        <img
          class="forecast-image w-24 h-24 phone:w-12 phone:h-12"
          src=""
          alt="hourly time"
        />
        <p class="text-gray-800 text-2xl">
          <span class="next-temperature"></span><span>°</span>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
<div class="bottom flex justify-center">
<div
  class="bg-lightGrey text-gray-600 p-5 rounded-xl max-w-4xl w-896 shadow-sbar md:w-740 sm:w-610 phone:w-72"
>
  <p class="pb-3 font-bold tracking-tight">AIR CONDITIONS</p>
  <div class="grid grid-cols-2 gap-6">
    <div>
      <p class="text-lg font-semibold">Real Feel</p>
      <p class="text-3xl font-bold tracking-tighter text-gray-800">
        <span id="realFeel"></span><span>°</span>
      </p>
    </div>
    <div>
      <p class="text-lg font-semibold">Wind</p>
      <p class="text-3xl font-bold tracking-tighter text-gray-800">
        <span id="wind"></span> <span>km/h</span>
      </p>
    </div>
    <div>
      <p class="text-lg font-semibold">Humidity</p>
      <p class="text-3xl font-bold tracking-tighter text-gray-800">
        <span class="humidity"></span><span>%</span>
      </p>
    </div>
    <div>
      <p class="text-lg font-semibold">UV index</p>
      <p
        class="text-3xl font-bold tracking-tighter text-gray-800"
        id="uv"
      ></p>
    </div>
  </div>
</div>
</div>
`;
