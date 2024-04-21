import myDatabase from '../configs/dbConfig.js'

console.log('in experience Model file ...')

export async function index(){

  // console.log('in index function in experience Model ...')
  
  const _list = await myDatabase.query('SELECT * FROM experiences')
  // console.log('in index function in experience Model ...',_list)
  return _list
}

export async function insertExperience(newRecord){
  try {
    
    const sql = `INSERT INTO EXPERIENCES(fullName,Email,Title,Description) 
    VALUES(
        '${newRecord.fullName}', 
        '${newRecord.Email}',
        '${newRecord.Title}', 
        '${newRecord.Description}'
      )`

    console.log('sql string in Model = ',sql)

    const message = await myDatabase.query(sql)
    // console.log(message[0].insertId);
    return message
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


