import myDatabase from '../configs/dbConfig.js'

export  async function findAll(){
  try {
    const [rows] = await myDatabase.query(`SELECT * FROM users`)
    
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