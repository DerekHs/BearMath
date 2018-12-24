import React from 'react';
import PropTypes from 'prop-types'

class CreateEditModal extends React.Component {
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
    return(
        <div className="container">
          <div className="has-text-centered content">
            <button className="button is-primary" onClick={this.toggleModal}>
              Open Modal
            </button>
          </div>
          
          <Modal 
            closeModal={this.toggleModal} 
            modalState={this.state.modalState} 
            title="Example modal title"
          >
            <p>hello</p>
          </Modal>
        </div>
    );
  }
}

const Modal = ({ children, closeModal, modalState, title }) => {
  if(!modalState) {
    return null;
  }
  
  return(
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
          <button className="button" onClick={closeModal}>Cancel</button>
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

export default CreateEditModal;