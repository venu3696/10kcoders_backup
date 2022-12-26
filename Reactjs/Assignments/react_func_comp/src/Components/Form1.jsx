import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Form1() {
  const [student, setStudent] = useState({
    id: "",
    university: "",
    institute: "",
    branch: "",
    degree: "",
    status: "",
    avgCPI: "",
    blog: "",
  });

  const [students, setStudents] = useState([]);
  useEffect(() => {
    getDataFromServer();
  }, []);

  const handleChange = (e) => {
    let newStudent = { ...student };
    newStudent[e.target.name] = e.target.value;
    setStudent(newStudent);
  };
  const getDataFromServer = () => {
    axios.get("http://localhost:3003/students_1/").then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  };
  useEffect(() => {
    getDataFromServer();
  }, []);
  const [tobeEdit, setToBeEdit] = useState(false);
  const editStudent = (std) => {
    // console.log("editstudent")
    setStudent(std);
    setToBeEdit(true);
  };

  const updateStudent = () => {
    axios
      .put("http://localhost:3003/students_1/" + student.id, student)
      .then(() => {
        getDataFromServer();
        clearForm();
        setToBeEdit(false);
      });
  };
  const addStudent = () => {
    // console.log("addstudent")
    axios.post("http://localhost:3003/students_1/", student).then(() => {
      getDataFromServer();
      clearForm();
    });
  };
  const clearForm = () => {
    setStudent({
      id: "",
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      avgCPI: "",
      blog: "",
    });
  };
  const deleteStudent = (std) => {
    // console.log("deletestudent")
    axios.delete("http://localhost:3003/students_1/" + std.id).then(() => {
      getDataFromServer();
    });
  };
  return (
    <div className="container border border-3">
      <form>
        <label htmlFor="">Id : </label>
        <input
          type="text"
          name="id"
          id=""
          value={student.id}
          onChange={(e) => {
            handleChange(e);
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
          value={student.university}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor="">Institute : </label>
        <input
          type="text"
          name="institute"
          id=""
          value={student.institute}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor="">Branch : </label>
        <select
          name="branch"
          id=""
          value={student.branch}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="select">Select</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
        </select>
        <br /> <br />
        <label htmlFor="">Degree</label>
        <select
          name="degree"
          id=""
          value={student.degree}
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="select">Select</option>
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
            handleChange(e);
          }}
          checked={student.status === "completed"}
          id=""
        />{" "}
        completed <br />
        <input
          type="radio"
          name="status"
          value="pursuing"
          onChange={(e) => {
            handleChange(e);
          }}
          checked={student.status === "pursuing"}
          id=""
        />{" "}
        pursuing <br /> <br />
        <label htmlFor="">Cpi : </label>
        <input
          type="text"
          name="avgCPI"
          id=""
          value={student.avgCPI}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor="">Blog : </label>
        <input
          type="text"
          name="blog"
          id=""
          value={student.blog}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        {/* <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={addStudent}
            >
              addStudent
            </button> */}
        {tobeEdit ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={updateStudent}
          >
            Update
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={addStudent}
          >
            Add
          </button> 
        )}
      </form> <br />
      <table className="table table-striped ">
        <thead className=" bg-secondary text-dark">
          <tr>
            <td>Id:</td>
            <td>University</td>
            <td>Institute</td>
            <td>Branch</td>
            <td>Degree</td>
            <td>Status</td>
            <td>Avg CPI</td>
            <td>Blog</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>

        <tbody>
          {students.map((std, i) => (
            <tr key={i}>
              <td>{std.id}</td>
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
                  className="btn btn-warning"
                  onClick={() => {
                    editStudent(std);
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
                    deleteStudent(std);
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
