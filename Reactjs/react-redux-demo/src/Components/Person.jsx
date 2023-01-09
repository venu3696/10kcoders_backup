import React, { Component } from "react";
import { connect } from "react-redux";
import { addPersonAction} from "../Store/Actions";

 class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
    };
    console.log(this.props);
  }

  handleChange = (e) => {
    let newUser = {...this.state};
    newUser[e.target.name]=e.target.value;
    this.setState(newUser)
  };

  addPerson=()=>{
    console.log(this.state)
    this.props.addPerson(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
          <form>
          <label htmlFor="First Name"> First Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          /> <br />
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          /> <br />
          <button type="button" onClick={this.addPerson} className='btn btn-primary'>
            {" "}
            Add User
          </button> 
        </form>
          </div>
          <div className="col-8" >
          <table class="table">
  <thead>
    <tr>
      
      <th >First Name</th>
      <th >Last Name</th>
      <th >Email</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
   
  </tbody>
</table>
          </div>
           </div>       
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    allPersons: state.persons
  }
}
function mapDispatchToProps(dispatch){
  return{
    addPerson:(person)=> dispatch(addPersonAction(person))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Person)