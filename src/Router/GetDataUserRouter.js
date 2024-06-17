import express from "express";
import {
  validateDataUserRegister,
  validateUserId,
} from "../Middleware/validateDataUsers.js";
import {
  deleteDataUser,
  getDataUser,
  getDatasUsers,
  updateDataUser,
} from "../Controller/DataUserController.js";
export const dataUserRouter = express.Router();
dataUserRouter.get("/", getDatasUsers);
dataUserRouter.get("/:user_id", validateUserId, getDataUser);
dataUserRouter.put(
  "/:user_id",
  validateUserId,
  validateDataUserRegister,
  updateDataUser
);
dataUserRouter.delete("/:user_id", validateUserId, deleteDataUser);
