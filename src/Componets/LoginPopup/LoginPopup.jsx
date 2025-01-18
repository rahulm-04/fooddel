import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogin}) => {

  const[currState,setCurrState]=useState("login")
    
  return (
    <div className='loginpopup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className='login-popup-inputs'>
                {currState==="login"?<></>:<input type='text' placeholder='my name' required/>}
                <input type='email' placeholder='my email' required/>
                <input type='password' placeholder='my password' required/>
            </div>
            <button>{currState==="sign up"?"create account":"login"}</button>
            <div className="login-popup-condition">
                <input type='checkbox' required/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="login"?
            <p>Create a new account? <span onClick={()=>{setCurrState("sign up")}}>click here</span></p>
            :<p>Already have an account?<span onClick={()=>{setCurrState("login")}}>login here</span></p>}
        </form>
    </div>
  )
}


export default LoginPopup
