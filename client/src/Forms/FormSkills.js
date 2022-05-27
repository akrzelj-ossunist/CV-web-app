import { useState } from 'react';
import axios from "axios";

function PrintJobs( {jobs} ){
    return(
        Object.keys(jobs).map(el =>  
            <div key={el}>
                <span>--------------------------------------------------------------------------------------------------------------------------</span>
                <h1>Job name: {jobs[el].name}</h1>
                <h1>Job address: {jobs[el].address}</h1>
            </div>)
    )    
}

function PrintEducation( {education} ){
    return(
        Object.keys(education).map(el =>  
            <div key={el}>
                <span>--------------------------------------------------------------------------------------------------------------------------</span>
                <h1>Education name: {education[el].name}</h1>
                <h1>Education address: {education[el].address}</h1>
            </div>)
    )    
}

function FormSkills( {object} ) {
    console.log(object)
    const [val, getVal] = useState('')
    if(val === 'finish'){
        axios.post("http://localhost:5000/saveUser", object)
        .then(resp => {
          console.log(resp)
        })
        .catch(error => {
          console.log(error)
        })
    }
  return (
    <div>
        <h1>First name: {object.fname}</h1>
        <h1>Last name: {object.lname}</h1>
        <h1>Phone: {object.phone}</h1>
        <h1>Email: {object.email}</h1>
        <h1>Address: {object.address}</h1>
        <h1>Gender: {object.gender}</h1>
        <PrintJobs jobs={object.jobs} />
        <PrintEducation education={object.education} />
        <button onClick={el => getVal(el.target.value)} value='finish'>Finish</button>
    </div>
  );
}

export default FormSkills;