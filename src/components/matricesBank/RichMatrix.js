import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { deleteMatrix } from "actions/matrices"
import Matrix from "components/common/Matrix"
import ModalWrapper from "components/common/ModalWrapper"
import InputGrid from "components/common/InputGrid"
import ResponsiveIcon from "components/common/ResponsiveIcon"

class RichMatrix extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <Matrix ndarray={this.props.ndarray} />
                {this.props.matrixName}
                <br />
                <span className="icon has-text-info" >
                    <ModalWrapper>
                        <ResponsiveIcon icon="fa-edit" title="Edit the matrix in place" />
                        {this.props.name}
                        <InputGrid ndarray={this.props.ndarray} matrixName={this.props.matrixName} edit />
                    </ModalWrapper>
                </span>
                <span className="icon has-text-info" >
                    <ModalWrapper>
                        <ResponsiveIcon icon="fa-clone" title="Create a duplicate of this matrix" />
                        {this.props.name}
                        <InputGrid ndarray={this.props.ndarray} matrixName={this.props.matrixName} clone />
                    </ModalWrapper>
                </span>
                <span className="icon has-text-info" >
                    <ResponsiveIcon icon="fa-trash-alt" onClick={() => this.props.deleteMatrix(this.props.matrixName)} title="Delete this matrix" />
                </span>
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
