//@ts-nocheck
import AddPost from 'Containers/Addpost/AddPost';
import Dashboard from 'Containers/Dashboard/Dashboard';
import EditPost from 'Containers/EditPost/EditPost';
import Login from 'Containers/Login/Login'
import Signup from 'Containers/Signup/Signup'
import {Routes , Route} from 'react-router-dom'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const APP=()=>{
  return (
    <div>
       <ToastContainer />
    <Routes>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/addpost" element={<AddPost/>}></Route>
    <Route path="/edit/:_id" element={<EditPost/>}></Route>
    </Routes>
     </div>
  )
}

export default APP