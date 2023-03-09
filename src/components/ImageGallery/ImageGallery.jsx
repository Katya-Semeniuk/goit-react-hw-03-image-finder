import React, { Component } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import pictureApi from '../services/picture-api';

// import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    error: null,
    status: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.name;
    const nextName = this.props.name;

    if (prevName !== nextName || prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      pictureApi
        .fetchPicture(nextName)
        .then(({ hits, total, totalHits }) =>
          this.setState(prevState => ({
            status: 'resolved',
            pictures: [...prevState.pictures, ...hits],
          }))
        )
        .catch(error => this.setState({ error, status: 'rejectsd' }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('load more');
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { pictures, status, error, showModal } = this.state;

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejectsd') {
      return <p>{error.message}</p>;
    }

    if (status === 'resolved') {
      if (pictures.length > 0) {
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
            <button type="button" onClick={this.toggleModal}>
              Modal Button
            </button>
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <img src="" alt="" />
              </Modal>
            )}
          </>
        );
      }
    }
  }
}

export default ImageGallery;
