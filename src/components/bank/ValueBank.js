import React, { Component } from 'react';
import { connect } from "react-redux"

import CreateMatrix from "components/createMatrix/CreateMatrix"
import BankWrapper from "components/bank/BankWrapper"

import RichMatrix from "components/bank/RichMatrix"
import Tuple from "components/bank/Tuple"
import RichScalar from "components/bank/RichScalar"


class MatrixBank extends Component {
  render() {
    return (
      <BankWrapper title="Workspace" createNew={<CreateMatrix />}>
        {this.props.workspaceValues.entrySeq().map(([k, v]) =>
          <div className="column is-narrow is-mobile" key={k}>
            {renderHelper(k, v)}
          </div>
        )}
      </BankWrapper>
    );
  }
}

const renderHelper = (name, [type, numerics]) => {
  switch (type) {
    case "SCALAR":
      return (<RichScalar name={name} numerics={numerics} />)
    case "NDARRAY":
      return (<RichMatrix name={name} numerics={numerics} edit clone delete />)
    case "TUPLE":
      return (<Tuple name={name} numerics={numerics} clone={true} delete />)
    default:
      return null
  }
}

function mapMatricesToProps(state) {
  return {
    workspaceValues: state.values
  }
}

export default connect(mapMatricesToProps)(MatrixBank);
