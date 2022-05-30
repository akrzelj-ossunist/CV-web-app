import { useState } from 'react';
import './css/education.css'

function AddEducation( {object, getObject, setCounterNext, setCounterBack, num} ){
    const [educationObject, getEducationObject] = useState({
        name: '',
        address: '',
        email: '',
        phone: ''
    })
    const [val, getVal] = useState('')
    if(val === 'save'){
        object.education[num] = educationObject
        return <FormEudcation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    }
    if(val === 'cancel')
        return <FormEudcation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    return (
        <div className='main'>
            <form>
                <div>
                    <label>Education name: </label>
                    <input onInput={el => getEducationObject({...educationObject, name: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Education address: </label>
                    <input onInput={el => getEducationObject({...educationObject, address: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Education email: </label>
                    <input onInput={el => getEducationObject({...educationObject, email: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Education phone: </label>
                    <input onInput={el => getEducationObject({...educationObject, phone: el.target.value})} type='text'></input>
                </div>
                <button onClick={el => getVal(el.target.value)} value='save'>Save</button>
                <button onClick={el => getVal(el.target.value)} value='cancel'>Cancel</button>
            </form>
        </div>
    )
}

function RepairEducation( {object, getObject, setCounterNext, setCounterBack, Id} ){
    const [val, getVal] = useState('')
    const [education, changeEducation] = useState({
        name: object.education[Id].name,
        address: object.education[Id].address,
        email: object.education[Id].email,
        phone: object.education[Id].phone
    })
    if(val === 'save'){
        object.education[Id] = education
        return <FormEudcation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    }
    if(val === 'cancel')
        return <FormEudcation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    return (
        <div className='main'>
            <form>
                <div>
                    <label>Education name: </label>
                    <input value={education.name} onInput={el => changeEducation({...education, name: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Education address: </label>
                    <input value={education.address} onInput={el => changeEducation({...education, address: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Education email: </label>
                    <input value={education.email} onInput={el => changeEducation({...education, email: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Education phone: </label>
                    <input value={education.phone} onInput={el => changeEducation({...education, phone: el.target.value})} type='text'></input>
                </div>
                <button onClick={el => getVal(el.target.value)} value='save'>Save</button>
                <button onClick={el => getVal(el.target.value)} value='cancel'>Cancel</button>
            </form>
        </div>

    )
}

function PrintEducation( {education, getKey} ){
    const [del, getDel] = useState(0)
    
    if(del)
        delete education[del]

    return(
        Object.keys(education).map(el =>  
            <div className='printObj' key={el}>
                <p>Education name: {education[el].name}</p>
                <p>Education address: {education[el].address}</p>
                <p>Education email: {education[el].email}</p>
                <p>Education phone: {education[el].phone}</p>
                <div>
                    <button onClick={el => getDel(el.target.value)} value={el}>Delete</button>
                    <button onClick={el => getKey(el.target.value)} value={el}>Change</button>
                </div>
            </div>)
    )    
}

function FormEudcation( {object, getObject, setCounterNext, setCounterBack} ) {
  const [education, getEducation] = useState('')
  const [Id, getKey] = useState(0)

  let index;
  if(Object.keys(object.education).length === 0)
      index = 1;
  else{
      let objKeys = Object.keys(object.education);
      index = +objKeys[objKeys.length - 1] + 1
  }

  if(education === 'Add')
      return <AddEducation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack} num = {index} />
  if(Id > 0)
      return <RepairEducation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack} Id = {Id} />

  return (
    <div className='main'>
        <form>
            <PrintEducation education = {object.education} getKey = {getKey} />
            <button value='Add' onClick={el => getEducation(el.target.value)}>Add education</button>
            <button onClick={setCounterNext} value='next'>Next</button>
            <button onClick={setCounterBack} value='back'>Back</button>
        </form>
    </div>
  );
}

export default FormEudcation;
