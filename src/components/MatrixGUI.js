import React, { Component } from 'react';

import ValueBank from "components/bank/ValueBank"
import ControlPanel from "components/controlPanel/ControlPanel"

class MatrixGUI extends Component {

  render() {
    return (
      <div className="container">
        <br/>
        <section>
          <h1 className="title is-3">BearMath</h1>
        </section>
        <br />
        <section>
          <ControlPanel />
        </section>
        <br />
        <section>
          <ValueBank />
        </section>,
      </div>
    );
  }
}

export default MatrixGUI;
