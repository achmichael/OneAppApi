import express from "express";
import { findLocations, findNearestPartners } from "../Controller/dropOffController.js";
export const partnerRouter = express.Router();
partnerRouter.get('/nearby', findNearestPartners);
partnerRouter.get('/', findLocations);

