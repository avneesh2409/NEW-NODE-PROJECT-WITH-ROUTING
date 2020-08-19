const data = require('../mock/employees.json');
const fs = require('fs');
const path = require('path');

const putHandler= async (req, res) => {
    let id = req.params.id;
    let {body} = req;
    let result = await data;
    for (const [key,value] of Object.entries(result)) {
        if(value.id == id){
            result[`${key}`] = body; 
            fs.writeFile(path.join(__dirname,'../mock/employees.json'),JSON.stringify(result),['utf8'],(err)=>{
                if(err){
                  res.status(400).send("something went wrong !!")
                }
              })
            return res.json({status:true,message:"successfully updated",data:result[key]});
        }   
    }
    res.json({status:false,message:"uanble to update"});
}

module.exports = putHandler