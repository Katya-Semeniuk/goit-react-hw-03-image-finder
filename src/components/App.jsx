import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import pictureApi from '../services/picture-api';
import { ToastContainer } from 'react-toastify';
// import PropTypes from 'prop-types';

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { pictures, status, error, showModal } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'pending' && <Loader />}
        {status === 'rejectsd' && <p>{error.message}</p>}
        {status === 'resolved' && pictures.length > 0 && (
          <ImageGallery pictures={pictures}>
            <button type="button" onClick={this.toggleModal}>
              Modal Button
            </button>
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <img src="" alt="" />
              </Modal>
            )}
          </ImageGallery>
        )}
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

export default App;
