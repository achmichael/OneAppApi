import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const partner = await prisma.partner.findUnique({
      where: { email },
    });
    if (!partner) {
      return next(new ResponseError(400, "Email not Found"));
    }
    const isValidPassword = await bcrypt.compare(password, partner.password);
    if (!isValidPassword) {
      return next(new ResponseError(400, "Invalid password"));
    }
    const jwtToken = process.env.JWT_SECRET;
    const token = jwt.sign({ partnerId: partner.id }, jwtToken, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login Successfully", token: token });
  } catch (error) {
    next(error);
  }
};
export const register = async (req, res, next) => {
  try {
    const {
      businessName,
      email,
      password,
      type,
      location,
      latitude,
      longitude,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const partner = await prisma.partner.create({
      data: {
        businessName,
        email,
        password: hashedPassword,
        type,
        location,
        latitude,
        longitude,
      },
    });
    res.status(201).json({
      message: "Partner created successfully",
      partner,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
