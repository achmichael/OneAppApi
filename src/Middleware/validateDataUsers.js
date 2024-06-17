import { ResponseError } from "../Config/error.js";
export function isValidInput(input) {
  return input.trim().length > 0;
}
export function validateUserId(req, res, next) {
  const userId = req.params.user_id;
  const isNumber = /^\d+$/.test(userId);
  if (!userId) {
    return next(new ResponseError(400, "guestId is required"));
  } else if (!isNumber) {
    return next(new ResponseError(400, "guestId  should be a number"));
  }
  next();
}
export function validateDataUserRegister(req, res, next) {
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    return next(
      new ResponseError(
        400,
        "Missing required fields: email, password, name"
      )
    );
  }
  if (
    !isValidInput(name) ||
    !isValidInput(email) ||
    !isValidInput(password)
  ) {
    return next(new ResponseError(400, "input cannot contain only spaces"));
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new ResponseError(400, "Invalid email format"));
  }
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{:;.,<>?]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return next(
      new ResponseError(
        400,
        "Invalid password format. Password must contain at least one uppercase letter, one number, and one special character and be at least 8 characters long."
      )
    );
  }
  next();
}
export function validateDataUserLogin(req, res, next) {
  const { email, password } = req.body;
  if (!password || !email) {
    return next(
      new ResponseError(400, "Missing required fields: name, password")
    );
  }
  if (!isValidInput(email) || !isValidInput(password)) {
    return next(new ResponseError(400, "input cannot contain only spaces"));
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new ResponseError(400, "Invalid email format"));
  }
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{:;.,<>?]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return next(
      new ResponseError(
        400,
        "Invalid password format. Password must contain at least one uppercase letter, one number, and one special character and be at least 8 characters long."
      )
    );
  }
  next();
}
