import React, { Component } from 'react';

import MatricesBank from "components/matricesBank/MatricesBank"
import ControlPanel from "components/controlPanel/ControlPanel"

class MatrixGUI extends Component {

  render() {
    return (
      <div className="container">
        <section className="section">
          <MatricesBank />
        </section>
        <section className="section">
          <ControlPanel />
        </section>
      </div>
    );
  }
}

export default MatrixGUI;
