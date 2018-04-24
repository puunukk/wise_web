import React, { Component } from "react";
import { Container } from "../components/Wrapper";
import { Logo } from "../components/Images";

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
