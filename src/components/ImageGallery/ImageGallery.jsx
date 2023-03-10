import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

// import PropTypes from 'prop-types';

const ImageGallery = ({ pictures, onOpenModal }) => {
  return (
    <>
      <ul className="gallery">
        {pictures.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              onOpenModal={onOpenModal}
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              id={id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;
