import React, { Component } from 'react';
import { connect } from "react-redux"

import Matrix from './Matrix';


class MatricesBank extends Component {

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

export default connect(mapStateToProps)(MatricesBank);
