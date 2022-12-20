import React, { Component } from "react";
import ImageComponent from "./ImageComponent";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome to Life Cycles",
      showImage: true,
    };
    console.log("LifeCycleA Constructor Triggered !!");
  }
  changeMessage = () => {
    this.setState({
      message: "This Message will Change from Welcome to Life Cycle A !!",
    });
  };
  showHideImage = () => {
    this.setState({ showImage: !this.state.showImage });
  };
  render() {
    console.log("LifeCycleA render Triggered !!");

    return (
      <div>
        <button onClick={this.changeMessage}>Get Values From Server</button>
        <LifeCycleB msg={this.state.message} />
        <button onClick={this.showHideImage}>Show/Hide</button>
        {this.state.showImage && <ImageComponent />}
      </div>
    );
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount Triggered !!");
  }
}

// Component Mounting Phase
// 1. Constructor
// 2. Render
// 3. Component Did Mount

// Component Update Phase
// 1. shouldComponentUpdate
// 2. Render
// 3. componentDidUpdate

// Component Unmountning Phase 
// 1. componentWillUnmount

// fetch 
// axios 