import React from 'react';
import ModalWrapper from 'components/common/ModalWrapper'
import InputGrid from 'components/common/InputGrid'

class CreateMatrix extends React.Component {
  render() {
    return (
      <ModalWrapper>
        <button className="button is-primary">
          Create New Matrix
        </button>
        Create New Matrix
        <InputGrid initialRows={2} initialCols={2} create />
      </ModalWrapper>
    )
  }
}

export default CreateMatrix;