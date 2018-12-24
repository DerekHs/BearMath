import React, { Component } from 'react';

import MatricesBank from "./matrices/MatricesBank"
import CreateEditModal from "./modal/CreateEditModal.js"

class App extends Component {

  render() {
    return (
      <div>
        <div className="box">
          <div className="container">
            <CreateEditModal/>
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
