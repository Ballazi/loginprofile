import React from 'react'
import "./Signup.css";
function Signup() {
    return (
        <div className='su-m'>
            <p className='su-p1'>SignUp Here</p>
            <input type="text" placeholder='Enter Name' className='su-i' required />
            <input type="email" placeholder='Enter Email' className='su-i' required />
            <input type="password" placeholder='Enter Password' className='su-i' required />
            <button className='su-b'>Sign Up</button>
            <p className='su-p4'>I Have an Account. <span className='si-s2'>Sign In</span></p>
        </div>
    )
}

export default Signup
