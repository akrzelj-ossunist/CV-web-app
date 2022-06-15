import { useState } from 'react';
import FormAboutYou from './Forms/FormAboutYou'
import FormEudcation from './Forms/FormEudcation'
import FormExperience from './Forms/FormExperience';
import FormSkills from './Forms/FormSkills';
import SignupLogin from './Forms/SignupLogin';
import FinalLook from './Forms/FinalLook';

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
    summary: '',
    phone: '',
    email: '',
    address: '',
    pcode: '',
    city: '',
    gender: '',
    jobs: {},
    education: {},
    skills: {personal: [], language: [], business: []}
  })
  switch(counter){
    case 1:
      return <SignupLogin setCounterNext = {setCounterNext}/>
    case 2:
      return <FormAboutYou object = {object} getObject = {getObject} setCounterNext = {setCounterNext}/>
    case 3:
      return <FormEudcation object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack}/>
    case 4:
      return <FormExperience object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack} />
    case 5:
      return <FormSkills object = {object} getObject = {getObject} setCounterNext = {setCounterNext} setCounterBack = {setCounterBack} />
    case 6:
      return <FinalLook object= {object} />
    default:
  }
}

export default App;
