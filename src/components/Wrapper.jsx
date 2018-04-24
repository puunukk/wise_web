import React, { Component } from "react";

export class Container extends Component {
  render() {
    return(
      <div className="container">
        { this.props.children }
      </div>
    );
  }
}

export class Row extends Component {
  render() {
    return(
      <div className="row">
        { this.props.children }
      </div>
    );
  }
}

export class Slope extends Component {
  render() {
    return(
      <div className="slope">
        { this.props.children }
      </div>
    );
  }
}
export class SlopeRight extends Component {
  render() {
    return (
      <div className="slope-right">
        {this.props.children}
      </div>
    );
  }
}
export class SlopeLeft extends Component {
  render() {
    return (
      <div className="slope-left">
        {this.props.children}
      </div>
    );
  }
}
