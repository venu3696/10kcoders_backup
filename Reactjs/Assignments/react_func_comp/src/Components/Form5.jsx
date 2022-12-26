import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Form5() {
  const [employee, setEmployee] = useState({
    id: "",
    userName: "",
    password: "",
    email: "",
    gender: "",
    dateOfBirth: "",
  });
  const [employees, setEmployees] = useState([]);
  const handleChange = (e) => {
    let newEmployee = { ...employee };
    newEmployee[e.target.name] = e.target.value;
    setEmployee(newEmployee);
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  const getDataFromServer = () => {
    axios.get("http://localhost:3003/labour_5/").then((res) => {
      console.log(res.data);
      setEmployees(res.data);
    });
  };

  const addEmployee = () => {
    // console.log("addemployee..")
    axios.post("http://localhost:3003/labour_5/", employee).then(() => {
      getDataFromServer();
      clearForm();
    });
  };

  const clearForm = () => {
    setEmployee({
      id: "",
      userName: "",
      password: "",
      email: "",
      gender: "",
      dateOfBirth: "",
    });
  };

  const deleteEmployee = (emp) => {
    // console.log("deleteemployee")
    axios.delete("http://localhost:3003/labour_5/" + emp.id).then(() => {
      getDataFromServer();
    });
  };

  const [toBeEdit, setToBeEdit] = useState(false);
  const editEmployee = (emp) => {
    // console.log("editemployeee")
    setEmployee(emp);
    setToBeEdit(true);
  };

  const updateEmployee = () => {
    axios
      .put("http://localhost:3003/labour_5/" + employee.id, employee)
      .then(() => {
        getDataFromServer();
        clearForm();
        setToBeEdit(false);
      });
  };

  return (
    <div className="container border border-4">
      <form>
    
        <label htmlFor="">Id : </label>
        <input
          type="text"
          name="id"
          id=""
          value={employee.id}
          onChange={(e) => {
            handleChange(e);
          }}
          disabled
        />{" "}
        <br />
        <br />
        <label htmlFor="">Username : </label>
        <input
          type="text"
          name="userName"
          id=""
          value={employee.userName}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">Password : </label>
        <input
          type="text"
          name="password"
          id=""
          value={employee.password}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="">Email : </label>
        <input
          type="text"
          name="email"
          id=""
          value={employee.email}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        <label htmlFor="gender">Gender : </label>
        <select
          name="gender"
          id="gender"
          value={employee.gender}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="select">Select</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="others">others</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Date Of Birth : </label>
        <input
          type="date"
          name="dateOfBirth"
          id=""
          value={employee.dateOfBirth}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <br />
        {/* <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={addEmployee}
        >
          addEmployee
        </button> */}

        {toBeEdit ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateEmployee}
          >
            Update 
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={addEmployee}
          >
            Add 
          </button>
        )}
      </form>
      <table className="table table-striped">
        <thead className="bg-secondary text-dark">
          <tr>
            <td>Id</td>
            <td>UserName</td>
            <td>Password</td>
            <td>Email</td>
            <td>Gender</td>
            <td>DateOfBirth</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i}>
              <td>{emp.id}</td>
              <td>{emp.userName}</td>
              <td>{emp.password}</td>
              <td>{emp.email}</td>
              <td>{emp.gender}</td>
              <td>{emp.dateOfBirth}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    editEmployee(emp);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteEmployee(emp);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}