const express = require('express')
const app = express()
const DataRouter = require('./src/Routes/data')
const cors = require('cors')
const data = require('./src/Controllers/data')

app.use(cors())
app.use("/details", DataRouter)
app.get('/Home',function (req,res){

res.send("Home")
})

app.listen(process.env.PORT || 8080, function () {
    console.log('Application is Running');
    
})






