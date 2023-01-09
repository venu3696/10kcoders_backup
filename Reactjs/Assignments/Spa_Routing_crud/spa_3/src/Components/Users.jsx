import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let api_url=" http://localhost:3202/Users_2"
    const response = await (await fetch(api_url)).json();
    console.log(response)
    setUsers(response);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {users.map((person,i)=> <User usr={person} key={i}/> )}
        </tbody>
      </table>
    </div>
  );
};

export default Users;