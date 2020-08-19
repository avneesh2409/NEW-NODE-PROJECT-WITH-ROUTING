var express = require('express')
// var requestHandler=require('./requestHandler/')
var app = express()
var router = require('./router');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/',router);
// app.get(`/listEmployees`,requestHandler.getHandler)
// .get(`/listEmployeeById/:id`,requestHandler.getHandlerById)
// .post('/addEmployee/:id',(req,res)=>{
//     requestHandler.postHandler(req,res)
// })
// .put('/updateEmployee/:id',requestHandler.putHandler)
// .delete('/SdeleteEmployee/:id',requestHandler.deleteHandler)
app.listen(2000,()=>{
    console.log("server is running at 2000")
})