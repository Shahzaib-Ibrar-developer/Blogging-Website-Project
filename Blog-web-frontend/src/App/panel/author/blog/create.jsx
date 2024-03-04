import React ,{useEffect}from 'react'
import AuthorLayout from '../layout'
import { useAuth } from '../../../../context/auth'
import { useNavigate } from 'react-router-dom';
const CreateBlog = () => {
const [auth] = useAuth();
const router = useNavigate();
useEffect(()=>{
  if(!auth.todos){
    router('/')
  }
},[])
  return(
    <AuthorLayout>create</AuthorLayout>
  )
}

export default CreateBlog