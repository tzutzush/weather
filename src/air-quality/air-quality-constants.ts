export const API_KEY = "AIzaSyA9wGcs9fm7tRPCoaCMT1qGiV3ZPMfg_Mg";
export const CURRENT_CONDITIONS_URL = `https://airquality.googleapis.com/v1/currentConditions:lookup?key=${API_KEY}`;

export interface AirQualityApiResponse {
  dateTime: string;
  regionCode: string;
  indexes: AirQualityIndex[];
  healthRecommendations: {
    generalPopulation: string;
    elderly: string;
    lungDiseasePopulation: string;
    heartDiseasePopulation: string;
    athletes: string;
    pregnantWomen: string;
    children: string;
  };
}

interface AirQualityIndex {
  code: string;
  displayName: string;
  aqi: number;
  aqiDisplay: string;
  color: {
    red?: number;
    green?: number;
    blue?: number;
  };
  category: string;
  dominantPollutant: string;
}

export const html = `<div class="flex flex-col">
<div>
  <h2>Air Quality index in your immediate vicinity:</h2>
  <p id="airQualityIndex"></p>
  <p id="airQualityVerbal"></p>
</div>
<div>
  <h2>Health Recommendations:</h2>
  <div>
    <h3>General Population</h3>
    <p id="generalPopulation"></p>
  </div>
  <div>
    <h3>Lung Disease</h3>
    <p id="lungDiseasePopulation"></p>
  </div>
  <div>
    <h3>Heart Disease</h3>
    <p id="heartDiseasePopulation"></p>
  </div>
  <div>
    <h3>Pregnant Women</h3>
    <p id="pregnantWomen"></p>
  </div>
  <div>
    <h3>Children</h3>
    <p id="children"></p>
  </div>
</div>
</div>`;
