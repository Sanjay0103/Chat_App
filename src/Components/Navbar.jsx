import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar">
      <span className='logo'>Chat App</span>
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EdaVAtRcpMSIvrK2qmO_9xaS4Ex5t7xuKA&s" alt="" />
        <span className='username'>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}
