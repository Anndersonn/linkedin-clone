import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';

function Login() {

    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginInApp = (e) => { e.preventDefault() }

    const register = (e) => { 
        if (!name) { 
             return alert('Please enter a full name')
        }
    }

    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="logo" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='type your full name' type="text" />
                <input value={picture} onChange={e => setPicture(e.target.value)} placeholder='load your pic' type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='type your email' type="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='type your password' type="Password" />
                <button type='submit' onClick={loginInApp}>send nudes</button>
            </form>
            <p>not registered?<span className='register' onClick={register}>Do it now</span></p>
        </div>
    );
}

export default Login;