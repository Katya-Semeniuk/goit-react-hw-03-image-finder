import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    name: '',
  };

  handleFormSubmit = searchName => {
    this.setState({
      name: searchName,
    });
  };
  render() {
    // const { name } = this.state;
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
        <ImageGallery />
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

export default App;
