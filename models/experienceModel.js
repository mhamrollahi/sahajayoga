import myDatabase from '../configs/dbConfig.js'

console.log('in experience Model file ...')

export async function index(){

  // console.log('in index function in experience Model ...')
  
  const _list = await myDatabase.query('SELECT * FROM experiences')
  // console.log('in index function in experience Model ...',_list)
  return _list
}

export async function insertExperiece(){
  try {

  } catch (error) {
    
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


