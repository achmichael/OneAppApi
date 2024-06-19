import bcrypt from "bcrypt";
import { CreateUser } from "../UseCases/CreateUser.js";
import UserRepository from "../Gateways/UserRepository.js";
import { User }  from "../Entities/User.js";
export const register = async (req, res, next) => {
  const { email, password, name, dateOfBirth, latitude, longitude } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = new CreateUser(UserRepository);
    const user = new User({email : email, password:  hashedPassword, name : name, dateOfBirth: dateOfBirth, latitude : latitude, longitude : longitude});
    try{
        const result = await createUser.execute(user);
        res.status(201).json({ message : "User created successfully", data: result})
    }catch(error){
      next(error);
    }
  } catch (error) {
    console.log(error.stack);
    next(error);
  }
};
