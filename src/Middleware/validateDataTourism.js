import { ResponseError } from "../Config/error.js";
import { isValidInput } from "./validateDataUsers.js";
import { checkTypeData, checkTypeDataNum } from "./validateDropOffLocation.js";
export function validateDataTourism(req, res, next) {
  try {
    const { name, description, img, rating, mapUrl } = req.body;
    if (!name || !description || !img || !rating || !mapUrl) {
      return next(
        new ResponseError(
          400,
          "Missing Required Fields name, address, latitude, longitude and qrCode"
        )
      );
    }
    if (!isValidInput(name) ||!isValidInput(description) ||!isValidInput(img) ||!isValidInput(mapUrl)) {
        return next(new ResponseError(400, "input cannot contain only spaces"));
    }
    if (
      !checkTypeData(name) ||
      !checkTypeData(description) ||
      !checkTypeData(img) ||
      !checkTypeData(mapUrl)
    ) {
      return next(
        new ResponseError(
          400,
          "name, description, img and mapUrl data types must be String"
        )
      );
    }
    if(!checkTypeDataNum(rating)){
      return next(new ResponseError(400, "Rating should be a number"));
    }
    next();
  } catch (error) {
    next(error);
  }
}
