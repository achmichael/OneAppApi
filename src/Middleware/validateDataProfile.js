import { isValid } from "date-fns";
import { ResponseError } from "../Config/error.js";
function isValidInput(input) {
  return input.trim().length > 0;
}
export function validateDataUpdateProfile(req, res, next) {
  const { profilePicture, phoneNumber, address } = req.body;
  if (!profilePicture || !phoneNumber || !address) {
    return next(
      new ResponseError(
        404,
        "missing required fields profilePicture, address, phoneNumber"
      )
    );
  }
  if (
    !isValidInput(profilePicture) ||
    !isValidInput(phoneNumber) ||
    !isValidInput(address)
  ) {
    return next(
      new ResponseError(400, "must not only contain spaces in the field")
    );
  }
  if (profilePicture && typeof profilePicture !== 'string') {
    return next(
      new ResponseError(400, "Invalid profilePicture format: must be a string")
    );
  }
  if (phoneNumber && typeof phoneNumber !== 'string') {
    return next(
      new ResponseError(400, "Invalid phoneNumber format: must be a string")
    );
  }
  if (address && typeof address !== 'string') {
    return next(
      new ResponseError(400, "Invalid address format: must be a string")
    );
  }
  next();
}
