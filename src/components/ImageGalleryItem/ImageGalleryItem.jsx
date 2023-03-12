import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';
// import * as basicLightbox from 'basiclightbox';
import Modal from '../Modal/Modal';

// const instance = basicLightbox.create(document.querySelector('template'));
// instance.show();

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <li onClick={this.toggleModal} className="gallery_item">
          <img src={webformatURL} alt="" />
        </li>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number,
};

export default ImageGalleryItem;
