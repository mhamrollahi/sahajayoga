import myDatabase from '../configs/dbConfig.js'

console.log('in experience Model file ...')

export async function list(){

  // console.log('in index function in experience Model ...')
  
  const [rows,fields] = await myDatabase.query('SELECT * FROM experiences')
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

export async function deleteExperience(){
  try {
    
  } catch (error) {
    
  }
}

export async function editExperience(){
  try {
    
  } catch (error) {
    
  }
}

export const testData = 'this is a data from experience Models ....'


