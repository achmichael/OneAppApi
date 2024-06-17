import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      return next(new ResponseError(404, "User not found"));
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(new ResponseError(404, "Invalid password"));
    }
    const jwtToken = process.env.JWT_SECRET;
    const token = jwt.sign({ userId: user.id, email: user.email }, jwtToken, {
      expiresIn: "1h",
    });
    res.status(200).json({
      message: "Login successful",
      token: token,
    });
  } catch (error) {
    next(error);
  }
};
export const register = async (req, res, next) => {
  const { email, password, name, dateOfBirth, latitude, longitude } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
        dateOfBirth: dateOfBirth,
        latitude: latitude,
        longitude: longitude,
      },
    });
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
