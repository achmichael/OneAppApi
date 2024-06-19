import { ResponseError } from "../Config/error.js";
import FindNearestDropOffLocations from "../UseCases/FindNearestDropOffLocations.js";
import DropOffLocationRepository from "../Gateways/DropOffLocationRepository.js";
import {
  AddDropOffLocation,
  GetDropOffLocations,
  GetDropOffLocation,
  UpdateDropOffLocation,
  DeleteDropOffLocation,
} from "../UseCases/ManageDropOffLocations.js";
const addDropOffLocation = new AddDropOffLocation();
const getDropOffLocations = new GetDropOffLocations();
const getDropOffLocation = new GetDropOffLocation();
const updateDropOffLocation = new UpdateDropOffLocation();
const deleteDropOffLocation = new DeleteDropOffLocation();
const dropOffLocationRepository = new DropOffLocationRepository();
export const findNearestDropOffLocations = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const findNearestDropOffLocationsUseCase = new FindNearestDropOffLocations(dropOffLocationRepository);
    const nearestLocations = await findNearestDropOffLocationsUseCase.execute(userId);
    res.json(nearestLocations);
  } catch (error) {
    next(new ResponseError(500, error.message));
  }
};
export const addPlasticWasteDonation = async (req, res, next) => {
  try {
    const datas = req.body;
    const location = await addDropOffLocation.execute(datas);
    res.status(201).json({
      message: "Location added successfully",
      location,
    });
  } catch (error) {
    next(error);
  }
};
export const getDatasLocations = async (req, res, next) => {
  try {
    const locations = await getDropOffLocations.execute();
    res.status(200).json(locations);
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
export const getDataLocation = async (req, res, next) => {
  try {
    const location = await getDropOffLocation.execute(req.params.location_id);
    if (!location) {
      return next(new ResponseError(404, "Location Not Found"));
    }
    res.status(200).json(location);
  } catch (error) {
    next(error);
  }
};
export const updateDataLocation = async (req, res, next) => {
  try {
    const locationId = parseInt(req.params.location_id);
    const datas = req.body;
    const location = await updateDropOffLocation.execute(locationId, datas);
    res.status(200).json({
      message: "Location updated successfully",
      location,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteDataLocation = async (req, res, next) => {
  try {
    await deleteDropOffLocation.execute(req.params.location_id);
    res.status(200).json({
      message: "Location deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
