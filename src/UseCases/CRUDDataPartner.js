export class GetDatasPartner {
    constructor(PartnerRepository){
        this.PartnerRepository = PartnerRepository;
    }
    async execute() {
        return await this.PartnerRepository.getAllPartners();
    }
}
export class GetDataPartnerById {
    constructor(PartnerRepository){
        this.PartnerRepository = PartnerRepository;
    }
    async execute(id) {
        return await this.PartnerRepository.getPartnerById(id);
    }
} 
export class UpdateDataPartner{
    constructor(PartnerRepository){
        this.PartnerRepository = PartnerRepository;
    }
    async execute(id, datas) {
        return await this.PartnerRepository.update(id, datas);
    }
}
export class DeleteDataPartner{
    constructor(PartnerRepository){
        this.PartnerRepository = PartnerRepository;
    }
    async execute(id){
        return await this.PartnerRepository.delete(id);
    }
}