import { findByEmail } from "../models/authModel.js";
import UserRole from "../models/userRole.js";
import { createUser } from "../models/usersModel.js";
import { comparePassword } from "./hashService.js";

export default async function serviceLogin(email, plainPassword) {
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

export async function serviceRegister(email,password){
  try {
    const result = await createUser({
      fullName : 'ناشناس',
      email,
      password,
      roleId:UserRole.USER
    })

    return result

  } catch (error) {
    console.log(error)
  }
}