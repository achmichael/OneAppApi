import express from "express";
import { pickDestination } from "../Controller/PickDestinationController.js";
export const transportRouter = express.Router();
transportRouter.post("/pick-destination", pickDestination);
