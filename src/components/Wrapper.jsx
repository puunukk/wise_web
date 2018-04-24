import React, { Component } from "react";
import logo from "../components/wisemedia_logo.svg";

export class Container extends Component {
  render() {
    return(
      <div className="container">
        { this.props.children }
      </div>
    )
  }
}

export class Row extends Component {
  render() {
    return(
      <div className="row">
        { this.props.children }
      </div>
    )
  }
}

export class Slope extends Component {
  render() {
    return(
      <div className="slope">
        { this.props.children }
      </div>
    )
  }
}

export class Logo extends Component {
  render() {
    return (
      <a class="wm-brand" herf="/">
        <img src={logo} alt="Wisemedia white" />
      </a>
    );
  }
}