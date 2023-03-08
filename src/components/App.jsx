import React, { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
// import PropTypes from 'prop-types';

class App extends Component {
  // state = {
  //   name: '',
  // };

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
        <ImageGallery />
        <ToastContainer autoClose={3000} theme="colored" />
      </div>
    );
  }
}

export default App;
