import React from 'react';
import PropTypes from 'prop-types'

class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }

  render() {
    return (
      <div>
        <div>
          {React.cloneElement(this.props.children[0], { onClick: this.toggleModal })}
        </div>

        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          title={this.props.children[1]}
        >
          {React.cloneElement(this.props.children[2], { toggle: this.toggleModal })}
        </Modal>
      </div>
    );
  }
}

const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">
            {children}
          </div>
        </section>
        <footer className="modal-card-foot">
        </footer>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  title: PropTypes.string
}

export default ModalWrapper;