import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {

    const [name, setName] = useState('')
    const [picture, setPicture] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    const loginInApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch(error => alert(error))
    }

    const register = () => {
        if (!name) {
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: picture
            }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: picture
                    }))
                })
        }).catch(error => alert(error))
    }

    return (
        <div className='login'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="logo" />

            <form>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required)' type="text" />
                <input value={picture} onChange={e => setPicture(e.target.value)} placeholder='Profile picture URL (optional)' type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email (required)' type="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password (required)' type="Password" />
                <button type='submit' onClick={loginInApp}>Login</button>
            </form>
            <p>not registered?<span className='register' onClick={register}> Do it now</span></p>
        </div>
    );
}

export default Login;