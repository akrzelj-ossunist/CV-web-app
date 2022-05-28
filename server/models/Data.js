const mongoose = require('mongoose')

const userTable = new mongoose.Schema({
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
        required: true,
    },
    address:{
        type:String,
        required: false
    },
    gender:{
        type:String,
        required: false
    },
    jobs:{
        type:Object,
        required: false
    },
    education:{
        type:Object,
        required: false
    }
})

module.exports = mongoose.model('User', userTable)
