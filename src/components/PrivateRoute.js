import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
const [user,setUser] = useState(true); 
 let navigate = useNavigate()

 useEffect(()=>{

  if(!user){
    console.log("User Not found. Redirecting");
    navigate('/')
  }
 },[])

  return children
}
