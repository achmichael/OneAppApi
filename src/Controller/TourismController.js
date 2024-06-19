import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
import TourismRepository from "../Gateways/TourismRepository.js";
import { GetTourisms, GetTourismById, AddTourism } from "../UseCases/GetAndCreateTourism.js";
const prisma = new PrismaClient();

export const getDatasTourism = async function (req, res, next) {
  try {
    const datas = new GetTourisms(TourismRepository);
    const tourisms = await datas.execute();
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
    const tourismId = parseInt(req.params.tourism_id);
    const result = new GetTourismById(TourismRepository);
    const tourism = await result.execute(tourismId);
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
    const datas = req.body;
    const addTourism = new AddTourism(TourismRepository);
    const newTourism = await addTourism.execute(datas);
    res.status(201).json({
      message: "Tourism created successfully",
      tourism: newTourism,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
