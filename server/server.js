const express = require('express')
const app = express();
const cors = require('cors');
const fs = require('fs');
const userTable = require('./models/Data')//Import table we created in Data.js
const mongoose = require('mongoose')

//You can get this link from mongoDB website and this is how to connect to mongo site
mongoose.connect('mongodb+srv://Antonio:Antonio@cluster0.j67lfzf.mongodb.net/User?retryWrites=true&w=majority', () => console.log('Connected'))

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
);
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/saveUser", function (req, res) {
    //This is how you save data into table in mongoDB
    const addUser = new userTable({
        firstName: req.body.fname,
        lastName: req.body.lname,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        gender: req.body.gender,
    })
    addUser.save()
    //This is how u save data in json file
    let newUser = {
        fname: req.body.fname,
        lname: req.body.lname,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        gender: req.body.gender,
        jobs: req.body.jobs,
        education: req.body.education,
        skills: req.body.skills
    }
    let jsonContent = JSON.stringify(newUser, null, 2);
    fs.writeFile("user.json", jsonContent, 'utf8', () => {});
})

app.listen(5000, () => { console.log("Server started at port 5000!") })
