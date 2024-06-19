import express from "express";
import { findLocations, findNearestPartners } from "../Controller/PartnerController.js";
export const partnerRouter = express.Router();
partnerRouter.get('/nearby', findNearestPartners);
partnerRouter.get('/', findLocations);

