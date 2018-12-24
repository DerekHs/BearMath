import React, { Component } from 'react';

import MatricesBank from "./matrices/MatricesBank"
import CreateMatrix from "./modal/CreateMatrix"

class App extends Component {

  render() {
    return (
      <div>
        <div className="box">
          <div className="container">
            <CreateMatrix/>
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
