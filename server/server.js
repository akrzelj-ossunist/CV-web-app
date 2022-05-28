const express = require('express')
const app = express();
const cors = require('cors');
const userTable = require('./models/Data')//Import table we created in Data.js
const mongoose = require('mongoose')
const url = 'mongodb+srv://Antonio:Antonio@cluster0.j67lfzf.mongodb.net/User?retryWrites=true&w=majority';

//You can get this link from mongoDB website and this is how to connect to mongo site
mongoose.connect(url, () => console.log('Connected'))

app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
);
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let allowPost = 1;//Stops double posting so we dont make dupes in database
app.post("/saveUser", function (req, res) {
    //This is how you save data into table in mongoDB
    if(allowPost){
        console.log('Adding')
        const addUser = new userTable({
            firstName: req.body.fname,
            lastName: req.body.lname,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            gender: req.body.gender,
            jobs: req.body.jobs,
            education: req.body.education
        })
        addUser.save()
        allowPost = 0;
    }
    else
        allowPost = 1;
})

// We can query like this in this case we were looking for guy named Antonio Zvonko
userTable.find({ firstName: 'Antonio', lastName: 'Zvonko' }).exec((err, guy) => {
    console.log(guy);
});

app.listen(5000, () => { console.log("Server started at port 5000!") })
