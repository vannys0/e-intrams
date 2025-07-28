import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginSignup.css"
import Logo from './../assets/cbsua-logo.png'
import Axios from "axios"
const BASE_URL = "http://localhost:8081/api"

function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleInput = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await Axios.post(`${BASE_URL}/`, values);
            navigate("/home")
            localStorage.setItem("token", res.data.token)
        } catch (err) {
            if(err.response && err.response.status === 404) {
                alert("User not found")
            } else if(err.response && err.response.status === 401) {
                alert("Incorrect password")
            } else {
                alert("An error occurred during login.")
            }
        }
    }
  return (
    <div className='login'>
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            <img src={Logo} alt="" />
            <span className='align-self-center'>Welcome to e-Intrams</span>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='form-control' value={values.email} onChange={handleInput} required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className='form-control' values={values.password} onChange={handleInput} required/>
            </div>
            <p>No account? <span className='signup' onClick={() => navigate("/signup")}>Sign Up here</span></p>
            <button type="submit" className='btn btn-success'>LOGIN</button>
        </form>
    </div>
  )
}

export default Login