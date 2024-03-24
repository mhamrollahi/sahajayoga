import fs from "fs/promises";

const EXPERIENCES_LIST_FILE_PATH = './public/data/experiences_list.json'


export function generateNewExperienceID(experiencesList) {
  const lastExperience = experiencesList[experiencesList.length - 1];
  
  console.log('lastExperience = ', lastExperience)
  
  const id = lastExperience ? lastExperience.id + 1 : 1;
  console.log(`id = ${id}`)
  return id;
}

export function addNewExperience(_experienceRec,experiencesList) {
  const id = generateNewExperienceID(experiencesList);

  try { 
    const newRecord = {
      id: id,
      subject: _experienceRec.txtSubject,
      Email: _experienceRec.txtEmail,
      fullName: _experienceRec.txtFullname,
      Description: _experienceRec.txtExperience,
      isActive: false,
      creationDate: " ",
      updatedDate: " ",
    };

    // console.log("new rocord :", newRecord);

    experiencesList.push(newRecord);
    saveExperience(experiencesList);
  } catch (err) {
    throw err;
  }
}

export async function saveExperience(experiencesList){
  try {
    const experienceJSON = JSON.stringify(experiencesList);
    console.log('save Experience ... experienceJSON =',experienceJSON)

    await fs.writeFile(EXPERIENCES_LIST_FILE_PATH, experienceJSON);

  } catch (err) {
    throw err;
  }
}

export async function loadExperience(){
  try{
    const experienceJSON = await fs.readFile(EXPERIENCES_LIST_FILE_PATH,'utf-8')
    return JSON.parse(experienceJSON)
  }catch(err){
    return err
  }
}
