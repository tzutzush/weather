export const GOOGLE_API_KEY = "AIzaSyA9wGcs9fm7tRPCoaCMT1qGiV3ZPMfg_Mg";
export const REVERSE_GEOCODING_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_API_KEY}&address=`;

interface Location {
  latitude: number;
  longitude: number;
}

export class LocationService {
  async getCurrentLocation(): Promise<Location> {
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

  async geocodePlace(locationInput: string): Promise<Location> {
    const response = await fetch(`${REVERSE_GEOCODING_URL}${locationInput}`);
    const { results } = await response.json();

    const data = results[0];

    const location: Location = {
      latitude: data.geometry.location.lat,
      longitude: data.geometry.location.lng,
    };

    return location;
  }
}
