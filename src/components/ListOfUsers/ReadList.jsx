 import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import {AiOutlineArrowLeft} from 'react-icons/ai'
 
 const ReadList = () => {

  const [user, setUser] = useState([]);
  const {userId} = useParams();
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/users/" + userId)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
      // eslint-disable-next-line
  },[]);

   return (
     <div className='layer'>
     <Link to='/users'><Button variant="light"><AiOutlineArrowLeft />Back</Button></Link> 
       <div className='container'>
        <div className="header">
          <div className="text">User Detail</div>
          <div className="underline"></div>
        </div>
        <div className="input_read">


      


        <div className="userId text_read"><span className="col">Id : </span> {user.userId}</div>
        <div className="userName text_read"><span className="col">Name : </span> {user.userName}</div>
          <div className="passwerd text_read"><span className="col">Password : </span>{user.userPassword}</div>
          <div className="phone text_read"><span className="col">Phone : </span> {user.phoneNumber}</div>
          <div className="date text_read"><span className="col">Date : </span>{user.dateOfRegistration}</div>
          <div className="state text_read"><span className="col">State : </span>{user.status=== true ? (
                    <Button variant="success">Active</Button>
                  ) : (
                    <Button variant="danger">Dead</Button>
                  )}</div>
         
         <Link to={`/update/${userId}`}> <Button variant="secondary">Edit</Button></Link>
       </div>
     </div>
        </div>

       
   )
 }
 
 export default ReadList
 