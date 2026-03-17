const express = require('express')
const app = express();

app.use('/',(req,res,next)=> {
    console.log(req);
    console.log(Object.hasOwn(req,"body"))
})

app.listen(3000,()=>{
    console.log("The app is running in 3000")
})