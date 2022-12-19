import React, { Component } from "react";

export default class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: "",
      },
      allUserInfo: [
        {
          name: "Venu",
          username: "venu3696",
          email: "venu123@gmail.com",
          password: "33125",
          confirmPassword: "33125",
          message: "Creating account",
        },
      ],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let newUserInfo = { ...this.state.userInfo };
    newUserInfo[e.target.name] = e.target.value;
    this.setState({ userInfo: newUserInfo });
  };

  addUserInfo = () => {
    console.log("call add userInfo");
    let newUsers = [...this.state.allUserInfo];
    newUsers.push(this.state.userInfo);
    this.setState({ allUserInfo: newUsers });
    this.clearform();
  };

  clearform = () => {
    let newForm = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
    };
    this.setState({ userInfo: newForm });
  };

  deleteUser = (usr) => {
    let latestUser = this.state.allUserInfo.filter(
      (myusr) => myusr.name !== usr.name
    );
    this.setState({ allUserInfo: latestUser });
  };
  editUser = (usr, i) => {
    this.setState({ userInfo: usr, editIndex: i });
    console.log(" Call Edit user ");
  };

  updateUser = () => {
    let latestAllusers = [...this.state.allUserInfo];
    latestAllusers[this.state.editIndex] = this.state.userInfo;
    this.setState({ allUserInfo: latestAllusers });
  };

  render() {
    return (
      <>
        <div className="container border border-2 m-2 justify-content-center">
          <form>
            <label htmlFor="name"></label>
            Name :
            <input
              type="text"
              name="name"
              value={this.state.userInfo.name}
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
              value={this.state.userInfo.username}
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
              value={this.state.userInfo.email}
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
              value={this.state.userInfo.password}
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
              value={this.state.userInfo.confirmPassword}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <br /> <br />
            <label htmlFor="message">Message :</label>
            <input
              type="text"
              name="message"
              id="message"
              value={this.state.userInfo.message}
            />{" "}
            <br />
            <br />
            <br />
            {/* <button
              type="button"
              onClick={this.addUserInfo}
              className="btn btn-primary"
            >
              add userInfo
            </button> */}
          </form>
          {this.state.editIndex !== null ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.updateUser}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              onClick={this.addUserInfo}
              className="btn btn-primary"
            >
              Add User
            </button>
          )}
          <br /> <br />
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm password</th>
              <th>Message</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUserInfo.map((usr, i) => (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.confirmPassword}</td>
                <td>{usr.message}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    edit
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
      </>
    );
  }
}
