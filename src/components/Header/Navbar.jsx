import React, { use, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../provider/AuthContext';

import toast, { Toaster } from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';



const Navbar = () => {
    const { user, logout } = use(AuthContext)
     const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
   
        useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success(`You've Successfully Logout`)
            }).catch((error) => {
                console.log(error)
            });
    }
     const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }



    const links = <>
        <NavLink className='text-semibold text-gray-600 ml-4' to='/'><li>  Home</li></NavLink>
        <NavLink className='text-semibold text-gray-600 ml-4' to='/services'><li>Services</li></NavLink>
        {
            user && <NavLink className='text-semibold text-gray-600 ml-4' to='/profile'><li>My Profile</li></NavLink>
        }
        
    </>

    return (
       <div className='bg-base-200 navbar sticky top-0 z-50  shadow-sm'>
         <div className=" max-w-7xl mx-auto navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <Link to='/'><p className='font-bold flex text-[#2C1B0E] items-center text-xl'> <img className='lg:w-15 h-12' src={logo} alt="logo" /> WarmPaws</p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">

                 {user ? (
                        <div className="dropdown dropdown-end z-50">
                            <div
                                tabIndex={0}
                                role="button"
                                className=" rounded-full avatar"
                            >
                                <div className="w-10  rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        referrerPolicy="no-referrer"
                                        src={user.photoURL || 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                            >
                                <div className=" pb-3 border-b border-b-gray-200">
                                    <li className="text-sm font-bold">{user.displayName}</li>
                                    <li className="text-xs">{user.email}</li>
                                </div>
                                <li className="mt-3">
                                    <Link to={"/profile"}>
                                        <FaUser /> Profile
                                    </Link>
                                </li>

                                  <div className='flex items-center gap-2 '>

                                    <h1 className='mt-4'>Theme:</h1>

                                    <input
                                        onChange={(e) => handleTheme(e.target.checked)}
                                        type="checkbox"
                                        defaultChecked={localStorage.getItem('theme') === "dark"}
                                        className="toggle mt-4" />
                                </div>

                                

                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-sm m-4 btn-primary text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to={'/login'}><li className="btn btn-primary  ">Login</li></Link>
                    )}
            </div>
            <Toaster></Toaster>
        </div >
       </div>
    );
};

export default Navbar;