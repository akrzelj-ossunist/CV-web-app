import { useState } from 'react';

//This function takes all elements as main function + num(index), in this function we were doing almost same thing like in ReapairJob function only here we 
//had to create empty new object in wich we are gonna input new values, we got values with onInput function and after that we saved them on position (num/index)
//we want it to have
function AddJob( {object, getObject, setCounterNext, setCounterBack, num} ){
    const [jobObject, getJobObject] = useState({
        name: '',
        employer: '',
        city: '',
        start: '',
        end: ''
    })
    const [val, getVal] = useState('')
    if(val === 'save'){
        object.jobs[num] = jobObject
        return <FormExperience object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    }
    if(val === 'cancel')
        return <FormExperience object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    return (
        <div className='main'>
            <form>
                <div>
                    <label>Job name: </label>
                    <input onInput={el => getJobObject({...jobObject, name: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Employer: </label>
                    <input onInput={el => getJobObject({...jobObject, employer: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>City: </label>
                    <input onInput={el => getJobObject({...jobObject, city: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Start date: </label>
                    <input onInput={el => getJobObject({...jobObject, start: el.target.value})} type='date'></input>
                </div>
                <div>
                    <label>End date: </label>
                    <input onInput={el => getJobObject({...jobObject, end: el.target.value})} type='date'></input>
                </div>
                <button onClick={el => getVal(el.target.value)} value='save'>Save</button>
                <button onClick={el => getVal(el.target.value)} value='cancel'>Cancel</button>
            </form>
        </div>
    )
}

//This function takes all elements as main function + id, inside we declared new object with use state and assigned him atributes of a object we wanna change
//we did that so we can alter value of that object otherwise its unchangable, in every box we asign value for each own and with function onInput we could change
//value and after we changed value with save button we overwrite last object with this new one
function RepairJob( {object, getObject, setCounterNext, setCounterBack, Id} ){
    const [val, getVal] = useState('')
    const [job, changeJob] = useState({
        name: object.jobs[Id].name,
        employer: object.jobs[Id].employer,
        city: object.jobs[Id].city,
        start: object.jobs[Id].start,
        end: object.jobs[Id].end
    })
    if(val === 'save'){
        object.jobs[Id] = job
        return <FormExperience object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    }
    if(val === 'cancel')
        return <FormExperience object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    return (
        <div className='main'>
            <form>
                <div>
                    <label>Job name:</label>
                    <input value={job.name} onInput={el => changeJob({...job, name: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Employer: </label>
                    <input value={job.address} onInput={el => changeJob({...job, employer: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>City: </label>
                    <input value={job.email} onInput={el => changeJob({...job, city: el.target.value})} type='text'></input>
                </div>
                <div>
                    <label>Start date: </label>
                    <input value={job.start} onInput={el => changeJob({...job, phone: el.target.value})} type='date'></input>
                </div>
                <div>
                    <label>End date: </label>
                    <input value={job.end} onInput={el => changeJob({...job, end: el.target.value})} type='text'></input>
                </div>
                <button onClick={el => getVal(el.target.value)} value='save'>Save</button>
                <button onClick={el => getVal(el.target.value)} value='cancel'>Cancel</button>
            </form>
        </div>
    )
}

//In this function we were printing all jobs we listed and in here we could delete any job we dont want
function PrintJobs( {jobs, getKey} ){
    const [del, getDel] = useState(0)
    
    if(del)
        delete jobs[del]

    return(
        Object.keys(jobs).map(el =>  
            <div className='printObj' key={el}>
                <p>Job name: {jobs[el].name}</p>
                <p>Employer: {jobs[el].employer}</p>
                <p>City: {jobs[el].city}</p>
                <p>Start date: {jobs[el].start}</p>
                <p>End date: {jobs[el].end}</p>
                <div>
                    <button onClick={el => getDel(el.target.value)} value={el}>Delete</button>
                    <button onClick={el => getKey(el.target.value)} value={el}>Change</button>
                </div>
            </div>)
    )    
}

function FormExperience( {object, getObject, setCounterNext, setCounterBack} ) {
  const [job, getJob] = useState('')
  const [Id, getKey] = useState(0)

  //Setting up index so every next index is bigger by one from the last index
  let index;
  if(Object.keys(object.jobs).length === 0)
      index = 1;
  else{
      let objKeys = Object.keys(object.jobs);
      index = +objKeys[objKeys.length - 1] + 1
  }

  //Sending all stuff we have in this function bcs we will have to return them back
  //In AddJob we sent index position where we wanna place new job
  if(job === 'Add')
      return <AddJob object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack} num = {index} />
  //In RepairJob we sent Id of a object we wanna fix, we got Id from PrintJobs function where we sent getKey function with useState mechanic and we declared it in
  //function if we click(onClick) on Change button he gets key of that object and sets our Id on same value as that key 
  if(Id > 0)
      return <RepairJob object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack} Id = {Id} />

  return (
    <div className='main'>
        <form>
            <PrintJobs jobs = {object.jobs} getKey = {getKey} />
            <button value='Add' onClick={el => getJob(el.target.value)}>Add job</button>
            <button onClick={setCounterNext} value='next'>Next</button>
            <button onClick={setCounterBack} value='back'>Back</button>
        </form>
    </div>
  );
}

export default FormExperience;
