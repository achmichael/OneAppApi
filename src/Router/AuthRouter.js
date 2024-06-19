import express from "express";
import { login } from "../Controller/AuthController.js";
export const authenticationRouter = express.Router();
authenticationRouter.post("/", login);
