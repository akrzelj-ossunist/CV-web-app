import React, { useState } from 'react'
import './css/signuplogin.css'

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
        <form>
            <h1>Signup</h1>
            <div>
                <label>Username: </label>
                <input onInput={el => getSignupObj({...signupObj, username: el.target.value})} type='text'></input>
            </div>
            <div>
                <label>Email: </label>
                <input onInput={el => getSignupObj({...signupObj, email: el.target.value})} type='email'></input>
            </div>
            <div>
                <label>Password: </label>
                <input onInput={el => getSignupObj({...signupObj, password: el.target.value})} type='password'></input>
            </div>
            <div>
                <label>Repeat Password: </label>
                <input onInput={el => getSignupObj({...signupObj, repeatPassword: el.target.value})} type='password'></input>
            </div>
            <button onClick={el => getBtnVal(el.target.value)} value='signup'>Signup</button>
        </form>
    </div>
  )
}
