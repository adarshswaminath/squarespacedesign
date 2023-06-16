import React from 'react'
import logo from "./Images/vite.svg"
function Navbar() {
  return (
    <div className='navabr p-3 shadow-lg'>
        <div className="flex justify-between">
          <div className="logo p-3">
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-2 p-3">
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="btn p-2">
            <button className='border border-white px-4 py-2 rounded-full '>Signup</button>
          </div>
        </div>
    </div>
  )
}

export default Navbar