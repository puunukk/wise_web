import React, { Component } from "react";
import { Container, Logo } from "../components/Wrapper";

export default class Head extends Component {
  render() {
    return (
      <header>
        <Container>
          <Logo />
        </Container>
      </header>
    )
  }
}
