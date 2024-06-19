import express from 'express';
import { register } from "../Controller/UserController.js";
import { validateDataUserRegister } from "../Middleware/validateDataUsers.js";
import { validateDataPartnerRegister } from '../Middleware/validateDataPartner.js';
import { registerPartner } from '../Controller/PartnerController.js';
export const registerRouter = express.Router();
registerRouter.post("/partners", validateDataPartnerRegister, registerPartner);
registerRouter.post("/users", validateDataUserRegister, register);
