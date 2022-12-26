import React, { Component } from "react";
import axios from "axios";
export default class Form3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: {
        id: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
      allAddressDetails: [],
      editIndex: null,
    };
  }

  handleChange = (e) => {
    let newAddress = { ...this.state.address };
    newAddress[e.target.name] = e.target.value;
    this.setState({ address: newAddress });
  };

  addAddress = () => {
    axios
      .post("http://localhost:3001/address_3/", this.state.address)
      .then(() => {
        this.getDataFromServer();
        this.clearForm();
      });
  };
  clearForm = () => {
    let newForm = {
      id: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    };
    this.setState({ address: newForm });
  };

  deleteAddress = (adrs) => {
    axios.delete("http://localhost:3001/address_3/" + adrs.id).then(() => {
      this.getDataFromServer();
    });
  };
  editAddress = (adrs, i) => {
    this.setState({ address: adrs, editIndex: i });
  };
  updateAddress = () => {
    axios
      .put(
        "http://localhost:3001/address_3/" + this.state.address.id,
        this.state.address
      )
      .then(() => {
        this.getDataFromServer();
        this.setState({ editIndex: null });
        this.clearForm();
      });
  };
  render() {
    return (
      <>
        <div className="container">
          <form>
            <label htmlFor=""> Id : </label>
            <input
              type="text"
              className="mt-3"
              name="id"
              id=""
              value={this.state.address.id}
              onChange={(e) => {
                this.handleChange(e);
              }}
              disabled
            />{" "}
            <br />
            <label htmlFor=""> Street : </label>
            <input
              type="text"
              className="mt-3"
              name="street"
              id=""
              value={this.state.address.street}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor=""> City : </label>
            <input
              type="text"
              name="city"
              id=""
              value={this.state.address.city}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor=""> State : </label>
            <input
              type="text"
              name="state"
              id=""
              value={this.state.address.state}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor=""> Zipcode : </label>
            <input
              type="text"
              name="zipcode"
              id=""
              value={this.state.address.zipcode}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
            <label htmlFor=""> Country : </label>
            <input
              type="text"
              name="country"
              id=""
              value={this.state.address.country}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />{" "}
            <br /> <br />
          </form>
          {this.state.editIndex !== null ? (
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={this.updateAddress}
            >
              Update
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={this.addAddress}
            >
              Add
            </button>
          )}

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zipcode</th>
                <th>Country</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.allAddressDetails.map((adrs, i) => (
                <tr key={i}>
                  <td>{adrs.id}</td>
                  <td>{adrs.street}</td>
                  <td>{adrs.city}</td>
                  <td>{adrs.state}</td>
                  <td>{adrs.zipcode}</td>
                  <td>{adrs.country}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => {
                        this.editAddress(adrs, i);
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
                        this.deleteAddress(adrs);
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
    let respnose = await axios.get("http://localhost:3001/address_3/");
    this.setState({ allAddressDetails: respnose.data });
    console.log(respnose.data);
  };
}
