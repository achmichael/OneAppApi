import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();
export async function getDatasFoods(req, res, next) {
  try {
    const foods = await prisma.foodItem.findMany();
    if (!foods) {
      return next(new ResponseError(404, "No food found"));
    }
    res.status(200).json(foods);
  } catch (error) {
    next(error);
  }
}
export const getDataFood = async (req, res, next) => {
  try {
    const foodId = req.params.food_id;
    const food = await prisma.foodItem.findUnique({
      where: {
        id: parseInt(foodId),
      },
    });
    if (!food) {
      return next(new ResponseError(404, "Food Not Found"));
    }
    res.status(200).json(food);
  } catch (error) {
    next(error);
  }
};
export const addDataFood = async (req, res, next) => {
  try {
    const datas = req.body;
    if (Array.isArray(datas)) {
      const newFoods = await prisma.foodItem.createMany({
        data: datas,
      });
      res.status(201).json(newFoods);
      return;
    } else {
      const newFood = await prisma.foodItem.create({
        data: datas,
      });
      res.status(201).json({ message : "Add Data Food Successfully",data : newFood});
    }
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
