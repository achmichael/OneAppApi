export class GetFoods {
    constructor(foodRepository) {
        this.foodRepository = foodRepository;
    }
    async execute(){
        const foods = await this.foodRepository.getDatasFood();
        return foods;
    }
}
export class GetFoodById {
    constructor (foodRepository) {
        this.foodRepository = foodRepository;
    }
    async execute(id){
        const food = await this.foodRepository.getFoodById(id);
        return food;
    }
}
export class AddFood {
    constructor (foodRepository) {
        this.foodRepository = foodRepository;
    }
    async execute(food){
        const newFood = await this.foodRepository.addFood(food);
        return newFood;
    }
}