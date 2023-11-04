import React, { useEffect, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineEditLocation } from 'react-icons/md';
import {AiOutlineCalendar} from 'react-icons/ai'
import { BsFillTelephoneFill,BsBookHalf } from "react-icons/bs";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { VscChromeClose } from 'react-icons/vsc';
import Button from "react-bootstrap/Button";

const UpdateList = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  

  const[values, setValues] = useState({
    userName: '',
    userPassword: '',
    phoneNumber: '', 
    dateOfRegistration: '',  
    status: false ,
    addresses: [{ fullAddress: '' }],
})

const handleUpdate = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8080/api/v1/users/" + userId, values)
    .then((response) =>{
        console.log(response)
       navigate('/users')
    })
}

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users/" + userId)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

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

  const removeAddress = (index) => {
    const updatedAddresses = [...values.addresses];
    updatedAddresses.splice(index, 1);
    setValues({
      ...values,
      addresses: updatedAddresses,
    });
  };

  // const [user, setUser] = useState([]);
  

  

  return (
    <div className="form_page">
      <form action="" onSubmit={handleUpdate}>
        <div className="container">
          <div className="header">
            <div className="text">Update User</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <BiSolidUserCircle className="pp" />
              <input
                type="text"
                placeholder="User Name"
                name="userName"
                value={values.userName}
                onChange={(e) =>
                  setValues({ ...values, userName: e.target.value })
                }
              />
            </div>
            <div className="input">
              <RiLockPasswordFill className="pp" />
              <input
                type="Password"
                placeholder="User Password"
                name="userPassword"
                value={values.userPassword}
                onChange={(e) =>
                  setValues({ ...values, userPassword: e.target.value })
                }
              />
            </div>
            <div className="input">
              <BsFillTelephoneFill className="pp" />
              <input
                type="text"
                placeholder="User Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={(e) =>
                  setValues({ ...values, phoneNumber: e.target.value })
                }
              />
            </div>
            <div className="input">
              <AiOutlineCalendar className="pp" />
              <input
                type="text"
                placeholder="Date"
                name="dateOfRegistration"
                value={values.dateOfRegistration}
                onChange={(e) =>
                  setValues({ ...values, dateOfRegistration: e.target.value })
                }
              />
            </div>
            <div className="input">
              <BsBookHalf className="pp" />
              <input
                type="text"
                placeholder="Status"
                name="status"
                value={values.status}
                onChange={(e) =>
                  setValues({ ...values, status: e.target.value })
                }
              />
            </div>
            {values.addresses.map((address, index) => (
  <div className="input" key={index}>
    <MdOutlineEditLocation className="pp" />
    <input
      placeholder={`Full address ${index}`}
      type="text"
      name='fullAddress'
      value={values.addresses[index].fullAddress}
      onChange={(event) => handleAddressChange(event, index)}
    />
    <VscChromeClose
      onClick={() => removeAddress(index)}
      className="pp point"
    />
    <br />
  </div>
))}

            {/* <div className="input">
        <IoLocationSharp className='pp' />
        <input type="text" placeholder='Full Address' />
        </div> */}
          </div>
          <div className="submit-container">
            <Button
              variant="success"
              onClick={addAddress}
              className="submit pp"
            >
              Add Address +
            </Button>
          </div>
          <div className="submit-container">
            <button className="submit pp">Submit</button>
            {/* <button className="submit pp">Login</button> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateList;
