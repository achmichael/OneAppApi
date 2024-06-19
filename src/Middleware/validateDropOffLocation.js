import { ResponseError } from "../Config/error.js";
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
export function checkTypeData(value) {
  return typeof value === 'string';
}

export function checkTypeDataNum(value) {
  return typeof value === 'number';
}

function isValidInput(value) {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return !isNaN(value);
}

export function validateDataDropOffLocation(req, res, next) {
  const { name, address, latitude, longitude, qrCode, url } = req.body;

  if (!name || !address || !latitude || !longitude || !qrCode || !url) {
    return next(
      new ResponseError(
        400,
        "Missing Required Fields name, address, latitude, longitude, url and qrCode"
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
        "name, address, qrCode, and url data types must be String"
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
