import myDatabase from '../configs/dbConfig.js'

export async function list(){
  const [rows,fields] = await myDatabase.query('SELECT * FROM experiences ORDER BY created_at DESC')
  return rows
}

export async function createExperience(experienceData){
  try {
    const result = await myDatabase.query('INSERT INTO EXPERIENCES SET ?',[experienceData])
    return result
  } catch (error) {
    console.log(error.message)
  }

}

export async function deleteExperience(experienceID){
  try {
    const [result] = await myDatabase.query('DELETE FROM EXPERIENCES WHERE id=? LIMIT 1',[experienceID])
    return result.affectedRows > 0 
  } catch (error) {
    console.log(error.message)
  }

}

export async function activeOrNotActive(experienceID , isActive){
  try {
    
    const newIsActive = 1 - isActive

    const [result] = await myDatabase.query('UPDATE EXPERIENCES SET isActive =?  WHERE id=? LIMIT 1 ',[newIsActive,experienceID])
    return result.affectedRows > 0 
  } catch (error) {
    console.log(error.message)
  }

}

export async function findById(_id){
  try {
    const [rows,fields] = await myDatabase.query('SELECT * FROM EXPERIENCES WHERE id = ?  LIMIT 1',[_id])
    return rows.length > 0 ? rows[0] : false 

  } catch (error) {
    console.log(error)
  }
}

export async function editExperience(experienceID,updateFields){
  try {
    const [result] = await myDatabase.query('UPDATE EXPERIENCES SET ?  WHERE id=? LIMIT 1 ',[updateFields,experienceID])
    return result.affectedRows > 0 
    
  } catch (error) {
    console.log(error)    
  }
}

export const testData = 'this is a data from experience Models ....'


