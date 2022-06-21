//@ts-nocheck
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import httpRequest from "utility/axiosClient"
import './Dashboard.scss'
import Button from "components/Button/Button"
import { toast } from "react-toastify"
const Dashboard =()=>{
    const [posts , setPosts] = useState([])
    const [deletePath , setDeletePath] = useState('')
    const [deleteChildren , setDeleteChilren] = useState('Delete')  
    const [addPost , setAddPost] = useState('/addpost')
    const [addPostChildren , setAddPostChilren] = useState('Add Post')  
    useEffect(()=>{
        getPost()
    },[])
    const getPost =()=>{
        httpRequest.get('/posts')
        .then(res=>{
            setPosts(res.data.data)
        })
    }
    const handleDelete =(_id)=>{
        httpRequest.delete(`/posts/${_id}`)
        .then(res=>{
            console.log(res)
            toast("Post Deleted")
            getPost()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    if(posts){

    return(
       <div className="dashboard-container">
        <div className="container">
       <Button  requestPath={addPost} className="btn btn-dark me-1" disable={false} >{addPostChildren}</Button>
        <table className="table table-striped">
         <thead>
            <tr>
                <th>S.No</th>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
         </thead>
         <tbody>
             {posts.map((post, index)=>{
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{post.title}</td>
                    <td>{post.description}</td>
                    <td><div className="d-flex">
       <Button  requestPath={deletePath}  onClick={()=>handleDelete(post._id)} className="btn btn-danger me-1" disable={false} >{deleteChildren}</Button>
       <Button  requestPath={`/edit/${post._id}`} className="btn btn-dark ms-1" disable={false} >Edit Post</Button>
                        
                        </div></td>
                </tr>
             })}
         </tbody>
        </table>
        </div>
       </div>
    )
}
}
export default Dashboard