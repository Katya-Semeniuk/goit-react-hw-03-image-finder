import React from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';

// import PropTypes from 'prop-types';

const ImageGallery = ({ pictures }) => {
  return (
    <>
      <ul className="gallery">
        {pictures.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              id={id}
            />
          );
        })}
      </ul>
      <Button onLoadMore={this.loadMore} />
    </>
  );
};

export default ImageGallery;
