import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginSignup.css"
import Logo from './../assets/cbsua-logo.png'
import Axios from 'axios';
const BASE_URL = "http://localhost:8081/api";

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        user_name: "",
        email: "",
        password: "",
        department: "",
    })
    const handleInput = (e) => {
        e.preventDefault();
        setValues({ ...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await Axios.post(`${BASE_URL}/signup`, values)
            console.log(res.data)
            alert("Account created successfully")
            navigate("/");
        } catch (err) {
            if(err.response && err.response.status === 400) {
                alert("Email already exist")
            } else {
                console.error("Error during signup:", err);
                alert("An error occured during signup.");
            }
        }
    }
  return (
    <div className='login'>
        <form onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            <img src={Logo} alt="" />
            <span className='align-self-center'>Create your account</span>
            <div>
                <label htmlFor="user_name">Name</label>
                <input type="text" name="user_name" id="user_name" className='form-control' onChange={handleInput} required/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='form-control' onChange={handleInput} required/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className='form-control' onChange={handleInput} required/>
            </div>
            <label htmlFor="department">Department</label>
            <select className='form-select' name="department" id="department" onChange={handleInput} required>
                <option value="">- Select -</option>                
                <option value="College of Education">College of Education</option>
                <option value="College of Info Tech">College of Info Tech  </option>
                <option value="College of Industrial Tech">College of Industrial Tech</option>
                <option value="College of Criminology">College of Criminology</option>
                <option value="College of Agroforestry">College of Agroforestry</option>
            </select>
            <p>Already have an account? <span className='signup' onClick={() => navigate("/")}>Login here</span></p>
            <button type="submit" className='btn btn-success'>SIGNUP</button>
        </form>
    </div>
  )
}

export default Signup