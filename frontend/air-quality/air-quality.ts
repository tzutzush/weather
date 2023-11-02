import { injectable } from "tsyringe";
import {
  AIR_QUALITY_HTML,
  AirQualityApiResponse,
} from "../../backend/air-quality-service/air-quality-constants";

@injectable()
export class AirQuality {
  async displayData(airQualityData?: AirQualityApiResponse) {
    let d: AirQualityApiResponse = airQualityData;

    const location: string = d.location;
    const airQualityIndex: string = String(d.indexes[0].aqi);
    const airQualityVerbal: string = d.indexes[0].category;
    const generalPopulation: string = d.healthRecommendations.generalPopulation;
    const lungDiseasePopulation: string =
      d.healthRecommendations.lungDiseasePopulation;
    const heartDiseasePopulation: string =
      d.healthRecommendations.heartDiseasePopulation;
    const pregnantWomen: string = d.healthRecommendations.pregnantWomen;
    const children: string = d.healthRecommendations.children;

    document.querySelector("#main")!.innerHTML = AIR_QUALITY_HTML;
    document.querySelector("#location")!.textContent = location;
    document.querySelector("#airQualityIndex")!.textContent = airQualityIndex;
    document.querySelector("#airQualityVerbal")!.textContent = airQualityVerbal;
    document.querySelector("#generalPopulation")!.textContent =
      generalPopulation;
    document.querySelector("#lungDiseasePopulation")!.textContent =
      lungDiseasePopulation;
    document.querySelector("#heartDiseasePopulation")!.textContent =
      heartDiseasePopulation;
    document.querySelector("#pregnantWomen")!.textContent = pregnantWomen;
    document.querySelector("#children")!.textContent = children;
  }
}
