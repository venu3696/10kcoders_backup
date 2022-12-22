import React, { Component } from "react";

export default class Recipe extends Component {
  render() {
    return (
      <div >
        <div className="card" style={{width: "18rem"}}>
          <img src={this.props.image} classNames="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {this.props.title} </h5>
            <p className="card-text"> {this.props.summary}
            </p>
            <a href="javascript.com" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    );
  }
}
