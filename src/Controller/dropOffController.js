import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
}
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
export const findNearestPartners = async (req, res, next) => {
  const userId = req.user.userId;
  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(userId),
    },
  });
  if (!user) {
    return next(new ResponseError(404, "User Not Found"));
  }
  const latitude = user.latitude;
  const longitude = user.longitude;

  if (latitude === null || longitude === null) {
    return next(new ResponseError(400, "User coordinates are not set"));
  }
  try {
    const partners = await prisma.partner.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null },
      },
    });
    const nearestPartners = partners
      .map((partner) => {
        const distance = calculateDistance(
          latitude,
          longitude,
          partner.latitude,
          partner.longitude
        );
        return { ...partner, distance };
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
      .map((partner) => ({
        distance: partner.distance,
        businessName: partner.businessName,
        location: partner.location,
        email: partner.email,
      }));
    res.json(nearestPartners);
  } catch (error) {
    next(error);
  }
};
export const findLocations = async (req, res, next) => {
  try {
    const partners = await prisma.partner.findMany();
    const location = partners.map((elemen) => {
      return {
        email: elemen.email,
        businessName: elemen.businessName,
        location: elemen.location,
      };
    });
    if (!location) {
      return next(new ResponseError(400, "No location found"));
    }
    res.status(200).json({ location });
  } catch (error) {
    next(error);
  }
};
export const findNearestDropOffLocation = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const customer = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });
    if (!customer.latitude || !customer.longitude) {
      return next(new ResponseError(404, "User coordinates are not set"));
    }
    const locations = await prisma.dropOffLocation.findMany();
    const nearesLocations = locations
      .map((location) => {
        const distance = calculateDistance(
          customer.latitude,
          customer.longitude,
          location.latitude,
          location.longitude
        );
        return { ...location, distance };
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
      .map((location) => ({
        distance: location.distance,
        name: location.name,
        address: location.address,
        qrCode: location.qrCode,
        latitude: location.latitude,
        longitude: location.longitude,
        qrCode: location.qrCode,
        url: location.url,
      }));
    res.json(nearesLocations);
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
export const addPlasticWasteDonation = async (req, res, next) => {
  try {
    const datas = req.body;
    const newLocation = await prisma.dropOffLocation.create({
      data: datas,
    });
    res.status(201).json({
      message: "Location Added successfully",
      location: newLocation,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
export const getDatasLocations = async (req, res, next) => {
  try {
    const locations = await prisma.dropOffLocation.findMany();
    if (!locations) {
      return next(new ResponseError(404, "No location found"));
    }
    res.status(200).json(locations);
  } catch (error) {
    next(error);
  }
};
export const getDataLocation = async (req, res, next) => {
  try {
    const locationId = req.params.location_id;
    const location = await prisma.dropOffLocation.findUnique({
      where: {
        id: parseInt(locationId),
      },
    });
    res.status(200).json(location);
  } catch (error) {
    next(error);
  }
};
export const updateDataLocation = async (req, res, next) => {
  try {
    const locationId = req.params.location_id;
    const existingLocation = await prisma.dropOffLocation.findUnique({
      where: {
        id: parseInt(locationId),
      },
    });
    if (!existingLocation) {
      return next(
        new ResponseError(404, `Location With Id : ${locationId} Not Found`)
      );
    }
    const datas = req.body;
    const updateLocation = await prisma.dropOffLocation.update({
      where: {
        id: parseInt(locationId),
      },
      data: datas,
    });
    res.status(200).json({
      message: "Location updated successfully",
      location: updateLocation,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteDataLocation = async (req, res, next) => {
  try {
    const locationId = req.params.location_id;
    await prisma.dropOffLocation.delete({
      where: {
        id: parseInt(locationId),
      },
    });
    res.status(200).json({
      message: "Location deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const pickDestination = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    if (user.latitude === null || user.longitude === null) {
      return next(new ResponseError(404, "User coordinates are not set"));
    }
    const latitudeUser = user.latitude;
    const longitudeUser = user.longitude;
    const ratePerKm = 5000;
    const { latitude, longitude } = req.body;
    if (!latitude || !longitude) {
      return next(new ResponseError(400, "Destination coordinates are not set"));
    }
    const distance = calculateDistance(
      latitudeUser,
      longitudeUser,
      parseFloat(latitude),
      parseFloat(longitude)
    );
    const fare = calculateFare(distance, ratePerKm);
    res.status(200).json({
      distance : distance,
      fare: formatRupiah(Math.round(fare)) 
    })
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
function calculateFare(distance, ratePerKm) {
  return distance * ratePerKm;
}
function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(number);
}
