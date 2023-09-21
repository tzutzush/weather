import {
  AirQualityApiResponse,
  CURRENT_CONDITIONS_URL,
} from "./air-quality-constants";

interface Location {
  latitude: number;
  longitude: number;
}

export class AirQualityService {
  private url = CURRENT_CONDITIONS_URL;

  async getAirQualityBasedOnLocation(): Promise<AirQualityApiResponse> {
    try {
      const location = await this.getCurrentLocation();
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

  private async getCurrentLocation(): Promise<Location> {
    return new Promise((resolve, _) => {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          resolve(location);
        }
      );
    });
  }
}
