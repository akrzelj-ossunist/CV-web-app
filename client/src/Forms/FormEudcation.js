import { useState } from 'react';

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
        <form>
            Education name: <input onInput={el => getEducationObject({...educationObject, name: el.target.value})} type='text'></input><br></br><br></br>
            Education address: <input onInput={el => getEducationObject({...educationObject, address: el.target.value})} type='text'></input><br></br><br></br>
            Education email: <input onInput={el => getEducationObject({...educationObject, email: el.target.value})} type='text'></input><br></br><br></br>
            Education phone: <input onInput={el => getEducationObject({...educationObject, phone: el.target.value})} type='text'></input><br></br><br></br>
            <input onClick={el => getVal(el.target.value)} type='button' value='save'></input>
            <input onClick={el => getVal(el.target.value)} type='button' value='cancel'></input>
        </form>
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
        <form>
            Education name: <input value={education.name} onInput={el => changeEducation({...education, name: el.target.value})} type='text'></input><br></br><br></br>
            Education address: <input value={education.address} onInput={el => changeEducation({...education, address: el.target.value})} type='text'></input><br></br><br></br>
            Education email: <input value={education.email} onInput={el => changeEducation({...education, email: el.target.value})} type='text'></input><br></br><br></br>
            Education phone: <input value={education.phone} onInput={el => changeEducation({...education, phone: el.target.value})} type='text'></input><br></br><br></br>
            <input onClick={el => getVal(el.target.value)} type='button' value='save'></input>
            <input onClick={el => getVal(el.target.value)} type='button' value='cancel'></input>
        </form>
    )
}

function PrintEducation( {education, getKey} ){
    const [del, getDel] = useState(0)
    
    if(del)
        delete education[del]

    return(
        Object.keys(education).map(el =>  
            <div key={el}>
                <p>Education name: {education[el].name}</p>
                <p>Education address: {education[el].address}</p>
                <p>Education email: {education[el].email}</p>
                <p>Education phone: {education[el].phone}</p>
                <button onClick={el => getDel(el.target.value)} value={el}>Delete</button>
                <button onClick={el => getKey(el.target.value)} value={el}>Change</button><br></br><br></br>
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
    <div>
        <PrintEducation education = {object.education} getKey = {getKey} />
        <button value='Add' onClick={el => getEducation(el.target.value)}>Add education</button>
        <input onClick={setCounterNext} type='button' value='next'></input>
        <input onClick={setCounterBack} type='button' value='back'></input>
    </div>
  );
}

export default FormEudcation;
