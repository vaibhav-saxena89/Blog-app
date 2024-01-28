import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import axios from 'axios'
function Register(){
    const [username,setUsername]=useState()
    const [email,setEmail]=useState()
    const [password,setpassword]=useState()
   
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/register',{username,email,password})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return(
        <div className="signup_container">
           <div className="signup_form">
            <h2>
                Sign Up
            </h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username:</label>
               <input type="text" placeholder="Enter Username"
               onChange={e=>setUsername(e.target.value)}/> </div>
               <div>
                    <label htmlFor="email">Email:</label>
               <input type="email" placeholder="Enter Email"
               onChange={e=>setEmail(e.target.value)}/> </div>
               <div>
                    <label htmlFor="password">Password:</label>
               <input type="password" placeholder="*********"
               onChange={e=>setpassword(e.target.value)}/> </div>
               <button className="signup_btn">Sign up</button>
            </form>
            <br></br>
            <p>
                Already have account
            </p>
          <Link to='/login'><button>Login</button></Link>
           </div>
        </div>
    )
}
export default Register