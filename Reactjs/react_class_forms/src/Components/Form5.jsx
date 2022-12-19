import React, { Component } from "react";

export default class Form5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empInfo: {
        userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
      },
      allEmployees: [
        {
          userName: "Sampath",
          password: "88979",
          email: "sampath@gmail.com",
          gender: "male",
          dateOfBirth: "21/01/2000",
        },
      ],
      editIndex:null,
    };
  }
  handleChange = (e) => {
    let getEmployee = { ...this.state.empInfo };
    getEmployee[e.target.name] = e.target.value;
    this.setState({ empInfo: getEmployee });
  };

  addEmployee = ()=>{
    let newEmployee = [...this.state.allEmployees]
    newEmployee.push(this.state.empInfo)
    this.setState({allEmployees:newEmployee})
    this.clearForm()
  }
  clearForm = ()=>{
    let getNewEmployee ={
      userName: "",
        password: "",
        email: "",
        gender: "",
        dateOfBirth: "",
    }
    this.setState({empInfo:getNewEmployee})
  }

  deleteEmployee = (emp)=>{
    let delEmployee = this.state.allEmployees.filter((myEmp)=>myEmp.userName !== emp.userName)
    this.setState({allEmployees:delEmployee})
  }

  editEmployee = (emp,i)=>{
    this.setState({empInfo:emp,editIndex:i})
  }

  updateEmployee = ()=>{
    let latestEmployee = [...this.state.allEmployees]
    latestEmployee[this.state.editIndex] =this.state.empInfo
    this.setState({allEmployees:latestEmployee})
  }
  render() {
    return (
      <>
        <div className="container border border-3">
          <form>
            <label htmlFor="">Username : </label>
            <input
              type="text"
              name="userName"
              id=""
              value={this.state.empInfo.userName}
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
              value={this.state.empInfo.password}
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
              value={this.state.empInfo.email}
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
              value={this.state.empInfo.gender}
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
            <label htmlFor="">Date Of Birth : </label>
            <input
              type="date"
              name="dateOfBirth"
              id=""
              value={this.state.empInfo.dateOfBirth}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            {/* <button
              type="button"
              className="btn btn-primary mb-3"
              onClick={this.addEmployee}
            >
              addEmployee
            </button> */}
          </form>
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
            Add
          </button>
          )}

          <table className="table table-striped">
            <thead >
              <tr>
                <td>User Name</td>
                <td>Password</td>
                <td>Email</td>
                <td>Gender</td>
                <td>Date Of Birth</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {this.state.allEmployees.map((emp, i) => (
                <tr key={i}>
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
        </div>
      </>
    );
  }
}