import React from 'react';

import ModalWrapper from "components/common/ModalWrapper"
import Matrix from "components/common/Matrix"
import InputGrid from "components/common/InputGrid"

class EditableMatrix extends React.Component {
    render() {
        return (
            <ModalWrapper>
                <Matrix {...props} onClick={this.props.onClick} />
                {this.props.name}
                <InputGrid {...props} edit />
            </ModalWrapper>
        )
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(EditableMatrix);

export default EditableMatrix
