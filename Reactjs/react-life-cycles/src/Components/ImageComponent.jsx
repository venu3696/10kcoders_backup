import React, { Component } from "react";

export default class ImageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681__480.jpg"
          alt=""
          width={100}
        />
      </div>
    );
  }
  componentWillUnmount() {
    console.log("This component is going to be remover from DOM");
  }
}
