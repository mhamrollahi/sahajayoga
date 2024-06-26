import myDatabase from '../configs/dbConfig.js'

export async function findByEmail(email){
  
  try {
    
    const [rows] = await myDatabase.query(`SELECT * FROM users WHERE email = ? 
    LIMIT 1`,email)

    
    return rows.length === 1 ? rows[0] : null
    
  } catch (error) {
    console.log(error);
  }

}
export async function findByEmailActiveUser(email){
  
  try {
    
    const [rows] = await myDatabase.query(`SELECT * FROM users WHERE email = ? AND isActive = '1' LIMIT 1`,email)

    
    return rows.length === 1 ? rows[0] : null
    
  } catch (error) {
    console.log(error);
  }

}
