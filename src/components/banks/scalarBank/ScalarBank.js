import React, { Component } from 'react';
import { connect } from "react-redux"

import BankWrapper from "components/banks/BankWrapper"
import Scalar from "components/banks/scalarBank/Scalar"


class ScalarBank extends Component {
    render() {
        return (
            <BankWrapper title="Scalars">
                {this.props.matrixMap.entrySeq().map(([k, v]) =>
                    <div className="column is-narrow is-mobile" key={k}>
                        <Scalar value={v} scalarName={k} />
                    </div>
                )}
            </BankWrapper>
        );
    }
}

function mapMatricesToProps(state) {
    return {
        matrixMap: state.scalars
    }
}

export default connect(mapMatricesToProps)(ScalarBank);
