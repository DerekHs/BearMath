import React from 'react';

import ModalWrapper from "components/common/ModalWrapper"
import Matrix from "components/common/Matrix"
import InputGrid from "components/common/InputGrid"

class EditableMatrix extends React.Component {
    render() {
        return (
            <ModalWrapper>
                <Matrix data={this.props.data} name={this.props.name} onClick={this.props.onClick} />
                {this.props.name}
                <InputGrid data={this.props.data} matrixName={this.props.name} edit />
            </ModalWrapper>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(EditableMatrix);

export default EditableMatrix
