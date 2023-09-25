import React, { useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
import { Link } from 'react-router-dom'

export default function Login() {

  const [values , setValues] = useState({
    email : '',
    password :'',
  })

  const handleSubmit =(event) => {
    event.preventDefault();
  }

  const handleInput = (event) => {
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Login</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" onChange={handleInput} name='email' placeholder='Enter Your Email' className='form-control rounded-0'/>
            </div>
            
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="email" onChange={handleInput} name='password' placeholder='Enter Your Email' className='form-control rounded-0'/>
                <input type="password"  placeholder='Enter Your Password' className='form-control rounded-0'/>
            </div>

            <button type='submit' className='btn btn-success w-100'>Login</button>
            <p>You are agree to our terms and policies</p>
            <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}
