import React from 'react'
import Table from 'react-bootstrap/Table';

const ListOfUsers = () => {
  return (
    <div>
 <div className="header">
        <div className="text">List of users</div>
        <div className="underline"></div>
      </div>

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#User ID</th>
          <th>User Name</th>
          <th>User Password</th>
          <th>User Phone Number</th>
          <th>Date of Registration</th>
          <th>Status</th>
          {/* <th>Full Address</th> */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          
        </tr>
        
      </tbody>
    </Table>
    </div>
  )
}

export default ListOfUsers
