import { cache } from "..";
import { Coordinates, REVERSE_GEOCODING_URL } from "./geocode-constants";

export const geocodePlace = async (
  locationInput: string
): Promise<Coordinates> => {
  try {
    const cachedValue: Coordinates | undefined = cache.get(
      `${locationInput}:coordinates`
    );
    if (cachedValue) {
      return cachedValue;
    } else {
      const response = await fetch(`${REVERSE_GEOCODING_URL}${locationInput}`);
      const { results } = await response.json();

      const data = results[0];

      const coordinates: Coordinates = {
        latitude: data.geometry.location.lat,
        longitude: data.geometry.location.lng,
      };
      cache.set(`${locationInput}:coordinates`, coordinates);
      return coordinates;
    }
  } catch (error) {
    throw error;
  }
};
