//@ts-nocheck
import { useEffect, useState } from "react"
import Button from "components/Button/Button"
import InputLabel from "components/InputLabel/InputLabel"
import Input from "components/Input/Input"
import httpRequest from "utility/axiosClient"
import {  toast } from 'react-toastify'
import { useNavigate, useParams } from "react-router-dom"

const EditPost =()=>{
    const [post , setPost] = useState({
        title:"",
        description:""
    })
    const [postPath , setPostPath] = useState('/dashboard')
    const [postChildren , setPostChildren] = useState('Update Post')
    const navigate = useNavigate()
    const {_id} = useParams()
   useEffect(()=>{
    getData()
   },[])
   const getData = () =>{
    httpRequest.get(`/posts/${_id}`)
    .then(res=>{
       setPost(res.data.data)
    })
    .catch(err=>{
        console.log(err)
    })
   }
    const editPost =(e)=>{
        httpRequest.put(`/posts/${_id}`,post)
        .then(res=>{
            toast(res.data.message)
            console.log(res)
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
    return (
        <div className='container-fluid'>
        <div className='container'>

          <form onSubmit={editPost}>
        <h1 align="center">UPDATE POST</h1>
        <InputLabel label="Title*"/>
        <div className="input-box">
        <i class="bi bi-book"></i>
        <Input
        type="text"
        placeholder='Enter Title' 
        name="title"
        value={post.title}
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
        value={post.description}
        handleChange={handleChange}
        />
        </div>  
  
        <div className='btn-box d-flex justify-content-evenly'>
         <Button onClick={editPost}  requestPath={postPath} disable={false} >{postChildren}</Button>
       <Button  requestPath='/dashboard' disable={false} >Back</Button>

         </div>
         </form>
        </div>
        </div>
    )
}

export default EditPost 