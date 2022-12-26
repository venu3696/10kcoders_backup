import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Form2() {
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  useEffect(() => {
    getDataFromServer();
  }, []);
  const getDataFromServer = () => {
    axios.get(" http://localhost:3003/Users_2/").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  };

  const addUser = () => {
    // console.log("adduser");
    axios.post(" http://localhost:3003/Users_2/",user).then(()=>{
      getDataFromServer()
     clearForm()
    })
  };
  const clearForm =()=>{
    setUser({
      id: "",
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    })
  }
  const  deleteUser =(usr) =>{
    // console.log("deleteuser")
    axios.delete(" http://localhost:3003/Users_2/"+usr.id).then(()=>{
      getDataFromServer()
    })
  }
  const [toBeEdit,setToBeEdit] = useState(false)
  const editUser = (usr)=>{
    // console.log("edituser")
    setUser(usr)
    setToBeEdit(true)
  }
  const updateUser = ()=>{
    // console.log("updateUser")
    axios.put(" http://localhost:3003/Users_2/"+user.id,user).then(()=>{
      getDataFromServer()
      clearForm()
      setToBeEdit(false)
    })
  }

  return (
    <>
      <div className="container border border-2 m-2 justify-content-center">
        <form>
          <label htmlFor="id"></label>
          Id :
          <input
            type="text"
            name="id"
            value={user.id}
            id="id"
            onChange={(e) => {
              handleChange(e);
            }}
            disabled
          />{" "}
          <br />
          <br />
          <label htmlFor="name"></label>
          Name :
          <input
            type="text"
            name="name"
            value={user.name}
            id="name"
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="UserName"></label>
          UserName :
          <input
            type="text"
            name="username"
            id="userName"
            value={user.username}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="email"></label>
          Email :
          <input
            type="email"
            name="email"
            value={user.email}
            id="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="password"></label>
          Password :
          <input
            type="text"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="confirmPassword"></label>
          Confirm Password :
          <input
            type="text"
            name="confirmPassword"
            id="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <br />
          {/* <button type="button" onClick={addUser} className="btn btn-primary">
            add user
          </button> */}
        </form>
        {toBeEdit ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateUser}
          >
            Update User
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={addUser}
          >
            Add 
          </button>
        )}
      </div> <br />
      <div className="container my-3">
        <table className="table table-striped">
          <thead className="bg-secondary text-dark">
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>UserName</td>
              <td>Email</td>
              <td>Password</td>
              <td>ConfirmPassword</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {users.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmPassword}</td>
                <td><button type="button" className="btn btn-warning" onClick={()=>{editUser(usr)}}>edit</button></td>
                <td><button type="button" className="btn btn-danger" onClick={()=>{deleteUser(usr)}}>delte</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}