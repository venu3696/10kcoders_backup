
// how to delete the values in an Array

import React, { useState } from "react";

export const Employees = () => {
  const [emps, setEmps] = useState(["Santhosh", "Uppi", "Naresh", "Pawan"]);

  const handleDelete = (emp) => {
    // let newEmployees = emps.filter((employ)=>  employ !== emp)
    // setEmps(newEmployees)
    // or
    // let newEmployee = [...emps]
    // let filteredEmployees = newEmployee.filter((employee)=> employee !== emp)
    // setEmps(filteredEmployees)
    // or
    //  emp.filter  returs an Array
    setEmps(emps.filter((employ) => employ !== emp));

    console.log("handleDelete called...!!!");
  };
  return (
    <div>
      <ul>
        {emps.map((emp, i) => (
          <li key={i} style={{ margin: 10 }}>
            {emp}{" "}
            <span
              style={{
                color: "red",
                border: "1px solid red",
                margin: 20,
                cursor: "pointer",
                borderRadius: "50%",
              }}
                 onClick={()=>{handleDelete(emp)}}
              // or
              //onClick={() => setEmps(emps.filter((employ) => employ !== emp))}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Employees;
