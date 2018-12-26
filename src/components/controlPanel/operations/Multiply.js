import React, { Component } from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import { createMatrix } from "actions/matrices"

class Multiply extends Component {

  render() {
    return (
      <div className="box">
        hello
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Multiply);