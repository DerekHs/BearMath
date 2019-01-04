import React from 'react';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import { deleteMatrix } from "actions/matrices"
import Matrix from "components/common/Matrix"
import ModalWrapper from "components/common/ModalWrapper"
import InputGrid from "components/common/InputGrid"


class RichMatrix extends React.Component {
    render() {
        return (
            <div className="box has-text-centered">
                <Matrix data={this.props.data} />
                <div style={{ display: "flex", marginTop: "auto" }}>{this.props.matrixName}</div>
                <hr />
                <span className="icon has-text-info" >
                    <ModalWrapper>
                        <i className="fas fa-pencil-alt"></i>
                        {this.props.name}
                        <InputGrid data={this.props.data} matrixName={this.props.matrixName} edit />
                    </ModalWrapper>
                </span>
                <span className="icon has-text-info" >
                    <ModalWrapper>
                        <i className="fas fa-clone"></i>
                        {this.props.name}
                        <InputGrid data={this.props.data} matrixName={this.props.matrixName} clone />
                    </ModalWrapper>
                </span>
                <span className="icon has-text-info" >
                    <i className="fas fa-trash-alt"></i>
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
