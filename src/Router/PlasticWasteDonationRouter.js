import express from "express";
import {
  addPlasticWasteDonation
} from "../Controller/dropOffController.js";
import { validateDataDropOffLocation } from "../Middleware/validateDropOffLocation.js";
import {
  validateLocationId,
} from "../Middleware/validateDropOffLocation.js";
import {
  deleteDataLocation,
  findNearestDropOffLocations,
  getDataLocation,
  getDatasLocations,
  updateDataLocation,
} from "../Controller/dropOffController.js";
import { scanQr } from "../Controller/ScanController.js";
export const plasticWasteDonationRouter = express.Router();
plasticWasteDonationRouter.post(
  "/",
  validateDataDropOffLocation,
  addPlasticWasteDonation
);
plasticWasteDonationRouter.get("/", getDatasLocations);
plasticWasteDonationRouter.get("/:location_id/location", validateLocationId, getDataLocation);
plasticWasteDonationRouter.put(
  "/:location_id/location",
  validateLocationId,
  validateDataDropOffLocation,
  updateDataLocation
);
plasticWasteDonationRouter.delete("/:location_id/location", validateLocationId, deleteDataLocation);
plasticWasteDonationRouter.get("/nearby", findNearestDropOffLocations);
plasticWasteDonationRouter.post('/scan', scanQr);
