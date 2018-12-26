import React, { Component } from 'react';
import { connect } from "react-redux"

import Matrix from 'components/matrices/Matrix';


class MatricesBank extends Component {

  render() {
    return (
      <div>
        <h1>Matrix Bank</h1>
        <div className="box">
          <div className="columns is-multiline">
            {this.props.matrices.entrySeq().map(([k, v]) =>
              <div className="column is-narrow" key={k}>
                <Matrix 
                  data={v}
                  name={k}
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
