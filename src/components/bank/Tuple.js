import React from 'react';
import RichMatrix from "components/bank/RichMatrix"
import ResponsiveIcon from "components/common/ResponsiveIcon"

import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { deleteMatrix } from "actions/matrices"

class Tuple extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <div className="columns is-multiline">
                    {this.props.numerics.nameMatrixPairs.map(([name, ndarray]) =>
                        <div className="column" key={name}>
                            <RichMatrix numerics={ndarray} name={name} clone={this.props.clone} />
                        </div>
                    )}
                </div>
                <p>{this.props.name}</p>
                {this.props.delete && <span className="icon has-text-info" >
                    <ResponsiveIcon icon="fa-trash-alt" onClick={() => this.props.deleteMatrix(this.props.name)} title="Delete this tuple" />
                </span>}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteMatrix
    },
        dispatch)
}

export default connect(null, mapDispatchToProps)(Tuple)
