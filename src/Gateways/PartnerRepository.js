import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Partner } from "../Entities/Partner.js";

class PartnerRepository {
  async save(partner) {
    return await prisma.partner.create({
      data: {
        email: partner.email,
        password: partner.password,
        businessName: partner.businessName,
        type: partner.type,
        location: partner.location,
        latitude: partner.latitude,
        longitude: partner.longitude,
      },
      select: {
        id: true,
        email: true,
        password: false,
        businessName: true,
        type: true,
        latitude: true,
        longitude: true,
        location: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async findByEmail(email) {
    return prisma.partner.findUnique({
      where: { email: email },
    });
  }
  async getAllPartners() {
    const partners = await prisma.partner.findMany({
      select: {
        id: true,
        businessName: true,
        email: true,
        type: true,
        location: true,
        latitude: true,
        longitude: true,
        password: false,
      },
    });
    return partners.map((partner) => Partner.create(partner));
  }
  async getPartnerById(id) {
    return await prisma.partner.findUnique({
      where: { id: id },
      select: {
        id: true,
        businessName: true,
        type: true,
        email: true,
        location: true,
        latitude: true,
        longitude: true,
        password: false,
      },
    });
  }
  async update(id, partner) {
    return await prisma.partner.update({
      where: { id: id },
      data: partner,
      select: {
        id: true,
        businessName: true,
        email: true,
        location: true,
        latitude: true,
        type: true,
        longitude: true,
        password: false,
      },
    });
  }
  async delete(id) {
    return await prisma.partner.delete({ where: { id: id } });
  }
  async findNearest(latitude, longitude) {
    const partnersData = await prisma.partner.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null },
      },
    });
    return partnersData.map((partnerData) => Partner.create(partnerData));
}
}
export default new PartnerRepository();
