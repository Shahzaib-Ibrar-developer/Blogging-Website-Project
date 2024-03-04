import React, {useEffect} from 'react';
import { useAuth } from '../../../../context/auth'
import { useNavigate } from 'react-router-dom';
const AuthorLayout =({children}) =>{

const [auth] = useAuth();
const router = useNavigate();
useEffect(()=>{
  if(!auth.todos){
    router('/')
  }
},[])
    return (
        <>
        <nav>Author's dashboard headers</nav>
        {children}
        </>
    )
}


export default AuthorLayout