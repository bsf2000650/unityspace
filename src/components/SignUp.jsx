import React from 'react';
import './SignUp.css';
import {FaGenderless, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import {IoMdCalendar} from 'react-icons/io'
import SocialMediaImage from '../assets/images/soc_img1.gif'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
        {/* <nav className='header'>
            unityspace
        </nav> */}
        <div className='mainDiv'>
            <div className='imageDiv'>
            <p className='unitySpaceLogo'>unityspace</p>
            <p className='tagLine'>UnitySpace helps you connect and share with the people in your life.</p>
            </div>
            <div className='signUpDetailsDiv'>
                
            <form action="your_server_endpoint" method="post">
            <p>Create a new Account, its quick and easy</p>
        <label htmlFor="firstName">
            <FaUser className='reactIcons' />
            <input type="text" id="firstName" name="firstName" placeholder='First Name' required />
        </label>

        <label htmlFor="lastName">
            <FaUser className='reactIcons' />
            <input type="text" id="lastName" name="lastName" placeholder='Last Name'  required/>
        </label>

        <label htmlFor="emailOrPhone">
            <FaPhone className='reactIcons' />
            <input type="text" id="emailOrPhone" name="emailOrPhone"  placeholder='Email or Phone Number'  required  />
        </label>

        <label htmlFor="password">
            <FaLock className='reactIcons' />
            <input type="password" id="password" name="password" placeholder='Password' required />
        </label>
      
        <label htmlFor="dob">
            <IoMdCalendar className='reactIcons' />
            <input type="date" id="dob" name="dob" placeholder='Date of Birth' required />
        </label>
            
        <label htmlFor="gender">
            <FaGenderless className='reactIcons' />
        <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        </label>
        <p className='termsAndConditions'>People who use our service may have uploaded your contact information to Facebook. Learn more. <br />
        By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>

        <button type="submit">Sign Up</button>
        <p>Already have an <Link to='/login'>Account</Link></p>
    </form>
            </div>
        </div>
    </>
  )
}

export default SignUp
