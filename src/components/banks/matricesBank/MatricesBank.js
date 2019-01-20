import React, { Component } from 'react';
import { connect } from "react-redux"

import CreateMatrix from "components/createMatrix/CreateMatrix"
import RichMatrix from 'components/banks/matricesBank/RichMatrix';
import BankWrapper from "components/banks/BankWrapper"


class MatrixBank extends Component {
  render() {
    return (
      <BankWrapper title="Matrices" createNew={<CreateMatrix />}>
        {this.props.matrixMap.entrySeq().map(([k, v]) =>
          <div className="column is-narrow is-mobile" key={k}>
            <RichMatrix
              ndarray={v}
              matrixName={k}
              key={k}
            />
          </div>
        )}
      </BankWrapper>
    );
  }
}

function mapMatricesToProps(state) {
  return {
    matrixMap: state.matrices
  }
}

export default connect(mapMatricesToProps)(MatrixBank);
