import express from 'express';
import { login, register } from "../Controller/UserController.js";
import { validateDataUserRegister, validateDataUserLogin } from "../Middleware/validateDataUsers.js";
export const authRouter = express.Router();
authRouter.post("/login", validateDataUserLogin, login);
authRouter.post("/register", validateDataUserRegister, register);
