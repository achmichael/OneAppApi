export class CreatePartner {
    constructor(partnerRepository) {
        this.partnerRepository = partnerRepository;
    }
    async execute(partnerData) {
        return await this.partnerRepository.save(partnerData);
    }
}
export class GetAllPartners{
    constructor(partnerRepository) {
        this.partnerRepository = partnerRepository;
    }
    async execute() {
        return await this.partnerRepository.getAllPartners();
      }
}
