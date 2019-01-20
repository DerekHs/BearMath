import React, { Component } from 'react';
import { connect } from "react-redux"

import BankWrapper from "components/banks/BankWrapper"
import CompositeMatrix from "components/banks/compositeBank/CompositeMatrix"


class CompositeBank extends Component {

    render() {
        return (
            <BankWrapper title="Composite Matrices">
                {
                    this.props.compositeMap.entrySeq().map(([k, v]) =>
                        <div className="column is-narrow" key={k}>
                            <CompositeMatrix composite={v} matrixName={k} />
                        </div>
                    )
                }
            </BankWrapper >
        );
    }
}

function mapStateToProps(state) {
    return {
        compositeMap: state.composites
    }
}

export default connect(mapStateToProps)(CompositeBank);
