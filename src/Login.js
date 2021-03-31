import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result)
        }).catch(error => alert(error.message))
    };


    return (
        <div className='login'>
            <div className='login__logo'>
                <img className='login__logoIcon' src='https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512' alt='' />
                <img className='login__logoText' src='https://cdn.worldvectorlogo.com/logos/facebook-7.svg' alt='' />
            </div>
            <Button onClick={signIn} className='login__button'>SIGN IN</Button>
        </div>
    )
}

export default Login
