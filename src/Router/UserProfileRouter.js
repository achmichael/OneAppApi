import express from 'express';
import { validateUserId } from "../Middleware/validateDataUsers.js";
import { validateDataUpdateProfile } from "../Middleware/validateDataProfile.js";
import {
  addUserProfile,
  deleteProfileUser,
  deleteProfileUserNoId,
  getProfileUser,
  getProfileUserNoId,
  updateProfileUser,
  updateUserProfileNoId,
} from "../Controller/UserProfileController.js";
export const userRouter = express.Router();
userRouter.get("/:user_id/profile", validateUserId, getProfileUser);
userRouter.put("/:user_id/profile", validateUserId, validateDataUpdateProfile, updateProfileUser);
userRouter.delete("/:user_id/profile", validateUserId, deleteProfileUser);
userRouter.post('/profile', validateDataUpdateProfile ,addUserProfile);
userRouter.get("/profile", getProfileUserNoId);
userRouter.put("/profile", validateDataUpdateProfile, updateUserProfileNoId);
userRouter.delete("/profile", deleteProfileUserNoId);
