export class CreateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userData) {
    return await this.userRepository.save(userData);
  }
}
export class GetAllUsers {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
export class GetUserById {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userId) {
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }
    return user;
  }
}
export class UpdateUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userId, data) {
    const updatedUser = await this.userRepository .update(userId, data);
    if (!updatedUser) {
      throw new Error(`User with id ${userId} not found`);
    }
    return updatedUser;
  }
}
export class DeleteUser {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }
  async execute(userId) {
    return await this.userRepository.delete(userId);
  }
}
