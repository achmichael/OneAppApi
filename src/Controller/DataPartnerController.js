import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";

const prisma = new PrismaClient();
export async function datasPartner(req, res, next) {
  try {
    const datas = await prisma.partner.findMany({
      select: {
        id: true,
        businessName: true,
        email: true,
        location: true,
        latitude: true,
        longitude: true,
        password: false,
      },
    });
    if (!datas) {
      return next(new ResponseError(404, "No partner found"));
    }
    res.status(200).json(datas);
  } catch (error) {
    next(error);
  }
}
export async function getDataPartner(req, res, next) {
  try {
    const partnerId = req.params.partner_id;
    const partner = await prisma.partner.findUnique({
      where: { id: parseInt(partnerId) },
      select: {
        id: true,
        businessName: true,
        email: true,
        location: true,
        latitude: true,
        longitude: true,
        password: false,
      },
    });
    if (!partner) {
      return next(new ResponseError(404, "No partner found"));
    }
    res.status(200).json(partner);
  } catch (error) {
    next(error);
  }
}
export const addDataPartner = async (req, res, next) => {
  try {
    const datas = req.body;
    const newPartner = await prisma.partner.create({
      data: datas,
      select: {
        id: true,
        businessName: true,
        email: true,
        location: true,
        latitude: true,
        longitude: true,
        password: false,
      },
    });
    res.status(201).json({
      message: "Partner Added successfully",
      partner: newPartner,
    });
  } catch (error) {
    next(error);
  }
};
export const removeDataPartner = async (req, res, next) => {
  try {
    const partnerId = req.params.partner_id;
    const existingPartner = await prisma.partner.findUnique({
      where: {
        id: parseInt(partnerId),
      },
    });
    if (!existingPartner) {
      return next(new ResponseError(404, "No partner found"));
    }
    await prisma.partner.delete({
      where: {
        id: parseInt(partnerId),
      },
    });
    res.status(200).json({
      message: "Partner deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const updateDataPartner = async (req, res, next) => {
  try {
    const partnerId = req.params.partner_id;
    const datas = req.body;
    const existingPartner = await prisma.partner.findUnique({
      where: {
        id: parseInt(partnerId),
      },
    });
    if (!existingPartner) {
      return next(new ResponseError(404, "No partner found"));
    }
    const updatedPartner = await prisma.partner.update({
      where: {
        id: parseInt(partnerId),
      },
      data: datas,
      select: {
        id: true,
        businessName: true,
        email: true,
        location: true,
        latitude: true,
        longitude: true,
        password: false,
      },
    });
    res.status(200).json({
      message: "Partner updated successfully",
      data: updatedPartner,
    });
  } catch (error) {
    next(error);
  }
};
