//@ts-nocheck
import { useState } from "react"
import Button from "components/Button/Button"
import InputLabel from "components/InputLabel/InputLabel"
import Input from "components/Input/Input"
import httpRequest from "utility/axiosClient"
import {  toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"

const AddPost =()=>{
    const [post , setPost] = useState({
        title:"",
        description:""
    })
    const [postPath , setPostPath] = useState('/dashboard')
    const [postChildren , setPostChildren] = useState('Add Post')
    const navigate = useNavigate()
    const submitPost =(e)=>{
        httpRequest.post('/posts',post)
        .then(res=>{
            toast(res.data.message)
            navigate('/dashboard')
        })
        .catch(err=>{
            console.log(err)
        })
       e.preventDefault()
    }
    const handleChange =(e)=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }
    console.log(post)
    return (
        <div className='container-fluid'>
        <div className='container'>

          <form onSubmit={submitPost}>
        <h1 align="center">ADD POST</h1>
        <InputLabel label="Title*"/>
        <div className="input-box">
        <i class="bi bi-book"></i>
        <Input
        type="text"
        placeholder='Enter Title' 
        name="title"
        handleChange={handleChange}
        />
        </div>
  
        <InputLabel label="Description *"/>
        <div className="input-box">
        <i class="bi bi-book"></i>
        <Input
        type="text"
        placeholder='Enter Description' 
        name="description"
        handleChange={handleChange}
        />
        </div>  
  
        <div className='btn-box d-flex justify-content-evenly'>
         <Button onClick={submitPost}  requestPath={postPath} disable={false} >{postChildren}</Button>
       <Button  requestPath='/dashboard' disable={false} >Back</Button>

         </div>
         </form>
        </div>
        </div>
    )
}
export default AddPost 