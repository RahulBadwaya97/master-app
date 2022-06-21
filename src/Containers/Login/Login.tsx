//@ts-nocheck
import Button from 'components/Button/Button'
import Input from 'components/Input/Input'
import InputLabel from 'components/InputLabel/InputLabel'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from 'utility/axiosClient'
import { useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify'
import './Login.scss'
function Login() {
  const [path , setPath] = useState('/login')
  const [children , setChilren] = useState('Sign In')  
  const [user , setUser] = useState({
    email:"",
    password:""
  })
  const [inputErr , setInputErr] = useState({
    email:"",
    password:''
  })
 let navigate = useNavigate()
  const submitUser =(e)=>{
   const  signinUser =()=>{
      httpRequest.post("/login", user).then(res=>{
        console.log(res)
        toast( res.data.message,{
          position:"top-center"
        });
        localStorage.setItem("access_token" , res.data.data.access_token)
        let access_token = localStorage.getItem("access_token")
        if(access_token){
         navigate("/dashboard")
        }
      })
      .catch(err=>{
          console.log(err)
          toast(err.response.data.message,{
            position:"top-center"
          })
          const {errors} = err.response.data
          if(errors.length > 0){
            const inputErr = {}
            errors.map(error=>{
              inputErr[error.param] = error.msg
            })
            setInputErr(inputErr)
          }

      })

     }
     signinUser()
      e.preventDefault()
  }
  const handleChange =(e)=>{
    setUser({
      ...user , 
      [e.target.name]:e.target.value
    })
  }
  return (
    <div className='container-fluid'>
      <div className='container'>
        <form onSubmit={submitUser}>
      <h1 align="center">Sign In</h1>

      <InputLabel label="UserID *"/>
      <div className="input-box">
      <i class="bi bi-person"></i>
      <Input
      type="email"
      placeholder='Enter User Id' 
      name="email"
      handleChange={handleChange}
      />
      </div>
      <span className='errMsg'>{inputErr?.email}</span>

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
      <span className='errMsg'>{inputErr?.password}</span>


      <div className='btn-box'>
       <Button onClick={submitUser}  requestPath={path} disable={false} >{children}</Button>
       </div>
       <div className="link">
       <Link to="/signup" ><button className='btn btn-dark'>Register Now</button></Link>
       </div>
       </form>
      </div>
      </div>
  )
}

export default Login