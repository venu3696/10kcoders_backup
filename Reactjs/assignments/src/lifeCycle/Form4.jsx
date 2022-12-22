import axios from "axios";
import React, { Component } from "react";

export default class Form4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        id: "",
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        mobile: "",
      },
      allData: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    let getdata = { ...this.state.data };
    getdata[e.target.name] = e.target.value;
    this.setState({ data: getdata });
  };

  addData =()=>{
    axios.post("http://localhost:3001/datails_4/",this.state.data).then(()=>{
      this.getDataFromServer()
      this.clearForm()
    })
  }
  clearForm =()=>{
    let newForm ={
      id: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      mobile: "",
    }
    this.setState({data:newForm})
  }
  deleteData =(dt)=>{
    axios.delete("http://localhost:3001/datails_4/"+dt.id).then(()=>{
      this.getDataFromServer()
    })
  }
  editData = (dt,i)=>{
    this.setState({data:dt,editIndex:i})
  }
  updateData =()=>{
    axios.put(("http://localhost:3001/datails_4/"+this.state.data.id),this.state.data).then(()=>{
      this.getDataFromServer()
      this.setState({editIndex:null})
      this.clearForm()
    })
  }

  render() {
    return (
      <>
        <div className="  border border-2  p-2 container">
          <form>
            <label>Id :</label>
            <input
              type="text"
              name="id"
              id="id"
              value={this.state.data.id}
              onChange={(e) => {
                this.handleChange(e);
              }}
              disabled
            />{" "}
            <br />
            <br />
            <label>First name :</label>
            <input
              type="text"
              name="firstName"
              id=""
              value={this.state.data.firstName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label>Last name :</label>
            <input
              type="text"
              name="lastName"
              id=""
              value={this.state.data.lastName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <label>Date of birth :</label>
            <input
              type="date"
              name="dateOfBirth"
              id=""
              value={this.state.data.dateOfBirth}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label>Email :</label>
            <input
              type="text"
              name="email"
              id=""
              value={this.state.data.email}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label>Mobile :</label>
            <input
              type="tel"
              name="mobile"
              id=""
              value={this.state.data.mobile}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            {/* <button
              type="button"
              className="btn btn-primary"
              onClick={this.addData}
            >
              addData
            </button> */}
          </form>

          {this.state.editIndex !== null ? (
            <button type="button" className="btn btn-primary" onClick={this.updateData}>update Data</button>
          ):(
            <button
            type="button"
            className="btn btn-primary"
            onClick={this.addData}
          >
            ADD
          </button>
          )}

<table className="table table-striped">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>DateOfBirth</th>
              <th>Mail</th>
              <th>Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allData.map((dt, i) => (
              <tr key={i}>
                <td>{dt.id}</td>
                <td>{dt.firstName}</td>
                <td>{dt.lastName}</td>
                <td>{dt.dateOfBirth}</td>
                <td>{dt.email}</td>
                <td>{dt.mobile}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editData(dt, i);
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
                      this.deleteData(dt);
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

  componentDidMount() {
    this.getDataFromServer();
  }

  getDataFromServer = async () => {
    let response = await axios.get("http://localhost:3001/datails_4/");

    this.setState({ allData: response.data });
    console.log(response.data);
  };
}