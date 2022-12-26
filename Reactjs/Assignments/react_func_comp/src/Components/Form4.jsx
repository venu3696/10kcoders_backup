import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Form4() {
  const [person, setPerson] = useState({
    id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    mobile: "",
  });

  const [persons, setPersons] = useState([]);

  const handleChange = (e) => {
    let Person1 = { ...person };
    Person1[e.target.name] = e.target.value;
    setPerson(Person1);
  };
  useEffect(() => {
    getAllPersons();
  }, []);

  const getAllPersons = () => {
    axios.get("http://localhost:3003/datails_4/").then((res) => {
      console.log(res.data);
      setPersons(res.data);
    });
  };
  const sumbit = () => {
    axios.post("http://localhost:3003/datails_4/", person).then(() => {
      getAllPersons();
      clearForm();
    });
  };

  const clearForm = () => {
    setPerson({
      id: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      mobile: "",
    });
  };
  const [toBeEdited, setToBeEdited] = useState(false);
  const deletePerson = (prs) => {
    axios.delete("http://localhost:3003/datails_4//" + prs.id).then(() => {
      getAllPersons();
    });
  };
  const editPerson = (prs) => {
    setPerson(prs);
    setToBeEdited(true);
  };
  const updatePerson = () => {
    axios
      .put("http://localhost:3003/datails_4//" + person.id, person)
      .then(() => {
        getAllPersons();
        setToBeEdited(false);
        clearForm();
      });
  };

  return (
    <>
      <div className="container">
      

        <form>
          <div className="my-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Id:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="id"
              value={person.id}
              onChange={(e) => {
                handleChange(e);
              }}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="firstName"
              value={person.firstName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              name="lastName"
              value={person.lastName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of Birth:
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputEmail1"
              name="dateOfBirth"
              value={person.dateOfBirth}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={person.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mobile:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="mobile"
              value={person.mobile}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>

          {/* <button type="button" onClick={sumbit} className="btn btn-primary">
            Submit
          </button> */}
          {toBeEdited ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={updatePerson}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={sumbit}
            >
              Sumbit
            </button>
          )}
        </form>
      </div>
      <table className="table table-striped container my-3 ">
        <thead className="bg-dark  text-warning">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th> Data of Birth</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((prs, i) => (
            <tr key={i}>
              <td>{prs.id}</td>
              <td>{prs.firstName}</td>
              <td>{prs.lastName}</td>
              <td>{prs.dateOfBirth}</td>
              <td>{prs.email}</td>
              <td>{prs.mobile}</td>
              <td>
                <button
                  type="button "
                  className="btn btn-warning"
                  onClick={() => {
                    editPerson(prs);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  type="button "
                  className="btn btn-danger"
                  onClick={() => {
                    deletePerson(prs);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {console.log("form body ", persons)}
        </tbody>
      </table>
    </>
  );
}
