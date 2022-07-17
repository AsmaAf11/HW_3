import React,{useState,useEffect } from 'react'
import axios from 'axios'

import {useNavigate} from 'react-router-dom'
function Update() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [user,setUser] = useState(null)
    const navigate = useNavigate()
    useEffect (()=>{
      setFirstName(localStorage.getItem("firstname"));
      setUser(localStorage.getItem("user"));

      setLastName(localStorage.getItem("lastname"));


  },[])
    const postData =()=>{
        axios.put (`http://127.0.0.1:8000/update_users/${user}`,{
            firstName,
            lastName,
         
        }).then(res=>{console.log(res);
            navigate("/Home");
            })
            .catch(err=>{console.log(err)})

    }
  return (
    <div>
      <input placeholder="firstname" onChange={(e)=>{setFirstName(e.target.value)}}></input>
      <input placeholder="lastname" onChange={(e)=>{setLastName(e.target.value)}}></input>

      <button onClick={postData}>update</button>

    </div>
  )
}

export default Update