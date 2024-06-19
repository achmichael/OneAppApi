import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class FoodRepository{
    async getDatasFood(){
        return await prisma.foodItem.findMany();
    }
    async getFoodById(foodId){
        return await prisma.foodItem.findUnique({
            where:{
                id:foodId
            }
        });
    }
    async addFood(food){
        return await prisma.foodItem.create({
            data: food
        });
    }
}
export default new FoodRepository();