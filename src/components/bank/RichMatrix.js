import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { deleteMatrix } from "actions/matrices"

import ModalWrapper from "components/common/ModalWrapper"
import InputGrid from "components/common/InputGrid"
import ResponsiveIcon from "components/common/ResponsiveIcon"
import Matrix from "components/common/Matrix"

class RichMatrix extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <Matrix numerics={this.props.numerics} />
                {this.props.name}
                <br />
                {this.props.edit && <span className="icon has-text-info" >
                    <ModalWrapper>
                        <ResponsiveIcon icon="fa-edit" title="Edit the matrix in place" />
                        {`edit ${this.props.name}`}
                        <InputGrid ndarray={this.props.numerics} matrixName={this.props.name} edit />
                    </ModalWrapper>
                </span>}
                {this.props.clone && <span className="icon has-text-info" >
                    <ModalWrapper>
                        <ResponsiveIcon icon="fa-clone" title="Create a duplicate of this matrix" />
                        {`clone ${this.props.matrixName}`}
                        <InputGrid ndarray={this.props.numerics} matrixName={this.props.name} clone />
                    </ModalWrapper>
                </span>}
                {this.props.delete && <span className="icon has-text-info" >
                    <ResponsiveIcon icon="fa-trash-alt" onClick={() => this.props.deleteMatrix(this.props.name)} title="Delete this matrix" />
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

export default connect(null, mapDispatchToProps)(RichMatrix);
