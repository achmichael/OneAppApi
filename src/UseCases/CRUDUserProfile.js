export class GetProfileUser {
  constructor(UserProfileRepository) {
    this.UserProfileRepository = UserProfileRepository;
  }
  async execute(userId) {
    return await this.UserProfileRepository.findById(userId);
  }
}
export class UpdateProfileUser {
  constructor(UserProfileRepository) {
    this.UserProfileRepository = UserProfileRepository;
  }

  async execute(userId, updatedData) {
    return await this.UserProfileRepository.update(userId, updatedData);
  }
}
export class DeleteProfileUser {
  constructor(UserProfileRepository) {
    this.UserProfileRepository = UserProfileRepository;
  }
  async execute(userId) {
    return await this.UserProfileRepository.delete(userId);
  }
}
export class GetProfileUserNoId {
  constructor(UserProfileRepository) {
    this.UserProfileRepository = UserProfileRepository;
  }
  async execute(userId) {
    return await this.UserProfileRepository.findById(userId);
  }
}
export class UpdateProfileUserNoId {
  constructor(UserProfileRepository) {
    this.UserProfileRepository = UserProfileRepository;
  }

  async execute(userId, updatedData) {
    return await this.UserProfileRepository.update(userId, updatedData);
  }
}
export class DeleteProfileUserNoId {
  constructor(UserProfileRepository) {
    this.UserProfileRepository = UserProfileRepository;
  }

  async execute(userId) {
    return await this.UserProfileRepository.delete(userId);
  }
}
export class AddUserProfile {
  constructor(UserProfileRepository) {
    this.UserProfileRepository = UserProfileRepository;
  }

  async execute(userId, profileData) {
    return await this.UserProfileRepository.save(userId, profileData);
  }
}
