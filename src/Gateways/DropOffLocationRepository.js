import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { DropOffLocation } from "../Entities/DropOffLocation.js";

export default class DropOffLocationRepository {
  async findById(id) {
    return await prisma.dropOffLocation.findUnique({
      where: { id: parseInt(id) },
    });
  }

  async findAll() {
    const locations = await prisma.dropOffLocation.findMany();
    return locations.map(location => DropOffLocation.create(location));
  }


  async addData(data) {
    return await prisma.dropOffLocation.create({
      data: {
        name: data.name,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
        qrCode: data.qrCode,
        url: data.url,
      },
    });
  }

  async update(id, data) {
    return await prisma.dropOffLocation.update({
      where: { id: parseInt(id) },
      data: {
        name: data.name,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
        qrCode: data.qrCode,
        url: data.url,
      },
    });
  }
  async delete(id) {
    return await prisma.dropOffLocation.delete({
      where: { id: parseInt(id) },
    });
  }
}
