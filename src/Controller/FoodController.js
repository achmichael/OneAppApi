import { ResponseError } from "../Config/error.js";
import FoodRepository from "../Gateways/FoodRepository.js";
import {
  GetFoods,
  GetFoodById,
  AddFood,
} from "../UseCases/GetAndCreateFood.js";

export async function getDatasFoods(req, res, next) {
  try {
    const getFoods = new GetFoods(FoodRepository);
    const foods = await getFoods.execute();
    if (!foods) {
      return next(new ResponseError(404, "No food found"));
    }
    res.status(200).json(foods);
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
}
export const getDataFood = async (req, res, next) => {
  try {
    const foodId = parseInt(req.params.food_id);
    const getFood = new GetFoodById(FoodRepository);
    const food = await getFood.execute(foodId);
    if (!food) {
      return next(new ResponseError(404, "Food Not Found"));
    }
    res.status(200).json(food);
  } catch (error) {
    console.log(error.stack)
    next(error);
  }
};
export const addDataFood = async (req, res, next) => {
  try {
    const datas = req.body;
    const addFood = new AddFood(FoodRepository);
    const newFood = await addFood.execute(datas);
    res
      .status(201)
      .json({ message: "Add Data Food Successfully", data: newFood });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
