import React, { useState,useEffect } from 'react'
import './css/signuplogin.css'
import axios from 'axios'

export default function SignupLogin( {setCounterNext} ) {
    const [btnVal, getBtnVal] = useState('')
    if(btnVal === 'login')
        setCounterNext()

    const [loginObj, getLoginObj] = useState({
        username: '',
        password: '',
    })

    const [signupObj, getSignupObj] = useState({
        username: '',
        email: '',
        password: '',
        repeatPassword: '',
    })


    //we will cacth that error 
    const [error, getError] = useState([{}])
    console.log(error[0])
    let printErr;
    const AddInBase = () => {
        //If we signup we send sign up stuff to backend where user will be added if he is not in base if he is 
        axios.post('/signup', signupObj)
        useEffect(() => {
            fetch('/checkUser')
            .then(resp => resp.json())
            .then(data => getError(data))
            .catch(err => console.log(err))
        },[])
        if(error[0].next === true)
            setCounterNext()
        else
            printErr = <label>User with this email already exist!</label>
    }
    
  return (
    <div className='main'>
        <form className='login'>
            <h1>Login</h1>
            <div>
                <label>Username: </label>
                <input onInput={el => getLoginObj({...loginObj, username: el.target.value})} type='text'></input>
            </div>
            <div>
                <label>Password: </label>
                <input onInput={el => getLoginObj({...loginObj, password: el.target.value})} type='password'></input>
            </div>
            <button onClick={el => getBtnVal(el.target.value)} value='login'>Login</button>
        </form>
        <form onSubmit={AddInBase}>
            <h1>Signup</h1>
            <div>
                <label>Username: </label>
                <input onInput={el => getSignupObj({...signupObj, username: el.target.value})} type='text'></input>
            </div>
            <div>
                <label>Email: </label>
                <input onInput={el => getSignupObj({...signupObj, email: el.target.value})} type='email'></input>
                {printErr}
            </div>
            <div>
                <label>Password: </label>
                <input onInput={el => getSignupObj({...signupObj, password: el.target.value})} type='password'></input>
            </div>
            <div>
                <label>Repeat Password: </label>
                <input onInput={el => getSignupObj({...signupObj, repeatPassword: el.target.value})} type='password'></input>
            </div>
            <button>Signup</button>
        </form>
    </div>
  )
}
