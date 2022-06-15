import { useState } from 'react';
import axios from "axios";
import App from '../App';
import './css/skills.css'

function PrintJobs( {jobs} ){
    return(
        Object.keys(jobs).map(el =>  
            <div key={el}>
                <span>--------------------------------------------------------------------------------------------------------------------------</span>
                <h1>Job name: {jobs[el].name}</h1>
                <h1>Employer: {jobs[el].employer}</h1>
                <h1>City: {jobs[el].city}</h1>
                <h1>Start date: {jobs[el].start}</h1>
                <h1>End date: {jobs[el].end}</h1>
            </div>)
    )    
}

function PrintEducation( {education} ){
    return(
        Object.keys(education).map(el =>  
            <div key={el}>
                <span>--------------------------------------------------------------------------------------------------------------------------</span>
                <h1>Education name: {education[el].name}</h1>
                <h1>Degree: {education[el].degree}</h1>
                <h1>City: {education[el].city}</h1>
                <h1>Start date: {education[el].start}</h1>
                <h1>End date: {education[el].end}</h1>
            </div>)
    )    
}

function PrintSkills( {Skills} ){
    return(
        Skills.map(el =>
            <>
                <h2>{el}</h2>
            </>     
        )
    )
}

function FinalLook( {object} ) {
    console.log(object)
    const [val, getVal] = useState('')
    if(val === 'submit'){
        axios.post("http://localhost:5000/saveUser", object)
        .then(resp => {
          console.log(resp)
        })
        .catch(error => {
          console.log(error)
        })
        return <App />
    }
  return (
    <div>
        <h1>First name: {object.fname}</h1>
        <h1>Last name: {object.lname}</h1>
        <h1>Last name: {object.summary}</h1>
        <h1>Phone: {object.phone}</h1>
        <h1>Email: {object.email}</h1>
        <h1>Address: {object.address}, {object.pcode} {object.city}</h1>
        <h1>Gender: {object.gender}</h1>
        <PrintJobs jobs={object.jobs} />
        <PrintEducation education={object.education} />
        <p>-------------------------------------------------------------------------------------------------------------------------------/</p>
        <h1>Business skills</h1><PrintSkills Skills = {object.skills.business}/>
        <p>-------------------------------------------------------------------------------------------------------------------------------/</p>
        <h1>Language skills</h1><PrintSkills Skills = {object.skills.language}/>
        <p>-------------------------------------------------------------------------------------------------------------------------------/</p>
        <h1>Personal skills</h1><PrintSkills Skills = {object.skills.personal}/>
        <button onClick={el => getVal(el.target.value)} value='submit'>Finish</button>
    </div>
  );
}

export default FinalLook;