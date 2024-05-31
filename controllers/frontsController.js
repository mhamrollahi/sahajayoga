
class frontsController{
  
  async index(reg,res){
    try {
      console.log('from front Controller ...')
      res.frontRender('front/index')
    } catch (error) {
      console.log(error)
    }
  }
 
}


export default new frontsController()