import DropOffLocationRepository from "../Gateways/DropOffLocationRepository.js";
const dropOffLocationRepository = new DropOffLocationRepository();

export class AddDropOffLocation {
  async execute(data) {
    return await dropOffLocationRepository.addData(data);
  }
}

export class GetDropOffLocations {
  async execute() {
    return await dropOffLocationRepository.findAll();
  }
}

export class GetDropOffLocation {
  async execute(id) {
    return await dropOffLocationRepository.findById(id);
  }
}

export class UpdateDropOffLocation {
  async execute(id, data) {
    return await dropOffLocationRepository.update(id, data);
  }
}

export class DeleteDropOffLocation {
  async execute(id) {
    return await dropOffLocationRepository.delete(id);
  }
}

