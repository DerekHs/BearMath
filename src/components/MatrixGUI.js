import React, { Component } from 'react';

import MatricesBank from "components/matricesBank/MatricesBank"
import CreateMatrix from "components/createMatrix/CreateMatrix"
import ControlPanel from "components/controlPanel/ControlPanel"
import GeneratedCode from "components/generatedCode/GeneratedCode"

class MatrixGUI extends Component {

  render() {
    return (
      <div className="columns">
        <div className="column is-two-thirds">
          <section className="section">
            <CreateMatrix />
          </section>
          <section className="section">
            <MatricesBank />
          </section>
          <section className="section">
            <ControlPanel />
          </section>
        </div>
        <div className="column">
          <GeneratedCode />
        </div>
      </div>
    );
  }
}

export default MatrixGUI;
