import React, { Component } from 'react';
import { connect } from "react-redux"

import RichMatrix from 'components/matricesBank/RichMatrix';


class MatricesBank extends Component {

  render() {
    return (
      <div>
        <h1>Matrix Bank</h1>
        <div className="box">
          <div className="columns is-multiline">
            {this.props.matrices.entrySeq().map(([k, v]) =>
              <div className="column is-narrow is-mobile" key={k}>
                <RichMatrix
                  ndarray={v}
                  matrixName={k}
                  key={k}
                />
              </div>
            )}
          </div>
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
