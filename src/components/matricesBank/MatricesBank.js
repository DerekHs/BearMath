import React, { Component } from 'react';
import { connect } from "react-redux"

import CreateMatrix from "components/createMatrix/CreateMatrix"
import RichMatrix from 'components/matricesBank/RichMatrix';


class MatricesBank extends Component {

  render() {
    return (
      <div>
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <h2 className="subtitle is-3">Matrices </h2>
            </div>
            <div className="level-item">
              <CreateMatrix />
            </div>
          </div>
        </nav>
        <div className="box">
          <div className="columns is-multiline">
            {this.props.matrices.entrySeq().map(([k, v]) =>
              <div className="column is-narrow is-mobile" key={k}>
                <RichMatrix
                  numericValues={v.buffer().values}
                  shape={v.shape}
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
