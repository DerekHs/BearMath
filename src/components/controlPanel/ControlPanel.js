import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { createMatrix } from "actions/matrices"
import Multiply from "components/controlPanel/operations/Multiply"

class ControlPanel extends Component {

  render() {
    return (
      <div className="box">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/a">Home</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/a" component={Multiply} />
          </div>
      </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    matrices: state.matrices
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createMatrix
    }, 
    dispatch)
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);