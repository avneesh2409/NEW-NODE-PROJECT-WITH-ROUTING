const data = require('../mock/employees.json');
const fs =  require('fs');
const path = require('path');
 const postHandler = async (req,res) => {
  var empId = req.params.id;
  var result = await data;
  for (const [key,value] of Object.entries(result)) {
    if(key == `employee${empId}`){
        return res.json({status:false,message:'unable to add . its already present !!'});
    }    
}
      result[`employee${empId}`] =  {
          name:req.body.name,
          department:req.body.department,
          id:req.body.id
      }
        fs.writeFile(path.join(__dirname,'../mock/employees.json'),JSON.stringify(result),['utf8'],(err)=>{
          if(err){
            res.status(400).send("something went wrong !!")
          }
        })
        res.status(200).json({status:true,message:"successfully added",data:result});
};

module.exports = postHandler;