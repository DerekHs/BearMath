import React, { Component } from 'react';

import MatricesBank from "components/banks/matricesBank/MatricesBank"
import CompositeBank from "components/banks/compositeBank/CompositeBank"
import ControlPanel from "components/controlPanel/ControlPanel"

class MatrixGUI extends Component {

  render() {
    return (
      <div className="container">
        <section className="section">
          <MatricesBank />
        </section>
        <section className="section">
          <CompositeBank />
        </section>
        <section className="section">
          <ControlPanel />
        </section>
      </div>
    );
  }
}

export default MatrixGUI;
