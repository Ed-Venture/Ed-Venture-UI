import { useState } from "react"
import React from 'react'

import signinillustration from "../assets/illustrationSignin.png"

import { NavLink } from "react-router-dom"


import GoogleIcon from "../assets/GoogleIcon.svg";


import "../styles/sign_up.css"
function Sign_up() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        phoneNumber:"",
        password:"",
        cpassword:" "
      })
    
      function handleChange(e)
      {
        const {name,value}=e.target
        // console.log(e.target)
        setUser({
          ...user,
          [name] :value
        })
      }
  return (
    <div className='signIn'>
        <h2 className='text-3xl pt-3 pl-6 absolute'>Application name</h2>
                <img src={signinillustration} className='ill absolute bottom-0 left-0' />
        <div className='signIn-box'></div>
            <div className='signUp-container'>
                <div className="register">
                {/* {console.log("user", user)} */}
                    <h2 className="text-center font-bold text-4xl pb-10">Sign Up!</h2>
                    
                    <button className='google flex h-10 mb-5 p-1 rounded-md'>
                    <img src={GoogleIcon} className="googleicon h-7 w-7 pr-1"/>
                    <div>Sign Up using Google</div>
                  </button>
                  <p className='text-center pb-5 font-semibold'>-OR-</p>

                    
                    <form autoComplete="off" className="register_form flex flex-col">

                        <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="register_input  border-b-2 mb-5 pb-2" 
                        name="name"
                        onChange={handleChange}
                        value={user.name}
                        />

                        <input
                        type="email"
                        placeholder="Your Email"
                        className="register_input  border-b-2 mb-5 pb-2"
                        name="email"
                        onChange={handleChange}
                        value={user.email}
                        />

                        <input
                        type="number"
                        placeholder="Phone Number"
                        className="register_input  border-b-2 mb-5 pb-2"
                        name="phoneNumber"
                        onChange={handleChange}
                        value={user.phoneNumber}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="register_input  border-b-2 mb-5 pb-2"
                            name="password"
                            onChange={handleChange}
                            value={user.password}
                        />

                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="register_input  border-b-2 mb-10 pb-2"
                            name="cpassword"
                            onChange={handleChange}
                            value={user.cpassword}
                        />

                       
                       <button className='register_button h-10 rounded-md mb-5'>Sign Up</button>

                        <div className="signinend flex flex-row justify-center">
                            <p className="pr-20">Already have an account?</p>
                            <NavLink to="/" className={`navi`}>Sign In</NavLink>
                        </div>
                        
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Sign_up