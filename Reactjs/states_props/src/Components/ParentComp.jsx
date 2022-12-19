import Header from "./Header"
import { Component } from "react";

class ParentComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      welcomeMessage: "Hello from Parent Component",
      employee: {
        fname: "venu",
        lname: "alakuntla",
        email: "venu@gmail.com",
      },
    };
  }
  changeMessage(){
    this.setState({welcomeMessage:"hello parent Component. I will change you"})
  }
  render() {
    return (
      <div>
        <h2>Welcome to Parent Component</h2>
        <Header message={this.state.welcomeMessage} handleChange = {this.changeMessage} />
      </div>
    );
  }
}
export default ParentComponent;
