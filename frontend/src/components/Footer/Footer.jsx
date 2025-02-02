import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer bg-gray-600 flex flex-col gap-10 py-6 px-10 text-white mt-20" id='contact-us'>
        <div className="footer-content grid grid-cols-3">
            <div className="footer-content-left justify-self-start">
                <img src={assets.logo} alt="" />
                <p>Dummy text here </p>
                <div className="footer-social-icon flex text-center gap-3 mt-3">
                    <img className='w-8 h-8' src={assets.facebook_icon} alt="" />
                    <img className='w-8 h-8' src={assets.twitter_icon} alt="" />
                    <img className='w-8 h-8' src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center text-center">
                <h2 className='text-bold text-white font mb-3'>COMPANY</h2>
                <ul>
                    <li className='hover:underline cursor-pointer transition duration-200 text-sm'>Home</li>
                    <li className='hover:underline cursor-pointer transition duration-200 text-sm'>About us</li>
                    <li className='hover:underline cursor-pointer transition duration-200 text-sm'>Delivery</li>
                    <li className='hover:underline cursor-pointer transition duration-200 text-sm'>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right justify-self-end ">
            <h2 className='mb-3'>GET IN TOUCH</h2>
            <ul>
                <li className='hover:underline cursor-pointer transition duration-200 text-sm'>+91 9845375389</li>
                <li className='hover:underline cursor-pointer transition duration-200 text-sm'>contact@tomato.com</li>
            </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright text-center">Copyright 2024 * tomato.com =All rights reserved.</p>
    </div>
  )
}

export default Footer