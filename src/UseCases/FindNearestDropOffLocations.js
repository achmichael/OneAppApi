
import { calculateDistance } from "../Utils/Geoutils.js";


export default class FindNearestDropOffLocations {
  constructor(DropOffLocationRepository) {
    this.DropOffLocationRepository = DropOffLocationRepository;
  }

  async execute(userId) {
    const user = await this.DropOffLocationRepository.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const latitude = user.latitude;
    const longitude = user.longitude;

    const locations = await this.DropOffLocationRepository.findNearest(latitude, longitude);

    const nearestLocations = locations
      .map((location) => ({
        distance: calculateDistance(latitude, longitude, location.latitude, location.longitude),
        name: location.name,
        address: location.address,
        qrCode: location.qrCode,
        latitude: location.latitude,
        longitude: location.longitude,
        url: location.url,
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    return nearestLocations;
  }
}
