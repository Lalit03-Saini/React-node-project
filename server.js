const express = require('express')
const app = express()
const DataRouter = require('./src/Routes/data')
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true, //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.get("/details", DataRouter)

app.get('/Home',function (req,res){
    
    res.send("Home")
})
// app.use(cors({origin: true, credentials: true}))
// app.use("/api",DataRouter)

app.listen(process.env.PORT || 8080, function () {
    console.log('Application is Running');
    
})