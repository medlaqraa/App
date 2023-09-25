import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import signupValidation from './signupValidation'

export default function Signup() {

  const [values , setValues] = useState({
    name : '',
    email : '',
    password :'',
  })

  const [errors , setErrors] = useState({

  })

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(signupValidation(values));
    if(errors.name === "" && errors.email === "" && errors.password === ""){
      
    }
  }

  const handleInput = (event) => {
    setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="name"><strong>Name</strong></label>
                <input type="name" onChange={handleInput} name='name' placeholder='Enter Your Name' className='form-control rounded-0'/>
                <span>{errors.name && <span className='text-danger'>{errors.name}</span>}</span>
            </div>

            <div className='mb-3'>
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" onChange={handleInput} name='email' placeholder='Enter Your Email' className='form-control rounded-0'/>
                <span>{errors.email && <span className='text-danger'>{errors.email}</span>}</span>
            </div>
            
            <div className='mb-3'>
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" onChange={handleInput} name='password' placeholder='Enter Your Password' className='form-control rounded-0'/>
                <span>{errors.password && <span className='text-danger'>{errors.password}</span>}</span>
            </div>

            <button type='submit' className='btn btn-success w-100'>Sign Up</button>
            <p>You are agree to our terms and policies</p>
            <Link to='/' className='btn btn-default border w-100 bg-light'>Login</Link>
        </form>
      </div>
    </div>
  )
}
