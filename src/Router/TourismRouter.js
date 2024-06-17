import express from "express";
import { addDataTourism, getDataTourism, getDatasTourism } from "../Controller/TourismController.js";
import { validateDataTourism } from "../Middleware/validateDataTourism.js";
export const tourismRouter = express.Router();
tourismRouter.get('/', getDatasTourism);
tourismRouter.get('/:tourism_id', getDataTourism);
tourismRouter.post('/', validateDataTourism ,addDataTourism);
