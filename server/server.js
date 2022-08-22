const express = require('express')
const app = express();
const cors = require('cors');
const userTable = require('./models/userData')//Import table we created in Data.js
const signUpTable = require('./models/signup')
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
let allowPost = 1;
app.post("/saveUser", async (req, res) => {
    //This is how you save data into table in mongoDB
    if(allowPost){
    	const addUser = await new userTable({
            firstName: req.body.fname,
            lastName: req.body.lname,
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            gender: req.body.gender,
            jobs: req.body.jobs,
            education: req.body.education
        })
        console.log('Added')
        addUser.save()
        allowPost = 0;
    }
    else
	allowPost = 1;
})
app.post("/signup", (req, res) => {

    signUpTable.find({ email: req.body.email }).exec((err, guy) => {
        console.log(allowPost, guy)
        if(guy[0] === undefined){        
            const signup = new signUpTable({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                repeatPass: req.body.repeatPassword,
            })
            console.log('signup')
            signup.save()
            app.get("/checkUser", (req, res) => { res.json([{ next: true }]) })
        }
    });
})

app.listen(5000, () => { console.log("Server started at port 5000!") })