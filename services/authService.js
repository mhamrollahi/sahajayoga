import { findByEmail } from "../models/authModel.js"

export default async function  login(email){
  try {
    const user = findByEmail(email)
    if(!user){
      return false
    }
    return user

  } catch (error) {
    console.log(error)
  }
}