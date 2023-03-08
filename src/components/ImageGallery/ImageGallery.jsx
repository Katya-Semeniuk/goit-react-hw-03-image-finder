import React, { Component } from 'react';
import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import pictureApi from '../services/picture-api';

// import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    error: null,
    status: '',
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

  openModal = () => {};

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('load more');
  };

  render() {
    const { pictures, status, error } = this.state;

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
          </>
        );
      }
    }
  }
}

export default ImageGallery;
