const data = require('../mock/employees.json');
const fs =  require('fs');
const path = require('path');

const deleteHandler= async (req, res) => {
  let id = req.params.id;
  let result = await data;
  for (const [key,value] of Object.entries(result)) {
    if(value.id == id){
      delete result[key];
      fs.writeFile(path.join(__dirname,'../mock/employees.json'),JSON.stringify(result),['utf8'],(err)=>{
        if(err){
          res.status(400).send("something went wrong !!")
        }
      })
      res.json({status:true,message:"successfully deleted"});
    }
  }
  res.json({status:false,message:"unable to delete"});
}
module.exports = deleteHandler
