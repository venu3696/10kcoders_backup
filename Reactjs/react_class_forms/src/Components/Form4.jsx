import React, { Component } from "react";

export default class Form4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        email: "",
        mobile: "",
      },
      allData: [
        {
          firstName: "Venu",
          lastName: "Alakuntla",
          dateOfBirth: "16/12/1999",
          email: "venu@gmail.com",
          mobile: "7095701477",
        },
      ],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let getdata = { ...this.state.data };
    getdata[e.target.name] = e.target.value;
    this.setState({ data: getdata });
  };
  addData = () => {
    let latestData = [...this.state.allData];
    latestData.push(this.state.data);
    this.setState({ allData: latestData });
    this.clearForm();
  };

  clearForm = () => {
    let newData = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      mobile: "",
    };
    this.setState({ data: newData });
  };

  deleteData = (dt)=>{
    let delData = this.state.allData.filter(( myData)=> myData.firstName !== dt.firstName)
    this.setState({allData:delData})
  }

  editData =(dt,i)=>{
    this.setState({data:dt,editIndex:i})
  }
  updateData = ()=>{
    let getSomeData = [...this.state.allData]
    getSomeData[this.state.editIndex]=this.state.data
    this.setState({allData:getSomeData})
  }

  render() {
    return (
      <>
        <div className="  border border-2  p-2">
          <form>
            <label>First Name :</label>
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
            <label>Date of Birth :</label>
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
            
          </form>

          {this.state.editIndex !== null ? (
            <button type="button" className="btn btn-primary" onClick={this.updateData}>Update</button>
          ):(
            <button
            type="button"
            className="btn btn-primary"
            onClick={this.addData}
          >
            Add Data
          </button>
          )}
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allData.map((dt, i) => (
              <tr key={i}>
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
      </>
    );
  }
}