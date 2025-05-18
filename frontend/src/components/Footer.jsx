import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="/android-chrome-512x512.png" className='h-15 w-15' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo quae dicta debitis iste ratione fugit facere suscipit reiciendis aliquam molestias repudiandae eum, atque tempora quo sequi impedit excepturi laboriosam.</p>
        </div>
        <div className="footer-content-center">
          <h2>SHOP MASH</h2>
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 89036 22449</li>
            <li>hariharanmuthukumarslm@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyrights">
        Copyright 2025 @c shop-mash.com - All Rights Resevred
      </div>
    </div>
  )
}

export default Footer
