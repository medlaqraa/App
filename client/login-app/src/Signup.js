import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign Up</h2>
        <form action="">
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="name" placeholder='Enter Your Name' className='form-control rounded-0'/>
            </div>

            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder='Enter Your Email' className='form-control rounded-0'/>
            </div>
            
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder='Enter Your Password' className='form-control rounded-0'/>
            </div>

            <button className='btn btn-success w-100'>Sign Up</button>
            <p>You are agree to our terms and policies</p>
            <Link to='/' className='btn btn-default border w-100 bg-light'>Login</Link>
        </form>
      </div>
    </div>
  )
}
