import React, { Component } from 'react';

import ValueBank from "components/bank/ValueBank"
import ControlPanel from "components/controlPanel/ControlPanel"

class MatrixGUI extends Component {

  render() {
    return (
      <div className="container">
        <section className="section">
          <ControlPanel />
        </section>
        <section className="section">
          <ValueBank />
        </section>,
      </div>
    );
  }
}

export default MatrixGUI;
