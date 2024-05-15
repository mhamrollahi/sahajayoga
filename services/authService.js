import { findByEmail } from "../models/authModel.js"
import { comparePassword } from "./hashService.js"

export default async function  login(email,plainePassword){
  try {
    const user = await findByEmail(email)
    
    
    if(!user){
      return false
    }
    const {password} = user
    return comparePassword(plainePassword,password) ? user : false

  } catch (error) {
    console.log(error)
  }
}