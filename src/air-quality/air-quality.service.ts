import { injectable } from "tsyringe";
import {
  AirQualityApiResponse,
  CURRENT_CONDITIONS_URL,
} from "./air-quality-constants";
import { LocationService } from "../shared/location-service";

@injectable()
export class AirQualityService {
  private url = CURRENT_CONDITIONS_URL;
  constructor(private locationService: LocationService) {}

  async getAirQualityBasedOnLocation(
    locationInput?: string
  ): Promise<AirQualityApiResponse> {
    try {
      let location;
      if (!locationInput) {
        location = await this.locationService.getCurrentLocation();
      } else {
        location = await this.locationService.geocodePlace(locationInput);
      }
      const headers = {
        "Content-Type": "application/json",
      };
      const body = {
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        extra_computations: ["HEALTH_RECOMMENDATIONS"],
        language_code: "en",
      };

      const response = await fetch(this.url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}
