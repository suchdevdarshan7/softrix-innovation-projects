const mongoose = require('mongoose');   


const customerSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name:{
        type: String
    },
    birth_date:{
        type: Date
    },
    phone:{
        type: String
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String,
    },
    points:{
        type: Number
    }
});


module.exports = mongoose.model('customers', customerSchema);