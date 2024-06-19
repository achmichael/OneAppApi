export class GetTourisms {
    constructor (TourismRepository) {
        this.TourismRepository = TourismRepository;
    }
    async execute (){
        const tourisms = await this.TourismRepository.getTourisms();
        return tourisms;
    }
}
export class GetTourismById {
    constructor (TourismRepository) {
        this.TourismRepository = TourismRepository;
    }
    async execute (id){
        const tourism = await this.TourismRepository.getTourismById(id);
        return tourism;
    }
}
export class AddTourism{
    constructor (TourismRepository) {
        this.TourismRepository = TourismRepository;
    }
    async execute (tourism){
        const newTourism = await this.TourismRepository.addTourism(tourism);
        return newTourism;
    }
}