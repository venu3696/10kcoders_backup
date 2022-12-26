
// how to Change person details in object

import { useState } from "react";

export const Person = () => {
  // useState will give you an Array
  // we are going to destructure the Array
  const [person, setPerson] = useState({
    fname: "venu",
    lname: "kumar",
    email: " venu@gmail.com",
  });

  const changePersonDetails = () => {
// setPerson({...person,lname:"sampath"}) 
let newPerson = {...person};
newPerson['lname']= "hari"
setPerson(newPerson)
 };

  return (
    <div>
      <h2>Hello from person Component</h2>
      <button onClick={changePersonDetails}>changePerson</button>
      <ul>
        <li>{person.fname}</li>
        <li>{person.lname} </li>
        <li>{person.email} </li>
      </ul>
    </div>
  );
};
