import React from 'react'
import '../Resgistation/registration.css'
import {BiSolidUserCircle} from 'react-icons/bi'
import {RiLockPasswordFill} from 'react-icons/ri'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {CgCalendarDates} from 'react-icons/cg'
import {IoLocationSharp} from 'react-icons/io5'

const Registration = () => {
  return (
    <div className="form_page">
    <div className='container'>
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
        <BiSolidUserCircle  className='pp' />
        <input type="text" placeholder='User Name' />
        </div>
        <div className="input">
        <RiLockPasswordFill className='pp' />
        <input type="Password" placeholder='User Password' />
        </div>
        <div className="input">
        <BsFillTelephoneFill className='pp' />
        <input type="text" placeholder='User Phone Number' />
        </div>
        
        <div className="input">
        <IoLocationSharp className='pp' />
        <input type="text" placeholder='Full Address' />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit pp">Submit</div>
      </div>
    </div>
    </div>
  )
}

export default Registration
