import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
import {
  GetProfileUser,
  UpdateProfileUser,
  DeleteProfileUser,
  GetProfileUserNoId,
  UpdateProfileUserNoId,
  DeleteProfileUserNoId,
  AddUserProfile,
} from "../UseCases/CRUDUserProfile.js";
import UserProfileRepository from "../Gateways/UserProfileRepository.js";
const prisma = new PrismaClient();
export const getProfileUser = async (req, res, next) => {
  const userId = parseInt(req.params.user_id);
  try {
    const getProfile = new GetProfileUser(UserProfileRepository);
    const userProfile = await getProfile.execute(userId);
    if (!userProfile) {
      return next(new ResponseError(404, "User Profile not found"));
    }
    res.status(200).json(userProfile);
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
export const updateProfileUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.user_id);
    const getProfile = new GetProfileUser(UserProfileRepository);
    const userProfile = await getProfile.execute(userId);
    if (!userProfile) {
      return next(new ResponseError(404, "User Profile not found"));
    }
    const datas = req.body;
    const updateProfile = new UpdateProfileUser(UserProfileRepository);
    const updatedUserProfile = await updateProfile.execute(userId, datas);
    res.status(200).json({
      message: "Update user profile successfully",
      data: updatedUserProfile,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteProfileUser = async (req, res, next) => {
  try {
    const userId = parseInt(req.params.user_id);
    const getProfile = new GetProfileUser(UserProfileRepository);
    const userProfile = await getProfile.execute(userId);
    if (!userProfile) {
      return next(new ResponseError(404, "User Profile not found"));
    }
    const deleteUserProfile = new DeleteProfileUser(UserProfileRepository);
    await deleteUserProfile.execute(userId);
    res.status(200).json({
      message: "Delete user profile successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const getProfileUserNoId = async (req, res, next) => {
  try {
    const userId = parseInt(req.user.userId);
    const getProfile = new GetProfileUserNoId(UserProfileRepository);
    const userProfile = await getProfile.execute(userId);
    if (!userProfile) {
      return next(new ResponseError(404, "User Profile not found"));
    }
    res.status(200).json(userProfile);
  } catch (error) {
    next(error);
  }
};
export const updateUserProfileNoId = async (req, res, next) => {
  try {
    const userId = parseInt(req.user.userId);
    const getProfile = new GetProfileUserNoId(UserProfileRepository);
    const userProfile = await getProfile.execute(userId);
    if (!userProfile) {
      return next(new ResponseError(404, "User Profile not found"));
    }
    const datas = req.body;
    const updateProfile = new UpdateProfileUserNoId(UserProfileRepository);
    const updatedUserProfile = await updateProfile.execute(userId, datas);
    res.status(200).json({
      message: "Profile updated successfully",
      profile: updatedUserProfile,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
export const deleteProfileUserNoId = async (req, res, next) => {
  try {
    const userId = parseInt(req.user.userId);
    const getProfile = new GetProfileUser(UserProfileRepository);
    const userProfile = await getProfile.execute(userId);
    if (!userProfile) {
      return next(new ResponseError(404, "User Profile not found"));
    }
    const deleteUserProfile = new DeleteProfileUserNoId(UserProfileRepository);
    await deleteUserProfile.execute(userId);
    res.status(200).json({
      message: "Profile deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const addUserProfile = async (req, res, next) => {
  try {
    const userId = parseInt(req.user.userId);
    const datas = req.body;
    const createUser = new AddUserProfile(UserProfileRepository);
    const newUserProfile = await createUser.execute(userId, datas);
    res.status(200).json({
      message: "Profile created successfully",
      profile: newUserProfile,
    });
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
