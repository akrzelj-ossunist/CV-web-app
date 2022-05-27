import { useState } from 'react';
import FormAboutYou from './Forms/FormAboutYou'
import FormEudcation from './Forms/FormEudcation'
import FormExperience from './Forms/FormExperience';
import FormSkills from './Forms/FormSkills';

function App() {
  const [counter, getCounter] = useState(1)

  const setCounterNext = () => {
    getCounter(counter + 1)
  }
  const setCounterBack = () => {
    getCounter(counter - 1)
  }

  const [object, getObject] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    address: '',
    gender: '',
    jobs: {},
    education: {},
    skills: {personal: [], language: [], additional: []}
  })
  switch(counter){
    case 1:
      return <FormAboutYou object = {object} getObject = {getObject} setCounterNext = {setCounterNext}/>
    case 2:
      return <FormEudcation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    case 3:
      return <FormExperience object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack} />
    case 4:
      return <FormSkills object= {object} />
    default:
  }
}

export default App;
