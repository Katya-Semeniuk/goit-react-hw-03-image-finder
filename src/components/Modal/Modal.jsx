import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';
// import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillMount() {
    console.log(' modal componentWillMount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      console.log('close please modal');
    }
  };

  handleBackdropClick = e => {
    // console.log('куди клацнули', e.target);
    // console.log('на чому спрацював обробник', e.currentTarget);
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
