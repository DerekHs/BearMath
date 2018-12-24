import React, { Component } from 'react';

import MatricesBank from "./matrices/MatricesBank"
import InputGrid from "./modal/InputGrid"

class App extends Component {

  render() {
    return (
      <div>
        <div className="box">
          <div className="container">
            <InputGrid initialRows={5} initialCols={6} />
          </div>
        </div>
        <div className="box">
          <div className="container">
            <MatricesBank/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
