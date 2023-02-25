import React,{useState} from 'react'
import "../styles/sign_in.css"
import signinillustration from "../assets/illustrationSignin.png"

import { NavLink } from 'react-router-dom'

import GoogleIcon from "../assets/GoogleIcon.svg";

function Sign_in() {
  const [user,setUser]=useState({
    email:"",
    password:""
  })

  function handleChange(e)
  {
    const {name,value}=e.target
    console.log(e.target)
    setUser({
      ...user,
      [name]:value
    })
  }
  return (
    <div className='signIn'>
                <h2 className='logo text-3xl pt-3 pl-6 absolute'>edVenture</h2>
                <img src={signinillustration} className='ill absolute bottom-0 left-0'/>
        <div className='signIn-box'></div>
        <div className='signIn-container'>
              <div className='sign_in_innerContainer'>
                <h2 className='text-center font-bold text-4xl pb-10'>Sign In</h2>
                  <form className='login_page flex flex-col' autoComplete="off">
                    <input 
                      type="email" 
                      placeholder='Email Address'
                      className='login_input border-b-2 mb-10 pb-2'
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                    />

                    <input 
                      type="password" 
                      className='login_input border-b-2 mb-10 pb-2'
                      placeholder='Password'
                      autoComplete="new-password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                    />

                    <button className='login_button h-10 rounded-md mb-8'>Login</button>
                    
                    
                  </form>
                  <p className='text-center pb-5 font-semibold'>-OR-</p>


                  <button className='google flex h-10 mb-5 p-1 rounded-md'>
                    <img src={GoogleIcon} className="googleicon h-7 w-7 pr-1"/>
                    <div>Sign in using Google</div>
                  </button>


                  <div className='loginend flex flex-row justify-center'>
                      <p className='pr-20'>Don't have account?</p>
                      <NavLink to="/Sign_up" className={`navi`} >Sign Up</NavLink>
                    </div>
              </div>
                
            
        </div>
    </div>
  )
}

export default Sign_in