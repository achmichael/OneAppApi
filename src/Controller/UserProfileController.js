import { PrismaClient } from "@prisma/client";
import { ResponseError } from "../Config/error.js";
const prisma = new PrismaClient();
export const getProfileUser = async (req, res, next) => {
  const id = req.params.user_id;
  try {
    const user = await prisma.userProfile.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!user) {
      return next(new ResponseError(404, "User not found"));
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
export const updateProfileUser = async (req, res, next) => {
  const id = req.params.user_id;
  const user = await prisma.userProfile.findUnique({
    where: {
      id: parseInt(id),
    }
  })
  if(!user){
    return next(new ResponseError(404, "User not found"));
  }
  const datas = req.body;
  try {
    const user = await prisma.userProfile.update({
      where: {
        id: parseInt(id),
      },
      data: datas,
    });
    if (!user) {
      return next(new ResponseError(404, "User not found"));
    }
    res.status(200).json({
      message: "Update user profile successfully",
      data: datas,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteProfileUser = async (req, res, next) => {
  try {
    const userId = req.params.user_id;
    const user = await prisma.userProfile.findUnique({
      where: {
        id: parseInt(userId),
      }
    })
    if(!user){
      return next(new ResponseError(404, "User not found"));
    }
    await prisma.userProfile.delete({
      where: {
        id: parseInt(userId),
      },
    });
    res.status(200).json({
      message: "Delete user profile successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const getProfileUserNoId = async (req, res, next) => {
  const userId = req.user.userId;
  const user = await prisma.userProfile.findUnique({
    where: {
      id: parseInt(userId),
    },
  });
  if (!user) {
    return next(new ResponseError(404, "User Profile not found"));
  }
  try {
    const userProfile = await prisma.userProfile.findUnique({
      where: {
        id: parseInt(userId),
      },
    });
    const recyclingActivity = await prisma.donation.findMany({
      where: {
        userId: parseInt(userId),
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    let totalPoints = 0;
    recyclingActivity.forEach((activity) => {
      totalPoints += activity.pointsAwarded;
    });
    res.status(200).json({
      userProfile: userProfile,
      recyclingActivity: recyclingActivity,
      totalPoints: totalPoints,
    });
  } catch (error) {
    next(error);
  }
};
export const updateUserProfileNoId = async (req, res, next) => {
  const userId = req.user.userId;
  const existingUserProfile = await prisma.userProfile.findUnique({
    where: {
      userId: parseInt(userId),
    },
  });
  if (!existingUserProfile) {
    return next(new ResponseError(404, "User Profile Not Found"));
  }
  const { profilePicture, phoneNumber, address } = req.body;
  try {
    const updateProfile = await prisma.userProfile.update({
      where: {
        userId: userId,
      },
      data: {
        profilePicture: profilePicture,
        phoneNumber: phoneNumber,
        address: address,
      },
    });
    if (!updateProfile) {
      return next(new ResponseError(404, "Profile Not Found"));
    }
    res.status(200).json({
      message: "Profile updated successfully",
      profile: updateProfile,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteProfileUserNoId = async (req, res, next) => {
  const userId = req.user.userId;
  const existingUserProfile = await prisma.userProfile.findUnique({
    where: {
      userId: parseInt(userId),
    },
  });
  if (!existingUserProfile) {
    return next(new ResponseError(404, "User Profile Not Found"));
  }
  try {
    await prisma.userProfile.delete({
      where: {
        userId: userId,
      },
    });
    res.status(200).json({
      message: "Profile deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
export const addUserProfile = async (req, res, next) => {
  try{
    const userId = req.user.userId;
    const userProfile = await prisma.userProfile.create({
      data: {
        userId: parseInt(userId),
        profilePicture: req.body.profilePicture,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
      },
    });
    res.status(200).json({
      message: "Profile created successfully",
      profile: userProfile,
    });
  }catch(error){
    next(error);
  }
}
