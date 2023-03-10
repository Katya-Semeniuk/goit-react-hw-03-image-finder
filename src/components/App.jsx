import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import pictureApi from '../services/picture-api';
import { ToastContainer } from 'react-toastify';
// import * as basicLightbox from 'basiclightbox';
// import PropTypes from 'prop-types';

// const instance = basicLightbox.create(document.querySelector('template'));

class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    error: null,
    status: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ status: 'pending' });
      pictureApi
        .fetchPicture(this.state.name)
        .then(({ hits, total, totalHits }) =>
          this.setState(prevState => ({
            status: 'resolved',
            pictures: [...prevState.pictures, ...hits],
          }))
        )
        .catch(error => this.setState({ error, status: 'rejectsd' }));
    }
  }

  handleFormSubmit = searchName => {
    this.setState({
      name: searchName,
      page: 1,
      pictures: [],
      error: null,
      status: '',
      showModal: false,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('load more');
  };

  openModal = () => {
    console.log('modal window is opened');
    this.setState({ showModal: true });
    // instance.show();
  };

  closeModal = () => {
    console.log('modal window is closed');
    this.setState({ showModal: false });
  };

  // toggleModal = () => {
  //   console.log('modal window');
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    const { name, pictures, status, error, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'pending' && <Loader />}
        {status === 'rejectsd' && <p>{error.message}</p>}
        {status === 'resolved' && pictures.length > 0 && (
          <ImageGallery pictures={pictures} onOpenModal={this.openModal}>
            {showModal && (
              <Modal onCloseModal={this.closeModal}>
                <img src="" alt="" />
              </Modal>
            )}
          </ImageGallery>
        )}

        {name !== '' && <Button onLoadMore={this.loadMore} />}
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

export default App;
