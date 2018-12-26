import React, { Component } from 'react';

import MatricesBank from "components/matrices/MatricesBank"
import CreateMatrix from "components/modal/CreateMatrix"
import ControlPanel from "components/controlPanel/ControlPanel"

class MatrixGUI extends Component {

  render() {
    return (
      <div>
        <section className="section">
            <CreateMatrix/>
        </section>
        <section className="section">
          <MatricesBank/>
        </section>
        <section className="section">
          <ControlPanel/>
        </section>
      </div>
    );
  }
}

export default MatrixGUI;
