import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("home"); // Tracks the active menu
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks hamburger menu toggle

    return (
        <div className="navbar flex justify-between items-center px-6 py-4 bg-white relative">
            {/* Logo */}
            <Link to='/'><img src={assets.logo} alt="Logo" className="logo h-10" /></Link>

            {/* Hamburger Menu for Small Screens */}
            <button
                className="md:hidden text-2xl"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Navigation"
            >
                &#9776; {/* Hamburger Icon */}
            </button>

            {/* Navbar Menu */}
            <ul
                className={`navbar-menu absolute top-full left-0 right-0 shadow-md md:relative md:top-0 md:shadow-none w-full md:w-auto 
                            md:flex items-center gap-6 transition-all duration-300 ease-in-out 
                            ${isMenuOpen ? 'block' : 'hidden md:block'} z-10`}
            >
                <Link
                    to='/'
                    onClick={() => setMenu("home")}
                    className={`smooth-scroll cursor-pointer px-4 py-2 md:px-0 md:py-0 hover:text-blue-500 ${menu === "home" ? "font-bold text-blue-500" : ""
                        }`}
                >
                    home
                </Link>
                <a
                    href='#explore-menu'
                    onClick={() => setMenu("menu")}
                    className={`cursor-pointer px-4 py-2 md:px-0 md:py-0 hover:text-blue-500 ${menu === "menu" ? "font-bold text-blue-500" : ""
                        }`}
                >
                    menu
                </a>
                <a
                    href='#'
                    onClick={() => setMenu("mobile-apps")}
                    className={`cursor-pointer px-4 py-2 md:px-0 md:py-0 hover:text-blue-500 ${menu === "mobile-apps" ? "font-bold text-blue-500" : ""
                        }`}
                >
                    mobile-apps
                </a>
                <a
                href='#contact-us'
                    onClick={() => setMenu("contact us")}
                    className={`smooth-scroll cursor-pointer px-4 py-2 md:px-0 md:py-0 hover:text-blue-500 ${menu === "contact us" ? "font-bold text-blue-500" : ""
                        }`}
                >
                    contact us
                </a>
            </ul>

            {/* Navbar Right Section */}
            <div className="navbar-right flex items-center gap-4">
                <img src={assets.search_icon} alt="Search" className="h-6" />
                <div className="relative">
                    <Link to='/cart'><img src={assets.basket_icon} alt="Basket" className="h-6" /></Link>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <button onClick={ ()=>{ setShowLogin(true) } } className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sign in
                </button>
            </div>
        </div>
    );
};

export default Navbar;
