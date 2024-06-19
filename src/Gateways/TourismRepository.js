import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class TourismRepository{
    async getTourisms(){
        return prisma.tourism.findMany();
    }
    async getTourismById(tourismId){
        return prisma.tourism.findUnique({
            where:{
                id:tourismId
            }
        });
    }
    async addTourism(datas){
        return prisma.tourism.create({
            data: datas
        });
    }
}
export default new TourismRepository();