import React from 'react'
import { FaLock, FaPhone } from 'react-icons/fa';
import './Login.css'
import './SignUp.css'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        {/* <nav className='header'>
            unityspace
        </nav> */}
        <div className='loginMainDiv'>
        <div className='loginImageDiv'>
            <p className='unitySpaceLogo'>unityspace</p>
            <p className='tagLine'>UnitySpace helps you connect and share with the people in your life.</p>
            </div>
            <div className='loginDetailsDiv'>
            <form action="">
                <label htmlFor="emailOrPhone">
                    <FaPhone className='reactIcons' />
                    <input type='text' id='emailOrPhone' name='emailOrPhone' placeholder='Enter email or phone number' />
                </label>
                <label htmlFor="password">
                    <FaLock className='reactIcons' />
                    <input type='password' id='password' name='password' placeholder='Enter password'/>
                </label>
                <button type='submit'>Login</button>
                <p>Forgot Account</p>
                <p>Forgot Password</p>
                <Link to='/unityspace'>Register/SignUp</Link>
            </form>
            </div>
        </div>
    </>
  )
}

export default Login
