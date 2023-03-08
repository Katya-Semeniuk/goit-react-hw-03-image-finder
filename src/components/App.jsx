import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: [],
    error: null,
    status: '',
  };

  handleFormSubmit = searchName => {
    this.setState({
      name: searchName,
      page: 1,
      pictures: [],
      error: null,
      status: '',
    });
  };
  render() {
    const { name, page, pictures, error, status } = this.state;
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          name={name}
          page={page}
          pictures={pictures}
          error={error}
          status={status}
        />
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

export default App;
