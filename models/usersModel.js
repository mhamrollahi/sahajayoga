import myDatabase from '../configs/dbConfig.js'
import { hashPassword } from '../services/hashService.js'

export  async function findAll(){
  try {
    const [rows] = await myDatabase.query(`SELECT * FROM users ORDER BY created_at DESC`)
    
    return rows

  } catch (error) {
    console.log(error);
  }
}

export async function findByEmail(email){
  try {
    
    const [rows] = myDatabase.query(`
      SELECT * FROM users WHERE email = ? LIMIT 1
    `,email)

  } catch (error) {
    console.log(error);
  }
}
export async function createUser(userData){
  try {
    userData.password = hashPassword(userData.password)
    
    const result = await myDatabase.query('INSERT INTO users SET ?',[userData])
    return result
  } catch (error) {
    console.log(error.message)
  }

}

export async function activeOrNotActive(userId , isActive){
  try {
    
    const newIsActive = 1 - isActive
    
    const [result] = await myDatabase.query('UPDATE USERS SET isActive =?  WHERE id=? LIMIT 1 ',[newIsActive,userId])
    
    console.log(result)

    return result.affectedRows > 0 
  } catch (error) {
    console.log(error.message)
  }

}