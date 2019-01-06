import React, { Component } from 'react';

import MatrixGUI from "components/MatrixGUI"
import Navbar from "components/navbar/Navbar"

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <MatrixGUI />
      </div>
    );
  }
}

export default App;
