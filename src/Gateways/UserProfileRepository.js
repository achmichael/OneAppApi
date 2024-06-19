import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UserProfileRepository{
    async save (userId, userProfile){
        return await prisma.userProfile.create({
            data: {
                userId: userId,
                profilePicture: userProfile.profilePicture,
                phoneNumber: userProfile.phoneNumber,
                address: userProfile.address,
              },
        })
    }
    async findById (userId){
        return await prisma.userProfile.findUnique({
            where: {
                userId: userId
            }
        })
    }
    async update (userId,userProfile){
        return await prisma.userProfile.update({
            where: {
                userId: userId
            },
            data: userProfile
        })
    }
    async delete (userId){
        return await prisma.userProfile.delete({
            where: {
                userId: userId
            }
        })
    }
}
export default new UserProfileRepository();