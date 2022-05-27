const express = require('express')
const app = express();
const cors = require('cors');
const fs = require('fs');

//use cors to allow cross origin resource sharing otherwise its blocked
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
);
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//With post we get data from frontend
app.post("/saveUser", function (req, res) {
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