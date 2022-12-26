import React, { Component } from "react";
import axios from "axios";

export default class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        id: "",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        avgCPI: "",
        blog: "",
      },
      allStudents: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    let getStudents = { ...this.state.student };
    getStudents[e.target.name] = e.target.value;
    if (e.target.name === "status") {
      this.setState({ status: e.target.value });
    }
    this.setState({ student: getStudents });
  };

  addStudent = () => {
    axios
      .post("http://localhost:3001/students_1/", this.state.student)
      .then(() => {
        this.getDataFromServer();
        this.clearForm();
      });
  };
  clearForm = () => {
    let newForm = {
      id: "",
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      avgCPI: "",
      blog: "",
    };
    this.setState({ student: newForm });
  };
  deleteStudent = (stu) => {
    axios.delete("http://localhost:3001/students_1/" + stu.id).then(() => {
      this.getDataFromServer();
    });
  };
  editStudents = (stu, i) => {
    this.setState({ student: stu, editIndex: i });
  };

  updateStudent = () => {
    axios
      .put(
        "http://localhost:3001/students_1/" + this.state.student.id,
        this.state.student
      )
      .then(() => {
        this.getDataFromServer();
        this.clearForm();
      });
  };

  render() {
    return (
      <>
        <div className="container border border-2 my-3">
          <form>
            <label htmlFor="">Id : </label>
            <input
              type="text"
              name="id"
              id=""
              value={this.state.student.id}
              onChange={(e) => {
                this.handleChange(e);
              }}
              className="my-3"
              disabled
            />{" "}
            <br /> <br />
            <label htmlFor="">University : </label>
            <input
              type="text"
              name="university"
              id=""
              value={this.state.student.university}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">Institute : </label>
            <input
              type="text"
              name="institute"
              id=""
              value={this.state.student.institute}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">Branch : </label>
            <select
              name="branch"
              id=""
              value={this.state.student.branch}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">Select</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
              <option value="ME">ME</option>
            </select>
            <br /> <br />
            <label htmlFor="">Degree</label>
            <select
              name="degree"
              id=""
              value={this.state.student.degree}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">select</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
            <br /> <br />
            <label htmlFor="">Status :</label>
            <br />
            <input
              type="radio"
              name="status"
              value="completed"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.student.status === "completed"}
              id=""
            />{" "}
            completed <br />
            <input
              type="radio"
              name="status"
              value="pursuing"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.student.status === "pursuing"}
              id=""
            />{" "}
            pursuing <br /> <br />
            <label htmlFor="">CPI : </label>
            <input
              type="text"
              name="avgCPI"
              id=""
              value={this.state.student.avgCPI}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">Blog : </label>
            <input
              type="text"
              name="blog"
              id=""
              value={this.state.student.blog}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
          </form>

          {this.state.editIndex !== null ? (
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.updateStudent}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.addStudent}
            >
              Add
            </button>
          )}

          <table className="table table-striped">
            <thead className=" bg-secondary text-dark">
              <tr>
                <th>id</th>
                <th>University</th>
                <th>Institute</th>
                <th>Branch</th>
                <th>Degree</th>
                <th>Status</th>
                <th>AvgCPI</th>
                <th>Blog</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allStudents.map((stu, i) => (
                <tr key={i}>
                  <td>{stu.id}</td>
                  <td>{stu.university}</td>
                  <td>{stu.institute}</td>
                  <td>{stu.branch}</td>
                  <td>{stu.degree}</td>
                  <td>{stu.status}</td>
                  <td>{stu.avgCPI}</td>
                  <td>{stu.blog}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning "
                      onClick={() => {
                        this.editStudents(stu, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger "
                      onClick={() => {
                        this.deleteStudent(stu);
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
    let response = await axios.get("http://localhost:3001/students_1");
    this.setState({ allStudents: response.data });
    console.log(response.data);
  };
}
