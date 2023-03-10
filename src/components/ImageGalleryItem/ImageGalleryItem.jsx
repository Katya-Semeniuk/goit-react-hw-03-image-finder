import React from 'react';
import './ImageGalleryItem.css';
// import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, onOpenModal }) => {
  return (
    <li className="gallery_item">
      <img onClick={onOpenModal} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
