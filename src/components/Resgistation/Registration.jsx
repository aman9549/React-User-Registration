import React, { useState } from 'react'
import '../Resgistation/registration.css'
import {BiSolidUserCircle} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Registration = () => {

  const[values, setValues] = useState({
    userName: '',
    userPassword: '',
    phoneNumber: ''  
})

const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/api/v1/users", values)
    .then((response) =>{
        console.log(response)
       navigate('/users')
    })
}

  return (
    <div className="form_page">
      <form action="" onSubmit={handleSubmit}>
    <div className='container'>
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
        <BiSolidUserCircle  className='pp' />
        <input type="text" placeholder='User Name'  name='userName' onChange={e=> setValues({...values, userName: e.target.value})}/>
        </div>
        <div className="input">
        <RiLockPasswordFill className='pp' />
        <input type="Password" placeholder='User Password' name='userPassword' onChange={e=> setValues({...values, userPassword: e.target.value})} />
        </div>
        <div className="input">
        <BsFillTelephoneFill className='pp' />
        <input type="text" placeholder='User Phone Number' name='phoneNumber' onChange={e=> setValues({...values, phoneNumber: e.target.value})} />
        </div>
        
        {/* <div className="input">
        <IoLocationSharp className='pp' />
        <input type="text" placeholder='Full Address' />
        </div> */}
      </div>
      <div className="submit-container">
        <button className="submit pp">Signup</button>
        {/* <button className="submit pp">Login</button> */}
      </div>
    </div>
    </form>
    </div>
  )
}

export default Registration
