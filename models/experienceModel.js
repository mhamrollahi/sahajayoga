import myDatabase from '../configs/dbConfig.js'
import { experienceCreateValidators } from '../validators/experiences.js'

console.log('in experience Model file ...')

export async function list(){

  // console.log('in index function in experience Model ...')
  
  const [rows,fields] = await myDatabase.query('SELECT * FROM experiences ORDER BY created_at DESC')
  // console.log('in index function in experience Model ...',_list)
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
    const [result] = await myDatabase.query('DELETE FROM EXPERIENCES WHERE id=?',[experienceID])
    console.log(result)
    return result
  } catch (error) {
    console.log(error.message)
  }

}

export async function activeOrNotActive(experienceID , isActive){
  try {
    
    const newIsActive = 1 - isActive

    const [result] = await myDatabase.query('UPDATE EXPERIENCES SET isActive =?  WHERE id=?',[newIsActive,experienceID])
    console.log(result)
    return result
  } catch (error) {
    console.log(error.message)
  }

}

export async function editExperience(){
  try {
    
  } catch (error) {
    
  }
}

export const testData = 'this is a data from experience Models ....'


