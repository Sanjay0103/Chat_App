import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../Context/AuthContext'

export const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="navbar">
      <span className='logo'>TalkSpace</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span className='username'>{currentUser.displayName}</span>
        <button onClick={()=> signOut(auth)}>logout</button>
      </div>
    </div>
  )
}
