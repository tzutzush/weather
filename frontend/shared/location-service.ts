import { Coordinates } from "../../backend/geocode-service/geocode-constants";

export class LocationService {
  async getCurrentLocation(): Promise<Coordinates> {
    return new Promise((resolve, _) => {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const coordinates = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          resolve(coordinates);
        }
      );
    });
  }
}

export const getCurrentLocation = async (): Promise<Coordinates> => {
  return new Promise((resolve, _) => {
    navigator.geolocation.getCurrentPosition(
      (position: GeolocationPosition) => {
        const coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(coordinates);
      }
    );
  });
};
