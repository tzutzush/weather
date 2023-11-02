import { GOOGLE_API_KEY } from "../shared/api-keys";

export const REVERSE_GEOCODING_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}&address=`;

export interface Coordinates {
  latitude: number;
  longitude: number;
}
