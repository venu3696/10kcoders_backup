import { Component } from "react";

export default class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        avgCPI: "",
        blog: "",
      },
      allStudents: [
        {
          university: "Mahatma Gandhi University",
          institute: "Spandana",
          branch: "IT",
          degree: "PG",
          status: "Completed",
          avgCPI: "9.3",
          blog: "Venu@123.com",
        },
      ],

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
    // console.log("add students ..")
    let getStudent = [...this.state.allStudents];
    getStudent.push(this.state.student);
    this.setState({ allStudents: getStudent });
    this.clearForm();
  };

  clearForm = () => {
    let newStudents = {
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      avgCPI: "",
      blog: "",
    };
    this.setState({ student: newStudents });
  };
  deleteStudent = (std) => {
    let delStudents = this.state.allStudents.filter(
      (mystd) => mystd.university !== std.university
    );
    this.setState({ allStudents: delStudents });
  };
  editStudents = (std, i) => {
    this.setState({ student: std, editIndex: i });
  };

  updateStudent = () => {
    let latestStudents = [...this.state.allStudents];
    latestStudents[this.state.editIndex] = this.state.student;
    this.setState({ allStudents: latestStudents });
  };

  render() {
    return (
      <>
        <div className="container border border-2">
          <form>
            <label htmlFor="">University : </label>
            <input
              type="text"
              name="university"
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
              value={this.state.student.institute}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor="">Branch : </label>
            <select
              name="branch"
              value={this.state.student.branch}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">Select</option>
              <option value="CSE">CSE</option>
              <option value="IT"> IT</option>
              <option value="ECE">ECE</option>
              <option value="EEE">EEE</option>
            </select>
            <br /> <br />
            <label htmlFor="">Degree</label>
            <select
              name="degree"
              value={this.state.student.degree}
              onChange={(e) => {
                this.handleChange(e);
              }}
            >
              <option value="select">Select</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
            <br /> <br />
            <label htmlFor="">Status :</label>
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
            Completed <br />
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
            Pursuing <br /> <br />
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
              UpdateStudent
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.addStudent}
            >
              AddStudent
            </button>
          )}

          <table className="table table-striped">
            <thead className=" bg-secondary text-dark">
              <tr>
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
              {this.state.allStudents.map((std, i) => (
                <tr key={i}>
                  <td>{std.university}</td>
                  <td>{std.institute}</td>
                  <td>{std.branch}</td>
                  <td>{std.degree}</td>
                  <td>{std.status}</td>
                  <td>{std.avgCPI}</td>
                  <td>{std.blog}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning "
                      onClick={() => {
                        this.editStudents(std, i);
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
                        this.deleteStudent(std);
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
