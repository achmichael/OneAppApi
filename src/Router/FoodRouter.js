import express from "express";
import { addDataFood, getDataFood, getDatasFoods } from "../Controller/FoodController.js";
import { validateFood } from "../Middleware/validateFood.js";
export const foodRouter = express.Router();
foodRouter.get("/", getDatasFoods);
foodRouter.get('/:food_id', getDataFood)
foodRouter.post("/", validateFood ,addDataFood);
