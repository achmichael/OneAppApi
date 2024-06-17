import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();
export const getDatasUsers = async (req, res, next) => {
  try {
    const dataUser = await prisma.user.findMany({
      select: {
        name: true,
        email: true,
        password: false,
        dateOfBirth: true,
        points: true,
        latitude: true,
        longitude: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!dataUser) {
      return next(new ResponseError(404, "No user found"));
    }
    res.status(200).json(dataUser);
  } catch (error) {
    next(error);
  }
};
export const getDataUser = async function (req, res, next) {
  try {
    const userId = req.params.user_id;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      select: {
        name: true,
        email: true,
        password: false,
        dateOfBirth: true,
        points: true,
        latitude: true,
        longitude: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return next(new ResponseError(404, "User Not Found"));
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
export const updateDataUser = async function (req, res, next) {
  try {
    const userId = req.params.user_id;
    const datas = req.body;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      data: datas,
    });
    if (!user) {
      return next(new ResponseError(404, "User Not Found"));
    }
    res.status(200).json({
      message: "Update user successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const deleteDataUser = async function (req, res, next) {
  try {
    const userId = req.params.user_id;
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    if (!user) {
      return next(new ResponseError(404, "User Not Found"));
    }
    await prisma.user.delete({
      where: {
        id: parseInt(userId),
      },
    });
    res.status(200).json({
      message: "Delete user successfully",
    });
  } catch (error) {
    next(error);
  }
};
