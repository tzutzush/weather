import { cache } from "..";
import { geocodePlace } from "../geocode-service/geocode-service";
import {
  AirQualityApiResponse,
  CURRENT_CONDITIONS_URL,
} from "./air-quality-constants";

export const getAirQualityBasedOnLocation = async (
  locationInput: string = "Szeged"
): Promise<AirQualityApiResponse> => {
  try {
    const cachedValue: AirQualityApiResponse = cache.get(
      `${locationInput}:air-quality`
    );
    if (cachedValue) {
      return { ...cachedValue, location: locationInput };
    } else {
      const location = await geocodePlace(locationInput);
      const body = {
        location,
        extra_computations: ["HEALTH_RECOMMENDATIONS"],
        language_code: "en",
      };
      const response = await fetch(CURRENT_CONDITIONS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      cache.set(`${locationInput}:air-quality`, {
        ...data,
        location: locationInput,
      });
      return { ...data, location: locationInput };
    }
  } catch (error) {
    throw error;
  }
};
