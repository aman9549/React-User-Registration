import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const ListOfUsers = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  });

  const handleDelete = (userId) =>{
    const confirm = window.confirm("would You like to delete it?")
    if(confirm) {
        axios.delete("http://localhost:8080/api/v1/users/" + userId)
    .then((response) =>{
       window.location.reload();
    }).catch(err => console.log(err))
    }
}
  return (
    <div>
      <div className="header">
        <div className="text">List of users</div>
        <div className="underline"></div>
        <Button variant="info">
          {" "}
          <Link to="/" className="add_link">
            {" "}
            Add User+
          </Link>
        </Button>
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
          {user.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.userId}</td>
                <td>{d.userName}</td>
                <td>{d.userPassword}</td>
                <td>{d.phoneNumber}</td>
                <td>{d.dateOfRegistration}</td>
                <td>
                  {d.status === true ? (
                    <Button variant="success">Active</Button>
                  ) : (
                    <Button variant="danger">Dead</Button>
                  )}
                </td>
                <td className="but_action">
                 <Link to={`/read/${d.userId}`}><Button variant="primary">Read</Button></Link> 
                 <Link to={`/update/${d.userId}`}> <Button variant="success">Update</Button></Link>
                  <Button variant="danger" onClick={e => handleDelete(d.userId)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListOfUsers;
