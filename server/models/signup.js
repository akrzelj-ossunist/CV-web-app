const mongoose = require('mongoose')

const signup = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
        
    },
    password:{
        type:String,
        required: false
    },
    repeatPass:{
        type:String,
        required: true,
    }
})

module.exports = mongoose.model('signup', signup)