import { isValid } from "date-fns";
import { ResponseError } from "../Config/error.js";
import { isValidInput } from "./validateDataUsers.js";
export function checkTypeData(param) {
  return typeof param === "string";
}
export function checkTypeDataNum(param) {
  return typeof param === "number";
}
export function validateLocationId(req, res, next) {
    const userId = req.params.location_id;
    const isNumber = /^\d+$/.test(userId);
    if (!userId) {
      return next(new ResponseError(400, "Location Id is required"));
    } else if (!isNumber) {
      return next(new ResponseError(400, "Location Id should be a number"));
    }
    next();
  }
export function validateDataDropOffLocation(req, res, next) {
  const { name, address, latitude, longitude, qrCode , url} = req.body;
  if (!name || !address || !latitude || !longitude || !qrCode || !url) {
    return next(
      new ResponseError(
        400,
        "Missing Required Fields name, address, latitude, longitude and qrCode"
      )
    );
  }
  if (
    !checkTypeData(name) ||
    !checkTypeData(address) ||
    !checkTypeData(qrCode) ||
    !checkTypeData(url)
  ) {
    return next(
      new ResponseError(
        404,
        "name, address and qrcode data types must be String"
      )
    );
  }
  if (!checkTypeDataNum(latitude) || !checkTypeDataNum(longitude)) {
    return next(
      new ResponseError(404, "latitude and longitude data types must be number")
    );
  }
  if (
    !isValidInput(name) ||
    !isValidInput(address) ||
    !isValidInput(qrCode) ||
    !isValidInput(latitude) ||
    !isValidInput(longitude)
  ) {
    return next(new ResponseError(400, "input cannot contain only spaces"));
  }
  next();
}
