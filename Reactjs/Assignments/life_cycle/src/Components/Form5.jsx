import React, { Component } from "react";
import axios from "axios";

export default class Form5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employee: {
        id: "",
        userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
      },
      allEmployees: [],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let getEmployee = { ...this.state.employee };
    getEmployee[e.target.name] = e.target.value;
    this.setState({ employee: getEmployee });
  };
  addEmployee =()=>{
    axios.post("http://localhost:3001/labour_5/",this.state.employee).then(()=>{
      this.getDatafromServer()
      this.clearForm()
    })
  }
  clearForm =()=>{
    let newForm ={
      id: "",
        userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
    }
    this.setState({employee:newForm})
  }

  deleteEmployee =(emp)=>{
    axios.delete("http://localhost:3001/labour_5/"+emp.id).then(()=>{
      this.getDatafromServer()
    })
  }

  editEmployee =(emp,i)=>{
    this.setState({employee:emp,editIndex:i})
  }

  updateEmployee =()=>{
    axios.put(("http://localhost:3001/labour_5/"+this.state.employee.id),this.state.employee).then(()=>{
      this.getDatafromServer()
      this.clearForm()
    })
  }

  

  render() {
    return (
      <>
        <form>
          <div className="container my-3  ">
            <label htmlFor="">Id : </label>
            <input
              type="text"
              name="id"
              id=""
              value={this.state.employee.id}
              onChange={(e) => {
                this.handleChange(e);
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
              value={this.state.employee.userName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="">Password : </label>
            <input
              type="text"
              name="password"
              id=""
              value={this.state.employee.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="">Email : </label>
            <input
              type="text"
              name="email"
              id=""
              value={this.state.employee.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label htmlFor="gender">Gender : </label>
            <select
              name="gender"
              id="gender"
              value={this.state.employee.gender}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            <br />
            <br />
            <label htmlFor="">Date of Birth : </label>
            <input
              type="date"
              name="dateOfBirth"
              id=""
              value={this.state.employee.dateOfBirth}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
           
          </div>
        </form>
        <div className="container">
        {this.state.editIndex !== null  ? (
             <button
             type="button"
             className="btn btn-primary mb-3"
             onClick={this.updateEmployee}
           >
            Update
           </button>
          ):(
            <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={this.addEmployee}
          >
            ADD
          </button>
          )}
        </div>

        <table className="table table-striped container">
            <thead>
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
              {this.state.allEmployees.map((emp, i) => (
                <tr key={i}>
                  <td>{emp.id}</td>
                  <td>{emp.userName}</td>
                  <td>{emp.password}</td>
                  <td>{emp.email}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.dateOfBirth}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        this.editEmployee(emp, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteEmployee(emp);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </>
    );
  }

  componentDidMount() {
    this.getDatafromServer();
  }

  getDatafromServer = async () => {
    let response = await  axios.get("http://localhost:3001/labour_5/");
    this.setState({ allEmployees: response.data });
    console.log(response.data);
  };
}