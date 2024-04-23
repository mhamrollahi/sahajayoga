import myDatabase from '../configs/dbConfig.js'

console.log('in experience Model file ...')

export async function index(){

  // console.log('in index function in experience Model ...')
  
  const _list = await myDatabase.query('SELECT * FROM experiences')
  // console.log('in index function in experience Model ...',_list)
  return _list
}

export async function createExperience(experienceData){
  try {
    // console.log('experienceData = ',experienceData)

    // const sql = `INSERT INTO EXPERIENCES SET ?(fullName,Email,Title,Description) 
    // VALUES(
    //     '${newRecord.fullName}', 
    //     '${newRecord.Email}',
    //     '${newRecord.Title}', 
    //     '${newRecord.Description}'
    //   )`

    // console.log('sql string in Model = ',sql)

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


