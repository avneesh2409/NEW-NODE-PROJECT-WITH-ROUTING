const express = require('express');
const router = express.Router();
const handler = require('../requestHandler');

router.use((req,res,next)=>{
    const [day,month,date,year,time] = new Date().toString().split(' ');
    console.log(`day :- ${day} \n month :- ${month} \n data :- ${date} \n year :- ${year} \n time :- ${time}`);
    next();
});
router.get('/getEmployeesList',handler.getHandler);
router.get('/getEmployeeById/:id',handler.getHandlerById);
router.post('/addEmployee/:id',handler.postHandler);
router.put('/updateEmployee/:id',handler.putHandler);
router.delete('/deleteEmployee/:id',handler.deleteHandler);


module.exports = router;
