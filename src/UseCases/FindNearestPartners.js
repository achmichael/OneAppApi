import PartnerRepository from "../Gateways/PartnerRepository.js";
import { calculateDistance } from "../Utils/Geoutils.js";

export default class FindNearestPartners {
  constructor(partnerRepository) {
    this.partnerRepository = partnerRepository;
  }

  async execute(userId) {
    const user = await this.partnerRepository.getPartnerById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const latitude = user.latitude;
    const longitude = user.longitude;

    const partners = await this.partnerRepository.findNearest(latitude, longitude);

    const nearestPartners = partners
      .map((partner) => ({
        distance: calculateDistance(latitude, longitude, partner.latitude, partner.longitude),
        businessName: partner.businessName,
        location: partner.location,
        email: partner.email,
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    return nearestPartners;
  }
}
