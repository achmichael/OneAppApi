import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();
export const scanQr = async (req, res, next) => {
  try {
    const { qrCode } = req.body;
    const location = await prisma.dropOffLocation.findMany({
      where: {
        qrCode: qrCode,
      },
    });
    if (!location) {
      return next(new ResponseError(404, "No location found"));
    }
    res.status(200).json({ message : "Thank You For Contributing To Protect Our Earth"});
  } catch (error) {
    console.log(error.stack)
    next(error);
  }
};
