import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';

import Button from './Button/Button';
import pictureApi from '../services/picture-api';

class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    error: null,
    status: '',
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
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    console.log('load more');
  };

  render() {
    const { name, pictures, status, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === 'pending' && <Loader />}
        {status === 'rejectsd' && <p>{error.message}</p>}
        {status === 'resolved' && pictures.length > 0 && (
          <ImageGallery pictures={pictures} />
        )}
        {name !== '' && <Button onLoadMore={this.loadMore} />}
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

export default App;
