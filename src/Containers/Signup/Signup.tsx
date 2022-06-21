//@ts-nocheck
import axios from 'axios'
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import InputLabel from 'components/InputLabel/InputLabel'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from 'utility/axiosClient'
import { useNavigate } from 'react-router-dom'
import './Signup.scss'
import {toast} from 'react-toastify'
function Signup() {
  const [path , setPath] = useState('/login')
  const [children , setChilren] = useState('Signup')  
  const [user , setUser] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [inputErr , setInputErr] = useState({
  name:"",
  email:"",
  password:"",
  confirmPassword:""})
  const navigate = useNavigate()
   const submitUser =()=>{
   httpRequest.post("/register", user).then(res=>{
       toast(res.data.message , {
        position:"top-center"
       }) 
       if(res.data.message){
        navigate('/login')
       }       
   }).catch(err=>{
     console.log("____________",err.response.data.errors)
     const { errors } = err.response.data;
     if(errors.length > 0 ){
          const inputErr = {};
          errors.map( error => {
               inputErr[error.param] = error.msg;
          })
          setInputErr(inputErr);
     }
   })
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    submitUser()
  }
  const handleChange =(e)=>{
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div className='container-fluid'>
      {console.log(inputErr)}
      <div className='container'>
        <form onSubmit={handleSubmit}>
       <h1 align="center">Sign Up</h1>


      <div className='input-wrapper'>
      <InputLabel label="Full Name *"/>
      <div className="input-box">
      <i class="bi bi-person"></i>
      <Input
      type="text"
      placeholder='Enter Full Name' 
      name="name"
      handleChange={handleChange}
      />
      </div>
      <span className="errMsg">{inputErr?.name}</span>
      </div>

      <div className='input-wrapper'>
      <InputLabel label="Email Address *"/>
      <div className="input-box">
      <i class="bi bi-envelope"></i>
      <Input
      type="email"
      placeholder='Enter Email Address' 
      name="email"
      handleChange={handleChange}
      />
      </div>
      <span className="errMsg">{inputErr?.email}</span>
      </div>

      <div className='input-wrapper'>
      <InputLabel label="Password *"/>
      <div className="input-box">
      <i class="bi bi-lock"></i>
      <Input
      type="password"
      placeholder='Enter Password' 
      name="password"
      handleChange={handleChange}
      />
      </div>
      <span className="errMsg">{inputErr?.password}</span>
      </div>

      <div className='input-wrapper'>
      <InputLabel label="Confirm Password *"/>
      <div className="input-box">
      <i class="bi bi-lock"></i>
      <Input
      type="password"
      placeholder='Enter Confirm Password' 
      name="confirmPassword"
      handleChange={handleChange}
      />
      </div>
      <span className="errMsg">{inputErr?.confirmPassword}</span>
      </div>
      <div className='btn-box' >
       <Button onClick={handleSubmit}  requestPath={path} disable={false} className="Button">{children}</Button>
       </div>
       <div className='link'>
       <Link to="/login" ><button className='btn btn-dark'>Already Have An Account</button></Link>
       </div>
       </form>
      </div>
      </div>
  )
}

export default Signup