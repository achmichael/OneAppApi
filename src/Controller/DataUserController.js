// src/Controllers/UserController.js

import { ResponseError } from "../Config/error.js";
import UserRepository from "../Gateways/UserRepository.js";
import { GetAllUsers, GetUserById, UpdateUser, DeleteUser } from "../UseCases/CreateUser.js";

const getAllUsers = new GetAllUsers(UserRepository);
const getUserById = new GetUserById(UserRepository);
const updateUser = new UpdateUser(UserRepository);
const deleteUser = new DeleteUser(UserRepository);

export const getDatasUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers.execute();
    if (!users || users.length === 0) {
      return next(new ResponseError(404, "No users found"));
    }
    res.status(200).json(users);
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};

export const getDataUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.user_id);
    const user = await getUserById.execute(userId);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};

export const updateDataUser = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const datas = req.body;
    const updatedUser = await updateUser.execute(userId, datas);
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteDataUser = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    await deleteUser.execute(userId);
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
