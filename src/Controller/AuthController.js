import { Login } from "../UseCases/Login.js";
import UserRepository from "../Gateways/UserRepository.js";
import PartnerRepository from "../Gateways/PartnerRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const loginUseCase = new Login(UserRepository, PartnerRepository, bcrypt, jwt);
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginUseCase.execute(email, password);
    res.status(200).json({
      message: "Login successful",
      token: result.token,
      role: result.role,
    });
  } catch (error) {
    next(error);
  }
};
