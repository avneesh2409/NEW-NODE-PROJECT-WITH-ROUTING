const data = require('../mock/employees.json');

const getHandlerById = async (req,res) =>{
    let id = req.params.id;
    var result = await data;
    for (const [key,value] of Object.entries(result)) {
        if(value.id == id){
            return res.json({data:result[key]})
        }    
    }
    res.json({status:false,message:"unable to find the employee for id :- "+id});
}
module.exports = getHandlerById;