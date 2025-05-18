import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import '../css/Navbar.css'
import { StoreContext } from '../context/StoreContext'

const Navbar = () => {

  const navigate = useNavigate()
  const { getTotalCartAmount, token, setToken, logout } = useContext(StoreContext)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
  <div className="flex items-center justify-between max-w-screen-xl mx-auto p-4 w-full space-x-6">
    
    {/* Logo */}
    <a className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/android-chrome-512x512.png" className="h-8 cursor-pointer" alt="Logo" />
      <span onClick={() => navigate('/')} className="self-center text-2xl font-semibold whitespace-nowrap cursor-pointer dark:text-white">
        Shopping Web App
      </span>
    </a>

    {/* Center Nav Links */}
    <div id="navbar-sticky" className="hidden md:flex items-center space-x-8">
      <ul className="flex items-center space-x-8 font-medium">
        <li><a onClick={() => navigate('/')} className="cursor-pointer text-blue-700 dark:text-blue-500">Home</a></li>
        <li><a href="#" className="cursor-pointer text-gray-900 dark:text-white">About</a></li>
        <li><a href="#" className="cursor-pointer text-gray-900 dark:text-white">Services</a></li>
        <li><a href="#" className="cursor-pointer text-gray-900 dark:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Right-side Buttons */}
    <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /><div className={getTotalCartAmount() === 0 ? "" : (
      <div className="absolute min-w-[10px] min-h-[10px] bg-red-500 rounded-[5px] -top-2 -right-2"></div>
    )}></div></Link>
    
    <div className="flex items-center space-x-2 md:order-2">
      
      {!token ? (
        <>
          <button onClick={() => navigate('/login')} className="text-gray-800 dark:text-white cursor-pointer hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</button>
          <button onClick={() => navigate('/register')} className="text-white bg-blue-700 cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
        </>
      ) : (
        <div className="navbar-profile">
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>
      )}
    </div>
  </div>
</nav>

  );
};

export default Navbar;
