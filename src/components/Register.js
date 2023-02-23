import React from 'react'
import Userpic from '../images/addpic.png'

function Register() {
  return (
    <div className='form_container'>
        <div className="form_wrapper">
            <div className="logo">React Chat</div>
            <div className="title">Register</div>
            <form>
                <input type="text" placeholder='User name'/>
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter password'/>
                <label htmlFor="file">
                    <img src= {Userpic} alt="" />
                    <span>Add a pic</span>
                </label>
                <input type="file" id='file'/>
                <button type='submit'>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Register