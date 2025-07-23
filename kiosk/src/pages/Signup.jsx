import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginSignup.css"
import Logo from './../assets/cbsua-logo.png'

function Signup() {
    const navigate = useNavigate();
  return (
    <div className='login'>
        <form action="" className='d-flex flex-column gap-3'>
            <img src={Logo} alt="" />
            <span className='align-self-center'>Create your account</span>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" className='form-control' required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" className='form-control' required/>
            </div>
            <p>Already have an account? <span className='signup' onClick={() => navigate("/")}>Login here</span></p>
            <button type="submit" className='btn btn-success'>SIGNUP</button>
        </form>
    </div>
  )
}

export default Signup