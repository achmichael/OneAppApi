import { calculateDistance } from "../Utils/Geoutils.js";
import { ResponseError } from "../Config/error.js";
import userRepository from '../Gateways/UserRepository.js'; // Pastikan ini sesuai dengan struktur aplikasi Anda

function calculateFare(distance, ratePerKm) {
  return distance * ratePerKm;
}

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

export default class PickDestination {
  async execute(userId, destinationData) {
    try {
      const user = await userRepository.findById(userId);
      
      if (!user) {
        throw new ResponseError(404, 'User not found');
      }

      if (!user.latitude || !user.longitude) {
        throw new ResponseError(400, 'User coordinates are not set');
      }

      const latitudeUser = user.latitude;
      const longitudeUser = user.longitude;
      const ratePerKm = 5000;

      if (!destinationData.latitude || !destinationData.longitude) {
        throw new ResponseError(400, 'Destination coordinates are not set');
      }

      const latitudeDestination = parseFloat(destinationData.latitude);
      const longitudeDestination = parseFloat(destinationData.longitude);

      const distance = calculateDistance(
        latitudeUser,
        longitudeUser,
        latitudeDestination,
        longitudeDestination
      );

      const fare = calculateFare(distance, ratePerKm);

      // Return success response
      return {
        status: 200,
        data: {
          distance,
          fare: formatRupiah(Math.round(fare)),
        }
      };
    } catch (error) {
      console.error('Error in PickDestination:', error);
      throw error; // Rethrow error untuk ditangani di middleware error handler
    }
  }
}
