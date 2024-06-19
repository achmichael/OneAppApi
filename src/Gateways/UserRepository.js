import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { User } from "../Entities/User.js";

class UserRepository {
  async save(user) {
    return await prisma.user.create({
      data: {
        email: user.email,
        password: user.password,
        name: user.name,
        dateOfBirth: user.dateOfBirth,
        latitude: user.latitude,
        longitude: user.longitude,
      },
      select: {
        id: true,
        email: true,
        password: false,
        name: true,
        dateOfBirth: true,
        latitude: true,
        longitude: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
  async findById(id) {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }
  async findAll() {
    const usersData = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        dateOfBirth: true,
        points: true,
        latitude: true,
        longitude: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return usersData.map((user) => User.create(user));
  }
  async update(id, data) {
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        password: false,
        dateOfBirth: true,
        points: true,
        latitude: true,
        longitude: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return User.create(updatedUser);
  }
  async delete(id) {
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
  }
}

export default new UserRepository();
