import React from 'react';
import './Modal.css';
// import PropTypes from 'prop-types';

const Modal = ({largeImageURL}) => { 
    return (
<div className='overlay'>
  <div className='modal'>
    <img src={largeImageURL} alt="" />
  </div>
</div>
    )
};

export default Modal;