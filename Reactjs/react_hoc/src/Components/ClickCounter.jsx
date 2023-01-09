import React, { Component } from "react";
import HOComponent from "./HOComponent";

 class ClickCounter extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
       <button onClick={this.props.handleIncrement}>Click </button>
       <h2>You Clicked {this.props.count} times !!</h2>
      </div>
    );
  }
}

export default HOComponent(ClickCounter)