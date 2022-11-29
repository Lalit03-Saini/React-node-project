const express = require('express')
const datacontroller = require('../Controllers/data')


const DataRouter = express.Router()// we are linking our data.js file with our /api main
DataRouter.route("/details")//creating a route
.get(datacontroller.ApiController)//calling the data.js in Cotroller folder

module.exports = DataRouter

// const express =  require('express')
// route = express.Router();
// Datacontroller = require('../Controllers/data');
// route.get("/",Datacontroller.ApiController);

// module.exports = Datacontroller;