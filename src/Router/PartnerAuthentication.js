import express from "express";
import {
  validateDataPartnerLogin,
  validateDataPartnerRegister,
} from "../Middleware/validateDataPartner.js";
import { login, register } from "../Controller/PartnerController.js";
export const authPartnerRouter = express.Router();
authPartnerRouter.post("/login", validateDataPartnerLogin, login);
authPartnerRouter.post("/register", validateDataPartnerRegister, register);
