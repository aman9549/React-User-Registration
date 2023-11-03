import React, { useState } from 'react'
import '../Resgistation/registration.css'
import {BiSolidUserCircle} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineEditLocation} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import axios from 'axios'


const Registration = () => {

  const[values, setValues] = useState({
    userName: '',
    userPassword: '',
    phoneNumber: '',
    addresses:[ ]
      
    
})

const navigate = useNavigate();

// const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post("http://localhost:8080/api/v1/users", values)
//     .then((response) =>{
//         console.log(response)
//        navigate('/users')
//     })
// }

// const handleInput = (event) =>{
//   setValues({...values, [event.target.name]:event.target.value})
// }

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setValues({
    ...values,
    [name]: value,
  });
};

const handleAddressChange = (event, index) => {
  const { name, value } = event.target;
  const updatedAddresses = [...values.addresses];
  updatedAddresses[index] = { ...updatedAddresses[index], [name]: value };
  setValues({
    ...values,
    addresses: updatedAddresses,
  });
};

const addAddress = () => {
  setValues({
    ...values,
    addresses: [...values.addresses, { fullAddress: '' }],
  });
};

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:8080/api/v1/users', values);
    console.log(response.data);

     navigate('/users')// Redirect or handle success as needed
  } catch (error) {
    console.error('Error:', error);
  }
};



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
        <input type="text" placeholder='User Name' value={values.userName}  name='userName' onChange={handleInputChange}/>
        </div>
        <div className="input">
        <RiLockPasswordFill className='pp' />
        <input type="Password" placeholder='User Password' value={values.userPassword} name='userPassword' onChange={handleInputChange} />
        </div>
        <div className="input">
        <BsFillTelephoneFill className='pp' />
        <input type="text" placeholder='User Phone Number' value={values.phoneNumber} name='phoneNumber' onChange={handleInputChange} />
        </div>

        {values.addresses.map((address, index) => (<div className="input">
        <MdOutlineEditLocation className='pp' />  
          
            
            <input
            placeholder={`Full address ${index}`}
              type="text"
              name={`addresses[${index}].fullAddress`}
              // value={address.fullAddress}
              onChange={(event) => handleAddressChange(event, index)}
              key={index}
            /> 
          <br/>
      </div>))}
      </div>
      <div className="submit-container">
      <Button variant="success" onClick={addAddress} className="submit pp">Add Address + </Button>
      </div>
      <div className="submit-container">
        <button className="submit pp">Signup</button>
      </div>
    </div>
    </form>
    </div>
  )
}

export default Registration;
