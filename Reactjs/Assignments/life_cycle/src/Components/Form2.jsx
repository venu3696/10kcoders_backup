import axios from "axios";
import React, { Component } from "react";

export default class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      allUsers: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    let newUserInfo = { ...this.state.user };
    newUserInfo[e.target.name] = e.target.value;
    this.setState({ user: newUserInfo });
  };

  addUser =()=>{
    axios.post("http://localhost:3001/Users_2",this.state.user).then(()=>{
      this.getDataFromServer()
    })
  }
  clearForm = ()=>{
    let newForm ={
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
    this.setState({user:newForm})
  }

 deleteUser = (usr)=>{
  axios.delete("http://localhost:3001/Users_2/"+usr.id).then(()=>{
    this.getDataFromServer()
  })
 }
 editUser=(usr,i)=>{
  this.setState({user:usr,editIndex:i})
 }

 updateUser =()=>{
  axios.put(("http://localhost:3001/Users_2/"+this.state.user.id),this.state.user).then(()=>{
    this.getDataFromServer()
    this.setState({editIndex:null})
    this.clearForm()
  })
 }

  render() {
    return (
      <>
        <div className="container border border-2 m-2 justify-content-center">
          <form>
            <label htmlFor="id"></label>
            Id :
            <input
              type="text"
              name="id"
              value={this.state.user.id}
              id="id"
              onChange={(e) => {
                this.handleChange(e);
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
              value={this.state.user.name}
              id="name"
              onChange={(e) => {
                this.handleChange(e);
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
              value={this.state.user.username}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="email"></label>
            Email :
            <input
              type="email"
              name="email"
              value={this.state.user.email}
              id="email"
              onChange={(e) => {
                this.handleChange(e);
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
              value={this.state.user.password}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br />
            <br />
            <label htmlFor="confirmPassword"></label>
            Confirm password :
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              value={this.state.user.confirmPassword}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br />
            <br />
            <br />
            {/* <button
              type="button"
              onClick={this.addUser}
              className="btn btn-primary"
            >
              add user
            </button> */}
          </form>
          {this.state.editIndex  !== null ? (
           <button
            type="button"
            className="btn btn-primary"
            onClick={this.updateUser}
          >
            Update 
          </button>
        ):(
          <button
          type="button"
          onClick={this.addUser}
          className="btn btn-primary"
        >
          Add User
        </button>
        )}

<table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm password</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmPassword}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
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
                      this.deleteUser(usr);
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
    let response = await axios.get("http://localhost:3001/Users_2");
    this.setState({ allUsers: response.data });
    console.log(response.data)
  };
}