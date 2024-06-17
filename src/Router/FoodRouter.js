import express from "express";
import { addDataFood, getDataFood, getDatasFoods } from "../Controller/FoodController.js";
export const foodRouter = express.Router();
foodRouter.get("/", getDatasFoods);
foodRouter.get('/:food_id', getDataFood)
foodRouter.post("/", addDataFood);
