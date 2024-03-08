import { userModel } from "../models/user.model.js";

class UserManager {
  async newUser({ first_name, last_name, age, email, password, role }){
    try {
      const newUser = await userModel.create({
        first_name,
        last_name,
        age,
        email,
        password,
        role
      });
      return newUser;
    } catch(err) {
      throw err;
    }
  }

  async getUser(email, password){
    try {
      const user = await userModel.findOne({ email, password });
      return user;
    } catch(err) {
      throw err;
    }
  }
}

export default UserManager;