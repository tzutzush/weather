import { inject, injectable } from "tsyringe";
import { AirQualityApiResponse, html } from "./air-quality-constants";
import { AirQualityService } from "./air-quality.service";

@injectable()
export class AirQuality {
  constructor(public service: AirQualityService) {}
  async displayData() {
    const data: AirQualityApiResponse =
      await this.service.getAirQualityBasedOnLocation();

    const airQualityIndex: string = String(data.indexes[0].aqi);
    const airQualityVerbal: string = data.indexes[0].category;
    const generalPopulation: string =
      data.healthRecommendations.generalPopulation;
    const lungDiseasePopulation: string =
      data.healthRecommendations.lungDiseasePopulation;
    const heartDiseasePopulation: string =
      data.healthRecommendations.heartDiseasePopulation;
    const pregnantWomen: string = data.healthRecommendations.pregnantWomen;
    const children: string = data.healthRecommendations.children;

    document.querySelector("#main")!.innerHTML = html;
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
