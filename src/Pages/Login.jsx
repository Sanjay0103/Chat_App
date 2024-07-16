import React from 'react'

export const Login = () => {
  return (
    <div className='formContainer'>
    <div className='fromWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Register</span>
        <form>
            <input type='email' placeholder='email'></input>
            <input type='password' placeholder='password'></input>
            <button>Sign In</button>
        </form> 
        <p>You don't have an account? <b>Sign Up</b></p>
    </div>
</div>
  )
}
