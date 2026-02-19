const express = require('express'); 
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const customerRoutes = require('./routes/customers.routes')

const connectDb = async()=>{
    await mongoose.connect('mongodb://localhost:27017/store');
    console.log("Connected to MongoDB");
}



app.use(cors());
app.use(morgan('dev'));


app.get('/health', (req,res)=>{
    res.send("Healthy!")
})

app.use('/v1/api/customers', customerRoutes)



app.listen(5000, () => {
    connectDb();
    console.log("The server is running on port 5000");
});