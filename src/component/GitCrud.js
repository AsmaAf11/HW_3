import React ,{useEffect,useState}from 'react';
import axios from 'axios'
import Update from './Update.js'
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
function GitCrud() {
    const[lawyer,setLawyer]= useState([])
    const[data,setData]=useState()
    useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/list_lawyers")
        .then((res)=>{

            console.log(res.data);
            // setData(res.data[0].title)
            setLawyer(res.data.Lawyers)

         
        })
        .catch((err)=>{
            console.log(err)

        })
    },[])
    //update
    const setUpdate = (e)=>{
        let {id ,username,email}=e;
        localStorage.setItem("id",id)
        localStorage.setItem("username",username)
        localStorage.setItem("email",email)}
//delete
const getData =()=>{
    axios.get(`http://127.0.0.1:8000/list_lawyers`).then(getData=>{
        setData(getData.data)
    })
}
    const onDelete=(id)=>
        {
            axios.delete(`http://127.0.0.1:8000/delete_user/${id}`).then(()=>{getData()})}
    

  return (
    <div>
        
        <p>GitCrud</p>
        
     <ul>
        {lawyer.map(e => { // show data in browser
       return(
           
           <ul>
       <li>{e.user.username}</li>
       <li>{e.user.email}</li>
       <Link to ={'/Update'}>
       <button onClick={setUpdate(e)}>Update</button>
       </Link>
       <button onClick={onDelete(e.delete)}>Del</button>
       </ul>
       
       )} // نستخدم return 
       // علشان استخدمنا الاقواس {}
      )}
      </ul>
       
    </div>
  )
}

export default GitCrud