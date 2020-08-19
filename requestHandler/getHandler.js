const fs = require('fs')
const data = require('../mock/employees.json');

const getHandler= async (req, res) => {
     var result = await data;
 res.json(result);
}

module.exports = getHandler