import React from 'react'
import '../css/Navbar.css'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src='/android-chrome-512x512.png' alt="" className="logo" />
            <h2>Admin Dashboard</h2>
            <img src={assets.profile_image} alt="" className="profile" />
        </div>
    )
}

export default Navbar