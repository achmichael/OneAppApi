import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();

export const getDatasTourism = async function (req, res, next) {
  try {
    const tourisms = await prisma.tourism.findMany();
    if (!tourisms) {
      return next(new ResponseError(404, "No Tourisms Found"));
    }
    res.status(200).json(tourisms);
  } catch (error) {
    next(error);
  }
};
export const getDataTourism = async function (req, res, next) {
  try {
    const tourismId = req.params.tourism_id;
    const tourism = await prisma.tourism.findUnique({
      where: {
        id: parseInt(tourismId),
      },
    });
    if (!tourism) {
      return next(
        new ResponseError(404, `Tourism With Id : ${tourismId} Not Found`)
      );
    }
    res.status(200).json(tourism);
  } catch (error) {
    next(error);
  }
};
export const addDataTourism = async function (req, res, next) {
  try {
    let newTourisms = "";
    const datas = req.body;
    if (Array.isArray(datas)) {
      newTourisms = await prisma.tourism.createMany({
        data: datas,
      });
    }
    if (newTourisms) {
      return res.status(201).json({
        message: "Tourism created successfully",
        tourism: newTourisms,
      });
    }
    const newTourism = await prisma.tourism.create({
      data: datas,
    });
    res.status(201).json({
      message: "Tourism created successfully",
      tourism: newTourism,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
