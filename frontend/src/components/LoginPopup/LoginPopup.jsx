import { React, useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

  const [currstate, setCurrstate] = useState('Login')

  return (
    <div className='login-popup absolute inset-0 grid place-items-center z-10 ' style={{ backgroundColor: '#00000090' }}>
      <form
        className="login-popup-container place-self-center bg-white text-gray-500 flex flex-col gap-6 p-6 rounded-lg shadow-lg"
        style={{
          width: 'max(23vw, 330px)',
          fontSize: '14px',
          animation: 'fadeIn 0.5s ease-in-out',
        }}
      >
        <div className='login-popup-title flex justify-between items-center text-black'>
          <h1 className='font-bold text-black'>{currstate}</h1>
          <img onClick={() => { setShowLogin(false) }} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
          {currstate === "Login" ? <></> : <input type="text" placeholder='Your name' className='w-full p-2 border border-gray-300 rounded-lg  transition duration-150' required />}

          <input type="text" placeholder='Your email' required 
          className="mt-3 w-full p-2 border border-gray-300 rounded-lg  transition duration-150"/>
          <input type="password" placeholder='Password' required 
          className='w-full p-2 border border-gray-300 rounded-lg  transition duration-150 mt-3'/>
        </div>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 rounded-lg transition">{currstate === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-consition flex gap-2">
          <input type="checkbox" required />
          <p className=''>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate === "Login" ? <p>Create a new account? <span onClick={() => { setCurrstate("Sign Up") }}>Click here</span></p>
          : <p className=''>Already have an a ccount? <span onClick={() => { setCurrstate("Login") }}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup