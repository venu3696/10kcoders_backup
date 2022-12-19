import { Component } from "react";

class Employee extends Component{
    constructor(){
        super()
        this.state = {
            employeeDetails:{
                empName: "Sampath",
                empEmail: "sam222@gmail.com",
                empRole:  "Developer"
            },
            showEmployee:false
        }
    }
    showEmpDetails=()=> {
        console.log("show employee info")
        this.setState({showEmployee:true})
    }
    render(){
        return ( 
            <div>
            <h2> Welcome to Employee details </h2>
        <button onClick={this.showEmpDetails}> Show Employee Details </button>
        {this.state.showEmployee && <p> {this.state.employeeDetails.empName}</p> }
      </div> 
       );
    }
}
export default Employee