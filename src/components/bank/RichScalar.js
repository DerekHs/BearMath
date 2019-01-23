import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { deleteMatrix } from "actions/matrices"

import ModalWrapper from "components/common/ModalWrapper"
import InputGrid from "components/common/InputGrid"
import ResponsiveIcon from "components/common/ResponsiveIcon"
import Scalar from "components/common/Scalar"

class RichScalar extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <Scalar numerics={this.props.numerics} />
                {this.props.name}
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

export default connect(null, mapDispatchToProps)(RichScalar);
