import { PrismaClient } from "@prisma/client";
import express from "express";
import { pickDestination } from "../Controller/dropOffController.js";
export const transportRouter = express.Router();
const prisma = new PrismaClient();
transportRouter.post("/pick-destination", pickDestination);
