import React from 'react';
import ModalWrapper from './ModalWrapper'
import InputGrid from './InputGrid'

class CreateMatrix extends React.Component {
  render() {
    return (
      <ModalWrapper>
        <button className="button is-primary">
          Create New Matrix
        </button>
        Create New Matrix
        <InputGrid initialRows={2} initialCols={2} />
      </ModalWrapper>
    )
  }
}

export default CreateMatrix;