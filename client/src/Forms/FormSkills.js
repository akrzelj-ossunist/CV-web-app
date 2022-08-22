import React, { useState } from 'react'
import './css/signuplogin.css'

export default function FormSkills( {object, getObject, setCounterNext, setCounterBack} ) {
    
    const [personalSkill, getPersonalSkill] = useState('')
    const [val, getVal] = useState('')
    if(val === 'personal'){
        if(personalSkill.length ===  0 || personalSkill[0] === ' ')//so we dont input empty string
            getVal('')
        else{
            object.skills.personal.push(personalSkill)
            object.skills.personal = [...new Set(object.skills.personal)]//removing dupe skills if there are in array
            getPersonalSkill('')
            getVal('')
        }
    }
    object.skills.personal = object.skills.personal.filter( Boolean );//removes values like undefined in array if there is
    //removes element from skill array
    function PrintSkills( {Skills} ){
        const [btnDel, getBtnDel] = useState('')
        if(btnDel)
            delete Skills[btnDel];
        return(
            Skills.map(el =>
                <>
                    <p>{el}</p><button type='button' value={Skills.indexOf(el)} onClick={e => getBtnDel(e.target.value)}>X</button>
                </>     
            )
        )
    }

    //for language
    const [languageSkills, getLanguageSkill] = useState('')
    if(val === 'language'){
        if(languageSkills.length ===  0 || languageSkills[0] === ' ')//so we dont input empty string
            getVal('')
        else{
            object.skills.language.push(languageSkills)
            object.skills.language = [...new Set(object.skills.language)]//removing dupe skills if there are in array
            getLanguageSkill('')
            getVal('')
        }
    }
    object.skills.language = object.skills.language.filter( Boolean );//removes values like undefined in array if there is

    //Random skills
    const [businessSkills, getBusinessSkill] = useState('')
    if(val === 'business'){
        if(businessSkills.length ===  0 || businessSkills[0] === ' ')//so we dont input empty string
            getVal('')
        else{
            object.skills.business.push(businessSkills)
            object.skills.business = [...new Set(object.skills.business)]//removing dupe skills if there are in array
            getBusinessSkill('')
            getVal('')
        }
    }
    object.skills.business = object.skills.business.filter( Boolean );//removes values like undefined in array if there is

    console.log(object.skills)
    return (
        <div className='main'>
            <form>
                <div>
                    <h2>Personal skills</h2>
                    <PrintSkills Skills = {object.skills.personal}/>
                    <label>Personal skills:</label>
                    <input value={personalSkill} onInput={el => getPersonalSkill(el.target.value)} type='text'></input>
                    <button type='button' value='personal' onClick={el => getVal(el.target.value)}>Add</button>
                </div>
                <div>
                    <h2>Language skills</h2>
                    <PrintSkills Skills = {object.skills.language}/>
                    <label>Language skills:</label>
                    <input value={languageSkills} onInput={el => getLanguageSkill(el.target.value)} type='text'></input>
                    <button type='button' value='language' onClick={el => getVal(el.target.value)}>Add</button>
                </div>
                <div>
                    <h2>Business skills</h2>
                    <PrintSkills Skills = {object.skills.business}/>
                    <label>Business skills:</label>
                    <input value={businessSkills} onInput={el => getBusinessSkill(el.target.value)} type='text'></input>
                    <button type='button' value='business' onClick={el => getVal(el.target.value)}>Add</button>
                </div>
                <button onClick={setCounterNext} value='next'>Next</button>
                <button onClick={setCounterBack} value='back'>Back</button>
            </form>
        </div>
      );
}
