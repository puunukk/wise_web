import React, { Component } from 'react';
import logo from './logo.svg';
import Head from "./views/Head";
import Section from "./views/Section";

class App extends Component {
  render() {
    return (
      <div class="mobile-overflow-wrapper">
        <Head />
        <Section />
      </div>
    );
  }
}

export default App;
