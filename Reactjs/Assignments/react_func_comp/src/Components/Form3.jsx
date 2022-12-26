import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Form3() {
  const [address, setAddress] = useState({
    id: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  });
  const [totalAddress, setTotalAddress] = useState([]);

  const handleChange = (e) => {
    let newAddress = { ...address };
    newAddress[e.target.name] = e.target.value;
    setAddress(newAddress);
  };
  useEffect(() => {
    getDataFromServer();
  }, []);
  const getDataFromServer = () => {
    axios.get("http://localhost:3003/address_3/").then((res) => {
      console.log(res.data);
      setTotalAddress(res.data);
    });
  };

  const addAddress = () => {
    // console.log("adress added");
    axios.post("http://localhost:3003/address_3/", address).then(() => {
      getDataFromServer();
      clearForm();
    });
  };

  const clearForm = () => {
    setAddress({
      id: "",
      street: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
    });
  };
  const [toBeEdit, setToBeEdit] = useState(false);

  const deleteAddress = (adrs) => {
    // console.log("deleteAddresss")
    axios.delete("http://localhost:3003/address_3/" + adrs.id).then(() => {
      getDataFromServer();
    });
  };
  const editAddress = (adrs) => {
    // console.log("editAddress")
    setAddress(adrs);
    setToBeEdit(true);
  };

  const updateAddress = () => {
    // console.log("updateAddress")
    axios
      .put("http://localhost:3003/address_3/" + address.id, address)
      .then(() => {
        getDataFromServer();
        clearForm();
        setToBeEdit(false)
      });
  };
  return (
    <div>
      <form className="container">

        <label htmlFor=""> Id : </label>
        <input
          type="text"
          className="mt-3"
          name="id"
          id=""
          value={address.id}
          onChange={(e) => {
            handleChange(e);
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
          value={address.street}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor=""> City : </label>
        <input
          type="text"
          name="city"
          id=""
          value={address.city}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor=""> State : </label>
        <input
          type="text"
          name="state"
          id=""
          value={address.state}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor=""> Zipcode : </label>
        <input
          type="text"
          name="zipcode"
          id=""
          value={address.zipcode}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        <label htmlFor=""> Country : </label>
        <input
          type="text"
          name="country"
          id=""
          value={address.country}
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br /> <br />
        {/* <button type="button" className="btn btn-primary" onClick={addAddress}>
          add adresss
        </button> */}
        {toBeEdit ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={updateAddress}
          >
            Update 
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary"
            onClick={addAddress}
          >
            Add 
          </button>
        )}
      </form>
      <br />
      <table className="table container table-striped">
        <thead className="bg-secondary text-dark">
          <tr>
            <td>Id</td>
            <td>Street</td>
            <td>City</td>
            <td>Zip code</td>
            <td>Country</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {totalAddress.map((adrs, i) => (
            <tr key={i}>
              <td>{adrs.id}</td>
              <td>{adrs.street}</td>
              <td>{adrs.city}</td>
              <td>{adrs.zipcode}</td>
              <td>{adrs.country}</td>
              <td>
                <button
                  className="btn btn-warning "
                  type="button"
                  onClick={() => {
                    editAddress(adrs);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger "
                  type="button"
                  onClick={() => {
                    deleteAddress(adrs);
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