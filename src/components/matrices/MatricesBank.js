import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from "react-redux"

import Matrix from './Matrix';
import { createMatrix } from "../../actions/matrices"

class MatricesBank extends Component {
  componentDidMount() {
    this.props.createMatrix("foo", [1,3], [1, 2, 3])
    this.props.createMatrix("bar", [3,1], [4, 5, 6])
  }

  render() {
    return (
      <div className="container is-fluid">
        <div className="columns is-multiline">
          {this.props.matrices.entrySeq().map(([k, v]) => 
            <Matrix 
              data={v}
              name={k}
              key={k}
            />
          )}
        </div>
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MatricesBank);
