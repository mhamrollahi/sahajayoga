import { findByEmail, findByEmailActiveUser } from "../models/authModel.js";
import UserRole from "../models/userRole.js";
import { createUser } from "../models/usersModel.js";
import { comparePassword } from "./hashService.js";

export async function serviceLogin(email, plainPassword) {
  try {
    const user = await findByEmail(email);

    if (!user) {
      return false;
    }
    const { password } = user;
    return comparePassword(plainPassword, password) ? user : false;
  } catch (error) {
    console.log(error);
  }
}

export  async function serviceLoginByActiveUser(email) {
   try {
    const user = await findByEmailActiveUser(email);
    
    console.log(!user)

    if (!user) {
      return false;
    }
    
    return user

  } catch (error) {
    console.log(error);
  }
}

export async function serviceRegister(email,password){
  try {
    const result = await createUser({
      fullName : 'ناشناس',
      email,
      password,
      roleId:UserRole.NEWER
    })

    return result

  } catch (error) {
    console.log(error)
  }
}