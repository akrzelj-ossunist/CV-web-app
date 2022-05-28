const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required: false
    },
    email:{
        type:String,
        required: true
    },
    address:{
        type:String,
        required: false
    },
    gender:{
        type:String,
        required: false
    }
})

module.exports = mongoose.model('User', userData)